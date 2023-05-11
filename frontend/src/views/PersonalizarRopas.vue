// The code is defining the HTML template for a Vue component that allows the user to upload an image,
// draw on it with different colors, and go back to the dashboard page. It includes an input element
// for uploading an image, a button to toggle drawing mode, a canvas element for drawing, and three
// color buttons to select the drawing color. It also includes a router-link element to go back to the
// dashboard page.
<template>
  <div class="personalizar-ropa">
    <h1>Personalizar ropa</h1>
    <input type="file" @change="onFileSelected" accept="image/*" />
    <button @click="toggleDrawing">Dibujar</button>

    <div class="canvas-container">
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
      <div class="color-buttons">
        <button @click="setColor('#ff0000')" style="background-color: #ff0000;"></button>
        <button @click="setColor('#00ff00')" style="background-color: #00ff00;"></button>
        <button @click="setColor('#0000ff')" style="background-color: #0000ff;"></button>
      </div>
    </div>
    <router-link to="/dashboard" class="btn-back">Atras</router-link>
  </div>
</template>

// The code is defining the JavaScript logic for a Vue component that allows the user to upload an
// image, draw on it with different colors, and go back to the dashboard page. It includes methods for
// drawing on the canvas, handling file uploads, toggling drawing mode, setting the drawing color, and
// handling mouse events for drawing. It also uses the interact.js library for handling mouse events on
// the canvas.
<script>
import interact from 'interactjs';

export default {
  data() {
    return {
      canvasWidth: 500,
      canvasHeight: 500,
      image: null,
      context: null,
      isDrawing: false,
      color: 'rgba(0, 0, 0, 0)'
    };
  },
  mounted() {
    this.context = this.$refs.canvas.getContext('2d');
    this.draw();
  },
  methods: {
    draw() {
      if (!this.image) {
        return;
      }
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.context.drawImage(this.image, 0, 0, this.canvasWidth, this.canvasHeight);
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (!file.type.startsWith('image/')) {
        return;
      }
      const reader = new FileReader();
      reader.onload = event => {
        const img = new Image();
        img.onload = () => {
          this.image = img;
          this.draw();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    toggleDrawing() {
      this.isDrawing = !this.isDrawing;
      if (this.isDrawing) {
        interact(this.$refs.canvas).on('down', event => {
          const target = event.target;
          if (target.tagName.toLowerCase() === 'canvas') {
            const rect = target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            this.context.fillStyle = this.color;
            this.context.beginPath();
            this.context.arc(x, y, 5, 0, 2 * Math.PI, true);
            this.context.fill();
          }
        });
      } else {
        interact(this.$refs.canvas).unset();
      }
    },
    setColor(color) {
      this.color = color;
    },startDrawing() {
  this.isDrawing = true;
  this.context.globalCompositeOperation = "source-over";
  this.context.strokeStyle = "rgba(255, 255, 255, 0.5)";
  this.context.lineWidth = 10;
},

stopDrawing() {
  this.isDrawing = false;
},

drawLine(x1, y1, x2, y2) {
  this.context.beginPath();
  this.context.moveTo(x1, y1);
  this.context.lineTo(x2, y2);
  this.context.stroke();
},

onMouseDown(event) {
  if (!this.isDrawing) {
    return;
  }
  const target = event.target;
  if (target.tagName.toLowerCase() !== 'canvas') {
    return;
  }
  const rect = target.getBoundingClientRect();
  this.lastX = event.clientX - rect.left;
  this.lastY = event.clientY - rect.top;
  this.isDrawing = true;
},

onMouseMove(event) {
  if (!this.isDrawing) {
    return;
  }
  const target = event.target;
  if (target.tagName.toLowerCase() !== 'canvas') {
    return;
  }
  const rect = target.getBoundingClientRect();
  this.drawLine(this.lastX, this.lastY, event.clientX - rect.left, event.clientY - rect.top);
  this.lastX = event.clientX - rect.left;
  this.lastY = event.clientY - rect.top;
},

onMouseUp(event) {
  if (!this.isDrawing) {
    return;
  }
  const target = event.target;
  if (target.tagName.toLowerCase() !== 'canvas') {
    return;
  }
  const rect = target.getBoundingClientRect();
  this.drawLine(this.lastX, this.lastY, event.clientX - rect.left, event.clientY - rect.top);
  this.isDrawing = false;
},


  }
};
</script>

<style>
.personalizar-ropa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgba(56, 84, 103, 0.584) ;
  padding:30px;
  padding-top:5%;
  
}

.personalizar-ropa h1{
  color: white;
  padding: 15px;
}


.canvas-container {
  margin-top: 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

canvas {
  max-width: 100%;
  max-height: 100%;
  background-color: white;
}

.color-buttons {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem;
}

.color-buttons button {
  width: 2rem;
  height: 2rem;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
}

.color-buttons button:nth-child(1) {
  background-color: red;
}

.color-buttons button:nth-child(2) {
  background-color: green;
}

.color-buttons button:nth-child(3) {
  background-color: blue;
}
</style>