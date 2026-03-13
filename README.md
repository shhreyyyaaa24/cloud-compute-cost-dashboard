# Cloud Cost Control Dashboard

A professional React-based dashboard for monitoring and managing cloud infrastructure costs across multiple providers (GCP, AWS, Azure). Features real-time CPU usage gauges, budget projections, and resource metrics.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shhreyyyaaa24/cloud-compute-cost-dashboard.git
   cd cloud-compute-cost-dashboard
   ```

2. **Navigate to the project directory**
   ```bash
   cd dummy-repo
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to: **http://localhost:5173**

## 📋 Available Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure
```
dummy-repo/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Main dashboard with tabs
│   │   ├── CloudCard.jsx      # Individual project cards
│   │   ├── GaugeChart.jsx     # CPU usage gauge component
│   │   └── NoticeBanner.jsx   # Notice banner component
│   ├── data/
│   │   └── cloudData.js       # Mock data for all cloud providers
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Features

### 📊 Dashboard Components
- **Multi-Cloud Support**: GCP, AWS, and Azure tabs with 15+ projects each
- **Real-time Gauges**: Semi-circular CPU usage indicators with color coding
- **Budget Tracking**: Three-tier budget status (Green/Yellow/Red)
- **Resource Metrics**: Active CPUs, VM Instances, K8s Instances
- **Owner Information**: Project ownership with visual badges

### 🎯 Interactive Elements
- **Tab Navigation**: Smooth switching between cloud providers
- **Hover Effects**: Card animations and transitions
- **Color-Coded Status**: Visual indicators for performance and budget
- **Responsive Design**: Adapts to different screen sizes

### 🌈 Visual Features
- **Glass Morphism**: Modern frosted glass effects
- **Gradient Backgrounds**: Professional color schemes
- **Dynamic Coloring**: CPU usage (0-40% Green, 40-70% Yellow, 70-100% Red)
- **Budget Indicators**: $0 (Green), $1-$500 (Yellow), $501+ (Red)

## 🔧 Configuration

### Environment Setup
The project uses Vite as the build tool with React and modern JavaScript.

### Dependencies
- **React**: UI framework
- **Recharts**: Chart library for gauge visualizations
- **Vite**: Build tool and development server

## 📱 Access Information

### Local Development
- **URL**: http://localhost:5173
- **Port**: 5173 (default Vite port)
- **Auto-reload**: Enabled during development

### Production Build
```bash
npm run build
npm run preview
```
Production preview will be available at: http://localhost:4173

## 🎨 Customization

### Adding New Projects
Edit `src/data/cloudData.js` to add or modify project information:

```javascript
{
  project: "Project Name",
  owner: "Owner Name",
  environment: "prod", // or "dev"
  cpuUsage: 45,
  activeCpus: 40,
  vmInstances: 11,
  k8Instances: 0,
  overBudget: "$250"
}
```

### Modifying Colors
Update the color schemes in `src/index.css` or component files to match your brand.

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   # Or use different port
   npm run dev -- --port 3000
   ```

2. **Dependencies not found**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   npm run lint
   # Fix any linting issues and rebuild
   npm run build
   ```

## 📄 License

This project is for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add and commit your changes
5. Push to the branch
6. Create a Pull Request

---

**Happy Coding! 🚀**

For any issues or questions, please refer to the project documentation or create an issue in the repository.
