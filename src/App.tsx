import React, { useState } from 'react';
import { 
  Lightbulb, 
  Users, 
  BarChart, 
  AlertCircle, 
  Workflow, 
  Target,
  ArrowRight,
  ArrowDown,
  RotateCcw,
  CheckCircle2,
  Calendar,
  ClipboardList,
  Brain,
  Compass,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Printer
} from 'lucide-react';

function App() {
  const [showSlideModal, setShowSlideModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const eosComponents = [
    {
      title: "Vision",
      icon: <Lightbulb size={32} className="text-yellow-500" />,
      description: "Defining where your organization is going and how it will get there",
      color: "bg-yellow-100 border-yellow-300",
      textColor: "text-yellow-800"
    },
    {
      title: "People",
      icon: <Users size={32} className="text-blue-500" />,
      description: "Getting the right people in the right seats",
      color: "bg-blue-100 border-blue-300",
      textColor: "text-blue-800"
    },
    {
      title: "Data",
      icon: <BarChart size={32} className="text-green-500" />,
      description: "Scorecard metrics to provide absolute clarity",
      color: "bg-green-100 border-green-300",
      textColor: "text-green-800"
    },
    {
      title: "Issues",
      icon: <AlertCircle size={32} className="text-red-500" />,
      description: "Process for identifying and addressing problems",
      color: "bg-red-100 border-red-300",
      textColor: "text-red-800"
    },
    {
      title: "Process",
      icon: <Workflow size={32} className="text-purple-500" />,
      description: "Documenting and simplifying core processes",
      color: "bg-purple-100 border-purple-300",
      textColor: "text-purple-800"
    },
    {
      title: "Traction",
      icon: <Target size={32} className="text-indigo-500" />,
      description: "Instilling discipline and accountability",
      color: "bg-indigo-100 border-indigo-300",
      textColor: "text-indigo-800"
    }
  ];

  const operationalFlowSteps = [
    {
      title: "Weekly Meeting",
      icon: <Calendar size={28} className="text-teal-500" />,
      description: "Review scorecards, discuss issues, set priorities for the week",
      color: "bg-teal-100",
      borderColor: "border-teal-300",
      textColor: "text-teal-800"
    },
    {
      title: "Issue Resolution",
      icon: <CheckCircle2 size={28} className="text-amber-500" />,
      description: "Identify, discuss, solve (IDS) core issues that arise",
      color: "bg-amber-100",
      borderColor: "border-amber-300",
      textColor: "text-amber-800"
    },
    {
      title: "Process Implementation",
      icon: <ClipboardList size={28} className="text-rose-500" />,
      description: "Follow documented processes for consistent execution",
      color: "bg-rose-100",
      borderColor: "border-rose-300",
      textColor: "text-rose-800"
    },
    {
      title: "Decision Making",
      icon: <Brain size={28} className="text-violet-500" />,
      description: "Align decisions with company vision and values",
      color: "bg-violet-100",
      borderColor: "border-violet-300",
      textColor: "text-violet-800"
    },
    {
      title: "Strategic Adjustment",
      icon: <Compass size={28} className="text-sky-500" />,
      description: "Verify alignment with long-term vision and make adjustments",
      color: "bg-sky-100",
      borderColor: "border-sky-300",
      textColor: "text-sky-800"
    },
    {
      title: "Quarterly Review",
      icon: <RotateCcw size={28} className="text-emerald-500" />,
      description: "Reset priorities and set new rocks for the coming quarter",
      color: "bg-emerald-100",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-800"
    }
  ];

  // Slide deck content
  const slides = [
    {
      title: "Introduction to EOS®",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto border-4 border-gray-200 mb-6">
            <h2 className="text-xl font-bold text-gray-800">EOS®</h2>
          </div>
          <h2 className="text-2xl font-bold mb-4">The Entrepreneurial Operating System®</h2>
          <p className="mb-4">A complete set of simple concepts and practical tools used by entrepreneurs to strengthen the six key components of their business.</p>
          <p>Over 100,000 companies use EOS tools to improve their performance and growth.</p>
        </div>
      )
    },
    {
      title: "The Six Key Components",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">The Six Key Components of EOS</h2>
          <div className="grid grid-cols-2 gap-4">
            {eosComponents.map((component, index) => (
              <div key={index} className={`p-4 rounded-lg ${component.color} border`}>
                <div className="flex items-center mb-2">
                  <div className="p-1 rounded-full bg-white shadow-sm mr-2">
                    {React.cloneElement(component.icon, { size: 24 })}
                  </div>
                  <h3 className={`font-bold ${component.textColor}`}>{component.title}</h3>
                </div>
                <p className="text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Integration Flow",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">EOS Integration Flow</h2>
          <div className="flex flex-col items-center">
            <div className="w-60 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center font-bold shadow-lg mb-4">
              <div className="flex items-center justify-center">
                <Sparkles size={20} className="mr-2" />
                <span>EOS Implementation</span>
              </div>
            </div>
            
            <ArrowDown size={24} className="text-gray-400 my-2" />
            
            <div className="grid grid-cols-2 gap-3 max-w-xl mb-4">
              {operationalFlowSteps.slice(0, 4).map((step, index) => (
                <div key={index} className={`${step.color} border ${step.borderColor} rounded-lg shadow-sm p-3 relative`}>
                  <div className="flex items-center mb-1">
                    <div className="p-1 rounded-full bg-white shadow-sm mr-2">
                      {React.cloneElement(step.icon, { size: 18 })}
                    </div>
                    <h3 className={`font-bold text-sm ${step.textColor}`}>{step.title}</h3>
                  </div>
                  <p className="text-xs">{step.description}</p>
                </div>
              ))}
            </div>
            
            <ArrowDown size={24} className="text-gray-400 my-2" />
            
            <div className="w-60 p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center font-bold shadow-lg">
              <div className="text-sm mb-1">Organizational Growth</div>
              <p className="text-xs font-normal">Consistent execution leading to predictable results</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Decision Making Framework",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">EOS Decision-Making</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-sm">1</span>
                Identify
              </h4>
              <p className="text-sm text-gray-700">Name the specific problem using data and observations.</p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-sm">2</span>
                Discuss
              </h4>
              <p className="text-sm text-gray-700">Analyze why the issue exists with all perspectives.</p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-sm">3</span>
                Solve
              </h4>
              <p className="text-sm text-gray-700">Determine the best solution aligned with vision.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Decision Validation Checklist:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-start">
                <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                <span>Aligns with company vision</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                <span>Supported by data</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                <span>Clear next steps defined</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                <span>Measurable outcomes identified</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Implementation Steps",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">EOS Implementation</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">Phase 1: Focus Day</h3>
              <p className="text-sm">Introduces key EOS tools to help leadership team begin to solve issues and become more cohesive.</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h3 className="font-bold text-indigo-800 mb-2">Phase 2: Vision Building</h3>
              <p className="text-sm">Two-day session where the leadership team creates a clear vision using the V/TO™ (Vision/Traction Organizer).</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-2">Phase 3: Quarterly Sessions</h3>
              <p className="text-sm">Regular pulse checks to ensure accountability and maintain momentum.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">Phase 4: Annual Planning</h3>
              <p className="text-sm">Refresh vision and set priorities for the coming year.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Benefits of EOS",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Implementing EOS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-800 mb-2">Vision Alignment</h3>
              <p className="text-sm">100% of your team aligned with your company's vision.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-800 mb-2">Accountability</h3>
              <p className="text-sm">Clear accountability in every seat of the organization.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-800 mb-2">Issue Resolution</h3>
              <p className="text-sm">Ability to solve any issue, once and for all.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-800 mb-2">Discipline</h3>
              <p className="text-sm">Instills focus, discipline, and accountability throughout.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-800 mb-2">Scalability</h3>
              <p className="text-sm">Creates a foundation for scalable growth.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold text-gray-800 mb-2">Data-Driven</h3>
              <p className="text-sm">Ensures decisions are based on objective metrics.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const navigateSlide = (direction) => {
    if (direction === 'next' && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (direction === 'prev' && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
      alert('Please allow popups for this website to download the slides.');
      return;
    }
    
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>EOS Model - Slide Deck</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
          @media print {
            .slide {
              page-break-after: always;
              height: 90vh;
              padding: 5%;
              position: relative;
            }
            .slide-content {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .slide-footer {
              position: absolute;
              bottom: 20px;
              left: 0;
              right: 0;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
          }
          body {
            font-family: 'Arial', sans-serif;
          }
          .print-button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #4F46E5;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        </style>
      </head>
      <body class="bg-gray-100">
        <div class="container mx-auto p-4">
          <h1 class="text-3xl font-bold text-center my-6">EOS Model Slide Deck</h1>
          <button class="print-button" onclick="window.print(); return false;">Print/Save as PDF</button>
          
          ${slides.map((slide, index) => `
            <div class="slide bg-white rounded-lg shadow-lg my-8 p-8">
              <div class="slide-content">
                <h2 class="text-2xl font-bold mb-6 text-center">${slide.title}</h2>
                ${printWindow.document.createElement('div').innerHTML = slide.content.props.children}
              </div>
              <div class="slide-footer">
                EOS Model Slide Deck - Page ${index + 1} of ${slides.length}
              </div>
            </div>
          `).join('')}
          
          <button class="print-button mb-12" onclick="window.print(); return false;">Print/Save as PDF</button>
        </div>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Auto-prompt print dialog after a short delay
            setTimeout(function() {
              window.print();
            }, 1000);
          });
        </script>
      </body>
      </html>
    `;
    
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The EOS Model</h1>
          <p className="text-xl text-gray-600">The Entrepreneurial Operating System® consists of six key components that must be managed and strengthened to be a great organization.</p>
          <button 
            onClick={() => setShowSlideModal(true)}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Download className="mr-2 h-5 w-5" />
            View & Download Slide Deck
          </button>
        </div>
        
        {/* Central EOS Hub */}
        <div className="relative mb-16">
          <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto border-4 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">EOS®</h2>
          </div>
          
          {/* Connector lines to each component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-2 border-dashed border-gray-300 opacity-50"></div>
          </div>
        </div>
        
        {/* EOS Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eosComponents.map((component, index) => (
            <div 
              key={index}
              className={`rounded-lg shadow-lg border-2 overflow-hidden transform transition-all duration-300 hover:scale-105 ${component.color}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-white shadow-md mr-4">
                    {component.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${component.textColor}`}>{component.title}</h3>
                </div>
                <p className="text-gray-700">{component.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* How They Work Together */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How These Components Work Together</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg mr-2">
                <Lightbulb size={24} className="text-yellow-500" />
              </div>
              <span className="font-medium">Vision</span>
            </div>
            
            <ArrowRight className="text-gray-400" />
            
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg mr-2">
                <Users size={24} className="text-blue-500" />
              </div>
              <span className="font-medium">People</span>
            </div>
            
            <ArrowRight className="text-gray-400" />
            
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg mr-2">
                <BarChart size={24} className="text-green-500" />
              </div>
              <span className="font-medium">Data</span>
            </div>
            
            <ArrowRight className="text-gray-400" />
            
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg mr-2">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <span className="font-medium">Issues</span>
            </div>
            
            <ArrowRight className="text-gray-400" />
            
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg mr-2">
                <Workflow size={24} className="text-purple-500" />
              </div>
              <span className="font-medium">Process</span>
            </div>
            
            <ArrowRight className="text-gray-400" />
            
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg mr-2">
                <Target size={24} className="text-indigo-500" />
              </div>
              <span className="font-medium">Traction</span>
            </div>
          </div>
        </div>
        
        {/* EOS Integration Flowchart */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How EOS Integrates Into Daily Operations</h2>
          
          <div className="relative">
            {/* The main flowchart */}
            <div className="flex flex-col items-center">
              {/* Top element - starts the flow */}
              <div className="w-64 p-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center font-bold shadow-lg mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles size={28} className="mr-2" />
                  <span className="text-xl">EOS Implementation</span>
                </div>
              </div>
              
              <ArrowDown size={32} className="text-gray-400 my-2" />
              
              {/* Cyclical workflow diagram */}
              <div className="relative mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                  {operationalFlowSteps.map((step, index) => (
                    <div key={index} className={`${step.color} border-2 ${step.borderColor} rounded-lg shadow-md p-4 relative transform transition-all duration-300 hover:scale-105`}>
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                        <span className="font-bold text-gray-700">{index + 1}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-full bg-white shadow-sm mr-3">
                          {step.icon}
                        </div>
                        <h3 className={`font-bold ${step.textColor}`}>{step.title}</h3>
                      </div>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Circular arrow to show the cyclic nature */}
                <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2">
                  <div className="p-3 rounded-full bg-gray-100 border-2 border-gray-300 shadow-md">
                    <RotateCcw size={32} className="text-gray-500" />
                  </div>
                </div>
              </div>
              
              <ArrowDown size={32} className="text-gray-400 my-2" />
              
              {/* Outcome */}
              <div className="w-80 p-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center font-bold shadow-lg">
                <div className="text-xl mb-2">Organizational Health & Growth</div>
                <p className="text-sm font-normal">Consistent execution leading to predictable results and sustainable growth</p>
              </div>
            </div>
            
            {/* Connection to EOS components - on the side */}
            <div className="hidden xl:block absolute left-0 top-1/3 transform -translate-x-full px-4">
              <div className="flex flex-col space-y-3">
                {eosComponents.map((component, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`p-1 rounded ${component.color.replace('border-', '')} mr-2`}>
                      {React.cloneElement(component.icon, { size: 18 })}
                    </div>
                    <span className="text-xs font-medium">{component.title}</span>
                    <ArrowRight size={14} className="text-gray-400 mx-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decision Making Framework */}
          <div className="bg-white rounded-lg shadow-xl p-6 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">EOS Decision-Making Framework</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-sm">1</span>
                  Identify the Issue
                </h4>
                <p className="text-sm text-gray-700">Name the specific problem or opportunity using data and observations.</p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-sm">2</span>
                  Discuss Root Causes
                </h4>
                <p className="text-sm text-gray-700">Analyze why the issue exists, exploring all perspectives and relevant data.</p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-2 text-sm">3</span>
                  Solve
                </h4>
                <p className="text-sm text-gray-700">Determine the best solution that aligns with company vision and values.</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Decision Validation Checklist:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                  <span>Aligns with company vision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                  <span>Supported by data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                  <span>Right people involved</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                  <span>Clear next steps defined</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                  <span>Measurable outcomes identified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5" />
                  <span>Documented for future reference</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-600">
          <p className="text-sm">The Entrepreneurial Operating System® (EOS®) is a complete set of simple concepts and practical tools used by entrepreneurs to strengthen the six key components of their business.</p>
        </div>
      </div>
      
      {/* Slide Deck Modal */}
      {showSlideModal && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Download size={20} className="mr-2 text-indigo-600" />
                  EOS Model Slide Deck
                </h3>
                <button
                  onClick={() => setShowSlideModal(false)}
                  className="rounded-md p-1 hover:bg-gray-200 focus:outline-none"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <div className="bg-white p-6 h-[60vh] overflow-y-auto">
                {slides[currentSlide].content}
              </div>
              
              <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Slide {currentSlide + 1} of {slides.length}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateSlide('prev')}
                    disabled={currentSlide === 0}
                    className={`px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
                      currentSlide === 0 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <ChevronLeft size={16} className="mr-1" />
                      Previous
                    </div>
                  </button>
                  
                  <button
                    onClick={() => navigateSlide('next')}
                    disabled={currentSlide === slides.length - 1}
                    className={`px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
                      currentSlide === slides.length - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      Next
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </button>
                  
                  <button
                    onClick={handlePrint}
                    className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <div className="flex items-center">
                      <Printer size={16} className="mr-1" />
                      Print/Download PDF
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;