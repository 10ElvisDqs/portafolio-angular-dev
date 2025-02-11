import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { Technology } from '../../../../core/interfaces/technology.interface';
interface Technology{
  name:string,
  icon:string,
  type?:string,
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkillsComponent implements OnInit{

  technologys:Technology[]=[
    {
      name:'python',
      icon:'https://www.vectorlogo.zone/logos/python/python-icon.svg',
      type: 'IA',
    },
    {
      name:'tensorflow',
      icon:'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
      type: 'IA',
    },
    {
      name:'opencv',
      icon:'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
      type: 'IA',
    },
    {
      name:'raspberrypi',
      icon:'https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg',
      type: 'IA',
    },
    {
      name:'microsoft_azure',
      icon:'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
      type: 'devops',
    },
    {
      name:'kubernetes',
      icon:'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
      type: 'devops',
    },
    {
      name:'google_cloud',
      icon:'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
      type: 'devops',
    },
    {
      name:'angular',
      icon:'https://images.ctfassets.net/zojzzdop0fzx/2LzaUqPdXBjtAbFTaDGbW0/a8b4fbfd6ccab7d6de4c3b0803a35ae5/angular_gradient.svg?fm=webp&w=256&q=75',
      type:'front-end'
    },
    {
      name:'springio',
      icon:'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
      type:'back-end',
    },
    {
      name:'pytorch',
      icon:'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
      type:'IA'
    },
    {
      name:'tailwindcss',
      icon:'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      type:'front-end',
    },
    {
      name:'laravel',
      icon:'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
      type:'back-end',
    },
    {
      name:'nuxtjs',
      icon:'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg',
      type:'front-end',
    },
    {
      name:'docker',
      icon:'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
      type:'back-end',
    },
    {
      name:'mysql',
      icon:'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
      type:'back-end',
    },
    {
      name:'postgresql',
      icon:'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
      type:'back-end',
    },
    {
      name:'nginx',
      icon:'https://img.icons8.com/?size=100&id=t2x6DtCn5Zzx&format=png&color=000000',
      type:'back-end',
    },
  ];
  constructor() {
    // Inicializar filteredTechnologies como una copia completa de technologys
    this.filteredTechnologies = [...this.technologys];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filteredTechnologies = this.technologys.filter(tech => tech.type === 'IA');

  }

  filteredTechnologies:Technology[] = [...this.technologys];

  filterByType(type:string):void{
    this.filteredTechnologies = this.technologys.filter(
      tech => tech.type === type
    );
    console.log(this.filteredTechnologies);
  }
 }
