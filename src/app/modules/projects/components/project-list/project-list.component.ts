import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';;
// import { Project } from '../../../../core/interfaces/project.interface';
interface Technology{
  name:string,
  icon:string,
  type?:string,
}
interface Project{
  title:string,
  imageUrl:string,
  type:string,
  description:string,
  technologies:Technology[];
};


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
  projects:Project[] = [
    {
      title: 'E-commerce con recomendación inteligente de productos',
      type: 'Frontend',
      imageUrl:'https://img-c.udemycdn.com/course/240x135/6247599_ded3.jpg',
      description: 'Una tienda en línea que sugiere productos a los usuarios en función de su historial de navegación o compras',
      technologies: [
        {
          name:'angular',
          icon:'https://images.ctfassets.net/zojzzdop0fzx/2LzaUqPdXBjtAbFTaDGbW0/a8b4fbfd6ccab7d6de4c3b0803a35ae5/angular_gradient.svg?fm=webp&w=256&q=75',
        },
        {
          name:'springio',
          icon:'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
        },
        {
          name:'pytorch',
          icon:'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
        },
        {
          name:'tailwindcss',
          icon:'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
        },
      ]
    },
    {
      title: 'Sistema de Gestión con Laravel & Nuxt',
      type: 'Backend',
      imageUrl:'https://img-c.udemycdn.com/course/240x135/6247599_ded3.jpg',
      description: 'Sistema de gestión con Laravel para la lógica backend y Nuxt para la vista frontend.',
      technologies: [
        {
          name:'laravel',
          icon:'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
        },
        {
          name:'nuxtjs',
          icon:'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg',
        },
      ]
    },
    {
      title: 'Dockerización con MySQL y PostgreSQL',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/240x135/6247599_ded3.jpg',
      description: 'Configuración de contenedores con Docker para aplicaciones web modernas.',
      technologies: [
        {
          name:'docker',
          icon:'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
        },
        {
          name:'mysql',
          icon:'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
        },
        {
          name:'postgresql',
          icon:'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
        },
        {
          name:'php',
          icon:'https://www.vectorlogo.zone/logos/php/php-icon.svg',
        },
      ]
    },
    {
      title: 'Dockerización con MySQL y PostgreSQL',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Configuración de contenedores con Docker para aplicaciones web modernas.',
      technologies: [
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/python/python-icon.svg',
        },
        {
          name:'tensorflow',
          icon:'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
        },
        {
          name:'opencv',
          icon:'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
        },
        {
          name:'raspberrypi',
          icon:'https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg',
        },
        {
          name:'microsoft_azure',
          icon:'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
        },
        {
          name:'kubernetes',
          icon:'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
        },
        {
          name:'google_cloud',
          icon:'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        },
      ]
    },
    {
      title: 'Sistema de autenticación por reconocimiento facial',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Una aplicación web donde los usuarios pueden iniciar sesión utilizando reconocimiento facial en lugar de una contraseña.',
      technologies: [
        {
          name:'nuxtjs',
          icon:'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg',
        },
        {
          name:'opencv',
          icon:'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
        },
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/python/python-icon.svg',
        },
        {
          name:'springio',
          icon:'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
        },
        {
          name:'angular',
          icon:'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        },
      ]
    },
    {
      title: 'Asistente virtual en tiempo real',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Una aplicación web con un chatbot inteligente que responde preguntas en tiempo real y puede procesar texto, imágenes o videos.',
      technologies: [
        {
          name:'angular',
          icon:'https://images.ctfassets.net/zojzzdop0fzx/2LzaUqPdXBjtAbFTaDGbW0/a8b4fbfd6ccab7d6de4c3b0803a35ae5/angular_gradient.svg?fm=webp&w=256&q=75',
        },
        {
          name:'opencv',
          icon:'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        },
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        },
        {
          name:'flask',
          icon:'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg',
        },
        {
          name:'spring boot',
          icon:'https://pic.vsixhub.com/f0/99/27fc0e8e-1341-4f52-9219-4e0f81590937-logo.webp',
        },

      ]
    },
    {
      title: 'Sistema de monitoreo con detección de intrusos',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Un sistema que usa una cámara para detectar movimientos sospechosos en una habitación y envía alertas al usuario',
      technologies: [
        {
          name:'flutter',
          icon:'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
        },
        {
          name:'firebase',
          icon:'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
        },
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        },
        {
          name:'opencv',
          icon:'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
        }

      ]
    },
    {
      title: 'Robot controlado por cámara con detección de objetos',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Un robot que puede reconocer y recoger objetos específicos basado en su color o forma.',
      technologies: [
        {
          name:'tensorflow',
          icon:'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
        },
        {
          name:'raspberry pi',
          icon:'https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg',
        },
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/python/python-icon.svg',
        },
        {
          name:'opencv',
          icon:'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
        }

      ]
    },
    {
      title: 'Dashboard con análisis de emociones del cliente',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Una aplicación web para analizar el sentimiento de los clientes basándose en sus reseñas o sus expresiones faciales capturadas por la cámara.',
      technologies: [
        {
          name:'angular',
          icon:'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        },
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/python/python-icon.svg',
        },
        {
          name:'flask',
          icon:'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg',
        },
        {
          name:'openai',
          icon:'https://img.icons8.com/?size=100&id=Nts60kQIvGqe&format=png&color=000000',
        },

      ]
    },
    {
      title: 'Sistema de diagnóstico médico asistido por IA',
      type: 'Despliegue',
      imageUrl:'https://img-c.udemycdn.com/course/480x270/5559152_1516_2.jpg',
      description: 'Un sistema que analiza imágenes médicas (como radiografías) y ofrece predicciones para ayudar a los médicos.',
      technologies: [
        {
          name:'angular',
          icon:'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
        },
        {
          name:'python',
          icon:'https://www.vectorlogo.zone/logos/python/python-icon.svg',
        },
        {
          name:'tensorflow',
          icon:'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
        },
        {
          name:'flask',
          icon:'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg',
        },
        {
          name:'openai',
          icon:'https://img.icons8.com/?size=100&id=Nts60kQIvGqe&format=png&color=000000',
        },

      ]
    },

  ];

  constructor(private router: Router) {}

  // navigateToDetails(project: any) {
  //   this.router.navigate(['/project/', project.title]);
  // }

  goToProjectDetail(slug: string): void {
    // Navegación programática
    console.log(slug);
    this.router.navigate(['/projects',slug]);
  }
}
