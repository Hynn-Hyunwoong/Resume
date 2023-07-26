export interface Obj {
  object: string;
}

export interface Id {
  id: string;
}

export interface created_time {
  created_time: string;
}

export interface last_edited_time {
  last_edited_time: string;
}

export interface created_by {
  created_by: {
    object: Obj;
    id: string;
  };
}

export interface last_edited_by {
  last_edited_by: {
    object: Obj;
    id: string;
  };
}

export interface cover {
  cover: {
    type: string;
    external: [];
  };
}

export interface icon {
  icon: string;
}

export interface parent {
  parent: {
    type: string;
    database_id: string;
  };
}

export interface archived {
  archived: boolean;
}

export interface properties {
  properties: {
    'Keynote/Github': Object[];
    Description: Object[];
    WorkPeriod: Object[];
    DemoVideo: Object[];
    'Issue Resolve': Object[];
    주요역활: Object[];
    Issue: Object[];
    Tags: Object[];
    Name: Object[];
  };
}

export interface IProjectItem {
  data: {
    object: Obj;
    id: Id;
    created_time: created_time;
    last_edited_time: last_edited_time;
    created_by: created_by;
    last_edited_by: last_edited_by;
    cover: cover;
    icon: icon;
    parent: parent;
    archived: archived;
    properties: {
      'Keynote/Github': Object[];
      Description: Object[];
      WorkPeriod: Object[];
      DemoVideo: Object[];
      'Issue Resolve': Object[];
      주요역활: Object[];
      Issue: Object[];
      Tags: Object[];
      Name: Object[];
      Team: Object[];
    };
  };
}

/* 
Ttitle
description
tags
demoVideo
github
WorkPeriod
Issue
IssueResolve
*/
