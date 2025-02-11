# how i setup windows 11

hi! today i wanna share how i setup my main windows 11 desktop ~

as someone who uses windows 11 23h2 for basically everything (gaming, coding, & other fun stuff), i've figured out some pretty cute ways to make it feel just right! i'm pretty picky about my setup since i spend so much time on here, so i'll show you exactly how i make windows feel perfect for me.

first of all, I download the a windows 11 business iso from [massgrave](https://massgrave.dev/windows_11_links) primarily so I can install windows 11 pro for workstations, as it's one of the windows versions with the MOST features!
after i've downloaded it, i put it onto my USB running [ventoy](https://www.ventoy.net/) :3 (it allows me to add several iso's onto 1 usb at once) and after it's on my USB, I restart & boot into my BIOS via pressing f2 a bunch !!! afterwards i will boot into my wonderful sandisk USB! ![shown here](assets\blog\windows\ventoy.png)

from there, once i've booted in, i'll start the windows install, i'll make sure to pick the correct locales for where i live, afterwards ill make sure to pick windows 11 pro for workstations in the installer! not windows 11 home, not windows 11 pro, **windows 11 pro for workstations.** :3 afterwards, the install process starts, regarding what disk i select, it's usually my 1tb samsung nvme, as i use my other 256gb nvme for backups & other important things! then my PC should reboot a few times before i get into the new install :D

once im in the new install, i start of by pressing `shift + f10` to open a cmd prompt, from there i run `OOBE\BYPASSNRO` to bypass the network requiremnts for the installer, to avoid stuff such as microsoft sign in & installing new updates automatically etc, afterwards i'll select all the options needed & more etc, once it restarts a few times, i'll finally get booted into windows 11 :3

once i'm in windows, i start of by installing chrome, as it's my preferred webbrowser, afterwards i'll open powershell as admin, and i'll run `irm "https://christitus.com/win" | iex` it's a great tool that allows me to quicky tweaK things & more, i'd highly recommend it personally!! from there I also disable certain things such as all updates (apart from security ones) i also select their high performance powerplan which makes somewhat of a difference, afterwards i'll install my GPU drivers from nvidia's website, as I have a pretty nvidia gpu :3 I also install several drivers such as ones for my NIC, also audio related such as the virtual audio cable thingy (vb-audio cable)

now, time to install some software :3 i usually install the following

- jetbrains toolbox (to install idea & clion)
- visual studio code (for writing go & rust & webdev too !!)
- discord & the vencord installer (to talk to my besties)
- spotify (for awesome music listening!)
- kleopatra (used for gpg stuff)
- tabby (my preferred way of sshing)
- the minecraft launcher & lunar client (vido gam :3)
- github desktop (i dont like git cli D: )
- signal, obsidian & finally, OBS! (for private comms, managing notes & recording)

out of all these apps, id probably say obsidian is the most important to me, i use obsidian for all my notes, storing important information & more, to the point where my obsidian vault is several megabytes worth of text that mean a lot to me.

visual studio code is my preferred IDE for most things, I install plugins primarily for rust & python development, i use a lot of python primarily for scripting/automation, and then i use rust for systems dev, primarily for interacting with winapi (i also tend to use it for a lot of webdev & configuration, for example I wrote the website & this blog in visual studio code) ![shown here](assets\blog\windows\vsc.png)

one thing I also do is, don't you just hate those pesky shortcut icons, that show on the bottom corners of shortcuts, I do too! so with this basic registry modification

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons]
"29"="%SystemRoot%\\System32\\shell32.dll,-50"
```

it'll allow me to remove them completely, and they look wayyyy better compared to usual! something so incredibly simple makes such a noticable difference,,

![shown here](assets\blog\windows\icons.png)

I tend to not really care about the themes on my applications, i usually use the default darkmode that they provide, when they provide okayish built in themes, i'll usually use them, although on my arch setup i use COMPLETELY CATPPUCCIN! (my beloved, **beloved** theme.) I i don't like light mode too much on certain applications, kinda silly noting it's the **ONLY** theme on my website lol

this is really all I do if i'm being honest, i also usually use a wallpaper from something i love, im currently using a life is strange wallpaper i found, it's of arcadia bay, very pretty if you ask me :)

![shown here](assets\blog\windows\desktop.png)

I will sometimes install steam, i mostly stick to minecraft as I am a evil skywars addict (unfortunately) it is what i tend to spend most of my freetime on, if that isn't being outside, watching whatever, or programming

thank you for reading my blog, this is the first of many, i hope you enjoyed reading :3
