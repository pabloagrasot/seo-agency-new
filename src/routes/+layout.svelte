  <script>
    import "../app.css";
    
  </script>
  
  <slot />

  <style global>
    :global(body) {
      margin: 0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  
    :global(h1, h2, h3, h4, h5) {
      margin: 0;
    }
  
    :global(a) {
      text-decoration: none;
    }

    :global(.section-h2){
    background: linear-gradient( 180deg, rgba(74, 108, 247, 0.4) 0%, rgba(74, 108, 247, 0) 100% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    }
  
  </style>