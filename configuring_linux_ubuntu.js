const configuring_linux_ubuntu = {
    desktop_environment: {
        function: "makes the top bar transparency configurable",
        website: "https://github.com/AMDG2/GnomeShell_DynamicTopBar",
        dependencies: {
            1: "gnome-tweaks",
                install: "sudo apt install gnome-tweaks",
            2: "gnome-shell-extensions",
                install: "sudo apt install gnome-shell-extensions",
            3: "chrome-gnome-shell",
                install: "sudo apt install chrome-gnome-shell"
                    // Don’t worry about the ‘chrome’ prefix in the package name. It has nothing to do with Chrome. You don’t have to install a separate package for Firefox or Opera here.
        },
        install: {
            1: "clone git",
            2: "sudo nautilus",
                    // opens the file manager in root mode
            3: "navigate to ~/.usr/local/share/gnome-shell/extensions",
            4: "past the cloned dynamicTopBar@gnomeshell.feildel.fr folder to there",
            5: "open tweaks, enable and edit extensions --> dynamic top bar"
        },
    },
    change_theme_of_gnome_shell: {
        function: "allows to make and change shell themes for ubuntu",
        dependencies: {
            1: "gnome-tweaks",
                install: "sudo apt install gnome-tweaks",
            2: "gnome-shell-extensions",
                install: "sudo apt install gnome-shell-extensions",
            3: "chrome-gnome-shell",
                install: "sudo apt install chrome-gnome-shell"
                    // Don’t worry about the ‘chrome’ prefix in the package name. It has nothing to do with Chrome. You don’t have to install a separate package for Firefox or Opera here.
        },
        downlad_premade: {
            1: "main: https://www.gnome-look.org/browse/cat/134/",
            2: "personal vote: https://www.makeuseof.com/tag/ubuntu-themes/",
        },
        path: "tweaks --> appearance --> themes",
        make_own: "https://askubuntu.com/questions/47643/how-do-i-make-a-theme-from-scratch-for-unity"
    }
}


export default configuring_linux_ubuntu;