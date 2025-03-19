
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building, Users, MapPin, FileText, Clipboard, Check } from "lucide-react";

const ProjectWizard = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    setStep(Math.min(step + 1, totalSteps));
  };

  const prevStep = () => {
    setStep(Math.max(step - 1, 1));
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-fire flex items-center justify-center">
              <span className="font-bold text-white">FP</span>
            </div>
            <span className="font-bold text-lg">FirePlan</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <button className="btn-secondary text-sm">Save as Draft</button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <div
                    className={`h-1 w-full ${
                      index < step ? "bg-fire" : "bg-border"
                    }`}
                  ></div>
                )}
                <div
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    index + 1 === step
                      ? "border-fire text-fire bg-fire/10"
                      : index + 1 < step
                      ? "border-fire bg-fire text-white"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  {index + 1 < step ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-2">
            <div className="text-sm font-medium">Project Details</div>
            <div className="text-sm font-medium">Building Classification</div>
            <div className="text-sm font-medium">Floor Plan</div>
            <div className="text-sm font-medium">Compliance Check</div>
          </div>
        </div>
        
        {/* Wizard Content */}
        <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <p className="text-muted-foreground mb-6">
                Enter the basic information about the fire plan project.
              </p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="projectName" className="text-sm font-medium">
                    Project Name
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="projectName"
                      type="text"
                      className="input-field pl-10"
                      placeholder="Enter project name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="clientName" className="text-sm font-medium">
                    Client Name / Organization
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      id="clientName"
                      type="text"
                      className="input-field pl-10"
                      placeholder="Enter client or organization name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <input
                        id="location"
                        type="text"
                        className="input-field pl-10"
                        placeholder="Enter project location"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="municipality" className="text-sm font-medium">
                      Municipality
                    </label>
                    <select id="municipality" className="input-field">
                      <option value="">Select municipality</option>
                      <option value="cpt">Cape Town</option>
                      <option value="jhb">Johannesburg</option>
                      <option value="dbn">Durban</option>
                      <option value="pta">Pretoria</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    className="input-field min-h-[120px]"
                    placeholder="Enter a brief description of the project"
                  ></textarea>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Building Classification</h2>
              <p className="text-muted-foreground mb-6">
                Specify the building type and occupancy details to determine applicable SANS requirements.
              </p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="buildingType" className="text-sm font-medium">
                    Building Type
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <select id="buildingType" className="input-field pl-10">
                      <option value="">Select building type</option>
                      <option value="A1">A1 - Entertainment and Public Assembly</option>
                      <option value="A2">A2 - Theatrical and Indoor Sport</option>
                      <option value="A3">A3 - Places of Instruction</option>
                      <option value="A4">A4 - Worship</option>
                      <option value="B1">B1 - High Risk Commercial Service</option>
                      <option value="B2">B2 - Moderate Risk Commercial Service</option>
                      <option value="B3">B3 - Low Risk Commercial Service</option>
                      <option value="C1">C1 - Exhibition Hall</option>
                      <option value="C2">C2 - Museum</option>
                      <option value="D1">D1 - High Risk Industrial</option>
                      <option value="D2">D2 - Moderate Risk Industrial</option>
                      <option value="D3">D3 - Low Risk Industrial</option>
                      <option value="D4">D4 - Plant Room</option>
                      <option value="E1">E1 - Place of Detention</option>
                      <option value="E2">E2 - Hospital</option>
                      <option value="E3">E3 - Other Institutional (Residential)</option>
                      <option value="F1">F1 - Large Shop</option>
                      <option value="F2">F2 - Small Shop</option>
                      <option value="F3">F3 - Wholesaler's Store</option>
                      <option value="G1">G1 - Offices</option>
                      <option value="H1">H1 - Hotel</option>
                      <option value="H2">H2 - Dormitory</option>
                      <option value="H3">H3 - Domestic Residence</option>
                      <option value="H4">H4 - Dwelling House</option>
                      <option value="J1">J1 - High Risk Storage</option>
                      <option value="J2">J2 - Moderate Risk Storage</option>
                      <option value="J3">J3 - Low Risk Storage</option>
                      <option value="J4">J4 - Parking Garage</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="stories" className="text-sm font-medium">
                      Number of Stories
                    </label>
                    <input
                      id="stories"
                      type="number"
                      min="1"
                      className="input-field"
                      placeholder="Enter number of stories"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="totalArea" className="text-sm font-medium">
                      Total Floor Area (m²)
                    </label>
                    <input
                      id="totalArea"
                      type="number"
                      min="0"
                      className="input-field"
                      placeholder="Enter total floor area"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="occupancyLoad" className="text-sm font-medium">
                    Maximum Occupancy Load
                  </label>
                  <input
                    id="occupancyLoad"
                    type="number"
                    min="1"
                    className="input-field"
                    placeholder="Enter maximum number of occupants"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fire Protection Features</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        id="sprinklers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                      />
                      <label htmlFor="sprinklers" className="text-sm">
                        Automatic Sprinkler System
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="fireAlarm"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                      />
                      <label htmlFor="fireAlarm" className="text-sm">
                        Fire Alarm System
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="smokeControl"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                      />
                      <label htmlFor="smokeControl" className="text-sm">
                        Smoke Control System
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="fireRatedWalls"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                      />
                      <label htmlFor="fireRatedWalls" className="text-sm">
                        Fire Rated Compartmentation
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Floor Plan Import</h2>
              <p className="text-muted-foreground mb-6">
                Upload architectural drawings or CAD files to use as the base for your fire plan.
              </p>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium mb-2">Drag and drop files here</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Supported formats: DWG, DXF, PDF, JPG, PNG
                  </p>
                  <button className="btn-secondary text-sm">Browse Files</button>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary">
                  <h3 className="font-medium mb-2">Uploaded Files</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-background p-3 rounded-md">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="text-sm">First_Floor_Plan.dwg</span>
                      </div>
                      <button className="text-red-500 hover:text-red-700">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="floorNames" className="text-sm font-medium">
                    Floor Names (one per line)
                  </label>
                  <textarea
                    id="floorNames"
                    className="input-field min-h-[80px]"
                    placeholder="Ground Floor&#10;First Floor&#10;Second Floor"
                  ></textarea>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Auto-Detection Options</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        id="detectWalls"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                        defaultChecked
                      />
                      <label htmlFor="detectWalls" className="text-sm">
                        Auto-detect walls and partitions
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="detectDoors"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                        defaultChecked
                      />
                      <label htmlFor="detectDoors" className="text-sm">
                        Auto-detect doors and openings
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="detectStairs"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-fire focus:ring-fire"
                        defaultChecked
                      />
                      <label htmlFor="detectStairs" className="text-sm">
                        Auto-detect stairs and vertical circulation
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Initial Compliance Check</h2>
              <p className="text-muted-foreground mb-6">
                Based on the information provided, here's an initial compliance assessment.
              </p>
              
              <div className="glass-card p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">SANS 10400-T Compliance Overview</h3>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Compliance Score:</span>
                    <span className="badge badge-safety">92%</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-safety/10 border border-safety/20">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-safety mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-medium text-sm">Occupancy Classification</h4>
                        <p className="text-xs text-muted-foreground">
                          Building classification correctly identified as per SANS 10400-T
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-safety/10 border border-safety/20">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-safety mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-medium text-sm">Fire Separation</h4>
                        <p className="text-xs text-muted-foreground">
                          Required fire compartmentation for this occupancy type is defined
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-amber-100 border border-amber-200">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm">Escape Routes</h4>
                        <p className="text-xs text-muted-foreground">
                          Travel distances need to be verified during floor plan annotation
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-fire/10 border border-fire/20">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-fire mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm">Fire Detection System</h4>
                        <p className="text-xs text-muted-foreground">
                          Fire detection system needs to be designed for this occupancy type
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">SANS 10400-W Compliance Overview</h3>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Compliance Score:</span>
                    <span className="badge badge-amber-500">85%</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-safety/10 border border-safety/20">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-safety mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-medium text-sm">Water Supply Requirements</h4>
                        <p className="text-xs text-muted-foreground">
                          Water supply requirements identified based on building size and type
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-amber-100 border border-amber-200">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm">Pressure Requirements</h4>
                        <p className="text-xs text-muted-foreground">
                          Water pressure calculations need to be completed during design phase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary mb-6">
                <h3 className="font-medium mb-2">Next Steps</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Clipboard className="h-5 w-5 text-muted-foreground mt-0.5 mr-2" />
                    <p className="text-sm">
                      Complete floor plan annotation with fire safety elements
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Clipboard className="h-5 w-5 text-muted-foreground mt-0.5 mr-2" />
                    <p className="text-sm">
                      Design fire detection and suppression systems
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Clipboard className="h-5 w-5 text-muted-foreground mt-0.5 mr-2" />
                    <p className="text-sm">
                      Plan evacuation routes and verify compliance with travel distances
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={prevStep}
              className={`btn-secondary flex items-center ${
                step === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </button>
            
            <button
              onClick={nextStep}
              className={`btn-primary bg-fire text-white hover:bg-fire/90 flex items-center ${
                step === totalSteps ? "hidden" : ""
              }`}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            {step === totalSteps && (
              <Link
                to="/dashboard"
                className="btn-primary bg-fire text-white hover:bg-fire/90 flex items-center"
              >
                Create Project
                <Check className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectWizard;
