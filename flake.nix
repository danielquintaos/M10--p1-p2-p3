{
  description = "React Native parity app";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils";
    nodejs.url = "github:nix-community/nix-nodejs?ref=v18.19.0";
  };

  outputs = { self, nixpkgs, flake-utils, nodejs }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        node = nodejs.packages.${system}.nodejs;
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            node
            pkgs.nodePackages.react-native-cli
            pkgs.yarn
            pkgs.watchman
            pkgs.android-tools
          ];
        };

        packages.app = pkgs.stdenv.mkDerivation {
          name = "parity-mobile";
          src = self;
          buildPhase = "yarn install --frozen-lockfile && yarn lint && yarn test";
          installPhase = "mkdir -p $out && cp -r . $out";
        };

        apps.android = {
          type = "app";
          program = "${pkgs.yarn}/bin/yarn react-native run-android";
        };

        apps.ios = {
          type = "app";
          program = "${pkgs.yarn}/bin/yarn react-native run-ios";
        };
      });
}
