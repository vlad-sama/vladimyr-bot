const fs = require("fs");
const chalk = require("chalk");

global.available = true;
global.autoReadGc = true;
global.autoReadAll = false;
global.antitags = true;

global.Owner = ["237659454061" || "237659454061"];
global.OwnerNumber = ["237659454061"];
global.ownertag = ["237659454061"];
global.BotName = "vlad-bot";
global.packname = "vladimyr";
global.author = "";
global.OwnerName = "vladimyr Foka";
global.BotSourceCode = "https://github.com/vlad-sama/vladimyr-bot";
global.SupportGroupLink = "https://chat.whatsapp.com/HiHuFq6hCIB3PiRCqYgsNN";
global.sessionName = "session";

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ["+"];

global.location = "West Bengal, India";
global.reactmoji = "❤️";
global.themeemoji = "💖";
global.vidmenu = {
  url: "https://th.bing.com/th/id/R.18031cd0dec9583353b04b93348a6b4f?rik=%2fFUkbD6kJUhW0Q&pid=ImgRaw&r=0.mp4",
};
global.websitex = "https://github.com/vlad-sama";
global.lolhuman = "KaysaS";

global.BotLogo = fs.readFileSync("./Assets/azashiro.jpg");
global.Thumb = fs.readFileSync("./Assets/azashiro.jpg");
global.Thumb1 = fs.readFileSync("./Assets/azashiro.jpg");
global.ErrorPic = fs.readFileSync("./Assets/azashiro.jpg");

global.ntilinkytvid = [];
global.ntilinkytch = [];
global.ntilinkig = [];
global.ntilinkfb = [];
global.ntilinktg = [];
global.ntilinktt = [];
global.ntilinktwt = [];
global.ntilinkall = [];
global.nticall = [];
global.ntwame = [];
global.nttoxic = [];
global.ntnsfw = [];
global.ntvirtex = [];
global.rkyt = [];
global.wlcm = [];
global.gcrevoke = [];
global.autorep = [];
global.ntilink = [];

/*
global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'veuillez patienter...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'
    
}
*/
global.mess = {
  jobdone: "Fait ! je suis fier de moi et de mon createur...",
  useradmin:
    "Désolé, seuls les *administrateurs de groupe* peuvent utiliser cette commande **Baka Baka** !",
  botadmin:
    "chien, je peux pas exécuter cette commande sans être *Admin* de ce groupe.",
  botowner: "Seul mon *Propriétaire* peut utiliser cette commande, *chien pd* !",
  grouponly: "Cette commande n'est faite que pour les *Groupes*, *chien pd* !",
  privateonly: "Cette commande n'est faite que pour *Private Chat*, *pd* !",
  botonly: "Seul le *Bot lui-même* peut utiliser cette commande !",
  waiting: "veuillez patienter, je refléchis...",
  nolink: "Veuillez me fournir *lien*, *chien* !",
  error: "Une erreur s'est produite !",
  banned: "Vous êtes *Banni* d'utiliser des commandes !",
  bangc: "Ce groupe est *interdit* d'utiliser les commandes !",
  nonsfw:
    "Ne sois pas un pervers *chien pd* ! Ce n'est pas un groupe activé NSFW !",
};

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};
global.rpg = {
  darahawal: 100,
  besiawal: 95,
  goldawal: 30,
  emeraldawal: 8,
  umpanawal: 10,
  potionawal: 5,
};
global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};

global.flaming =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.fluming =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.flarun =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
global.flasmurf =
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
