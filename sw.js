/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","dd808ce5ad7297611a8868616bc9b726"],["/acm-general-meeting/index.html","22ae7b100af00ec4c4d884eebf3baca3"],["/acm-general-meeting2022/index.html","d3a0ba51e324c44250c296bc3766373b"],["/acm-graduation-ceremony-fall-2018/index.html","6ee3ac88b9862146f9cc574614dab6cd"],["/acm-okifestival/index.html","a3104620d225ecb969baefd80251eecc"],["/acm-trivia-night/index.html","733e771316fe69dc92d84ca6882cec70"],["/acmanoa-first-general-meeting-fall-2018/index.html","339b488ab22c195ce66a46f2041f56db"],["/acmanoa-hosts-november-wetware-wednesday/index.html","005785c3f248c2d9eee68315f5d2edc5"],["/assets/css/main.css","3ca674e16d81b0d5a31ae27597386c5f"],["/assets/img/favicon.jpg","20da386352ac56191203a62359131d07"],["/assets/img/icons/android-chrome-192x192.png","d0a14e63ad1cce3020f5d71763d8870a"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","cfa99b6b03097dafc8f1ad46e3e48e26"],["/assets/img/icons/favicon-16x16.png","cff4d90fdce73dae8215fb1d1b0e3361"],["/assets/img/icons/favicon-32x32.png","af7f5aaa04de963acc8b408be2442108"],["/assets/img/icons/icon-github.svg","46d089384d19077a7990aa13bbb16643"],["/assets/img/icons/icon-instagram.svg","386f48e7440160096385614b2ec91930"],["/assets/img/icons/icon-twitter.svg","d2508d22e42c11e177ae430d33b343d9"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/post318b.jpg","293b4eb114e36ed61b6a7b84c39bf293"],["/assets/img/icons/safari-pinned-tab.svg","5aa56ac96362cc1bb12c2848a6b6c1b7"],["/assets/img/logos/Ballroom Dance Logo.png","bb6f165867de200068ee3367a6305c51"],["/assets/img/logos/BallroomDanceLogo.png","1daf55004a5ac2dc081531a149080eef"],["/assets/img/logos/ICSpark_Logo.png","7f1851b9ed89cd99bf2479120acf8ab9"],["/assets/img/logos/Panda.png","c2d5787269294a25f0a06282b2ba034b"],["/assets/img/logos/aci-blue.png","6d93d3ab749070c27af53d074a60f3cb"],["/assets/img/logos/aci-orange.png","199b7503b19b93252e2bfa9005b78f17"],["/assets/img/logos/acm.png","d0a14e63ad1cce3020f5d71763d8870a"],["/assets/img/logos/ccdc.png","9271cd535c8b996c45b54ceb98d482d7"],["/assets/img/logos/datathon.png","de0dd446652eb8225e16f9fa8682af30"],["/assets/img/logos/gamedev.png","c5141b87d37d1caac1b27243b1a53c4e"],["/assets/img/logos/google-codejam.jpg","77e026d466eaae1e36aa2352d837f161"],["/assets/img/logos/greyhats.png","3cd4c3cbe103d01ea36d527110f5fa23"],["/assets/img/logos/icpc.png","56fc0ceb556dc6f3bcbc1393852a904c"],["/assets/img/logos/manoadatascience.png","be40b92451f660b28e3570e5bf9c5087"],["/assets/img/logos/switchlogo.png","3f3e3c7d8184a668c7271e645098b473"],["/assets/img/officers/CalebHardee.jpg","3fede8a68c6a8eece9f069c24cddc3d2"],["/assets/img/officers/Chris.jpg","787eaa38cbccf5f892428d13eb7b1784"],["/assets/img/officers/EpsilonAustin.png","f42f406f29ac630a0304625ef6f76e14"],["/assets/img/officers/EricLam.jpg","1c8189933e94b33f35151be6fa879696"],["/assets/img/officers/GregorySnyder.png","e7575f79264df3cc89ac5e9f8b28626f"],["/assets/img/officers/IsabelleHu.png","e97ca5423c6605291a4a6e66332be42f"],["/assets/img/officers/KanaiGooding.jpg","20ce378edb48030dafc230a5b81b3999"],["/assets/img/officers/KennyQuibilan.png","601d2551b6c975824e90740cc79d6862"],["/assets/img/officers/KylaLee.png","08cad1c099a2d1246b40f1ff993f0950"],["/assets/img/officers/MateoMaramara.png","b35a5f7f13d75672aa040a07a8df88dd"],["/assets/img/officers/MattKim.jpg","358a4fc8cad01b97cd43263539c0ac9a"],["/assets/img/officers/MatthewYamamoto.png","a372899adf01c8f73931c73ad54978ac"],["/assets/img/officers/RaviNarayan.png","5d95143957a8c9ea09a5abfbafc53404"],["/assets/img/officers/SydneyKim.jpg","0a4767ecedd9a231d823eb46874e3b20"],["/assets/img/officers/TimSumalinog.jpg","4b9febd2a9f8d9ac383276fd0136ba4c"],["/assets/img/officers/YongSungMasuda.png","83474d95380fa3b3d709c2752dd5a728"],["/assets/img/officers/abdullah.png","62c153d10e1a6a8e4e204c52d5ad9004"],["/assets/img/officers/alicewy.jpg","2a2a1a875ee68cd40408492bffec9c33"],["/assets/img/officers/alyssia.png","6767f84422325a801e22e5e826c56a43"],["/assets/img/officers/amanda.jpg","efebc02da2a21fa2219f745267b16f55"],["/assets/img/officers/amanda.png","305356f90e52dd4cf02f3183a30967cf"],["/assets/img/officers/ana.png","99b81e25d8743b8baa8cba746ce9ce90"],["/assets/img/officers/anson.jpg","87a4f858605d5800b9b48e19b6fd91ab"],["/assets/img/officers/awyz.jpg","c0bb68115f68b541b83acdebbf12945d"],["/assets/img/officers/benny.png","51edbcef1e772c5799d50c16b125b8f1"],["/assets/img/officers/brandi.png","a26baf9d4dff67da6c23e285fdce5a18"],["/assets/img/officers/brian.jpg","4f18f487c749a5f510e07871ecf1aebe"],["/assets/img/officers/bwong7.jpg","cc7c5f922c489a05c591e225cac6310d"],["/assets/img/officers/cade.png","c26d1f977ce1501c7a40177e8dec43eb"],["/assets/img/officers/chadmmm.jpg","069350c7f7d6a281effbe5fc10f38409"],["/assets/img/officers/chelsea.png","c949a74fe6503e35a851b073e3122238"],["/assets/img/officers/chris.png","b309649db9a6c8d7083d307e74396367"],["/assets/img/officers/claire_sorge.png","f30ea472563b4cd201acd8d5450e6820"],["/assets/img/officers/david_rickards.jpg","30e091104020c016065a49447c902581"],["/assets/img/officers/default.png","b506057ea33d1c4922deb64f801a1d81"],["/assets/img/officers/eli.jpg","30cd0973e61e1a06c87b11d506eec794"],["/assets/img/officers/ethan.jpg","8e6d5c6fa8c3fa0fb5016e298e5ed989"],["/assets/img/officers/hardy.png","ecf381796020ce7036171f9a10be243a"],["/assets/img/officers/honggun.jpg","45e39de3f5ee3d0c4c02d4798221ca3f"],["/assets/img/officers/hurbert.jpg","64ccc4945022cb6b507039cde654f2d8"],["/assets/img/officers/hurbert.png","e50c1d58943fa1bf214640e74d28419d"],["/assets/img/officers/idemello.png","c6f85402733215e7350e2038630a7e8b"],["/assets/img/officers/japhetye.jpg","ac2548607f99c210065263378462a49f"],["/assets/img/officers/jarren_seson.jpg","6473d35a9e47e5faa63deb7cb823badf"],["/assets/img/officers/jeraldine.png","e98b5f4d48a9734f70f70a30efb570c4"],["/assets/img/officers/jiahui.png","aac45d9c9dd337a12735d2fad6b06acd"],["/assets/img/officers/jing.png","0f373ef1b176f27397e0743927777f01"],["/assets/img/officers/jloi.jpg","9fc1c80761865a94b7218b486cbf7125"],["/assets/img/officers/jordanoo.jpg","1b064b9338d995d566f39b69b388a362"],["/assets/img/officers/joshua.png","5fbb91cc6492dc385a973a8a595a2b38"],["/assets/img/officers/justin.png","2811cd2ee4ec88b311d5659008c44737"],["/assets/img/officers/kelly.png","4447e18d2078c098226be4cadd4ebfec"],["/assets/img/officers/kelsy.png","b250db1b4ba335730e25ad4f70a95265"],["/assets/img/officers/khtakani.jpg","1fc4eb3149b2f951b16d27b761a54963"],["/assets/img/officers/kobey.png","de15c548c620f26822f4abe823b9987e"],["/assets/img/officers/lavillan.jpg","10567575be40f26949136323e12a08a0"],["/assets/img/officers/marissa.png","df7f504e302681cd64bd30fbe200ccb5"],["/assets/img/officers/michael_nakagawa.png","ef798e52272890abfdbb26742191f243"],["/assets/img/officers/michelle.png","bdab3e66e0c9b92011e1cc35623cc245"],["/assets/img/officers/nodari.jpg","40992a1501310569a513dcfc63d3a7f3"],["/assets/img/officers/omurray4.png","8cf3e4e81d09312a6e4c98849fa23852"],["/assets/img/officers/pauline.png","e9b66fd7248a126d45a08aeff09a719f"],["/assets/img/officers/petersadowski.jpg","92007f892d8dffcc45cfa76f969d4f66"],["/assets/img/officers/placehold.png","18e30e06e9d78dfa501e188b59a72404"],["/assets/img/officers/prayag.jpg","3de8bad21e192bed6a5a80bbfd81ebda"],["/assets/img/officers/preston.png","631980a6fc90c036ec067c483f062af8"],["/assets/img/officers/rknakata.jpg","412d244ab08532a22a19afa773fc5174"],["/assets/img/officers/saehyun.jpg","3646c27d99e2bf3dcc31190407236ad2"],["/assets/img/officers/seri_nakamura.png","551ac9f8bd889335b13f50117564306e"],["/assets/img/officers/sydnee.png","2c463d955fca17edc1870a2602e4a5bc"],["/assets/img/officers/tcchong.jpg","3b6dddd20b265fa00ff7e7d40f4f3b6d"],["/assets/img/officers/tim.png","84ea70db51ade7090613be7a240f17b6"],["/assets/img/officers/timoteosum.jpg","cfc37a48f4e6909cae23357a9e2cb773"],["/assets/img/officers/tony.png","aa0da902918885f909428b0a5e32c146"],["/assets/img/officers/tracy.png","7e397fec243034154230fd3c2f80e870"],["/assets/img/officers/tyu.png","9a598d14aff929d9fbcedf55a6643a84"],["/assets/img/officers/vincent.jpg","93a3c36313de77e94aaa4b64836a55c2"],["/assets/img/officers/vincent_grillo.jpg","db624c1dd7880880b8b5796209a12a15"],["/assets/img/officers/yong-sung_masuda.jpg","66e538e1a7f37f976016291f81e8e202"],["/assets/img/posts/ACM_Logo/ACM_Logo.jpg","ab1a0201a1cee73c234c2ef7fac8e17b"],["/assets/img/posts/ACM_Logo/ACM_Logo_lg.jpg","f5242e0276cb08d781e772771800b954"],["/assets/img/posts/ACM_Logo/ACM_Logo_md.jpg","b26036f09b64990f6df78895a03a6816"],["/assets/img/posts/ACM_Logo/ACM_Logo_placehold.jpg","b8c1024f64c88bf4008a453d09860c4b"],["/assets/img/posts/ACM_Logo/ACM_Logo_sm.jpg","d40d8ca593980dc351854cc59575e6b5"],["/assets/img/posts/ACM_Logo/ACM_Logo_thumb.jpg","d6197a8581243e15be5b27e33c1fdbc6"],["/assets/img/posts/ACM_Logo/ACM_Logo_thumb@2x.jpg","1368d8ab35688beaf3eb5680dbff560a"],["/assets/img/posts/ACM_Logo/ACM_Logo_xs.jpg","3ec45014438c60b81df655f769bda673"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting.jpg","fb118e79a6c0342b986314fc6d9e3f0a"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_lg.jpg","c1a2d233437720d2f33036bbee71901e"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_md.jpg","0bfb86a21149c68796c5780d4619d1bb"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_placehold.jpg","a1322984b31eb05c49161b4550572c5b"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_sm.jpg","a8d899a64c04037801cd025c95fdb34f"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_thumb.jpg","88b38db804d96fb244a85c8e0f66910c"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_thumb@2x.jpg","af2722eee05a456129bb18c5e1411dd3"],["/assets/img/posts/F18_GenMeeting/F18_GenMeeting_xs.jpg","824dacda9fbe0a5319e8c2c5942bf627"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting.jpg","0e4fb90fac168b491ca274070fa6a783"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_lg.jpg","e57ad2d38d13f064995ce1c1674feace"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_md.jpg","e5f67462b8b94443d2393ace1eb9063b"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_placehold.jpg","6ecf376eb32820e4b2e5b3035189d19c"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_sm.jpg","dbd931da075e175580f2bce73179dd80"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_thumb.jpg","25ecad9492a92c6a65d0df62c9b15e72"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_thumb@2x.jpg","12fce4718295d9a71078507cb2e15f03"],["/assets/img/posts/F22_GenMeeting/F22_GenMeeting_xs.jpg","8e83c849aae264827317b42754c4cf87"],["/assets/img/posts/F23_CareerFair/F23_CareerFair.jpg","4c55fe376bff681e317ba0edd9b8b271"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_lg.jpg","ad0104cdc88c73b3e6fa2035180b7961"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_md.jpg","1ace2fdfa4b2f600beb280a4cd2b48fa"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_placehold.jpg","c3ab80134bf3e7761823df0939656805"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_sm.jpg","0c4dae08d18acdb35a7bb7c9fd937bd6"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_thumb.jpg","82f564176462775c0206455dd2a9234a"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_thumb@2x.jpg","622deda105583ab00cd5b63aa8f25558"],["/assets/img/posts/F23_CareerFair/F23_CareerFair_xs.jpg","01ec04a7ad0c05481c41e1f83bb7af4d"],["/assets/img/posts/S23_CareerFair/S23_CareerFair.jpg","ba3e70cd99f761797ed1eb8abd0a6a18"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_lg.jpg","77cb356b8561654b9ef6a507f0fd10d5"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_md.jpg","e7854e4e3c0d0977fa13f1295126b672"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_placehold.jpg","60d47f88c3e1ed08d94400e5b18358c6"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_sm.jpg","2f6789e1890b584cb47b1320cc8814ca"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_thumb.jpg","f56f0925274abe4e0dadb8e5f8aedd2a"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_thumb@2x.jpg","dd14a9295279bb3e545787a6defa2a0a"],["/assets/img/posts/S23_CareerFair/S23_CareerFair_xs.jpg","acb3177e3fee182c6977a0c557d6e01f"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting.jpg","014b5bf9897c729980959f83f7cf83e8"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_lg.jpg","3acef2b8f2766cc8a3dba27cfb2fe34a"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_md.jpg","a35ff2ebda542705072fcc767cef54b0"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_placehold.jpg","d607cf55b349dfb30426db23f7607795"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_sm.jpg","df7605c917b6d1d2d89ad676b55307b5"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_thumb.jpg","1faff09d2d151f11ff9922d152ed721d"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_thumb@2x.jpg","cc002d944fcef51d4f569337d706bbc3"],["/assets/img/posts/S23_GenMeeting/S23_GenMeeting_xs.jpg","d22c2bfd4ef9a7787e50798a4a4c1d7b"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros.jpg","bc4b646f25212563c894daa65cc3f51e"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_lg.jpg","56d425819a4910f6b5ed111dc281167f"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_md.jpg","e0186d82971fcb6ff0bea216522d2f93"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_placehold.jpg","2dcdb1a89d2a617cce8cdbeac0dea1df"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_sm.jpg","6a25103f124e99447a9222093a5d89db"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_thumb.jpg","58ab634a8022c7a15922f04483fab61d"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_thumb@2x.jpg","2506ad63590d34c31d551a09156f343a"],["/assets/img/posts/S23_TalkStoryTechPros/S23_TalkStoryTechPros_xs.jpg","3bf94b003333aa0b0ab217f9d351758c"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo.jpg","338f5db8a1d24fe62c9e88bc6a3b3419"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_lg.jpg","f097db9abac54fbc5df41be471291c7c"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_md.jpg","a6e930e6f4522e9ee642d1f2e6236cfd"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_placehold.jpg","cd9dedd0073b208c6dbb0c06edc56f2d"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_sm.jpg","c5bf23c4a02600735be43009f209ffb7"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_thumb.jpg","8608261701a58c5ffeb60c564daf8b7e"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_thumb@2x.jpg","f6ece66841ef591b56904e3b1976c9eb"],["/assets/img/posts/S24_Datathon_Logo/S24_Datathon_Logo_xs.jpg","bfb53d43a764071f6830897fa14ef942"],["/assets/img/posts/Spring18-1/Spring18-1.jpg","4b9854ab28e6603a873d55c1fe73c1c8"],["/assets/img/posts/Spring18-1/Spring18-1_lg.jpg","43badabf8356382b47b2979c912033a7"],["/assets/img/posts/Spring18-1/Spring18-1_md.jpg","e67812465cc3f82d07b6a79f68ab3caf"],["/assets/img/posts/Spring18-1/Spring18-1_placehold.jpg","ab7fc09710ebfbeeb0ed5a918e4f978b"],["/assets/img/posts/Spring18-1/Spring18-1_sm.jpg","3ba4cd88eaaa0b565009e4826578b7ff"],["/assets/img/posts/Spring18-1/Spring18-1_thumb.jpg","e932b455c345dc4e3eec8af9448f6165"],["/assets/img/posts/Spring18-1/Spring18-1_thumb@2x.jpg","b67321195ae8ff5ce7db7dc8fbbc3ece"],["/assets/img/posts/Spring18-1/Spring18-1_xs.jpg","7754ee8fd5169d7c2d01725629974a49"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb.jpg","e995d23893e4e9ef65484fdad3dc6b95"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_lg.jpg","385848f9e95c8545b24a31eb879a4191"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_md.jpg","4bd36be040cdca63523fd9a4202ede74"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_placehold.jpg","8461de6829ac59ec5956f03ec4e6b977"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_sm.jpg","9d51f102b8678f4dd499733a789765f4"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_thumb.jpg","283b7a815a451224fd8b45c0f3847beb"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_thumb@2x.jpg","e81b40954f12e2642f1a50e5d99bff42"],["/assets/img/posts/ThriveHICover_thumb/ThriveHICover_thumb_xs.jpg","2f5f333f594fb8dbfe890c02226da229"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018.jpg","e61f1738abbb4ccc81bd98c6b2d2335b"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_lg.jpg","2ca40f4b5ee2b46fd0a107ecd4834755"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_md.jpg","6a311b6b6e3ae3d2675b6b47d53d1d71"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_placehold.jpg","38318a3a44f4bb8cdd2fe11dc1033ea7"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_sm.jpg","84218355d04a9cbf9d22813505a204b9"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_thumb.jpg","d63f567f98c724f9cb0c5bc72180b0df"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_thumb@2x.jpg","644a41848c0478d5702a12b28a716521"],["/assets/img/posts/acm-graduation-ceremony-fall-2018/acm-graduation-ceremony-fall-2018_xs.jpg","60fc28bcd60da6b91349058a32f57d4b"],["/assets/img/posts/acm-trivia-night/acm-trivia-night.jpg","2e927178a74665918343ff3ab17edcf8"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_lg.jpg","7a3e6623cb9176c039bbd46f557169a7"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_md.jpg","6127120ff4f5cba9808cc104da2d41cf"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_placehold.jpg","ebceefb94120b7ffc889a57e70257b75"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_sm.jpg","871e14bd9522765bfe49afb0f66368e2"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_thumb.jpg","52a628ee4481295a24e0a2fba71075cd"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_thumb@2x.jpg","f41b3048a3c18dfd1b42f5cf2d20ed4a"],["/assets/img/posts/acm-trivia-night/acm-trivia-night_xs.jpg","e5347a33bd0ee3661854ee186bb0bf80"],["/assets/img/posts/discord/discord.jpg","033df232569620200adc0bd2031a89c8"],["/assets/img/posts/discord/discord_lg.jpg","1f1e8d5cb6c637f046774f51ee80108d"],["/assets/img/posts/discord/discord_md.jpg","c90907d7e17bd12b6fd354757b47e5ef"],["/assets/img/posts/discord/discord_placehold.jpg","485c1c6c3cd41005b6de6e24b17ecc4e"],["/assets/img/posts/discord/discord_sm.jpg","ab153756ff09a07241dcd11229427c59"],["/assets/img/posts/discord/discord_thumb.jpg","a0972fca9c1410c7fe465ffcbbb572fe"],["/assets/img/posts/discord/discord_thumb@2x.jpg","60bb60475c82af8e79351c5bfe2e8302"],["/assets/img/posts/discord/discord_xs.jpg","db6d6b091dcadc323d87ffd7932b5345"],["/assets/img/posts/drfortress/drfortress.jpg","0d3d2014bf108675a90ca73e5911f114"],["/assets/img/posts/drfortress/drfortress_lg.jpg","494b1aa5fdeaf25ff356b3b23819dca3"],["/assets/img/posts/drfortress/drfortress_md.jpg","cc67b8920982b8a74d85b87545af4446"],["/assets/img/posts/drfortress/drfortress_placehold.jpg","6b754addb2b958ddab0050fd920a4211"],["/assets/img/posts/drfortress/drfortress_sm.jpg","128f9ad1b32bccabcdbf1fd532a99239"],["/assets/img/posts/drfortress/drfortress_thumb.jpg","2223291ca8db78a0f96a4699d37df81f"],["/assets/img/posts/drfortress/drfortress_thumb@2x.jpg","d67ba750353a8b7c82d935b7620c96e5"],["/assets/img/posts/drfortress/drfortress_xs.jpg","44aeed9a41af7f1ad23eba27dfc77969"],["/assets/img/posts/emile-perron-190221/emile-perron-190221.jpg","fb81c85576c5ced95f26722ae9a1db85"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_lg.jpg","5fb472c8eae3e2e5d18724eb3e97a4ce"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_md.jpg","0e990d2613bda883a314f295d4047925"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_placehold.jpg","c817e738532eb9dcd782ee29591220d8"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_sm.jpg","19dbe1b00f3c6e5fe7314ca205f46c55"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_thumb.jpg","886581470630cb1eb5823c2f778a7bb5"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_thumb@2x.jpg","8105c60a754f85f102fbbe7ac0a384b8"],["/assets/img/posts/emile-perron-190221/emile-perron-190221_xs.jpg","2489697c8bc7b4eacf24bdb153caf8ec"],["/assets/img/posts/icspace-door/icspace-door.jpg","90b0dd22caa70ec3fecea286aafa188f"],["/assets/img/posts/icspace-door/icspace-door_lg.jpg","0ac5e07f224e5d5ac74c5cdfd0075d60"],["/assets/img/posts/icspace-door/icspace-door_md.jpg","eb69e16d2fe8b12b839fdb99f404a12a"],["/assets/img/posts/icspace-door/icspace-door_placehold.jpg","dd6e08d804754394af005562e7b376a9"],["/assets/img/posts/icspace-door/icspace-door_sm.jpg","892c66d1c3b1240dfc2d601c2cc0fc45"],["/assets/img/posts/icspace-door/icspace-door_thumb.jpg","ace400bc14235e5f20c5ec465605a223"],["/assets/img/posts/icspace-door/icspace-door_thumb@2x.jpg","dd00d84e7eceb54eb8091a54932a1295"],["/assets/img/posts/icspace-door/icspace-door_xs.jpg","ab16fb588db8bad82a9ca03e0cd1bdac"],["/assets/img/posts/icspace-ty/icspace-ty.jpg","44414d79028ed3546ada4bd3427e8afb"],["/assets/img/posts/icspace-ty/icspace-ty_lg.jpg","b0ec64829a34acf2b9064bff81e9d781"],["/assets/img/posts/icspace-ty/icspace-ty_md.jpg","961a97c092b296733d4e893f11ac1bc4"],["/assets/img/posts/icspace-ty/icspace-ty_placehold.jpg","306dfaabc6fc650c3dd2467a8a925f8f"],["/assets/img/posts/icspace-ty/icspace-ty_sm.jpg","b7a0a249d5a9a4127aa43859c01aa239"],["/assets/img/posts/icspace-ty/icspace-ty_thumb.jpg","e3991e9a74427c8f8168a47261dd8c69"],["/assets/img/posts/icspace-ty/icspace-ty_thumb@2x.jpg","1d4825d63fb7cbc4be95f2bc01ea2854"],["/assets/img/posts/icspace-ty/icspace-ty_xs.jpg","8597171f71a6dba171a0271d91a8b6cc"],["/assets/img/posts/okifestival/okifestival.jpg","5d8f3ce1ba14186a48c03b9be76883cb"],["/assets/img/posts/okifestival/okifestival_lg.jpg","87c0f08b519b44dd018f952f333474a7"],["/assets/img/posts/okifestival/okifestival_md.jpg","88c69ca6c949e29907cea35901b6e243"],["/assets/img/posts/okifestival/okifestival_placehold.jpg","6b0ff2b628df83c039f334187675ac24"],["/assets/img/posts/okifestival/okifestival_sm.jpg","494ad0641a68af8532fefd711f7d6096"],["/assets/img/posts/okifestival/okifestival_thumb.jpg","df81cf7dc099a11d08427765e9fa6456"],["/assets/img/posts/okifestival/okifestival_thumb@2x.jpg","ca958055178faf3e15bbe8e61df1a349"],["/assets/img/posts/okifestival/okifestival_xs.jpg","c4dfae7338cfdebcda5895b52105c305"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club.jpg","8ed2f1b9bfe2d4adbf09f32adfe0a462"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_lg.jpg","dc16f903d376ec1d35387e3ac4ad1189"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_md.jpg","ccab7b16dd16a58625a148a41bdbce1d"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_placehold.jpg","1621d22470124e3910cea365860f79d7"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_sm.jpg","8e9420e191aa450bb9995363199f3a50"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_thumb.jpg","53a0410ecb9c34352f1db469d5c0ee66"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_thumb@2x.jpg","35d024eac85e526ce2bcffb5687b26ea"],["/assets/img/posts/sacred_hearts_club/sacred_hearts_club_xs.jpg","cae735d441b6e44b532f1579f595c671"],["/assets/img/posts/undefine/20181207_121238.jpg","78491c8b02e2e91daff2fb5824ec9eaa"],["/assets/img/posts/undefine/20181207_121256.jpg","0574166c9d63ca4f4aa1fdab567b40a2"],["/assets/img/posts/undefine/20181207_122618.jpg","b403c2b20155da3fab5bbfd00d37c003"],["/assets/img/posts/undefine/20181207_122621.jpg","cbcbcf21387d97d75247ad616fb65da4"],["/assets/img/posts/undefine/20181207_123255.jpg","9c5fea43025feada30277aa06c4d9a5f"],["/assets/img/posts/undefine/20181207_123256.jpg","83e5b6de46a840982577684edfdcf7e2"],["/assets/img/posts/undefine/20181207_123257.jpg","688f2124d68b5f504976e53c7820e36f"],["/assets/img/posts/undefine/20181207_123319.jpg","a9fc271fe4a4ba3328087d13f7b395a1"],["/assets/img/posts/undefine/20181207_123322.jpg","fe4ca5c7d2cee0b9cff41066a6692ec7"],["/assets/img/posts/undefine/20181207_123324.jpg","a0c19f51ddaffd8fa44338ae48cda2be"],["/assets/img/posts/undefine/20181207_123327.jpg","acc7bdd7c6cc86f491e746cd6c3016f7"],["/assets/img/posts/undefine/20181207_123328.jpg","16b2f06e9c992856983a678566352d80"],["/assets/img/posts/undefine/20181207_123350.jpg","4466172f0531cbd436ae6d5e43227929"],["/assets/img/posts/undefine/20181207_123352.jpg","2531f5e9304820940d25b317cdb019eb"],["/assets/img/posts/undefine/20181207_123354.jpg","1e944233e12662fb8e2ff7b5a4c022b5"],["/assets/img/posts/undefine/20181207_123355.jpg","bbf6de510125227f5f811bc19c6f870d"],["/assets/img/posts/undefine/20181207_123356.jpg","91c08b847a2e4b2aca47508773cc5a35"],["/assets/img/posts/undefine/20181207_123508.jpg","0d28c5e776cae1ca571584c646c5bca6"],["/assets/img/posts/undefine/20181207_123509.jpg","8debfd1fe3108c70addc59f89ff22133"],["/assets/img/posts/undefine/20181207_123511.jpg","17e4e6d2a4afb6d0774b70828b86b913"],["/assets/img/posts/undefine/20181207_123522.jpg","67b83abff44b9592b35d00114e6d43d6"],["/assets/img/posts/undefine/20181207_123523.jpg","7207a29bdb27df2dbcf581cd9d652e33"],["/assets/img/posts/undefine/20181207_123524.jpg","adbded877deaf6778432c43a75fe4976"],["/assets/img/posts/undefine/20181207_123525.jpg","3bb3c03670945e5c3cc071c58fac4f38"],["/assets/img/posts/undefine/20181207_123533.jpg","562db804c6bbe5a5835827fdba80f6e3"],["/assets/img/posts/undefine/20181207_123535.jpg","a36ec51c73c1059fdd65bbbac84dffc7"],["/assets/img/posts/undefine/20181207_123537.jpg","aa7ab5368c4c0e5283cf535bced6bc82"],["/assets/img/posts/undefine/20181207_123538.jpg","23694eb8bb6a6b4ed63217e5949a78b9"],["/assets/img/posts/undefine/20181207_123552.jpg","d74275312dfbdb9bf0080c1b11fd1fe7"],["/assets/img/posts/undefine/20181207_123554.jpg","745ae4eab61ffc42cc5a5e6b239f75bb"],["/assets/img/posts/undefine/20181207_123555.jpg","76a11143b0868fd107f1a655b88501e7"],["/assets/img/posts/undefine/20181207_123556.jpg","4d1128d92f2b3a9de5c56764ababfbab"],["/assets/img/posts/undefine/20181207_123557.jpg","a1e323da9aef8f5c80b1811acb1502d9"],["/assets/img/posts/undefine/20181207_123634(0).jpg","9a77c34c12a619aa48fc573c3018cb86"],["/assets/img/posts/undefine/20181207_123634.jpg","c99acf8ad77f66598e35e126581e6a85"],["/assets/img/posts/undefine/20181207_123636.jpg","3348cb740e793d1f8d964cb8692afa35"],["/assets/img/posts/undefine/20181207_123637.jpg","b7a9f5c4078f6510c9d0459b4b635496"],["/assets/img/posts/undefine/20181207_123722.jpg","496d0d1db747848046727c97ac9a75b1"],["/assets/img/posts/undefine/20181207_123724.jpg","a9de73cd102a802088112a9c96b7d961"],["/assets/img/posts/undefine/20181207_123728.jpg","36876565020d7ae03dbc2a3db36c5357"],["/assets/img/posts/undefine/20181207_123732.jpg","bd8266c22bcfaed93f31ef9588ef69a6"],["/assets/img/posts/undefine/20181207_123734.jpg","14371d39fe7b4d3954cbd73dd129c3e5"],["/assets/img/posts/undefine/20181207_123736.jpg","c6ef43026fe719f8d73277f2bdebb6d6"],["/assets/img/posts/undefine/20181207_123859.jpg","b8af2f5455d9305c3b4a8aa95081e8ed"],["/assets/img/posts/undefine/20181207_123908.jpg","474999f489af69751e4da2cff6e77c4a"],["/assets/img/posts/undefine/20181207_123909.jpg","0368dc8ba7fcc2ff91f7390ea42e9eeb"],["/assets/img/posts/undefine/20181207_124505.jpg","bcbbcf347659afc04902e3104f8006fc"],["/assets/img/posts/undefine/20181207_124506.jpg","419f707961aa3a5f79620ad2334d7f05"],["/assets/img/posts/undefine/20181207_124515.jpg","2cf638ec27d12eb5639190853d078eea"],["/assets/img/posts/undefine/20181207_124518.jpg","c25e37ab729f32384fac9677ebd9234a"],["/assets/img/posts/undefine/20181207_124526.jpg","23e21cd2efc3ae5d9e14590ad6c4a7bb"],["/assets/img/posts/undefine/20181207_135859.jpg","c8341da5de671d136684c99a04806d96"],["/assets/img/posts/undefine/20190315_183433.jpg","485488ff527eb5209a14b56205b145f4"],["/assets/img/posts/undefine/20190315_183439.jpg","157458d0ea21185ab97a9c59fd41fe74"],["/assets/img/posts/undefine/2023-10-12-Career-Fair-employer.png","3e846c7c82217d0e2d6331d07935b52d"],["/assets/img/posts/undefine/ACMTriviaNightSpring2019Flyer.jpg","a30b636fdfdfa69b210b56e93b91c68a"],["/assets/img/posts/undefine/First Meeting.png","407b8cf3e699162fac66b4fb06c21717"],["/assets/img/posts/undefine/Snapchat-2030813317.jpg","6a67a6dc8951f65cca4da4ea80ec8f94"],["/assets/img/posts/undefine/Snapchat-467130255.jpg","89ca8fb7d8f32ff15f75e6409028768f"],["/assets/img/posts/undefine/ThriveHICover.jpg","c2c6da46e93b1b06dd38181587928d6b"],["/assets/img/posts/undefine/aci.jpg","aa7b3988189c2059d17427c4a0b7fc07"],["/assets/img/posts/undefine/acm_cover.png","64ec1d239a54aa867f1aa6d42dd0de7d"],["/assets/img/posts/undefine/acmanoa.jpg","30ed6b12a0d8e219203831c7ccc791eb"],["/assets/img/posts/undefine/cover.jpg","8857e712f4b7d58492648d978eab724d"],["/assets/img/posts/undefine/crowd1.jpg","47d96326781ee0cc80e419f54ca94d37"],["/assets/img/posts/undefine/crowd2.jpg","dfc797279a67da4f391d41c52716a400"],["/assets/img/posts/undefine/crowd3.jpg","8d2cfada52c84760fcfdd8af1cca4be9"],["/assets/img/posts/undefine/data-science.jpg","3fd850e02fdfbe9f844173627de242e1"],["/assets/img/posts/undefine/f22-genmeeting-clubs.png","fc7d545d6aa41e43e354acf1a10a1d26"],["/assets/img/posts/undefine/footer.jpg","61aac8ebad1ae2ae86cce097a8f71fed"],["/assets/img/posts/undefine/greyhats.jpg","7ed6f3026556cf49be7d5b272719adb2"],["/assets/img/posts/undefine/hs_student_presents_app.png","0712151e2a75e733fe3ed4ec1bcde6ff"],["/assets/img/posts/undefine/image0-10.jpg","a28ec01fc3b9c6d534ee2d75cc57a006"],["/assets/img/posts/undefine/image0-12.jpg","c0cd451b7a9e1ae060cbef31ba694ebe"],["/assets/img/posts/undefine/image0-16.jpg","d2153c7d06cd163070079f5a7fb915d5"],["/assets/img/posts/undefine/image0-18.jpg","4ff56f5767a32ff9d1a4478f65fc2454"],["/assets/img/posts/undefine/image0-20.jpg","372a70b537b36c35319b587d91df8b4b"],["/assets/img/posts/undefine/image0-24.jpg","9f9418faf54f2c886b3b53391847cf3b"],["/assets/img/posts/undefine/image0-5.jpg","318dd9026bb757675c240c49285e5b1d"],["/assets/img/posts/undefine/image0-6.jpg","7ba7e53712d8530b857fc7e795b83528"],["/assets/img/posts/undefine/image0-7.jpg","642d01b3af4561fffd9f84f69b6f459c"],["/assets/img/posts/undefine/image0-8.jpg","a4dea73b6c20498b990deab73607ce21"],["/assets/img/posts/undefine/image0-9.jpg","c11656a5988c0b42fafaa8a8efc7983b"],["/assets/img/posts/undefine/punahou_compsci_students.png","528eb90bb9c68b0369b175876f95c97d"],["/assets/img/posts/undefine/sacred_hearts_with_acm.png","fca4a65b49e189eba81e728744c0acc6"],["/assets/img/posts/wetware-wednesday/wetware-wednesday.jpg","acce9fe63a7a819f2f2c98b9566a5680"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_lg.jpg","8a8fb219f6863c4a6458db4fbae8313e"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_md.jpg","703823b849cd961a32edabd7b9c3008a"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_placehold.jpg","15649dddce15e4381a918f6d414a3a9f"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_sm.jpg","563835d4580a528359b17e7a8074957d"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_thumb.jpg","2c03b5ac93165fd1dc16c10efd17a09f"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_thumb@2x.jpg","e6015cb0402903550f8bba0f017cba1c"],["/assets/img/posts/wetware-wednesday/wetware-wednesday_xs.jpg","fdf45e8d60280a7ae03417520bfa9c58"],["/assets/img/sponsors/FAST.png","af20fc9e56f42b2162a9696a4ec5f099"],["/assets/img/sponsors/crowdstrike.jpg","bf1dedf5c9c979f862b79260f8feb5a7"],["/assets/img/sponsors/cyberhui.jpg","6f2c2f0ed11c8a0d9883dd515a33667b"],["/assets/img/sponsors/oath.png","7c6338928d864a3def6261b775104fd7"],["/assets/img/sponsors/revacomm.jpg","42241c7ed6b7393312830def2f910ba0"],["/assets/img/sponsors/uhics.png","d11a7c7c262ec5baf3d44a43b2cf61dd"],["/assets/js/bundle.js","8b9cae1b4fe6f3867aadcadc148e55c8"],["/assets/js/vanilla-tilt.min.js","8351aea0565670bbab35cfd0647c6505"],["/career-fair/index.html","a3b09d4a52d549a6ab243f6962a3d0c1"],["/drfortress-field-trip/index.html","83f09a08e148ae7dc8d4d511435cb0f6"],["/dump_database/2023-11-14-Datathon/index.html","e22ca609594dcce3f4046215c5c53cad"],["/icspace-rennovation/index.html","def1288c5dc5614f4f0914ac4a4a7a1a"],["/index.html","ac609d4b87bb85c6dc7260a1549bb6bd"],["/kanehekili-datathon/index.html","1682243add5071bd6177a10f0efc27c9"],["/pages/about/index.html","3bbebeabe5087271e2085e5f2de739da"],["/pages/categories/index.html","0e4ce176beb48d68cdfdc8b13924def9"],["/pages/clubs/ballroom/index.html","8bca7bf08b2bbe898beff499a265ce97"],["/pages/clubs/gamedev/index.html","8831d9da99ad2964034e0e2d657abdd8"],["/pages/clubs/greyhats/index.html","7442f58c595729368b4b59e7e6159f74"],["/pages/clubs/icspark/index.html","8950f31d13138e40653f3f8dcaeb94d3"],["/pages/clubs/panda/index.html","41905f9b486e044a06bb04171e3b2f1c"],["/pages/clubs/switch/index.html","da71c2da6a46f2713ae400f6959b863b"],["/pages/contact/index.html","2d0cff072a188579125a349c4474a9d4"],["/pages/event/index.html","6277e80760b9ee17613af3e70ca4a9a4"],["/pages/history/index.html","6f1833b3e56b4fbb8bf3d3bb73e63a4e"],["/pages/icspace/index.html","59c8bca55712d750f1f310a4fb114300"],["/pages/sponsors/index.html","7616437011c7ccf5a6d9ce2bb3c7c835"],["/sw.js","eee7c9b74c41819ad0125b3de770910c"],["/talk-story-with-tech-professionals/index.html","2270d9ed0afce84449a792ec815a0160"],["/talk-story-with-tech-professionals2022/index.html","11bdb6c386e469eb6ddf62ca51ff9600"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







