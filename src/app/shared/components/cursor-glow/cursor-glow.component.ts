import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-glow',
  imports: [
    CommonModule
  ],
  template: `<div class="relative h-screen bg-gray-900 overflow-hidden" (mousemove)="onMouseMove($event)">
  <div
    #cursor
    class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 opacity-45 pointer-events-none transform scale-150 blur-xl"
    [ngStyle]="{ top: cursorY + 'px', left: cursorX + 'px' }"
  ></div>
  <div class="text-white text-center mt-20">
    <h1 class="text-4xl font-bold">Cursor Glow Effect</h1>
    <p class="mt-4 text-lg">¡Mueve el cursor para ver el efecto!</p>
  </div>
</div>
`,
  styleUrl: './cursor-glow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorGlowComponent {

  cursorX = 0;
  cursorY = 0;

  onMouseMove(event: MouseEvent) {
    this.cursorX = event.clientX - 32; // Ajuste para centrar
    this.cursorY = event.clientY - 32; // Ajuste para centrar
  }
}
