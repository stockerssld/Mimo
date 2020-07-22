import { Component, OnInit } from '@angular/core';
import { Project } from './../../models/project.mode';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  exampleCards: Project[]=[
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '50'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '0'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '0'
        },{
          number: 2,
          title:'we personal, Welcome Home',
          progress: '0'
        }
      ]
    },
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '90.34'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '10'
        }
      ]
    },
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '90.34'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '10'
        }
      ]
    },
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '90.34'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '10'
        }
      ]
    },
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '90.34'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '10'
        }
      ]
    },
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '90.34'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '10'
        }
      ]
    },
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web',
      Chapter:[
        {
          number: 1,
          title:'Your personal, Home page',
          progress: '90.34'
        },
        {
          number: 2,
          title:'we personal, Welcome Home',
          progress: '10'
        }
      ]
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
