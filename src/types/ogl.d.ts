declare module 'ogl' {
  export class Renderer {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    dpr: number;
    constructor(options?: {
      canvas?: HTMLCanvasElement;
      width?: number;
      height?: number;
      dpr?: number;
      alpha?: boolean;
      depth?: boolean;
      stencil?: boolean;
      antialias?: boolean;
      premultipliedAlpha?: boolean;
      preserveDrawingBuffer?: boolean;
      powerPreference?: string;
      autoClear?: boolean;
      webgl?: number;
    });
    setSize(width: number, height: number): void;
    render(options: { scene: any; camera?: any; target?: any; clear?: boolean }): void;
  }

  export class Program {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: {
        vertex: string;
        fragment: string;
        uniforms?: any;
        transparent?: boolean;
        cullFace?: any;
        frontFace?: any;
        depthTest?: boolean;
        depthWrite?: boolean;
        depthFunc?: any;
      }
    );
  }

  export class Triangle {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext);
  }

  export class Mesh {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: {
        geometry: any;
        program: Program;
        mode?: number;
        frustumCulled?: boolean;
        renderOrder?: number;
      }
    );
  }
}