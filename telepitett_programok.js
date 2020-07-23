const installed_programs_packages_libraries = {
    linux: {
        github_desktop: {
            name: "github desktop",
            description: "",
            website: "",
            dependencies: "snap",
                install_command: [{
                    1: "sudo apt update",
                    2: "sudo apt install snapd"}],
            install_command: [{
                1: "https://github.com/shiftkey/desktop/releases/tag/release-2.0.4-linux1",
                    // on ubuntu select the .snap package and just download it
                2: "snap remove github-desktop",
                3: "snap install ~/Downloads/GitHubDesktop-linux-2.0.4-linux1.snap --classic --dangerous"}],
                    // Just change the path to where the downloaded file is located on your system"
                    // Change the version as well as it offers a new
                        },
        gimp: {
            name: "",
            description: "",
            website: "",
            dependencies: "snap",
                install_command: [{
                    1: "sudo apt update",
                    2: "sudo apt install snapd"}],
            install_command: "sudo snap install gimp"
        },
        robo3t: {
            name: "robo3t",
            description: "",
            website: "https://robomongo.org/",
            install_command: [{
                1: "sudo apt update", 
                2: "sudo apt install snapd",
                3: "sudo snap install robo3t-snap"}],
            bash_script: "",
            windows_dll: ""
        },
        xclip: {
            name: "xclip",
            description: "",
            webiste: "",
            install_command: [
                "sudo apt-get install xclip"
            ]
        },
        synaptic: {
            name: "synaptic package manager",
            description: "Synaptic is a lightweight GUI front end to apt package management system used in Debian, Ubuntu, Linux Mint and many other Debian/Ubuntu based distributions. Basically, everything that you can do using the apt-get commands in the terminal can be achieved with Synaptic.",
            website: "",
            install_command: [{
                1: "sudo apt-get update",
                2: "sudo apt-get install synaptic"
            }]
        },
        blender: "blender",
        intellj: "intellj",
        emacs: "emacs",
        spacemacs: "spacemacs",
        vim: "vim",
        cider: {
            name: "cider",
            description: "",
            website: "",
            install_command: [{
                1: "M-x package-refresh-contents",
                2: "M-x package-install [RET] cider [RET]"
            }]
        },            
        codeblocks: "codeblocks",
        eclipse: "eclipse",
        vs_code: "vs_code",
        chromium: {
            name: "chromium browser",
            description: "",
            website: "",
            install_command: ["sudo apt install -y chromium-browser"]
        },
        libre_office: "libre office",
        android_studio: "android studio",
        team_viewer: "team viewer",
        atom: "atom",
        netbeans: "netbeans",
        jvm: "jvm",
        clojure: "clojure",
        julia: "julia",
        racket: "racket",
        npm: "npm",
	    leiningen: {
            name: "leiningen",
            description: "",
            website: "",
            install_command: {
                1: "sudo apt-get update -y",
                2: "sudo apt-get install -y leiningen",
                3: "lein new app clojure-noob",
                4: "lein run"
            }
    },
	boot: "boot",
    nodejs: "nodejs",
    ripgrep: {
        name:" ripgrep",
        description: "",
        website: "",
        install_command: "sudo snap install ripgrep --classic"
    },
    locate: {
        name:" locate",
        description: "",
        website: "",
        install_command: "sudo apt install locate"
    },

    desktop_environment_desinging: {
        cairo_dock: {
            name: "cairo dock",
            install_command: [{
                1: "sudo add-apt-repository ppa:cairo-dock-team/ppa",
                2: "sudo apt-get update",
                3: "sudo apt-get install cairo-dock cairo-dock-plug-ins"
            }],
        },
        gnome_shell_extensions: {
            name: "gnome shell extensions",
                dependency: "gnome_tweak",
                install_command: ["sudo apt install gnome-tweaks"],
            install_command: ["sudo apt install gnome-shell-extensions"],
            extensions: {
                remove_main_dock_in_ubuntu: "sudo apt remove gnome-shell-extension-ubuntu-dock",
                auto_hide_top_bar: "sudo apt install gnome-shell-extension-autohidetopbar"
            },        
        }, // reinstall needed after installed extensions
    },
    
    gparted: {
        name: "gparted",
        description: ""

    },
	yarn: "yarn",
        pip: "pip",
        discord: "discord",
        slack: "slack",
        infran_view: "infran view",
        vlc: "vlc",
        postman: "postman",
        geogebra: "geogebra",
        git: "git",
        haskell: "haskell",

        redshift: {
            name: "redshift",
            download: "https://github.com/jonls/redshift/releases",
                // latest for ubuntu on 2020.07.18. is "redshift-1.12.tar.gz"
                // needed for later configurations
            dependencies: {
                intltool,
                    install: "sudo apt install intltool",
                randr,
                    install: {
                        1: "cd in terminal to the downloaded and extracted folder of redshift",
                        2: "./configure --enable-randr --enable-gui --enable-ubuntu --with-systemduserunitdir=$HOME/.config/systemd/user",
                        3: "make",
                        4: "sudo make install",
                            },
                        },
            install: "sudo apt-get install redshift",
            configure_light_temperaure: {
                1: "locate longitude and latitude manually or via geoclude https://location.services.mozilla.com/v1/geolocate?key=geoclue",
                    // Budapest's is lat=47.49791 lon=19.04023
                2: "edit the xredshift.conf.sample file in the main directory of redshift: search for the line lat= then change your coordinates, and remove from the file's name the .sample"
            },
            configure_brightness: {
                1: "mkdir -p ~/.config/redshift/hooks",
                2: "touch ~/.config/redshift/hooks/brightness.sh",
                3: "xdg-open ~/.config/redshift/hooks/brightness.sh",
                4: "https://drive.google.com/file/d/1iee8lptIsMIoKCPwnWvEskRKUdUvd9bM/view?usp=sharing",
                    // paste and adjust this script to brightness.sh
                5: "chmod +x ~/.config/redshift/hooks/brightness.sh",
                    // making it executable
                6: "turn on autostart"
            }
       

        }
    },
    windows:{}
}

export default installed_programs_packages_libraries;