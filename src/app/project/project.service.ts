import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
  {
    id: 1,
    code: 'NHusYJl',
    name: 'Progetto Alpha',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2021, 1, 30),
    end: new Date(2021, 3, 15),
    priority: 'medium',
    done: true,
    task: []
  },
  {
    id: 2,
    code: 'SJieYKL',
    name: 'Progetto Beta',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 3, 30),
    end: new Date(2019, 6, 15),
    priority: 'low',
    done: true,
    task: []
  },
  {
    id: 3,
    code: 'POjeGBs',
    name: 'Progetto Gamma',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 8, 15),
    priority: 'low',
    done: false,
    task: []
  }
  ];

  constructor() { }

  getAll(): Project[] {
    return this.projects;
  }

  add(project: Project): void {
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      task: []
    });
  }

  get(id: number): Project {
    return this.projects.find(project => project.id === id) as Project;
  }

}
