let
  pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    buildInputs = with pkgs; [
      nodejs
      yarn
    ];
    shellHook = ''
      echo "nodejs and yarn installed"
      fish
      node --version
    '';
  }
