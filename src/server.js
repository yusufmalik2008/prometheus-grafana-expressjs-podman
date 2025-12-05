const express = require('express');
const client = require('prom-client');
const responseTime = require('response-time');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable default metrics (CPU, memory, event loop, GC, etc.)
client.collectDefaultMetrics({ timeout: 5000 });

// Custom metrics
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
});

// Middleware to track response time and count requests
app.use(
  responseTime((req, res, time) => {
    const route = req.route ? req.route.path : req.path;
    const status = res.statusCode;

    httpRequestsTotal.labels(req.method, route, status).inc();
    httpRequestDuration.labels(req.method, route, status).observe(time / 1000);
  })
);

// Serve Tailwind dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

// Serve static files (optional for future CSS/JS)
app.use(express.static('public'));

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Sample routes
app.get('/', (req, res) => {
  // Simulate load
  const delay = Math.random() * 1500;
  setTimeout(() => {
    res.send(`
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-indigo-700 mb-8">Monitoring App is Running!</h1>
          <a href="/dashboard" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg">
            Open Live Dashboard
          </a>
        </div>
      </div>
    `);
  }, delay);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from monitored API!', time: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express app running on http://localhost:${PORT}`);
  console.log(`Dashboard: http://localhost:${PORT}/dashboard`);
  console.log(`Metrics:   http://localhost:${PORT}/metrics`);
});
