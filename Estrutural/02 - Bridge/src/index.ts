import FacebookLive from "./Platforms/Providers/FacebookLive";
import IPlatform from "./Platforms/Providers/IPlatform";
import TwitchTv from "./Platforms/Providers/TwitchTv";
import YouTube from "./Platforms/Providers/YouTube";
import AdvancedLive from "./Transmission/AdvancedLive";
import Live from "./Transmission/Live";

const startLive = (platform: IPlatform) => {
    console.log('Aguarde...');

    const live = new Live(platform);


    live.broadcasting();
    live.result();
}

const startAdvancedLive = (platform: IPlatform) => {
    console.log('Aguarde...');

    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();
}

// startLive(new YouTube());
// startLive(new TwitchTv());

// startAdvancedLive(new YouTube());
// startAdvancedLive(new TwitchTv());

startLive(new FacebookLive());
console.log('-----------------------------');
startAdvancedLive(new FacebookLive());