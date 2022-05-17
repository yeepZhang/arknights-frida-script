import "./il2cpp";
import moment from "moment";

// get the local time format
let getTime = function(){
    const time = moment().format("YYYY-MM-DD hh:mm:ss");
    return `\x1b[33m[${time}] - \x1b[m`;
}

Il2Cpp.perform(() => {
    // code here
    console.log(getTime() + "\x1b[1;36mIl2Cpp.perform...\x1b[m");
    
    // get Unity version
    // console.log(getTime() + "\x1b[1;36mUnityVersion: \x1b[m" + "\x1b[1;34m" + Il2Cpp.unityVersion + "\x1b[m");

    // dump the game to certain dir on mobile device
    // --------------------------------------------------------------------------------------
    // ----error occurs in frida when dumping: Failed to load script: timeout was reached----
    // --------------------------------------------------------------------------------------
    // Il2Cpp.dump("dump.cs", "/storage/emulated/0/Android/data/com.hypergryph.arknights/files/");
    // console.log(getTime() + "\x1b[1;36mDll Dumped to: \x1b[m\x1b[1;34mdump.cs\x1b[m")
    

    // Dll : UnityEngine.CoreModule.dll
    const UnityEngine_SceneManagement = Il2Cpp.Domain.assembly("UnityEngine.CoreModule").image;
    
    // Namespace: UnityEngine.SceneManagement
    //
    // Class: UnityEngine.SceneManagement.SceneManager
    const UnityEngine_CoreModule_SceneManager = UnityEngine_SceneManagement.class("UnityEngine.SceneManagement.SceneManager");
    // Methods
    //
    // ---- private static AsyncOperation LoadSceneAsyncNameIndexInternal(string sceneName, int sceneBuildIndex, LoadSceneParameters parameters, bool mustCompleteNextFrame) { }
    // ---- [print name of AsyncScene loaded]
    const LoadSceneAsyncNameIndexInternal = UnityEngine_CoreModule_SceneManager.method("LoadSceneAsyncNameIndexInternal");
    LoadSceneAsyncNameIndexInternal.implementation = function(sceneName: Il2Cpp.String, sceneBuildIndex: number, parameters: any, mustCompleteNextFrame: boolean) {
        console.log(getTime() + "\x1b[1;36mLoadSceneAsync: \x1b[m" + '\x1b[1;34m'+ sceneName + '\x1b[m');
        return LoadSceneAsyncNameIndexInternal.invoke(sceneName, sceneBuildIndex, parameters, mustCompleteNextFrame);
    }


    // Dll : Assenmbly-Csharp.dll
    const AssemblyCSharp = Il2Cpp.Domain.assembly("Assembly-CSharp").image;

    // Namespace: Torappu.Network
    //
    // Class: Networker
    const Torappu_Network_Networker = AssemblyCSharp.class("Torappu.Network.Networker");
    // Methods
    //
    // ---- private static Boolean _CheckIfRequestDone(HTTPRequest request) { }
    // ---- [ban BestHttp if return false, so that you can capture the packet for use]
    // const checkIfUseBestHttp = Torappu_Network_Networker.method<boolean>("CheckIfUseBestHttp");
    // checkIfUseBestHttp.implementation = function(url: Il2Cpp.String){
    //     console.log(getTime() + '\x1b[1;36mBestHttp Adopted.\x1b[m' + '\x1b[1;34m Url: '  + url + '\x1b[m');
    //     return checkIfUseBestHttp.invoke(url);
    //     // console.log(getTime() + '\x1b[1;36mBestHttp Adopted. \x1b[m' + '\x1b[1;34mUrl: '  + url + '\x1b[m');
    //     // return false;
    // }

    // Namespace: Toappu.Battle
    //
    // Enum: SpeedLevel
    const SpeedLevel: Il2Cpp.Class = AssemblyCSharp.class("Torappu.Battle.SpeedLevel");
    const SLOW_MOTION = SpeedLevel.field<Il2Cpp.ValueType>("SLOW_MOTION").value;
    const STANDARD = SpeedLevel.field<Il2Cpp.ValueType>("STANDARD").value;
    const FAST = SpeedLevel.field<Il2Cpp.ValueType>("FAST").value;
    const SUPER_FAST = SpeedLevel.field<Il2Cpp.ValueType>("SUPER_FAST").value;
    // Class: BattleController
    const Torappu_Battle_BattleController = AssemblyCSharp.class("Torappu.Battle.BattleController");
    // Methods
    //
    // ---- public Void set_speedLevel(SpeedLevel value) { }
    // ---- [set the speed as you want from above]
    const setSpeedLevel = Torappu_Battle_BattleController.method("set_speedLevel");
    setSpeedLevel.implementation = function(speedLevel){
        // const targetSpeed = speedLevel;
        const targetSpeed = speedLevel;
        if (targetSpeed != speedLevel){
            console.log(getTime() + "\x1b[1;36mSpeedLevel: \x1b[m" + "\x1b[1;34m" + speedLevel + " -> " + targetSpeed + "\x1b[m");
        }
        return this.method("set_speedLevel").invoke(targetSpeed);
    }
    // ---- public Int32 get_maxLifePoint() { }
    // ---- [return maxLifePoint]
    // ---------------------------------------------
    // ----This bumps out every frame if enabled----
    // ---------------------------------------------
    // const getMaxLifePoint = Torappu_Battle_BattleController.method<number>("get_maxLifePoint");
    // getMaxLifePoint.implementation = function(): number{
    //     const maxLifePoint = this.method<number>("get_maxLifePoint").invoke();
    //     console.log(getTime() + "\x1b[1;36mMaxLifePoint: \x1b[m" + "\x1b[1;34m" + maxLifePoint + "\x1b[m")
    //     return maxLifePoint
    // }
    // ---- private Void set_lifePoint(Int32 value) { }
    // ---- [value is lifePoint to be set, for example a dog rush into home and "2" will be logged]
    // const setLifePoint = Torappu_Battle_BattleController.method("set_lifePoint");
    // setLifePoint.implementation = function(value: number){
    //     console.log(getTime() + "\x1b[1;36mLifePoint Changed To: \x1b[m" + "\x1b[1;34m" + value + "\x1b[m");
    //     // return to maxLifePoint lol
    //     return this.method("set_lifePoint").invoke(this.method<number>("get_maxLifePoint").invoke());
    // }


    // Dll : Assembly-CSharp-firstpass.dll
    const AssemblyCSharpFirstpass = Il2Cpp.Domain.assembly("Assembly-CSharp-firstpass").image;
    
    // Namespace: 
    //
    // Class: BuglyAgent
    const BuglyAgent = AssemblyCSharpFirstpass.class("BuglyAgent");
    // Methods
    //
    // ---- public static Void SetUserId(String userId) { }
    // ---- [Check userId, No much use in fact]
    // const SetUserId = BuglyAgent.method("SetUserId");
    // SetUserId.implementation = function(userId: Il2Cpp.String){
    //     console.log(getTime() + '\x1b[1;36mUserId Set: \x1b[m' + '\x1b[1;34m'  + userId + '\x1b[m')
    // }
})
