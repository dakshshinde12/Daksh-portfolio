export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  description: string;
  extendedDetails?: string[];
  keyHighlights: string[];
  technologies: string[];
  outcome: string;
  visualType: 'telemetry' | 'enso';
}

export interface SkillItem {
  index: string;
  title: string;
  status: 'LEARNING' | 'DEVELOPING' | 'EXPLORING' | 'PRACTICING';
  tags: string;
  description?: string;
}

export interface MilestoneItem {
  index: string;
  title: string;
  description: string;
  tag: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'CORE';
}

export interface FocusAreaItem {
  index: string;
  title: string;
  description: string;
  details: string[];
  tools: string[];
}

export interface BeyondCodeDimension {
  index: string;
  title: string;
  subtitle: string;
  spanCol?: boolean;
}
