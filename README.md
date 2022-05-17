# arknights-frida-script

## [frida-il2cpp-bridge](https://github.com/vfsfitvnm/frida-il2cpp-bridge)

A Frida module created by [vfsfitvnm](https://github.com/vfsfitvnm) to dump, trace or hijack any Il2Cpp application at runtime, without needing the `global-metadata.dat` file.

## Tips

The program is restricted for learning use. **DO NOT** use it to do anything against policies of Hypergryph. And the author is innocent for any third party use, legal or illegal.

You just need to download src/index.ts and compile to load it with frida on your device.

Actually I'm new to Typesrcipt and I just use frida-il2cpp-bridge to build some code for my use. Here is what I have done. Wish this can bring some inspiration to you.

```POWERSHELL
# clone frida-il2cpp-bridge source code to you own device
git clone https://github.com/vfsfitvnm/frida-il2cpp-bridge.git

# install requirements
npm install npm -g
npm install typescript -g
npm install ts-code -D
npm install

# compile index.ts
# you need to replace the original index.ts with the one in this repository 
frida-compile src/index.ts -o srcipts/_arknights.js -w
# you can add "watch" command in package.json-"scripts" as to simply compile as this:
npm run watch

# start frida
# Ps: maybe you need to run '%reload' after spawn the app to load the script successfully
# Pps: Remember to run Arknights with x86 devices
frida -Uf "com.hypergryph.arknights" -l "scripts/_arknights.js" --no-pause
```


## Acknowledgements

Thanks to [vfsfitvnm](https://github.com/vfsfitvnm) for providing [frida-il2cpp-bridge](https://github.com/vfsfitvnm/frida-il2cpp-bridge).
Thanks to [Perfare](https://github.com/Perfare) for providing [Il2CppDumper](https://github.com/Perfare/Il2CppDumper).

## Problems?

Use Issues to contact me.