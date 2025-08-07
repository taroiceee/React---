// src/types/webpack.d.ts
declare interface Require {
    context(
      path: string,
      deep?: boolean,
      filter?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
    };
  }
  
  declare var require: Require;
  