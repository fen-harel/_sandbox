with import <nixpkgs> {}; let
    fenix = import (fetchTarball "https://github.com/nix-community/fenix/archive/main.tar.gz") {};
in
    stdenv.mkDerivation {
        name = "rust";
        buildInputs = with pkgs; [
            fenix.latest.toolchain
        ];
    }
