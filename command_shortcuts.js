const command_shortcuts = ()=>{

    return components =

{
    linux: {

            shortcuts: [{

            "Ctrl + Shift + Alt + down/up arrow keys": "changing between workspaces with moving the actual window to it",
            
            }],

            terminal_commands: [{

            "touch": "making a new file",
            "xdg-open": "opens a file from terminal",
            "ps -A | grep <programsname>": "lists the process id of the running program",
            "sudo kill -9 <Process ID>": "stops the specified running program",
            "xkill": "this program is very dangerous, but is useful for aborting programs that have displayed undesired windows on a user's screen",
            "sudo nautilus": "opens file manager in root mode"

        }],
    },
    vs_code:{

        "node_fileNamedotjs": "run a js file through the terminal",

    },
    total_commander:{},
    excel:{},
    word:{},
    mindmanager:{},
    github:{},
    windows:{},
    mozilla:{},
    firefox:{},
    emacs: {

        CTRL_x_b: "select or create a buffer named buffer (switch-to-buffer)",
        CTRL_x_4_b: "Similar, but select buffer in another window (switch-to-buffer-other-window)",
        CTRL_x_5_b: "Similar, but select buffer in a separate frame (switch-to-buffer-other-frame)"
    
    },
    spacemacs: {
        
        basic: {

            SPC_t_E_h_or_ALT_m_t_E_h: "enable/disable hybrid mode (vim and emacs editing style)",
            M_x_term: "open a terminal",
            C_z: "switch between emacs/vim editing style in hybrid mode",
            C_x_q: "toggle read-only mode 'on' or 'off'",
        
        },

        files: {

            C_x_f: "read a file into emacs",
            C_x_C_s: "save a file back to disk",
            C_x_s: "save all files",
            C_x_i: "insert contents of another file into its contents",
            C_x_C_v: "replace this file with the file you really want",
            C_x_C_w: "write buffer to a specified file",
            C_x_C_q: "toggle read-only status of buffer",

        },

        // following codes are working in vim mode:
            SPC_ff: "search files for editing",
            SPC_T_m: "enable menu bar",
            SPC_g_h: "opens the GitHub menu",
            SPC_g_h_c: "cloning remote GitHub repos",
            SPC_T_n: "switch between dark-light theme",        
                    
        }
    }
}