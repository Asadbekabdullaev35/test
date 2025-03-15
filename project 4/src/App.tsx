import React, { useState, Suspense } from 'react';
import { Eye, ArrowRight, Twitter, MessageCircle, ChevronDown, X, Instagram, Pi as Pie } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function App() {
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleJoinBeta = () => {
    window.open('https://t.me/+UavL8qVkzVo4YzVk', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-xl z-50 border-b border-neon-green/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group hover:scale-105 transition-transform">
              <Eye className="w-6 h-6 text-neon-green neon-pulse group-hover:text-neon-blue transition-colors" />
              <span className="font-display text-xl font-bold tracking-tight text-white neon-glow group-hover:text-neon-blue transition-colors">Birdeye</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#roadmap" className="text-gray-400 hover:text-neon-green hover:scale-105 transition-all">Roadmap</a>
              <a href="#tokenomics" className="text-gray-400 hover:text-neon-green hover:scale-105 transition-all">Tokenomics</a>
              <a href="#features" className="text-gray-400 hover:text-neon-green hover:scale-105 transition-all">Features</a>
              <button 
                onClick={handleJoinBeta}
                className="bg-transparent border border-neon-green text-neon-green px-6 py-2 rounded-full hover:bg-neon-green/10 hover:scale-105 transition-all neon-box font-display"
              >
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-grid">
        {/* 3D Model Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <div className="w-full h-full">
              <Spline 
                scene="eye_bot (1).spline"
                style={{
                  transform: 'scale(1.2)',
                  filter: 'brightness(2)',
                  width: '100%',
                  height: '100vh',
                  opacity: '0.9'
                }}
              />
            </div>
          </Suspense>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Eye className="w-16 h-16 text-neon-green inline-block animate-float neon-pulse hover:text-neon-blue transition-colors" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-cyber-gradient neon-glow hover:scale-105 transition-transform">
              The Future of Auto-Trading
            </h1>
            <p className="text-xl text-gray-400 mb-8 font-light hover:text-gray-300 transition-colors">
              Experience the fastest and most reliable auto-trading bot for Solana & BNB Chain.
              <br />
              <span className="font-medium text-neon-green hover:text-neon-blue transition-colors">No coding needed. Pure profits.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleJoinBeta}
                className="w-full sm:w-auto bg-transparent border border-neon-green text-neon-green px-8 py-4 rounded-full hover:bg-neon-green/10 hover:scale-105 transition-all flex items-center justify-center space-x-2 group font-display neon-box"
              >
                <span>Join Beta Testing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://x.com/aibirdeye" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-green hover:scale-110 transition-all p-2 hover:bg-neon-green/10 rounded-full"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/aibirdeye" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-green hover:scale-110 transition-all p-2 hover:bg-neon-green/10 rounded-full"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@birdeye_ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-green hover:scale-110 transition-all p-2 hover:bg-neon-green/10 rounded-full"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 fill-current"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.48V7.1a4.79 4.79 0 01-1.2-.41z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-black matrix-grid">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16 text-neon-green neon-glow hover:scale-105 transition-transform">
            Tokenomics
          </h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Public Sale", value: "45%", color: "neon-green" },
              { label: "Liquidity Pool", value: "40%", color: "neon-blue" },
              { label: "Marketing", value: "10%", color: "neon-purple" },
              { label: "Development", value: "5%", color: "neon-green" },
              { label: "Transaction Tax", value: "1%", color: "neon-blue" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl bg-matrix-dark border border-${item.color}/20 hover:border-${item.color} transition-all duration-300 group hover:scale-105 flex flex-col items-center justify-center text-center neon-box`}
              >
                <Pie className={`w-12 h-12 mb-4 text-${item.color} group-hover:rotate-180 transition-transform duration-500`} />
                <h3 className={`font-display text-2xl font-bold mb-2 text-${item.color}`}>
                  {item.value}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-matrix-dark matrix-grid">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16 text-neon-green neon-glow hover:scale-105 transition-transform">
            Birdeye Project Roadmap (2025)
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-neon-green to-transparent transform -translate-x-1/2" />
              <div className="relative pl-8 border-l-4 border-neon-green rounded-3xl hover:scale-105 transition-transform neon-box">
                <h3 className="font-display text-2xl font-bold mb-4 text-white">Phase 1: Core Development (Q2 2025)</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2 group hover:text-neon-green transition-colors">
                    <span className="text-neon-green">✓</span>
                    <span>Telegram Bot with UI – Easy navigation via buttons</span>
                  </li>
                  <li className="flex items-center space-x-2 group hover:text-neon-green transition-colors">
                    <span className="text-neon-green">✓</span>
                    <span>Multi-Wallet Support – Connect or generate wallets</span>
                  </li>
                  <li className="flex items-center space-x-2 group hover:text-neon-green transition-colors">
                    <span className="text-neon-green">✓</span>
                    <span>Twitter-Based CA Tracking</span>
                  </li>
                  <li className="flex items-center space-x-2 group hover:text-neon-green transition-colors">
                    <span className="text-neon-green">✓</span>
                    <span>Instant Buy Execution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-8 border-l-4 border-neon-blue rounded-3xl hover:scale-105 transition-transform neon-box">
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Phase 2: Feature Expansion (Q3 2025)</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2 group hover:text-neon-blue transition-colors">
                  <span className="text-neon-blue">○</span>
                  <span>Ethereum Support – Adding Uniswap trading</span>
                </li>
                <li className="flex items-center space-x-2 group hover:text-neon-blue transition-colors">
                  <span className="text-neon-blue">○</span>
                  <span>AI Trade Execution</span>
                </li>
                <li className="flex items-center space-x-2 group hover:text-neon-blue transition-colors">
                  <span className="text-neon-blue">○</span>
                  <span>VIP Features</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-8 border-l-4 border-neon-purple rounded-3xl hover:scale-105 transition-transform neon-box">
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Phase 3: Full Automation (Q4 2025)</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2 group hover:text-neon-purple transition-colors">
                  <span className="text-neon-purple">□</span>
                  <span>Custom Sniper Mode</span>
                </li>
                <li className="flex items-center space-x-2 group hover:text-neon-purple transition-colors">
                  <span className="text-neon-purple">□</span>
                  <span>AI Auto-Buy</span>
                </li>
                <li className="flex items-center space-x-2 group hover:text-neon-purple transition-colors">
                  <span className="text-neon-purple">□</span>
                  <span>Cross-Chain Swaps & Arbitrage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => setShowRoadmap(true)}
              className="group inline-flex items-center text-neon-green hover:text-neon-blue hover:scale-105 transition-all font-medium font-display neon-glow"
            >
              <span>View Full Roadmap</span>
              <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-black matrix-grid">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16 text-neon-green neon-glow hover:scale-105 transition-transform">Why Choose Birdeye?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Chain Support",
                description: "Trade seamlessly across Solana, BNB Chain, and soon Ethereum"
              },
              {
                title: "AI-Powered Trading",
                description: "Let our advanced AI detect and execute profitable trades automatically"
              },
              {
                title: "Real-Time Alerts",
                description: "Stay informed with instant notifications for all your trading activities"
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-matrix-dark border border-neon-green/20 hover:border-neon-green hover:scale-105 transition-all duration-300 group neon-box">
                <h3 className="font-display text-xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neon-green/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 group hover:scale-105 transition-transform mb-4 md:mb-0">
              <Eye className="w-6 h-6 text-neon-green neon-pulse group-hover:text-neon-blue transition-colors" />
              <span className="font-display text-xl font-bold text-white neon-glow group-hover:text-neon-blue transition-colors">Birdeye</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://x.com/aibirdeye" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-neon-green hover:scale-110 transition-all p-2 hover:bg-neon-green/10 rounded-full"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/aibirdeye" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-neon-green hover:scale-110 transition-all p-2 hover:bg-neon-green/10 rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@birdeye_ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-neon-green hover:scale-110 transition-all p-2 hover:bg-neon-green/10 rounded-full"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-current"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.48V7.1a4.79 4.79 0 01-1.2-.41z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm hover:text-gray-400 transition-colors">
            © 2025 Birdeye. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Full Roadmap Modal */}
      {showRoadmap && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-matrix-dark rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 border border-neon-green/20 hover:border-neon-green transition-colors neon-box">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-3xl font-bold text-neon-green neon-glow">Complete Roadmap</h2>
              <button 
                onClick={() => setShowRoadmap(false)}
                className="p-2 hover:bg-neon-green/10 rounded-full transition-colors text-gray-400 hover:text-neon-green hover:scale-105"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-white">Future Expansion Goals</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">NFT Sniping – Get early access to trending collections</li>
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">Token Launchpad – Buy presale tokens directly</li>
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">Copy-Trading – Follow pro traders automatically</li>
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">More Chains – Expansion to Avalanche, Polygon, Arbitrum</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-white">Monetization Model</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">1% Trading Fee on transactions</li>
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">Premium Memberships for faster snipes & signals</li>
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">Referral Rewards for inviting users</li>
                  <li className="hover:text-neon-green hover:translate-x-2 transition-all">Token Staking to unlock premium features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;