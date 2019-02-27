const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: "Karlan Spain-Gower",
    email: "kspaingower0@photobucket.com",
    avatar: "https://robohash.org/ametipsumrerum.bmp?size=100x100&set=set1",
    age: 35
  },
  {
    id: 2,
    name: "Tommy Kebbell",
    email: "tkebbell1@scientificamerican.com",
    avatar:
      "https://robohash.org/quibusdamaccusantiumeaque.bmp?size=100x100&set=set1",
    age: 67
  },
  {
    id: 3,
    name: "Arty Woltman",
    email: "awoltman2@google.it",
    avatar:
      "https://robohash.org/oditlaborumrepellat.bmp?size=100x100&set=set1",
    age: 86
  },
  {
    id: 4,
    name: "Lorenza Frazer",
    email: "lfrazer3@about.me",
    avatar:
      "https://robohash.org/vitaelaudantiumquia.jpg?size=100x100&set=set1",
    age: 67
  },
  {
    id: 5,
    name: "Phelia Hiorn",
    email: "phiorn4@g.co",
    avatar: "https://robohash.org/aberroradipisci.bmp?size=100x100&set=set1",
    age: 79
  },
  {
    id: 6,
    name: "Danny Kelson",
    email: "dkelson5@forbes.com",
    avatar:
      "https://robohash.org/sapientevoluptassint.jpg?size=100x100&set=set1",
    age: 13
  },
  {
    id: 7,
    name: "Danni Skelhorn",
    email: "dskelhorn6@amazon.com",
    avatar:
      "https://robohash.org/consequunturcorruptiaut.png?size=100x100&set=set1",
    age: 51
  },
  {
    id: 8,
    name: "Art Maevela",
    email: "amaevela7@unicef.org",
    avatar: "https://robohash.org/liberonemonam.jpg?size=100x100&set=set1",
    age: 55
  },
  {
    id: 9,
    name: "Mamie Maccari",
    email: "mmaccari8@netscape.com",
    avatar: "https://robohash.org/aliquidmolestiasex.bmp?size=100x100&set=set1",
    age: 16
  },
  {
    id: 10,
    name: "Thacher Rook",
    email: "trook9@xrea.com",
    avatar:
      "https://robohash.org/voluptasautvoluptas.png?size=100x100&set=set1",
    age: 74
  },
  {
    id: 11,
    name: "Gilberto Michele",
    email: "gmichelea@google.nl",
    avatar:
      "https://robohash.org/eosculpaperferendis.bmp?size=100x100&set=set1",
    age: 26
  },
  {
    id: 12,
    name: "Boone Civitillo",
    email: "bcivitillob@phpbb.com",
    avatar:
      "https://robohash.org/doloribuseumperspiciatis.bmp?size=100x100&set=set1",
    age: 54
  },
  {
    id: 13,
    name: "Jelene Skillicorn",
    email: "jskillicornc@plala.or.jp",
    avatar:
      "https://robohash.org/nesciuntrepudiandaeest.png?size=100x100&set=set1",
    age: 82
  },
  {
    id: 14,
    name: "Honey Entwistle",
    email: "hentwistled@mlb.com",
    avatar: "https://robohash.org/nihilvelab.bmp?size=100x100&set=set1",
    age: 65
  },
  {
    id: 15,
    name: "Rodi Btham",
    email: "rbthame@businessinsider.com",
    avatar: "https://robohash.org/perferendisquiqui.png?size=100x100&set=set1",
    age: 52
  },
  {
    id: 16,
    name: "Helaina Childerhouse",
    email: "hchilderhousef@blogger.com",
    avatar:
      "https://robohash.org/sequivoluptatemrepellendus.bmp?size=100x100&set=set1",
    age: 23
  },
  {
    id: 17,
    name: "Maximilien Korpal",
    email: "mkorpalg@yahoo.com",
    avatar: "https://robohash.org/fugiatautdelectus.png?size=100x100&set=set1",
    age: 32
  },
  {
    id: 18,
    name: "Ernesta Gooday",
    email: "egoodayh@businessweek.com",
    avatar:
      "https://robohash.org/molestiaeoccaecatisaepe.jpg?size=100x100&set=set1",
    age: 27
  },
  {
    id: 19,
    name: "Shani Dods",
    email: "sdodsi@abc.net.au",
    avatar: "https://robohash.org/iustomaioresenim.jpg?size=100x100&set=set1",
    age: 97
  },
  {
    id: 20,
    name: "Maynard Babalola",
    email: "mbabalolaj@washingtonpost.com",
    avatar: "https://robohash.org/fugavoluptatemut.jpg?size=100x100&set=set1",
    age: 1
  },
  {
    id: 21,
    name: "Kayne Littrik",
    email: "klittrikk@toplist.cz",
    avatar: "https://robohash.org/adfacereautem.png?size=100x100&set=set1",
    age: 55
  },
  {
    id: 22,
    name: "Valentine Dionis",
    email: "vdionisl@unblog.fr",
    avatar:
      "https://robohash.org/veritatisdoloribusearum.bmp?size=100x100&set=set1",
    age: 80
  },
  {
    id: 23,
    name: "Cindee Ors",
    email: "corsm@nydailynews.com",
    avatar: "https://robohash.org/facereetplaceat.jpg?size=100x100&set=set1",
    age: 23
  },
  {
    id: 24,
    name: "Gardiner Dudill",
    email: "gdudilln@shareasale.com",
    avatar: "https://robohash.org/dictacupiditateest.png?size=100x100&set=set1",
    age: 84
  },
  {
    id: 25,
    name: "Dore Feldstein",
    email: "dfeldsteino@com.com",
    avatar: "https://robohash.org/saepenisiminus.bmp?size=100x100&set=set1",
    age: 97
  },
  {
    id: 26,
    name: "Shari Woodes",
    email: "swoodesp@addtoany.com",
    avatar: "https://robohash.org/eosaccusamusrem.jpg?size=100x100&set=set1",
    age: 8
  },
  {
    id: 27,
    name: "Zebadiah Fillary",
    email: "zfillaryq@apple.com",
    avatar:
      "https://robohash.org/recusandaeplaceatet.jpg?size=100x100&set=set1",
    age: 22
  },
  {
    id: 28,
    name: "Ervin Waller",
    email: "ewallerr@hatena.ne.jp",
    avatar:
      "https://robohash.org/assumendaabcorrupti.jpg?size=100x100&set=set1",
    age: 35
  },
  {
    id: 29,
    name: "Jenine McCool",
    email: "jmccools@walmart.com",
    avatar:
      "https://robohash.org/idvoluptatemnecessitatibus.jpg?size=100x100&set=set1",
    age: 4
  },
  {
    id: 30,
    name: "Allard Rosencwaig",
    email: "arosencwaigt@people.com.cn",
    avatar:
      "https://robohash.org/quisuscipitquisquam.bmp?size=100x100&set=set1",
    age: 29
  },
  {
    id: 31,
    name: "Tremaine Girodier",
    email: "tgirodieru@uol.com.br",
    avatar:
      "https://robohash.org/officiaquodperferendis.png?size=100x100&set=set1",
    age: 9
  },
  {
    id: 32,
    name: "Nefen Preston",
    email: "nprestonv@nifty.com",
    avatar: "https://robohash.org/nonquamdoloribus.jpg?size=100x100&set=set1",
    age: 86
  },
  {
    id: 33,
    name: "Bell Paris",
    email: "bparisw@miibeian.gov.cn",
    avatar: "https://robohash.org/noncupiditateesse.bmp?size=100x100&set=set1",
    age: 25
  },
  {
    id: 34,
    name: "Mathe Rishman",
    email: "mrishmanx@guardian.co.uk",
    avatar:
      "https://robohash.org/providentrepudiandaevoluptate.png?size=100x100&set=set1",
    age: 58
  },
  {
    id: 35,
    name: "Junette Sowman",
    email: "jsowmany@behance.net",
    avatar: "https://robohash.org/maximequasquia.png?size=100x100&set=set1",
    age: 98
  },
  {
    id: 36,
    name: "Bryna Banishevitz",
    email: "bbanishevitzz@berkeley.edu",
    avatar: "https://robohash.org/providentofficiaet.bmp?size=100x100&set=set1",
    age: 15
  },
  {
    id: 37,
    name: "Shani Reuss",
    email: "sreuss10@typepad.com",
    avatar:
      "https://robohash.org/voluptascorruptiiusto.png?size=100x100&set=set1",
    age: 73
  },
  {
    id: 38,
    name: "Valentine Sturmey",
    email: "vsturmey11@sitemeter.com",
    avatar: "https://robohash.org/quosrerumquia.png?size=100x100&set=set1",
    age: 87
  },
  {
    id: 39,
    name: "Vida Alexandre",
    email: "valexandre12@spotify.com",
    avatar: "https://robohash.org/enimporrofacilis.png?size=100x100&set=set1",
    age: 60
  },
  {
    id: 40,
    name: "Christina Borless",
    email: "cborless13@nymag.com",
    avatar: "https://robohash.org/officiaautemquis.bmp?size=100x100&set=set1",
    age: 51
  },
  {
    id: 41,
    name: "Jilli Manach",
    email: "jmanach14@sun.com",
    avatar: "https://robohash.org/etofficiaexcepturi.png?size=100x100&set=set1",
    age: 69
  },
  {
    id: 42,
    name: "Emalia Owenson",
    email: "eowenson15@umn.edu",
    avatar:
      "https://robohash.org/velitcorporiseligendi.jpg?size=100x100&set=set1",
    age: 50
  },
  {
    id: 43,
    name: "Margaretha Leveridge",
    email: "mleveridge16@ebay.co.uk",
    avatar:
      "https://robohash.org/nobisassumendaeligendi.jpg?size=100x100&set=set1",
    age: 27
  },
  {
    id: 44,
    name: "Sloane Grayne",
    email: "sgrayne17@mtv.com",
    avatar: "https://robohash.org/optioquiid.bmp?size=100x100&set=set1",
    age: 58
  },
  {
    id: 45,
    name: "Myles Caraher",
    email: "mcaraher18@google.nl",
    avatar:
      "https://robohash.org/veritatisdelectusnon.jpg?size=100x100&set=set1",
    age: 10
  },
  {
    id: 46,
    name: "Pennie Sandhill",
    email: "psandhill19@tuttocitta.it",
    avatar: "https://robohash.org/quodautvelit.jpg?size=100x100&set=set1",
    age: 41
  },
  {
    id: 47,
    name: "Darrick Moen",
    email: "dmoen1a@nsw.gov.au",
    avatar:
      "https://robohash.org/veritatisasperioresat.png?size=100x100&set=set1",
    age: 100
  },
  {
    id: 48,
    name: "Melessa MacGruer",
    email: "mmacgruer1b@dion.ne.jp",
    avatar: "https://robohash.org/quiutqui.bmp?size=100x100&set=set1",
    age: 56
  },
  {
    id: 49,
    name: "Anabella Budding",
    email: "abudding1c@bandcamp.com",
    avatar: "https://robohash.org/eiusdolorsequi.jpg?size=100x100&set=set1",
    age: 10
  },
  {
    id: 50,
    name: "Igor Boome",
    email: "iboome1d@dmoz.org",
    avatar: "https://robohash.org/etisteasperiores.jpg?size=100x100&set=set1",
    age: 28
  },
  {
    id: 51,
    name: "Eben Feron",
    email: "eferon1e@list-manage.com",
    avatar:
      "https://robohash.org/ullamdelectustenetur.jpg?size=100x100&set=set1",
    age: 78
  },
  {
    id: 52,
    name: "Jacquenette Fenny",
    email: "jfenny1f@wunderground.com",
    avatar: "https://robohash.org/rerumlaboreea.bmp?size=100x100&set=set1",
    age: 73
  },
  {
    id: 53,
    name: "Minetta Westfalen",
    email: "mwestfalen1g@dot.gov",
    avatar: "https://robohash.org/corruptiinut.jpg?size=100x100&set=set1",
    age: 63
  },
  {
    id: 54,
    name: "Wang Mackinder",
    email: "wmackinder1h@zimbio.com",
    avatar: "https://robohash.org/quietaperiam.bmp?size=100x100&set=set1",
    age: 56
  },
  {
    id: 55,
    name: "Myrtle Cantrell",
    email: "mcantrell1i@domainmarket.com",
    avatar: "https://robohash.org/vitaeeaqueid.bmp?size=100x100&set=set1",
    age: 24
  },
  {
    id: 56,
    name: "Erin Nutbeem",
    email: "enutbeem1j@google.co.jp",
    avatar:
      "https://robohash.org/voluptatemdoloritaque.jpg?size=100x100&set=set1",
    age: 41
  },
  {
    id: 57,
    name: "Anselma Truswell",
    email: "atruswell1k@ted.com",
    avatar: "https://robohash.org/eosrationeatque.png?size=100x100&set=set1",
    age: 40
  },
  {
    id: 58,
    name: "Dominic Noot",
    email: "dnoot1l@weebly.com",
    avatar:
      "https://robohash.org/laboriosamnatusvelit.jpg?size=100x100&set=set1",
    age: 6
  },
  {
    id: 59,
    name: "Cecilla Deabill",
    email: "cdeabill1m@wufoo.com",
    avatar:
      "https://robohash.org/sapientequospossimus.jpg?size=100x100&set=set1",
    age: 64
  },
  {
    id: 60,
    name: "Garner Sholl",
    email: "gsholl1n@goo.ne.jp",
    avatar:
      "https://robohash.org/recusandaeanimimaxime.bmp?size=100x100&set=set1",
    age: 43
  },
  {
    id: 61,
    name: "Vincent Povall",
    email: "vpovall1o@amazon.co.jp",
    avatar: "https://robohash.org/utavoluptatem.jpg?size=100x100&set=set1",
    age: 12
  },
  {
    id: 62,
    name: "Jed McGriele",
    email: "jmcgriele1p@g.co",
    avatar: "https://robohash.org/quoconsequaturquod.jpg?size=100x100&set=set1",
    age: 5
  },
  {
    id: 63,
    name: "Dmitri Hempshall",
    email: "dhempshall1q@diigo.com",
    avatar: "https://robohash.org/dolorillooccaecati.png?size=100x100&set=set1",
    age: 18
  },
  {
    id: 64,
    name: "Antin Lofts",
    email: "alofts1r@wikimedia.org",
    avatar:
      "https://robohash.org/laboreestpraesentium.jpg?size=100x100&set=set1",
    age: 26
  },
  {
    id: 65,
    name: "Cedric Jane",
    email: "cjane1s@i2i.jp",
    avatar: "https://robohash.org/quasvelitquo.bmp?size=100x100&set=set1",
    age: 93
  },
  {
    id: 66,
    name: "Barnaby Dametti",
    email: "bdametti1t@360.cn",
    avatar: "https://robohash.org/inculpaeius.png?size=100x100&set=set1",
    age: 72
  },
  {
    id: 67,
    name: "Naoma Portress",
    email: "nportress1u@livejournal.com",
    avatar: "https://robohash.org/nihilrationeet.jpg?size=100x100&set=set1",
    age: 81
  },
  {
    id: 68,
    name: "Jobina Newlin",
    email: "jnewlin1v@over-blog.com",
    avatar: "https://robohash.org/molestiaefugiatin.jpg?size=100x100&set=set1",
    age: 39
  },
  {
    id: 69,
    name: "Griffie Wasmuth",
    email: "gwasmuth1w@vistaprint.com",
    avatar: "https://robohash.org/omnisconsequaturut.jpg?size=100x100&set=set1",
    age: 79
  },
  {
    id: 70,
    name: "Louella Kembery",
    email: "lkembery1x@nydailynews.com",
    avatar:
      "https://robohash.org/quianemoconsectetur.png?size=100x100&set=set1",
    age: 71
  },
  {
    id: 71,
    name: "Ambrosio Aleksashin",
    email: "aaleksashin1y@usgs.gov",
    avatar:
      "https://robohash.org/utadipiscimolestias.bmp?size=100x100&set=set1",
    age: 63
  },
  {
    id: 72,
    name: "Saundra Chattoe",
    email: "schattoe1z@comcast.net",
    avatar: "https://robohash.org/quiaquoplaceat.bmp?size=100x100&set=set1",
    age: 49
  },
  {
    id: 73,
    name: "Karina Pennings",
    email: "kpennings20@vinaora.com",
    avatar:
      "https://robohash.org/omnissolutaquibusdam.bmp?size=100x100&set=set1",
    age: 26
  },
  {
    id: 74,
    name: "Livy Leist",
    email: "lleist21@unc.edu",
    avatar:
      "https://robohash.org/laboreremperferendis.png?size=100x100&set=set1",
    age: 63
  },
  {
    id: 75,
    name: "Jabez Peskett",
    email: "jpeskett22@livejournal.com",
    avatar:
      "https://robohash.org/velitconsequunturut.jpg?size=100x100&set=set1",
    age: 35
  },
  {
    id: 76,
    name: "Vannie Cronshaw",
    email: "vcronshaw23@pen.io",
    avatar: "https://robohash.org/ullamquiasapiente.jpg?size=100x100&set=set1",
    age: 53
  },
  {
    id: 77,
    name: "Velvet Fehners",
    email: "vfehners24@addthis.com",
    avatar:
      "https://robohash.org/sapienteanimiconsequatur.jpg?size=100x100&set=set1",
    age: 69
  },
  {
    id: 78,
    name: "Hildagard O'Doran",
    email: "hodoran25@sitemeter.com",
    avatar: "https://robohash.org/rerumvelitsit.png?size=100x100&set=set1",
    age: 7
  },
  {
    id: 79,
    name: "Griff Dudbridge",
    email: "gdudbridge26@businessweek.com",
    avatar:
      "https://robohash.org/voluptatemsintofficia.jpg?size=100x100&set=set1",
    age: 52
  },
  {
    id: 80,
    name: "Gal Cully",
    email: "gcully27@bbc.co.uk",
    avatar: "https://robohash.org/nonquidemporro.bmp?size=100x100&set=set1",
    age: 94
  },
  {
    id: 81,
    name: "Parrnell Whithorn",
    email: "pwhithorn28@cisco.com",
    avatar: "https://robohash.org/excorruptiodit.jpg?size=100x100&set=set1",
    age: 81
  },
  {
    id: 82,
    name: "Ellen Somerville",
    email: "esomerville29@hc360.com",
    avatar:
      "https://robohash.org/repudiandaevitaerepellat.jpg?size=100x100&set=set1",
    age: 22
  },
  {
    id: 83,
    name: "Burtie Harlin",
    email: "bharlin2a@cpanel.net",
    avatar: "https://robohash.org/sequinonea.bmp?size=100x100&set=set1",
    age: 5
  },
  {
    id: 84,
    name: "Huberto Emtage",
    email: "hemtage2b@example.com",
    avatar: "https://robohash.org/quoabfacere.bmp?size=100x100&set=set1",
    age: 86
  },
  {
    id: 85,
    name: "Felicdad Magister",
    email: "fmagister2c@cdbaby.com",
    avatar: "https://robohash.org/utautquae.jpg?size=100x100&set=set1",
    age: 26
  },
  {
    id: 86,
    name: "Freddi Giacopazzi",
    email: "fgiacopazzi2d@admin.ch",
    avatar: "https://robohash.org/quisquaset.bmp?size=100x100&set=set1",
    age: 86
  },
  {
    id: 87,
    name: "Jethro Anstis",
    email: "janstis2e@51.la",
    avatar:
      "https://robohash.org/facerequoddoloribus.png?size=100x100&set=set1",
    age: 83
  },
  {
    id: 88,
    name: "Kerr Cockayme",
    email: "kcockayme2f@sciencedirect.com",
    avatar: "https://robohash.org/estdelenitieaque.jpg?size=100x100&set=set1",
    age: 94
  },
  {
    id: 89,
    name: "Frankie Cheyne",
    email: "fcheyne2g@addtoany.com",
    avatar:
      "https://robohash.org/doloresmolestiasquos.jpg?size=100x100&set=set1",
    age: 25
  },
  {
    id: 90,
    name: "Liam Fretson",
    email: "lfretson2h@51.la",
    avatar: "https://robohash.org/ipsameumsint.png?size=100x100&set=set1",
    age: 84
  },
  {
    id: 91,
    name: "Nedda Prozillo",
    email: "nprozillo2i@homestead.com",
    avatar: "https://robohash.org/maioreseiusnulla.bmp?size=100x100&set=set1",
    age: 59
  },
  {
    id: 92,
    name: "Killie Andryunin",
    email: "kandryunin2j@discuz.net",
    avatar: "https://robohash.org/quibeataeneque.png?size=100x100&set=set1",
    age: 92
  },
  {
    id: 93,
    name: "Beitris Baudry",
    email: "bbaudry2k@ca.gov",
    avatar: "https://robohash.org/omnisrerumsint.jpg?size=100x100&set=set1",
    age: 36
  },
  {
    id: 94,
    name: "Letty Jantet",
    email: "ljantet2l@fda.gov",
    avatar:
      "https://robohash.org/esseperferendisaperiam.jpg?size=100x100&set=set1",
    age: 69
  },
  {
    id: 95,
    name: "Feodor Rey",
    email: "frey2m@weather.com",
    avatar: "https://robohash.org/estvoluptatemillum.png?size=100x100&set=set1",
    age: 50
  },
  {
    id: 96,
    name: "Reina Merrick",
    email: "rmerrick2n@vimeo.com",
    avatar: "https://robohash.org/quasidoloreodio.png?size=100x100&set=set1",
    age: 84
  },
  {
    id: 97,
    name: "Gabe McPhail",
    email: "gmcphail2o@discuz.net",
    avatar: "https://robohash.org/placeateabeatae.bmp?size=100x100&set=set1",
    age: 3
  },
  {
    id: 98,
    name: "Clayton Starmer",
    email: "cstarmer2p@flickr.com",
    avatar: "https://robohash.org/animiidpraesentium.bmp?size=100x100&set=set1",
    age: 98
  },
  {
    id: 99,
    name: "Manuel Devons",
    email: "mdevons2q@nifty.com",
    avatar: "https://robohash.org/velsintest.jpg?size=100x100&set=set1",
    age: 20
  },
  {
    id: 100,
    name: "Bert Dumingo",
    email: "bdumingo2r@goo.gl",
    avatar:
      "https://robohash.org/doloribusquiconsectetur.jpg?size=100x100&set=set1",
    age: 92
  }
];
app.use(cors());
app.use(bodyParser.json());

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.post("/friends", (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put("/friends/:id", (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete("/friends/:id", (req, res) => {
  friends = friends.filter(friend => friend.id != req.params.id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
