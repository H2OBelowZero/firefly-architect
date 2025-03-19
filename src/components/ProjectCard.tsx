
import React from "react";
import { FileIcon, Building2, Calendar, User, ClipboardCheck } from "lucide-react";

interface ProjectCardProps {
  name: string;
  clientName: string;
  buildingType: string;
  lastEdited: string;
  complianceScore: number;
  status: "draft" | "review" | "approved" | "rejected";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  clientName,
  buildingType,
  lastEdited,
  complianceScore,
  status
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case "draft":
        return <span className="badge bg-muted text-muted-foreground">Draft</span>;
      case "review":
        return <span className="badge badge-primary">In Review</span>;
      case "approved":
        return <span className="badge badge-safety">Approved</span>;
      case "rejected":
        return <span className="badge badge-fire">Rejected</span>;
      default:
        return null;
    }
  };

  const getComplianceColor = () => {
    if (complianceScore >= 90) return "text-safety";
    if (complianceScore >= 70) return "text-amber-500";
    return "text-fire";
  };

  return (
    <div className="glass-card p-5 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 rounded-md bg-primary/10 mr-3">
            <FileIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{clientName}</p>
          </div>
        </div>
        {getStatusBadge()}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>{buildingType}</span>
        </div>
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Last edited: {lastEdited}</span>
        </div>
        <div className="flex items-center text-sm">
          <ClipboardCheck className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>
            Compliance: <span className={getComplianceColor()}>{complianceScore}%</span>
          </span>
        </div>
      </div>

      <div className="flex justify-between pt-3 border-t border-border">
        <button className="btn-secondary text-xs h-8 px-3">View Project</button>
        <button className="btn-primary text-xs h-8 px-3">Continue Editing</button>
      </div>
    </div>
  );
};

export default ProjectCard;
