/*
 * Mapbar Maplet Engine (C)2005 Mapbar Inc
 * Date: 2014-10-16
 * Time: 14:03:29
 * Type: mapbar
 * Version: 31.3
 */
if (typeof strImgsvrUrl == "undefined") strImgsvrUrl = "http://img.mapbar.com/maplite/";
if (typeof strMapsvrUrl == "undefined") strMapsvrUrl = "http://api.mapbar.com/api/";
CTLIMG_RESOURCE = [{
    url: strImgsvrUrl + "images/mapbar31.2.1.png",
    w: 210,
    h: 235
}, {
    url: strImgsvrUrl + 'images/miw3.png',
    w: 150,
    h: 70
}, {
    url: strImgsvrUrl + 'images/miws3.png',
    w: 1058,
    h: 368
}];
var transparencyLevel = 60;
var DirectionInfo = '';
var strLicenseKey = "3409";
var strRemoteIP = "www.mapbar.com";
if (typeof iToolTipStyle == "undefined") {
    var iToolTipStyle = 1
}
var mapwidth = 600;
var mapheight = 400;
var MapBackgroundColor = "#EBEAE8";
var k1x95 = new Array();
k1x95["\u5168\u56FD"] = "GGEJDBVUUEARA";
k1x95["\u5317\u4EAC\u5E02"] = "HETCUFWVVHUEE";
k1x95["\u5929\u6D25\u5E02"] = "HHCIWHXVVJDBG";
k1x95["\u5858\u6CBD"] = "HIAUDWXVWBRBG";
k1x95["\u5927\u6E2F\u533A"] = "HHWJIRXVVHCUF";
k1x95["\u4E0A\u6D77\u5E02"] = "IJSRVJXVIWCHC";
k1x95["\u91CD\u5E86\u5E02"] = "HFISFCXTWJRFB";
k1x95["\u5E7F\u4E1C\u7701"] = "IJITUVWUABJGJ";
k1x95["\u5E7F\u5DDE\u5E02"] = "IJITUVWUABJGJ";
k1x95["\u6E05\u8FDC\u5E02"] = "IIFAAAVUARHGU";
k1x95["\u4F5B\u5C71\u5E02"] = "IJHUEEXTWSGVB";
k1x95["\u6DF1\u5733\u5E02"] = "ISTBEAVUAIIDF";
k1x95["\u6E5B\u6C5F\u5E02"] = "IICSURVTITUFU";
k1x95["\u8087\u5E86\u5E02"] = "IIHDAVWTVUETJ";
k1x95["\u4E2D\u5C71\u5E02"] = "IRRTRJXTWFUSG";
k1x95["\u4E1C\u839E\u5E02"] = "IRHDSEVUASTDU";
k1x95["\u97F6\u5173\u5E02"] = "IHIJCWXUDDDST";
k1x95["\u6C55\u5934\u5E02"] = "IVHBSGXUFSBTW";
k1x95["\u987A\u5FB7\u5E02"] = "IRBBEVXTWRHIS";
k1x95["\u73E0\u6D77\u5E02"] = "ISFWBTXTWDEUF";
k1x95["\u63ED\u9633\u5E02"] = "IURJHGVUFHRSU";
k1x95["\u4ECE\u5316\u5E02"] = "IJHDBRVUBEBAJ";
k1x95["\u6F6E\u5DDE\u5E02"] = "IUVGRVWUGBCDU";
k1x95["\u60E0\u5DDE\u5E02"] = "ISGGRHVUBTSBE";
k1x95["\u6C5F\u95E8\u5E02"] = "IRCSTCXTWBEAW";
k1x95["\u8302\u540D\u5E02"] = "IICVSCXTRDWRD";
k1x95["\u6885\u5DDE\u5E02"] = "ITCCETVUGDGIS";
k1x95["\u6CB3\u6E90\u5E02"] = "IRUDJJXUDDIWR";
k1x95["\u6C55\u5C3E\u5E02"] = "IUFAWHXUCTDWC";
k1x95["\u9633\u6C5F\u5E02"] = "IJIJHFWTTDFTV";
k1x95["\u4E91\u6D6E\u5E02"] = "IIAGBIWTUVVGB";
k1x95["\u6C88\u9633\u5E02"] = "HTJTRBXWTBGET";
k1x95["\u961C\u65B0\u5E02"] = "HJJCFJXWJSHWV";
k1x95["\u76D8\u9526\u5E02"] = "HSEHGRXWJBBHU";
k1x95["\u629A\u987A\u5E02"] = "HUBGDJXWTSTTT";
k1x95["\u8425\u53E3\u5E02"] = "HTIACGXWIIVJH";
k1x95["\u5927\u8FDE\u5E02"] = "HVDFTDXWEVHRR";
k1x95["\u846B\u82A6\u5C9B\u5E02"] = "HRERFAXWGITHJ";
k1x95["\u978D\u5C71\u5E02"] = "HTWGIRXWRHBRU";
k1x95["\u4E39\u4E1C\u5E02"] = "IAJJRUXWRWGTR";
k1x95["\u5357\u4EAC\u5E02"] = "IEGDCTWVGDBVS";
k1x95["\u5F90\u5DDE\u5E02"] = "HVJDGSWVHBRHC";
k1x95["\u8FDE\u4E91\u6E2F\u5E02"] = "IBBDTHWVRJVHE";
k1x95["\u6DEE\u9634\u5E02"] = "ICGHTUWVIURHG";
k1x95["\u76D0\u57CE\u5E02"] = "IEGSSTXVRDWJB";
k1x95["\u626C\u5DDE\u5E02"] = "IEUWEUXVHRSJG";
k1x95["\u6CF0\u5DDE\u5E02"] = "IFGWVFXVIIUDV";
k1x95["\u9547\u6C5F\u5E02"] = "IFCRFFWVHGGAI";
k1x95["\u5357\u901A\u5E02"] = "IHJVAAWVJEAFH";
k1x95["\u5E38\u5DDE\u5E02"] = "IGJGIVWVHIHHB";
k1x95["\u65E0\u9521\u5E02"] = "IHGVVGWVHSTJB";
k1x95["\u82CF\u5DDE\u5E02"] = "IIEIVUWVHTJBE";
k1x95["\u6DEE\u5B89\u5E02"] = "ICGJGDWVIVFJA";
k1x95["\u5BBF\u8FC1\u5E02"] = "IASVJUWVIFASV";
k1x95["\u6C5F\u9634\u5E02"] = "IGUWDTXVIDIHW";
k1x95["\u5B9C\u5174\u5E02"] = "IIFVGWTGXHJAWEBHF";
k1x95["\u6B66\u6C49\u5E02"] = "HWTARHXUUAIWI";
k1x95["\u8346\u95E8\u5E02"] = "HSVJRCWURJETS";
k1x95["\u8346\u5DDE\u5E02"] = "HUARAVWUJIHSU";
k1x95["\u5341\u5830\u5E02"] = "HHEGSCXURTGGW";
k1x95["\u968F\u5DDE\u5E02"] = "HTRADCXUUGCVW";
k1x95["\u8944\u6A0A\u5E02"] = "HRDVUGWUTBDJS";
k1x95["\u5B9C\u660C\u5E02"] = "HSATBHVUISGJI";
k1x95["\u5B5D\u611F\u5E02"] = "HVRJGCWUUAHRH";
k1x95["\u6210\u90FD\u5E02"] = "HABIJDVTUJEGA";
k1x95["\u6CF8\u5DDE\u5E02"] = "HEUSFAXTTWJSS";
k1x95["\u8FBE\u5DDE\u5E02"] = "HEGUGBXUDJWFE";
k1x95["\u5E7F\u5B89\u5E02"] = "HEEGTJVUBDGJR";
k1x95["\u5E7F\u5143\u5E02"] = "HAAIBIXUCWGSS";
k1x95["\u4E50\u5C71\u5E02"] = "HBEBFWXTSGWFC";
k1x95["\u5185\u6C5F\u5E02"] = "HDDDRIXTUGWRS";
k1x95["\u6500\u679D\u82B1\u5E02"] = "HCRHCWXTDSAST";
k1x95["\u9042\u5B81\u5E02"] = "HCJJUFXTWRIGC";
k1x95["\u5B9C\u5BBE\u5E02"] = "HDTRTSXTSIWBV";
k1x95["\u81EA\u8D21\u5E02"] = "HDCDSUVTTRIJA";
k1x95["\u897F\u5B89\u5E02"] = "HBWSJFXURIERE";
k1x95["\u54B8\u9633\u5E02"] = "HBIIBFWUREFVC";
k1x95["\u77F3\u5BB6\u5E84\u5E02"] = "HESUBVWVITTHS";
k1x95["\u5510\u5C71\u5E02"] = "HHWAWWXWATUCT";
k1x95["\u79E6\u7687\u5C9B\u5E02"] = "HJJVGFXWDGIEG";
k1x95["\u627F\u5FB7\u5E02"] = "HFHJHWXWCHACR";
k1x95["\u5ECA\u574A\u5E02"] = "HFTVWAXVVFSCH";
k1x95["\u5F20\u5BB6\u53E3\u5E02"] = "HBBTDBWVUISAG";
k1x95["\u4FDD\u5B9A\u5E02"] = "HEWGEJXVSICHV";
k1x95["\u90A2\u53F0\u5E02"] = "HGDDSHWVHDJBV";
k1x95["\u90AF\u90F8\u5E02"] = "HGVCGVWVGIBRD";
k1x95["\u6CA7\u5DDE\u5E02"] = "HHVAAFWVTTRDT";
k1x95["\u592A\u539F\u5E02"] = "HCAFICWVFITUB";
k1x95["\u957F\u6CBB\u5E02"] = "HFGISAWVDTTJH";
k1x95["\u5927\u540C\u5E02"] = "GWSVEUXVRAJVR";
k1x95["\u664B\u57CE\u5E02"] = "HGBDAUWVCFJIA";
k1x95["\u664B\u4E2D\u5E02"] = "HCIWDTXVFIGDH";
k1x95["\u4E34\u6C7E\u5E02"] = "HDCJHGWVBDIBB";
k1x95["\u5415\u6881\u5730\u533A"] = "HAGDSSXVCUGWA";
k1x95["\u6714\u5DDE\u5E02"] = "GWJHIEXVHJBJF";
k1x95["\u5FFB\u5DDE\u5E02"] = "HBHFJSWVGJVDT";
k1x95["\u9633\u6CC9\u5E02"] = "HDIVBIXVHAUWW";
k1x95["\u8FD0\u57CE\u5E02"] = "HDWEIIXUVUARJ";
k1x95["\u90D1\u5DDE\u5E02"] = "HIGSCCWVCHAHF";
k1x95["\u6D1B\u9633\u5E02"] = "HGRDWVXVAFWVU";
k1x95["\u5E73\u9876\u5C71\u5E02"] = "HJHARHWVAFTSR";
k1x95["\u8BB8\u660C\u5E02"] = "HJTUEIWVBJITU";
k1x95["\u5357\u9633\u5E02"] = "HJGEVGXUVAWHW";
k1x95["\u9A7B\u9A6C\u5E97\u5E02"] = "HSSISAWVAEVVB";
k1x95["\u5468\u53E3\u5E02"] = "HSRTHWXVCDTSR";
k1x95["\u5546\u4E18\u5E02"] = "HSWBAEXVEWSCS";
k1x95["\u5F00\u5C01\u5E02"] = "HJGVEGXVDIWGW";
k1x95["\u65B0\u4E61\u5E02"] = "HHWEWDXVDJSIC";
k1x95["\u4E09\u95E8\u5CE1\u5E02"] = "HERHERWUVSTUF";
k1x95["\u6FEE\u9633\u5E02"] = "HJADAVWVGATIH";
k1x95["\u4FE1\u9633\u5E02"] = "HUBFDBXUWBFVV";
k1x95["\u9E64\u58C1\u5E02"] = "HHGUUJWVFADAE";
k1x95["\u5B89\u9633\u5E02"] = "HHHDVVXVFIVEW";
k1x95["\u7126\u4F5C\u5E02"] = "HHBCJJXVCIHWI";
k1x95["\u6F2F\u6CB3\u5E02"] = "HRUCUFWVBDVRA";
k1x95["\u957F\u6625\u5E02"] = "HTESJCVBACCRUU";
k1x95["\u5409\u6797\u5E02"] = "HVCVBJWBAEBVVR";
k1x95["\u54C8\u5C14\u6EE8\u5E02"] = "HSHWUDXBAHARIG";
k1x95["\u9F50\u9F50\u54C8\u5C14\u5E02"] = "HEWGJRXBAFGFFH";
k1x95["\u5927\u5E86\u5E02"] = "HHSSFDVBAFUUUG";
k1x95["\u4E94\u5927\u8FDE\u6C60\u5E02"] = "HGERCVWBARSCIS";
k1x95["\u7261\u4E39\u6C5F\u5E02"] = "IBTVJCXBAJTWCB";
k1x95["\u547C\u548C\u6D69\u7279\u5E02"] = "GTCIEDWVIRJSI";
k1x95["\u9521\u6797\u90ED\u52D2"] = "GVBWHFXWECWVC";
k1x95["\u6D4E\u5357\u5E02"] = "HRRRBTWVRIHDU";
k1x95["\u804A\u57CE\u5E02"] = "HJFDFSWVIJVDI";
k1x95["\u70DF\u53F0\u5E02"] = "HWWUHDXWCHRJC";
k1x95["\u5A01\u6D77\u5E02"] = "IBCGUJXWDIRTI";
k1x95["\u9752\u5C9B\u5E02"] = "IARACCWVVUDCU";
k1x95["\u6CF0\u5B89\u5E02"] = "HSIVBAXVJWASD";
k1x95["\u83B1\u829C\u5E02"] = "HTFICSXVRTHWC";
k1x95["\u6D4E\u5B81\u5E02"] = "HSVHFHWVHVRAG";
k1x95["\u83CF\u6CFD\u5E02"] = "HRHRJJXVFWWUG";
k1x95["\u4E34\u6C82\u5E02"] = "HWCAADXVRBECV";
k1x95["\u5FB7\u5DDE\u5E02"] = "HIEVBTWVRSSVF";
k1x95["\u6DC4\u535A\u5E02"] = "HTAVDJWVTEHVC";
k1x95["\u6F4D\u574A\u5E02"] = "HUTJUUWVUSVIC";
k1x95["\u65E5\u7167\u5E02"] = "IAFTHRWVTFJJS";
k1x95["\u4E1C\u8425\u5E02"] = "HSUERIWVVBGCU";
k1x95["\u6EE8\u5DDE\u5E02"] = "HSAWCDXVUBRBV";
k1x95["\u67A3\u5E84\u5E02"] = "HVDUUEWVIIUTH";
k1x95["\u5408\u80A5\u5E02"] = "ICGAACWVDIGSD";
k1x95["\u829C\u6E56\u5E02"] = "IEUISRWVEGSBF";
k1x95["\u9EC4\u5C71\u5E02"] = "IHDTICWVBUURU";
k1x95["\u5B89\u5E86\u5E02"] = "IEBDSUWVBDBHE";
k1x95["\u868C\u57E0\u5E02"] = "IAUUAAWVFFCHB";
k1x95["\u4EB3\u5DDE\u5E02"] = "HUAIWVXVEFIFU";
k1x95["\u5DE2\u6E56\u5E02"] = "IDRTRDWVEBHRV";
k1x95["\u6C60\u5DDE\u5E02"] = "IEIGTWXVCAUIC";
k1x95["\u6EC1\u5DDE\u5E02"] = "IDEJCAWVFUDAJ";
k1x95["\u961C\u9633\u5E02"] = "HVJGCUXVCWCGG";
k1x95["\u6DEE\u5317\u5E02"] = "HVHEGJXVFWWCI";
k1x95["\u516D\u5B89\u5E02"] = "IBFVUSXVCDSWT";
k1x95["\u9A6C\u978D\u5C71\u5E02"] = "IEHRWSXVFDABT";
k1x95["\u5BBF\u5DDE\u5E02"] = "HWDSDFXVFUGHA";
k1x95["\u94DC\u9675\u5E02"] = "IEJTFVWVCVFJF";
k1x95["\u5BA3\u57CE\u5E02"] = "IGAAECWVEHBGD";
k1x95["\u6DEE\u5357\u5E02"] = "IASFHWXVEDVTE";
k1x95["\u676D\u5DDE\u5E02"] = "IJDAJAWVFJGCB";
k1x95["\u7ECD\u5174\u5E02"] = "IREBUTXVFTERW";
k1x95["\u5B81\u6CE2\u5E02"] = "ISWIFCXVHBBAS";
k1x95["\u6E56\u5DDE\u5E02"] = "IIDGEDWVGFJRI";
k1x95["\u5609\u5174\u5E02"] = "IJFTGAWVHDDBJ";
k1x95["\u91D1\u534E\u5E02"] = "IRDGFTXVCWSAH";
k1x95["\u4E3D\u6C34\u5E02"] = "ISRHIDWVCGJFI";
k1x95["\u6E29\u5DDE\u5E02"] = "IUGWBGXVCUHFD";
k1x95["\u4E50\u6E05\u5E02"] = "IUSDHJWVDHSSV";
k1x95["\u53F0\u5DDE\u5E02"] = "IUJGDSWVFAFUE";
k1x95["\u8862\u5DDE\u5E02"] = "IJEDARWVBJCGD";
k1x95["\u798F\u5DDE\u5E02"] = "IVGDHIXUUTREW";
k1x95["\u8386\u7530\u5E02"] = "IVUGHUWUTGHGG";
k1x95["\u5357\u5E73\u5E02"] = "ISRAGEWUTVCRB";
k1x95["\u53A6\u95E8\u5E02"] = "IVVSDUWUJJTJR";
k1x95["\u6CC9\u5DDE\u5E02"] = "IVWVHJXURWGTT";
k1x95["\u6F33\u5DDE\u5E02"] = "IVCTCHWUIVUGC";
k1x95["\u4E09\u660E\u5E02"] = "ISHCWSXUSIFFT";
k1x95["\u9F99\u5CA9\u5E02"] = "ITFFFUWUIUVGC";
k1x95["\u957F\u6C99\u5E02"] = "IBGRTCVUHGRSF";
k1x95["\u5F20\u5BB6\u754C\u5E02"] = "HTDSDJVUFATFG";
k1x95["\u5CB3\u9633\u5E02"] = "HWURCEXUJHAEH";
k1x95["\u682A\u6D32\u5E02"] = "ICDADVXUHCBWH";
k1x95["\u90F4\u5DDE\u5E02"] = "IFCBUEVUDUGGU";
k1x95["\u5E38\u5FB7\u5E02"] = "HVDAVWXUGSCRI";
k1x95["\u8861\u9633\u5E02"] = "ICUVVBXUEUWGE";
k1x95["\u90B5\u9633\u5E02"] = "IAJDWAXUDRJDW";
k1x95["\u6E58\u6F6D\u5E02"] = "IBUTBWXUGTIBI";
k1x95["\u76CA\u9633\u5E02"] = "HWVBGTXUHAUAB";
k1x95["\u6E58\u897F"] = "HTESRDVUCRFHC";
k1x95["\u5357\u5B81\u5E02"] = "ICIFVTWTIBCAU";
k1x95["\u6842\u6797\u5E02"] = "IBTCGEWTVUSVH";
k1x95["\u767e\u8272\u5e02"] = "HVEHATXTHCIWJ";
k1x95["\u5357\u660C\u5E02"] = "IFCEUTVUTJJDU";
k1x95["\u8D35\u9633\u5E02"] = "HRFBHUVTSGBFI";
k1x95["\u6606\u660E\u5E02"] = "HGIVRBXTCWBDG";
k1x95["\u7389\u6EAA\u5E02"] = "HHFUSFXTBJWHG";
k1x95["\u695A\u96C4\u5E02"] = "HEGDTDUTBSTCC";
k1x95["\u5FB7\u5B8F"] = "HAECBGXSSEAWD";
k1x95["\u8FEA\u5E86"] = "GTWSURXTCJAJS";
k1x95["\u4E2A\u65E7\u5E02"] = "HJECWRXTBDUCF";
k1x95["\u4E34\u6CA7\u5E02"] = "HDFFEHUSTSDDI";
k1x95["\u6012\u6C5F\u5E02"] = "GUTHDTWTAATVU";
k1x95["\u66F2\u9756\u5E02"] = "HHGUGEVTFUBJH";
k1x95["\u601D\u8305\u5E02"] = "HGAEUCVSUHFHU";
k1x95["\u62C9\u8428\u5E02"] = "FUUVCJWSIEVAR";
k1x95["\u6D77\u53E3\u5E02"] = "IJTRTWXTGUUSR";
k1x95["\u4E09\u4E9A\u5E02"] = "ISECARWTCVVAD";
k1x95["\u743C\u6D77\u5E02"] = "ISDJDGWTFVIAS";
k1x95["\u5170\u5DDE\u5E02"] = "GHFHGUWUFFUUV";
k1x95["\u94F6\u5DDD\u5E02"] = "GHIEETXUTURWF";
k1x95["\u897F\u5B81\u5E02"] = "GDIATWXUDCTBA";
k1x95["\u4E4C\u9C81\u6728\u9F50\u5E02"] = "ECTRRTUTIIAJH";
k1x95["\u9999\u6E2F"] = "ITDUDHWUADIVI";
k1x95["\u6FB3\u95E8"] = "ISGWHUXTWBWWT";
k1x95["\u53F0\u6E7E"] = "JESFTTXUTRWJW";
k1x95["\u9E64\u5C97\u5E02"] = "HVREATXBAVVGWH";
k1x95["\u5305\u5934\u5E02"] = "GJJSCSZVFRAIA";
k1x95["\u8861\u6C34\u5E02"] = "HGWVHSZVRBHDV";
k1x95["\u6986\u6797\u5E02"] = "GUBBADZVBUWWA";
k1x95["\u901A\u8FBD\u5E02"] = "HIAJGGXWUBWRC";
k1x95["\u8D64\u5CF0\u5E02"] = "HFAGBIXWGAFHI";
k1x95["\u547C\u4F26\u8D1D\u5C14"] = "GSRDHWXBABUCHH";
k1x95["\u5174\u5B89\u76DF"] = "HDWGITXBAAIVAR";
k1x95["\u5B81\u5FB7\u5E02"] = "IUSTGRXUWBCGA";
k1x95["\u8D63\u5DDE\u5E02"] = "IHWSERZUGUBUJ";
k1x95["\u67f3\u5dde\u5e02"] = "IBVATEZTTBBTS";

function getPid(a) {
    if (typeof k1x95[a] == "undefined") return a;
    return k1x95[a]
};
var topColor = "#FFFFFF";
var subColor = "#FFFFFF";
var xoffset = 0;
var yoffset = 0;
var t0m8 = '?0119';
var sN = function () {
    this.clear = function () {};
    this.paint = function () {};
    this.lB = function () {};
    this.lE = function () {};
    this.setColor = function () {}
};
var jsGraphics = function (name) {};
var gq = function (name, left, top, width, height, visible, zindex, content) {
    var h = document.createElement("div");
    h.unselectable = "on";
    h.id = name;
    h.style.position = "absolute";
    h.style.top = parseInt(top) + "px";
    h.style.left = parseInt(left) + "px";
    h.style.zIndex = zindex;
    h.style.width = width + (width == "auto" ? "" : "px");
    h.style.height = height + (height == "auto" ? "" : "px");
    h.style.visibility = (visible) ? 'visible' : 'hidden';
    h.innerHTML = content;
    return h
};
var PerformControl = function (e, uy, qu) {
    var maplet = uy.parentNode.q9;
    switch (qu) {
    case 1:
        maplet.panTo(parseInt(maplet.width) / 2, 0);
        break;
    case 2:
        maplet.panTo(0, parseInt(maplet.height) / 2);
        break;
    case 3:
        maplet.panTo(-parseInt(maplet.width) / 2, 0);
        break;
    case 4:
        maplet.panTo(0, -parseInt(maplet.height) / 2);
        break;
    case 5:
        maplet.zoomIn();
        break;
    case 6:
        maplet.zoomOut();
        break;
    case 7:
        maplet.setMode(ts.tb);
        break;
    case 8:
        var yoffset = parseInt(uy.style.top) - 96 + parseInt(maplet.controlCanvas.top);
        var y = parseInt((px) ? event.clientY : e.clientY) - parseInt(maplet.offsetY) - parseInt(maplet.top);
        y -= yoffset;
        if (!px && maplet.panel.style.position != "absolute") {}
        AB = MAX_ZOOM_LEVEL - Math.max(0, Math.min(MAX_ZOOM_LEVEL, parseInt((parseInt(y) - 100) / gb.ta2Q9)));
        uy.parentNode.update(AB);
        maplet.KT9n();
        maplet.setZoomLevel(AB, true, false);
        break;
    default:
        break
    }
};
var y4 = null;
var showMouseTipBox = function (x, y, x8, container) {
    try {
        if (y4 == null || y4 == "undefined") {
            if (maplet.sS != ts.tw) {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, x8);
                y4.className = "ptlabel";
                y4.style.backgroundColor = "#FFFFFF";
                y4.style.padding = "2px";
                y4.style.border = "1px solid #0E347F";
                y4.style.color = "#D50F1E";
                y4.style.whiteSpace = 'nowrap'
            } else {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, x8)
            }
            y4.unselectable = "on";
            y4.style.MozUserSelect = "none"
        } else {
            y4.style.left = (parseInt(x) + 10) + "px";
            y4.style.top = (parseInt(y) + 18) + "px";
            y4.visibility = "visible"
        } if (y4 != null && (y4.parentNode == null || y4.parentNode != container)) {
            container.appendChild(y4)
        }
    } catch (e) {}
};
var nX = function () {
    if (y4 != null) {
        if (y4.parentNode != null) {
            _removeNode(y4)
        }
        y4 = null
    }
};
var imageTileError = function (yF) {
    if (yF.width == 300 && yF.ntry == "0") {
        yF.ntry = "1";
        yF.src = yF.src + "?"
    } else if (yF.width == 300 && yF.ntry == "1") {
        yF.ntry = "2";
        yF.src = yF.src + "?"
    } else {
        yF.ntry = "3";
        yF.onerror = null;
        yF.src = strImgsvrUrl + "images/mask.gif";
        yF.style.width = "300px";
        yF.style.height = "300px"
    }
};
var imageTileOk = function (yF) {
    yF.onerror = null;
    yF.onload = null;
    yF.style.width = "300px";
    yF.style.height = "300px"
};
var fJ = function (uy, yH) {
    var cU = false;
    while (uy != null) {
        if ((typeof yH == "string" && uy.id == yH) || (uy == yH)) {
            cU = true;
            break
        }
        uy = uy.parentNode
    }
    return cU
};
var y5 = null;
var waitHideTip = function () {
    if (y5) clearTimeout(y5);
    y5 = null;
    y5 = setTimeout("hideToolTipMenu()", 2000)
};
var lbp = function (id, x, y, w, wO, y6, yU, yhRC4) {
    n747[id] = {
        x: x,
        y: y,
        w: w,
        wO: wO,
        y6: y6,
        yU: yU,
        yhRC4: yhRC4
    };
    $85(id, x, y, w, wO, y6, yU, yhRC4)
};
var $85 = function (id, x, y, w, wO, y6, yU, yhRC4) {
    if (typeof id == "string" && id != null && document.getElementById(id) != null && typeof wO == "string" && wO != null) {
        if (!yhRC4) {
            document.getElementById(id).innerHTML += "<div unselectable=\"on\" class=\"hotspotlabel\" onclick=\"{var e = arguments[0];setToolTipBubble(e,'" + y6 + "','" + (yU) + "',this)};\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + wO + "</div>"
        } else {
            document.getElementById(id).innerHTML += "<div unselectable=\"on\"  style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + wO + "</div>"
        }
    }
};
var n747 = {};

function CreateToolTip(qR, ya, xu) {
    var ContentInfo = '<table id="mytooltip_container" border="0" width="150" cellspacing="0" cellpadding="0"><tr><td width="100%" bgcolor="#FF0000"><table border="0" width="150" cellspacing="1" cellpadding="0">' + '<tr><td width="100%" bgcolor="#FF0000">' + '<table border="0" width="100%" cellspacing="0" cellpadding="0">' + '<tr><td width="100%" bgcolor=' + topColor + '>' + '<table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">' + '<tr><td id="mytooltiptitle"width="100%" class="tooltiptitle">' + ya + '</td>' + '<td style="cursor:pointer;" valign="top" align="right">' + '<img src="' + strImgsvrUrl + 'images/xclose.gif" onclick="javascript:hideToolTipMenu();">' + '</td>' + '</tr>' + '</table>' + '</td></tr>' + '<tr><td width="100%" bgcolor=' + subColor + '>' + '<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">' + '<tr><td id="mytooltipcontent" width="100%" class="tooltipcontent">' + xu + '</td></tr>' + '</table>' + '</td></tr>' + '</table>' + '</td></tr>' + '</table></td></tr></table>';
    document.getElementById(qR).innerHTML = ContentInfo;
    var yw = document.getElementById(qR).childNodes[0];
    document.getElementById(qR).style.width = yw.clientWidth;
    document.getElementById(qR).style.height = yw.clientHeight
};
var setToolTipBubble = function (e, ya, xu, dom) {
    var maplet = document["mapbar-maplet"];
    if (typeof W9l !== 'undefined' && W9l instanceof MMarker) {
        maplet.removeOverlay(W9l);
        W9l = undefined
    }
    var x = parseInt((px) ? event.clientX : e.clientX) - maplet.offsetX,
        y = parseInt((px) ? event.clientY : e.clientY) - maplet.offsetY;
    var qal = new MPoint(maplet.toMapCoordinate(x, y));
    if (typeof maplet.k2M4 === 'undefined' || !maplet.k2M4) {
        maplet.k2M4 = document.createElement('div')
    }
    maplet.k2M4.innerHTML = xu;
    xu = maplet.k2M4.childNodes;
    for (var i = 0; i < xu.length; i++) {
        var uy = xu[i];
        uy.setAttribute('class', 'infoContent');
        uy.setAttribute('width', '300');
        uy.style.padding = '5px';
        uy.style.width = '300px'
    }
    var icon = new MIcon('<div width=' + dom.clientWidth + ' height=' + dom.clientHeight + '></div>'),
        info = new MInfoWindow(ya, maplet.k2M4.innerHTML);
    W9l = new MMarker(qal, icon, info);
    info.setZMBtnVisible(false);
    MEvent.addListener(maplet, "iw_hide", function (overlay) {
        maplet.removeOverlay(W9l);
        W9l = undefined
    });
    maplet.addOverlay(W9l);
    window.setTimeout(function () {
        W9l.openInfoWindow()
    }, 0)
};
var setToolTipMenu = function (x, y, ya, xu, e) {
    var maplet = document["mapbar-maplet"];
    if (maplet != null && maplet.width && maplet.height) {
        mapwidth = maplet.width;
        mapheight = maplet.height;
        if (typeof x == "undefined" || typeof e == "object") {
            x = ((px) ? event.clientX : e.clientX) - maplet.offsetX - maplet.left;
            y = ((px) ? event.clientY : e.clientY) - maplet.offsetY - maplet.top
        }
    }
    UpdateContent("ToolTip", ya, xu);
    var y8 = document.getElementById("ToolTip").clientWidth;
    var y1 = document.getElementById("ToolTip").clientHeight;
    if (x > mapwidth - y8) {
        x = x - y8
    };
    if (y > mapheight - y1) {
        y = y - y1
    };
    MoveToolTip("ToolTip", y + yoffset, x + xoffset);
    document.getElementById("ToolTip").style.visibility = 'visible'
};
var hideToolTipMenu = function () {
    document.getElementById("ToolTip").style.visibility = "hidden";
    var maplet = document["mapbar-maplet"];
    if (maplet.getContextMenu() != null) {
        maplet.getContextMenu().hide()
    }
    MoveToolTip("ToolTip", 0, 0)
};
var MoveToolTip = function (qR, nr, nq) {
    if (px) {
        document.getElementById(qR).style.top = parseInt(eval(nr)) + "px"
    } else {
        document.getElementById(qR).style.top = parseInt(eval(nr)) + "px"
    }
    document.getElementById(qR).style.left = parseInt(eval(nq)) + "px"
};
var UpdateContent = function (qR, ya, xu) {
    if (initialize == 0) {
        CreateToolTip(qR, ya, xu);
        initialize = 1
    }
    if (document.getElementById("mytooltiptitle")) document.getElementById("mytooltiptitle").innerHTML = ya;
    if (document.getElementById("mytooltipcontent")) document.getElementById("mytooltipcontent").innerHTML = xu;
    var r43 = document.getElementById("ToolTip");
    var t$p = document.getElementById("mytooltip_container");
    if (t$p) {
        r43.style.width = t$p.clientWidth + "px";
        r43.style.height = t$p.clientHeight + "px"
    }
};
var ts = {
    tz: 1,
    tA: 2,
    ty: 3,
    tv: 5,
    tw: 6,
    tx: 7,
    tt: 8,
    lz: 9,
    ly: 10,
    tb: 11,
    np: 12,
    l3: 13,
    tM: 14,
    tu: 23,
    ta: 15,
    a2_Q: 24,
    W28Q: 25
};

function md6_(uy) {
    if (typeof uy == "undefined" || !uy) return false;
    return uy instanceof Array
};

function juH(lT) {
    var CFfe2 = 0,
        dSD = 0;
    if (typeof lT == "string" && lT) lT = document.getElementById(lT);
    if (typeof lT == "object" && lT) {
        do {
            CFfe2 += lT.offsetTop || 0;
            dSD += lT.offsetLeft || 0;
            if (lT.offsetParent == document.body)
                if (lT.style.position == 'absolute') break;
            lT = lT.offsetParent
        } while (lT)
    }
    return [dSD, CFfe2]
};

function $537(owQ, _Q30G) {
    var r = null;
    if (typeof owQ == "string" && owQ) owQ = aa(owQ);
    if (typeof owQ == "object" && owQ && owQ.nodeType && owQ.nodeType == 1) {
        do {
            if (typeof owQ.getAttribute !== 'undefined') {
                r = owQ.getAttribute(_Q30G)
            }
            if (r || owQ.parentNode == maplet.map) break;
            owQ = owQ.parentNode
        } while (owQ)
    }
    return r
};
var m4$ = function (dom, _Q30G, value, c38p) {
    var _6_ = function (d, a, v) {
        if (typeof d.setAttribute != "undefined") d.setAttribute(a, v)
    };
    var pt67 = function (d, a, v, nc) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var o4up8 = d.childNodes;
            for (var i = 0; i < o4up8.length; i++) {
                var c = o4up8[i];
                if (c.childNodes.length > 0) {
                    pt67(c, a, v, nc)
                } else if (typeof c.tagName == "string" && !nc[c.tagName.toLowerCase()]) {
                    _6_(c, a, v)
                }
            }
            _6_(d, a, v)
        }
    };
    if (md6_(c38p)) {
        for (var i = 0; i < c38p.length; i++) c38p[c38p[i].toLowerCase()] = 1
    } else {
        c38p = []
    }
    pt67(dom, _Q30G, value, c38p)
};
var D280 = function (dom, _Q30G) {
    var _6_ = function (d, a) {
        if (typeof d.removeAttribute != "undefined") d.removeAttribute(a)
    };
    var pt67 = function (d, a) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var o4up8 = d.childNodes;
            for (var i = 0; i < o4up8.length; i++) {
                var c = o4up8[i];
                if (c.childNodes.length > 0) {
                    pt67(c, a)
                } else if (typeof c.tagName == "string") {
                    _6_(c, a)
                }
            }
            _6_(d, a)
        }
    };
    pt67(dom, _Q30G)
};

function _getStyle(owQ, BUe, G442) {
    var x = null;
    if (typeof owQ == "string" && owQ) x = document.getElementById(owQ);
    else x = owQ; if (typeof x != "object" || !x) return "";
    if (!BUe && !G442) return "";
    if (BUe && !G442) G442 = BUe;
    if (!BUe && G442) BUe = G442;
    var y = "";
    if (x.currentStyle) {
        y = x.currentStyle[BUe]
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        var FGU = document.defaultView.getComputedStyle(x, null);
        if (M7$6 || Iv4) {
            y = FGU ? FGU.getPropertyValue(BUe) : ""
        } else {
            y = FGU ? FGU.getPropertyValue(G442) : ""
        }
    }
    return y
};

function r0JS(s, d) {
    if (isNaN(parseInt(s))) return (typeof d != "number" ? 0 : d);
    else return parseInt(s)
};

function _isInsidePolygon(pt, sH2) {
    for (var c = false, i = -1, l = sH2.length, qC = l - 1; ++i < l; qC = i) {
        if (((sH2[i].y <= pt.y && pt.y < sH2[qC].y) || (sH2[qC].y <= pt.y && pt.y < sH2[i].y)) && (pt.x < (sH2[qC].x - sH2[i].x) * (pt.y - sH2[i].y) / (sH2[qC].y - sH2[i].y) + sH2[i].x)) c = !c
    }
    return c
};

function _isInsideRect(pt, rect) {
    if (rect.max.x > pt.x && rect.min.x <= pt.x && rect.max.y > pt.y && rect.min.y <= pt.y) return true;
    return false
};

function _isRectint(W657, j34VX) {
    return Math.abs((W657.min.x + W657.max.x) / 2 - (j34VX.min.x + j34VX.max.x) / 2) < ((W657.max.x + j34VX.max.x - W657.min.x - j34VX.min.x) / 2) && Math.abs((W657.min.y + W657.max.y) / 2 - (j34VX.min.y + j34VX.max.y) / 2) < ((W657.max.y + j34VX.max.y - W657.min.y - j34VX.min.y) / 2)
};

function _IsIntersect(K61, $t1) {
    var d = (K61.end.y - K61.start.y) * ($t1.end.x - $t1.start.x) - ($t1.end.y - $t1.start.y) * (K61.end.x - K61.start.x);
    if (d == 0) {
        return false
    } else {
        var x0 = ((K61.end.x - K61.start.x) * ($t1.end.x - $t1.start.x) * ($t1.start.y - K61.start.y) + (K61.end.y - K61.start.y) * ($t1.end.x - $t1.start.x) * K61.start.x - ($t1.end.y - $t1.start.y) * (K61.end.x - K61.start.x) * $t1.start.x) / d;
        var As = ((K61.end.y - K61.start.y) * ($t1.end.y - $t1.start.y) * ($t1.start.x - K61.start.x) + (K61.end.x - K61.start.x) * ($t1.end.y - $t1.start.y) * K61.start.y - ($t1.end.x - $t1.start.x) * (K61.end.y - K61.start.y) * $t1.start.y) / (-d);
        if ((x0 - K61.start.x) * (x0 - K61.end.x) <= 0 && (x0 - $t1.start.x) * (x0 - $t1.end.x) <= 0 && (As - K61.start.y) * (As - K61.end.y) <= 0 && (As - $t1.start.y) * (As - $t1.end.y) <= 0) {
            return true
        }
    }
    return false
};
var tI2L = function (DV2) {
    if (window.event) {
        return window.event
    } else {
        while (DV2.caller) {
            DV2 = DV2.caller
        }
        if (typeof DV2.arguments != "undefined" && DV2.arguments && DV2.arguments.length > 0) {
            if (DV2.arguments[0].constructor.toString().indexOf("Event")) return DV2.arguments[0]
        }
    }
    return null
};
var k1FD = function (e, preventDefault) {
    if (typeof e == "undefined") return;
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    if (window.event) {
        window.event.returnValue = false;
        window.event.cancelBubble = true
    }
};

function aa(lT) {
    if (typeof lT == 'string') {
        return document.getElementById(lT)
    } else {
        return null
    }
};
_removeNode = document.all ? function () {
    var d;
    return function (n) {
        if (n && n.tagName != 'BODY') {
            d = d || document.createElement('div');
            d.appendChild(n);
            d.innerHTML = ''
        }
    }
}() : function (n) {
    if (n && n.parentNode && n.tagName != 'BODY') {
        n.parentNode.removeChild(n)
    }
};
v3p1l = function (s) {
    var r = new RegExp("<.*?>|\r|\n", "gi");
    return function (s) {
        return s.replace(r, "")
    }
}();
var Y6WY = function (URL, D18b, b61, _Ig3V, S9v86, Fw70, aB) {
    this.URL = URL;
    this.D18b = D18b;
    this.pv4 = S9v86;
    this.jnh = Fw70;
    this.aB = aB;
    this.b61 = b61;
    this._Ig3V = _Ig3V
};
Y6WY.prototype.P4MUn = function () {
    var SNy7L = document.getElementById("scriptTemp");
    if (SNy7L) {
        _removeNode(SNy7L)
    }
    var s = document.createElement("script");
    s.language = "javascript";
    s.type = "text/javascript";
    s.id = (this._Ig3V && this._Ig3V == true) ? "Temp" + Math.random() : "scriptTemp";
    s.src = (this.b61 && this.b61 == true) ? this.URL + "?" + Math.random() : this.URL;
    var A4$ = this.D18b ? (this.D18b) : parseInt;
    var id = s.id,
        g85Vw = this;
    var dQ9s = this.pv4;
    var PY8L = this.jnh;
    var aB = typeof this.aB == "undefined" || !this.aB ? [] : this.aB;
    s.onload = s.onreadystatechange = function () {
        if (typeof ActiveXObject != "undefined") {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                if (typeof A4$ == "function") {
                    aB.push(s.id);
                    A4$.apply(dQ9s, aB)
                }
                g85Vw.waL17(id);
                s.onerror = null;
                s.onload = null;
                s.onreadystatechange = null
            }
        } else {
            if (typeof A4$ == "function") {
                aB.push(s.id);
                A4$.apply(dQ9s, aB)
            }
            g85Vw.waL17(id);
            s.onerror = null;
            s.onload = null;
            s.onreadystatechange = null
        }
    };
    s.onerror = function () {
        if (s && s.parentNode) s.parentNode.removeChild(s);
        if (typeof PY8L == "function") {
            aB.push(s.id);
            PY8L.apply(dQ9s, aB)
        }
        g85Vw.waL17(id);
        s.onerror = null;
        s.onload = null;
        s.onreadystatechange = null
    };
    document.body.insertBefore(s, document.body.firstChild)
};
Y6WY.prototype.waL17 = function (id) {
    var HWki6 = document.getElementById(id);
    HWki6 && document.body.removeChild(HWki6)
};
var u4p = function () {
    if (P7v61) return document.documentElement.scrollTop;
    else return document.body.scrollTop
};
var b$9nJ = function () {
    if (P7v61) return document.documentElement.scrollLeft;
    else return document.body.scrollLeft
};
var sC = function (x, y, xu) {
    document.getElementById("myalert").style.top = (parseInt(y) - 60 + u4p()) + "px";
    document.getElementById("myalert").style.left = (parseInt(x) - 100 + b$9nJ()) + "px";
    var xs = (en == 1) ? "Close" : tX("%u5175%uE760");
    document.getElementById("myalert").innerHTML = '<table width="196px" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #0E347F;"><tr><td height="100px" align="center" valign="middle" bgcolor="#FFFFFF"><table width="167px" height="79px" border="0" cellpadding="0" cellspacing="0"><tr><td height="55px" align="center" valign="middle" style="font-size: 12px;color: #0065AD;">' + xu + '</td></tr><tr><td height="24px" align="center" valign="middle"><input type="button" value="' + xs + '" onClick="document.getElementById(\'myalert\').style.display = \'none\'"onMouseOver="style.background=\'#DEE7EF\';style.cursor=\'hand\';style.cursor=\'pointer\'"onMouseOut="this.style.background=\'FDFAF3\'" style="font-size: 9pt; border: 1px solid #4A799C;background-color: #FDFAF3"></td></tr></table></td></tr></table>';
    document.getElementById("myalert").style.display = ""
};
var gP = function (xu) {
    if (gQ) sC(300, 100, xu)
};
var YjF$ = new RegExp("<(?:!(?:--[\\s\\S]*?--\\s*)?(>)\\s*|(?:script|style|SCRIPT|STYLE)[\\s\\S]*?<\\/(?:script|style|SCRIPT|STYLE)>)", "gi");
var Fod = new RegExp("[\\r\\n]", "gi");
var t548 = function (html, u41) {
    if (typeof u41 != "boolean") u41 = false;
    if (typeof html == "string" && html) {
        var s = html.replace(YjF$, "");
        if (u41) s = s.replace(Fod, "");
        return s
    } else {
        return html
    }
};
var V57O = null;
var L4I3 = function (s) {
    var size = {
        MPqC2: 0,
        GC8: 0,
        k4m9: 0,
        ch: 0
    };
    if (typeof s == "string" && s && maplet && maplet.panel) {
        if (!V57O) {
            V57O = document.createElement("DIV");
            with(V57O.style) {
                position = "absolute";
                left = -Number.MAX_VALUE + "px";
                top = -Number.MAX_VALUE + "px"
            }
            maplet.sF.div.appendChild(V57O)
        }
        V57O.innerHTML = s;
        size.MPqC2 = V57O.offsetWidth;
        size.GC8 = V57O.offsetHeight;
        size.k4m9 = V57O.clientWidth;
        size.ch = V57O.clientHeight;
        V57O.innerHTML = ""
    }
    return size
};
var iC256 = function (__5EX, rect) {
    function gDU(x, y, V1DP, O7Sfg, $k66, $C07h) {
        var c = 0;
        if (y > $C07h) c |= R01m6;
        else if (y < O7Sfg) c |= iBf78;
        if (x > $k66) c |= nMm;
        else if (x < V1DP) c |= _0eD;
        return c
    };
    var x1 = __5EX.B4jGk.x,
        Nk713 = __5EX.B4jGk.y,
        x2 = __5EX.U88s7.x,
        I1$q5 = __5EX.U88s7.y;
    var V1DP = rect.min.x,
        O7Sfg = rect.min.y,
        $k66 = rect.max.x,
        $C07h = rect.max.y;
    var FwX, Aga, DF3_C, p0_4M = 0;
    var accept = false,
        ln = false;
    FwX = gDU(x1, Nk713, V1DP, O7Sfg, $k66, $C07h);
    Aga = gDU(x2, I1$q5, V1DP, O7Sfg, $k66, $C07h);
    do {
        if ((FwX | Aga) == 0) {
            accept = true;
            ln = true
        } else if ((FwX & Aga) > 0) {
            ln = true
        } else {
            var x = 0,
                y = 0;
            DF3_C = FwX != 0 ? FwX : Aga;
            if ((DF3_C & R01m6) > 0) {
                x = x1 + (x2 - x1) * ($C07h - Nk713) / (I1$q5 - Nk713);
                y = $C07h
            } else if ((DF3_C & iBf78) > 0) {
                x = x1 + (x2 - x1) * (O7Sfg - Nk713) / (I1$q5 - Nk713);
                y = O7Sfg
            } else if ((DF3_C & nMm) > 0) {
                y = Nk713 + (I1$q5 - Nk713) * ($k66 - x1) / (x2 - x1);
                x = $k66
            } else if ((DF3_C & _0eD) > 0) {
                y = Nk713 + (I1$q5 - Nk713) * (V1DP - x1) / (x2 - x1);
                x = V1DP
            }
            if (DF3_C == FwX) {
                x1 = x;
                Nk713 = y;
                FwX = gDU(x1, Nk713, V1DP, O7Sfg, $k66, $C07h)
            } else {
                x2 = x;
                I1$q5 = y;
                Aga = gDU(x2, I1$q5, V1DP, O7Sfg, $k66, $C07h)
            }
        }
        p0_4M++
    } while (ln != true && p0_4M < 5000);
    return accept
};
var nMm = 2;
var R01m6 = 8;
var iBf78 = 4;
var _0eD = 1;
var UVm = 6;

function Kuo(__5EX) {
    var i = 0;
    var C94 = [];
    var ir9d = __5EX.length;
    if (ir9d <= 0) return C94;
    while (i < ir9d) {
        var b = 0;
        var shift = 0;
        var Yp1c1 = 0;
        var i$80o = UVm;
        do {
            b = (__5EX.charCodeAt(i++)) - 63;
            var TtP = (((b >> 1) ^ (i$80o++)) & 0x1f);
            Yp1c1 |= TtP << shift;
            shift += 5
        } while ((b & 0x1) == 0);
        Yp1c1 = ((Yp1c1 & 0x01) == 0x01) ? ~(Yp1c1 >> 1) : (Yp1c1 >> 1);
        C94.push(Yp1c1)
    }
    return C94
};

function mOBTj(x1, Nk713, x2, I1$q5) {
    var tan = Math.atan((I1$q5 - Nk713) / (x2 - x1));
    var a0f = 180 / Math.PI * tan;
    if (x1 <= x2 && Nk713 >= I1$q5) {
        a0f = a0f + 90
    } else if (x1 <= x2 && Nk713 < I1$q5) {
        a0f = a0f + 90
    } else if (x1 > x2 && Nk713 <= I1$q5) {
        a0f = 90 + a0f + 180
    } else if (x1 > x2 && Nk713 > I1$q5) {
        a0f = a0f + 270
    }
    return a0f
};

function _removeArrayItem(sL8, WJQD3, L5$l) {
    if (!md6_(sL8)) {
        return
    }
    var ChI, $h9B = sL8.length;
    WJQD3 = WJQD3 < 0 ? WJQD3 - 0 + $h9B : WJQD3;
    L5$l = L5$l < 0 ? L5$l - 0 + $h9B : L5$l;
    if (L5$l < WJQD3 || WJQD3 >= $h9B || L5$l >= $h9B) {
        return
    }
    ChI = sL8.slice((L5$l || WJQD3) + 1 || sL8.length);
    sL8.length = WJQD3 < 0 ? sL8.length + WJQD3 : WJQD3;
    return sL8.push.apply(sL8, ChI)
};

function D3Ji(uy) {
    if (typeof uy == "object") {
        for (var i in uy) {
            uy[i] = null;
            delete uy[i]
        }
    }
    uy = null
};
var X0Jd = function (f767$) {
    if (typeof f767$ === 'number') {
        return Math.round(f767$)
    }
    return f767$
};
var cq = {
    pu: {},
    vp: function (li) {
        return this.pu[li] || function (pu, xT) {
            var v6;
            if (xT.indexOf(",") == -1) {
                var pk = -1;
                var fE = 0;
                var ub = '';
                var fH = '';
                if (xT != null && parseInt(xT.charAt(0), 36) >= 33) {
                    fH = xT.charAt(0);
                    xT = xT.substring(1)
                }
                for (var i = 0; i < (xT.length - (c75 ? 1 : 0)); i++) {
                    var n8 = parseInt(xT.charAt(i), 36) - 10;
                    if (n8 >= 17) n8 = n8 - 7;
                    ub += (n8).toString(36);
                    if (n8 > fE) {
                        pk = i;
                        fE = n8
                    }
                }
                var n9 = parseInt(ub.substring(0, pk), 16);
                var n0 = parseInt(ub.substring(pk + 1), 16);
                if ("X" == fH) {
                    n9 = -n9
                }
                if ("Y" == fH) {
                    n0 = -n0
                }
                v6 = new Array();
                v6[0] = (n9 + n0 - parseInt(strLicenseKey)) / 2;
                v6[1] = (n0 - v6[0]) / 100000.0;
                v6[0] /= 100000.0;
                if (v6[0] > 180) v6[0] -= 360;
                pu[xT] = v6;
                return v6
            } else {
                v6 = t727U(xT);
                pu[xT] = v6;
                return v6
            }
        }(this.pu, li)
    }, zn: function (li, lf, _Jt) {
        if (typeof _Jt != "boolean") _Jt = false;
        if (typeof li != "undefined" && typeof lf != "undefined") {
            this.lf = parseFloat(lf);
            this.li = parseFloat(li)
        }
        if (apiType == 1 && !_Jt) {
            return s40(this.li + "," + this.lf).join(",")
        } else {
            var v6 = '';
            var uh = parseInt(parseFloat(Math.max(-90, Math.min(90, this.lf))) * 100000);
            var uj = parseInt(parseFloat((this.li < 0) ? (this.li + 360) : this.li) * 100000);
            var pl = uj - uh + parseInt(strLicenseKey);
            var pm = uj + uh;
            if (pl < 0) {
                v6 = 'X';
                pl = -pl
            }
            if (pm < 0) {
                v6 = 'Y';
                pm = -pm
            }
            var ph = (pl).toString(16);
            var pi = (pm).toString(16);
            for (var i = 0; i < ph.length; i++) {
                var qv = parseInt(ph.charAt(i), 16);
                v6 += (((qv >= 10) ? (qv + 7) : qv) + 10).toString(36)
            }
            v6 += 'z';
            for (var qC = 0; qC < pi.length; qC++) {
                var k7uu = parseInt(pi.charAt(qC), 16);
                v6 += (((k7uu >= 10) ? (k7uu + 7) : k7uu) + 10).toString(36)
            }
            if (c75) {
                v6 += v6.charAt(c75)
            }
            return v6.toUpperCase()
        }
    }
};
var xE = function (xj) {
    var c = '';
    for (var i = 0; i < xj.length; i++) {
        var zh = xj.charCodeAt(i).toString(36).toUpperCase();
        if (zh.length <= 1) {
            zh = "0" + zh
        }
        c += zh
    }
    return c
};
var sdc = function (xj) {
    var c = '';
    for (var i = 0; i < xj.length; i += 2) {
        var zh = xj.substring(i, i + 2);
        c += String.fromCharCode(parseInt(zh, 36))
    }
    return c
};
var tX = function (xj) {
    xj = unescape(xj);
    var c = String.fromCharCode(xj.charCodeAt(0) - xj.length);
    for (var i = 1; i < xj.length; i++) {
        c += String.fromCharCode(xj.charCodeAt(i) - c.charCodeAt(i - 1))
    }
    return c
};

function s40(hyQ) {
    var YnB7m = hyQ.split(",");
    var x = parseFloat(YnB7m[0]) * 100000 % 36000000;
    var y = parseFloat(YnB7m[1]) * 100000 % 36000000;
    var K5V = parseInt(oW8(x, y) + x);
    var $U11A = parseInt(Ra0(x, y) + y);
    return [K5V / 100000.0, $U11A / 100000.0]
};

function t727U(hyQ) {
    var YnB7m = hyQ.split(",");
    var x = parseFloat(YnB7m[0]) * 100000 % 36000000;
    var y = parseFloat(YnB7m[1]) * 100000 % 36000000;
    var ri0 = parseInt(-mT9(x, y) + x);
    var S7L73 = parseInt(-b4m5(x, y) + y);
    ri0 = parseInt(-mT9(ri0, S7L73) + x + ((x > 0) ? 1 : -1));
    S7L73 = parseInt(-b4m5(ri0, S7L73) + y + ((y > 0) ? 1 : -1));
    return [ri0 / 100000.0, S7L73 / 100000.0]
};

function oW8(x, y) {
    return _7b(x, y)
};

function Ra0(x, y) {
    return _SK0(x, y)
};

function mT9(x, y) {
    return _7b(x, y)
};

function b4m5(x, y) {
    return _SK0(x, y)
};

function _7b(x, y) {
    return gai(F0s(V105q(y, x), $8b6a(x, y)), F0s(xW4y(x, y), Y2r(y, x)))
};

function _SK0(x, y) {
    return gai(F0s(xW4y(y, x), $8b6a(x, y)), F0s(V105q(x, y), Y2r(y, x)))
};

function F0s(x, y) {
    return x * y
};

function gai(x, y) {
    return x + y
};

function V105q(x, y) {
    return Math.cos(x / 100000)
};

function xW4y(x, y) {
    return Math.sin(x / 100000)
};

function Y2r(x, y) {
    return x / 9000
};

function $8b6a(x, y) {
    return x / 18000
};
var fD = function (name, left, top, width, height, visible, zindex, content, container) {
    this.n7 = content;
    this.container = container;
    this.name = name;
    this.qe = 1;
    this.hide = function () {
        this.style.visibility = "hidden"
    };
    this.show = function () {
        this.style.visibility = "visible"
    };
    this.setVisible = function (visible) {
        if (this.style.display != (visible ? "" : "none")) this.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.style.display == ''
    };
    this.moveTo = function (x, y) {
        eval(document.body.scrollTop);
        this.style.left = parseInt(x) + "px";
        this.style.top = parseInt(y) + "px"
    };
    this.resize = function (w, h) {
        if (parseInt(w) >= 0 && parseInt(h) >= 0) {
            this.style.width = parseInt(w) + "px";
            this.style.height = parseInt(h) + "px"
        }
    };
    this.nz = function () {
        return parseInt(this.style.height)
    };
    this.nH = function () {
        return parseInt(this.style.width)
    };
    this.qn = function (x, y) {
        return (x > parseInt(this.style.left) && x < (parseInt(this.style.left) + parseInt(this.style.width)) && y > parseInt(this.style.top) && y < (parseInt(this.style.top) + parseInt(this.style.height)))
    };
    this.appendChild = function (fK) {
        try {
            this.div.appendChild(fK)
        } catch (e) {}
    };
    this.removeChild = function (fK) {
        try {
            _removeNode(fK)
        } catch (e) {}
    };
    this.clear = function () {
        this.div.innerHTML = ""
    };
    this.clean = this.clear;
    this.getName = function () {
        return this.name
    };
    try {
        this.div = gq(this.name, left, top, width, height, visible, zindex, content);
        this.div.unselectable = "on";
        if (this.container) this.container.appendChild(this.div);
        this.style = this.div.style;
        this.graphics = (px) ? new sN() : new jsGraphics(this.name)
    } catch (e) {}
};
var MBound = function (tj, tl, s4, s6, tp, s0) {
    this.s4 = s4;
    this.tj = tj;
    this.s6 = s6;
    this.tl = tl;
    this.s0 = (typeof s0 == "undefined") ? MAX_ZOOM_LEVEL : parseInt(s0);
    this.tp = (typeof tp == "undefined") ? MIN_ZOOM_LEVEL : parseInt(tp);
    this.qn = function (lat, lon) {
        if (this.s4 < lat || this.tj > lat) return false;
        var g2 = (lon - this.tl) % 360;
        if (g2 < 0) g2 += 360;
        return ((this.s6 - this.tl) >= g2)
    }
};
var MBrush = function (xt, x5, x6, cr, xn, yc, xo, fh, dmstyle) {
    this.color = (typeof xt == "undefined") ? "#FF0000" : xt;
    this.stroke = (typeof x5 == "undefined") ? 5 : parseInt(x5);
    this.style = (typeof x6 == "undefined") ? 0 : parseInt(x6);
    this.fill = (typeof cr == "undefined") ? false : cr;
    this.bgcolor = (typeof xn == "undefined") ? this.color : xn;
    this.transparency = (typeof yc == "undefined") ? transparencyLevel : parseInt(yc);
    this.bgtransparency = (typeof xo == "undefined") ? transparencyLevel / 2 : parseInt(xo);
    this.arrow = (typeof fh == "undefined") ? bArrow : fh;
    this.dmstyle = (typeof dmstyle == "undefined") ? {
        color: "#0000ff",
        size: this.stroke * 4,
        transparency: this.transparency,
        strokeWidth: 1,
        strokeColor: "#FFFFFF",
        strokeTransparency: 100
    } : dmstyle;
    this.overlap = {
        enable: false,
        stroke: null,
        color: "white",
        transparency: transparencyLevel
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MBrush'
    }
};
var MPoint = function (xQ, $m1, encrypt, levelGroup) {
    this.pid = null;
    this.lat = null;
    this.lon = null;
    this.maplet = null;
    var kWu = null;
    var O7s5 = null;
    this.mapX = null;
    this.mapY = null;
    this.$96 = null;
    this.encrypt = (typeof encrypt == "boolean" ? encrypt : true);
    this.levelGroup = (typeof levelGroup == "number" && levelGroup >= 0 && levelGroup <= 3 ? levelGroup : 3);
    if (typeof xQ != "undefined" || typeof $m1 != "undefined") {
        if (md6_(xQ)) {
            xQ = xQ.join(",")
        }
        if (typeof xQ == "string" && xQ.indexOf(",") != -1) {
            if (this.encrypt) {
                this.pid = xQ;
                this.lon = parseFloat(xQ.split(",")[0]);
                this.lat = parseFloat(xQ.split(",")[1])
            } else {
                O7s5 = parseFloat(xQ.split(",")[0]);
                kWu = parseFloat(xQ.split(",")[1])
            }
        } else if (!isNaN(parseFloat(xQ)) && !isNaN(parseFloat($m1))) {
            if (this.encrypt) {
                this.pid = xQ + "," + $m1;
                this.lon = parseFloat(xQ);
                this.lat = parseFloat($m1)
            } else {
                O7s5 = xQ;
                kWu = $m1
            }
        } else {
            this.pid = (typeof getPid == "undefined") ? xQ : getPid(xQ);
            if (apiType == 1) {
                var Dfl4 = cq.vp(this.pid);
                O7s5 = Dfl4[0];
                kWu = Dfl4[1];
                this.lon = parseFloat(this.pid.split(",")[0]);
                this.lat = parseFloat(this.pid.split(",")[1])
            }
        } if (this.encrypt && O7s5 == null && kWu == null) {
            var r = cq.vp(this.pid);
            O7s5 = r[0];
            kWu = r[1]
        }
    };
    this.inLevelRange = function (level) {
        if (level >= 0 && level <= 3 && this.levelGroup == 3) {
            return true
        } else if (level >= 4 && level <= 7 && this.levelGroup >= 2) {
            return true
        } else if (level >= 8 && level <= 11 && this.levelGroup >= 1) {
            return true
        } else if (level >= 12 && level <= 18 && this.levelGroup >= 0) {
            return true
        } else {
            return false
        }
    };
    this.getPid = function () {
        if (!this.encrypt && !this.pid) {
            this.pid = cq.zn(O7s5, kWu);
            if (apiType == 1) {
                this.lon = this.pid.split(",")[0];
                this.lat = this.pid.split(",")[1]
            } else if (this.lon != null) {
                var r = s40(O7s5 + "," + kWu);
                this.lon = r[0];
                this.lat = r[1]
            }
        }
        return this.pid
    };
    this.setMapCoords = function (x, y) {
        this.mapX = x;
        this.mapY = y;
        O7s5 = this.maplet.zp(x, y);
        kWu = this.maplet.zo(x, y);
        this.pid = cq.zn(O7s5, kWu);
        if (apiType == 1) {
            this.lon = this.pid.split(",")[0];
            this.lat = this.pid.split(",")[1]
        } else if (this.lon != null) {
            var r = s40(O7s5 + "," + kWu);
            this.lon = r[0];
            this.lat = r[1]
        }
    };
    this.recalcScreenCoords = function () {
        this.mapX = this.maplet.zl(O7s5, kWu);
        this.mapY = this.maplet.zm(kWu, O7s5)
    };
    this._galn = function () {
        return O7s5
    };
    this.P3T3N = function (v) {
        O7s5 = v
    };
    this._galt = function () {
        return kWu
    };
    this.jK94Y = function (v) {
        kWu = v
    };
    this.clone = function () {
        var pt = new MPoint(undefined, undefined, this.encrypt, this.levelGroup);
        pt.pid = this.pid;
        pt.lat = this.lat;
        pt.lon = this.lon;
        pt.maplet = this.maplet;
        pt.P3T3N(this._galn());
        pt.jK94Y(this._galt());
        pt.mapX = this.mapX;
        pt.mapY = this.mapY;
        return pt
    };
    this.Ad17D = function () {
        return !isNaN(O7s5) && !isNaN(kWu)
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.recalcScreenCoords()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPoint'
    }
};
var f1 = {
    fx: [],
    uo: 100,
    nk: function (img, src, w, h) {
        if (typeof img != "object" || !img) return;
        this.fx[this.fx.length] = new Image();
        var pn = this.fx.length - 1;
        this.fx[pn].q9 = img;
        img.style.filter = "alpha(opacity=" + this.uo + ");";
        img.style.MozOpacity = (this.uo / 100.0);
        img.style.opacity = (this.uo / 100.0);
        img.style.qK = (this.uo / 100);
        if (typeof w != "undefined") {
            img.width = parseInt(w) + "px";
            this.fx[pn].width = parseInt(w) + "px"
        }
        if (typeof h != "undefined") {
            img.height = parseInt(h) + "px";
            this.fx[pn].height = parseInt(h) + "px"
        }
        this.fx[pn].container = this;
        this.fx[pn].pn = pn;
        this.fx[pn].ln = "0";
        this.fx[pn].onload = function () {
            if (typeof w != "undefined") {
                this.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined") {
                this.height = parseInt(h) + "px"
            }
            this.q9.src = this.src;
            this.q9.style.filter = null;
            this.q9.style.MozOpacity = 1;
            this.q9.style.opacity = 1;
            this.q9.style.qK = 1;
            if (typeof w != "undefined" && !rs) {
                this.q9.width = parseInt(w) + "px";
                this.q9.style.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined" && !rs) {
                this.q9.height = parseInt(h) + "px";
                this.q9.style.height = parseInt(h) + "px"
            }
            this.q9.setAttribute("done", "1");
            this.ln = "1";
            this.container[this.pn] = null;
            this.container.clearCache();
            this.container = null;
            this.q9 = null;
            this.onload = null;
            this.onerror = null
        };
        this.fx[pn].onerror = function () {
            if (rs) {
                return false
            }
            if (typeof w != "undefined") {
                this.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined") {
                this.height = parseInt(h) + "px"
            }
            this.q9.style.filter = null;
            if (typeof w != "undefined" && !rs) {
                this.q9.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined" && !rs) {
                this.q9.height = parseInt(h) + "px"
            }
            this.ln = "1";
            this.q9.width = "300";
            this.q9.height = "300";
            this.q9.style.width = "300";
            this.q9.style.height = "300";
            this.q9.src = sX;
            this.q9.style.backgroundColor = "#ebeae8";
            this.q9.setAttribute("done", "1");
            this.container[this.pn] = null;
            this.container.clearCache();
            this.container = null;
            this.q9 = null;
            this.onload = null;
            this.onerror = null
        };
        this.fx[pn].src = src
    }, clearCache: function () {
        var cp = 1;
        for (var i = 0; i < this.fx.length; i++) {
            if (this.fx[i] != null && this.fx[i].ln == "0") {
                cp = 0
            } else if (this.fx[i] != null) {
                this.fx[i].q9 = null;
                this.fx[i].container = null;
                this.fx[i].onload = null;
                this.fx[i].onerror = null;
                delete(this.fx[i])
            }
        }
        if (cp) {
            for (var qC = 0; i < this.fx.length; qC++) {
                if (this.fx[qC] != null) {
                    this.fx[qC].q9 = null;
                    this.fx[qC].container = null;
                    this.fx[qC].onload = null;
                    this.fx[qC].onerror = null;
                    delete(this.fx[qC])
                }
            }
            this.fx.length = 0;
            MEvent.trigger(this, "clean")
        }
    }
};
var gb = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        var content = [];
        n95(content, "ctrlPan", 0, 0, 50, 49, -25, 0, "_pan_map");
        n95(content, "ctrlZoomOut", 14, 54, 24, 24, 0, 0, "_zo_map");
        var $5r8 = q9cn5();
        n95(content, "ctrlRuler", 14, 78, 24, $5r8, 0, -24);
        n95(content, "ctrlZoomIn", 14, 77 + $5r8, 24, 27, 0, -181, "_zi_map");
        n95(content, "ctrlSlider", 0, 0, 17, 7, -25, -51);
        content.push("<map name=\"_pan_map\" id=\"_pan_map\">");
        content.push("<area id=\"_fb_n_ctrl_imap\" shape=\"poly\" title=\"" + xN[1] + "\" coords=\"35,6,39,3,42,2,47,1,51,1,56,2,61,4,63,6,63,7,55,15,50,13,48,13,43,15,35,7\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,2);\"/>");
        content.push("<area id=\"_fb_s_ctrl_imap\" shape=\"poly\" title=\"" + xN[3] + "\" coords=\"64,38,55,29,50,31,48,31,43,29,34,38,34,39,37,42,42,44,47,45,51,45,56,44,61,42,64,39\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,4);\"/>");
        content.push("<area id=\"_fb_w_ctrl_imap\" shape=\"poly\" title=\"" + xN[0] + "\" coords=\"34,8,42,16,40,21,40,23,42,28,33,37,32,37,30,35,28,30,27,25,27,21,28,16,30,11,33,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,1);\"/>");
        content.push("<area id=\"_fb_e_ctrl_imap\" shape=\"poly\" title=\"" + xN[2] + "\" coords=\"64,8,56,16,58,21,58,23,56,28,65,37,66,37,68,35,70,30,71,25,71,21,70,16,68,11,65,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,3);\" />");
        content.push("<area id=\"_fb_m_ctrl_imap\" shape=\"circle\" title=\"" + xN[4] + "\" coords=\"48,22,8\" onclick=\"PerformControl(event, this,7);\" onFocus=\"this.blur()\" />");
        content.push("</map>");
        content.push("<map name=\"_zo_map\" id=\"_zo_map\">");
        content.push("<area id=\"_fb_zo_ctrl_imap\" shape=\"poly\" title=\"" + xN[6] + "\" coords=\"8,0,5,1,1,5,0,8,0,21,20,21,20,8,19,5,15,1,12,0\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,5);\" />");
        content.push("</map>");
        content.push("<map name=\"_zi_map\" id=\"_zi_map\">");
        content.push("<area id=\"_fb_zi_ctrl_imap\" shape=\"poly\" title=\"" + xN[7] + "\" coords=\"0,183,0,196,1,199,5,203,8,204,12,204,15,203,19,199,20,196,20,183\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,6);\" />");
        content.push("</map>");
        content.push("<div id=\"_fb_ctrl_leveltip\" style=\"position:absolute;left:0px;top:0px;width:" + gb.xx6y + "px;height:121px;display:none;\">");
        kP83K(content, "_fb_ctrl_lt_s", gb.$6X3[0], 0, 0, gb.xx6y, gb.G49, -26, -65, 13);
        kP83K(content, "_fb_ctrl_lt_c", gb.$6X3[1], 0, 40, gb.xx6y, gb.G49, -26, -65, 8);
        kP83K(content, "_fb_ctrl_lt_p", gb.$6X3[2], 0, 72, gb.xx6y, gb.G49, -26, -65, 4);
        kP83K(content, "_fb_ctrl_lt_cr", gb.$6X3[3], 0, 104, gb.xx6y, gb.G49, -26, -65, 0);
        content.push("</div>");
        this.dom = new fD("LayerControl", XU8, X9SkQ, 0, 0, true, 3, content.join(""), this.maplet.panel);
        xqNm = aa("ctrlPan");
        b2s31 = aa("ctrlZoomOut");
        A5565 = aa("ctrlZoomIn");
        DoE = aa("ctrlRuler");
        D0X = aa("ctrlSlider");
        Y1a1 = aa("_fb_ctrl_leveltip");
        y0mo0 = aa("_fb_ctrl_lt_s");
        wDe4 = aa("_fb_ctrl_lt_c");
        y5_ = aa("_fb_ctrl_lt_p");
        go0 = aa("_fb_ctrl_lt_cr");
        D0X.firstChild.id = "ctrlSliderImg";
        aa("_pan_map").q9 = this.maplet;
        aa("_zo_map").q9 = this.maplet;
        aa("_zi_map").q9 = this.maplet;
        mx23N["_ctlSlider_mousedown"] = MEvent.bindDom(D0X, "mousedown", this, Wbd43);
        mx23N["document_mousemove"] = MEvent.bindDom(document, "mousemove", this, G2m);
        mx23N["document_mouseup"] = MEvent.bindDom(document, "mouseup", this, L946);
        mx23N["_ctlRuler_click"] = MEvent.bindDom(DoE, "click", this, k3F);
        mx23N["_ctlRuler_mouseover"] = MEvent.bindDom(DoE, "mouseover", this, _nq6);
        mx23N["_ctlRuler_mouseout"] = MEvent.bindDom(DoE, "mouseout", this, m2LO);
        mx23N["_ctlRuler_mouseout"] = MEvent.bindDom(DoE, "mousedown", this, c45G5);
        mx23N["_ctlRuler_mouseout"] = MEvent.bindDom(DoE, "mouseup", this, dpb2);
        mx23N["_zo_map_mouseover"] = MEvent.bindDom(aa("_zo_map"), "mouseover", this, _nq6);
        mx23N["_zo_map_mouseout"] = MEvent.bindDom(aa("_zo_map"), "mouseout", this, m2LO);
        mx23N["_zi_map_mouseover"] = MEvent.bindDom(aa("_zi_map"), "mouseover", this, _nq6);
        mx23N["_zi_map_mouseout"] = MEvent.bindDom(aa("_zi_map"), "mouseout", this, m2LO);
        mx23N["_ctlSlider_mouseover"] = MEvent.bindDom(D0X, "mouseover", this, _nq6);
        mx23N["_ctlSlider_mouseout"] = MEvent.bindDom(D0X, "mouseout", this, m2LO);
        mx23N["_ltStreet_click"] = MEvent.bindDom(y0mo0, "click", this, e3xv);
        mx23N["_ltCity_click"] = MEvent.bindDom(wDe4, "click", this, e3xv);
        mx23N["_ltProvince_click"] = MEvent.bindDom(y5_, "click", this, e3xv);
        mx23N["_ltCountry_click"] = MEvent.bindDom(go0, "click", this, e3xv);
        mx23N["_ltStreet_mouseup"] = MEvent.bindDom(y0mo0, "mouseup", this, X3iCA);
        mx23N["_ltCity_mouseup"] = MEvent.bindDom(wDe4, "mouseup", this, X3iCA);
        mx23N["_ltProvince_mouseup"] = MEvent.bindDom(y5_, "mouseup", this, X3iCA);
        mx23N["_ltCountry_mouseup"] = MEvent.bindDom(go0, "mouseup", this, X3iCA);
        mx23N["_ltStreet_mousedown"] = MEvent.bindDom(y0mo0, "mousedown", this, UrnLH);
        mx23N["_ltCity_mousedown"] = MEvent.bindDom(wDe4, "mousedown", this, UrnLH);
        mx23N["_ltProvince_mousedown"] = MEvent.bindDom(y5_, "mousedown", this, UrnLH);
        mx23N["_ltCountry_mousedown"] = MEvent.bindDom(go0, "mousedown", this, UrnLH);
        mx23N["_zo_map_mouseup"] = MEvent.bindDom(aa("_zo_map"), "mouseup", this, X3iCA);
        mx23N["_zi_map_mouseup"] = MEvent.bindDom(aa("_zi_map"), "mouseup", this, X3iCA);
        mx23N["_fb_n_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_n_ctrl_imap"), "mouseup", this, X3iCA);
        mx23N["_fb_s_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_s_ctrl_imap"), "mouseup", this, X3iCA);
        mx23N["_fb_w_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_w_ctrl_imap"), "mouseup", this, X3iCA);
        mx23N["_fb_e_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_e_ctrl_imap"), "mouseup", this, X3iCA);
        mx23N["_fb_m_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_m_ctrl_imap"), "mouseup", this, X3iCA);
        T$D.apply(this)
    };
    var n95 = function (content, b_2o, G089K, q95M, xMC, _s04Q, p1, p3, B5702) {
        content.push("<div id=\"" + b_2o + "\" style=\"position:absolute;left:" + G089K + "px;top:" + q95M + "px;width:" + xMC + "px;height:" + _s04Q + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        if (l49R0) {
            content.push("<img id=\"" + b_2o + "_img\" src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + p1 + "px;top:" + p3 + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" " + (typeof B5702 == "string" && B5702 ? "usemap=\"#" + B5702 + "\"" : "") + " galleryimg=\"no\" />")
        } else {
            content.push("<img id=\"" + b_2o + "_img\" src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + p1 + "px;top:" + p3 + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" " + (typeof B5702 == "string" && B5702 ? "usemap=\"#" + B5702 + "\"" : "") + " galleryimg=\"no\"/>")
        }
        content.push("</div>")
    };
    var kP83K = function (content, b_2o, text, G089K, q95M, xMC, _s04Q, p1, p3, level) {
        content.push("<div id=\"" + b_2o + "\" style=\"position:absolute;left:" + G089K + "px;top:" + q95M + "px;width:" + xMC + "px;height:" + _s04Q + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        content.push("<div id=\"" + b_2o + "_text\" style=\"position:absolute;padding-left:16px;padding-top:1px;color:white;z-index:1;width:" + (P7v61 || !px ? 35 : 45) + "px;text-align:center;font-size:12px;cursor:pointer;background-image:url('" + sX + "');\" _ml=\"" + level + "\">" + text + "</div>");
        if (l49R0) {
            content.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + p1 + "px;top:" + p3 + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        } else {
            content.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + p1 + "px;top:" + p3 + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        }
        content.push("</div>")
    };
    var q9cn5 = function () {
        var Jk0$Y = MAX_ZOOM_LEVEL - MIN_ZOOM_LEVEL + 1;
        return Jk0$Y * gb.ta2Q9 + Jk0$Y * gb.b0Y + gb.ta2Q9 - 1
    };
    var MB5G = function (AB) {
        AB = MAX_ZOOM_LEVEL - AB;
        return AB * gb.ta2Q9 + AB * gb.b0Y + Q2_5().max.y + 3
    };
    var g59S = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (xqNm) {
            r.width = r0JS(xqNm.style.width, 0);
            r.height = r0JS(xqNm.style.height, 0);
            r.min.x = r0JS(xqNm.style.left, 0);
            r.min.y = r0JS(xqNm.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var Q2_5 = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (b2s31) {
            r.width = r0JS(b2s31.style.width, 0);
            r.height = r0JS(b2s31.style.height, 0);
            r.min.x = r0JS(b2s31.style.left, 0);
            r.min.y = r0JS(b2s31.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var u4G_A = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (DoE) {
            r.width = r0JS(DoE.style.width, 0);
            r.height = r0JS(DoE.style.height, 0);
            r.min.x = r0JS(DoE.style.left, 0);
            r.min.y = r0JS(DoE.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var aI3N1 = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (A5565) {
            r.width = r0JS(A5565.style.width, 0);
            r.height = r0JS(A5565.style.height, 0);
            r.min.x = r0JS(A5565.style.left, 0);
            r.min.y = r0JS(A5565.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var L374 = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (Y1a1) {
            r.width = r0JS(Y1a1.style.width, 0);
            r.height = r0JS(Y1a1.style.height, 0);
            r.min.x = r0JS(Y1a1.style.left, 0) + XU8;
            r.min.y = r0JS(Y1a1.style.top, 0) + X9SkQ;
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var n0_G1 = function () {
        var $2_ = u4G_A();
        kkd.min = $2_.min.y + gb.ta2Q9;
        kkd.max = $2_.max.y - 1 - gb.ta2Q9;
        X39x.min = $2_.min.x;
        X39x.max = $2_.max.x - 3
    };
    var IG1 = function () {
        with(this.options.location) {
            var rect = this.getRect();
            var fA_ = u4G_A();
            if (type == Maplet.LEFT_TOP) {
                XU8 = marginx;
                X9SkQ = marginy;
                E5M = fA_.max.x + 5
            } else {
                if (type == Maplet.LEFT_BOTTOM) {
                    XU8 = marginx;
                    X9SkQ = this.maplet.height - marginy - rect.height;
                    E5M = fA_.max.x + 5
                } else if (type == Maplet.RIGHT_TOP) {
                    XU8 = this.maplet.width - marginx - rect.width;
                    X9SkQ = marginy;
                    E5M = fA_.min.x - gb.xx6y - 5
                } else if (type == Maplet.RIGHT_BOTTOM) {
                    XU8 = this.maplet.width - marginx - rect.width;
                    X9SkQ = this.maplet.height - marginy - rect.height;
                    E5M = fA_.min.x - gb.xx6y - 5
                }
            }
        }
        sjV8 = u4G_A().min.y - 2
    };
    this.setLocation = function (location, SJQx) {
        location = location || {};
        if (typeof location.type != "number" && !(location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM || location.type == Maplet.RIGHT_TOP || location.type == Maplet.LEFT_BOTTOM)) location.type = Maplet.LEFT_TOP;
        if (typeof location.WUAu != "number") location.marginx = 10;
        if (typeof location.E6NT5 != "number") location.marginy = 10;
        this.options.location = location;
        if (typeof SJQx != "boolean") SJQx = true;
        if (SJQx) bYh1.apply(this)
    };
    this.setView = function (view, SJQx) {
        view = view || {};
        if (typeof view.pan != "boolean") view.pan = true;
        if (typeof view.zoomout != "boolean") view.zoomout = true;
        if (typeof view.ruler != "boolean") view.ruler = true;
        if (typeof view.zoomin != "boolean") view.zoomin = true;
        this.options.view = view;
        if (typeof SJQx != "boolean") SJQx = true;
        if (SJQx) T$D.apply(this, [SJQx])
    };
    var Wbd43 = function (e) {
        k1FD(e);
        if (!u38 && (e.target == D0X || e.target == D0X.firstChild)) {
            n0_G1.apply(this);
            u38 = true;
            this.maplet.gvL("move", D0X)
        } else {
            u38 = false
        }
        return u38
    };
    var G2m = function (e) {
        if (u38) {
            var currTop = e.clientY - this.maplet.offsetY - this.maplet.top - X9SkQ;
            if (currTop >= kkd.min && currTop <= kkd.max) {
                D0X.style.top = (currTop - 3) + "px";
                if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
                    var h = (this.isVisible(xqNm) ? 0 : 49 + 10) + (this.isVisible(b2s31) ? 0 : 24);
                    var AB = MAX_ZOOM_LEVEL - ((currTop + h) / (gb.ta2Q9 + gb.b0Y) - 10);
                    this.maplet.AN(AB)
                }
                this.maplet.gvL("move", document.body)
            }
            if (!e0k9h && px) {
                document.body.setCapture();
                e0k9h = true
            }
        }
        return u38
    };
    var L946 = function (e) {
        if (!u38) return false;
        k1FD(e, !_36s2);
        if (u38) {
            var y = e.clientY - this.maplet.offsetY - this.maplet.top - X9SkQ;
            y = y < kkd.min ? kkd.min : y;
            y = y > kkd.max ? kkd.max : y;
            var h = (this.isVisible(xqNm) ? 0 : 49 + 10) + (this.isVisible(b2s31) ? 0 : 24);
            var AB = Math.ceil(MAX_ZOOM_LEVEL - ((y + h) / (gb.ta2Q9 + gb.b0Y) - 10));
            if (this.maplet.AG == AB) {
                this.maplet.Y9q4c(true);
                this.maplet.lA.setVisible(true);
                if (this.maplet.Kw$79) this.maplet.Kw$79.setVisible(true);
                this.update(AB)
            } else {
                this.maplet.setZoomLevel(parseInt(AB))
            }
            u38 = false;
            if (e0k9h) {
                document.body.releaseCapture();
                e0k9h = false;
                AWx = true;
                getTimeout(this, b49, 700)
            }
            return true
        }
        return false
    };
    var k3F = function (e) {
        k1FD(e);
        n0_G1.apply(this);
        var e = e || window.event;
        var y = e.clientY - X9SkQ - this.maplet.offsetY - this.maplet.top;
        y = y < kkd.min ? kkd.min : y;
        y = y > kkd.max ? kkd.max : y;
        var h = (this.isVisible(xqNm) ? 0 : 49 + 10) + (this.isVisible(b2s31) ? 0 : 24);
        var AB = Math.ceil(MAX_ZOOM_LEVEL - ((y + h) / (gb.ta2Q9 + gb.b0Y) - 10));
        if (this.maplet.AG != AB) this.maplet.setZoomLevel(parseInt(AB))
    };
    var c45G5 = function (e) {
        k1FD(e)
    };
    var dpb2 = function (e) {
        this.maplet.a6(e);
        L946.apply(this, [e]);
        if (this.maplet.sS != ts.a2_Q && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv) k1FD(e)
    };
    var _nq6 = function (e) {
        k1FD(e);
        if (!this.isVisible(DoE)) return;
        AWx = false;
        if (!this.isVisible(Y1a1)) {
            this.I2S3(true)
        }
    };
    var m2LO = function (e) {
        k1FD(e);
        AWx = true;
        getTimeout(this, b49, 700)
    };
    var e3xv = function (e) {
        k1FD(e);
        var level = e.target.getAttribute("_ml");
        if (level) {
            this.maplet.setZoomLevel(r0JS(level))
        }
    };
    var X3iCA = function (e) {
        this.maplet.a6(e);
        this.maplet.overview.l1(e);
        L946.apply(this, [e]);
        k1FD(e)
    };
    var UrnLH = function (e) {
        k1FD(e)
    };
    var b49 = function () {
        if (!AWx) return;
        var loop = false;
        if (this.isVisible(Y1a1)) {
            var r = L374();
            var pt = {
                x: this.maplet.moveX,
                y: this.maplet.moveY
            };
            var vS6o = {
                min: {
                    x: r.min.x,
                    y: r.min.y
                },
                max: {
                    x: r.max.x,
                    y: r.max.y
                }
            };
            if (_isInsideRect(pt, vS6o)) loop = true
        }
        if (u38) loop = true;
        if (loop) {
            getTimeout(this, b49, 700);
            return
        }
        this.I2S3(false)
    };
    this.update = function (AB) {
        if (this.options && this.options.location) {
            IG1.apply(this);
            this.dom.style.left = XU8 + "px";
            this.dom.style.top = X9SkQ + "px"
        }
        if (D0X && DoE && this.isVisible(D0X) && this.isVisible(DoE)) {
            with(D0X.style) {
                left = r0JS(DoE.style.left, 0) + 2 + "px";
                top = MB5G(AB) + "px"
            }
        }
    };
    this.J$S = function (maplet) {
        if (this.dom) {
            this.dom.clean()
        }
        this.initialize(maplet)
    };
    var A83M_ = {};
    this.showCtlPan = function (visible, SJQx, g__1) {
        if (!xqNm) return;
        if (typeof visible != "boolean") visible = true;
        if (typeof g__1 != "boolean") g__1 = true;
        if (typeof SJQx != "boolean") SJQx = true;
        A83M_.visible = visible;
        A83M_.g__1 = g__1;
        A83M_.SJQx = SJQx;
        if (this.isVisible(this.dom) == false) {
            return
        }
        if (this.isVisible(xqNm) != visible) {
            if (visible) {
                xqNm.style.height = "49px";
                b2s31.style.left = "14px";
                DoE.style.left = "14px";
                A5565.style.left = "14px"
            } else {
                xqNm.style.height = "0px";
                b2s31.style.left = "0px";
                DoE.style.left = "0px";
                A5565.style.left = "0px"
            }
            setVisible.apply(this, [xqNm, visible]);
            if (g__1) this.options.view.pan = visible;
            if (SJQx) bYh1.apply(this)
        }
    };
    var fm95 = {};
    this.showZOButton = function (visible, SJQx, g__1) {
        if (!b2s31) return;
        if (typeof visible != "boolean") visible = true;
        if (typeof g__1 != "boolean") g__1 = true;
        if (typeof SJQx != "boolean") SJQx = true;
        fm95.visible = visible;
        fm95.g__1 = g__1;
        fm95.SJQx = SJQx;
        if (this.isVisible(this.dom) == false) {
            return
        }
        if (this.isVisible(b2s31) != visible) {
            if (visible) {
                if (!this.isVisible(DoE)) {
                    b2s31.style.height = "23px"
                } else {
                    b2s31.style.height = "24px"
                }
            } else {
                b2s31.style.height = "0px"
            }
            setVisible.apply(this, [b2s31, visible]);
            if (g__1) this.options.view.zoomout = visible;
            if (SJQx) bYh1.apply(this)
        }
    };
    var JE158 = {};
    this.showCtlRuler = function (visible, SJQx, g__1) {
        if (!DoE) return;
        if (typeof visible != "boolean") visible = true;
        if (typeof g__1 != "boolean") g__1 = true;
        if (typeof SJQx != "boolean") SJQx = true;
        JE158.visible = visible;
        JE158.g__1 = g__1;
        JE158.SJQx = SJQx;
        if (this.isVisible(this.dom) == false) {
            return
        }
        if (this.isVisible(DoE) != visible) {
            if (visible) {
                DoE.style.height = q9cn5() + "px";
                b2s31.style.height = (r0JS(b2s31.style.height, 0) + 1) + "px";
                A5565.style.height = (r0JS(A5565.style.height, 0) + 1) + "px";
                A5565.firstChild.style.top = (r0JS(A5565.firstChild.style.top, 0) + 2) + "px"
            } else {
                DoE.style.height = "0px";
                b2s31.style.height = Math.max((r0JS(b2s31.style.height, 0) - 1), 0) + "px";
                A5565.style.height = Math.max((r0JS(A5565.style.height, 0) - 1), 0) + "px";
                A5565.firstChild.style.top = (r0JS(A5565.firstChild.style.top, 0) - 2) + "px"
            }
            setVisible.apply(this, [D0X, visible]);
            setVisible.apply(this, [DoE, visible]);
            if (g__1) this.options.view.ruler = visible;
            if (SJQx) bYh1.apply(this)
        }
    };
    var t94v = {};
    this.showZIButton = function (visible, SJQx, g__1) {
        if (!A5565) return;
        if (typeof visible != "boolean") visible = true;
        if (typeof g__1 != "boolean") g__1 = true;
        if (typeof SJQx != "boolean") SJQx = true;
        t94v.visible = visible;
        t94v.g__1 = g__1;
        t94v.SJQx = SJQx;
        if (this.isVisible(this.dom) == false) {
            return
        }
        if (this.isVisible(A5565) != visible) {
            if (visible) A5565.style.height = "24px";
            else A5565.style.height = "0px";
            setVisible.apply(this, [A5565, visible]);
            if (typeof g__1 != "boolean") g__1 = true;
            if (g__1) this.options.view.zoomin = visible;
            if (typeof SJQx != "boolean") SJQx = true;
            if (SJQx) bYh1.apply(this)
        }
    };
    this.I2S3 = function (visible) {
        if (!Y1a1) return;
        if (typeof visible != "boolean") visible = true;
        if (this.isVisible(Y1a1) != visible) {
            if (visible) {
                Y1a1.style.left = E5M + "px";
                Y1a1.style.top = sjV8 + "px";
                if (this.options.location.type == Maplet.LEFT_TOP || this.options.location.type == Maplet.LEFT_BOTTOM) {
                    y0mo0.childNodes[1].style.top = wDe4.childNodes[1].style.top = y5_.childNodes[1].style.top = go0.childNodes[1].style.top = "-65px";
                    y0mo0.childNodes[0].style.paddingLeft = wDe4.childNodes[0].style.paddingLeft = y5_.childNodes[0].style.paddingLeft = go0.childNodes[0].style.paddingLeft = "16px";
                    y0mo0.childNodes[0].style.paddingRight = wDe4.childNodes[0].style.paddingRight = y5_.childNodes[0].style.paddingRight = go0.childNodes[0].style.paddingRight = "0px"
                } else {
                    y0mo0.childNodes[1].style.top = wDe4.childNodes[1].style.top = y5_.childNodes[1].style.top = go0.childNodes[1].style.top = "-84px";
                    y0mo0.childNodes[0].style.paddingLeft = wDe4.childNodes[0].style.paddingLeft = y5_.childNodes[0].style.paddingLeft = go0.childNodes[0].style.paddingLeft = "0px";
                    y0mo0.childNodes[0].style.paddingRight = wDe4.childNodes[0].style.paddingRight = y5_.childNodes[0].style.paddingRight = go0.childNodes[0].style.paddingRight = "16px"
                }
                setVisible.apply(this, [go0, MIN_ZOOM_LEVEL <= 0]);
                setVisible.apply(this, [y5_, (4 >= MIN_ZOOM_LEVEL && 4 <= MAX_ZOOM_LEVEL)]);
                setVisible.apply(this, [wDe4, (8 >= MIN_ZOOM_LEVEL && 8 <= MAX_ZOOM_LEVEL)]);
                setVisible.apply(this, [y0mo0, MAX_ZOOM_LEVEL >= 13]);
                if (!this.isVisible(y0mo0)) {
                    var c = 13 - MAX_ZOOM_LEVEL;
                    Y1a1.style.top = sjV8 - (c * gb.ta2Q9 + c * gb.b0Y) + "px"
                } else if (MAX_ZOOM_LEVEL > 13) {
                    var c = MAX_ZOOM_LEVEL - 13;
                    Y1a1.style.top = sjV8 + (c * gb.ta2Q9 + c * gb.b0Y) + "px"
                }
            }
            setVisible.apply(this, [Y1a1, visible])
        }
    };
    var T$D = function (a4rq) {
        if (typeof a4rq != "boolean") a4rq = true;
        with(this.options.view) {
            this.showCtlPan(pan, false);
            this.showZOButton(zoomout, false);
            this.showCtlRuler(ruler, false);
            this.showZIButton(zoomin, false)
        }
        if (a4rq) bYh1.apply(this)
    };
    var bYh1 = function () {
        this.I2S3(false);
        b2s31.style.top = (g59S().max.y + (this.isVisible(xqNm) ? 5 : -5)) + "px";
        DoE.style.top = Q2_5().max.y + "px";
        A5565.style.top = u4G_A().max.y + "px";
        this.maplet.Ad9();
        this.maplet.r9y3V();
        this.update(this.maplet.AG)
    };
    this.hide = function () {
        setVisible.apply(this, [this.dom, false])
    };
    this.show = function () {
        if (this.isVisible(this.dom) == true) {
            return
        }
        setVisible.apply(this, [this.dom, true]);
        this.showCtlPan(A83M_.visible, A83M_.g__1, A83M_.SJQx);
        this.showCtlRuler(JE158.visible, JE158.g__1, JE158.SJQx);
        this.showZOButton(fm95.visible, fm95.g__1, fm95.SJQx);
        this.showZIButton(t94v.visible, t94v.g__1, t94v.SJQx)
    };
    var setVisible = function (h9_5, visible) {
        if (!this.dom || typeof h9_5 != "object" || !h9_5) return;
        if (h9_5.style.display != (visible ? "" : "none")) h9_5.style.display = visible ? "" : "none"
    };
    this.isVisible = function (h9_5) {
        if (typeof h9_5 != "object" || !h9_5) h9_5 = this.dom;
        if (!h9_5) return false;
        return h9_5.style.display == ""
    };
    this.g1 = function () {
        MEvent.removeBuiltInListener(D0X, "mousedown", mx23N["_ctlSlider_mousedown"]);
        MEvent.removeBuiltInListener(document, "mousemove", mx23N["document_mousemove"]);
        MEvent.removeBuiltInListener(document, "mouseup", mx23N["document_mouseup"]);
        MEvent.removeBuiltInListener(DoE, "click", mx23N["_ctlRuler_click"]);
        MEvent.removeBuiltInListener(DoE, "mouseover", mx23N["_ctlRuler_mouseover"]);
        MEvent.removeBuiltInListener(DoE, "mouseout", mx23N["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(DoE, "mousedown", mx23N["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(DoE, "mouseup", mx23N["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseover", mx23N["_zo_map_mouseover"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseout", mx23N["_zo_map_mouseout"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseover", mx23N["_zi_map_mouseover"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseout", mx23N["_zi_map_mouseout"]);
        MEvent.removeBuiltInListener(D0X, "mouseover", mx23N["_ctlSlider_mouseover"]);
        MEvent.removeBuiltInListener(D0X, "mouseout", mx23N["_ctlSlider_mouseout"]);
        MEvent.removeBuiltInListener(y0mo0, "click", mx23N["_ltStreet_click"]);
        MEvent.removeBuiltInListener(wDe4, "click", mx23N["_ltCity_click"]);
        MEvent.removeBuiltInListener(y5_, "click", mx23N["_ltProvince_click"]);
        MEvent.removeBuiltInListener(go0, "click", mx23N["_ltCountry_click"]);
        MEvent.removeBuiltInListener(y0mo0, "mouseup", mx23N["_ltStreet_mouseup"]);
        MEvent.removeBuiltInListener(wDe4, "mouseup", mx23N["_ltCity_mouseup"]);
        MEvent.removeBuiltInListener(y5_, "mouseup", mx23N["_ltProvince_mouseup"]);
        MEvent.removeBuiltInListener(go0, "mouseup", mx23N["_ltCountry_mouseup"]);
        MEvent.removeBuiltInListener(y0mo0, "mousedown", mx23N["_ltStreet_mousedown"]);
        MEvent.removeBuiltInListener(wDe4, "mousedown", mx23N["_ltCity_mousedown"]);
        MEvent.removeBuiltInListener(y5_, "mousedown", mx23N["_ltProvince_mousedown"]);
        MEvent.removeBuiltInListener(go0, "mousedown", mx23N["_ltCountry_mousedown"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseup", mx23N["_zo_map_mouseup"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseup", mx23N["_zi_map_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_n_ctrl_imap"), "mouseup", mx23N["_fb_n_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_s_ctrl_imap"), "mouseup", mx23N["_fb_s_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_w_ctrl_imap"), "mouseup", mx23N["_fb_w_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_e_ctrl_imap"), "mouseup", mx23N["_fb_e_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_m_ctrl_imap"), "mouseup", mx23N["_fb_m_ctrl_imap_mouseup"]);
        if (this.dom && this.dom.finalize) {
            this.dom.finalize()
        }
        if (aa("_pan_map")) aa("_pan_map").q9 = null;
        if (aa("_zo_map")) aa("_zo_map").q9 = null;
        if (aa("_zi_map")) aa("_zi_map").q9 = null;
        D3Ji(this)
    };
    this.getRect = function () {
        var r = {
            min: {
                x: null,
                y: null
            },
            max: {
                x: null,
                y: null
            },
            L$51l: {
                x: null,
                y: null
            },
            KL9k3: {
                x: null,
                y: null
            },
            width: null,
            height: null
        };
        if (this.isVisible(this.dom)) {
            if (this.isVisible(xqNm)) {
                r = g59S();
                r.L$51l = {
                    x: null,
                    y: null
                };
                r.KL9k3 = {
                    x: null,
                    y: null
                }
            }
            if (this.isVisible(b2s31)) {
                var v = Q2_5();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(DoE)) {
                var v = u4G_A();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(A5565)) {
                var v = aI3N1();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            r.L$51l.x = r.min.x + XU8;
            r.L$51l.y = r.min.x + X9SkQ;
            r.KL9k3.x = r.max.x + XU8;
            r.KL9k3.y = r.max.y + X9SkQ;
            r.width = r.max.x - r.min.x;
            r.height = r.max.y - r.min.y
        }
        return r
    };
    var xqNm = null;
    var b2s31 = null;
    var A5565 = null;
    var DoE = null;
    var D0X = null;
    var Y1a1 = null;
    var y0mo0 = null;
    var wDe4 = null;
    var y5_ = null;
    var go0 = null;
    var mx23N = [];
    var u38 = false;
    var kkd = {
        min: 0,
        max: 0
    };
    var X39x = {
        min: 0,
        max: 0
    };
    var XU8 = -Number.MAX_VALUE;
    var X9SkQ = -Number.MAX_VALUE;
    var E5M = -Number.MAX_VALUE;
    var sjV8 = -Number.MAX_VALUE;
    var AWx = true;
    var e0k9h = false;
    this.maplet = null;
    this.dom = null;
    this.options = options || {};
    with(this.options) {
        this.setLocation(typeof location != "object" ? undefined : location, false);
        this.setView(typeof view != "object" ? undefined : view, false)
    };
    this.controlCanvas = {};
    this.controlCanvas.div = {};
    this.controlCanvas.div.update = function () {};
    this.onmousedown = Wbd43;
    this.onmousemove = G2m;
    this.onmouseup = L946;
    this.onmouseout = function () {}
};
gb.ta2Q9 = 6;
gb.b0Y = 2;
gb.xx6y = 52;
gb.G49 = 18;
gb.$6X3 = ["\u8857\u9053", "\u57ce\u5e02", "\u7701", "\u56fd\u5bb6"];

function ny(e) {
    if (!e) {
        e = window.event
    }
    if (e && !e.target) {
        e.target = e.srcElement
    }
    if (e && typeof e.button == "undefined") {
        e.button = e.which
    }
    e.Rl1b = function () {
        if (this.stopPropagation) {
            this.stopPropagation()
        } else {
            this.cancelBubble = false
        }
    };
    e.B36h = function () {
        if (this.preventDefault) {
            this.preventDefault()
        } else {
            this.returnValue = false
        }
    };
    return e
};

function getTimeout(uy, q0, yI) {
    return window.setTimeout(function () {
        q0.apply(uy)
    }, yI)
};

function nB(uy, q0, yI) {
    return window.setInterval(function () {
        q0.apply(uy)
    }, yI)
};
var MEvent = {
    nD: function (l7) {
        return "_e__" + l7
    }, addListener: function (uy, l7, q0) {
        var l8 = this.nD(l7);
        if (uy[l8]) {
            var cZ = true;
            for (var i = 0; i < uy[l8].length; i++) {
                var h = uy[l8][i];
                if (h == q0) {
                    cZ = false;
                    break
                }
            }
            if (cZ) uy[l8].push(q0)
        } else {
            uy[l8] = [q0]
        }
        return {
            qg: uy,
            propertyName: l8,
            q0: q0
        }
    }, removeListener: function (q9) {
        var uy = q9.qg[q9.propertyName];
        for (var c = 0; c < uy.length; c++) {
            if (uy[c] == q9.q0) {
                uy.splice(c, 1);
                return
            }
        }
    }, contains: function (uy, l7) {
        var l8 = this.nD(l7);
        if (typeof uy[l8] != "undefined") return uy[l8].length;
        else return 0
    }, clearListeners: function (uy, l7) {
        var l8 = this.nD(l7);
        uy[l8] = null
    }, trigger: function (uy, l8) {
        var l9 = this.nD(l8);
        var lS = uy[l9];
        if (lS && lS.length > 0) {
            var vn = [];
            for (var X87 = 2; X87 < arguments.length; X87++) {
                vn.push(arguments[X87])
            }
            for (var i = 0; i < lS.length; i++) {
                var h = lS[i];
                if (h) {
                    try {
                        h.apply(uy, vn)
                    } catch (e) {}
                }
            }
        }
    }, addBuiltInListener: function (uy, l8, q0, P8$yU) {
        if (uy.addEventListener) {
            uy.addEventListener(l8, q0, P8$yU)
        } else if (uy.attachEvent) {
            uy.attachEvent("on" + l8, q0)
        } else {
            uy["on" + l8] = q0
        }
        return q0
    }, removeBuiltInListener: function (uy, l8, q0) {
        if (uy.removeEventListener) {
            uy.removeEventListener(l8, q0, false)
        } else if (uy.detachEvent) {
            uy.detachEvent("on" + l8, q0)
        } else {
            uy["on" + l8] = null
        }
    }, bind: function (uy, l8, fU, q0) {
        return this.addListener(uy, l8, function () {
            q0.apply(fU, arguments)
        })
    }, bindDom: function (uy, l8, fU, q0, P8$yU) {
        P8$yU = !!P8$yU;
        var an = this.gm(fU, q0);
        return this.addBuiltInListener(uy, l8, an, P8$yU)
    }, gm: function (uy, l8) {
        return function (e) {
            e = ny(e);
            l8.call(uy, e)
        }
    }, callback: function (q0, uy) {
        return function () {
            return uy.apply(q0, arguments)
        }
    }
};
var MIcon = function (imgUrl, width, height, anchorX, anchorY, Wm1wu) {
    this.ao = [];
    this.o64 = 1;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.o64;
    this.div.style.position = "absolute";
    width = (typeof width == "undefined") ? 16 : width;
    height = (typeof height == "undefined") ? 16 : height;
    this.img = document.createElement("div");
    this.img.unselectable = "on";
    this.img.style.MozUserSelect = "none";
    this.img.style.zIndex = this.o64;
    this.img.style.position = "absolute";
    this.img.style.top = "0px";
    this.img.style.left = "0px";
    this.imgUrl = imgUrl;
    this.left = 0;
    this.top = 0;
    this.y10 = this.left;
    this.o7p26 = this.top;
    this.wz = function (id) {
        this.div.id = "OverlayBg" + id;
        this.img.id = id
    };
    this.initialize = function (marker) {
        if (px) this.img.ondragstart = function () {
            return false
        };
        this.marker = marker;
        m4$(this.img.firstChild, "oid", this.marker.id);
        this.ao["mouseover"] = MEvent.bindDom(this.img.firstChild, "mouseover", this.marker, this.marker.hiliteIcon);
        this.ao["mouseout"] = MEvent.bindDom(this.img.firstChild, "mouseout", this.marker, this.marker.v4)
    };
    this.setContextMenu = function (menu) {};
    this.getImgUrl = function () {
        var Yp1c1 = "";
        var pC = this.img;
        if (pC.innerHTML.indexOf(Maplet.MICON_IMGSRC_FLAG) != -1) {
            var F000$ = new RegExp(Maplet.MICON_IMGSRC_FLAG + "=\"?([^\"\t ]*)", "gi");
            var W1k = F000$.exec(pC.innerHTML);
            if (W1k != null) Yp1c1 = W1k[1]
        } else if (pC.firstChild && pC.firstChild.tagName.toUpperCase() == "IMG") {
            Yp1c1 = pC.firstChild.src
        } else {
            Yp1c1 = this.imgUrl
        }
        return Yp1c1
    };
    this.enableDragMap = function (enable) {
        if (!this.img || !this.img.firstChild) return;
        if (enable) m4$(this.img.firstChild, $0eU, "true");
        else D280(this.img.firstChild, $0eU)
    };
    this.updateImage = function (w7, Aj, nV) {
        if ((this.img.firstChild && this.imgUrl == w7) || !w7) return;
        this.imgUrl = w7;
        if (typeof this.imgUrl == "string") {
            if (this.imgUrl.indexOf("<") >= 0) {
                this.img.innerHTML = this.imgUrl
            } else {
                this.img.innerHTML = "<img src=" + this.imgUrl + " width=" + (typeof Aj == "undefined" ? width : Aj) + " height=" + (typeof Aj == "undefined" ? height : nV) + ">";
                if (this.marker) {
                    if (this.marker.label && typeof Aj != "undefined") {
                        this.marker.label.xoffset += Aj - width;
                        width = Aj
                    }
                    if (this.marker.maplet) {
                        this.marker.initialize(this.marker.maplet)
                    }
                }
            }
        } else {
            this.img.innerHTML = "";
            this.img.appendChild(this.imgUrl)
        }
        this.img.firstChild.onmousedown = function (e) {
            return false
        };
        m4$(this.img.firstChild, F8v33, "marker");
        this.enableDragMap(this.marker ? !this.marker.bEditable : true)
    };
    this.updateImage(imgUrl);
    this.width = (typeof width == "undefined") ? parseInt(this.img.width) : parseInt(width);
    this.height = (typeof height == "undefined") ? parseInt(this.img.height) : parseInt(height);
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.Wm1wu = (typeof Wm1wu == "undefined") ? imgUrl : Wm1wu;
    this.anchorX = (typeof anchorX == "undefined") ? parseInt(this.width / 2) : parseInt(anchorX);
    this.anchorY = (typeof anchorY == "undefined") ? parseInt(this.height / 2) : parseInt(anchorY);
    this.div.appendChild(this.img);
    this.update = function (maplet, left, top) {
        var zB = parseInt(left) - parseInt(this.anchorX);
        var zF = parseInt(top) - parseInt(this.anchorY);
        if (this.marker.autoHide && !this.marker.ls && (zB > maplet.width || zB < -this.width || zF > maplet.height || zF < -this.height)) {
            if (this.div.parentNode) {
                this.div.style.top = zF + "px";
                this.div.style.left = zB + "px";
                this.div.parentNode.removeChild(this.div);
                if (this.marker.label) this.marker.label.remove();
                this.fu = false
            }
        } else {
            if (this.div.parentNode != maplet.lA.div && !this.marker.ls) {
                maplet.lA.appendChild(this.div);
                this.div.style.width = this.width + "px";
                this.div.style.height = this.height + "px";
                this.img.width = this.width + "px";
                this.img.height = this.height + "px";
                this.fu = true
            }
            this.div.style.top = zF + "px";
            this.div.style.left = zB + "px";
            this.y10 = this.left;
            this.o7p26 = this.top;
            this.left = zB;
            this.top = zF;
            left = zB;
            top = zF;
            if (this.marker.label) this.marker.label.update(this.marker.maplet, left, top)
        }
    };
    this.isVisible = function () {
        return (this.fu)
    };
    this.zq = function () {
        return (this.img.firstChild.src) + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.marker) {
            this.marker.hiliteIcon({
                target: this.img
            })
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.img.firstChild) {
            if (px) this.img.ondragstart = null;
            this.img.firstChild.onmousedown = null;
            for (var l8 in this.ao) {
                MEvent.removeBuiltInListener(this.img.firstChild, l8, this.ao[l8]);
                this.ao[l8] = null;
                if (finalize) delete this.ao[l8]
            }
        }
        if (finalize) this.ao = null;
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize) this.marker = null
    };
    this.setZIndex = function (_WD) {
        if (this.div && this.div.parentNode && _WD != this.div.style.zIndex) {
            this.o64 = this.div.style.zIndex;
            this.div.style.zIndex = _WD
        }
    };
    this.u8q7 = function () {
        if (!this.div) return;
        if (this.o64 != this.div.style.zIndex) {
            this.setZIndex(this.o64)
        }
    };
    this.nH = function () {
        return this.width
    };
    this.nz = function () {
        return this.height
    };
    this.GOE3m = function () {
        return this.anchorX
    };
    this.U905 = function () {
        return this.anchorY
    };
    this.getRect = function () {
        var r = {
            min: {
                x: this.div.offsetLeft,
                y: this.div.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        r.max.x = r.min.x + this.div.offsetWidth;
        r.max.y = r.min.y + this.div.offsetHeight;
        return r
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIcon'
    }
};
var MMarker = function (pt, icon, info, label, shadow, l3N24) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
    this.pt = pt;
    this.l3N24 = (typeof l3N24 == "boolean") ? l3N24 : false;
    this.icon = (typeof icon == "undefined") ? null : icon;
    if (this.icon && this.icon.wz) {
        this.icon.wz(this.id)
    }
    this.shadow = typeof shadow == "undefined" ? null : shadow;
    if (this.shadow && this.shadow.wz) this.shadow.wz(this.id);
    this.label = (typeof label == "undefined") ? null : label;
    if (this.label && this.label.wz) {
        this.label.wz(this.id)
    }
    this.info = null;
    if (typeof info != "undefined" && info) {
        this.info = info;
        this.info.setOverlay(this)
    }
    this.lw = 0;
    this.ls = false;
    this.bEditable = false;
    this.rotation = 0;
    this.ao = [];
    this.contextmenu = null;
    this.autoHide = true;
    this.dragAnimation = true;
    this.V0x = false;
    this.creator = MLayer.USER;
    this.A29 = false;
    this.setContextMenu = function (menu) {
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        } else if (!menu) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (dom) {
        return this.contextmenu
    };
    this.wz = function (id) {
        this.id = id;
        if (this.icon && this.icon.wz) {
            this.icon.wz(id)
        }
        if (this.shadow && this.shadow.wz) this.shadow.wz(id)
    };
    this.setEditable = function (cs) {
        this.bEditable = (typeof cs == "undefined") ? false : cs;
        if (REFRESH_MK_INDEX) this.refreshZIndex();
        if (this.icon) this.icon.enableDragMap(!this.bEditable)
    };
    this.refreshZIndex = function (_249) {
        if (!this.icon) return;
        if (typeof _249 != "boolean") _249 = true;
        if (this.maplet) {
            var l4g37 = this.maplet.getMarkerPolygons(this);
            if (l4g37.length > 0) {
                var b = false;
                for (var i = 0; i < l4g37.length; i++) {
                    if (l4g37[i].bEditable) {
                        b = true;
                        break
                    }
                }
                if (this.bEditable || !b) {
                    if (this.icon.div.style.zIndex < 0) this.u8q7()
                } else {
                    if (this.icon.div.style.zIndex >= 0) this.setZIndex(-1)
                } if (_249) {
                    for (var i = 0; i < l4g37.length; i++) {
                        l4g37[i].cw26(this)
                    }
                }
            }
        }
    };
    this.initialize = function (maplet) {
        this.y09J(true);
        this.maplet = maplet;
        this.dragAnimation = this.maplet.markerDragAnimation && this.dragAnimation;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        }
        this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
        if (this.icon != null) {
            this.icon.initialize(this)
        }
        if (this.label != null) {
            this.label.initialize(this)
        }
        if (this.shadow != null) {
            this.shadow.initialize(this)
        } {
            if (this.info != null) {
                this.ao["info_" + this.info.yd] = MEvent.bindDom(this.maplet.map, this.info.yd, this, this.openInfoWindow)
            } else {
                this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
            }
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
        if (REFRESH_MK_INDEX) this.refreshZIndex()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MMarker'
    };
    this.paint = function () {
        if (!this.maplet) return;
        if (!this.pt.maplet) this.pt.initialize(this.maplet);
        if (this.maplet.K_0r4) {
            if (this.maplet.$96 != this.pt.$96) {
                this.pt.mapX += this.maplet.wbb1l;
                this.pt.mapY += this.maplet.$X41;
                this.pt.$96 = this.maplet.$96
            }
        } else {
            this.pt.recalcScreenCoords()
        } if (this.icon) {
            if (!this.icon.marker) this.icon.initialize(this);
            this.icon.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
        if (this.shadow) {
            if (!this.shadow.marker) this.shadow.initialize(this);
            this.shadow.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
        if (this.icon && this.l3N24) {
            Yq709.apply(this);
            this.l3N24 = false
        }
    };
    this.zq = function () {
        return (this.icon.isVisible()) ? "1" + "," + this.pt.getPid() + "," + this.icon.zq() : ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.maplet && this.maplet.markerDragAnimation) this.maplet.G69(false);
        if (finalize) this.removeContextMenu();
        if (this.icon) {
            this.icon.remove(finalize)
        }
        if (this.label) {
            this.label.remove(finalize)
        }
        if (this.shadow) {
            this.shadow.remove(finalize)
        }
        this.y09J(finalize);
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize) this.ao = null;
        this.maplet = null
    };
    this.y09J = function (finalize) {
        if (this.maplet) {
            for (var l8 in this.ao) {
                var l9 = l8.substring(0, 5) == "info_" ? l8.substring(5) : l8;
                MEvent.removeBuiltInListener(this.maplet.map, l9, this.ao[l8]);
                this.ao[l8] = null;
                if (finalize) delete this.ao[l8]
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.openInfoWindow.caller == null) {};
        if (this.maplet != null) {
            if ((new Date().getTime() - this.lw) < 200) return;
            if (this.maplet.h95 && typeof e == "object" && ((this.icon && fJ(e.target, this.icon.img)) || (this.label && fJ(e.target, this.label.div)))) {
                this.maplet.h95 = false;
                if (this.maplet.$7BK8 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            var x = this.pt.mapX;
            var y = this.pt.mapY;
            if (typeof e == "undefined" || (typeof e == "object" && this.icon && fJ(e.target, this.icon.img)) || (typeof e == "object" && this.label && fJ(e.target, this.label.div))) {
                if (typeof e == "object" && this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) {
                    return
                }
                if (!this.icon.isVisible()) {
                    if (x >= this.maplet.width * 1.5 || x <= -(this.maplet.width / 2) || y <= -(this.maplet.height / 2) || y >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(this.pt.getPid());
                        x = this.maplet.width / 2;
                        y = this.maplet.height / 2
                    }
                }
                this.x = x;
                this.y = y;
                if (this.openInfoWindow.caller && this.openInfoWindow.caller.toString().indexOf(".call(") != -1) {
                    avBubble.Iqv_ = false;
                    MEvent.trigger(this, "click", this)
                }
                if (!this.maplet) return;
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (iToolTipStyle != 2) {
                    this.hiliteIcon({
                        target: {
                            id: this.id
                        }
                    });
                    this.maplet.wN(x, y, this.info, "", "", true)
                }
            } else if (typeof e == "boolean" && e || e == "true") {
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (x > this.maplet.width * 2 || x < -this.maplet.width || y < -this.maplet.height || y > this.maplet.height * 2) {
                    this.maplet.setCenter(this.pt.getPid());
                    x = this.maplet.width / 2;
                    y = this.maplet.height / 2
                }
                this.maplet.wN(x, y, this.info, true)
            }
        }
    };
    this.w0 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && fJ(e.target, this.icon.img) && e.button != 2) {
            this.qo = true;
            this.fd = false;
            this.l6 = this.id;
            this.l0 = parseInt(e.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
            this.na = parseInt(e.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
            if (this.rotation == 1) {
                var lb = this.l0 - this.icon.width / 2;
                var lc = this.na - this.icon.height / 2;
                var la = Math.sqrt(lb * lb + lc * lc);
                if (la > (this.icon.width / 4 - 5)) {
                    this.fd = true;
                    this.downX = e.clientX;
                    this.downY = e.clientY
                }
            }
            this.ao["mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px) this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1);
            else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(e.target, this.icon.img) || this.l6 == this.id)) {
            if (this.qo) {
                if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
                if (!this.fd) {
                    var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                    var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                    var _3Q = this.maplet.ukd$;
                    var n19t2 = 0,
                        R4oLV = 0;
                    if (this.icon.div.parentNode == this.maplet.lA.div) {
                        this.maplet.panel.appendChild(this.icon.div);
                        if (this.label) this.maplet.panel.appendChild(this.label.div);
                        if (this.shadow) this.maplet.panel.appendChild(this.shadow.div);
                        this.setZIndex(pF);
                        if (px) document.body.setCapture();
                        if (this.maplet.markerDragAnimation) {
                            n19t2 = _3Q.$rQWE;
                            R4oLV = _3Q.iaW_
                        }
                    }
                    if (!s4s21) s4s21 = nB(this, _Xb, 100);
                    if (this.dragAnimation) {
                        y = y + this.icon.anchorY - _3Q.height / 2;
                        this.maplet.G69(true, x + this.icon.anchorX - _3Q.width / 2, y);
                        y = y - _3Q.offsetY - this.icon.height
                    }
                    this.x = x;
                    this.y = y;
                    this.lw = new Date().getTime();
                    this.ls = true;
                    this.icon.update(this.maplet, x + this.icon.anchorX, y + this.icon.anchorY);
                    if (this.shadow) {
                        var g4 = this.icon.left - this.icon.y10;
                        var g5 = this.icon.top - this.icon.o7p26;
                        this.shadow.update(this.maplet, this.shadow.left + g4 + this.shadow.anchorX + n19t2, this.shadow.top + g5 + this.shadow.anchorY + R4oLV)
                    }
                    if ((MEvent.contains(this, "dragstart") && !this.V0x) || MEvent.contains(this, "draging")) {
                        var pt = null;
                        if (this.dragAnimation) {
                            pt = new MPoint(this.maplet.toMapCoordinate(r0JS(_3Q.fC.div.style.left) + _3Q.width / 2, r0JS(_3Q.fC.div.style.top) + _3Q.height / 2))
                        } else {
                            pt = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY))
                        }
                        pt.initialize(this.maplet);
                        if (MEvent.contains(this, "dragstart") && !this.V0x) {
                            MEvent.trigger(this, "dragstart", this, pt);
                            this.V0x = true
                        }
                        if (MEvent.contains(this, "draging")) {
                            MEvent.trigger(this, "draging", this, pt)
                        }
                    }
                } else {
                    var wc = parseInt(e.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
                    var wd = parseInt(e.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
                    var wa = Math.atan2((wd - this.icon.height / 2), wc - this.icon.width / 2);
                    var wb = ((90 + wa * 180 / Math.PI) + 360) % 360;
                    MEvent.trigger(this, "rotate", wb)
                } if (px) this.maplet.a3(e)
            }
        }
    };
    this.l1 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo && this.ls) {
            if (this.maplet.fa) this.maplet.finishupPan();
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["mouseup"]);
            this.ao["mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
            this.V0x = false;
            if (!this.fd) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                if (isNaN(x)) x = this.x;
                if (isNaN(y)) y = this.y;
                if (this.icon.div.parentNode != this.maplet.lA.div) {
                    this.maplet.lA.appendChild(this.icon.div);
                    if (this.label) this.maplet.lA.appendChild(this.label.div);
                    if (this.shadow) {
                        this.maplet.lA.appendChild(this.shadow.div);
                        this.shadow.u8q7()
                    }
                    with(this.maplet.ukd$.fC) {
                        if (div.parentNode != this.maplet.lA.div) {
                            this.maplet.lA.div.appendChild(div);
                            div.style.zIndex = this.icon.div.style.zIndex - 1
                        }
                    }
                    if (px) document.body.releaseCapture()
                }
                if (this.dragAnimation) {
                    y = parseInt(this.maplet.ukd$.fC.style.top) + this.maplet.ukd$.height / 2 - this.icon.anchorY
                }
                this.pt.setMapCoords(x + this.icon.anchorX, y + this.icon.anchorY);
                this.x = x;
                this.y = y;
                if (this.dragAnimation) ggjJF.apply(this)
            } else {}
            MEvent.trigger(this, "drag", this);
            MEvent.trigger(this.maplet, "edit", this);
            if (this.ls) {
                this.lw = new Date().getTime();
                this.ls = false
            }
            if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly) this.maplet.d7B30 = false
        }
        if (this.l6 == this.id) {
            this.l6 = null
        }
        this.qo = false
    };
    this.hiliteIcon = function (e) {
        if (this.icon != null && fJ(e.target, this.id) && !this.qo) {
            if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.a2_Q) {
                this.maplet.gvL("no-drop", this.icon.img)
            } else if (this.info || MEvent.contains(this, "click") > 0 || this.bEditable) {
                this.maplet.gvL("pointer", this.icon.img)
            }
            if (this.icon.div.style.zIndex < pF) {
                pF++
            }
            this.icon.setZIndex(pF);
            if (this.label) this.label.setZIndex(pF);
            var x = this.maplet.zl(this.pt.lon, this.pt.lat);
            var y = this.maplet.zm(this.pt.lat, this.pt.lon);
            this.x = x;
            this.y = y;
            if (typeof e.button != "undefined" && !this.A29) {
                this.A29 = true;
                MEvent.trigger(this, "mouseover", this)
            }
        }
    };
    this.v4 = function (e) {
        this.maplet.gvL("default", this.icon.img);
        if (this.icon != null && fJ(e.target, this.id) && !this.qo) {
            var x = this.maplet.zl(this.pt.lon, this.pt.lat);
            var y = this.maplet.zm(this.pt.lat, this.pt.lon);
            this.x = x;
            this.y = y;
            MEvent.trigger(this, "mouseout", this);
            this.A29 = false
        }
    };
    this.setZIndex = function (_WD) {
        if (this.icon) this.icon.setZIndex(_WD);
        if (this.label) this.label.setZIndex(_WD);
        if (this.shadow) this.shadow.setZIndex(_WD)
    };
    this.u8q7 = function () {
        if (this.icon) this.icon.u8q7();
        if (this.label) this.label.u8q7();
        if (this.shadow) this.shadow.u8q7()
    };
    this.setIcon = function (J54d, r_2) {
        if (typeof r_2 != "boolean") r_2 = true;
        if (this.icon) {
            this.icon.remove();
            this.icon = null
        }
        if (J54d) {
            this.icon = J54d;
            this.icon.wz(this.id);
            this.icon.initialize(this);
            this.icon.enableDragMap(!this.bEditable);
            if (r_2) this.paint()
        }
    };
    this.setLabel = function (C94q1, r_2) {
        if (typeof r_2 != "boolean") r_2 = true;
        if (this.label) {
            this.label.remove();
            this.label = null
        }
        if (C94q1) {
            this.label = C94q1;
            this.label.wz(this.id);
            this.label.initialize(this);
            if (r_2) this.paint()
        }
    };
    this.setShadow = function (KpWd5, r_2) {
        if (typeof r_2 != "boolean") r_2 = true;
        if (this.shadow) {
            this.shadow.remove();
            this.shadow = null
        }
        if (KpWd5) {
            this.shadow = KpWd5;
            this.shadow.wz(this.id);
            this.shadow.initialize(this);
            if (r_2) this.paint()
        }
    };
    this.setInfoWindow = function (d2G) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible()) this.maplet.hideBubble();
            this.info = null
        }
        if (d2G) {
            this.info = d2G;
            this.info.setOverlay(this)
        }
    };
    this.setPoint = function (B457, r_2) {
        if (typeof r_2 != "boolean") r_2 = true;
        this.pt = B457;
        if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
        if (r_2) this.paint()
    };
    this.x6V8 = function () {
        var QP4_a = this.icon.GOE3m(),
            $29eI = this.icon.U905(),
            e748s = this.icon.nH(),
            vv3P9 = this.icon.nz();
        var ___ = this.pt.mapX - parseInt(QP4_a),
            XDb = this.pt.mapY - parseInt($29eI),
            Xge2 = ___ + e748s,
            W169F = XDb + vv3P9;

        function f767$(a, b) {
            return a - b
        };
        var x = [this.pt.mapX, ___, Xge2].sort(f767$),
            y = [this.pt.mapY, XDb, W169F].sort(f767$);
        var c8 = {};
        c8.T5_Vl = new MPoint(this.maplet.toMapCoordinate(x[0], y[2]));
        c8.T5_Vl.initialize(this.maplet);
        c8.gsI = new MPoint(this.maplet.toMapCoordinate(x[2], y[0]));
        c8.gsI.initialize(this.maplet);
        return c8
    };
    var s4s21 = null;
    var _Xb = function () {
        if (this.ls) {
            var VC30K = this.maplet.s261;
            var rt = this.icon.getRect();
            if (rt.min.x == rt.max.x || rt.min.y == rt.max.y) return;
            var vj = 0,
                vk = 0;
            if (rt.min.x < VC30K) vj = 50;
            if (rt.min.y < VC30K) vk = 50;
            if (rt.max.x > this.maplet.width - VC30K) vj = -50;
            if (rt.max.y + (this.dragAnimation ? (this.maplet.ukd$.height + this.maplet.ukd$.offsetY) : 0) + 2 > this.maplet.height - VC30K) vk = -50;
            if ((vj != 0 || vk != 0)) {
                this.maplet.panTo(vj, vk);
                if (MEvent.contains(this, "draging")) {
                    var pt = null;
                    if (this.dragAnimation) {
                        var _3Q = this.maplet.ukd$;
                        pt = new MPoint(this.maplet.toMapCoordinate(r0JS(_3Q.fC.div.style.left) + _3Q.width / 2, r0JS(_3Q.fC.div.style.top) + _3Q.height / 2))
                    } else pt = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY));
                    pt.initialize(this.maplet);
                    MEvent.trigger(this, "draging", this, pt)
                }
                return
            }
        }
        window.clearInterval(s4s21);
        s4s21 = null
    };
    t47$5 = null;
    var ggjJF = function () {
        window.clearTimeout(t47$5);
        this.maplet.ukd$.overlay = this;
        var yw = 0,
            d = 50;
        var x41 = {
            b: parseInt(this.icon.div.style.top),
            c: 0
        };
        x41.c = this.pt.mapY - this.icon.anchorY - x41.b;
        var R1328 = null,
            _9A = null;
        if (this.shadow) {
            var R1328 = {
                b: parseInt(this.shadow.div.style.left),
                c: 0
            };
            R1328.c = this.pt.mapX - this.shadow.anchorX - R1328.b;
            var _9A = {
                b: parseInt(this.shadow.div.style.top),
                c: 0
            };
            _9A.c = this.pt.mapY - this.shadow.anchorY - _9A.b
        }

        function aVu9() {
            if (yw < d) {
                yw++;
                this.icon.update(this.maplet, this.pt.mapX, Math.ceil(q57(yw, x41.b, x41.c, d)) + this.icon.anchorY);
                if (this.shadow) this.shadow.update(this.maplet, Math.ceil(q57(yw, R1328.b, R1328.c, d)) + this.shadow.anchorX, Math.ceil(q57(yw, _9A.b, _9A.c, d)) + this.shadow.anchorY);
                t47$5 = getTimeout(this, aVu9, 10)
            } else {
                this.maplet.G69(false)
            }
        };
        aVu9.apply(this)
    };
    this.o2kD = function () {
        if (t47$5) {
            window.clearTimeout(t47$5);
            t47$5 = null
        }
        this.paint()
    };
    var q57 = function (yw, b, c, d) {
        if ((yw /= d) < (1 / 2.75)) {
            return c * (7.5625 * yw * yw) + b
        } else if (yw < (2 / 2.75)) {
            return c * (7.5625 * (yw -= (1.5 / 2.75)) * yw + .75) + b
        } else if (yw < (2.5 / 2.75)) {
            return c * (7.5625 * (yw -= (2.25 / 2.75)) * yw + .9375) + b
        } else {
            return c * (7.5625 * (yw -= (2.625 / 2.75)) * yw + .984375) + b
        }
    };
    var Yq709 = function () {
        var n45 = 0;
        var yN = null;
        var uB = this.icon.div;
        uB.style.top = '-100px';
        var x61 = this.pt.mapY - this.icon.U905();;
        var W14 = false;
        var P4MUn = function () {
            n45 += 5;
            n45 *= 0.97;
            var top = parseInt(uB.style.top) + n45;
            if (top >= x61) {
                uB.style.top = x61 + 'px';
                n45 *= -0.5
            } else {
                uB.style.top = top + 'px'
            } if (W14 && uB.offsetTop == x61) {
                window.clearTimeout(yN)
            } else {
                yN = window.setTimeout(P4MUn, 30)
            }
            W14 = uB.offsetTop == x61
        };
        P4MUn.apply(this)
    }
};
var MPolyline = function (pts, brush, info, label, options) {
    this.options = options || {};
    if (typeof this.options.editHilite != "boolean") {
        this.options.editHilite = true
    }
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "MPolyline";
    this.pts = pts;
    this._m2G = [];
    this.Mwc5 = [];
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = null;
    if (typeof info != "undefined" && info) {
        this.info = info;
        this.info.setOverlay(this)
    }
    this.label = (typeof label == "undefined") ? null : label;
    this.qo = false;
    this.wk = null;
    this.z9 = null;
    this.um = new MContextMenu();
    this.un = new MContextMenuItem('\u5220\u9664\u8282\u70B9');
    this.um.addItem(this.un);
    this.contextmenu = null;
    this.pathNodeMenu = null;
    this.ao = [];
    this.sWFp = {};
    this.isRefreshMkIndex = REFRESH_MK_INDEX;
    this.tn = Number.MAX_VALUE;
    this.to = this.tn;
    this.vc7 = -Number.MAX_VALUE;
    this.H092 = this.vc7;
    this.maplet = null;
    this.bEditable = false;
    this.y53p4 = false;
    this.d42 = false;
    this.Q1262 = true;
    this.dj3g = null;
    this.VqO = [];
    this.T80 = [];
    var C3D_0 = {
        yN: null,
        xqc: {
            x: null,
            y: null
        },
        DMP$0: {
            x: null,
            y: null
        },
        V9CJO: {
            x: null,
            y: null
        }
    };
    this.ioQ4 = [];
    var J7x = [];
    this.creator = MLayer.USER;
    this.setEditable = function (enable) {
        this.bEditable = (typeof enable != "boolean") ? false : enable;
        if (!this.bEditable && this.z9) {
            this.E9AC5()
        }
        if (this.maplet != null) {
            this.update()
        }
    };
    this.setEditMode = function (mode, K9f) {
        if (typeof K9f != "boolean") {
            K9f = true
        }
        var cUXC1 = false;
        if (mode == "path") {
            cUXC1 = !this.traffic;
            this.traffic = true
        } else if (mode == "default") {
            cUXC1 = this.traffic;
            this.traffic = false
        }
        if (cUXC1 && this.maplet) {
            this.k96i()
        }
        if (K9f && !this.bEditable) {
            this.setEditable(true)
        }
    };
    this.k96i = function () {
        if (!this.maplet) {
            return
        }
        if (this.contextmenu) {
            this.contextmenu.hide()
        }
        if (this.pathNodeMenu) {
            this.pathNodeMenu.hide()
        }
        if (this.um) {
            this.um.hide()
        }
        MEvent.removeBuiltInListener(this.maplet.map, "mousedown", this.ao["mousedown"]);
        this.ao["mousedown"] = null;
        MEvent.removeBuiltInListener(this.maplet.map, "mouseup", this.ao["mouseup"]);
        this.ao["mouseup"] = null;
        this.update();
        if (!this.traffic) {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][0]);
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][1]);
            this.ao["mousemove"] = null;
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1);
            if (this.z9) {
                this.z9.style.overflow = "";
                this.z9.style.width = "";
                this.z9.style.height = "";
                this.z9.style.left = "";
                this.z9.style.top = ""
            }
        } else {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.toX);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.W6J);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.y5l);
            if (this.z9) this.z9.style.overflow = "hidden"
        }
    };
    this.initialize = function (maplet, X1B) {
        this.maplet = maplet;
        this.X1B = typeof X1B === 'undefined' ? true : false;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        }
        if (this.pathNodeMenu) {
            if (!this.pathNodeMenu.maplet) this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this)) this.pathNodeMenu.addOverlay(this)
        }
        this.um.initialize(this.maplet);
        this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow);
        if (this.traffic) {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.toX);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.W6J);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.y5l)
        } else {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1)
        } if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPolyline'
    };
    this.zq = function () {
        return ""
    };
    this.zn = function () {
        if (apiType == 1) {
            return {
                brush: this.brush,
                points: this.pts
            }
        } else {
            var xU = this.brush.filled ? "2" : "0";
            var xT = this.brush.stroke + "," + xU + "," + this.brush.color + ":";
            for (var i = 0; i < this.pts.length; i++) xT += this.pts[i].getPid() + ",";
            return xT
        }
    };
    this.paint = function () {
        this.zX = this.maplet._T190();
        if (!llg86) {
            if (!this.z0) {
                this.z0 = document.createElement("v:shape");
                this.z0.style.width = "1px";
                this.z0.style.height = "1px";
                this.z0.coordsize = "1,1";
                this.z0.unselectable = "on";
                this.z0.id = this.id;
                this.z0.setAttribute("MStrName", this.toString());
                this.z0.strokecolor = this.brush.color;
                this.z0.strokeweight = this.brush.stroke + 'px';
                this.z0.fill = this.brush.fill;
                this.z0.filled = this.brush.fill;
                this.z0.style.position = "absolute";
                this.z0.contextmenu = this.contextmenu;
                m4$(this.z0, $0eU, "true");
                m4$(this.z0, F8v33, "polyline");
                m4$(this.z0, "oid", this.id);
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0;
                this.Ad.joinstyle = "round";
                this.Ad.endcap = "round";
                this.Ad.fill = this.brush.fill;
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.z0.appendChild(this.zY);
                this.z0.appendChild(this.Ad);
                this.zX.appendChild(this.z0);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var snn5 = this.brush.overlap;
                    this.dj3g = document.createElement("v:shape");
                    this.dj3g.style.width = "1px";
                    this.dj3g.style.height = "1px";
                    this.dj3g.coordsize = "1,1";
                    this.dj3g.unselectable = "on";
                    this.dj3g.strokecolor = snn5.color;
                    this.dj3g.strokeweight = (snn5.stroke && !isNaN(snn5.stroke) ? snn5.stroke : this.brush.stroke - 2) + "px";
                    this.dj3g.fill = false;
                    this.dj3g.filled = false;
                    this.dj3g.style.position = "absolute";
                    m4$(this.dj3g, $0eU, "true");
                    m4$(this.dj3g, F8v33, "polyline");
                    m4$(this.dj3g, "oid", this.id);
                    this.Fq$K = document.createElement("v:stroke");
                    this.Fq$K.opacity = snn5.transparency / 100.0;
                    this.Fq$K.joinstyle = "round";
                    this.Fq$K.endcap = "round";
                    this.Fq$K.fill = false;
                    this.Fq$K.endarrow = this.brush.arrow ? "classic" : "";
                    this.Fq$K.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                    this.dj3g.appendChild(this.Fq$K);
                    this.zX.appendChild(this.dj3g)
                }
                this.z0.onmouseover = MEvent.gm(this, m17D3);
                this.z0.onmouseout = MEvent.gm(this, w1adb);
                this.z0.onmousedown = MEvent.gm(this, dkbV);
                this.z0.onmouseup = MEvent.gm(this, S3E$);
                if (this.dj3g) {
                    this.dj3g.onmouseover = MEvent.gm(this, m17D3);
                    this.dj3g.onmouseout = MEvent.gm(this, w1adb);
                    this.dj3g.onmousedown = MEvent.gm(this, dkbV);
                    this.dj3g.onmouseup = MEvent.gm(this, S3E$)
                }
            }
        } else {
            this.z0 = this.zX.firstChild;
            if (!this.Ad) {
                this.Ad = document.createElementNS("http://www.w3.org/2000/svg", "path");
                this.Ad.setAttribute("id", this.id);
                this.Ad.setAttribute("MStrName", this.toString());
                this.Ad.setAttribute("stroke-linejoin", "round");
                this.Ad.setAttribute("stroke-linecap", "round");
                this.Ad.setAttribute("stroke", this.brush.color);
                this.Ad.setAttribute("stroke-width", this.brush.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.Ad.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                this.Ad.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.Ad.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                m4$(this.Ad, $0eU, "true");
                m4$(this.Ad, F8v33, "polyline");
                m4$(this.Ad, "oid", this.id);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var snn5 = this.brush.overlap;
                    this.dj3g = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.dj3g.setAttribute("stroke-linejoin", "round");
                    this.dj3g.setAttribute("stroke-linecap", "round");
                    this.dj3g.setAttribute("stroke", snn5.color);
                    this.dj3g.setAttribute("stroke-width", (snn5.stroke && !isNaN(snn5.stroke) ? snn5.stroke : this.brush.stroke - 2) + "px");
                    this.dj3g.setAttribute("stroke-opacity", snn5.transparency / 100);
                    this.dj3g.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                    this.dj3g.setAttribute("fill", "none");
                    m4$(this.dj3g, $0eU, "true");
                    m4$(this.dj3g, F8v33, "polyline");
                    m4$(this.dj3g, "oid", this.id)
                }
                this.ao["vstroke_mouseover"] = MEvent.bindDom(this.Ad, "mouseover", this, m17D3);
                this.ao["vstroke_mouseout"] = MEvent.bindDom(this.Ad, "mouseout", this, w1adb);
                this.ao["vstroke_mousedown"] = MEvent.bindDom(this.Ad, "mousedown", this, dkbV);
                this.ao["vstroke_mouseup"] = MEvent.bindDom(this.Ad, "mouseup", this, S3E$);
                this.ao["vstroke_mousemove"] = MEvent.bindDom(this.Ad, "mousemove", this, w7CHO);
                if (this.dj3g) {
                    this.ao["overlapLine_mouseover"] = MEvent.bindDom(this.dj3g, "mouseover", this, m17D3);
                    this.ao["overlapLine_mouseout"] = MEvent.bindDom(this.dj3g, "mouseout", this, w1adb);
                    this.ao["overlapLine_mousedown"] = MEvent.bindDom(this.dj3g, "mousedown", this, dkbV);
                    this.ao["overlapLine_mouseup"] = MEvent.bindDom(this.dj3g, "mouseup", this, S3E$);
                    this.ao["overlapLine_mousemove"] = MEvent.bindDom(this.dj3g, "mousemove", this, w7CHO)
                }
                if (typeof this.contextmenu == "object" && this.contextmenu) {
                    this.Ad.contextmenu = this.contextmenu
                }
                this.z0.appendChild(this.Ad);
                if (this.dj3g) this.z0.appendChild(this.dj3g)
            }
        }
        this.update()
    };
    var m17D3 = function (e) {
        var snn5 = e.target;
        if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.a2_Q) {
            this.maplet.gvL("crosshair", snn5)
        } else if (this.info || MEvent.contains(this, "click")) {
            this.maplet.gvL("pointer", snn5)
        } else {
            this.maplet.gvL("default", snn5)
        } if (e.type == "mouseover") {
            MEvent.trigger(this, "mouseover", this)
        }
    };
    var w1adb = function (e) {
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.a2_Q) this.maplet.gvL("default", e.target);
        MEvent.trigger(this, "mouseout", this)
    };
    var dkbV = function (e) {
        if (!px) {
            this.y53p4 = true;
            this.d42 = false
        }
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.a2_Q) this.maplet.gvL("move", e.target)
    };
    var S3E$ = function (e) {
        if (!px) this.y53p4 = false;
        m17D3.apply(this, [e])
    };
    var w7CHO = function (e) {
        if (this.y53p4 && !this.d42) this.d42 = true
    };
    this.setContextMenu = function (menu) {
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        } else if (!menu) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom) {
            return null
        }
        if (typeof dom.id == "string" && dom.id.indexOf("traffic") != -1 && this.traffic) return this.pathNodeMenu;
        else return this.contextmenu
    };
    this.setPathNodeMenu = function (menu) {
        this.pathNodeMenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.pathNodeMenu.maplet) this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this)) this.pathNodeMenu.addOverlay(this)
        } else if (!menu) {
            this.removePathNodeMenu()
        }
    };
    this.removePathNodeMenu = function () {
        if (this.pathNodeMenu) {
            this.pathNodeMenu.removeOverlay(this);
            this.pathNodeMenu = null
        }
    };
    this.setBrush = function (fh210) {
        if (!(fh210 instanceof MBrush)) {
            return
        }
        this.brush = fh210;
        if (!llg86) {
            if (this.z0 && this.Ad && this.zY) {
                this.z0.strokecolor = fh210.color;
                this.z0.strokeweight = fh210.stroke + 'px';
                this.Ad.opacity = parseInt(fh210.stroke) == 0 ? 0 : fh210.transparency / 100.0;
                this.Ad.fill = fh210.fill;
                this.Ad.endarrow = fh210.arrow ? "classic" : "none";
                this.Ad.dashstyle = parseInt(fh210.style) ? "dash" : "";
                this.zY.opacity = ((fh210.bgtransparency) / 100);
                this.zY.color = fh210.bgcolor
            }
        } else {
            if (this.arrow) {
                this.arrow.setAttribute("fill", fh210.color);
                this.arrow.setAttribute("fill-opacity", fh210.bgtransparency / 100 + 0.3)
            }
            if (this.Ad) {
                this.Ad.setAttribute("marker-end", fh210.arrow ? "url(#svgArrow)" : "");
                this.Ad.setAttribute("stroke", fh210.color);
                this.Ad.setAttribute("stroke-width", fh210.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", fh210.transparency / 100);
                this.Ad.setAttribute("style", parseInt(fh210.style) ? "stroke-dasharray:10,15" : "");
                this.Ad.setAttribute("fill-opacity", fh210.bgtransparency / 100);
                this.Ad.setAttribute("fill", (fh210.fill) ? fh210.bgcolor : "none")
            }
        } if (this.brush.fill != fh210.fill) {
            this.update()
        } else if (!this.brush.fill) {
            if (this.options.dirmark && this.options.dirmark.pts.length > 0 && this.VqO.length > 0 && this.T80.length > 0) {
                JrXu1.apply(this);
                XO22_.apply(this)
            }
        }
    };
    this.setInfoWindow = function (d2G) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible()) this.maplet.hideBubble();
            this.info = null
        }
        if (d2G) {
            this.info = d2G;
            this.info.setOverlay(this)
        }
    };
    this.setPoints = function (pts) {
        this.pts = pts;
        if (this.maplet) {
            this.update()
        }
    };
    this.A4_ = function () {
        pts = this.pts;
        this._m2G = [];
        this.Mwc5 = [];
        var $V46 = [],
            IdBe8 = [],
            _37 = [];
        for (var i = 0, t5r3 = pts.length; i < t5r3; i++) {
            var $LOv0 = pts[i];
            if ($LOv0[0] instanceof MPoint) {
                $V46 = this.t8whO($LOv0, i + '|', true);
                if ($V46.length <= 0) continue;
                IdBe8 = this.g7UX1($V46);
                _37 = this.Gb9G(IdBe8);
                if (_37) {
                    this._m2G.push(_37)
                }
            } else {
                $V46 = this.t8whO($LOv0[0], i + '|0|', true);
                if ($V46.length <= 0) continue;
                IdBe8 = this.g7UX1($V46);
                _37 = this.Gb9G(IdBe8, true);
                if (_37) {
                    this._m2G.push(_37)
                }
                for (var qC = 1, UB4jm = $LOv0.length; qC < UB4jm; qC++) {
                    $V46 = this.t8whO($LOv0[qC], i + '|' + qC + '|');
                    IdBe8 = this.g7UX1($V46);
                    _37 = this.Gb9G(IdBe8);
                    if (_37) {
                        this._m2G.push(_37)
                    }
                }
            }
        }
        if (this._m2G.length == 0) {
            this._m2G.push('M0,0')
        }
        if (this.bEditable) {
            for (var i = 0; i < this.Mwc5.length; i++) {
                var Mwc5 = this.Mwc5[i];
                var x = Mwc5.x;
                var y = Mwc5.y;
                if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height) {
                    var z7 = document.getElementById(this.id + "_node_" + Mwc5.id);
                    if (z7 == null) {
                        z7 = new Image();
                        z7.id = this.id + "_node_" + Mwc5.id;
                        z7.qf = i;
                        z7.qk = i;
                        z7.src = ul;
                        z7.unselectable = "on";
                        z7.alt = lt;
                        z7.title = lt;
                        z7.style.position = "absolute";
                        z7.H96 = this;
                        z7.onmousedown = function () {
                            return false
                        };
                        if (this.Mwc5.length > 2) {
                            z7.contextmenu = this.um
                        }
                    }
                    z7.style.left = (x - 5) + "px";
                    z7.style.top = (y - 5) + "px";
                    this.z9.appendChild(z7)
                }
                var q485 = Mwc5.id,
                    Dpx39, XU8, X9SkQ, cF3_;
                if (Mwc5.pn == 0) {
                    if (this.brush.fill) {
                        Dpx39 = this.Mwc5[i + Mwc5.length - 1]
                    } else {
                        continue
                    }
                } else {
                    Dpx39 = this.Mwc5[i - 1]
                }
                var h98t = (x + Dpx39.x) / 2 - 5;
                var b54 = (y + Dpx39.y) / 2 - 5;
                if (Math.abs(h98t - x) < 20 && Math.abs(b54 - y) < 20) {
                    continue
                }
                x = h98t;
                y = b54;
                if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height) {
                    var z8 = document.getElementById(this.id + "_midnode_" + Mwc5.id);
                    if (z8 == null) {
                        z8 = new Image();
                        z8.id = this.id + "_midnode_" + Mwc5.id;
                        z8.qf = i;
                        z8.qk = i;
                        z8.unselectable = "on";
                        z8.src = ul;
                        z8.alt = lt;
                        z8.title = lt;
                        z8.style.position = "absolute";
                        z8.style.filter = "alpha(opacity=60);";
                        z8.style.MozOpacity = 0.6;
                        z8.style.opacity = 0.6;
                        z8.onmousedown = function () {
                            return false
                        }
                    }
                    z8.style.left = x + "px";
                    z8.style.top = y + "px";
                    this.z9.appendChild(z8)
                }
            }
        }
        this.J67B(this._m2G)
    };
    this.J67B = function (Aa) {
        if (this.z0 && Aa && Aa.length > 0) {
            if (!llg86) {
                _removeNode(document.getElementById("fix_id"));
                var s = document.createElement("script");
                s.id = "fix_id";
                document.body.insertBefore(s, document.body.firstChild);
                this.z0.style.display = "none";
                this.z0.path = Aa.join(" ") + " e";
                this.z0.style.display = "";
                if (this.dj3g) {
                    this.dj3g.style.display = "none";
                    this.dj3g.path = Aa.join(" ") + " e";
                    this.dj3g.style.display = ""
                }
                if (this.X1B) {
                    if (this.Ad) {
                        this.Ad.endarrow = 'none';
                        this.brush.arrow && (!this.brush.fill) && (this.Ad.endarrow = 'classic')
                    }
                    if (this.Fq$K) {
                        this.Fq$K.endarrow = 'none';
                        this.brush.arrow && (!this.brush.fill) && (this.Fq$K.endarrow = 'classic')
                    }
                }
            } else {
                var g85Vw = this;
                if (this.Ad) {
                    this.Ad.setAttribute("d", Aa.join(" "));
                    if (px) {
                        D280(this.Ad, 'marker-end')
                    } else {
                        g85Vw.Ad.setAttribute("marker-end", "")
                    }
                    window.setTimeout(function () {
                        g85Vw.brush.arrow && g85Vw.X1B && (!g85Vw.brush.fill) && g85Vw.Ad && g85Vw.Ad.setAttribute("marker-end", "url(#svgArrow)")
                    }, 0)
                }
                if (this.dj3g) {
                    this.dj3g.setAttribute("d", Aa.join(" "));
                    if (px) {
                        D280(this.dj3g, 'marker-end')
                    } else {
                        g85Vw.dj3g.setAttribute("marker-end", "")
                    }
                    window.setTimeout(function () {
                        g85Vw.brush.arrow && g85Vw.X1B && (!g85Vw.brush.fill) && g85Vw.dj3g && g85Vw.dj3g.setAttribute("marker-end", "url(#svgArrow)")
                    }, 0)
                }
            }
        }
    };
    this.t8whO = function (pts, id, wI0e) {
        if (!pts || pts.length <= 0) return [];
        var bUT3y = pts.length,
            TWE = [],
            wl_9, Mwc5;
        for (var i = 0; i < bUT3y; i++) {
            wl_9 = this.maplet.toScreenCoordinate(pts[i].getPid());
            if (this.bEditable) {
                Mwc5 = {
                    x: wl_9[0],
                    y: wl_9[1],
                    id: id + i,
                    pn: i,
                    length: bUT3y
                };
                this.Mwc5.push(Mwc5)
            }
            if (pts[i].inLevelRange(this.maplet.AG)) {
                pts[i].mapX = wl_9[0];
                pts[i].mapY = wl_9[1];
                TWE.push(pts[i])
            }
            if (wI0e) {
                this.tn = Math.min(this.tn, pts[i].mapX);
                this.to = Math.min(this.to, pts[i].mapY);
                this.vc7 = Math.max(this.vc7, pts[i].mapX);
                this.H092 = Math.max(this.H092, pts[i].mapY)
            }
        }
        return TWE
    };
    this.$66 = function (pts) {
        var TWE = [],
            pn = [];
        for (var qC = 0; qC < pts.length; qC++) {
            var pt = this.pts[qC];
            if (pt.inLevelRange(this.maplet.AG)) {
                TWE.push(pt);
                pn.push(qC)
            }
        }
        return [TWE, pn]
    };
    this.g7UX1 = function (pts) {
        this.ioQ4 = [];
        var pt, N0_S, AL1W6 = null,
            bUT3y = pts.length,
            gF = null;
        var ilT = {
            min: {
                x: -this.maplet.width,
                y: -this.maplet.height
            },
            max: {
                x: this.maplet.width * 2,
                y: this.maplet.height * 2
            }
        };
        for (var i = 0; i < bUT3y; i++) {
            pt = pts[i];
            N0_S = pts[(i == bUT3y - 1) ? i : i + 1];
            var __5EX = {
                B4jGk: {
                    x: pt.mapX,
                    y: pt.mapY,
                    s: pt.XY$3,
                    e: pt.GoY
                },
                U88s7: {
                    x: N0_S.mapX,
                    y: N0_S.mapY,
                    s: N0_S.XY$3,
                    e: N0_S.GoY
                }
            };
            var yn7k = !this.brush.fill ? iC256(__5EX, ilT) : true;
            if (yn7k) {
                if (!gF) {
                    gF = [__5EX.B4jGk];
                    AL1W6 = __5EX.B4jGk
                } else if (__5EX.B4jGk.x != AL1W6.x || __5EX.B4jGk.y != AL1W6.y) {
                    gF.push(__5EX.B4jGk);
                    AL1W6 = __5EX.B4jGk
                }
                if (__5EX.U88s7.x != AL1W6.x || __5EX.U88s7.y != AL1W6.y) {
                    gF.push(__5EX.U88s7);
                    AL1W6 = __5EX.U88s7
                }
            }
            if ((!yn7k && gF) || (__5EX.U88s7.x != N0_S.mapX || __5EX.U88s7.y != N0_S.mapY)) {
                if (gF.length >= 2) this.ioQ4.push(gF);
                gF = null;
                AL1W6 = null
            }
        }
        if (gF) {
            if (this.X1B && gF.length == 1) {
                var $K$q = gF[0].x;
                var v45D = gF[0].y;
                gF.push({
                    x: $K$q,
                    y: v45D
                })
            }
            if (gF.length >= 2) this.ioQ4.push(gF);
            gF = null;
            AL1W6 = null
        }
        if (this.ioQ4.length > 0) {
            return this.ioQ4[0]
        } else {
            return []
        }
    };
    this.Gb9G = function (pts, wI0e) {
        if (!pts || pts.length <= 0) return '';
        var Vsn = 1,
            P73_4 = pts.length,
            Q17I4 = 1,
            i9J2 = 0;
        if (wI0e) {
            Vsn = pts.length - 2, P73_4 = 1, Q17I4 = -1, i9J2 = pts.length - 1
        }
        var wl_9 = [pts[i9J2].x, pts[i9J2].y];
        var R30DM = ['M', wl_9[0], ',', wl_9[1], (!llg86 ? ' L' : ' ')];
        for (var i = Vsn, t5r3 = P73_4; i * Q17I4 < t5r3; i += Q17I4) {
            R30DM.push(!llg86 ? ' ' : 'L');
            wl_9 = [pts[i].x, pts[i].y];
            R30DM.push(wl_9[0]);
            R30DM.push(',');
            R30DM.push(wl_9[1]);
            R30DM.push(!llg86 ? ' L' : ' ')
        }
        if (this.brush.fill) {
            R30DM.push(!llg86 ? 'x ' : 'Z')
        }
        return R30DM.join('')
    };
    this.K651 = function (B4jGk, O1g9, U88s7) {
        var Qy111 = this.maplet.r60(B4jGk, U88s7);
        return [O1g9[0] + Qy111[0], O1g9[1] + Qy111[1]]
    };
    this.update = function () {
        this.z9 = document.getElementById(this.id + "vNodeLayer");
        if (this.bEditable || this.maplet.sS == ts.tu) {
            if ((!this.traffic || (this.traffic && !this.qo)) && this.z9) {
                this.E9AC5()
            }
            if (!this.z9) {
                this.z9 = document.createElement("div");
                this.z9.id = this.id + "vNodeLayer";
                this.z9.style.position = "absolute";
                this.z9.style.display = "none";
                this.z9.unselectable = "on";
                this.z9.style.zIndex = 1;
                this.zX.appendChild(this.z9)
            }
            if (this.traffic) {
                var i$RL8 = document.getElementById(this.id + "_node_traffic");
                if (i$RL8 == null) {
                    i$RL8 = document.createElement("IMG");
                    i$RL8.style.width = CTLIMG_RESOURCE[0].w + "px";
                    i$RL8.style.height = CTLIMG_RESOURCE[0].h + "px";
                    if (l49R0) {
                        i$RL8.src = sX;
                        i$RL8.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);"
                    } else {
                        i$RL8.src = CTLIMG_RESOURCE[0].url
                    }
                    i$RL8.id = this.id + "_node_traffic";
                    i$RL8.style.position = "absolute";
                    i$RL8.unselectable = "on";
                    i$RL8.alt = lt;
                    i$RL8.title = lt;
                    i$RL8.style.left = "-65px";
                    i$RL8.style.top = "-112px";
                    i$RL8.ns9h1 = "no";
                    i$RL8.style.cursor = "pointer";
                    i$RL8.onmousedown = function () {
                        return false
                    };
                    m4$(i$RL8, "oid", this.id);
                    this.z9.style.width = "11px";
                    this.z9.style.height = "11px";
                    this.z9.style.overflow = "hidden";
                    this.z9.appendChild(i$RL8)
                }
                if (!this.qo) this.z9.style.display = "none"
            }
        }
        JrXu1.apply(this);
        this.aP = [];
        this.aR = [];
        var us = 10;
        if (this.pts == null || this.pts.length <= 0) {
            return
        }
        var cY = false;
        var tn = this.maplet.width;
        var to = this.maplet.height;
        this.tn = Number.MAX_VALUE;
        this.to = this.tn;
        this.vc7 = -Number.MAX_VALUE;
        this.H092 = this.vc7;
        this.ioQ4 = [];
        if (this.pts[0] instanceof Array) {
            this.FG7R7 = true;
            this.A4_();
            return
        } else {
            this.FG7R7 = false
        };
        var ilT = {
            min: {
                x: -this.maplet.width,
                y: -this.maplet.height
            },
            max: {
                x: this.maplet.width * 2,
                y: this.maplet.height * 2
            }
        };
        this.ioQ4 = [];
        var gF = [],
            AL1W6 = null,
            y6D = null,
            b8m6B, W14 = false;
        var Aa = [],
            k_L6 = [];
        var pn = [],
            pts = [];
        var qI = 0;
        var G39 = this.pts.length;
        var $8Ry7 = 0;
        var $$R = [],
            JkF = [],
            __5EX;
        var _6K = llg86 ? [' M', ' L', ' L'] : [' M', ' L', ' '];
        for (var qC = 0; qC < G39; qC++) {
            var pt = this.pts[qC];
            if (!pt.getPid()) {
                continue
            }
            if (pt.inLevelRange(this.maplet.AG)) {
                if (!pt.maplet) {
                    pt.initialize(this.maplet)
                }
                pn.push(qC);
                pts.push(pt);
                if (this.maplet.K_0r4) {
                    if (this.maplet.$96 != pt.$96) {
                        pt.mapX += this.maplet.wbb1l;
                        pt.mapY += this.maplet.$X41;
                        pt.$96 = this.maplet.$96
                    }
                } else {
                    pt.recalcScreenCoords()
                }
                this.aP.push(pt.mapX);
                this.aR.push(pt.mapY);
                $$R[0] = (qI == 0) ? pt.mapX : pts[qI - 1].mapX;
                $$R[1] = (qI == 0) ? pt.mapY : pts[qI - 1].mapY;
                JkF[0] = pt.mapX;
                JkF[1] = pt.mapY;
                this.tn = Math.min(this.tn, JkF[0]);
                this.to = Math.min(this.to, JkF[1]);
                this.vc7 = Math.max(this.vc7, JkF[0]);
                this.H092 = Math.max(this.H092, JkF[1]);
                __5EX = {
                    B4jGk: {
                        x: $$R[0],
                        y: $$R[1]
                    },
                    U88s7: {
                        x: JkF[0],
                        y: JkF[1]
                    }
                };
                var yn7k = !this.brush.fill ? iC256(__5EX, ilT) : true;
                if (yn7k) {
                    if (!AL1W6 || (__5EX.B4jGk.x != AL1W6.x || __5EX.B4jGk.y != AL1W6.y)) {
                        AL1W6 = __5EX.B4jGk;
                        gF.push(AL1W6);
                        var xj = _6K[$8Ry7];
                        k_L6.push(xj + AL1W6.x + ',' + AL1W6.y);
                        $8Ry7 < 2 && $8Ry7++
                    }
                    if (__5EX.U88s7.x != AL1W6.x || __5EX.U88s7.y != AL1W6.y) {
                        AL1W6 = __5EX.U88s7;
                        gF.push(AL1W6);
                        var xj = _6K[$8Ry7];
                        k_L6.push(xj + AL1W6.x + ',' + AL1W6.y);
                        $8Ry7 < 2 && $8Ry7++
                    }
                } else {
                    $8Ry7 = 0;
                    AL1W6 = null
                } if ((!yn7k && (gF.length > 0)) || (__5EX.U88s7.x != pt.mapX || __5EX.U88s7.y != pt.mapY)) {
                    if (gF.length >= 2) this.ioQ4.push(gF);
                    gF = [];
                    AL1W6 = null
                }
                qI++
            }
        }
        if (gF) {
            if (this.X1B && gF.length == 1) {
                var $K$q = gF[0].x;
                var v45D = gF[0].y;
                gF.push({
                    x: $K$q,
                    y: v45D
                })
            }
            if (gF.length >= 2) this.ioQ4.push(gF);
            gF = [];
            AL1W6 = null
        }
        Aa.push(k_L6.join('') || 'M0,0');
        if (this.brush.fill && this.X1B) {
            Aa.push(llg86 ? 'Z' : 'x')
        }
        AL1W6 = null;
        for (var i = 0; i < this.aP.length; i++) {
            var x = this.aP[i];
            var y = this.aR[i];
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.traffic) {
                var r = us + 1;
                if (AL1W6) r = Math.abs(x - AL1W6.x) + Math.abs(y - AL1W6.y);
                if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height && r > us) {
                    var z7 = document.getElementById(this.id + "_node_" + i);
                    if (z7 == null) {
                        z7 = new Image();
                        z7.id = this.id + "_node_" + i;
                        z7.qf = i;
                        z7.qk = pn[i];
                        z7.src = ul;
                        z7.unselectable = "on";
                        z7.alt = lt;
                        z7.title = lt;
                        z7.H96 = this;
                        z7.style.position = "absolute";
                        z7.onmousedown = function () {
                            return false
                        };
                        if (this.pts.length > 2) {
                            z7.contextmenu = this.um
                        }
                    }
                    z7.style.left = (x - 5) + "px";
                    z7.style.top = (y - 5) + "px";
                    this.z9.appendChild(z7);
                    AL1W6 = {
                        x: x,
                        y: y
                    }
                }
                var h98t = 0,
                    b54 = 0;
                if (r > us) {
                    if (i == 0) {
                        if (this.brush.fill) {
                            h98t = (x + this.aP[this.aP.length - 1]) / 2 - 5;
                            b54 = (y + this.aR[this.aP.length - 1]) / 2 - 5
                        } else {
                            continue
                        }
                    } else {
                        h98t = (x + this.aP[i - 1]) / 2 - 5;
                        b54 = (y + this.aR[i - 1]) / 2 - 5
                    } if (Math.abs(h98t - x) < 20 && Math.abs(b54 - y) < 20) {
                        continue
                    }
                    x = h98t;
                    y = b54;
                    if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height) {
                        var z8 = document.getElementById(this.id + "_midnode_" + i);
                        if (z8 == null) {
                            z8 = new Image();
                            z8.id = this.id + "_midnode_" + i;
                            z8.qf = i;
                            z8.qk = pn[i];
                            z8.unselectable = "on";
                            z8.src = ul;
                            z8.alt = lt;
                            z8.title = lt;
                            z8.style.position = "absolute";
                            z8.style.filter = "alpha(opacity=60);";
                            z8.style.MozOpacity = 0.6;
                            z8.style.opacity = 0.6;
                            z8.onmousedown = function () {
                                return false
                            }
                        }
                        z8.style.left = x + "px";
                        z8.style.top = y + "px";
                        this.z9.appendChild(z8)
                    }
                }
            }
        }
        this.J67B(Aa);
        this.VqO = pn;
        this.T80 = pts;
        var g85Vw = this;
        window.setTimeout(function () {
            XO22_.apply(g85Vw)
        }, 0);
        if (this.isRefreshMkIndex && !(this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly)) {
            this.refreshMarkerZIndex()
        }
    };
    this.refreshMarkerZIndex = function () {
        if (!this.s131() || !this.maplet) {
            return
        }
        var mG1 = this.maplet.getMarkersInPolygon(this);
        var p257 = new Object();
        if (mG1.length > 0) {
            for (var i = 0; i < mG1.length; i++) {
                if (this.bEditable && !mG1[i].bEditable) {
                    mG1[i].setZIndex(-1)
                } else if (mG1[i].icon && mG1[i].icon.div.style.zIndex < 0) {
                    mG1[i].u8q7()
                }
                p257[mG1[i].id] = mG1[i]
            }
        }
        for (var qC in this.sWFp) {
            if (!p257[this.sWFp[qC].id]) {
                if (typeof this.sWFp[qC].u8q7 == "function") {
                    this.sWFp[qC].u8q7()
                }
            }
        }
        this.sWFp = p257
    };
    this.s131 = function () {
        if (!this.Ad) {
            return false
        }
        return this.Ad.getAttribute("fill") != "none" || this.Ad.getAttribute("fill") == eval(true)
    };
    this.cw26 = function ($b9) {
        if (!this.sWFp[$b9.id]) {
            this.sWFp[$b9.id] = $b9
        }
    };
    this.E9AC5 = function () {
        if (this.z9) {
            var n46ma = this.z9.childNodes;
            for (var i = 0; i < n46ma.length; i++) {
                n46ma[i].onmousedown = null;
                n46ma[i].contextmenu = null;
                n46ma[i].H96 = null
            }
            _removeNode(this.z9);
            this.z9 = null
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") {
            finalize = false
        }
        if (this.s131() && this.bEditable) {
            this.bEditable = false;
            this.refreshMarkerZIndex();
            if (!finalize) {
                this.bEditable = true
            }
        }
        if (px) {
            if (this.z0) {
                this.z0.onmouseover = null;
                this.z0.onmouseout = null;
                this.z0.onmousedown = null;
                this.z0.onmouseup = null
            }
            if (this.dj3g) {
                this.dj3g.onmouseover = null;
                this.dj3g.onmouseout = null;
                this.dj3g.onmousedown = null;
                this.dj3g.onmouseup = null
            }
        }
        for (var l8 in this.ao) {
            if (l8.substring(0, 8) == "vstroke_") {
                if (this.Ad) MEvent.removeBuiltInListener(this.Ad, l8.substring(8), this.ao[l8])
            } else if (l8.substring(0, 10) == "vpolyline_") {
                if (this.z0) MEvent.removeBuiltInListener(this.z0, l8.substring(10), this.ao[l8])
            } else if (l8.substring(0, 12) == "overlapLine_") {
                if (this.dj3g) MEvent.removeBuiltInListener(this.dj3g, l8.substring(12), this.ao[l8])
            } else {
                if (this.maplet) {
                    var $$3j = this.ao[l8];
                    if (md6_($$3j)) {
                        for (var i = 0; i < $$3j.length; i++) {
                            MEvent.removeBuiltInListener(this.maplet.map, l8, $$3j[i])
                        }
                    } else {
                        MEvent.removeBuiltInListener(this.maplet.map, l8, $$3j)
                    }
                }
            }
            this.ao[l8] = null;
            if (finalize) {
                delete this.ao[l8]
            }
        }
        if (finalize) {
            this.ao = null;
            this.removeContextMenu();
            if (this.um) {
                this.um.remove(true);
                this.um = null
            }
        }
        JrXu1.apply(this);
        if (typeof this.dj3g == "object" && this.dj3g) {
            _removeNode(this.dj3g);
            this.dj3g = null
        }
        if (!llg86) {
            if (typeof this.z0 == "object" && this.z0) {
                _removeNode(this.z0);
                this.z0 = null
            }
        } else {
            if (typeof this.Ad == "object" && this.Ad) {
                _removeNode(this.Ad);
                this.Ad = null
            }
        } if (this.maplet) {
            if (this.maplet.x4hM7 == this) {
                this.maplet.x4hM7 = null
            }
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        this.E9AC5();
        if (finalize) {
            this.maplet = null
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getCenterXY = function () {
        var h98t = 0;
        var b54 = 0;
        if (this.brush.fill || this.FG7R7) {
            h98t = this.tn + (this.vc7 - this.tn) / 2;
            b54 = this.to + (this.H092 - this.to) / 2
        } else if (this.maplet) {
            var pn = Math.ceil(this.aP.length / 2) - (this.aP.length % 2);
            if (pn < this.aP.length) {
                h98t = this.aP[pn];
                b54 = this.aR[pn]
            }
        }
        return {
            x: h98t,
            y: b54
        }
    };
    this.getCenterPt = function () {
        if (this.tn != Number.MAX_VALUE && this.maplet) {
            var A055S = this.getCenterXY();
            var pt = new MPoint(this.maplet.toMapCoordinate(A055S.x, A055S.y));
            pt.initialize(this.maplet);
            return pt
        } else {
            return null
        }
    };
    this.getPointsByLevelGroup = function (o0w, eurss) {
        if (this.FG7R7) {
            return this.pts
        }
        var Yp1c1 = [];
        o0w = r0JS(o0w);
        o0w = Math.max(Math.min(o0w, this.pts.length - 1), 0);
        eurss = r0JS(eurss, this.pts.length - 1);
        eurss = Math.max(Math.min(eurss, this.pts.length - 1), 0);
        var pt = this.pts[o0w];
        pt.levelGroup = 3;
        Yp1c1.push(pt);
        for (var i = o0w + 1; i < eurss; i++) {
            if (this.pts[i].inLevelRange(this.maplet.AG)) {
                pt = this.pts[i];
                pt.levelGroup = 3;
                Yp1c1.push(pt)
            }
        }
        var pt = this.pts[eurss];
        pt.levelGroup = 3;
        Yp1c1.push(pt);
        return Yp1c1
    };
    this.openInfoWindow = function (e) {
        if (this.maplet) {
            if (typeof e != "undefined" && (e.target.id == this.id || e.target == this.dj3g) && this.maplet.BJ2) {
                this.maplet.BJ2 = false;
                if (this.maplet.$7BK8 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) return;
            if (this.info && !this.info.getOverlay()) this.info.setOverlay(this);
            if (typeof e == "undefined") {
                if (this.info != null && this.pts.length >= 2) {
                    var P9C5 = this.getCenterXY();
                    var h98t = P9C5.x;
                    var b54 = P9C5.y;
                    if (h98t >= this.maplet.width * 1.5 || h98t <= -(this.maplet.width / 2) || b54 <= -(this.maplet.height / 2) || b54 >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(new MPoint(this.maplet.toMapCoordinate(h98t, b54)));
                        h98t = this.maplet.width / 2;
                        b54 = this.maplet.height / 2
                    }
                    if (iToolTipStyle == 2) {
                        this.x = h98t;
                        this.y = b54;
                        MEvent.trigger(this, "click", this)
                    } else {
                        this.maplet.wN(h98t, b54, this.info, "", "", true)
                    }
                }
            } else if ((e.target.id == this.id || e.target == this.dj3g) && !this.maplet.BJ2) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top;
                if (iToolTipStyle == 2) {
                    this.x = x;
                    this.y = y;
                    MEvent.trigger(this, "click", this)
                } else {
                    if (MEvent.contains(this, "click") > 0) {
                        with(this.maplet) {
                            var G5ftR = e.clientX - offsetX - left;
                            var J4M4b = e.clientY - offsetY - top;
                            var VF7 = cq.zn(zp(G5ftR, J4M4b), zo(G5ftR, J4M4b))
                        }
                        if (apiType == 1) {
                            var pt = new MPoint(VF7);
                            pt.initialize(this.maplet);
                            MEvent.trigger(this, 'click', this, e, pt)
                        } else MEvent.trigger(this, 'click', this, e, VF7)
                    }
                    if (this.info) {
                        if (!this.info.getOverlay()) this.info.setOverlay(this);
                        this.maplet.wN(x, y, this.info, false);
                        avBubble.Q5309 = true
                    }
                }
            }
        }
    };
    this.wQ = function (fg) {
        if (this.z9 != null) {
            if (fg) {
                this.z9.style.display = "block";
                this.z9.style.zIndex = 10;
                this.maplet.x4hM7 = this
            } else {
                this.z9.style.display = "none";
                this.z9.style.zIndex = 0;
                this.maplet.x4hM7 = null
            }
        }
    };
    this.uG = function (e) {
        if (!this.maplet) {
            return
        }
        if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly || this.maplet.cN) {
            return
        }
        if (this.traffic) {
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.qo && (!this.maplet.x4hM7 || this.maplet.x4hM7 == this) && !this.ls) {
                if (typeof e.target.getAttribute == "function" && e.target.getAttribute(F8v33) == "marker") {
                    this.wQ(false);
                    return
                }
                var o_PG = this.T29O([e.clientX - this.maplet.offsetX, e.clientY - this.maplet.offsetY], this.ioQ4);
                if (this.zX != null && this.maplet && o_PG != null || fJ(e.target, this.z9)) {
                    this.wQ(true);
                    var P3U$ = {
                        x: -10,
                        y: -10
                    };
                    if (o_PG != null && this.maplet) {
                        P3U$ = this.Lq6O2(o_PG[0], o_PG[1], [e.clientX - this.maplet.offsetX, e.clientY - this.maplet.offsetY]);
                        this.o_PG = o_PG;
                        if (px) {
                            this.z0.style.cursor = "pointer"
                        } else {
                            this.Ad.style.cursor = "pointer"
                        }
                    } else {
                        if (px) {
                            this.z0.style.cursor = "default"
                        } else {
                            this.Ad.style.cursor = "default"
                        }
                    }
                    this.o0rbS = true;
                    clearTimeout(this.KcIw);
                    this.KcIw = null;
                    var Pn5 = [0, 0];
                    switch (this.T6g24) {
                    case 1:
                        Pn5 = [0, 1];
                        break;
                    case 2:
                        Pn5 = [1, 0];
                        break;
                    case 3:
                        Pn5 = [1, 1];
                        break;
                    case 4:
                        Pn5 = [0, 0];
                        break;
                    default:
                        Pn5 = [0, 0];
                        break
                    }
                    this.z9.style.left = (P3U$.x - (px ? (5 + Pn5[0]) : 5)) + "px";
                    this.z9.style.top = (P3U$.y - (px ? (5 + Pn5[1]) : 5)) + "px"
                } else {
                    if (px) this.z0.style.cursor = "default";
                    else this.Ad.style.cursor = "default"; if (this.z9 != null && this.z9.style.display == "none") return;
                    if (this.KcIw != null) return;
                    this.o0rbS = false;
                    this.KcIw = getTimeout(this, function () {
                        if (this.o0rbS) return;
                        if (this.z9 != null && this.z9.style.display == "none") return;
                        this.wQ(false);
                        clearTimeout(this.KcIw);
                        this.KcIw = null
                    }, 500)
                }
            } else if (this.qo) {
                this.y5l(e)
            }
        } else {
            if (this.bEditable || this.maplet.sS == ts.tu) {
                if (this.ls || this.zX && this.maplet && fJ(e.target, llg86 ? this.Ad : this.z0) || fJ(e.target, this.z9) || fJ(e.target, this.dj3g) || e.target.getAttribute(F8v33) == "linemarker") {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1
                        } else {
                            this.Ad.setAttribute("stroke-opacity", 1)
                        }
                    }
                    this.wQ(true)
                } else {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0
                        } else {
                            this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100.0)
                        }
                    }
                    this.wQ(false)
                }
            }
        }
    };
    this.w0 = function (e) {
        if (this.zX != null && this.maplet && (!llg86 && e.button == 1 || llg86 && e.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(e.target, !llg86 ? this.z9 : this.Ad) || llg86 && fJ(e.target, this.z9)) && e.target.id.indexOf("node") != -1) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            this.l0 = (px || a$80) ? e.offsetX : e.layerX;
            this.na = (px || a$80) ? e.offsetY : e.layerY;
            f7kns = e.target;
            if (this.wk == null) {
                if (!llg86) {
                    this.wk = document.createElement("v:shape");
                    this.wk.style.width = "1px";
                    this.wk.style.height = "1px";
                    this.wk.coordsize = "1,1";
                    this.wk.unselectable = "on";
                    this.wk.id = this.id;
                    this.wk.strokecolor = this.brush.color;
                    this.wk.strokeweight = this.brush.stroke + 'px';
                    this.wk.fill = this.brush.fill;
                    this.wk.filled = this.brush.fill;
                    this.wk.style.position = "absolute";
                    this.Ac = document.createElement("v:stroke");
                    this.Ac.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1;
                    this.Ac.joinstyle = "round";
                    this.Ac.endcap = "round";
                    this.Ac.fill = this.brush.fill;
                    this.Ac.dashstyle = "dash";
                    var Ab = document.createElement("v:fill");
                    Ab.opacity = ((this.brush.bgtransparency) / 100);
                    Ab.color = this.brush.bgcolor;
                    this.wk.appendChild(Ab)
                } else {
                    this.wk = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this.wk.setAttribute("version", "1.1");
                    this.wk.setAttribute("overflow", "visible");
                    this.wk.setAttribute("viewBox", "0 0 " + this.maplet.width + " " + this.maplet.height);
                    this.wk.setAttribute("height", this.maplet.height + "px");
                    this.wk.setAttribute("width", this.maplet.width + "px");
                    this.wk.setAttribute("unselectable", "on");
                    this.Ac = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.Ac.setAttribute("MStrName", this.toString());
                    this.Ac.setAttribute("stroke-linejoin", "round");
                    this.Ac.setAttribute("stroke-linecap", "round");
                    this.Ac.setAttribute("stroke", this.brush.color);
                    this.Ac.setAttribute("stroke-width", this.brush.stroke + "px");
                    this.Ac.setAttribute("stroke-opacity", 1);
                    this.Ac.setAttribute("style", "stroke-dasharray:10,15");
                    this.Ac.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                    this.Ac.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                    if (this.brush.arrow) {
                        this.arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        this.arrow.setAttribute("d", px ? "M 0 0 L 40 20 L 0 40 L 16 20 Z" : "M 0 0 L 10 5 L 0 10 L 4 5 z");
                        this.arrow.setAttribute("fill", this.brush.color);
                        this.arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                        this.zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                        this.zY.setAttribute("id", "arrow" + this.id);
                        this.zY.setAttribute("viewBox", px ? "0 0 40 40" : "0 0 10 10");
                        this.zY.setAttribute("refX", px ? "24" : "6");
                        this.zY.setAttribute("refY", px ? "20" : "5");
                        this.zY.setAttribute("markerUnits", "strokeWidth");
                        this.zY.setAttribute("orient", "auto");
                        this.zY.appendChild(this.arrow);
                        this.wk.appendChild(this.zY)
                    }
                }
            }
            this.wk.appendChild(this.Ac);
            this.zX.appendChild(this.wk)
        }
    };
    this.f9 = function (e) {
        if (f7kns != null && (this.bEditable || this.maplet.sS == ts.tu) && f7kns.id.indexOf("node") > 0 && this.qo) {
            if (f7kns != null) {
                if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                f7kns.style.left = (parseInt(x)) + "px";
                f7kns.style.top = (parseInt(y)) + "px";
                this.lw = new Date().getTime();
                this.ls = true;
                var ps = parseInt(f7kns.qf);
                var I4Hx0, RT9Vi;
                var Aa = "M";
                if (this.FG7R7) {
                    var Mwc5 = this.Mwc5[ps],
                        Dpx39;
                    I4Hx0 = (Mwc5.pn == 0) ? (ps + Mwc5.length - 1) : (ps - 1);
                    Dpx39 = this.Mwc5[I4Hx0];
                    if (f7kns.id.indexOf("_midnode_") > 0) {
                        Aa += Dpx39.x + ',' + Dpx39.y + ' L' + (x + 5) + ',' + (y + 5);
                        Aa += (!llg86 ? "," : "L") + Mwc5.x + ',' + Mwc5.y
                    } else {
                        RT9Vi = (Mwc5.pn == Mwc5.length - 1) ? (ps - Mwc5.pn) : (ps + 1);
                        $72 = this.Mwc5[RT9Vi];
                        if (Mwc5.pn == 0) {
                            if (this.brush.fill) {
                                Aa += Dpx39.x + ',' + Dpx39.y + ' L' + (x + 5) + ',' + (y + 5) + (!llg86 ? "," : " L")
                            } else {
                                Aa += (x + 5) + ',' + (y + 5) + ' L'
                            }
                        } else {
                            Aa += Dpx39.x + ',' + Dpx39.y + ' L ' + (x + 5) + ',' + (y + 5) + (!llg86 ? "," : " L")
                        } if (Mwc5.pn < Mwc5.length - 1 || this.brush.fill) {
                            Aa += $72.x + ',' + $72.y
                        }
                    }
                } else {
                    I4Hx0 = (ps == 0) ? (this.aP.length - 1) : (ps - 1);
                    if (f7kns.id.indexOf("_midnode_") > 0) {
                        Aa += this.aP[I4Hx0] + ',' + this.aR[I4Hx0] + ' L' + (x + 5) + ',' + (y + 5);
                        Aa += (!llg86 ? "," : "L") + this.aP[ps] + ',' + this.aR[ps]
                    } else {
                        RT9Vi = (ps == this.aP.length - 1) ? (0) : (ps + 1);
                        if (ps == 0) {
                            if (this.brush.fill) {
                                Aa += this.aP[I4Hx0] + ',' + this.aR[I4Hx0] + ' L' + (x + 5) + ',' + (y + 5) + (!llg86 ? "," : " L")
                            } else {
                                Aa += (x + 5) + ',' + (y + 5) + ' L'
                            }
                        } else {
                            Aa += this.aP[I4Hx0] + ',' + this.aR[I4Hx0] + ' L' + (x + 5) + ',' + (y + 5) + (!llg86 ? "," : " L")
                        } if (ps < this.aP.length - 1 || this.brush.fill) {
                            Aa += this.aP[RT9Vi] + ',' + this.aR[RT9Vi]
                        }
                    }
                } if (this.wk != null) {
                    if (!llg86) {
                        this.wk.path = Aa
                    } else if (this.wk.points) {
                        this.wk.points.value = Aa
                    } else {
                        if (Aa.lastIndexOf('L') === Aa.length - 1) {
                            Aa = Aa.substring(0, Aa.length - 1)
                        }
                        this.Ac.setAttribute("d", Aa)
                    }
                }
            }
        }
    };
    this.l1 = function (e) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if (f7kns != null && this.ls) {
                var x = parseInt(e.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
                var y = parseInt(e.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
                var ps = r0JS(f7kns.qk);
                var r6oI = new MPoint(this.maplet.zp(x + 5, y + 5), this.maplet.zo(x + 5, y + 5), false);
                if (this.FG7R7) {
                    var Mwc5 = this.Mwc5[ps],
                        pt;
                    var $Su_ = Mwc5.id,
                        VqO = Mwc5.pn,
                        mP$, X87, r7X05;
                    $Su_ = $Su_.split('|');
                    mP$ = parseInt($Su_[0]);
                    if ($Su_[1]) {
                        X87 = parseInt($Su_[1]);
                        pt = this.pts[mP$][X87];
                        if (pt instanceof MPoint) {
                            if (f7kns.id.indexOf("_midnode_") > 0) {
                                this.pts[mP$].splice(VqO, 0, r6oI)
                            } else {
                                this.pts[mP$][X87] = r6oI
                            }
                        } else if ($Su_[2]) {
                            r7X05 = parseInt($Su_[2]);
                            pt = this.pts[mP$][X87][r7X05];
                            if (pt instanceof MPoint) {
                                if (f7kns.id.indexOf("_midnode_") > 0) {
                                    this.pts[mP$][X87].splice(VqO, 0, r6oI)
                                } else {
                                    this.pts[mP$][X87][r7X05] = r6oI
                                }
                            }
                        }
                    }
                } else {
                    if (f7kns.id.indexOf("_midnode_") > 0) {
                        this.pts.splice(ps, 0, r6oI)
                    } else {
                        this.pts.splice(ps, 1, r6oI)
                    }
                }
                this.lw = new Date().getTime();
                this.ls = false;
                f7kns = null;
                this.update();
                MEvent.trigger(this, "drag", this, r6oI);
                MEvent.trigger(this.maplet, "edit", this, r6oI)
            }
            this.qo = false;
            if (this.wk.parentNode != null) {
                _removeNode(this.wk);
                this.wk = null
            }
        }
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.x6V8 = function () {
        var c8 = {};
        if (this.vc7 === -Number.MAX_VALUE || this.H092 === -Number.MAX_VALUE || this.tn === Number.MAX_VALUE || this.to === Number.MAX_VALUE) {
            return null
        }
        var T5_Vl = new MPoint(this.maplet.toMapCoordinate(this.vc7, this.to));
        var gsI = new MPoint(this.maplet.toMapCoordinate(this.tn, this.H092));
        T5_Vl.initialize(this.maplet);
        gsI.initialize(this.maplet);
        c8.T5_Vl = T5_Vl;
        c8.gsI = gsI;
        return c8
    };
    this.removeNode = function (ejY5f, menu, overlay) {
        var qf = menu._62;
        if (typeof qf != "undefined" && qf.toString().indexOf('_node_') >= 0) {
            if (qf.toString().indexOf(this.id) >= 0 && qf.toString().lastIndexOf("_") >= 0) {
                qf = qf.toString().substring(qf.toString().lastIndexOf("_") + 1)
            }
            if (this.FG7R7) {
                qf = qf.split('|');
                var pts, mq0, V0e8, q8F, pt, mP$, X87, r7X05;
                mP$ = parseInt(qf[0]);
                X87 = qf[1] ? parseInt(qf[1]) : undefined;
                r7X05 = qf[2] ? parseInt(qf[2]) : undefined;
                if (typeof X87 === 'number') {
                    pts = this.pts;
                    mq0 = pts[mP$];
                    V0e8 = mq0[X87];
                    if (V0e8 instanceof MPoint) {
                        if (mq0.length <= 2) {
                            pts.splice(mP$, 1);
                            if (pts.length == 1 && pts[0] instanceof Array && pts[0][0] instanceof MPoint) {
                                pts.splice(0, 1, pts[0])
                            }
                        } else {
                            mq0.splice(X87, 1)
                        }
                    } else if (typeof r7X05 === 'number') {
                        q8F = V0e8[r7X05];
                        if (q8F instanceof MPoint) {
                            if (V0e8.length <= 2) {
                                mq0.splice(X87, 1);
                                if (mq0.length == 1 && mq0[0] instanceof Array && mq0[0][0] instanceof MPoint) {
                                    pts[mP$] = mq0[0]
                                }
                            } else {
                                V0e8.splice(r7X05, 1)
                            }
                        }
                    }
                    if (this.pts.length == 1 && this.pts[0] instanceof Array) {
                        if (this.pts[0][0] instanceof MPoint) {
                            this.pts = this.pts[0];
                            if (this.brush.fill) {
                                this.X1B = true
                            }
                        }
                    }
                }
            } else {
                qf = parseInt(qf);
                if (!isNaN(qf) && qf < this.pts.length) {
                    this.pts.splice(qf, 1);
                    MEvent.trigger(this, "edit", this)
                }
            }
            MEvent.trigger(this.maplet, "edit", this);
            if (this.wk != null && this.wk.parentNode != null) {
                _removeNode(this.wk);
                this.wk = null
            }
            this.update()
        }
    };
    var g85Vw = this;
    MEvent.addListener(this.un, "select", function () {
        g85Vw.removeNode.apply(g85Vw, arguments)
    });
    this.D8C1e = function (XnB, IY38, nc, J3D) {
        this.Q4eE = function (ylP) {
            var h3s4y = Math.atan2(IY38 - ylP.R3I, XnB - ylP.LqK48) - ylP.UQ9;
            var J8VU8 = Math.atan2(J3D - ylP.R3I, nc - ylP.LqK48) - ylP.UQ9;
            while (h3s4y < 0) h3s4y += 2 * Math.PI;
            while (J8VU8 < 0) J8VU8 += 2 * Math.PI;
            while (h3s4y > 2 * Math.PI) h3s4y -= 2 * Math.PI;
            while (J8VU8 > 2 * Math.PI) J8VU8 -= 2 * Math.PI;
            return (h3s4y - Math.PI) * (J8VU8 - Math.PI) < 0 && (h3s4y > Math.PI ? 2 * Math.PI - h3s4y : h3s4y) + (J8VU8 > Math.PI ? 2 * Math.PI - J8VU8 : J8VU8) < Math.PI
        }
    };
    this.i79s = function (LqK48, R3I, UQ9) {
        this.LqK48 = LqK48;
        this.R3I = R3I;
        this.UQ9 = UQ9
    };
    this.HW2w = function (c33v3) {
        var v6 = null;
        var fBE = parseInt(c33v3[0].x);
        var W44e4 = parseInt(c33v3[0].y);
        var R8P85 = parseInt(c33v3[1].x);
        var uRhG = parseInt(c33v3[1].y);
        var TVl = Math.abs(fBE - R8P85);
        var o$x = Math.abs(W44e4 - uRhG);
        var qN5CM = parseInt(this.brush.stroke);
        var g4 = qN5CM * o$x / Math.sqrt(Math.pow(TVl, 2) + Math.pow(o$x, 2));
        var g5 = g4 * TVl / o$x;
        var e43am = 4;
        this.T6g24 = 0;
        if (fBE == R8P85) {
            this.T6g24 = 1;
            v6 = [
                [fBE - qN5CM - e43am, W44e4],
                [fBE + qN5CM + e43am, W44e4],
                [R8P85 + qN5CM + e43am, uRhG],
                [R8P85 - qN5CM - e43am, uRhG]
            ]
        } else if (W44e4 == uRhG) {
            this.T6g24 = 2;
            v6 = [
                [fBE, W44e4 + qN5CM + e43am],
                [R8P85, uRhG + qN5CM + e43am],
                [R8P85, uRhG - qN5CM - e43am],
                [fBE, W44e4 - qN5CM - e43am]
            ]
        } else if (W44e4 < uRhG && fBE < R8P85) {
            this.T6g24 = 3;
            v6 = [
                [parseInt(fBE - g4 - e43am), parseInt(W44e4 + g5 + e43am)],
                [parseInt(R8P85 - g4 - e43am), parseInt(uRhG + g5 + e43am)],
                [parseInt(R8P85 + g4 + e43am), parseInt(uRhG - g5 - e43am)],
                [parseInt(fBE + g4 + e43am), parseInt(W44e4 - g5 - e43am)]
            ]
        } else if (W44e4 > uRhG && fBE < R8P85) {
            this.T6g24 = 4;
            v6 = [
                [parseInt(fBE - g4 - e43am), parseInt(W44e4 - g5 - e43am)],
                [parseInt(R8P85 - g4 - e43am), parseInt(uRhG - g5 - e43am)],
                [parseInt(R8P85 + g4 + e43am), parseInt(uRhG + g5 + e43am)],
                [parseInt(fBE + g4 + e43am), parseInt(W44e4 + g5 + e43am)]
            ]
        } else if (W44e4 > uRhG && fBE > R8P85) {
            this.T6g24 = 3;
            v6 = [
                [parseInt(fBE - g4 - e43am), parseInt(W44e4 + g5 + e43am)],
                [parseInt(fBE + g4 + e43am), parseInt(W44e4 - g5 - e43am)],
                [parseInt(R8P85 + g4 + e43am), parseInt(uRhG - g5 - e43am)],
                [parseInt(R8P85 - g4 - e43am), parseInt(uRhG + g5 + e43am)]
            ]
        } else if (W44e4 < uRhG && fBE > R8P85) {
            this.T6g24 = 4;
            v6 = [
                [parseInt(fBE - g4 - e43am), parseInt(W44e4 - g5 - e43am)],
                [parseInt(fBE + g4 + e43am), parseInt(W44e4 + g5 + e43am)],
                [parseInt(R8P85 + g4 + e43am), parseInt(uRhG + g5 + e43am)],
                [parseInt(R8P85 - g4 - e43am), parseInt(uRhG - g5 - e43am)]
            ]
        }
        return v6
    };
    this.Omy5 = [];
    this.$c32 = function (Rber, c33v3) {
        var ub = this.HW2w(c33v3);
        for (var i = 0; i < ub.length; i++) {
            this.Omy5.push(new this.D8C1e(ub[i][0], ub[i][1], ub[(i + 1) % ub.length][0], ub[(i + 1) % ub.length][1]))
        }
        var c665r = new this.i79s(Rber[0], Rber[1], parseFloat("0.523112313123"));
        var X$9K5 = 0;
        for (var qC = 0; qC < this.Omy5.length; qC++) {
            if (this.Omy5[qC].Q4eE(c665r)) X$9K5++
        }
        this.Omy5 = [];
        return X$9K5 % 2 != 0
    };
    this.T29O = function (coords, ioQ4) {
        for (var i = 0; i < ioQ4.length; i++) {
            var __5EX = ioQ4[i];
            for (var qC = 0; qC < __5EX.length - 1; qC++) {
                var B4jGk = __5EX[qC];
                var U88s7 = __5EX[qC + 1];
                if (this.$c32(coords, [B4jGk, U88s7])) {
                    return [B4jGk, U88s7]
                }
            }
        }
        return null
    };
    this.Lq6O2 = function (B4jGk, U88s7, FR9a) {
        var r44c = [U88s7.x - B4jGk.x, U88s7.y - B4jGk.y];
        var UvO0x = [parseInt(FR9a[0]) - B4jGk.x, parseInt(FR9a[1]) - B4jGk.y];
        var gho99 = UvO0x[0] * r44c[0] + UvO0x[1] * r44c[1];
        if (gho99 <= 0) {
            return B4jGk
        }
        var c2k7e = r44c[0] * r44c[0] + r44c[1] * r44c[1];
        if (c2k7e <= gho99) {
            return U88s7
        }
        return {
            x: B4jGk.x + r44c[0] * gho99 / c2k7e,
            y: B4jGk.y + r44c[1] * gho99 / c2k7e
        }
    };
    this.toX = function (e) {
        if (this.zX != null && this.maplet && (px && e.button == 1 || !px && e.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && fJ(e.target, this.z9)) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            var q82v = parseInt(e.target.style.left) + (px ? 1 : 0);
            var _Ma1 = parseInt(e.target.style.top) + (px ? 1 : 0);
            this.l0 = ((px || a$80) ? e.offsetX : e.layerX) + q82v;
            this.na = ((px || a$80) ? e.offsetY : e.layerY) + _Ma1;
            f7kns = e.target
        }
    };
    this.W6J = function (e) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            this.qo = false;
            var x = parseInt(e.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
            var y = parseInt(e.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
            if (x > 0 && y > 0) {
                MEvent.trigger(this, "nodedrag", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5))), (this.pA1(this, this.o_PG)).slice(0, 2))
            }
            this.wQ(false);
            this.o0rbS = false;
            clearTimeout(this.KcIw);
            this.KcIw = null
        }
        this.ls = false;
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.pA1 = function (xS32, Rv5) {
        var v6 = [];
        var pts = xS32.pts;
        for (var i = 0; i < pts.length; i++) {
            if ((pts[i].mapX == Rv5[0].x && pts[i].mapY == Rv5[0].y) || (pts[i].mapX == Rv5[1].x && pts[i].mapY == Rv5[1].y)) {
                v6.push(i)
            }
        }
        return v6
    };
    this.y5l = function (e) {
        if (f7kns != null && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if (f7kns != null) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                this.z9.style.left = (parseInt(x)) + "px";
                this.z9.style.top = (parseInt(y)) + "px";
                if (MEvent.contains(this, "nodedrag_move") > 0) {
                    var pt = new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5));
                    pt.initialize(this.maplet);
                    MEvent.trigger(this, "nodedrag_move", this, new MMarker(pt), (this.pA1(this, this.o_PG)).slice(0, 2))
                }
                this.lw = new Date().getTime();
                this.ls = true;
                with(C3D_0) {
                    DMP$0.x = x;
                    DMP$0.y = y;
                    if (!yN) {
                        xqc.x = x;
                        xqc.y = y;
                        V9CJO.x = x;
                        V9CJO.y = y;
                        yN = nB(this, jf70, LPN_HOVERING_TIME)
                    }
                }
            }
        }
    };
    var jf70 = function () {
        with(C3D_0) {
            if (!this.qo && yN) {
                clearInterval(yN);
                yN = null;
                return
            }
            if (xqc.x == DMP$0.x && xqc.y == DMP$0.y && (DMP$0.x != V9CJO.x || DMP$0.y != V9CJO.y)) {
                V9CJO.x = DMP$0.x;
                V9CJO.y = DMP$0.y;
                MEvent.trigger(this, "drag_hovering", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(DMP$0.x + 5, DMP$0.y + 5))), (this.pA1(this, this.o_PG)).slice(0, 2))
            } else {
                xqc.x = DMP$0.x;
                xqc.y = DMP$0.y
            }
        }
    };
    this.appendPoint = function (B457, r_2, dirmark) {
        if (this.FG7R7) {
            return
        }
        if (typeof B457 != "object" || !(B457 instanceof MPoint) || !B457) throw new Error("para new_pt is not a valid MPoint object.");
        if (!B457.maplet) {
            B457.initialize(this.maplet)
        }
        this.pts.push(B457);
        if (typeof dirmark != "boolean") {
            dirmark = false
        }
        if (typeof r_2 != "boolean") {
            r_2 = true
        }
        if (dirmark) {
            var H29 = this.options.dirmark;
            if (H29) {
                (!H29.k$kM) && (H29.k$kM = {});
                (!H29.pts) && (H29.pts = []);
                if (this.$Bh) {
                    H29.pts.push(this.pts.length - 2);
                    H29.k$kM[this.pts.length - 2] = null
                }
            }
        }
        if (r_2) {
            this.update()
        }
    };
    this.showDirMark = function (uy, refresh) {
        if (typeof uy === 'boolean' && uy) {
            uy = undefined;
            refresh = true
        } else if (typeof refresh != "boolean") {
            refresh = false
        }
        this.$Bh = true;
        this.setDirMark(uy, refresh)
    };
    this.hideDirMark = function () {
        this.$Bh = false;
        JrXu1()
    };
    this.setDirMark = function (uy, refresh) {
        if (typeof uy != "object") uy = {
            minLevel: MAX_ZOOM_LEVEL - 1,
            maxLevel: MAX_ZOOM_LEVEL,
            pts: this.VqO || []
        };
        if (!(uy.pts) || !(uy.pts instanceof Array)) {
            uy.pts = this.VqO || []
        }
        if (typeof uy.minLevel != "number" || uy.minLevel < MIN_ZOOM_LEVEL || uy.minLevel > MAX_ZOOM_LEVEL) {
            uy.minLevel = MAX_ZOOM_LEVEL - 1
        }
        if (typeof uy.maxLevel != "number" || uy.maxLevel < MIN_ZOOM_LEVEL || uy.maxLevel > MAX_ZOOM_LEVEL) {
            uy.maxLevel = MAX_ZOOM_LEVEL
        }
        uy.k$kM = {};
        if (!md6_(uy.pts)) {
            uy.pts = []
        } else {
            for (var i = 0; i < uy.pts.length; i++) {
                uy.k$kM[uy.pts[i]] = null
            }
        }
        this.options.dirmark = uy;
        if (!this.maplet) {
            return
        }
        if (typeof refresh != "boolean") {
            refresh = true
        }
        if (refresh) {
            this.update()
        }
    };
    var sXy0k = function (r, a0f, v19, K91, G5Fp2) {
        return parseInt(r + r * Math.sin(Math.PI / 180 * (a0f + v19)) + K91) + "," + parseInt(r + r * Math.cos(Math.PI / 180 * (a0f + v19)) + G5Fp2)
    };
    var XTtD3 = function (size, a0f) {
        size = size * 100;
        a0f = 180 - a0f;
        var E0F6 = size / 2;
        var kQ_6Y = sXy0k(E0F6, a0f, 0, 0, 0);
        var ll2n = sXy0k(E0F6, a0f, 125, 0, 0);
        var w01 = sXy0k(E0F6, a0f, 235, 0, 0);
        return "M" + kQ_6Y + " L" + ll2n + "," + size / 2 + "," + size / 2 + "," + w01 + "," + kQ_6Y + "E"
    };
    var XP8S = function (K91, G5Fp2, size, a0f) {
        a0f = 180 - a0f;
        var E0F6 = size / 2;
        var kQ_6Y = sXy0k(E0F6, a0f, 0, K91, G5Fp2);
        var ll2n = sXy0k(E0F6, a0f, 125, K91, G5Fp2);
        var w01 = sXy0k(E0F6, a0f, 235, K91, G5Fp2);
        return "M " + kQ_6Y + " L " + ll2n + " L " + (size / 2 + K91) + " " + (size / 2 + G5Fp2) + " L " + w01 + " L " + kQ_6Y + "z"
    };
    var XO22_ = function () {
        var pn = this.VqO;
        var pts = this.T80;
        var H29 = this.options.dirmark;
        if (this.maplet && H29 && (this.$Bh != false)) {
            (!H29.k$kM) && (H29.k$kM = {});
            if (H29.minLevel && H29.maxLevel && this.maplet.AG >= H29.minLevel && this.maplet.AG <= H29.maxLevel) {
                for (var i = 1; i < pn.length; i++) {
                    if (typeof H29.k$kM[pn[i]] == "undefined") continue;
                    if (pn[i] == this.pts.length - 1) break;
                    var pt = pts[i];
                    if (pt.mapX > 0 && pt.mapX < this.maplet.width && pt.mapY > 0 && pt.mapY < this.maplet.height) {
                        var c = 1,
                            Y268Q = pts[i - c];
                        while (pt.mapX == Y268Q.mapX && pt.mapY == Y268Q.mapY && (i - (c + 1)) >= 0) {
                            Y268Q = pts[i - (++c)]
                        }
                        if (pt.mapX == Y268Q.mapX && pt.mapY == Y268Q.mapY) {
                            continue
                        }
                        $7525.apply(this, [Y268Q.mapX, Y268Q.mapY, pt.mapX, pt.mapY])
                    }
                }
            }
        }
    };
    var $7525 = function (x1, Nk713, x2, I1$q5) {
        var f0$9 = null;
        var color = this.brush.dmstyle.color;
        var size = this.brush.dmstyle.size;
        var opacity = this.brush.dmstyle.transparency;
        var C8GHQ = this.brush.dmstyle.strokeWidth;
        var oS4 = this.brush.dmstyle.strokeColor;
        var MHB = this.brush.dmstyle.strokeTransparency;
        var a0f = Math.floor(mOBTj(x1, Nk713, x2, I1$q5));
        var Q30 = size / 2;
        var zh = Math.PI / 180 * (a0f % 360);
        var K91 = -Q30 * (1 + Math.sin(zh));
        var G5Fp2 = -Q30 * (1 - Math.cos(zh));
        if (!llg86) {
            f0$9 = document.createElement("v:shape");
            with(f0$9.style) {
                position = "absolute";
                left = x2 + K91 + "px";
                top = I1$q5 + G5Fp2 + "px";
                height = width = "1px";
                MozUserSelect = "none"
            }
            with(f0$9) {
                setAttribute("coordsize", "100,100");
                setAttribute("filled", "t");
                setAttribute("strokecolor", oS4);
                setAttribute("strokeweight", C8GHQ + "px");
                setAttribute("fillcolor", color);
                setAttribute("path", XTtD3(size, a0f));
                setAttribute(F8v33, "linemarker");
                setAttribute($0eU, "true")
            }
            var _69 = document.createElement("v:fill");
            _69.setAttribute("opacity", opacity / 100.0);
            var Htq9 = document.createElement("v:stroke");
            Htq9.setAttribute("opacity", MHB / 100.0);
            f0$9.appendChild(_69);
            f0$9.appendChild(Htq9);
            this.zX.appendChild(f0$9)
        } else {
            f0$9 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            with(f0$9) {
                setAttribute("d", XP8S(K91 + x2, G5Fp2 + I1$q5, size, a0f));
                setAttribute("fill", color);
                setAttribute("fill-opacity", opacity / 100.0);
                setAttribute("stroke", oS4);
                setAttribute("stroke-width", C8GHQ + "px");
                setAttribute("stroke-opacity", MHB / 100);
                setAttribute(F8v33, "linemarker");
                setAttribute($0eU, "true")
            }
            this.maplet._T190().firstChild.appendChild(f0$9)
        }
        J7x.push(f0$9)
    };
    var JrXu1 = function () {
        if (J7x.length > 0) {
            for (var i = 0; i < J7x.length; i++) {
                J7x[i].onmousedown = null;
                _removeNode(J7x[i]);
                J7x[i] = null
            }
            J7x = []
        }
    };
    this.setDirMark(this.options.dirmark, false)
};
MPolyline.W7T = 24;
var MEllipse = function (gC, sax, say, brush, info) {
    this.id = new Date().getTime() + "" + X0Jd(Math.random() * 10000) + "Ellipse";
    this.gC = gC;
    this.sax = typeof sax != "undefined" && !isNaN(sax) ? X0Jd(sax) : 300;
    this.say = typeof say != "undefined" && !isNaN(say) ? X0Jd(say) : null;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = (typeof info == "undefined") ? null : info;
    this.ao = [];
    this.zX = null;
    this.iL0 = null;
    this.Ad = null;
    this.zY = null;
    this.bEditable = false;
    this.Q1262 = true;
    this.tn = Number.MAX_VALUE;
    this.to = this.tn;
    this.vc7 = -Number.MAX_VALUE;
    this.H092 = this.vc7;
    this.z9 = null;
    this.data = {
        ix: 0,
        iy: 0,
        ax: 0,
        ay: 0,
        sax: 0,
        say: 0
    };
    this.y53p4 = false;
    this.d42 = false;
    this.creator = MLayer.USER;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
        this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
        this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
        this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1);
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MEllipse'
    };
    this.paint = function () {
        if (!this.iL0) {
            this.zX = this.maplet._T190();
            if (!llg86) {
                this.iL0 = document.createElement("v:oval");
                this.iL0.strokecolor = this.brush.color;
                this.iL0.strokeweight = this.brush.stroke + 'px';
                this.iL0.filled = this.brush.fill;
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = (this.brush.transparency / 100.0);
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.iL0.appendChild(this.Ad);
                this.iL0.appendChild(this.zY);
                this.zX.appendChild(this.iL0)
            } else {
                this.iL0 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                this.iL0.setAttribute("stroke", this.brush.color);
                this.iL0.setAttribute("fill", this.brush.fill ? this.brush.bgcolor : 'none');
                this.iL0.setAttribute("stroke-width", this.brush.stroke);
                this.iL0.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.iL0.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.zX.firstChild.appendChild(this.iL0)
            }
            this.iL0.id = this.id;
            m4$(this.iL0, "oid", this.id);
            this.iL0.style.position = "absolute";
            this.iL0.unselectable = "on";
            this.iL0.setAttribute($0eU, "true");
            this.iL0.setAttribute(F8v33, "ellipse");
            this.ao["ellipse_mouseover"] = MEvent.bindDom(this.iL0, "mouseover", this, function (e) {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.a2_Q) this.maplet.gvL("crosshair", this.iL0);
                else if (this.info || MEvent.contains(this, "click")) this.maplet.gvL("pointer", this.iL0);
                else this.maplet.gvL("default", this.iL0); if (e.type == "mouseover") MEvent.trigger(this, "mouseover", this)
            });
            this.ao["ellipse_mouseout"] = MEvent.bindDom(this.iL0, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.a2_Q) this.maplet.gvL("default", this.iL0);
                MEvent.trigger(this, "mouseout", this)
            });
            this.ao["ellipse_mousedown"] = MEvent.bindDom(this.iL0, "mousedown", this, function () {
                this.y53p4 = true;
                this.d42 = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.a2_Q) this.maplet.gvL("move", this.iL0)
            });
            this.ao["ellipse_mouseup"] = MEvent.bindDom(this.iL0, "mouseup", this, function (e) {
                this.y53p4 = false;
                this.ao["ellipse_mouseover"](e)
            });
            this.ao["ellipse_mousemove"] = MEvent.bindDom(this.iL0, "mousemove", this, function () {
                if (this.y53p4 && !this.d42) this.d42 = true
            })
        }
        this.update()
    };
    this.setBrush = function (fh210) {
        if (!(fh210 instanceof MBrush)) return;
        this.brush = fh210;
        if (!llg86) {
            if (this.iL0) {
                this.iL0.strokecolor = fh210.color;
                this.iL0.strokeweight = fh210.stroke + 'px';
                this.iL0.filled = this.brush.fill;
                this.Ad.opacity = (fh210.transparency / 100.0);
                this.zY.opacity = ((fh210.bgtransparency) / 100);
                this.zY.color = fh210.bgcolor
            }
        } else {
            if (this.iL0) {
                this.iL0.setAttribute("stroke", fh210.color);
                this.iL0.setAttribute("fill", this.brush.fill ? fh210.bgcolor : 'none');
                this.iL0.setAttribute("stroke-width", fh210.stroke);
                this.iL0.setAttribute("stroke-opacity", fh210.transparency / 100);
                this.iL0.setAttribute("fill-opacity", fh210.bgtransparency / 100)
            }
        }
    };
    this.update = function () {
        if (!this.iL0) return;
        if (!this.gC.maplet) this.gC.initialize(this.maplet);
        if (this.maplet.K_0r4) {
            if (this.maplet.$96 != this.gC.$96) {
                this.gC.mapX += this.maplet.wbb1l;
                this.gC.mapY += this.maplet.$X41;
                this.gC.$96 = this.maplet.$96
            }
        } else {
            this.gC.recalcScreenCoords()
        }
        var h98t = this.gC.mapX;
        var b54 = this.gC.mapY;
        var u6r = X0Jd(this.sax / 111111.0 / this.maplet.xg * this.maplet.imgWidth / 0.8);
        var r57 = u6r;
        if (this.say) {
            r57 = X0Jd(this.say / 111111.0 / this.maplet.xf * this.maplet.imgHeight)
        }
        this.tn = this.data.ix = h98t - u6r;
        this.to = this.data.iy = b54 - r57;
        this.vc7 = this.data.ax = h98t + u6r;
        this.H092 = this.data.ay = b54 + r57;
        this.data.sax = u6r;
        this.data.say = r57;
        if (llg86) {
            this.iL0.setAttribute("cx", h98t + "px");
            this.iL0.setAttribute("cy", b54 + "px");
            this.iL0.setAttribute("rx", u6r + "px");
            this.iL0.setAttribute("ry", r57 + "px")
        } else {
            this.iL0.style.left = this.data.ix + "px";
            this.iL0.style.top = this.data.iy + "px";
            this.iL0.style.width = u6r * 2 + "px";
            this.iL0.style.height = r57 * 2 + "px"
        } if (u6r <= 0 || r57 <= 0 || u6r != r57) return;
        if (!this.bEditable && !this.maplet.sS == ts.tu) return;
        this.z9 = document.getElementById(this.id + "vNodeLayer");
        if (!this.z9) {
            this.z9 = document.createElement("div");
            this.z9.id = this.id + "vNodeLayer";
            this.z9.style.position = "absolute";
            this.z9.style.display = "none";
            this.z9.unselectable = "on";
            this.z9.style.zIndex = 1;
            this.zX.appendChild(this.z9)
        }
        var mnU = null,
            j08 = null,
            $3Ua = null;
        mnU = {
            x: h98t,
            y: this.data.ay,
            v: 'm',
            title: '\u56FE\u5F62\u5E73\u79FB'
        };
        j08 = {
            x: this.data.ax,
            y: b54,
            v: 'z',
            title: '\u7B49\u6BD4\u7F29\u653E'
        };
        $3Ua = {
            x: h98t,
            y: b54,
            v: 'c',
            title: '\u4E2D\u5FC3\u70B9'
        };
        var k78c = this.w06Pn(mnU);
        var G26ya = this.w06Pn(j08);
        this.O6k_ = this.w06Pn($3Ua);
        this.z9.appendChild(this.O6k_);
        this.z9.appendChild(k78c);
        this.z9.appendChild(G26ya)
    };
    this.w06Pn = function (O1_u) {
        var x = O1_u.x,
            y = O1_u.y,
            v = O1_u.v;
        var url = O1_u.img || ul;
        var title = O1_u.title || lt;
        var z7 = document.getElementById(this.id + "_node_" + v);
        if (z7 == null) {
            z7 = new Image();
            z7.id = this.id + "_node_" + v;
            z7.src = url;
            z7.unselectable = "on";
            z7.alt = title;
            z7.title = title;
            z7.style.position = "absolute";
            z7.onmousedown = function () {
                return false
            }
        }
        z7.style.left = (x - 5) + "px";
        z7.style.top = (y - 5) + "px";
        return z7
    };
    this.E9AC5 = function () {
        if (this.z9) {
            var n46ma = this.z9.childNodes;
            for (var i = 0; i < n46ma.length; i++) {
                n46ma[i].onmousedown = null;
                n46ma[i].contextmenu = null;
                n46ma[i].H96 = null
            }
            _removeNode(this.z9);
            this.z9 = null;
            this.O6k_ = null
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        for (var l8 in this.ao) {
            if (l8.substring(0, 8) == "ellipse_") {
                if (this.iL0) MEvent.removeBuiltInListener(this.iL0, l8.substring(8), this.ao[l8])
            } else {
                if (this.maplet) MEvent.removeBuiltInListener(this.maplet.map, l8, this.ao[l8])
            }
            this.ao[l8] = null;
            delete this.ao[l8]
        }
        if (typeof this.iL0 == "object" && this.iL0 && this.iL0.parentNode) {
            _removeNode(this.iL0);
            this.Ad = null;
            this.zY = null;
            this.iL0 = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        this.E9AC5();
        if (finalize) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.maplet != null) {
            if (this.d42) {
                if (e.target.id == this.id && this.maplet.BJ2) {
                    this.maplet.BJ2 = false
                }
                if (this.maplet.$7BK8 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)) return;
            var x = this.gC.mapX;
            var y = this.gC.mapY;
            if (!this.info.getOverlay()) this.info.setOverlay(this);
            var fg = true;
            if (typeof e == "undefined") {} else if (e.target.id == this.id && !this.maplet.BJ2) {
                MEvent.trigger(this, "click", this);
                x = e.clientX - this.maplet.offsetX - this.maplet.left;
                y = e.clientY - this.maplet.offsetY - this.maplet.top
            } else if (e.target.id == this.id && this.maplet.BJ2) {
                this.maplet.BJ2 = false;
                fg = false
            } else {
                fg = false
            } if (fg) this.maplet.wN(x, y, this.info)
        }
    };
    this.setContextMenu = function (menu) {
        if (!menu instanceof MContextMenu) return;
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) {
                this.contextmenu.initialize(this.maplet)
            }
            if (!this.contextmenu.containsOverlay(this)) {
                this.contextmenu.addOverlay(this)
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom) return null;
        return this.contextmenu
    };
    this.x6V8 = function () {
        var c8 = {};
        if (this.vc7 === -Number.MAX_VALUE || this.H092 === -Number.MAX_VALUE || this.tn === Number.MAX_VALUE || this.to === Number.MAX_VALUE) {
            return null
        }
        c8.T5_Vl = new MPoint(this.maplet.toMapCoordinate(this.vc7, this.to));
        c8.T5_Vl.initialize(this.maplet);
        c8.gsI = new MPoint(this.maplet.toMapCoordinate(this.tn, this.H092));
        c8.gsI.initialize(this.maplet);
        return c8
    };
    this.setEditable = function (enable) {
        this.bEditable = (typeof enable != "boolean") ? false : enable;
        if (!this.bEditable && this.z9) {
            this.E9AC5()
        };
        if (this.maplet != null) {
            if (this.sax && this.sax == this.say) {
                this.update()
            }
        }
    };
    this.uG = function (e) {
        if (!this.maplet) {
            return
        }
        if (this.bEditable || this.maplet.sS == ts.tu) {
            if (this.ls || this.zX && e.target && (e.target.getAttribute(F8v33) == "ellipse") || e.target.id.indexOf('Ellipse_node') > -1) {
                if (llg86) {
                    this.iL0.setAttribute("stroke-opacity", 1)
                } else {
                    this.Ad.opacity = 1
                }
                this.wQ(true)
            } else {
                if (llg86) {
                    this.iL0.setAttribute("stroke-opacity", this.brush.transparency / 100)
                } else {
                    this.Ad.opacity = (this.brush.transparency / 100.0)
                }
                this.wQ(false)
            }
        }
    };
    this.wQ = function (fg) {
        if (this.z9 != null) {
            if (fg) {
                this.z9.style.display = "block";
                this.z9.style.zIndex = 10;
                this.maplet.x4hM7 = this
            } else {
                this.z9.style.display = "none";
                this.z9.style.zIndex = 0;
                this.maplet.x4hM7 = null
            }
        }
    };
    this.NhK = function (fg) {
        fg = typeof fg == 'boolean' ? fg : true;
        fg = fg == true ? '' : 'none';
        var children = this.z9.children;
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            c.style.display = fg
        }
    };
    this.w0 = function (e) {
        if (!this.maplet || !this.zX || e.target.id.indexOf("Ellipse_node") == -1) return;
        if (this.bEditable || this.maplet.sS == ts.tu) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            this.l0 = ((px || a$80) ? e.offsetX : e.layerX) + 1;
            this.na = ((px || a$80) ? e.offsetY : e.layerY) + 1;
            this.NhK(false);
            f7kns = e.target;
            f7kns.style.display = '';
            this.O6k_.style.display = ''
        }
    };
    this.f9 = function (e) {
        if (this.maplet && this.qo && f7kns && f7kns.id.indexOf("Ellipse_node") > -1) {
            if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
            var x = X0Jd(e.clientX - this.maplet.offsetX - this.maplet.left - this.l0);
            var y = X0Jd(e.clientY - this.maplet.offsetY - this.maplet.top - this.na);
            this.ls = true;
            var h98t = this.gC.mapX,
                b54 = this.gC.mapY;
            var $Ea = f7kns.id;
            var S98 = $Ea.substring($Ea.length - 1);
            switch (S98) {
            case 'm':
                var u6r = this.data.sax;
                var _$A31 = x + 5,
                    H58rS = y + 5 - u6r;
                if (llg86) {
                    this.iL0.setAttribute("cx", _$A31 + "px");
                    this.iL0.setAttribute("cy", H58rS + "px")
                } else {
                    var XU8 = _$A31 - u6r,
                        X9SkQ = H58rS - u6r;
                    this.iL0.style.left = XU8 + "px";
                    this.iL0.style.top = X9SkQ + "px"
                }
                this.O6k_.style.left = _$A31 - 5 + "px";
                this.O6k_.style.top = H58rS - 5 + "px";
                break;
            case 'z':
                if (x <= h98t) x = h98t;
                y = b54 - 5;
                var u6r = x - h98t + 5;
                if (llg86) {
                    this.iL0.setAttribute("rx", u6r + "px");
                    this.iL0.setAttribute("ry", u6r + "px")
                } else {
                    var XU8 = h98t - u6r,
                        X9SkQ = b54 - u6r;
                    this.iL0.style.left = XU8 + "px";
                    this.iL0.style.top = X9SkQ + "px";
                    this.iL0.style.width = u6r * 2 + "px";
                    this.iL0.style.height = u6r * 2 + "px"
                };
                break;
            case 'c':
                return
            }
            f7kns.style.left = x + "px";
            f7kns.style.top = y + "px"
        }
    };
    this.l1 = function (e) {
        if (!this.maplet || !this.zX || !this.qo || !f7kns) return;
        if (this.ls && f7kns) {
            var x = X0Jd(e.clientX - this.maplet.offsetX - this.maplet.left - this.l0);
            var y = X0Jd(e.clientY - this.maplet.offsetY - this.maplet.top - this.na);
            var $Ea = f7kns.id;
            var S98 = $Ea.substring($Ea.length - 1);
            switch (S98) {
            case 'm':
                this.gC = new MPoint(this.maplet.toMapCoordinate(x + 5, y - this.data.sax + 5));
                break;
            case 'z':
                var u6r = x + 5 - this.gC.mapX;
                this.say = this.sax = X0Jd(u6r * 0.8 / this.maplet.imgWidth * this.maplet.xg * 111111.0);
                break
            };
            this.ls = false;
            f7kns = null;
            this.update();
            MEvent.trigger(this, "drag", this.gC, this.sax);
            MEvent.trigger(this.maplet, "edit", this.gC, this.sax)
        };
        this.NhK(true);
        this.qo = false;
        if (this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    }
};
var MRoundRect = function (T5_Vl, gsI, arcsize, brush, info) {
    this.id = new Date().getTime() + "" + X0Jd(Math.random() * 10000) + "RRect";
    this.T5_Vl = T5_Vl;
    this.gsI = gsI;
    this.arcsize = typeof arcsize == "number" ? arcsize : 0.1;
    this.width = 0;
    this.height = 0;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = (typeof info == "undefined") ? null : info;
    this.ao = [];
    this.zX = null;
    this.rect = null;
    this.Q1262 = true;
    this.bEditable = false;
    this.y53p4 = false;
    this.d42 = false;
    this.creator = MLayer.USER;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
        this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
        this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
        this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1);
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MRoundRect'
    };
    this.paint = function () {
        if (!this.rect) {
            this.zX = this.maplet._T190();
            if (llg86) {
                this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this.zX.firstChild.appendChild(this.rect)
            } else {
                this.rect = document.createElement("v:roundrect");
                this.rect.arcsize = this.arcsize;
                this.Ad = document.createElement("v:stroke");
                this.zY = document.createElement("v:fill");
                this.rect.appendChild(this.Ad);
                this.rect.appendChild(this.zY);
                this.zX.appendChild(this.rect)
            }
            this.G31();
            this.rect.id = this.id;
            m4$(this.rect, "oid", this.id);
            this.rect.style.position = "absolute";
            this.rect.unselectable = "on";
            this.rect.setAttribute($0eU, "true");
            this.rect.setAttribute(F8v33, "rect");
            this.ao["rect_mouseover"] = MEvent.bindDom(this.rect, "mouseover", this, function () {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.a2_Q) this.maplet.gvL("crosshair", this.rect);
                else if (this.info || MEvent.contains(this, "click")) this.maplet.gvL("pointer", this.rect);
                else this.maplet.gvL("default", this.rect)
            });
            this.ao["rect_mouseout"] = MEvent.bindDom(this.rect, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.a2_Q) this.maplet.gvL("default", this.rect)
            });
            this.ao["rect_mousedown"] = MEvent.bindDom(this.rect, "mousedown", this, function () {
                this.y53p4 = true;
                this.d42 = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.a2_Q) this.maplet.gvL("move", this.rect)
            });
            this.ao["rect_mouseup"] = MEvent.bindDom(this.rect, "mouseup", this, function (e) {
                this.y53p4 = false;
                this.ao["rect_mouseover"](e)
            });
            this.ao["rect_mousemove"] = MEvent.bindDom(this.rect, "mousemove", this, function () {
                if (this.y53p4 && !this.d42) this.d42 = true
            })
        }
        this.update()
    };
    this.update = function () {
        if (!this.rect) return;
        if (!this.T5_Vl.maplet) this.T5_Vl.initialize(this.maplet);
        if (!this.gsI.maplet) this.gsI.initialize(this.maplet);
        if (this.maplet.K_0r4) {
            if (this.maplet.$96 != this.T5_Vl.$96) {
                this.T5_Vl.mapX += this.maplet.wbb1l;
                this.T5_Vl.mapY += this.maplet.$X41;
                this.T5_Vl.$96 = this.maplet.$96
            }
            if (this.maplet.$96 != this.gsI.$96) {
                this.gsI.mapX += this.maplet.wbb1l;
                this.gsI.mapY += this.maplet.$X41;
                this.gsI.$96 = this.maplet.$96
            }
        } else {
            this.T5_Vl.recalcScreenCoords();
            this.gsI.recalcScreenCoords()
        }
        var x = this.T5_Vl.mapX;
        var y = this.T5_Vl.mapY;
        this.width = Math.abs(this.gsI.mapX - x);
        this.height = Math.abs(this.gsI.mapY - y);
        if (llg86) {
            this.rect.setAttribute("x", x + "px");
            this.rect.setAttribute("y", y + "px");
            this.rect.setAttribute("width", this.width + "px");
            this.rect.setAttribute("height", this.height + "px");
            this.rect.setAttribute("ry", X0Jd(this.height * this.arcsize))
        } else {
            this.rect.style.left = x + "px";
            this.rect.style.top = y + "px";
            this.rect.style.width = this.width + "px";
            this.rect.style.height = this.height + "px"
        }; if (!this.bEditable && !this.maplet.sS == ts.tu) return;
        if (this.width <= 0 || this.width <= 0) return;
        this.z9 = document.getElementById(this.id + "vNodeLayer");
        if (!this.z9) {
            this.z9 = document.createElement("div");
            this.z9.id = this.id + "vNodeLayer";
            this.z9.style.position = "absolute";
            this.z9.style.display = "none";
            this.z9.unselectable = "on";
            this.z9.style.zIndex = 1;
            this.zX.appendChild(this.z9)
        };
        var mnU = null,
            o$gPo = null,
            iB1V = null,
            j08 = null;
        mnU = {
            x: x,
            y: y + X0Jd(this.height / 2),
            v: 'm',
            title: '\u56FE\u5F62\u5E73\u79FB'
        };
        o$gPo = {
            x: x + this.width,
            y: y + X0Jd(this.height / 2),
            v: 'x'
        };
        iB1V = {
            x: x + X0Jd(this.width / 2),
            y: y + this.height,
            v: 'y'
        };
        j08 = {
            x: x + this.width,
            y: y + X0Jd((1 - this.arcsize) * this.height),
            v: 'z',
            title: '\u7B49\u6BD4\u7F29\u653E'
        };
        var k78c = this.w06Pn(mnU);
        var $57nE = this.w06Pn(o$gPo);
        var SU8Jg = this.w06Pn(iB1V);
        var G26ya = this.w06Pn(j08);
        this.z9.appendChild(k78c);
        this.z9.appendChild($57nE);
        this.z9.appendChild(SU8Jg);
        this.z9.appendChild(G26ya)
    };
    this.w06Pn = function (O1_u) {
        var x = O1_u.x,
            y = O1_u.y,
            v = O1_u.v;
        var url = O1_u.img || ul;
        var title = O1_u.title || lt;
        var z7 = document.getElementById(this.id + "_node_" + v);
        if (z7 == null) {
            z7 = new Image();
            z7.id = this.id + "_node_" + v;
            z7.src = url;
            z7.unselectable = "on";
            z7.alt = title;
            z7.title = title;
            z7.style.position = "absolute";
            z7.onmousedown = function () {
                return false
            }
        }
        z7.style.left = (x - 5) + "px";
        z7.style.top = (y - 5) + "px";
        return z7
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.E9AC5 = function () {
        if (this.z9) {
            var n46ma = this.z9.childNodes;
            for (var i = 0; i < n46ma.length; i++) {
                n46ma[i].onmousedown = null;
                n46ma[i].contextmenu = null;
                n46ma[i].H96 = null
            }
            _removeNode(this.z9)
        }
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") {
            finalize = false
        };
        this.bEditable = finalize;
        for (var l8 in this.ao) {
            if (l8.substring(0, 5) == "rect_") {
                if (this.rect) MEvent.removeBuiltInListener(this.rect, l8.substring(5), this.ao[l8])
            } else {
                if (this.maplet) MEvent.removeBuiltInListener(this.maplet.map, l8, this.ao[l8])
            }
            this.ao[l8] = null;
            delete this.ao[l8]
        }
        if (typeof this.rect == "object" && this.rect && this.rect.parentNode) {
            _removeNode(this.rect);
            this.rect = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        this.E9AC5();
        if (finalize) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.maplet != null) {
            if (this.d42) {
                if (e.target.id == this.id && this.maplet.BJ2) {
                    this.maplet.BJ2 = false
                }
                if (this.maplet.$7BK8 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)) return;
            var x = 0;
            var y = 0;
            if (!this.info.getOverlay()) this.info.setOverlay(this);
            var fg = true;
            if (typeof e == "undefined") {
                x = this.T5_Vl.mapX + this.width / 2;
                y = this.T5_Vl.mapY + this.height / 2
            } else if (e.target.id == this.id && !this.maplet.BJ2) {
                MEvent.trigger(this, "click", this);
                x = e.clientX - this.maplet.offsetX - this.maplet.left;
                y = e.clientY - this.maplet.offsetY - this.maplet.top
            } else if (e.target.id == this.id && this.maplet.BJ2) {
                this.maplet.BJ2 = false;
                fg = false
            } else {
                fg = false
            } if (fg) this.maplet.wN(x, y, this.info)
        }
    };
    this.getCenterXY = function () {
        var h98t = this.T5_Vl.mapX + this.width / 2;
        var b54 = this.T5_Vl.mapY + this.height / 2;
        return {
            x: h98t,
            y: b54
        }
    };
    this.setBrush = function (fh210) {
        if (!(fh210 instanceof MBrush)) return;
        this.brush = fh210;
        this.G31()
    };
    this.G31 = function () {
        if (!llg86) {
            if (this.rect && this.Ad && this.zY) {
                this.rect.strokecolor = this.brush.color;
                this.rect.strokeweight = this.brush.stroke + 'px';
                this.rect.filled = this.brush.fill;
                this.Ad.opacity = (this.brush.transparency / 100.0);
                this.Ad.dashstyle = X0Jd(this.brush.style) ? "dash" : "";
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor
            }
        } else {
            if (this.rect) {
                this.rect.setAttribute("stroke", this.brush.color);
                this.rect.setAttribute("fill", this.brush.fill ? this.brush.bgcolor : 'none');
                this.rect.setAttribute("stroke-width", this.brush.stroke);
                this.rect.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.rect.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.rect.setAttribute("style", X0Jd(this.brush.style) ? "stroke-dasharray:10,15" : "")
            }
        }
    };
    this.setContextMenu = function (menu) {
        if (!menu instanceof MContextMenu) return;
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) {
                this.contextmenu.initialize(this.maplet)
            }
            if (!this.contextmenu.containsOverlay(this)) {
                this.contextmenu.addOverlay(this)
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom) return null;
        return this.contextmenu
    };
    this.x6V8 = function () {
        var c8 = {};
        c8.T5_Vl = this.T5_Vl;
        c8.gsI = this.gsI;
        return c8
    };
    this.setEditable = function (enable) {
        this.bEditable = (typeof enable != "boolean") ? false : enable;
        if (!this.bEditable && this.z9) {
            this.E9AC5()
        }
        if (this.maplet != null) {
            this.update()
        }
    };
    this.uG = function (e) {
        if (!this.maplet) {
            return
        }
        if (this.bEditable || this.maplet.sS == ts.tu) {
            if (this.ls || this.zX && e.target && (e.target.getAttribute(F8v33) == "rect") || e.target.id.indexOf('RRect_node') > -1) {
                if (llg86) {
                    this.rect.setAttribute("stroke-opacity", 1)
                } else {
                    this.Ad.opacity = 1
                }
                this.wQ(true)
            } else {
                if (llg86) {
                    this.rect.setAttribute("stroke-opacity", this.brush.transparency / 100)
                } else {
                    this.Ad.opacity = (this.brush.transparency / 100.0)
                }
                this.wQ(false)
            }
        }
    };
    this.wQ = function (fg) {
        if (this.z9 != null) {
            if (fg) {
                this.z9.style.display = "block";
                this.z9.style.zIndex = 10;
                this.maplet.x4hM7 = this
            } else {
                this.z9.style.display = "none";
                this.z9.style.zIndex = 0;
                this.maplet.x4hM7 = null
            }
        }
    };
    this.NhK = function (fg) {
        fg = typeof fg == 'boolean' ? fg : true;
        fg = fg == true ? '' : 'none';
        var children = this.z9.childNodes;
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            c.style.display = fg
        }
    };
    this.w0 = function (e) {
        if (!this.maplet || !this.zX || e.target.id.indexOf("RRect_node") == -1) return;
        if (this.bEditable || this.maplet.sS == ts.tu) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            this.l0 = ((px || a$80) ? e.offsetX : e.layerX) + 1;
            this.na = ((px || a$80) ? e.offsetY : e.layerY) + 1;
            this.NhK(false);
            f7kns = e.target;
            f7kns.style.display = ''
        }
    };
    this.f9 = function (e) {
        if (this.qo && f7kns && f7kns.id.indexOf("RRect_node") > -1) {
            if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
            var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
            var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
            this.ls = true;
            var $Ea = f7kns.id;
            var S98 = $Ea.substring($Ea.length - 1);
            var $w3 = this.T5_Vl.mapX,
                r85j = this.T5_Vl.mapY;
            var W06 = this.gsI.mapX,
                dBT = this.gsI.mapY;
            var w = this.width,
                h = this.height;
            switch (S98) {
            case 'm':
                $w3 = x + 5;
                r85j = y + 5 - X0Jd(h / 2);
                W06 = $w3 + w;
                dBT = r85j + h;
                if (llg86) {
                    this.rect.setAttribute("x", $w3 + "px");
                    this.rect.setAttribute("y", r85j + "px")
                } else {
                    this.rect.style.left = $w3 + "px";
                    this.rect.style.top = r85j + "px"
                };
                break;
            case 'x':
                if (x <= $w3) x = $w3;
                w = x + 5 - $w3;
                W06 = $w3 + w;
                if (llg86) {
                    this.rect.setAttribute("width", w + "px")
                } else {
                    this.rect.style.width = w + "px"
                };
                x = W06 - 5;
                y = r85j + X0Jd(h / 2) - 5;
                break;
            case 'z':
                if (x <= $w3) x = $w3;
                if (y <= r85j) y = r85j;
                var vG = w / h;
                w = x + 5 - $w3;
                h = w / vG || 1;
                W06 = $w3 + w;
                dBT = r85j + h;
                y = r85j + X0Jd((1 - this.arcsize) * h) - 5;
                x = W06 - 5;
                if (llg86) {
                    this.rect.setAttribute("width", w + "px");
                    this.rect.setAttribute("height", h + "px");
                    this.rect.setAttribute("ry", h * this.arcsize + "px")
                } else {
                    this.rect.style.width = w + "px";
                    this.rect.style.height = h + "px"
                };
                break;
            case 'y':
                if (y <= r85j) y = r85j;
                h = y + 5 - r85j;
                dBT = r85j + h;
                if (llg86) {
                    this.rect.setAttribute("height", h + "px");
                    this.rect.setAttribute("ry", h * this.arcsize)
                } else {
                    this.rect.style.height = h + "px"
                };
                x = $w3 + X0Jd(w / 2) - 5;
                y = dBT - 5;
                break
            }
            f7kns.style.left = x + "px";
            f7kns.style.top = y + "px"
        }
    };
    this.l1 = function (e) {
        if (!this.maplet || !this.zX || !this.qo || !f7kns) return;
        if (this.ls && f7kns) {
            var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
            var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
            var $w3 = this.T5_Vl.mapX,
                r85j = this.T5_Vl.mapY;
            var $Ea = f7kns.id;
            var S98 = $Ea.substring($Ea.length - 1);
            switch (S98) {
            case 'm':
                var h = this.height,
                    w = this.width;
                var $w3 = x + 5,
                    r85j = y - X0Jd(h / 2) + 5;
                var W06 = $w3 + w,
                    dBT = r85j + h;
                this.T5_Vl = new MPoint(this.maplet.toMapCoordinate($w3, r85j));
                break;
            case 'x':
                if (x <= $w3) x = $w3;
                var W06 = x + 5,
                    dBT = this.gsI.mapY;
                break;
            case 'y':
                if (y <= r85j) y = r85j;
                var W06 = this.gsI.mapX,
                    dBT = y + 5;
                break;
            case 'z':
                if (x <= $w3) x = $w3;
                if (y <= r85j) y = r85j;
                var h = this.height,
                    w = this.width;
                var vG = w / h;
                var W06 = x + 5;
                var DQ6Q4 = W06 - $w3,
                    C5H5 = DQ6Q4 / vG;
                var dBT = r85j + C5H5;
                break
            };
            this.gsI = new MPoint(this.maplet.toMapCoordinate(W06, dBT));
            this.ls = false;
            f7kns = null;
            this.update();
            MEvent.trigger(this, "drag", this.T5_Vl, this.gsI);
            MEvent.trigger(this.maplet, "edit", this.T5_Vl, this.gsI)
        }
        this.NhK(true);
        this.qo = false;
        if (this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    }
};
var MLabel = function (xP, xoffset, yoffset, opacity, options) {
    this.label = xP;
    if (typeof xoffset == "object" && xoffset) options = xoffset;
    if (typeof options != "object" || !options) options = {};
    if (typeof xoffset == "object" && xoffset) {
        if ("number,string".indexOf(typeof options.xoffset) == -1) options.xoffset = undefined;
        if ("number,string".indexOf(typeof options.yoffset) == -1) options.yoffset = undefined;
        if ("number,string".indexOf(typeof options.opacity) == -1) options.opacity = undefined
    } else {
        options.xoffset = xoffset;
        options.yoffset = yoffset;
        options.opacity = opacity
    } if (typeof options.enableStyle != "boolean") options.enableStyle = true;
    if (typeof options.visible != "boolean") options.visible = true;
    var ar8 = false;
    this.visible = options.visible;
    this.xoffset = (typeof options.xoffset == "undefined") ? null : parseInt(options.xoffset);
    this.yoffset = (typeof options.yoffset == "undefined") ? null : parseInt(options.yoffset);
    this.opacity = typeof options.opacity != "undefined";
    this.div = document.createElement("div");
    if (options.enableStyle) this.div.className = "tiplabel";
    this.div.style.left = "-1000px";
    this.div.style.top = "-1000px";
    this.div.unselectable = "on";
    this.div.style.zIndex = 10;
    this.div.style.position = "absolute";
    if (px && typeof options.opacity != "undefined") {
        this.div.style.filter = "alpha( opacity = " + parseInt(options.opacity) + " )"
    } else if (!px && typeof options.opacity != "undefined") {
        this.div.style.MozOpacity = parseInt(options.opacity) / 100
    }
    this.marker = null;
    this.wz = function (id) {
        this.div.id = "mk_label_" + id
    };
    this.setContextMenu = function (menu) {};
    this.initialize = function (marker) {
        this.marker = marker
    };
    this.update = function (maplet, left, top) {
        if (this.div.parentNode != maplet.lA.div && !this.marker.ls) {
            if (typeof this.label == "string") {
                this.div.innerHTML = this.label
            } else {
                this.div.appendChild(this.label)
            }
            maplet.lA.appendChild(this.div)
        }
        if (this.xoffset == null) this.xoffset = this.marker.icon.width;
        if (this.yoffset == null) this.yoffset = this.marker.icon.height / 2 - this.div.offsetHeight / 2;
        if (!ar8) {
            this.div.style.display = this.visible ? "" : "none";
            ar8 = true
        }
        this.div.style.left = (parseInt(left) + this.xoffset) + "px";
        this.div.style.top = (parseInt(top) + this.yoffset) + "px"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize) this.marker = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLabel'
    };
    this.o64 = this.div.style.zIndex;
    this.setZIndex = function (_WD) {
        if (this.div && this.div.parentNode && _WD != this.div.style.zIndex) {
            this.o64 = this.div.style.zIndex;
            this.div.style.zIndex = _WD
        }
    };
    this.u8q7 = function () {
        if (!this.div) return;
        if (this.o64 != this.div.style.zIndex) this.setZIndex(this.o64)
    };
    this.setVisible = function (visible) {
        if (visible != (this.div.style.display == "none" ? false : true)) {
            this.div.style.display = visible ? "" : "none";
            this.visible = visible
        }
    };
    this.resetLabel = function (options) {
        if (typeof options != "object" || !options) return;
        var left = parseInt(this.div.style.left);
        var top = parseInt(this.div.style.top);
        if (options.content) {
            this.label = options.content;
            this.div.innerHTML = "";
            if (typeof options.content == "string") {
                this.div.innerHTML = this.label
            } else {
                this.div.appendChild(this.label)
            }
        }
        if (typeof options.enableStyle == "boolean") {
            this.div.className = options.enableStyle ? "tiplabel" : ""
        }
        if ("number,string".indexOf(typeof options.xoffset) != -1) this.xoffset = parseInt(options.xoffset);
        else if (typeof options.xoffset == "object" && options.xoffset == null) this.xoffset = null;
        if ("number,string".indexOf(typeof options.yoffset) != -1) this.yoffset = parseInt(options.yoffset);
        else if (typeof options.yoffset == "object" && options.yoffset == null) this.yoffset = null;
        if ("number,string".indexOf(typeof options.opacity) != -1) {
            if (px && typeof options.opacity != "undefined") {
                this.div.style.filter = "alpha( opacity = " + parseInt(options.opacity) + " )"
            } else if (!px && typeof options.opacity != "undefined") {
                this.div.style.MozOpacity = parseInt(options.opacity) / 100
            }
        }
        this.update(this.marker.maplet, this.marker.icon.left, this.marker.icon.top)
    };
    this.getText = function () {
        var Yp1c1 = "";
        var s = this.div.innerHTML;
        if (s.indexOf(Maplet.MLABEL_TEXT_FLAG) != -1) {
            var F000$ = new RegExp(Maplet.MLABEL_TEXT_FLAG + "=\"?([^\"\t ]*)", "gi");
            var W1k = F000$.exec(s);
            if (W1k != null) Yp1c1 = W1k[1]
        } else if (s != "") {
            Yp1c1 = v3p1l(s)
        } else {
            Yp1c1 = s
        }
        return Yp1c1
    }
};
var MInfoWindow = function (ya, xv, yd, options) {
    this.title = ya;
    this.content = t548(xv, true);
    this.yd = (typeof yd != "undefined" && "mouseover" == yd.toLowerCase()) ? "mouseover" : "click";
    this.options = options || {};
    if (typeof this.options.xoffset != "number") this.options.xoffset = 0;
    if (typeof this.options.yoffset != "number") this.options.yoffset = 0;
    if (typeof this.options.PvcY != 'number') this.options.PvcY = MInfoWindow.ARROW_STYLE.SMALL;
    this.yK7F = {
        Dqm: false,
        width: 0,
        height: 0
    };
    this.gv = function (x, y) {
        MEvent.trigger(this.getOverlay(), "iw_beforeopen", this.getOverlay(), x, y);
        if (this.getOverlay().maplet.customInfoWindow) return null;
        avBubble.overlay = this.getOverlay();
        var b = gp(this.title, x, y, this.content, {
            PvcY: this.options.PvcY
        });
        this.setTabs(j3_3w);
        return b
    };
    var sj55 = null;
    this.setOverlay = function (overlay) {
        sj55 = overlay
    };
    this.getOverlay = function () {
        return sj55
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MInfoWindow'
    };
    this.setTitle = function (yw, T$D, e6Y) {
        this.title = yw;
        if (ContentInfo) {
            ContentInfo.setTitle(yw);
            this.yK7F.Dqm = false;
            if (typeof T$D != "boolean") T$D = true;
            if (typeof e6Y != "boolean") e6Y = false;
            if (T$D) Luk(e6Y)
        }
    };
    this.setContent = function (c, T$D, e6Y) {
        this.content = t548(c, true);
        if (ContentInfo) {
            ContentInfo.setContent(c);
            this.yK7F.Dqm = false;
            if (typeof T$D != "boolean") T$D = true;
            if (typeof e6Y != "boolean") e6Y = true;
            if (T$D) Luk(e6Y)
        }
    };
    this.zoomTo = function (type, w, h) {
        if (type == "zoomin") this.zoomIn(w, h);
        else if (type == "zoomout") this.zoomOut(w, h)
    };
    this.zoomOut = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomOut == "function") {
            ContentInfo.onZoomOut(w, h)
        }
    };
    this.zoomIn = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomIn == "function") {
            ContentInfo.onZoomIn(w, h)
        }
    };
    this.getBodySize = function () {
        var size = {
            width: 0,
            height: 0
        };
        if (ContentInfo) {
            return ContentInfo.J6N()
        }
        return size
    };
    this.setZMBtnVisible = function (visible) {
        if (ContentInfo && typeof ContentInfo.setZMBtnVisible == 'function') {
            ContentInfo.setZMBtnVisible(visible)
        } else {
            avBubble.c9O = visible
        }
    };
    this.getZMBtnVisible = function () {
        return ContentInfo && ContentInfo.p3628()
    };
    var j3_3w = [];
    this.setTabs = function (o22) {
        if (md6_(o22)) j3_3w = o22;
        if (ContentInfo && ContentInfo.isVisible() && (sj55 && avBubble.overlay.id == sj55.id) && j3_3w.length > 0) {
            for (var i = 0; i < o22.length; i++) {
                ContentInfo.N44(o22[i].clone())
            }
            this.yK7F.Dqm = false;
            Luk()
        }
    };
    this.getTabs = function () {
        return j3_3w
    };
    this.clearTabs = function () {
        j3_3w = [];
        if (ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.R7$();
            if (sj55 && avBubble.overlay.id == sj55.id) {
                this.yK7F.Dqm = false;
                Luk()
            }
        }
    };
    this.setCurrentTab = function (AXvD) {
        if (ContentInfo) {
            ContentInfo.setCurrentTab(AXvD)
        }
    };
    this.getCurrentTab = function () {
        if (ContentInfo && ContentInfo.tabIndex != -1) {
            return ContentInfo.t9_1[ContentInfo.tabIndex]
        } else {
            return null
        }
    };
    this.finalize = function () {
        this.clearTabs();
        D3Ji(this)
    }
};
MInfoWindow.extend = function (options) {
    return Vc3(options)
};
var ContentInfo = null;
var _Fiu$ = null;
var j82 = null;
var gp = function (title, left, top, f5, O1_u, extend, Qdo) {
    hideBubble(maplet);
    avBubble.calcLatLon();
    if (avBubble.width < avBubble.minWidth) avBubble.width = avBubble.minWidth;
    if (avBubble.height < avBubble.minHeight) avBubble.height = avBubble.minHeight;
    ContentInfo = extend ? _Fiu$ : j82;
    if (ContentInfo == null) {
        ContentInfo = extend ? new _dY(maplet, Qdo) : new s12(maplet);
        ContentInfo.initialize({
            PvcY: O1_u.PvcY
        });
        ContentInfo.onClosed = function () {
            avBubble.mO_ = false;
            avBubble.H17Wr = false;
            avBubble.sKcR1 = false;
            MEvent.trigger(maplet, "iw_hide", avBubble.overlay);
            maplet.viewOverlay(avBubble.overlay, 50, 50)
        };
        ContentInfo.onZoomOut = function (w, h) {
            MEvent.trigger(avBubble.overlay, "bubble_zoomout", avBubble.overlay);
            var size = {
                width: avBubble.width,
                height: avBubble.height
            };
            if (avBubble.overlay.info && avBubble.overlay.info.yK7F.width > 0) size = avBubble.overlay.info.yK7F;
            if (w) {
                if (w < avBubble.minWidth) w = avBubble.minWidth;
                size.width = w
            }
            if (h) {
                if (h < avBubble.minHeight) h = avBubble.minHeight;
                size.height = h
            }
            ContentInfo.width = size.width;
            ContentInfo.height = size.height;
            ContentInfo.WNw("zoomin");
            avBubble.S$28I = true;
            var X9q8 = maplet.viewOverlay(avBubble.overlay, 50, 50);
            if (X9q8.JM2Jk == 0 && X9q8._672 == 0) maplet.refresh();
            avBubble.sKcR1 = false;
            avBubble.Njo = "out"
        };
        ContentInfo.onZoomIn = function (w, h) {
            var overlay = avBubble.overlay;
            MEvent.trigger(overlay, "bubble_zoomin", avBubble.overlay);
            w = r0JS(w, null);
            h = r0JS(h, null);
            var c7 = maplet.getMaxBubbleSize();
            if (w && w < c7.width) c7.width = w;
            if (h && h < c7.height) c7.height = h;
            var d4t = 0;
            var oQ4 = 0;
            if (typeof overlay == "object" && overlay) {
                if (overlay.toString().indexOf("MMarker") != -1) {
                    if (overlay.icon) {
                        d4t = overlay.icon.height;
                        oQ4 = overlay.icon.width;
                        c7.height -= d4t;
                        c7.width -= oQ4
                    }
                } else {
                    d4t = 50;
                    c7.height -= d4t
                }
            }
            var A055S = maplet.toScreenCoordinate(avBubble.LGyL);
            var XYrD2 = ContentInfo.OiR(A055S[0], A055S[1], c7.width, c7.height, "top", true, true, overlay);
            avBubble.FoL = XYrD2.$K1u;
            avBubble.left = XYrD2.FoY;
            avBubble.top = XYrD2.h$n;
            avBubble.S$28I = true;
            ContentInfo.show(XYrD2, null);
            ContentInfo.WNw("zoomout");
            var ix = XYrD2.FoY;
            var iy = XYrD2.h$n;
            var ax = ix + XYrD2.width;
            var ay = iy + XYrD2.height;
            with(XYrD2.arrow) {
                if (dir == "left") {
                    ix = ix - oQ4 - XYrD2.arrow.width
                } else if (dir == "right") {
                    ax = ax + oQ4 + XYrD2.arrow.width
                } else if (dir == "top") {
                    iy = iy - d4t - XYrD2.arrow.height
                } else if (dir == "bottom") {
                    ay = ay + d4t + XYrD2.arrow.height
                }
            }
            maplet.tT3P({
                $w3: ix,
                r85j: iy,
                W06: ax,
                dBT: ay,
                K91: 10,
                G5Fp2: 10
            }, {
                vG10o: true,
                a0a: true,
                W14: false
            });
            avBubble.sKcR1 = true;
            avBubble.Njo = "in"
        }
    };
    avBubble.mO_ = false;
    avBubble.H17Wr = false;
    ContentInfo.R7$();
    var size = {
        width: 0,
        height: 0
    };
    if (avBubble.overlay.info.yK7F.Dqm) {
        size.width = avBubble.width;
        size.height = avBubble.height;
        ContentInfo.setTitle(title);
        ContentInfo.setContent(f5)
    } else {
        size = ContentInfo.n32(title, f5);
        if (size.width == 0) {
            size = {
                width: avBubble.width,
                height: avBubble.height
            }
        } else {
            if (size.width < avBubble.minWidth) size.width = avBubble.minWidth;
            if (size.height < avBubble.minHeight) size.height = avBubble.minHeight;
            var D7U16 = maplet.getMaxBubbleSize();
            if (size.width > D7U16.width) size.width = D7U16.width;
            if (size.height > D7U16.height) size.height = D7U16.height
        }
        avBubble.overlay.info.yK7F.width = size.width;
        avBubble.overlay.info.yK7F.height = size.height;
        avBubble.overlay.info.yK7F.Dqm = true
    }
    var XYrD2 = ContentInfo.OiR(left, top, size.width, size.height, avBubble.tipInitPlace, avBubble.mO_, avBubble.H17Wr, avBubble.overlay);
    avBubble.FoL = XYrD2.$K1u;
    avBubble.left = XYrD2.FoY;
    avBubble.top = XYrD2.h$n;
    avBubble.head = title;
    avBubble.body = f5;
    ContentInfo.show(XYrD2, avBubble.c9O, true, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
    if (maplet.fa) {
        ContentInfo.setVisible(false);
        avBubble.P6350 = true
    }
    var oQ4 = 0;
    var d4t = 0;
    if (XYrD2.B040Y) {
        avBubble.LGyL = avBubble.overlay.pt.getPid();
        if (avBubble.overlay.icon) {
            oQ4 = avBubble.overlay.icon.width;
            d4t = avBubble.overlay.icon.height
        }
    } else {
        avBubble.LGyL = maplet.toMapCoordinate(left, top)
    } if (avBubble.c9O != null) avBubble.c9O = null;
    var ix = XYrD2.FoY;
    var iy = XYrD2.h$n;
    var ax = ix + XYrD2.width;
    var ay = iy + XYrD2.height;
    var pN36B;
    if (extend) {
        pN36B = XYrD2.pN36B
    } else {
        with(XYrD2.arrow) {
            if (dir == "left") {
                ix = ix - oQ4 - XYrD2.arrow.width
            } else if (dir == "right") {
                ax = ax + oQ4 + XYrD2.arrow.width
            } else if (dir == "top") {
                iy = iy - d4t - XYrD2.arrow.height
            } else if (dir == "bottom") {
                ay = ay + d4t + XYrD2.arrow.height
            }
        }
        pN36B = {
            $w3: ix,
            r85j: iy,
            W06: ax,
            dBT: ay,
            K91: 10,
            G5Fp2: 10
        }
    }
    O67v6 = true;
    maplet.tT3P(pN36B);
    MEvent.trigger(avBubble.overlay, "iw_afteropen", avBubble.overlay);
    return ContentInfo.dom
};

function Luk(e6Y) {
    if (!ContentInfo || !ContentInfo.isVisible()) return;
    if (typeof e6Y != "boolean") e6Y = false;
    var A055S = maplet.toScreenCoordinate(avBubble.LGyL);
    var r = ContentInfo.getRect(false, false);
    if (e6Y) {
        var size = {
            width: avBubble.width,
            height: avBubble.height
        };
        if (size.width < avBubble.minWidth) size.width = avBubble.minWidth;
        if (size.height < avBubble.minHeight) size.height = avBubble.minHeight;
        var D7U16 = maplet.getMaxBubbleSize();
        if (size.width > D7U16.width) size.width = D7U16.width;
        if (size.height > D7U16.height) size.height = D7U16.height;
        avBubble.overlay.info.yK7F.width = size.width;
        avBubble.overlay.info.yK7F.height = size.height;
        r.width = size.width;
        r.height = size.height
    }
    var XYrD2 = ContentInfo.OiR(A055S[0], A055S[1], r.width, r.height, avBubble.FoL, avBubble.mO_, avBubble.H17Wr, avBubble.overlay);
    ContentInfo.show(XYrD2, avBubble.c9O, true, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
    r = ContentInfo.getRect();
    if (!avBubble.sKcR1) {
        avBubble.overlay.info.yK7F.width = r.width;
        avBubble.overlay.info.yK7F.height = r.height
    }
    var oQ4 = 0;
    var d4t = 0;
    if (XYrD2.B040Y && avBubble.overlay.icon) {
        oQ4 = avBubble.overlay.icon.width;
        d4t = avBubble.overlay.icon.height
    }
    var ix = r.min.x;
    var iy = r.min.y;
    var ax = r.max.x;
    var ay = r.max.y;
    with(XYrD2.arrow) {
        if (dir == "left") {
            ix = ix - oQ4
        } else if (dir == "right") {
            ax = ax + oQ4
        } else if (dir == "top") {
            iy = iy - d4t
        } else if (dir == "bottom") {
            ay = ay + d4t
        }
    }
    maplet.fa = false;
    maplet.tT3P({
        $w3: ix,
        r85j: iy,
        W06: ax,
        dBT: ay,
        K91: 10,
        G5Fp2: 10
    })
};

function hideBubble(maplet) {
    if (!ContentInfo) return;
    if (ContentInfo.isVisible()) {
        ContentInfo.setVisible(false);
        MEvent.trigger(maplet, "iw_hide", avBubble.overlay)
    }
    if (typeof maplet != "undefined" && maplet.R93 != null) {
        maplet.R93 = null;
        maplet.refresh()
    } else if (document["mapbar-maplet"] != "undefined" && document["mapbar-maplet"].R93 != null) {
        document["mapbar-maplet"].R93 = null;
        document["mapbar-maplet"].refresh()
    }
    ContentInfo.WNw("zoomin")
};
var Bubble = function () {
    this.xR = "";
    this.c9O = false;
    this.left = 0;
    this.top = 0;
    this.head = new String();
    this.body = new String();
    this.width = 330;
    this.height = 185;
    this.overlay = null;
    this.arrow_tip_xoffset = 27;
    this.arrow_tip_yoffset = 3;
    this.xoffset = 0;
    this.LGyL = "";
    this.tipInitPlace = "top";
    this.FoL = "top";
    this.mO_ = true;
    this.H17Wr = false;
    this.LMBy = true;
    this.P6350 = false;
    this.S22 = "";
    this.T93N = "";
    this.S$28I = false;
    this.Njo = "";
    this.minWidth = 150;
    this.minHeight = 100;
    this.maxHeight = 580;
    this.maxWidth = 1000;
    this.mj034 = true;
    this.sKcR1 = false;
    this.resize = function (w, h) {
        if (h < this.minHeight) h = this.minHeight;
        if (maplet.Cn30.isVisible()) {
            if (h > this.maxHeight) h = this.maxHeight;
            var r = w / h;
            if (r < 0.67) {
                w = 0.67 * h
            }
            if (w > this.maxWidth) w = this.maxWidth
        }
        if (w < this.minWidth) w = this.minWidth;
        var D7U16 = maplet.getMaxBubbleSize();
        if (h > D7U16.height) h = D7U16.height;
        if (w > D7U16.width) w = D7U16.width;
        this.width = w;
        this.height = h;
        Luk(true)
    };
    this.t7G5 = function (head) {
        this.head = head
    };
    this.c860 = function (body) {
        this.body = body
    };
    this.gl = function () {};
    this.calcLatLon = function () {
        this.xR = maplet.toMapCoordinate(this.left, this.top)
    };
    this.syncContentInfoPosition = function () {
        if (ContentInfo) {
            this.left = ContentInfo.q3;
            this.top = ContentInfo.zt
        }
    };
    this.w30_ = function () {
        if (ContentInfo) {
            if (!px) ContentInfo.PF1(false);
            if (this.LGyL && (this.P6350 || ContentInfo.isVisible())) {
                if (this.P6350) this.P6350 = false;
                if (this.LMBy) {
                    var A055S = maplet.toScreenCoordinate(this.LGyL);
                    avBubble.mO_ = true;
                    var XYrD2 = ContentInfo.OiR(A055S[0], A055S[1], ContentInfo.width, ContentInfo.height, avBubble.FoL, avBubble.mO_, this.H17Wr, avBubble.overlay, false, false);
                    this.FoL = XYrD2.$K1u;
                    ContentInfo.show(XYrD2, null, this.S$28I, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
                    if (this.S$28I) this.S$28I = false;
                    if (this.Njo != "" && this.overlay) {
                        MEvent.trigger(this.overlay, "bubble_zoomend", this.Njo == "in" ? "out" : "in");
                        if (this.overlay.info) MEvent.trigger(maplet, "iw_zoomend", this.overlay.info, this.Njo == "in" ? "zoomin" : "zoomout");
                        if (this.Njo == "in") {
                            this.mO_ = true;
                            this.H17Wr = true
                        } else {
                            this.mO_ = false;
                            this.H17Wr = false
                        }
                        this.Njo = ""
                    }
                } else {
                    this.LMBy = true
                }
            }
        }
    }
};
var avBubble = new Bubble();
MInfoWindow.ARROW_STYLE = {
    LARGE: 1,
    SMALL: 0
};
var MInfoWindowTab = function (label, content, focus) {
    var Tf19$ = label;
    var XeAT = content;
    var c020 = null;
    var U$I1i = 0;
    var _683K = true;
    this.e2Dd = typeof focus != "boolean" ? false : focus;
    this.r_91 = -1;
    this.C20g = [];
    this.setVisible = function (visible) {
        _683K = visible
    };
    this.y33Om = function () {
        return _683K
    };
    this.dM5W8 = function (index) {
        U$I1i = index
    };
    this.getIndex = function () {
        return U$I1i
    };
    this.setLabel = function (label) {
        Tf19$ = label
    };
    this.getLabel = function () {
        return Tf19$
    };
    this.setContent = function (content) {
        XeAT = content
    };
    this.getContent = function () {
        return XeAT
    };
    this.toString = function () {
        return "com.mapbar.maplet.MInfoWindowTab"
    };
    this.qx94 = function (dom) {
        c020 = dom
    };
    this.WVMo4 = function () {
        return c020
    };
    this.clone = function () {
        return new MInfoWindowTab(this.getLabel(), this.getContent(), this.e2Dd)
    };
    this.R726S = function () {
        c020 = null;
        _683K = false;
        r_91 = -1
    }
};
MInfoWindowTab.vpUt = function (uy) {
    return typeof uy == "object" && uy && typeof uy.toString == "function" && uy.toString().indexOf("MInfoWindowTab") != -1
};
var s12 = function (maplet) {
    var lU37 = maplet;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.content = "";
    this.dom = null;
    this.qBp3 = null;
    this.Ot56 = null;
    this.A3C4 = null;
    this.D928 = null;
    this.P4O = null;
    this.b$365 = null;
    this.$62 = null;
    this.Fj1 = null;
    this.x3M1 = null;
    this.V08 = null;
    this.r42W6 = null;
    this.xur$ = null;
    this.k81M = "";
    this.t9_1 = [];
    this.tabIndex = -1;
    this.CB1H7 = 0;
    this.E_t_X = 0;
    this.t7r3 = 0;
    this.g$3 = 0;
    this.d7N2 = 0;
    this.YxfD = null;
    this.onZoomOut = null;
    this.onZoomIn = null;
    this.onClosed = null;
    this.h1m = null;
    this.b6F = null;
    this.n4C6 = null;
    this.yEO6 = {
        type: "zoomin",
        q9: null
    };
    this.VJ6 = 0;
    this.AE5i9 = 0;
    this.initialize = function (O1_u) {
        O1_u = O1_u || {};
        this.v$8a = typeof O1_u.PvcY != 'number' ? MInfoWindow.ARROW_STYLE.SMALL : O1_u.PvcY;
        this.dom = document.createElement("TABLE");
        this.Par3();
        this.dom.cellSpacing = 0;
        this.dom.cellPadding = 0;
        this.dom.border = 0;
        this.dom.style.cssText = this.J63("TIP_TABLE");
        this.dom.setAttribute(XLf2G, true);
        var r$8 = this.dom.insertRow(-1);
        var H5X14 = r$8.insertCell(-1);
        H5X14.vAlign = "top";
        H5X14.style.cssText = this.J63("TITLE_CONTAINER_TD");
        this.qBp3 = this.L5fv();
        H5X14.appendChild(this.qBp3);
        H5X14 = this.dom.insertRow(-1).insertCell(-1);
        H5X14.style.cssText = this.J63("TAB_TD");
        this.P4O = this.l_Q();
        this.P4O.style.cssText = this.J63("TAB_CONTAINER");
        H5X14.appendChild(this.P4O);
        this.P4O.style.display = "none";
        this.dom.rows[1].style.display = "none";
        r$8 = this.dom.insertRow(-1);
        H5X14 = r$8.insertCell(-1);
        H5X14.vAlign = "top";
        H5X14.style.cssText = this.J63("CONTENT_TD");
        this.x3M1 = this.uy088();
        H5X14.appendChild(this.x3M1);
        this._0225();
        var parentNode = lU37 ? lU37.sF : document.body;
        parentNode.appendChild(this.dom);
        parentNode.appendChild(this.WsMI());
        parentNode.appendChild(this.E82());
        if (lU37) {
            lU37.Cn30.appendChild(this.V08)
        }
    };
    this.E82 = function () {
        this.xur$ = document.createElement("DIV");
        this.xur$.style.cssText = this.J63("TIP_BORDER");
        return this.xur$
    };
    this.WsMI = function () {
        this.r42W6 = document.createElement("DIV");
        this.r42W6.style.cssText = this.J63(this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? "ARROW_DIV" : "ARROW_DIV_S");
        return this.r42W6
    };
    this.uy088 = function () {
        var dom = document.createElement("DIV");
        dom.style.cssText = this.J63("CONTENT_DIV");
        return dom
    };
    this._0225 = function () {
        var v1UK = this.J63('SHADOW_NORMAL'),
            $tG = this.J63('SHADOW_PART'),
            _682R = this.J63('SHADOW_ANGLE'),
            X0k0 = this.J63('SHADOW_BORDER_H'),
            u21Q5 = this.J63(this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 'SHADOW_ARROW' : 'SHADOW_ARROW_S');
        this.V08 = this.Nil(v1UK);
        this.Bcf6L = this.Nil(_682R + 'top:0;left:0;');
        this.kMGp8 = this.n07I6(v1UK + 'top:0;');
        this.X579(this.Bcf6L, this.kMGp8);
        this._071 = this.Nil(_682R + 'top:0;');
        this.C64 = this.n07I6(v1UK + 'top:0;');
        this.X579(this._071, this.C64);
        this.$435 = this.Nil(_682R + 'width:50px;left:0;');
        this.qO9 = this.n07I6(v1UK + 'left:0;top:-308px;');
        this.X579(this.$435, this.qO9);
        this.Y1X95 = this.Nil(_682R + 'width:55px;');
        this.QLfI = this.n07I6(v1UK + 'left:-711px;top:-308px;');
        this.X579(this.Y1X95, this.QLfI);
        this.R58 = this.Nil(X0k0 + 'top:0;');
        this.R272 = this.n07I6(v1UK + 'top:0;left:-350px;');
        this.X579(this.R58, this.R272);
        this.vrQ$9 = this.Nil(X0k0 + 'left:50px;');
        this.dUdy = this.n07I6(v1UK + 'top:-308px;left:-280px;');
        this.X579(this.vrQ$9, this.dUdy);
        this.y25 = this.Nil(X0k0);
        this.J_S7w = this.n07I6(v1UK + 'top:-308px;left:-280px;');
        this.X579(this.y25, this.J_S7w);
        this.I3L = this.Nil($tG + 'top:30px;left:0;');
        this.r7179 = this.n07I6(v1UK + 'top:-30px;');
        this.X579(this.I3L, this.r7179);
        this.NG9 = this.Nil($tG + 'top:30px;');
        this.L4Q2 = this.n07I6(v1UK + 'top:-30px;');
        this.X579(this.NG9, this.L4Q2);
        this.iSu9A = this.Nil($tG + 'top:30px;');
        this.uY7e = this.n07I6(v1UK + 'top:-30px;left:-330px;');
        this.X579(this.iSu9A, this.uY7e);
        this.mm0u2 = this.Nil(u21Q5);
        this.$7r4 = this.n07I6(v1UK + 'top:-308px;left:' + (this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? '-77px;' : '-217px;'));
        this.X579(this.mm0u2, this.$7r4);
        this.V08.style.display = 'none'
    };
    this.l_Q = function () {
        var ul = document.createElement("UL");
        this.$62 = document.createElement("LI");
        this.$62.style.cssText = this.J63("TAB_NAV_L");
        this.b$365 = document.createElement("LI");
        this.b$365.style.cssText = this.J63("TAB_SPACER");
        this.Fj1 = document.createElement("LI");
        this.Fj1.style.cssText = this.J63("TAB_NAV_R");
        ul.appendChild(this.$62);
        ul.appendChild(this.b$365);
        ul.appendChild(this.Fj1);
        return ul
    };
    this.L5fv = function () {
        var C8d38 = this.J63("TITLE_INFO");
        var SQ0 = document.createElement("TABLE");
        SQ0.width = "100%";
        SQ0.cellSpacing = 0;
        SQ0.cellPadding = 0;
        SQ0.border = 0;
        SQ0.style.cssText = this.J63("TITLE_TABLE");
        var r$8 = SQ0.insertRow(-1);
        this.Ot56 = r$8.insertCell(-1);
        this.Ot56.vAlign = "top";
        this.Ot56.style.cssText = this.J63("TITLE_TD");
        var H5X14 = r$8.insertCell(-1);
        H5X14.style.cssText = this.J63("TITLE_SPACER");
        H5X14.innerHTML = "&nbsp;";
        this.A3C4 = r$8.insertCell(-1);
        this.A3C4.vAlign = "top";
        this.A3C4.style.cssText = this.J63("RT_BTN_TD");
        this.A3C4.innerHTML = this.J63("ZOOMIN_IMG");
        this.A3C4.style.width = "0px";
        this.A3C4.style.display = "none";
        this.l21P();
        this.D928 = r$8.insertCell(-1);
        this.D928.vAlign = "top";
        this.D928.style.cssText = this.J63("RT_BTN_TD");
        this.D928.innerHTML = this.J63("CLOSE_IMG");
        this.h1m = MEvent.bindDom(this.D928, "click", this, this.R3De2);
        return SQ0
    };
    this.J6N = function () {
        return {
            width: this.xur$.offsetWidth,
            height: this.xur$.offsetHeight
        }
    };
    this.getRect = function (e$P, bArrow) {
        if (typeof e$P != "boolean") e$P = true;
        if (typeof bArrow != "boolean") bArrow = true;
        var dom = e$P ? this.xur$ : this.dom;
        var ix = r0JS(this.dom.style.left);
        var iy = r0JS(this.dom.style.top);
        var ax = ix + this.dom.offsetWidth;
        var ay = iy + this.dom.offsetHeight;
        if (bArrow) {
            if (this.k81M == "LEFT") {
                ix = r0JS(this.r42W6.style.left)
            } else if (this.k81M == "RIGHT") {
                ax += this.r42W6.offsetWidth
            } else if (this.k81M == "TOP") {
                iy = r0JS(this.r42W6.style.top)
            } else if (this.k81M == "BOTTOM") {
                ay += this.r42W6.offsetHeight
            }
        }
        return {
            min: {
                x: ix,
                y: iy
            },
            max: {
                x: ax,
                y: ay
            },
            width: ax - ix,
            height: ay - iy
        }
    };
    this.n32 = function (title, content) {
        if (!this.dom) this.initialize();
        var g598D = -100000;
        var XYrD2 = {
            FoY: g598D,
            h$n: g598D,
            D23P: g598D,
            _V23l: g598D,
            width: avBubble.minWidth,
            height: avBubble.minHeight,
            arrow: {
                dir: 'bottom'
            }
        };
        this.show(XYrD2, null, false);
        this.setTitle(title);
        this.setContent(content);
        this.PF1(true);
        var h = 0;
        var w = 0;
        var c = this.x3M1.firstChild;
        if (c && c.offsetWidth && this.x3M1.childNodes.length == 1 && (_getStyle(c, "width") != "auto" || c.tagName == "IMG")) {
            w = c.offsetWidth + r0JS(_getStyle(c, "marginLeft", "margin-left")) + r0JS(_getStyle(c, "marginRight", "margin-right"));
            h = c.offsetHeight + r0JS(_getStyle(c, "marginTop", "margin-top")) + r0JS(_getStyle(c, "marginBottom", "margin-bottom"));
            if (px) {
                if (!P7v61) {
                    w = w + r0JS(_getStyle(this.x3M1, "paddingLeft", "padding-left")) * 2;
                    h = h + r0JS(_getStyle(this.x3M1, "paddingTop", "padding-top")) * 2
                } else {
                    h += 1
                }
            }
            this.x3M1.style.width = w + "px";
            this.x3M1.style.height = h + "px";
            this.dom.style.width = this.x3M1.offsetWidth + r0JS(this.dom.style.borderWidth) * 2 + "px";
            h = this.dom.offsetHeight;
            w = this.dom.offsetWidth
        }
        this.PF1(false);
        this.setVisible(false);
        return {
            width: w,
            height: h
        }
    };
    this.OiR = function (x, y, width, height, $K1u, vNp09, G23, overlay, a0a, vG10o) {
        if (typeof width != "number") width = this.J63("TIP_DEFAULT_INFO").width;
        if (typeof height != "number") height = this.J63("TIP_DEFAULT_INFO").height;
        if (typeof $K1u != "string") $K1u = "auto";
        if (typeof vNp09 != "boolean") vNp09 = false;
        if (typeof G23 != "boolean") G23 = false;
        if (typeof a0a != "boolean") a0a = true;
        if (typeof vG10o != "boolean") vG10o = true;
        var FoY = 0;
        var h$n = 0;
        var D23P = 0;
        var _V23l = 0;
        var direction = "bottom";
        var e1MDQ = 0;
        var jMN5J = 0;
        var B040Y = false;
        var $0q = false;
        if (lU37) {
            var sT = lU37.width;
            var a54 = lU37.height;
            var yPnu = this.J63(this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? "ARROW_INFO" : "ARROW_INFO_S");
            var NXY = width + yPnu.$69;
            var $_Oh9 = height + yPnu.$0ABf;
            var q361 = width / 2;
            var D60 = height / 2;
            var offsetX = 0;
            var offsetY = 0;
            if (typeof overlay == "object" && overlay) {
                var s = overlay.toString();
                B040Y = s.indexOf("MMarker") != -1;
                $0q = s.indexOf("MPolyline") != -1
            }
            if (B040Y && overlay.icon) {
                offsetX = overlay.icon.width / 2;
                offsetY = overlay.icon.height / 2;
                x = x - overlay.icon.anchorX + offsetX;
                y = y - overlay.icon.anchorY + offsetY
            }
            if (G23) {
                h$n = y - D60;
                FoY = x - q361
            } else {
                if (y - D60 <= 0) h$n = 5;
                else if (y + D60 > a54) h$n = a54 - height - 5;
                else h$n = y - D60;
                FoY = x - q361
            }
            var w23 = false;
            var E0N1 = false;
            var xj8 = false;
            var F01I = false;
            var iS33l = {
                min: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                }
            };
            var H43 = lU37.getControlRect();
            var c_a6 = lU37.getOverviewRect();
            var A0P8a = x >= NXY && y >= yPnu._5Q && y + yPnu._5Q <= a54;
            if (A0P8a) {
                var ax = x - offsetX - yPnu.$69;
                var zB = ax - width;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth))) zB += parseInt(this.dom.style.borderRightWidth);
                iS33l = {
                    min: {
                        x: zB,
                        y: h$n
                    },
                    max: {
                        x: zB + NXY,
                        y: h$n + $_Oh9
                    }
                };
                if (a0a) A0P8a = !_isRectint(iS33l, H43);
                if (vG10o && A0P8a) A0P8a = !_isRectint(iS33l, c_a6)
            }
            var SIAR4 = y >= $_Oh9 && x >= yPnu.k$05 && x <= sT - yPnu.k$05;
            if (SIAR4) {
                var ay = y - offsetY - yPnu.$0ABf;
                var zF = ay - height;
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) zF += parseInt(this.dom.style.borderBottomWidth);
                iS33l = {
                    min: {
                        x: FoY,
                        y: zF
                    },
                    max: {
                        x: FoY + NXY,
                        y: zF + $_Oh9
                    }
                };
                if (a0a) SIAR4 = !_isRectint(iS33l, H43);
                if (vG10o && SIAR4) SIAR4 = !_isRectint(iS33l, c_a6)
            }
            var JI76 = sT - x >= NXY && y >= yPnu._5Q && y + yPnu._5Q <= a54;
            if (JI76) {
                var ax = x + offsetX;
                var zB = ax + yPnu.$69;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) zB -= parseInt(this.dom.style.borderLeftWidth);
                iS33l = {
                    min: {
                        x: zB,
                        y: h$n
                    },
                    max: {
                        x: zB + NXY,
                        y: h$n + $_Oh9
                    }
                };
                if (a0a) JI76 = !_isRectint(iS33l, H43);
                if (vG10o && JI76) JI76 = !_isRectint(iS33l, c_a6)
            }
            var c75kX = a54 - y >= $_Oh9 && x >= yPnu.k$05 && x <= sT - yPnu.k$05;
            if (c75kX) {
                var ay = y + offsetY;
                var zF = ay + yPnu.$0ABf;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth))) zF -= parseInt(this.dom.style.borderTopWidth);
                iS33l = {
                    min: {
                        x: FoY,
                        y: zF
                    },
                    max: {
                        x: FoY + NXY,
                        y: zF + $_Oh9
                    }
                };
                if (a0a) c75kX = !_isRectint(iS33l, H43);
                if (vG10o && c75kX) c75kX = !_isRectint(iS33l, c_a6)
            }
            if ($K1u != "auto") {
                if (vNp09) {
                    if ($K1u == "left") w23 = true;
                    else if ($K1u == "top") E0N1 = true;
                    else if ($K1u == "right") xj8 = true;
                    else if ($K1u == "bottom") F01I = true
                } else {
                    if ($K1u == "left" && A0P8a) w23 = true;
                    else if ($K1u == "top" && SIAR4) E0N1 = true;
                    else if ($K1u == "right" && JI76) xj8 = true;
                    else if ($K1u == "bottom" && c75kX) F01I = true;
                    else $K1u = "auto"
                }
            }
            if ($K1u == "auto") {
                w23 = A0P8a;
                E0N1 = SIAR4;
                xj8 = JI76;
                F01I = c75kX
            }
            var Y539T = "";
            w23 = false;
            E0N1 = true;
            xj8 = false;
            F01I = false;
            if (w23) {
                Y539T = "left";
                D23P = x - offsetX - yPnu.$69;
                _V23l = y - yPnu._5Q / 2;
                FoY = D23P - width;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth))) FoY += parseInt(this.dom.style.borderRightWidth);
                if (_V23l < h$n + 5) h$n = _V23l - 5;
                else if (_V23l + yPnu._5Q >= h$n + height - 5) h$n = _V23l - height + yPnu._5Q + 5
            } else if (xj8) {
                Y539T = "right";
                direction = "left";
                D23P = x + offsetX;
                _V23l = y - yPnu._5Q / 2;
                FoY = D23P + yPnu.$69;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) FoY -= parseInt(this.dom.style.borderLeftWidth);
                if (_V23l < h$n + 5) h$n = _V23l - 5;
                else if (_V23l + yPnu._5Q >= h$n + height - 5) h$n = _V23l - height + yPnu._5Q + 5
            } else if (E0N1 || (!xj8 && !E0N1 && !w23 && !F01I)) {
                Y539T = "top";
                direction = "bottom";
                D23P = x - yPnu.k$05 / 2;
                _V23l = y - offsetY - yPnu.$0ABf;
                h$n = _V23l - height;
                if ((!xj8 && !E0N1 && !w23 && !F01I)) {
                    if (FoY == 5 || (FoY == sT - width - 5)) {
                        FoY = x - q361
                    }
                }
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) h$n += parseInt(this.dom.style.borderBottomWidth);
                if (D23P < FoY + 5) FoY = D23P - 5;
                else if (D23P + yPnu.k$05 >= FoY + width - 5) FoY = D23P - width + yPnu.k$05 + 5
            } else if (F01I) {
                Y539T = "bottom";
                direction = "top";
                D23P = x - yPnu.k$05 / 2;
                _V23l = y + offsetY;
                h$n = _V23l + yPnu.$0ABf;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth))) h$n -= parseInt(this.dom.style.borderTopWidth);
                if (D23P < FoY + 5) FoY = D23P - 5;
                else if (D23P + yPnu.k$05 >= FoY + width - 5) FoY = D23P - width + yPnu.k$05 + 5
            }
            if (Y539T == "left" || Y539T == "right") {
                e1MDQ = yPnu.$69;
                jMN5J = yPnu._5Q
            } else {
                e1MDQ = yPnu.k$05;
                jMN5J = yPnu.$0ABf
            }
        }
        return {
            FoY: FoY + (this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 30 : 0),
            h$n: h$n,
            D23P: D23P + (this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 45 : 15),
            _V23l: _V23l,
            width: width,
            height: height,
            $K1u: Y539T,
            arrow: {
                dir: 'bottom',
                width: e1MDQ,
                height: jMN5J
            },
            B040Y: B040Y,
            $0q: $0q
        }
    };
    this.show = function (XYrD2, yh4, _FB0R, xoffset, yoffset) {
        this.x = XYrD2.FoY;
        this.y = XYrD2.h$n;
        this.width = XYrD2.width;
        this.height = XYrD2.height;
        if (!this.dom) this.initialize();
        this.VJ6 = (typeof xoffset != "number") ? 0 : xoffset;
        this.AE5i9 = (typeof yoffset != "number") ? 0 : yoffset;
        this.dom.style.left = this.x + (XYrD2.$K1u == "top" || XYrD2.$K1u == "bottom" ? this.VJ6 : 0) + "px";
        this.dom.style.top = this.y + (XYrD2.$K1u == "left" || XYrD2.$K1u == "right" ? this.AE5i9 : 0) + "px";
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.x3M1.style.width = "1px";
        this.x3M1.style.height = "1px";
        if (!a$80) this.x3M1.style.overflow = "hidden";
        this.setVisible(true);
        if (typeof yh4 == "boolean") this.setZMBtnVisible(yh4);
        this.u3N2(XYrD2.D23P, XYrD2._V23l, XYrD2.arrow.dir);
        this.bYh1(_FB0R);
        if (!a$80) this.x3M1.style.overflow = "auto"
    };
    this.u3N2 = function (x, y, direction) {
        direction = direction.toUpperCase();
        this.k81M = direction;
        var h01n = "";
        var yPnu = this.J63(this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? "ARROW_INFO" : "ARROW_INFO_S");
        h01n = this.J63("ARROW_" + direction + (this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? "_CHILD" : "_CHILD_S"));
        var width = yPnu.$69;
        var height = yPnu._5Q;
        if (direction == "TOP" || direction == "BOTTOM") {
            width = yPnu.k$05;
            height = yPnu.$0ABf
        }
        this.r42W6.innerHTML = h01n;
        this.r42W6.style.left = x + (direction == "TOP" || direction == "BOTTOM" ? this.VJ6 : 0) + "px";
        this.r42W6.style.top = y + (direction == "RIGHT" || direction == "LEFT" ? this.AE5i9 : 0) + "px";
        this.r42W6.style.width = width + "px";
        this.r42W6.style.height = height + "px";
        this.r42W6.style.display = ""
    };
    this._85 = function () {
        this.r42W6.style.display = "none"
    };
    this.bYh1 = function (_FB0R) {
        if (!this.isVisible()) return;
        var th = this.qBp3.offsetHeight;
        if (!isNaN(parseInt(this.qBp3.style.marginTop))) th += parseInt(this.qBp3.style.marginTop);
        if (!isNaN(parseInt(this.qBp3.style.marginBottom))) th += parseInt(this.qBp3.style.marginBottom);
        var h = this.dom.offsetHeight - th - this.CB1H7;
        if (P7v61 || _36s2 || M7$6 || Iv4) {
            if (!isNaN(parseInt(this.x3M1.style.paddingTop))) h -= r0JS(this.x3M1.style.paddingTop);
            if (!isNaN(parseInt(this.x3M1.style.paddingBottom))) h -= r0JS(this.x3M1.style.paddingBottom)
        }
        if (!isNaN(parseInt(this.dom.style.borderTopWidth))) h -= parseInt(this.dom.style.borderTopWidth);
        if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) h -= parseInt(this.dom.style.borderBottomWidth);
        var w = this.dom.offsetWidth;
        if (P7v61 || M7$6 || Iv4 || _36s2) {
            if (!isNaN(parseInt(this.x3M1.style.paddingLeft))) w -= parseInt(this.x3M1.style.paddingLeft);
            if (!isNaN(parseInt(this.x3M1.style.paddingRight))) w -= parseInt(this.x3M1.style.paddingRight)
        }
        w = w - r0JS(this.dom.style.borderWidth) * 2;
        this.x3M1.style.height = h + "px";
        this.x3M1.style.width = w + "px";
        if (this.x3M1.scrollWidth > this.x3M1.offsetWidth) {
            if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) w -= parseInt(this.dom.style.borderLeftWidth);
            if (!isNaN(parseInt(this.dom.style.borderRightWidth))) w -= parseInt(this.dom.style.borderRightWidth);
            this.x3M1.style.width = w + "px"
        }
        if (typeof _FB0R != "boolean") _FB0R = true;
        if (this.t9_1.length > 0 && _FB0R) {
            this.CM2R1();
            this.J$7();
            var U91 = this.tabIndex;
            this.tabIndex = -1;
            if (U91 != -1) {
                if (!this.t9_1[U91].y33Om()) this.setCurrentTab(0);
                else this.setCurrentTab(U91)
            }
        }
        var LqK48 = this.k81M == "TOP" || this.k81M == "BOTTOM" ? this.VJ6 : 0;
        var R3I = this.k81M == "RIGHT" || this.k81M == "LEFT" ? this.AE5i9 : 0;
        this.Y115();
        this.xur$.style.width = this.width + "px";
        this.xur$.style.height = this.height + "px";
        this.xur$.style.left = this.x + LqK48 + "px";
        this.xur$.style.top = this.y + R3I + "px";
        if (iJH) {
            lU37.sF.moveTo(1, 0);
            lU37.sF.moveTo(0, 0)
        }
    };
    this.J4As = function () {
        return this.dom
    };
    this.N44 = function (_b31T) {
        if (!this.J4As()) return;
        if (this.t9_1.length >= this.J63("TAB_AMOUNT")) return false;
        if (MInfoWindowTab.vpUt(_b31T)) {
            if (this.t9_1.length == 0) {
                var o22 = [];
                if (this.content != "") {
                    o22.push(new MInfoWindowTab(this.J63("TAB_DEFAULT_LABEL"), this.content, !_b31T.e2Dd));
                    this.x3M1.innerHTML = ""
                }
                if (o22.length == 0 && !_b31T.e2Dd) _b31T.e2Dd = true;
                o22.push(_b31T);
                this.pu4(o22)
            } else {
                this.xcD(_b31T, -1)
            }
        }
    };
    this.R7$ = function () {
        if (!this.J4As()) return;
        if (this.t9_1.length > 0) {
            var o22 = this.t9_1;
            for (var i = o22.length - 1; i >= 0; i--) {
                this.tR50(i, false)
            }
            this.t9_1 = []
        }
    };
    this.W9LK7 = function () {
        this.tabIndex = -1;
        this.d7N2 = 0;
        this.YxfD = null
    };
    this.tR50 = function (index, lt3U2) {
        if (!this.J4As()) return;
        if (this.P4O && this.t9_1.length > index) {
            if (typeof lt3U2 != "boolean") lt3U2 = true;
            var v3361 = [];
            var tR50 = null;
            var L73b1 = this.tabIndex;
            this.tabIndex = -1;
            var __1o = 0;
            for (var i = 0; i < this.t9_1.length; i++) {
                if (i != index) {
                    var $FV = this.t9_1[i];
                    var U91 = $FV.getIndex();
                    v3361.push($FV);
                    $FV.dM5W8(v3361.length - 1);
                    var dom = $FV.WVMo4();
                    if (dom) dom.setAttribute("tabIndex", $FV.getIndex());
                    if (U91 == L73b1) __1o = $FV.getIndex()
                } else {
                    tR50 = this.t9_1[i]
                }
            }
            if (tR50) {
                this.t9_1 = v3361;
                var jw8 = tR50.WVMo4();
                if (tR50.C20g.length > 0) {
                    for (var i = 0; i < tR50.C20g.length; i++) {
                        var item = tR50.C20g[i];
                        MEvent.removeBuiltInListener(jw8, item.event, item.q9)
                    }
                }
                if (jw8) {
                    _removeNode(jw8)
                }
            }
            this.CM2R1();
            this.J$7();
            if (this.t9_1.length > __1o && !this.t9_1[__1o].y33Om()) __1o = 0;
            if (lt3U2) this.setCurrentTab(__1o);
            if (this.t9_1.length == 0) {
                this.w485M()
            }
        }
    };
    this.w485M = function () {
        this.CB1H7 = 0;
        this.dom.rows[1].style.display = "none";
        this.W9LK7();
        if (this.content) this.setContent(this.content);
        this.bYh1()
    };
    this.xcD = function (G9y, fWb$) {
        if (!MInfoWindowTab.vpUt(G9y)) {
            return false
        }
        var $h9B = this.t9_1.length;
        var B9730 = this.b$365;
        if (!MInfoWindowTab.vpUt(fWb$) || !fWb$.WVMo4()) {
            fWb$ = null
        }
        if (fWb$) {
            B9730 = fWb$.WVMo4();
            var Xc1 = this.tabIndex == fWb$.getIndex();
            var k71L = [];
            for (var i = 0; i < this.t9_1.length; i++) {
                var item = this.t9_1[i];
                if (item == fWb$) {
                    k71L.push(G9y);
                    G9y.dM5W8(k71L.length - 1)
                }
                k71L.push(item);
                item.dM5W8(k71L.length - 1);
                var jw8 = item.WVMo4();
                if (jw8) jw8.setAttribute("tabIndex", item.getIndex())
            }
            if (Xc1) this.tabIndex = fWb$.getIndex();
            this.t9_1 = k71L
        } else {
            this.t9_1.push(G9y);
            G9y.dM5W8(this.t9_1.length - 1)
        }
        var jw8 = this.xaJk5(G9y, B9730);
        if (isNaN(parseInt(this.P4O.style.height))) {
            this.P4O.style.height = parseInt(this.P4O.parentNode.clientHeight) + "px"
        }
        if (G9y.e2Dd) this.setCurrentTab(G9y.getIndex());
        this.J$7()
    };
    this.Par3 = function () {
        MEvent.bindDom(this.dom, 'contextmenu', this, function (e) {
            k1FD(e);
            if (e.stopPropagation) e.stopPropagation();
            else e.cancelBubble = true; if (lU37.xc) lU37.xc.hide()
        })
    };
    this.xaJk5 = function (_b31T, B9730) {
        var jw8 = document.createElement("LI");
        jw8.innerHTML = _b31T.getLabel();
        jw8.style.cssText = this.J63("TAB_TEXT_BLUR");
        jw8.setAttribute("tabIndex", _b31T.getIndex());
        _b31T.qx94(jw8);
        this.P4O.insertBefore(jw8, B9730);
        _b31T.C20g.push({
            event: "click",
            q9: MEvent.bindDom(jw8, "click", this, this.HsS02)
        });
        if (this.t9_1.length == 1) {
            if (this.E_t_X == 0) {
                this.E_t_X = jw8.clientHeight;
                if (parseInt(jw8.style.paddingTop)) this.E_t_X -= parseInt(jw8.style.paddingTop);
                if (parseInt(jw8.style.paddingBottom)) this.E_t_X -= parseInt(jw8.style.paddingBottom)
            }
            if (this.t7r3 == 0) {
                this.t7r3 = jw8.clientHeight
            }
        }
        return jw8
    };
    this.J$7 = function () {
        var o22 = this.t9_1;
        this.$489N(true);
        this.wng16(true);
        var kk_ = this.$62.firstChild.offsetWidth;
        var X45D3 = this.Fj1.firstChild.offsetWidth;
        var n44aG = null;
        var _b31T = null;
        for (var i = o22.length - 1; i >= 0; i--) {
            _b31T = o22[i];
            if (_b31T.y33Om()) {
                var jw8 = _b31T.WVMo4();
                if (jw8) {
                    var HPb1 = jw8.clientWidth;
                    if (jw8.offsetTop >= jw8.offsetHeight * 2 - 5) {
                        P2J3 = 0
                    } else {
                        var P2J3 = this.x$q(true);
                        if (jw8.offsetTop == 0) P2J3 += HPb1;
                        else if (jw8.offsetLeft != 0) P2J3 = 0
                    } if (HPb1 >= P2J3) {
                        if (P2J3 <= 20) {
                            this.F82J(_b31T, false);
                            P2J3 = 0
                        } else {
                            P2J3 = P2J3 - parseInt(jw8.style.paddingLeft) - parseInt(jw8.style.paddingRight);
                            jw8.style.width = P2J3 + "px";
                            n44aG = _b31T
                        }
                    } else {
                        n44aG = _b31T
                    } if (P2J3 != 0) break
                }
            }
        }
        this.$489N(false);
        this.wng16(false);
        if (o22.length > 0) {
            this.$489N(!o22[0].y33Om());
            this.wng16(!o22[o22.length - 1].y33Om())
        }
        if (n44aG && n44aG.WVMo4()) {
            this.YxfD = n44aG;
            var dom = n44aG.WVMo4();
            var width = dom.clientWidth;
            if (!isNaN(parseInt(dom.style.paddingLeft))) width -= parseInt(dom.style.paddingLeft);
            if (!isNaN(parseInt(dom.style.paddingRight))) width -= parseInt(dom.style.paddingRight);
            if (!this.ft3vq()) {
                width += kk_
            }
            if (!this.l8$_o()) {
                width += X45D3
            }
            if (this.tabIndex == n44aG.getIndex()) width -= 2;
            dom.style.width = width + "px"
        }
        for (var i = 0; i < o22.length; i++) {
            _b31T = o22[i];
            if (_b31T.y33Om()) {
                _b31T.r_91 = this.d7N2;
                if (_b31T.WVMo4()) {
                    _b31T.WVMo4().style.height = this.E_t_X + "px"
                }
            }
        }
        this.ON228()
    };
    this.F82J = function (_b31T, visible) {
        var jw8 = _b31T.WVMo4();
        if (jw8) {
            if (visible) {
                jw8.style.cssText = this.J63("TAB_TEXT_BLUR")
            } else {
                jw8.style.width = "0px";
                jw8.style.padding = "0px"
            }
            _b31T.setVisible(visible)
        }
    };
    this.CM2R1 = function () {
        var o22 = this.t9_1;
        for (var i = 0; i < o22.length; i++) {
            this.F82J(o22[i], true)
        }
    };
    this.wng16 = function (visible) {
        if (!this.n4C6) this.n4C6 = MEvent.bindDom(this.Fj1, "click", this, this.a51JH);
        if (visible) {
            this.Fj1.innerHTML = this.J63("TAB_NAV_R_CHILD");
            this.Fj1.style.cursor = "pointer";
            this.Fj1.style.width = this.J63("TAB_NAV_INFO").width + "px"
        } else {
            this.Fj1.innerHTML = "";
            this.Fj1.style.cursor = "";
            this.Fj1.style.width = "0px"
        }
    };
    this.$489N = function (visible) {
        if (!this.b6F) this.b6F = MEvent.bindDom(this.$62, "click", this, this.De5$Q);
        if (visible) {
            this.$62.innerHTML = this.J63("TAB_NAV_L_CHILD");
            this.$62.style.cursor = "pointer";
            this.$62.style.width = this.J63("TAB_NAV_INFO").width + "px"
        } else {
            this.$62.innerHTML = "";
            this.$62.style.cursor = "";
            this.$62.style.width = "0px"
        }
    };
    this.ON228 = function () {
        var P2J3 = this.x$q(false);
        if (P2J3 < 0) P2J3 = 0;
        this.b$365.style.width = P2J3 + "px";
        this.b$365.style.height = this.t7r3 + "px"
    };
    this.ft3vq = function () {
        if (this.$62.firstChild) return this.$62.firstChild.offsetWidth > 0;
        else return false
    };
    this.l8$_o = function () {
        if (this.Fj1.firstChild) return this.Fj1.firstChild.offsetWidth > 0;
        else return false
    };
    this.x$q = function () {
        var width = 0;
        if (this.P4O) {
            if (this.t9_1.length > 0) {
                var o22 = this.t9_1;
                var _b31T = null;
                var jw8 = null;
                for (var i = o22.length - 1; i >= 0; i--) {
                    _b31T = o22[i];
                    jw8 = _b31T.WVMo4();
                    if (jw8 && jw8.offsetTop == this.$62.offsetTop) {
                        break
                    }
                }
                if (jw8) {
                    if (_b31T.getIndex() == 0 && jw8.offsetTop != this.$62.offsetTop) jw8 = this.$62;
                    width = this.P4O.parentNode.offsetWidth - jw8.offsetLeft - jw8.offsetWidth - this.Fj1.offsetWidth
                }
            }
        }
        return width
    };
    this.pu4 = function (o22) {
        if (this.P4O && o22.length > 0) {
            if (this.dom.rows[1].style.display == "none") {
                this.dom.rows[1].style.display = ""
            }
            if (this.P4O.style.display == "none") {
                this.P4O.style.display = ""
            }
            for (var i = 0; i < o22.length; i++) {
                this.xcD(o22[i])
            }
            this.k4N();
            var height = this.dom.rows[1].clientHeight;
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingTop))) height -= parseInt(this.dom.rows[1].style.paddingTop);
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingBottom))) height -= parseInt(this.dom.rows[1].style.paddingBottom);
            this.dom.rows[1].style.height = height + "px";
            this.CB1H7 = height;
            this.bYh1()
        }
    };
    this.k4N = function () {
        if (this.g$3 == 0) {
            var jw8 = this.t9_1[0].WVMo4();
            var borderWidth = this.tabIndex == 0 ? parseInt(jw8.style.borderTopWidth) : parseInt(jw8.style.borderBottomWidth);
            if (isNaN(borderWidth)) borderWidth = 0;
            this.g$3 = jw8.offsetHeight - parseInt(jw8.style.paddingTop) - borderWidth
        }
        this.$62.style.height = this.g$3 + "px";
        this.$62.style.lineHeight = this.g$3 + "px";
        this.Fj1.style.height = this.g$3 + "px";
        this.Fj1.style.lineHeight = this.g$3 + "px"
    };
    this.tL9 = function (_b31T) {
        if (!_b31T.y33Om()) return;
        var dom = _b31T.WVMo4();
        if (dom) {
            var _5a = {
                width: dom.style.width,
                height: dom.style.height
            };
            dom.style.cssText = this.J63("TAB_TEXT_BLUR");
            dom.style.width = _5a.width;
            dom.style.height = _5a.height;
            this.tabIndex = -1
        }
    };
    this.w05 = function (_b31T) {
        var dom = _b31T.WVMo4();
        if (dom) {
            var _5a = {
                width: dom.style.width,
                height: dom.style.height
            };
            dom.style.cssText = this.J63("TAB_TEXT_FOCUS");
            dom.style.width = _5a.width;
            dom.style.height = _5a.height;
            this.tabIndex = _b31T.getIndex();
            var content = _b31T.getContent();
            if (typeof content == "string") {
                this.x3M1.innerHTML = content
            } else if (typeof content == "object" && typeof content.tagName != "undefined") {
                this.x3M1.innerHTML = "";
                this.x3M1.appendChild(content)
            }
        }
    };
    this.setCurrentTab = function (index) {
        var o22 = this.t9_1;
        if (this.tabIndex == index || o22.length <= 0 || index < 0 || index >= o22.length) return;
        if (this.tabIndex != -1) this.tL9(this.t9_1[this.tabIndex]);
        var sGdC6 = o22[index];
        if (!sGdC6.y33Om()) {
            if (sGdC6.r_91 != -1) {
                this.d7N2 = sGdC6.r_91;
                for (var i = 0; i < o22.length; i++) {
                    var _b31T = o22[i];
                    if (_b31T.r_91 == sGdC6.r_91) {
                        this.F82J(_b31T, true)
                    } else {
                        this.F82J(_b31T, false)
                    }
                }
                this.J$7()
            } else {
                while (!sGdC6.y33Om()) {
                    this.a51JH(null)
                }
            }
        }
        if (sGdC6.y33Om()) {
            this.w05(sGdC6)
        }
    };
    this.De5$Q = function (e) {
        if (!this.ft3vq()) return;
        this.d7N2--;
        var o22 = this.t9_1;
        var sGdC6 = null;
        if (this.tabIndex != -1) this.tL9(this.t9_1[this.tabIndex]);
        for (var i = o22.length - 1; i >= 0; i--) {
            var _b31T = o22[i];
            if (_b31T.r_91 == this.d7N2) {
                this.F82J(_b31T, true);
                sGdC6 = _b31T
            } else {
                this.F82J(_b31T, false)
            }
        }
        this.J$7();
        this.setCurrentTab(sGdC6.getIndex())
    };
    this.a51JH = function (e) {
        if (!this.l8$_o()) return;
        this.d7N2++;
        var o22 = this.t9_1;
        var sGdC6 = null;
        if (this.tabIndex != -1) this.tL9(this.t9_1[this.tabIndex]);
        for (var i = 0; i < o22.length; i++) {
            var _b31T = o22[i];
            if (_b31T.getIndex() <= this.YxfD.getIndex()) {
                if (_b31T.y33Om()) this.F82J(_b31T, false)
            } else {
                if (!_b31T.y33Om()) {
                    if (!sGdC6) sGdC6 = _b31T;
                    this.F82J(_b31T, true)
                }
            }
        }
        this.J$7();
        if (sGdC6) this.setCurrentTab(sGdC6.getIndex())
    };
    this.R3De2 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            this.setVisible(false);
            if (this.onClosed) this.onClosed()
        }
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.isVisible() == visible) return;
        this.dom.style.display = visible ? "" : "none";
        this.V08.style.display = visible ? '' : 'none';
        if (!visible) this._85();
        this.xur$.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.style.display != "none"
    };
    this.setZMBtnVisible = function (visible) {
        if (this.p3628() == visible) return;
        this.A3C4.style.display = visible ? "" : "none"
    };
    this.p3628 = function () {
        return this.A3C4 && this.A3C4.style.display != 'none'
    };
    this.HsS02 = function (e) {
        var index = e.target.getAttribute("tabIndex");
        if (index != null) this.setCurrentTab(parseInt(index))
    };
    this.WNw = function (type) {
        if (this.A3C4 && this.yEO6.type != type) {
            this.yEO6.type = type;
            if (this.yEO6.type == "zoomin") {
                this.A3C4.innerHTML = this.J63("ZOOMIN_IMG")
            } else {
                this.A3C4.innerHTML = this.J63("ZOOMOUT_IMG")
            }
            this.l21P()
        }
    };
    this.l21P = function () {
        if (this.yEO6.q9) MEvent.removeBuiltInListener(this.A3C4, "click", this.yEO6.q9);
        if (this.yEO6.type == "zoomin") {
            this.yEO6.q9 = MEvent.bindDom(this.A3C4, "click", this, this.x53)
        } else if (this.yEO6.type == "zoomout") {
            this.yEO6.q9 = MEvent.bindDom(this.A3C4, "click", this, this.uN0)
        }
    };
    this.x53 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            if (this.onZoomIn) this.onZoomIn()
        }
    };
    this.uN0 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            if (this.onZoomOut) this.onZoomOut()
        }
    };
    this.setTitle = function (title) {
        if (this.Ot56) {
            this.Ot56.innerHTML = title
        }
    };
    this.setContent = function (content) {
        this.content = content;
        if (this.x3M1) {
            if (MEvent.contains(lU37, "iw_setcontent") > 0) MEvent.trigger(lU37, "iw_setcontent", this.x3M1);
            var r5v7 = this.x3M1.parentNode;
            _removeNode(this.x3M1);
            this.x3M1 = this.uy088();
            r5v7.appendChild(this.x3M1);
            if (typeof content == "string") this.x3M1.innerHTML = content;
            else if (typeof content == "object" && typeof content.tagName != "undefined") {
                this.x3M1.innerHTML = "";
                this.x3M1.appendChild(content)
            }
            if (this.t9_1.length > 0) this.t9_1[0].setContent(content)
        }
    };
    this.EJ09 = function (w, h) {
        if (!this.J4As()) return;
        this.width = w;
        this.height = h;
        if (this.dom) {
            this.dom.style.width = w + "px";
            this.dom.style.height = h + "px";
            this.bYh1()
        }
    };
    this.moveTo = function (x, y) {
        if (!this.J4As()) return;
        this.x = x;
        this.y = y;
        this.dom.style.left = x + "px";
        this.dom.style.top = y + "px";
        this.Y115()
    };
    this.PF1 = function (M29) {
        if (this.isVisible()) {
            if ((this.x3M1.style.overflow == "hidden" ? true : false) != M29) {
                this.x3M1.style.overflow = M29 ? "hidden" : "auto"
            }
        }
    };
    this.J63 = function (name) {
        return s12.Tp04.J_45G(name)
    };
    this.Ao75t = function (name, value) {
        s12.Tp04.quC7(name, value)
    };
    this.finalize = function () {
        if (this.b6F) MEvent.removeBuiltInListener(this.$62, "click", this.b6F);
        if (this.n4C6) MEvent.removeBuiltInListener(this.Fj1, "click", this.n4C6);
        if (this.h1m) MEvent.removeBuiltInListener(this.D928, "click", this.h1m);
        this.R7$();
        _removeNode(this.dom);
        _removeNode(this.V08);
        _removeNode(this.xur$);
        _removeNode(this.r42W6);
        D3Ji(this);
        s12.Tp04.finalize()
    };
    var A68H = strImgsvrUrl + "images/newbubbleimg/mbblank.gif",
        _8_5H = CTLIMG_RESOURCE[2].url,
        RR9 = {
            width: CTLIMG_RESOURCE[2].w,
            height: CTLIMG_RESOURCE[2].h
        },
        l49R0 = window.XMLHttpRequest ? false : true;
    this.n07I6 = function (FGU) {
        var J1u05 = document.createElement('img');
        if (l49R0) {
            J1u05.setAttribute('src', A68H);
            J1u05.style.cssText = FGU + 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + _8_5H + '",sizingMethod=scale);width:' + RR9.width + 'px;height:' + RR9.height + ';'
        } else {
            J1u05.setAttribute('src', _8_5H);
            J1u05.style.cssText = FGU
        }
        return J1u05
    };
    this.Nil = function (FGU) {
        var E8g = document.createElement('div');
        E8g.style.cssText = FGU;
        return E8g
    };
    this.X579 = function (j17P5, img) {
        j17P5.appendChild(img);
        this.V08.appendChild(j17P5)
    };
    this.Y115 = function () {
        if (!lU37.Cn30.isVisible()) return;
        var AGN07 = Math.round(this.height * 60 / 100),
            C29j = Math.round(this.width * 95 / 100) + AGN07,
            XU8 = this.x + (this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 60 : 35),
            X9SkQ = this.height + this.y + (this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 55 : 25) - AGN07,
            e46 = CTLIMG_RESOURCE[2].w,
            I649k = CTLIMG_RESOURCE[2].h - 30,
            m09C = this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? Math.round(this.width * 30 / 100) : Math.round(this.width * 50 / 100),
            nT9f7 = this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 140 : 55,
            WQH51 = this.v$8a == MInfoWindow.ARROW_STYLE.LARGE ? 150 : 65;
        this.V08.style.left = XU8 + 'px';
        this.V08.style.top = X9SkQ + 'px';
        this.Bcf6L.style.width = AGN07 + 'px';
        this.kMGp8.style.left = AGN07 - I649k + 'px';
        this._071.style.left = C29j - AGN07 + 'px';
        this._071.style.width = AGN07 + 'px';
        this.C64.style.left = AGN07 - e46 + 'px';
        this.$435.style.top = AGN07 - 30 + 'px';
        this.Y1X95.style.top = AGN07 - 30 + 'px';
        this.Y1X95.style.left = C29j - AGN07 - 10 + 'px';
        this.R58.style.left = AGN07 + 'px';
        this.R58.style.width = (C29j - AGN07 * 2 > 0) ? C29j - AGN07 * 2 + 'px' : 0;
        this.NG9.style.width = AGN07 + 'px';
        this.NG9.style.left = C29j - AGN07 + 'px';
        this.NG9.style.height = (AGN07 - 60 > 0) ? AGN07 - 60 + 'px' : 0;
        this.L4Q2.style.left = AGN07 - e46 + 'px';
        this.I3L.style.width = AGN07 + 'px';
        this.I3L.style.height = (AGN07 - 60 > 0) ? AGN07 - 60 + 'px' : 0;
        this.r7179.style.left = AGN07 - I649k + 'px';
        this.mm0u2.style.top = AGN07 - 30 + 'px';
        this.mm0u2.style.left = m09C + 'px';
        this.vrQ$9.style.top = AGN07 - 30 + 'px';
        this.vrQ$9.style.width = (m09C - 50 > 0) ? m09C - 50 + 'px' : 0;
        this.y25.style.top = AGN07 - 30 + 'px';
        this.y25.style.left = 50 + m09C - 50 + nT9f7 + 'px';
        this.y25.style.width = (C29j - AGN07 - m09C - WQH51 > 0) ? C29j - AGN07 - m09C - WQH51 + 'px' : 0;
        this.iSu9A.style.left = AGN07 + 'px';
        this.iSu9A.style.height = (AGN07 - 60 > 0) ? AGN07 - 60 + 'px' : 0;
        this.iSu9A.style.width = (C29j - AGN07 * 2) ? C29j - AGN07 * 2 + 'px' : 0
    }
};
s12.Tp04 = new function () {
    var C6998 = [];
    var l49R0 = false;
    if (navigator.userAgent.indexOf(";") >= 0) {
        if (!window.XMLHttpRequest) l49R0 = true
    }
    C6998["TIP_DEFAULT_INFO"] = {
        width: 300,
        height: 300,
        rVF: false,
        zIndex: 100
    };
    C6998["COLOR"] = "#81807f";
    C6998["TIP_TABLE_BORDER_COLOR"] = '#ABABAB';
    C6998["IMAGE_RESOURCE"] = CTLIMG_RESOURCE[1].url;
    C6998["IMAGE_RESOURCE_INFO"] = {
        width: CTLIMG_RESOURCE[1].w,
        height: CTLIMG_RESOURCE[1].h
    };
    C6998["SHADOW_RESOURCE"] = CTLIMG_RESOURCE[2].url;
    C6998['SHADOW_RESOURCE_INFO'] = {
        width: CTLIMG_RESOURCE[2].w,
        height: CTLIMG_RESOURCE[2].h
    };
    C6998["BLANK_IMG_SRC"] = strImgsvrUrl + "images/newbubbleimg/mbblank.gif";
    C6998["TIP_TABLE"] = "position:absolute;border:1px solid " + C6998["TIP_TABLE_BORDER_COLOR"] + ";background-color:#FFFFFF;display:none;spacing:10px;table-layout:fixed;overflow:hidden;z-index:" + C6998["TIP_DEFAULT_INFO"].zIndex + ";";
    C6998["TIP_BORDER"] = "position:absolute;background:white;z-index:99;";
    C6998["TITLE_CONTAINER_TD"] = "";
    C6998["TITLE_TABLE"] = "position:relative;table-layout:fixed;border-bottom:1px solid #E5E5E7;background:#F5F7FC;background:-webkit-gradient(linear, 0 0, 0 100%, from(#F5F7FC), to(#F6F5F9));background:-moz-linear-gradient(top, #F5F7FC, #F6F5F9);_background:#F5F7FC;";
    C6998["TITLE_TD"] = "overflow:hidden;padding-left:15px;font-weight:bold;font-size:14px;line-height:40px;";
    C6998["TITLE_SPACER"] = "width:10px;-moz-user-select:none;-moz-user-focus:none;";
    var Kj90 = function (w, h, x, y, FGU) {
        if (typeof FGU != "string") FGU = "";
        var s = "<div style=\"position:absolute;width:" + w + "px;height:" + h + "px;overflow:hidden;-moz-user-select:none;-moz-user-focus:none;" + FGU + "\">";
        if (l49R0) {
            s += "<img src=\"" + C6998["BLANK_IMG_SRC"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + C6998["IMAGE_RESOURCE"] + ",sizingMethod=scale);width:" + C6998["IMAGE_RESOURCE_INFO"].width + "px;height:" + C6998["IMAGE_RESOURCE_INFO"].height + "px;\">"
        } else {
            s += "<img src=\"" + C6998["IMAGE_RESOURCE"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;\">"
        }
        s += "</div>";
        return s
    };
    C6998["RT_BTN_TD_INFO"] = {
        width: 18
    };
    C6998["RT_BTN_TD"] = "width:" + C6998["RT_BTN_TD_INFO"].width + "px";
    C6998["RT_BTN_IMG_INFO"] = {
        width: 18,
        height: 18
    };
    C6998["CLOSE_IMG"] = Kj90(C6998["RT_BTN_IMG_INFO"].width, C6998["RT_BTN_IMG_INFO"].height, -132, 0, "cursor:pointer;top:50%;margin-top:-" + (C6998["RT_BTN_IMG_INFO"].height / 2) + "px;right:10px;");
    C6998["ZOOMIN_IMG"] = Kj90(C6998["RT_BTN_IMG_INFO"].width, C6998["RT_BTN_IMG_INFO"].height, -132, -20, "cursor:pointer;top:50%;margin-top:-" + (C6998["RT_BTN_IMG_INFO"].height / 2) + "px;right:30px;");
    C6998["ZOOMOUT_IMG"] = Kj90(C6998["RT_BTN_IMG_INFO"].width, C6998["RT_BTN_IMG_INFO"].height, -132, -40, "cursor:pointer;top:50%;margin-top:-" + (C6998["RT_BTN_IMG_INFO"].height / 2) + "px;right:30px;");
    C6998['SHADOW_NORMAL'] = 'position:absolute;margin:0;padding:0;border:none;';
    C6998['SHADOW_PART'] = C6998['SHADOW_NORMAL'] + 'overflow:hidden;';
    C6998['SHADOW_ANGLE'] = C6998['SHADOW_PART'] + 'height:30px;';
    C6998['SHADOW_BORDER_H'] = C6998['SHADOW_PART'] + 'height:30px;';
    C6998['SHADOW_ARROW'] = C6998['SHADOW_PART'] + 'width:140px;height:60px;';
    C6998['SHADOW_ARROW_S'] = C6998['SHADOW_PART'] + 'width:55px;height:60px;';
    C6998["TAB_AMOUNT"] = 5;
    C6998["TAB_DEFAULT_LABEL"] = "\u4e3b\u8981";
    C6998["TAB_TD"] = "-moz-user-select:none;-moz-user-focus:none;";
    C6998["TAB_CONTAINER"] = "list-style-type:none;margin:0px;padding:0px;overflow:hidden;";
    C6998["TAB_LINE"] = "1px solid " + C6998["COLOR"] + ";";
    C6998["TAB_TEXT_COMMON"] = "float:left;cursor:pointer;white-space:nowrap;overflow:hidden;outline:none;font-size:12px;padding-bottom:4px;";
    C6998["TAB_TEXT_FOCUS"] = C6998["TAB_TEXT_COMMON"] + "border-top:" + C6998["TAB_LINE"] + ";border-left:" + C6998["TAB_LINE"] + ";border-right:" + C6998["TAB_LINE"] + ";padding-top:5px;padding-left:4px;padding-right:4px;";
    C6998["TAB_TEXT_BLUR"] = C6998["TAB_TEXT_COMMON"] + "border-bottom:" + C6998["TAB_LINE"] + "padding-top:5px;padding-left:5px;padding-right:5px;";
    C6998["TAB_SPACER"] = "float:left;border-bottom:" + C6998["TAB_LINE"];
    C6998["TAB_NAV_INFO"] = {
        width: 10,
        height: 10
    };
    C6998["TAB_NAV_LR_COMMON"] = "float:left;padding-top:5px;padding-left:4px;padding-right:4px;border-bottom:" + C6998["TAB_LINE"] + ";";
    C6998["TAB_NAV_L"] = C6998["TAB_NAV_LR_COMMON"];
    C6998["TAB_NAV_R"] = C6998["TAB_NAV_LR_COMMON"] + "float:right;";
    C6998["TAB_NAV_L_CHILD"] = Kj90(C6998["TAB_NAV_INFO"].width, C6998["TAB_NAV_INFO"].height, -133, -58);
    C6998["TAB_NAV_R_CHILD"] = Kj90(C6998["TAB_NAV_INFO"].width, C6998["TAB_NAV_INFO"].height, -142, -58);
    C6998["CONTENT_TD"] = "";
    C6998["CONTENT_DIV"] = "position:relative;padding:5px;width:100%;height:100%;overflow:auto;word-break: break-all;";
    C6998["ARROW_INFO"] = {
        $69: 12,
        _5Q: 23,
        k$05: 97,
        $0ABf: 70,
        zIndex: C6998["TIP_DEFAULT_INFO"].zIndex + 1
    };
    C6998["ARROW_INFO_S"] = {
        $69: 12,
        _5Q: 23,
        k$05: 32,
        $0ABf: 25,
        zIndex: C6998["TIP_DEFAULT_INFO"].zIndex + 1
    };
    C6998["ARROW_DIV"] = "position:absolute;top:0px;left:0px;width:" + C6998["ARROW_INFO"].width + "px;height:" + C6998["ARROW_INFO"].height + "px;display:none;z-index:" + C6998["ARROW_INFO"].zIndex + ";-moz-user-select:none;-moz-user-focus:none;";
    C6998["ARROW_DIV_S"] = "position:absolute;top:0px;left:0px;width:" + C6998["ARROW_INFO_S"].width + "px;height:" + C6998["ARROW_INFO_S"].height + "px;display:none;z-index:" + C6998["ARROW_INFO_S"].zIndex + ";-moz-user-select:none;-moz-user-focus:none;";
    C6998["ARROW_TOP_CHILD"] = Kj90(C6998["ARROW_INFO"].k$05, C6998["ARROW_INFO"].$0ABf, -43, -177);
    C6998["ARROW_BOTTOM_CHILD"] = Kj90(C6998["ARROW_INFO"].k$05, C6998["ARROW_INFO"].$0ABf, 0, 0);
    C6998["ARROW_BOTTOM_CHILD_S"] = Kj90(C6998["ARROW_INFO_S"].k$05, C6998["ARROW_INFO_S"].$0ABf, -98, 0);
    C6998["ARROW_LEFT_CHILD"] = Kj90(C6998["ARROW_INFO"].$69, C6998["ARROW_INFO"]._5Q, -61, -124);
    C6998["ARROW_RIGHT_CHILD"] = Kj90(C6998["ARROW_INFO"].$69, C6998["ARROW_INFO"]._5Q, -28, -178);
    this.quC7 = function (name, value) {
        if (typeof C6998[name] != "undefined") C6998[name] = value
    };
    this.J_45G = function (name) {
        return C6998[name]
    };
    this.finalize = function () {
        D3Ji(C6998);
        C6998 = null
    }
};
var Vc3 = function (Qdo) {
    var E96wN = function (ya, xv, yd, options) {
        this.title = ya;
        this.content = xv;
        this.Qdo = Qdo;
        this.yd = (typeof yd != "undefined" && "mouseover" == yd.toLowerCase()) ? "mouseover" : "click";
        this.options = options || {};
        if (typeof this.options.xoffset != "number") this.options.xoffset = 0;
        if (typeof this.options.yoffset != "number") this.options.yoffset = 0;
        this.yK7F = {
            Dqm: false,
            width: 0,
            height: 0
        };
        this.gv = function (x, y) {
            MEvent.trigger(this.getOverlay(), "iw_beforeopen", this.getOverlay(), x, y);
            if (this.getOverlay().maplet.customInfoWindow) return null;
            avBubble.overlay = this.getOverlay();
            var b = gp(this.title, x, y, this.content, {
                PvcY: this.options.PvcY
            }, true, this.Qdo);
            return b
        };
        var sj55 = null;
        this.setOverlay = function (overlay) {
            sj55 = overlay
        };
        this.getOverlay = function () {
            return sj55
        };
        this.toString = function () {
            return 'com.mapbar.maplet.MInfoWindow'
        };
        this.setTitle = function (yw, T$D, e6Y) {
            this.title = yw;
            if (ContentInfo) {
                ContentInfo.setTitle(yw);
                this.yK7F.Dqm = false
            }
        };
        this.setContent = function (c, T$D, e6Y) {
            this.content = t548(c, true);
            if (ContentInfo) {
                ContentInfo.setContent(c);
                this.yK7F.Dqm = false
            }
        }
    };
    return E96wN
};
var _dY = function (maplet, Qdo) {
    var lU37 = maplet;
    this.H1l = null;
    this.dqi3X = null;
    this.dom = null;
    this.Ot56 = null;
    this.x3M1 = null;
    this.height = null;
    this.width = null;
    this.location = null;
    this.initialize = function () {
        var mnQn0 = 'infoTitle' + new Date().getTime() + "" + parseInt(Math.random() * 10000);
        var Q65_ = 'infoContent' + new Date().getTime() + "" + parseInt(Math.random() * 10000);
        var Kygh = Qdo.uiString;
        if (Kygh) {
            Kygh = Qdo.uiString.replace('{{title}}', mnQn0).replace('{{content}}', Q65_)
        };
        this.H1l = document.createElement('div');
        this.H1l.innerHTML = Kygh;
        this.dqi3X = document.createElement('div');
        this.dqi3X.style.cssText = this.J63("POS_TABLE");
        this.dqi3X.appendChild(this.H1l);
        this.dom = document.createElement('div');
        this.dom.style.cssText = this.J63("TIP_TABLE");
        this.dom.appendChild(this.dqi3X);
        var parentNode = lU37 ? lU37.sF : document.body;
        parentNode.appendChild(this.dom);
        this.Ot56 = document.getElementById(mnQn0);
        this.x3M1 = document.getElementById(Q65_);
        this.location = Qdo.location || {}
    };
    this.n32 = function (title, content) {
        if (!this.dom) this.initialize();
        this.setTitle(title);
        this.setContent(content);
        var h = this.H1l.offsetHeight;
        var w = this.H1l.offsetWidth;
        this.width = w;
        this.height = h;
        this.setVisible(false);
        var size = {
            width: w,
            height: h
        };
        return size
    };
    this.g2r7W = function (x, y) {
        this.width = this.H1l.offsetWidth || this.width;
        this.height = this.H1l.offsetHeight || this.height;
        var ix = x,
            ax = x + this.width,
            iy = y,
            ay = y + this.height,
            BmxBp;
        var DB97 = this.location;
        if (typeof DB97.left === 'number') {
            if (DB97.left <= 0) {
                ix = x + DB97.left;
                BmxBp = ix + this.width;
                ax = BmxBp <= x ? x : BmxBp
            } else {
                ix = x;
                ax = x + DB97.left + this.width
            }
        } else if (typeof DB97.right === 'number') {
            if (DB97.right <= 0) {
                ix = x - this.width + DB97.right;
                BmxBp = ix + this.width;
                ax = BmxBp <= x ? x : BmxBp
            } else {
                ix = x - DB97.right - this.width;
                ax = x
            }
        };
        if (typeof DB97.top === 'number') {
            if (DB97.top <= 0) {
                iy = y + DB97.top;
                BmxBp = iy + this.height;
                ay = BmxBp <= y ? y : BmxBp
            } else {
                iy = y;
                ay = y + DB97.top + this.height
            }
        } else if (typeof DB97.bottom === 'number') {
            if (DB97.bottom <= 0) {
                iy = y - this.height - DB97.bottom;
                BmxBp = iy + this.height;
                ay = BmxBp <= y ? y : BmxBp
            } else {
                iy = y - DB97.bottom - this.height;
                ay = y
            }
        };
        var pN36B = {
            $w3: ix,
            r85j: iy,
            W06: ax,
            dBT: ay,
            K91: 10,
            G5Fp2: 10
        };
        return pN36B
    };
    this.OiR = function (x, y, width, height, $K1u, vNp09, G23, overlay, a0a, vG10o) {
        if (!this.dom) this.initialize();
        var B040Y = false;
        var $0q = false;
        var offsetX = 0;
        var offsetY = 0;
        if (typeof overlay == "object" && overlay) {
            var s = overlay.toString();
            B040Y = s.indexOf("MMarker") != -1;
            $0q = s.indexOf("MPolyline") != -1
        }
        if (B040Y && overlay.icon) {
            offsetX = overlay.icon.width / 2;
            offsetY = overlay.icon.height / 2;
            x = x - overlay.icon.anchorX + offsetX;
            y = y - overlay.icon.anchorY + offsetY
        }
        var pN36B = this.g2r7W(x, y);
        return {
            FoY: x,
            h$n: y,
            width: this.width,
            height: this.Te$18,
            arrow: null,
            B040Y: B040Y,
            $0q: $0q,
            pN36B: pN36B
        }
    };
    this.m$Ne9 = function () {
        var c34 = this.dqi3X.style;
        var DB97 = this.location;
        if (typeof DB97.left === 'number') {
            c34.left = DB97.left + 'px'
        } else if (typeof DB97.right === 'number') {
            c34.right = DB97.right + 'px'
        }
        if (typeof DB97.top === 'number') {
            c34.top = DB97.top + 'px'
        } else if (typeof DB97.bottom === 'number') {
            c34.bottom = DB97.bottom + 'px'
        }
    };
    this.show = function (XYrD2, yh4, _FB0R, xoffset, yoffset) {
        if (!this.dom) this.initialize();
        this.x = XYrD2.FoY;
        this.y = XYrD2.h$n;
        this.m$Ne9();
        this.dom.style.left = this.x + 'px';
        this.dom.style.top = this.y + 'px';
        var s1M = this.H1l.offsetWidth;
        var hx4bP = this.H1l.offsetHeight;
        this.setVisible(true);
        this.s88({
            w: s1M,
            h: hx4bP,
            x: this.x,
            y: this.y
        })
    };
    this.s88 = function (uy) {
        var x = uy.x,
            y = uy.y,
            w = uy.w,
            h = uy.h;
        if (w === 0 && w === h && this.x3M1) {
            var H2Y = this.g2r7W(x, y);
            maplet.tT3P(H2Y)
        }
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.isVisible() == visible) return;
        this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.style.display != "none"
    };
    this.setTitle = function (title) {
        if (this.Ot56) {
            this.Ot56.innerHTML = title
        }
    };
    this.setContent = function (content) {
        if (this.x3M1) {
            this.x3M1.innerHTML = content
        }
    };
    this.J63 = function (name) {
        return _dY.Tp04.J_45G(name)
    };
    this.WNw = function (type) {
        return
    };
    this.N44 = function (_b31T) {
        return
    };
    this.R7$ = function () {
        return
    };
    this.PF1 = function (M29) {
        return
    }
};
_dY.Tp04 = new function () {
    var C6998 = [];
    var l49R0 = false;
    if (navigator.userAgent.indexOf(";") >= 0) {
        if (!window.XMLHttpRequest) l49R0 = true
    };
    C6998["TIP_DEFAULT_INFO"] = {
        width: 300,
        height: 300,
        zIndex: 100
    };
    C6998["POS_TABLE"] = "position:absolute;border:0";
    C6998["TIP_TABLE"] = "position:absolute;left:-9999px; top:-9999px; width:0;height:0;border:0;table-layout:fixed;z-index:" + C6998["TIP_DEFAULT_INFO"].zIndex + ";";
    this.quC7 = function (name, value) {
        if (typeof C6998[name] != "undefined") C6998[name] = value
    };
    this.J_45G = function (name) {
        return C6998[name]
    };
    this.finalize = function () {
        D3Ji(C6998);
        C6998 = null
    }
};
var MPanel = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.paint()
    };
    this.setLocation = function (options, paint) {
        if (typeof paint != "boolean") paint = true;
        this.location = options || {};
        with(this.location) {
            if (typeof pt != "object" || !(pt instanceof MPoint) || !pt) this.location.pt = null;
            if (typeof type != "string" || !type || (type == "latlon" && !pt)) this.location.type = "xy";
            if (typeof x != "number") this.location.x = 0;
            if (typeof y != "number") this.location.y = 0;
            if (type == "latlon" && pt && !pt.maplet && this.maplet) pt.initialize(this.maplet)
        }
        this.options.location = this.location;
        if (paint) this.paint()
    };
    this.setContent = function (c) {
        if (typeof c != "undefined" && c) {
            if (typeof c == "string") {
                this.dom.innerHTML = c
            } else if (typeof c == "object") {
                this.dom.appendChild(c)
            }
        } else {
            c = null;
            this.dom.innerHTML = ""
        }
        this.options.content = c
    };
    this.setMouseWheel = function (enable) {
        if (typeof enable != "boolean") enable = true;
        if (this.dom) this.dom.setAttribute(XLf2G, !enable);
        this.options.mousewheel = enable
    };
    this.setZoomHide = function (hide) {
        if (typeof hide != "boolean") hide = false;
        this.options.zoomhide = hide
    };
    this.setCreator = function (JM0$) {
        if (typeof JM0$ != "number" || (JM0$ != MPanel.USER && JM0$ != MPanel.SYSTEM)) JM0$ = MPanel.USER;
        this.options.creator = JM0$
    };
    this.setPin = function (p, paint) {
        if (typeof p != "boolean") p = false;
        if (typeof paint != "boolean") paint = true;
        this.options.pin = p;
        if (!p && typeof this.location != "undefined" && this.location.pt) {
            this.location.type = "xy";
            this.location.pt = null
        }
        if (paint) this.paint()
    };
    this.setContainer = function (c) {
        if (typeof c != "object" || !c) c = null;
        this.options.container = c
    };
    this.setZIndex = function (i) {
        if (typeof i != "number") i = this.options.pin ? 200 : 2;
        this.dom.style.zIndex = i;
        this.options.zindex = i
    };
    this.paint = function () {
        if (!this.dom || !this.maplet) return;
        if (this.options.container) {
            if (this.dom.parentNode != this.options.container) this.options.container.appendChild(this.dom)
        } else {
            if (this.options.pin) {
                if (this.dom.parentNode != this.maplet.sF.div) this.maplet.sF.div.appendChild(this.dom)
            } else {
                if (this.dom.parentNode != this.maplet.panel) this.maplet.panel.appendChild(this.dom)
            }
        }
        with(this.location) {
            if (this.options.pin || type == "latlon") {
                if (typeof pt == "undefined" || !pt) pt = new MPoint(this.maplet.toMapCoordinate(x, y));
                if (!pt.maplet) {
                    pt.initialize(this.maplet)
                } else if (this.options.pin) {
                    if (this.maplet.K_0r4) {
                        if (this.maplet.$96 != pt.$96) {
                            pt.mapX += this.maplet.wbb1l;
                            pt.mapY += this.maplet.$X41;
                            pt.$96 = this.maplet.$96
                        }
                    } else {
                        pt.recalcScreenCoords()
                    }
                }
                x = pt.mapX;
                y = pt.mapY
            }
            this.dom.style.left = x + "px";
            this.dom.style.top = y + "px"
        }
    };
    this.show = function () {
        this.setVisible(true);
        this.c460.y3$1 = false
    };
    this.hide = function () {
        this.setVisible(false);
        this.c460.y3$1 = true
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.dom.style.display != (visible ? "" : "none")) this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom.style.display == ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.dom) {
            if (!finalize) {
                if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        this.maplet = null
    };
    this.clone = function () {
        return new MPanel({
            pin: this.options.pin,
            parent: this.options.parent,
            zindex: this.options.zindex,
            content: this.options.content,
            location: this.location,
            mousewheel: this.options.mousewheel,
            zoomhide: this.options.zoomhide,
            creator: this.options.creator
        })
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPanel'
    };
    this.id = "panel" + MPanel.Y3F;
    MPanel.Y3F++;
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.c460 = {
        y3$1: false
    };
    this.options = options || {};
    with(this.options) {
        this.setPin(typeof pin != "undefined" ? pin : undefined, false);
        this.setContainer(typeof container != "undefined" ? container : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setContent(typeof content != "undefined" ? content : undefined);
        this.setLocation(typeof location != "undefined" ? location : undefined, false);
        this.setMouseWheel(typeof mousewheel != "undefined" ? mousewheel : undefined);
        this.setZoomHide(typeof zoomhide != "undefined" ? zoomhide : undefined);
        this.setCreator(typeof creator != "undefined" ? creator : undefined)
    }
};
MPanel.enableDragMap = function (dom, enable, c38p) {
    if (typeof enable != "boolean") enable = true;
    if (enable) {
        m4$(dom, $0eU, "true", c38p)
    } else {
        D280(dom, $0eU)
    }
};
MPanel.USER = 1;
MPanel.SYSTEM = 2;
MPanel.Y3F = 0;
var MLayer = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.paint()
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path) path = "";
        this.options.serverPath = path
    };
    this.higu = function (format) {
        if (typeof format != 'number' || !format) {
            format = MLayer.DATAFORMAT.GLOBALVARIABLE
        }
        this.options.dataFormat = format
    };
    this.J9nP = function (getterName) {
        if (typeof getterName != 'string' || !getterName) {
            getterName = 'getData'
        }
        this.options.getterName = getterName
    };
    this.setZIndex = function (i) {
        if (typeof i != "number") i = 0;
        this.dom.style.zIndex = i;
        this.options.zindex = i;
        if (this.maplet) {
            this.maplet.ylq4D(this)
        }
    };
    this.setImgType = function (type) {
        if (typeof type != "string" || !type) type = "png";
        this.options.imgType = type.toLowerCase()
    };
    this.setDataType = function (type) {
        if (typeof type != "string" || !type) type = "js";
        this.options.dataType = type
    };
    this.setDataPattern = function (adp8C) {
        if (typeof adp8C != "string" || !adp8C) adp8C = "data" + MLayer.DPLACEHOLDER;
        this.options.dataPattern = adp8C
    };
    this.setImgWidth = function (w) {
        if (typeof w != "number" || w <= 0) w = 5;
        this.options.imgWidth = w;
        this.B56_ = Math.ceil(w / 2)
    };
    this.setImgHeight = function (h) {
        if (typeof h != "number" || h <= 0) h = 5;
        this.options.imgHeight = h;
        this.i427 = Math.ceil(h / 2)
    };
    this.setLevelRange = function (min, max, refresh) {
        if (typeof min != "number" || min < MIN_ZOOM_LEVEL || min > MAX_ZOOM_LEVEL) min = MIN_ZOOM_LEVEL;
        if (typeof max != "number" || max < MIN_ZOOM_LEVEL || max > MAX_ZOOM_LEVEL) max = MAX_ZOOM_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max;
        if (typeof refresh != "boolean") refresh = true;
        if (refresh) this.update()
    };
    this.setNeedData = function (N5a, UVc) {
        if (typeof N5a != "boolean") N5a = false;
        if (typeof UVc != "boolean") UVc = true;
        var yPMs = this.options.needData;
        this.options.needData = N5a;
        if (UVc && this.options.needData != yPMs) {
            if (yPMs) {
                this.clearData()
            } else {
                N0I28.apply(this)
            }
        }
    };
    this.setCreator = function (JM0$) {
        if (typeof JM0$ != "k62e" || (JM0$ != MLayer.USER && JM0$ != MLayer.SYSTEM)) JM0$ = MLayer.USER;
        this.options.creator = JM0$
    };
    this.setImgUrlPreprocessor = function (EY5) {
        EY5 = EY5 || {};
        if (typeof EY5.fun != "function" || !EY5.fun) EY5.fun = null;
        if (typeof EY5.thisObj != "object" || !EY5.thisObj) EY5.thisObj = null;
        this.options.imgUrlPreprocessor = EY5
    };
    this.setDataUrlPreprocessor = function (EY5) {
        EY5 = EY5 || {};
        if (typeof EY5.fun != "function" || !EY5.fun) EY5.fun = null;
        if (typeof EY5.thisObj != "object" || !EY5.thisObj) EY5.thisObj = null;
        this.options.dataUrlPreprocessor = EY5
    };
    this.setFireEvent = function (v4F4) {
        if (typeof v4F4 != "number") v4F4 = MLayer.ALL;
        this.options.events = v4F4
    };
    this.wb4 = function (mouseover) {
        mouseover = mouseover || {};
        if (typeof mouseover.fun != "function" || !mouseover.fun) mouseover.fun = null;
        if (typeof mouseover.thisObj != "object" || !mouseover.thisObj) mouseover.thisObj = null;
        this.options.mouseover = mouseover
    };
    this.c7T9 = function (mouseout) {
        mouseout = mouseout || {};
        if (typeof mouseout.fun != "function" || !mouseout.fun) mouseout.fun = null;
        if (typeof mouseout.thisObj != "object" || !mouseout.thisObj) mouseout.thisObj = null;
        this.options.mouseout = mouseout
    };
    this.u80 = function (click) {
        click = click || {};
        if (typeof click.fun != "function" || !click.fun) click.fun = null;
        if (typeof click.thisObj != "object" || !click.thisObj) click.thisObj = null;
        this.options.click = click
    };
    this.setDataLoadMode = function (mode) {
        if (typeof mode != "number" || (mode != MLayer.DL_INITIATIVE && mode != MLayer.DL_PASSIVE)) mode = MLayer.DL_INITIATIVE;
        this.options.dataLoadMode = mode
    };
    this.Wd1 = function (id, uy) {
        var layerData = this.maplet.layerData[id];
        if (typeof layerData == "object" && layerData && md6_(uy) && uy.length > 0) {
            this.data[id] = uy;
            var p1 = layerData.x;
            var p3 = layerData.y;
            for (var i = 0; i < uy.length; i++) {
                var item = uy[i];
                if (item) {
                    item.grid = id;
                    var zB = p1 + item.r.i.x;
                    var zF = p3 + item.r.i.y;
                    item.rect = {
                        min: {
                            x: zB,
                            y: zF
                        },
                        max: {
                            x: zB + item.r.a.x,
                            y: zF + item.r.a.y
                        }
                    };
                    FV4.apply(this, [item])
                }
            }
            uy = null
        }
    };
    this.PXG = function () {
        return this.options.dataPattern.replace(MLayer.DPLACEHOLDER, "")
    };
    this.setServerPathType = function (type) {
        if (typeof type != "number" || (type != MLayer.PT_NORMAL && type != MLayer.PT_COMBINER)) type = MLayer.PT_NORMAL;
        this.options.serverPathType = type
    };
    this.setCombinerParas = function (_qR) {
        if (typeof _qR != "string") _qR = "";
        this.options.combinerParas = _qR
    };
    this.enableNPS = function (enable) {
        if (typeof enable != "boolean") enable = false;
        this.options.nps = enable
    };
    this.getFilename = function (i7387, grid) {
        var Tf6p = "";
        if (this.maplet) {
            if (typeof grid == "string") grid = this.maplet.layerData[grid];
            if (typeof grid == "object" && grid) {
                Tf6p = sI[this.maplet.AG] + "/" + (this.options.nps && this.maplet.AG >= 14 ? grid.dirx + "/" : "") + grid.dirname + "/" + grid.xyname + "." + (i7387 ? this.options.imgType : this.options.dataType)
            }
        }
        return Tf6p
    };
    this.enableSafeLevel = function (enable) {
        if (typeof enable != "boolean") enable = false;
        this.options.safeLevel = enable
    };
    this.setTip = function (tip, refresh) {
        tip = tip || {};
        if (typeof tip.mode != "number" || (tip.mode & MLayer.TM_ALWAYS != MLayer.TM_ALWAYS && tip.mode & MLayer.TM_MOUSEOVER != MLayer.TM_MOUSEOVER)) tip.mode = MLayer.TM_NEVER;
        if (typeof tip.otiLevel != "number" || tip.otiLevel < MIN_ZOOM_LEVEL || tip.otiLevel > MAX_ZOOM_LEVEL) tip.otiLevel = MIN_ZOOM_LEVEL;
        if (typeof tip.otaLevel != "number" || tip.otaLevel < MIN_ZOOM_LEVEL || tip.otaLevel > MAX_ZOOM_LEVEL) tip.otaLevel = MAX_ZOOM_LEVEL;
        if (typeof tip.atiLevel != "number" || tip.atiLevel < MIN_ZOOM_LEVEL || tip.atiLevel > MAX_ZOOM_LEVEL) tip.atiLevel = MIN_ZOOM_LEVEL;
        if (typeof tip.ataLevel != "number" || tip.ataLevel < MIN_ZOOM_LEVEL || tip.ataLevel > MAX_ZOOM_LEVEL) tip.ataLevel = MAX_ZOOM_LEVEL;
        this.options.tip = tip;
        if (typeof refresh != "boolean") refresh = true;
        if (refresh) this.refreshTip()
    };
    this.refreshTip = function () {
        for (var i in this.data) v28b2.apply(this, [this.data[i]])
    };
    var v28b2 = function (grid) {
        if (typeof grid != "object" || !grid) return;
        for (var i = 0; i < grid.length; i++) FV4.apply(this, [grid[i]])
    };
    var FV4 = function (data) {
        if (typeof data != "object" || !data || !data.n) return;
        var b = h87.apply(this, [true, true]);
        var Fel1 = J6h5.apply(this, [data]);
        if (b && !data.tip && Fel1) {
            this.wR(data)
        } else if (data.tip && (!b || !Fel1)) {
            uwQ5.apply(this, [data])
        }
    };
    this.setNeedImg = function (N5a, UVc) {
        if (typeof N5a != "boolean") N5a = true;
        if (typeof UVc != "boolean") UVc = true;
        var yPMs = this.options.needImg;
        this.options.needImg = N5a;
        if (UVc && this.options.needImg != yPMs) {
            if (yPMs) {
                this.clearImgs()
            } else {
                N0I28.apply(this)
            }
        }
    };
    this.inZoomRange = function (AB) {
        if (AB >= this.options.minLevel && AB <= this.options.maxLevel) return true;
        else return false
    };
    this.paint = function () {
        if (!this.dom || !this.maplet) return;
        if (!this.maplet.Kw$79) this.maplet.bb6();
        if (this.dom.parentNode != this.maplet.Kw$79) {
            this.resize(this.maplet.width, this.maplet.height);
            this.maplet.Kw$79.appendChild(this.dom)
        }
    };
    var K5fq = function (data, Udm) {
        if (typeof data.Y3$ == "undefined") data.Y3$ = Udm;
        else data.Y3$ = Udm
    };
    var Ad17D = function (data) {
        return typeof data.Y3$ == "undefined" || data.Y3$
    };
    var or7w = function () {
        for (var i in this.data) K5fq.apply(this, [this.data[i], false])
    };
    var Pp1Q = function () {
        for (var i in this.data) {
            if (!Ad17D.apply(this, [this.data[i]])) ij96u.apply(this, [i])
        }
    };
    var _wE1 = function (img, ve29) {
        img.setAttribute(Iw1, ve29 ? "yes" : "no")
    };
    var k25y = function () {
        for (var i in this.mLP) _wE1.apply(this, [this.mLP[i], false])
    };
    var jq5Up = function (img) {
        return img.getAttribute(Iw1) == "yes"
    };
    var Pe2 = function () {
        for (var i in this.mLP) {
            if (!jq5Up.apply(this, [this.mLP[i]])) _1w.apply(this, [i])
        }
    };
    var _1w = function (id) {
        if (typeof this.mLP[id] == "object") {
            var img = this.mLP[id];
            img.onload = null;
            img.onerror = null;
            _removeNode(img);
            img = null;
            delete this.mLP[id]
        }
    };
    var ij96u = function (id) {
        if (typeof this.data[id] == "object") {
            if (this.mLP[id] && this.mLP[id].getAttribute(MLayer.iXB9)) {
                this.mLP[id].removeAttribute(MLayer.iXB9)
            }
            for (var i = 0; i < this.data[id].length; i++) {
                uwQ5.apply(this, [this.data[id][i]])
            }
            if (yVsDp && yVsDp.grid == id) {
                $vo2T.apply(this);
                yVsDp = null
            }
            this.data[id] = null;
            delete this.data[id]
        }
    };
    var uwQ5 = function (data) {
        if (!this.maplet || !data || !data.tip) return;
        this.maplet.removePanel(data.tip, true);
        data.tip = null;
        if (Wh3l4[data.p]) delete Wh3l4[data.p]
    };
    this.update = function () {
        if (!this.dom || !this.maplet) return;
        if (!this.inZoomRange(this.maplet.AG)) {
            this.clear();
            return
        }
        N0I28.apply(this)
    };
    this.refresh = function () {
        if (!this.dom || !this.maplet) return;
        this.clear();
        N0I28.apply(this)
    };
    var N0I28 = function () {
        if (!this.isVisible() || !this.inZoomRange(this.maplet.AG)) return;
        or7w.apply(this);
        k25y.apply(this);
        for (var i in this.maplet.layerData) {
            var item = this.maplet.layerData[i];
            if (item.x + this.maplet.imgWidth < 0 || item.x > this.maplet.width || item.y + this.maplet.imgHeight < 0 || (item.y + (this.options.safeLevel ? w8[this.maplet.AG] : 0)) > this.maplet.height) continue;
            if (this.options.needImg) {
                var img = this.mLP[i];
                if (typeof img != "object" || !img) {
                    img = document.createElement("IMG");
                    img.style.position = "absolute";
                    img.setAttribute("unselectable", "on");
                    img.style.MozUserSelect = "none";
                    img.setAttribute($0eU, "true");
                    img.setAttribute(WJ7V, "yes");
                    img.onerror = function (thisObj, id) {
                        return function () {
                            q8wy.apply(thisObj, [id])
                        }
                    }(this, i);
                    img.onload = function (thisObj, id) {
                        return function () {
                            PbK1.apply(thisObj, [id])
                        }
                    }(this, i);
                    this.mLP[i] = img
                }
                _wE1.apply(this, [img, true]);
                img.style.left = item.x + "px";
                img.style.top = item.y + (this.options.safeLevel ? w8[this.maplet.AG] : 0) + "px";
                if (!img.src && img.tagName != "DIV") {
                    var src = "";
                    var filename = this.getFilename(true, item);
                    if (this.options.imgUrlPreprocessor.fun) {
                        src = this.options.imgUrlPreprocessor.fun.apply(this.options.imgUrlPreprocessor.thisObj || this, [item]);
                        if (!src) continue
                    } else if (this.options.serverPathType == MLayer.PT_COMBINER) {
                        src += o$l.apply(this, [this.options.serverPath, item.L037, item.JT6y]);
                        src += (this.options.serverPath.indexOf("?") != -1 ? "&" : "?") + "n=" + this.options.combinerParas;
                        src += "&p=" + filename;
                        src += "&g=" + item.grid
                    } else {
                        src = o$l.apply(this, [this.options.serverPath, item.L037, item.JT6y]) + filename
                    }
                    img.src = src
                } else {
                    D8lg4.apply(this, [i])
                }
            } else {
                D8lg4.apply(this, [i])
            }
        }
        Pe2.apply(this);
        Pp1Q.apply(this)
    };
    var o$l = function (path, L037, JT6y) {
        var Y9F9 = "img.mapbar.com";
        if (strImgsvrUrl.substring(7, 21) == Y9F9) {
            return path.replace(Y9F9, "img" + this.maplet.WoUJ(L037, JT6y) + ".mapbar.com")
        } else {
            return path
        }
    };
    var q8wy = function (id) {
        _1w.apply(this, [id])
    };
    var PbK1 = function (id) {
        var img = this.mLP[id];
        if (typeof img != "undefined" && img) {
            if (img.width <= 1 || img.height <= 1) {
                _1w.apply(this, [id]);
                return
            }
            img.onerror = null;
            img.onload = null;
            if (l49R0 && this.options.imgType == "png") {
                var d = document.createElement("DIV");
                d.style.position = "absolute";
                d.style.width = this.maplet.imgWidth + "px";
                d.style.height = this.maplet.imgHeight + "px";
                d.style.left = img.style.left;
                d.style.top = img.style.top;
                d.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + img.src + ",sizingMethod=scale);";
                d.style.MozUserSelect = "none";
                d.setAttribute("unselectable", "on");
                d.setAttribute($0eU, "true");
                d.setAttribute(WJ7V, "yes");
                _wE1.apply(this, [d, true]);
                this.dom.appendChild(d);
                _1w.apply(this, [id]);
                this.mLP[id] = d
            } else {
                this.dom.appendChild(img)
            }
            D8lg4.apply(this, [id])
        }
    };
    this.refreshDataXY = function () {
        if (!this.options.needData) return;
        for (var id in this.data) {
            var uy = this.data[id];
            for (var i = 0; i < uy.length; i++) {
                var item = uy[i];
                if (item) {
                    var zB = this.maplet.layerData[id].x + item.r.i.x;
                    var zF = this.maplet.layerData[id].y + item.r.i.y;
                    item.rect.min.x = zB;
                    item.rect.min.y = zF;
                    item.rect.max.x = zB + item.r.a.x;
                    item.rect.max.y = zF + item.r.a.y
                }
            }
        }
    };
    var D8lg4 = function (id) {
        if (!this.options.needData) return;
        var img = this.mLP[id];
        if (!this.options.needImg || (typeof img == "object" && img && ((typeof img.src != "undefined" && img.src != sX) || (l49R0 && this.options.imgType == "png")))) {
            if (!this.data[id] && typeof this.maplet.layerData[id] == "object") {
                if (this.options.dataLoadMode == MLayer.DL_PASSIVE) return;
                if (img) {
                    if (img.getAttribute(MLayer.iXB9)) return;
                    else img.setAttribute(MLayer.iXB9, true)
                }
                var item = this.maplet.layerData[id];
                var src = "";
                var filename = this.getFilename(false, item);
                if (this.options.dataUrlPreprocessor.fun) {
                    src = this.options.dataUrlPreprocessor.fun.apply(this.options.dataUrlPreprocessor.thisObj, [item]);
                    if (!src) return
                } else {
                    src = o$l.apply(this, [this.options.serverPath, item.L037, item.JT6y]) + filename
                }
                new Y6WY(src, rL1, false, true, this, undefined, [id]).P4MUn()
            } else {
                var uy = this.data[id];
                var layerData = this.maplet.layerData[id];
                if (typeof uy == "undefined" || !uy || typeof layerData == "undefined" || !layerData) return;
                K5fq.apply(this, [uy, true]);
                var p1 = layerData.x;
                var p3 = layerData.y;
                for (var i = 0; i < uy.length; i++) {
                    var item = uy[i];
                    if (item) {
                        item.rect.min.x = p1 + item.r.i.x;
                        item.rect.min.y = p3 + item.r.i.y;
                        item.rect.max.x = item.rect.min.x + item.r.a.x;
                        item.rect.max.y = item.rect.min.y + item.r.a.y;
                        FV4.apply(this, [item])
                    }
                }
            }
        }
    };
    var rL1 = function (id, _S66) {
        if (typeof this.maplet == "object" && this.maplet && typeof this.maplet.layerData == "object" && this.maplet.layerData) {
            if (typeof this.maplet.layerData[id] == "undefined" || !this.maplet.layerData[id]) return;
            var layerData = this.maplet.layerData[id];
            var UxbV8 = this.options.dataPattern.replace(MLayer.DPLACEHOLDER, layerData.dirname + "_" + layerData.xyname);
            var uy = eval("typeof " + UxbV8 + "==\"undefined\"?null:" + UxbV8);
            this.Wd1(id, uy)
        }
        _removeNode(aa(_S66))
    };
    var callback = function (data) {
        this.Wd1(data.i, data.d)
    };
    this.getDataByXY = function (id, x, y, F$17) {
        if (typeof F$17 != "boolean") F$17 = false;
        if (this.data[id]) {
            var pt = {
                x: x,
                y: y
            };
            for (var i = 0; i < this.data[id].length; i++) {
                if (this.data[id][i] && _isInsideRect(pt, this.data[id][i].rect)) {
                    var d = this.data[id][i];
                    if (F$17) {
                        if (d.c && d.c.length > 0) {
                            var r = d.rect;
                            var p1 = this.maplet.layerData[id].x;
                            var p3 = this.maplet.layerData[id].y;
                            for (var r7X05 = 0; r7X05 < d.c.length; r7X05++) {
                                var c = d.c[r7X05];
                                var ix = p1 + c.i.x;
                                var iy = p3 + c.i.y;
                                var vS6o = {
                                    min: {
                                        x: ix,
                                        y: iy
                                    },
                                    max: {
                                        x: ix + c.a.x,
                                        y: iy + c.a.y
                                    }
                                };
                                if (_isInsideRect(pt, vS6o)) {
                                    d = this.data[id][c.f]
                                }
                            }
                        }
                    }
                    return d
                }
            }
        }
        return null
    };
    this.M1r7 = function (id, x, y) {
        if (!this.isVisible()) return null;
        var d = this.getDataByXY(id, x, y, KY$.apply(this, [true, true]));
        var _kmQR = true;
        if (this.options.mouseout.fun) $vo2T.apply(this, [d]);
        if (this.options.mouseover.fun && d) _kmQR = s5$.apply(this, [d]);
        if (d && _kmQR) this.maplet.gvL("pointer", this.maplet.panel);
        yVsDp = d;
        if (this.options.mouseover.fun) return null;
        if (d && KY$.apply(this, [true, true]) && !h87.apply(this, [true, true]) && d.n) {
            this.wR(d)
        } else {
            this.W60q6()
        }
        return d
    };
    var s5$ = function (d) {
        var c55j3 = true;
        if (this.options.mouseover.fun) {
            if (!yVsDp || yVsDp != d) {
                c55j3 = this.options.mouseover.fun.apply(this.options.mouseover.thisObj, [d]);
                ga3 = c55j3
            } else {
                c55j3 = ga3
            }
        }
        return c55j3
    };
    var $vo2T = function (d) {
        if (this.options.mouseout.fun && yVsDp && (yVsDp != d || !d)) {
            this.options.mouseout.fun.apply(this.options.mouseout.thisObj, [yVsDp])
        }
    };
    var KY$ = function (gu8, U600H) {
        with(this.options.tip) {
            return (!gu8 || (mode & MLayer.TM_MOUSEOVER) == MLayer.TM_MOUSEOVER) && (!U600H || (this.maplet.AG >= otiLevel && this.maplet.AG <= otaLevel))
        }
    };
    var h87 = function (gu8, U600H) {
        if (this.options.dataLoadMode != MLayer.DL_INITIATIVE) return;
        with(this.options.tip) {
            return (!gu8 || (mode & MLayer.TM_ALWAYS) == MLayer.TM_ALWAYS) && (!U600H || (this.maplet.AG >= atiLevel && this.maplet.AG <= ataLevel))
        }
    };
    this.wR = function (data) {
        if (KY$.apply(this, [true, true]) && !h87.apply(this, [true, true])) {
            if (!y4G) {
                this.maplet.addPanel(MLayer.TIPANEL);
                y4G = aa(MLayer.TIPID)
            }
            if (G6383 != data || (G6383 == data && !MLayer.TIPANEL.isVisible())) {
                G6383 = data;
                y4G.innerHTML = data.n;
                MLayer.TIPANEL.dom.style.visibility = "hidden";
                MLayer.TIPANEL.show();
                var DB97 = jg0.apply(this, [data]);
                MLayer.TIPANEL.setLocation({
                    type: "xy",
                    x: DB97.x,
                    y: DB97.y
                });
                MLayer.TIPANEL.dom.style.visibility = "visible"
            }
        } else if (h87.apply(this, [true, true]) && data && data.n) {
            if (data.p && Wh3l4[data.p]) return;
            Wh3l4[data.p] = true;
            data.tip = MLayer.TIPANEL2.clone();
            data.tip.setContainer(this.maplet.Kw$79.div);
            var n = data.n;
            if (n.length > 8) {
                n = data.n.substring(0, 8) + "...";
                data.tip.dom.title = data.n
            }
            data.tip.setContent(data.tip.options.content.replace(MLayer.TPLACEHOLDER, n));
            data.tip.dom.firstChild.setAttribute($0eU, "true");
            data.tip.dom.style.visibility = "hidden";
            this.maplet.addPanel(data.tip);
            var DB97 = jg0.apply(this, [data]);
            data.tip.setLocation({
                type: "xy",
                x: DB97.x,
                y: DB97.y
            });
            data.tip.dom.style.visibility = "visible"
        }
    };
    this.W60q6 = function () {
        if (MLayer.TIPANEL.maplet && G6383) {
            G6383 = null;
            MLayer.TIPANEL.hide()
        }
    };
    var J6h5 = function (data) {
        return _isRectint(data.rect, {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.maplet.width,
                y: this.maplet.height
            }
        })
    };
    var jg0 = function (data, size) {
        var tip = MLayer.TIPANEL.dom;
        if (h87.apply(this, [true, true])) tip = data.tip.dom;
        var DB97 = {
            x: 0,
            y: 0
        };
        var ix = data.rect.min.x;
        var iy = data.rect.min.y;
        var ax = data.rect.max.x;
        var ay = data.rect.max.y;
        var U70 = tip.offsetWidth;
        var th = tip.offsetHeight;
        if (KY$.apply(this, [true, true])) {
            if (ax + 2 + U70 <= this.maplet.width - 5) {
                DB97.x = ax + 2;
                DB97.y = iy + (ay - iy) / 2 - th / 2
            } else {
                DB97.x = ix - U70 - 2;
                DB97.y = iy + (ay - iy) / 2 - th / 2
            }
        } else {
            DB97.x = ax + 2;
            DB97.y = iy + (ay - iy) / 2 - th / 2
        }
        return DB97
    };
    this.click = function (id, x, y) {
        var c55j3 = {
            center2map: true,
            firevent: false,
            data: null
        };
        if (this.isVisible() && (this.options.click.fun || this.options.events & MLayer.CLICK == MLayer.CLICK)) {
            c55j3.data = this.getDataByXY(id, x, y, true);
            if (c55j3.data) {
                if (this.options.click.fun) {
                    var H5Cdv = this.options.click.fun.apply(this.options.click.thisObj, [c55j3.data]);
                    if (!H5Cdv) {
                        H5Cdv = {
                            center2map: false,
                            firevent: false
                        }
                    }
                    c55j3.center2map = H5Cdv.center2map ? false : H5Cdv.center2map;
                    c55j3.firevent = H5Cdv.firevent ? false : H5Cdv.firevent
                } else {
                    c55j3.firevent = true
                }
            }
        }
        return c55j3
    };
    this.clearImgs = function () {
        for (var i in this.mLP) {
            _1w.apply(this, [i])
        }
    };
    this.clearData = function () {
        for (var i in this.data) {
            ij96u.apply(this, [i])
        }
    };
    this.clear = function () {
        this.clearImgs();
        this.clearData();
        if (!this.dom) return;
        this.dom.innerHTML = ""
    };
    this.getImgCount = function ($3uW) {
        var c = 0;
        if (this.isVisible() && this.maplet && this.inZoomRange(this.maplet.AG))
            for (var i in this.mLP) c++;
        return c
    };
    this.resize = function (w, h) {
        if (!this.dom) return;
        if (r0JS(this.dom.style.width, 0) != w) this.dom.style.width = (w - 1) + "px";
        if (r0JS(this.dom.style.height, 0) != h) this.dom.style.height = (h - 2) + "px"
    };
    this.show = function () {
        var yPMs = this.isVisible();
        this.setVisible(true);
        if (!yPMs) N0I28.apply(this)
    };
    this.hide = function () {
        var yPMs = this.isVisible();
        this.setVisible(false);
        if (yPMs) this.clear()
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.dom.style.display != (visible ? "" : "pW5AW")) this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.parentNode == this.maplet.Kw$79.div && this.dom.style.display != "none"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        this.clear();
        if (this.dom) {
            if (!finalize) {
                if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        if (this.options.imgUrlPreprocessor.thisObj) this.options.imgUrlPreprocessor.thisObj = null;
        if (this.options.dataUrlPreprocessor.thisObj) this.options.dataUrlPreprocessor.thisObj = null;
        if (this.options.mouseover.thisObj) this.options.mouseover.thisObj = null;
        if (this.options.mouseout.thisObj) this.options.mouseout.thisObj = null;
        if (this.options.click.thisObj) this.options.click.thisObj = null;
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLayer'
    };
    this.id = new Date().getTime() + "_layer";
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.mLP = {};
    this.data = {};
    this.B56_ = 0;
    this.i427 = 0;
    var Iw1 = "_using";
    var G6383 = null;
    var y4G = null;
    var Wh3l4 = {};
    var yVsDp = null;
    var ga3 = false;
    this.options = options || {};
    this.setServerPath(this.options.serverPath);
    this.higu(this.options.dataFormat);
    this.J9nP(this.options.getterName);
    this.setZIndex(this.options.zindex);
    this.setImgType(this.options.imgType);
    this.setDataType(this.options.dataType);
    this.setDataPattern(this.options.dataPattern);
    this.setLevelRange(this.options.minLevel, this.options.maxLevel, false);
    this.setImgWidth(this.options.imgWidth);
    this.setImgHeight(this.options.imgHeight);
    this.setNeedData(this.options.needData, false);
    this.setNeedImg(this.options.needImg, false);
    this.setCreator(this.options.creator);
    this.setImgUrlPreprocessor(this.options.imgUrlPreprocessor);
    this.setDataUrlPreprocessor(this.options.dataUrlPreprocessor);
    this.setFireEvent(this.options.events);
    this.setTip(this.options.tip, false);
    this.wb4(this.options.mouseover);
    this.c7T9(this.options.mouseout);
    this.u80(this.options.click);
    this.setDataLoadMode(this.options.dataLoadMode);
    this.setServerPathType(this.options.serverPathType);
    this.setCombinerParas(this.options.combinerParas);
    this.enableNPS(this.options.nps);
    this.enableSafeLevel(this.options.safeLevel);
    if (!window.MPC_Mgr) {
        window.MPC_Mgr = {}
    }
    var g85Vw = this;
    window.MPC_Mgr[this.options.getterName] = function () {
        callback.apply(g85Vw, arguments)
    }
};
MLayer.USER = 1;
MLayer.SYSTEM = 2;
MLayer.DPLACEHOLDER = "[xyname]";
MLayer.NONE = 0;
MLayer.CLICK = 1;
MLayer.MOUSEMOVE = 2;
MLayer.ALL = 255;
MLayer.TM_NEVER = 1;
MLayer.TM_ALWAYS = 2;
MLayer.TM_MOUSEOVER = 4;
MLayer.TIPID = "_map_layertip";
MLayer.TIPANEL = new MPanel({
    pin: true,
    location: {
        type: "xy"
    },
    content: "<div id='" + MLayer.TIPID + "' style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:13px;line-height:17px;color:gray;' onmouseover='MLayer.setTipVisible(false);'></div>",
    creator: MPanel.SYSTEM
});
MLayer.TPLACEHOLDER = "[TPLACEHOLDER]";
MLayer.TIPANEL2 = new MPanel({
    pin: true,
    location: {
        type: "xy",
        x: 0,
        y: 0
    },
    content: "<div style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;' unselectable='on'>" + MLayer.TPLACEHOLDER + "</div>",
    creator: MPanel.SYSTEM
});
MLayer.setTipVisible = function (visible) {
    if (MLayer.TIPANEL.maplet) MLayer.TIPANEL.setVisible(visible)
};
MLayer.iXB9 = "_loadingdata";
MLayer.DL_INITIATIVE = 1;
MLayer.DL_PASSIVE = 2;
MLayer.PT_NORMAL = 1;
MLayer.PT_COMBINER = 2;
MLayer.DATAFORMAT = {
    GLOBALVARIABLE: 0,
    JSONP: 1
};
var MTraffic = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.layer = new MLayer({
            serverPath: this.options.serverPath,
            zindex: -1,
            imgType: this.options.imgType,
            needData: false,
            minLevel: this.options.minLevel,
            maxLevel: this.options.maxLevel,
            creator: MLayer.SYSTEM,
            imgUrlPreprocessor: {
                fun: $37P,
                thisObj: this
            },
            g97X2: ""
        });
        this.maplet.addLayer(this.layer);
        this.refresh();
        r4Jp5 = nB(this, UhC46, this.options.interval)
    };
    var $37P = function (data) {
        if (km0) return this.options.serverPath + km0 + (this.maplet.AG - 1) + "/o" + data.grid + "." + this.options.imgType;
        else return ""
    };
    this.refresh = function () {
        if (!this.layer || !this.layer.inZoomRange(this.maplet.AG)) return;
        this.layer.clear();
        P_8 = true;
        UhC46.apply(this)
    };
    var UhC46 = function () {
        Xa3W.apply(this)
    };
    var Xa3W = function () {
        var url = s_63.apply(this);
        url += (url.indexOf("?") != -1 ? "&" : "?") + "_" + new Date().getTime() + "=";
        new Y6WY(url, xmN96, false, true, this).P4MUn()
    };
    var s_63 = function () {
        return this.options.magicPath.replace("[city]", this.options.city)
    };
    var xmN96 = function () {
        if (!this.layer.maplet) return;
        var d = eval(MTraffic.MAGIC_RESULT_NAME);
        if (typeof d != "string" || !d) return;
        if (!km0 || d != km0 || P_8) {
            km0 = eval(MTraffic.MAGIC_RESULT_NAME);
            P_8 = false;
            this.layer.clear();
            this.layer.update();
            MEvent.trigger(this.layer.maplet, "traffic_update", {
                magicPath: km0
            })
        }
    };
    this.getTimestamp = function () {
        var c55j3 = null;
        if (km0) {
            var v4C5 = km0.split("/");
            if (v4C5.length > 8) {
                c55j3 = new Date(v4C5[4], r0JS(v4C5[5][0] == "0" ? v4C5[5][1] : v4C5[5]) - 1, v4C5[6], v4C5[7], v4C5[8].replace(v4C5[4] + v4C5[5] + v4C5[6] + v4C5[7], ""), 0)
            }
        }
        return c55j3
    };
    this.getTimestampDir = function () {
        var c55j3 = "";
        if (km0) {
            var v4C5 = km0.split("/");
            if (v4C5.length > 9) {
                c55j3 = v4C5.slice(4, 9).join("/")
            }
        }
        return c55j3
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path) path = "http://lukuang.mapbar.com/";
        this.options.serverPath = path
    };
    this.setImgType = function (type) {
        if (typeof type != "string" || !type) type = "png";
        this.options.imgType = type.toLowerCase()
    };
    this.setMagicPath = function (path) {
        if (typeof path != "string" || !path) path = "http://lukuang.mapbar.com/[city]/traffic/images/traffic.js";
        this.options.magicPath = path
    };
    this.setLevelRange = function (min, max) {
        if (typeof min != "number" || min < TRAFFIC_MIN_LEVEL || min > TRAFFIC_MAX_LEVEL) min = TRAFFIC_MIN_LEVEL;
        if (typeof max != "number" || max < TRAFFIC_MIN_LEVEL || max > TRAFFIC_MAX_LEVEL) max = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max
    };
    this.setInterval = function (i) {
        if (typeof i != "number" || i < TRAFFIC_REFRESH_INTERVAL) i = TRAFFIC_REFRESH_INTERVAL;
        this.options.interval = i * 1000;
        if (r4Jp5) {
            window.clearInterval(r4Jp5);
            r4Jp5 = nB(this, UhC46, this.options.interval)
        }
    };
    this.setCity = function (city, refresh) {
        if (typeof city != "string" || !city) city = "beijing";
        this.options.city = city;
        if (typeof refresh != "boolean") refresh = true;
        if (refresh) {
            P_8 = true;
            UhC46.apply(this)
        }
    };
    this.show = function () {
        if (this.layer) this.layer.show()
    };
    this.hide = function () {
        if (this.layer) this.layer.hide()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (r4Jp5) window.clearTimeout(r4Jp5);
        r4Jp5 = null;
        if (this.maplet) this.maplet.removeLayer(this.layer, finalize);
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MTraffic'
    };
    this.id = new Date().getTime() + "_traffic";
    this.maplet = null;
    this.layer = null;
    var r4Jp5 = null;
    var km0 = null;
    var P_8 = true;
    this.options = options || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined));
        this.setInterval(typeof interval != "undefined" ? interval : undefined);
        this.setCity(typeof city != "undefined" ? city : undefined, false);
        this.setMagicPath(typeof magicPath != "undefined" ? magicPath : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined)
    }
};
MTraffic.MAGIC_RESULT_NAME = "__mapbar_magic_id";
var MPOILayer = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.layer = new MLayer({
            serverPath: this.options.serverPath,
            zindex: -2,
            needImg: false,
            needData: true,
            minLevel: this.options.minLevel,
            maxLevel: this.options.maxLevel,
            creator: MLayer.SYSTEM,
            dataLoadMode: this.options.loadMode,
            mouseover: {
                fun: mouseover,
                thisObj: this
            },
            mouseout: {
                fun: mouseout,
                thisObj: this
            },
            click: {
                fun: click,
                thisObj: this
            },
            dataPattern: "basepoi" + MLayer.DPLACEHOLDER
        });
        this.maplet.addLayer(this.layer)
    };
    var mouseover = function (data) {
        var c55j3 = M2O.apply(this, [data]);
        if (c55j3 && MEvent.contains(this.maplet, "poi_mouseover") > 0) {
            MEvent.trigger(this.maplet, "poi_mouseover", _nPu.apply(this, [data]))
        }
        return c55j3
    };
    var mouseout = function (data) {
        if (M2O.apply(this, [data]) && MEvent.contains(this.maplet, "poi_mouseout") > 0) {
            MEvent.trigger(this.maplet, "poi_mouseout", _nPu.apply(this, [data]))
        }
    };
    var click = function (data) {
        var c55j3 = {
            center2map: !M2O.apply(this, [data]),
            firevent: false
        };
        if (!c55j3.center2map && MEvent.contains(this.maplet, "poi_click") > 0) {
            MEvent.trigger(this.maplet, "poi_click", _nPu.apply(this, [data]))
        }
        return c55j3
    };
    var M2O = function (data) {
        if (typeof data == "object" && data && typeof data.d == "string" && data.d) var pt = l9W.apply(this, [data.d.substring(0, 1)]);
        return ((this.options.dataTypes & pt) == MPOILayer.DT_POI) || ((this.options.dataTypes & pt) == MPOILayer.DT_BUSTOP) || ((this.options.dataTypes & pt) == MPOILayer.DT_SUBWAY)
    };
    var _nPu = function (data) {
        if (typeof data == "object" && data && typeof data.d == "string" && data.d) var hY6r = data.d;
        var pt = l9W.apply(this, [hY6r.substring(0, 1)]);
        if (hY6r.length >= 2) hY6r = hY6r.substring(2);
        return {
            type: pt,
            pid: data.p,
            area: data.l,
            data: hY6r,
            name: data.n,
            rect: data.rect
        }
    };
    var l9W = function (s) {
        var i = r0JS(s);
        if (i == MPOILayer.DT_POI) return MPOILayer.DT_POI;
        else if (i == MPOILayer.DT_BUSTOP) return MPOILayer.DT_BUSTOP;
        else if (i == MPOILayer.DT_SUBWAY) return MPOILayer.DT_SUBWAY;
        else return MPOILayer.DT_NONE
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.maplet && this.layer) {
            this.maplet.removeLayer(this.layer, finalize);
            this.layer = null;
            this.maplet = null
        }
    };
    this.setServerPath = function (path, UVc) {
        if (typeof path != "string" || !path) path = MPOILayer.INITIATIVE_URL;
        if (path == MPOILayer.INITIATIVE_URL || path == MPOILayer.PASSIVE_URL) {
            if (this.options.loadMode & MLayer.DL_INITIATIVE == MLayer.DL_INITIATIVE) path = MPOILayer.INITIATIVE_URL;
            else path = MPOILayer.PASSIVE_URL
        }
        this.options.serverPath = path;
        if (this.layer) this.layer.setServerPath(path, UVc)
    };
    this.setLevelRange = function (min, max, UVc) {
        if (typeof min != "number" || min < TRAFFIC_MIN_LEVEL || min > TRAFFIC_MAX_LEVEL) min = TRAFFIC_MIN_LEVEL;
        if (typeof max != "number" || max < TRAFFIC_MIN_LEVEL || max > TRAFFIC_MAX_LEVEL) max = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max;
        if (this.layer) this.layer.setLevelRange(min, max, UVc)
    };
    this.setDataTypes = function (_64, UVc) {
        if (typeof _64 != "number" || (_64 & MPOILayer.DT_POI != MPOILayer.DT_POI && _64 & MPOILayer.DT_SUBWAY != MPOILayer.DT_SUBWAY && _64 & MPOILayer.DT_BUSTOP != MPOILayer.DT_BUSTOP)) _64 = MPOILayer.DT_ALL;
        this.options.dataTypes = _64
    };
    this.setLoadMode = function (mode, UVc) {
        if (typeof mode != "number" || (mode != MLayer.DL_INITIATIVE && mode != MLayer.DL_PASSIVE)) mode = MLayer.DL_INITIATIVE;
        this.options.loadMode = mode;
        this.setServerPath(this.options.serverPath, UVc)
    };
    this.maplet = null;
    this.layer = null;
    this.options = options || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined, false);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined), false);
        this.setDataTypes((typeof dataTypes != "undefined" ? dataTypes : undefined), false);
        this.setLoadMode(typeof loadMode != "undefined" ? loadMode : undefined, false)
    }
};
MPOILayer.DT_NONE = 0;
MPOILayer.DT_POI = 1;
MPOILayer.DT_BUSTOP = 2;
MPOILayer.DT_SUBWAY = 4;
MPOILayer.DT_ALL = 255;
MPOILayer.INITIATIVE_URL = "http://img.mapbar.com/maplite/mapbank/maplayer/basepoi/";
MPOILayer.PASSIVE_URL = "http://192.168.0.241:8084/servlet/mg";

function yui(maplet) {
    this.maplet = maplet;
    document["mapbar-overview"] = this;
    this.yl = "mapbar";
    var e0$18 = 0;
    var R871 = 0;
    var k67 = 0;
    var _C422 = 0;
    this.c3 = oo;
    this.fg = true;
    this.panel = document.createElement("div");
    this.panel.unselectable = "on";
    this.panel.style.position = "absolute";
    this.panel.style.zIndex = 999;
    this.panel.style.backgroundColor = "white";
    this.panel.style.border = "1px solid #A6A5A1";
    this.panel.setAttribute(XLf2G, true);
    this.panel.style.overflow = "hidden";
    this.panel.style.display = "none";
    this.fC = document.createElement("div");
    this.fC.id = "mapbar-overview-canvas";
    this.fC.unselectable = "on";
    this.fC.style.position = "absolute";
    this.fC.style.visibility = "visible";
    this.fC.style.zIndex = 0;
    this.fC.style.top = (uU - 2) + "px";
    this.fC.style.left = (px) ? "5px" : "7px";
    this.fC.style.backgroundColor = MapBackgroundColor;
    this.fC.style.border = "2px solid #0E347F";
    this.fC.style.overflow = "hidden";
    this.fC.selected = false;
    this.panel.appendChild(this.fC);
    this.z3 = document.createElement("div");
    this.z3.id = "mapbar-overview-viewport";
    this.z3.unselectable = "on";
    this.fC.appendChild(this.z3);
    this.z1 = document.createElement("div");
    this.z1.id = "mapbar-overview-viewframe";
    this.z1.unselectable = "on";
    this.fC.appendChild(this.z1);
    this.z2 = document.createElement("div");
    this.z2.id = "mapbar-overview-viewpad_ctrl";
    this.z2.unselectable = "on";
    this.z2.style.MozUserSelect = "none";
    this.fC.appendChild(this.z2);
    this.z2.style.cursor = "move";
    this.z2.selected = false;
    this.ao = [];
    this.cW = 0;
    this._07C = [2, 4, 8, 6];
    this.shadow = document.createElement("div");
    this.shadow.unselectable = "on";
    this.shadow.style.position = "absolute";
    this.shadow.style.zIndex = 998;
    this.shadow.setAttribute(XLf2G, true);
    this.shadow.style.display = "none";
    var s4s21 = null;
    var k8178 = null;
    this.xS1 = new fD("OvwImgs", 0, 0, 0, 0, true, 0, '', this.fC);
    this.show = function () {
        this.fg = true
    };
    this.hide = function () {
        this.fg = false
    };
    this.nF = function () {
        if (this.fg) {
            if (this.c3) return r0JS(this.shadow.style.top);
            else return _C422
        } else {
            return 0
        }
    };
    this.FDa50 = function () {
        if (this.fg) {
            if (this.c3) return r0JS(this.shadow.style.left);
            else return k67
        } else {
            return 0
        }
    };
    this.nz = function () {
        if (this.fg) {
            if (this.c3) return r0JS(this.shadow.offsetHeight);
            else return r0JS(this.img.offsetHeight)
        } else {
            return 0
        }
    };
    this.w0 = function (e) {
        k1FD(e);
        if (this.cW != 0) return;
        if (e.target.id == this.z2.id || N5NW == this.z2.id) {
            N5NW = this.z2.id;
            this.z2.selected = true;
            this.downX = (px) ? event.clientX : e.clientX;
            this.downY = (px) ? event.clientY : e.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        } else if (fJ(e.target, this.fC) || N5NW == this.fC.id) {
            N5NW = this.fC.id;
            this.fC.selected = true;
            this.downX = (px) ? event.clientX : e.clientX;
            this.downY = (px) ? event.clientY : e.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        }
        if (N5NW) {
            this.ao["doc_mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["doc_mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px) this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1);
            else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (e) {
        if (N5NW == this.z2.id && this.z2.selected) {
            this.moveX = (px) ? event.clientX : e.clientX;
            this.moveY = (px) ? event.clientY : e.clientY;
            var lI = (this.moveX - this.downX);
            var lK = (this.moveY - this.downY);
            this.downX = this.moveX;
            this.downY = this.moveY;
            if (this.z2.style.top) {
                this.z2.style.top = (parseInt(this.z2.style.top) + lK) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + lI) + "px"
            }
        } else if (N5NW == this.fC.id && this.fC.selected) {
            this.moveX = (px) ? event.clientX : e.clientX;
            this.moveY = (px) ? event.clientY : e.clientY;
            var lI = (this.moveX - this.downX);
            var lK = (this.moveY - this.downY);
            this.downX = this.moveX;
            this.downY = this.moveY;
            this.xS1.style.top = (parseInt(this.xS1.style.top) + lK) + "px";
            this.xS1.style.left = (parseInt(this.xS1.style.left) + lI) + "px";
            if (this.z3.style.top) {
                this.z3.style.top = (parseInt(this.z3.style.top) + lK) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + lI) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + lK) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + lI) + "px"
            }
        }
        if (!s4s21 && this.z2.offsetWidth < this.fC.offsetWidth) {
            if (px) document.body.setCapture();
            s4s21 = nB(this, _Xb, 100);
            k8178 = nB(this, zL, 100)
        }
    };
    this.l1 = function (e) {
        if (this.maplet.sS != ts.a2_Q && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv) k1FD(e);
        if (s4s21) {
            this.maplet.hideBubble();
            window.clearInterval(s4s21);
            s4s21 = null;
            window.clearInterval(k8178);
            k8178 = null;
            if (px) document.body.releaseCapture()
        }
        if (this.ao["doc_mousemove"]) {
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["doc_mousemove"]);
            this.ao["doc_mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["doc_mouseup"]);
            this.ao["doc_mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
        }
        if (this.z2.selected) {
            N5NW = null;
            this.z2.selected = false;
            var moveX = (px) ? event.clientX : e.clientX;
            var moveY = (px) ? event.clientY : e.clientY;
            if (typeof moveX == "undefined") moveX = this.moveX;
            if (typeof moveY == "undefined") moveY = this.moveY;
            var lI = (moveX - this.xa - r0JS(this.xS1.style.left));
            var lK = (moveY - this.xb - r0JS(this.xS1.style.top));
            var lf = -lK * this.xf / this.maplet.imgHeight;
            var li = lI * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + lf;
            this.gL = this.maplet.gA + li;
            this.cW = 1;
            var l = r0JS(this.z2.style.left);
            if (l < -this.z2.offsetWidth) l = -this.z2.offsetWidth;
            else if (l >= this.fC.offsetWidth) l = this.fC.offsetWidth;
            var yw = parseInt(this.z2.style.top);
            if (yw < -this.z2.offsetHeight) yw = -this.z2.offsetHeight;
            else if (yw >= this.fC.offsetHeight) yw = this.fC.offsetHeight;
            this.z2.style.left = l + "px";
            this.z2.style.top = yw + "px";
            this.vh = getTimeout(this, this.vO, 20)
        } else if (this.fC.selected) {
            N5NW = null;
            this.fC.selected = false;
            var moveX = (px) ? event.clientX : e.clientX;
            var moveY = (px) ? event.clientY : e.clientY;
            var lI = -(moveX - this.xa);
            var lK = -(moveY - this.xb);
            var lf = -lK * this.xf / this.maplet.imgHeight;
            var li = lI * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + lf;
            this.gL = this.maplet.gA + li;
            this.cW = 2;
            var l = r0JS(this.z3.style.left);
            if (l < -this.z3.offsetWidth) l = -this.z3.offsetWidth;
            else if (l >= this.fC.offsetWidth) l = this.fC.offsetWidth;
            var yw = r0JS(this.z3.style.top);
            if (yw < -this.z3.offsetHeight) yw = -this.z3.offsetHeight;
            else if (yw >= this.fC.offsetHeight) yw = this.fC.offsetHeight;
            this.z3.style.left = l + "px";
            this.z3.style.top = yw + "px";
            this.z1.style.left = l + "px";
            this.z1.style.top = yw + "px";
            this.vh = getTimeout(this, this.vO, 20)
        }
    };
    var LX0bE = function (e) {
        k1FD(e)
    };
    this.vO = function () {
        if (this.vh) {
            clearTimeout(this.vh);
            this.vh = null
        }
        if (!this.z3.style.top || !this.z2.style.top) {
            this.maplet.setCenter(this.gK, this.gL, true);
            this.cW = 0;
            return
        }
        var lK = parseInt(this.z2.style.top) - parseInt(this.z3.style.top);
        var lI = parseInt(this.z2.style.left) - parseInt(this.z3.style.left);
        var gN = Math.round(lI);
        var gO = Math.round(lK);
        if ((Math.abs(lI) + Math.abs(lK)) >= 10) {
            var gN = Math.round(lI * 10.0 / (Math.abs(lI) + Math.abs(lK)));
            var gO = Math.round(lK * 10.0 / (Math.abs(lI) + Math.abs(lK)))
        }
        if (this.cW == 2) {
            if ((Math.abs(lI) + Math.abs(lK)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                this.z3.style.top = (parseInt(this.z3.style.top) + gO) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + gN) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + gO) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + gN) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        } else if (this.cW == 1) {
            gN = -gN;
            gO = -gO;
            if ((Math.abs(lI) + Math.abs(lK)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                for (var i in this.pU) {
                    if (typeof this.pU[i] == "object" && (this.pU[i] != null)) {
                        this.pU[i].style.top = (parseInt(this.pU[i].style.top) + gO) + "px";
                        this.pU[i].style.left = (parseInt(this.pU[i].style.left) + gN) + "px"
                    }
                }
                this.z2.style.top = (parseInt(this.z2.style.top) + gO) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + gN) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        }
    };
    this.pU = [];
    this.yN = null;
    this.c4 = false;
    this.cl = false;
    this.sa = [];
    this.nH = function () {
        if (this.fg && this.c3) return OVER_WIN_WIDTH;
        else return uS
    };
    this.addListener = function (uy) {
        this.sa[uy.id] = uy
    };
    this.removeListener = function (uy) {
        this.sa[uy.id] = null
    };
    this.uq = function () {
        for (var pf in this.sa) {
            if (this.sa[pf] && this.sa[pf].onresize) {
                this.sa[pf].onresize()
            }
        }
        this.maplet.onresize()
    };
    this.g1 = function () {
        for (var pf in this.sa) {
            if (this.sa[pf]) {
                this.sa[pf] = null
            }
            this.sa = null
        }
        this.clearImgs();
        this.pU = null;
        for (var l8 in this.ao) {
            try {
                if (this.ao[l8] != null) {
                    MEvent.removeBuiltInListener(this.fC, l8, this.ao[l8]);
                    this.ao[l8] = null
                }
            } catch (e) {}
            this.ao = null
        }
        this.img.overview = null;
        this.img.onclick = null;
        this.img.onmousedown = null;
        this.img.onmouseup = null;
        this.img.ondblclick = null;
        this.z2.w0 = null;
        this.z2.f9 = null;
        if (this.panel.parentNode != null) {
            _removeNode(this.panel)
        }
        this.maplet = null;
        _removeNode(this.img);
        _removeNode(this.shadow);
        D3Ji(this)
    };
    this.onresize = function () {
        this.bYh1();
        this.uq()
    };
    this.close = function () {
        if (this.cl) return;
        if (typeof this.img == "undefined") {
            this.c3 = oo = false;
            return
        } else if (this.img.style.display == "none" && this.c3) {
            this.c3 = oo = false
        }
        ejBCS.apply(this);
        this.cl = true;
        this.yN = getTimeout(this, du4TN, 10);
        this.c4 = false;
        this.uq()
    };
    this.open = function () {
        if (typeof this.img == "undefined") {
            this.c3 = oo = true;
            return
        }
        if (this.c4) return;
        ejBCS.apply(this);
        this.c4 = true;
        this.yN = getTimeout(this, EBp6, 10);
        this.cl = false
    };
    this.qa = function (container) {
        var An = (px) ? 0 : 2;
        this.img = document.createElement("div");
        this.img.unselectable = "on";
        this.img.style.position = "absolute";
        this.img.style.zIndex = 1000;
        this.img.overview = this;
        this.img.style.cursor = (px) ? "hand" : "pointer";
        this.img.style.overflow = "hidden";
        this.img.style.display = "none";
        this.rU2 = document.createElement("img");
        this.rU2.unselectable = "on";
        this.rU2.style.position = "absolute";
        this.rU2.src = CTLIMG_RESOURCE[0].url;
        this.rU2.style.width = CTLIMG_RESOURCE[0].w + "px";
        this.rU2.style.height = CTLIMG_RESOURCE[0].h + "px";
        this.rU2.ns9h1 = "no";
        if (px) this.img.style.filter = "alpha(opacity=0)";
        else this.img.style.opacity = "0";
        this.img.onmousedown = function (e) {
            k1FD(e || window.event)
        };
        this.img.onmouseup = function (e) {
            this.overview.l1(e);
            k1FD(e || window.event)
        };
        this.img.ondblclick = function (e) {
            k1FD(e || window.event)
        };
        this.img.onclick = function (e) {
            k1FD(e || window.event);
            if (this.overview.c3) {
                this.overview.close()
            } else {
                this.overview.open()
            }
        };
        container.appendChild(this.img);
        this.img.appendChild(this.rU2);
        container.appendChild(this.panel);
        container.appendChild(this.shadow);
        this.ao["mousedown"] = MEvent.bindDom(this.fC, "mousedown", this, this.w0);
        this.ao["mouseup"] = MEvent.bindDom(this.fC, "dblclick", this, LX0bE);
        this.onresize();
        if (!this.fg) return;
        if (oo) {
            this.open()
        } else {
            this.close()
        }
    };
    this.clearImgs = function () {
        for (var i in this.pU) {
            _1w.apply(this, [i])
        }
    };
    var _1w = function (id) {
        try {
            if (this.pU[id] != null) {
                _removeNode(this.pU[id]);
                this.pU[id].onmousedown = null;
                this.pU[id].onerror = null;
                this.pU[id].onload = null;
                this.pU[id] = null;
                delete this.pU[id]
            }
        } catch (e) {}
    };
    var Pe2 = function () {
        for (var i in this.pU) {
            if (this.pU[i] && !this.pU[i].c2) _1w.apply(this, [i])
        }
    };
    this.paint = function (D45F) {
        D45F && this.clearImgs();
        if (!this.c3 || !this.fg) return;
        this.width = OVER_WIN_WIDTH - 10;
        this.height = OVER_WIN_HEIGHT - 10;
        this.gx = this.maplet.gx;
        this.gA = this.maplet.gA;
        this.AG = Math.max(Math.max(0, MIN_ZOOM_LEVEL - 2), uW[this.maplet.AG]);
        this.imgWidth = this.maplet.imgWidth;
        this.imgHeight = this.maplet.imgHeight;
        this.xK = this.maplet.l9D4x;
        if (this.yl != this.maplet.yl) {
            this.yl = this.maplet.yl;
            this.clearImgs()
        }
        var yk = this.yl;
        this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
        this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
        this.xg = sj[this.AG];
        this.xf = qP[this.AG];
        this.sR = sI[this.AG] + "/";
        this.gD = Math.floor((this.maplet.gA) / this.xg);
        this.gE = Math.floor((this.maplet.gx) / this.xf);
        if (this.gD < 0) this.gD += 1;
        this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
        if (this.gx >= 0) {
            this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        } else {
            this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        }
        var nL = nM[this.AG];
        this.sZ = 0;
        this.s1 = 0;
        this.tf1 = this.width;
        this.tg = this.height;
        this.s2 = parseInt(this.gD);
        this.s3 = parseInt(this.gE);
        this.th = parseInt(this.gD);
        this.ti = parseInt(this.gE);
        var s8 = (360 / sj[this.AG]);
        this.gk = 1.0;
        this.wT = 0.0;
        for (var i in this.pU) {
            if (this.pU[i] != null) {
                this.pU[i].c2 = false
            }
        }
        for (ix = -this.z4 - 1; ix <= this.z4; ix++) {
            for (iy = -this.z5 - 1; iy <= this.z5; iy++) {
                try {
                    var pM = this.maplet.n5R + this.sR;
                    var qy = parseInt(this.gD + ix);
                    var qA = parseInt(this.gE + iy);
                    qy = (qy) % s8;
                    if (qy >= (s8 / 2)) qy -= s8;
                    if (qy < (-s8 / 2)) qy += s8;
                    var dirx = parseInt(Math.floor((qy) / nL));
                    var diry = parseInt(Math.floor((qA) / nL)); {
                        if (dirx < 0) dirx += 1;
                        if (diry < 0) diry += 1
                    }
                    var L037 = (qy) - dirx * nL;
                    var JT6y = (qA) - diry * nL;
                    pM += dirx + "_" + diry + "/";
                    pM += L037 + "_" + JT6y + "." + this.xK;
                    var p1 = (ix * this.imgWidth) + parseInt(this.mapX);
                    var p3 = (-(iy * this.imgHeight) + parseInt(this.mapY));
                    var p4 = p3;
                    if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                        p3 = p3 + w8[this.AG]
                    }
                    if (p1 < -this.imgWidth || p1 > this.width || p3 > this.height || p3 < -this.imgHeight) continue;
                    if (this.sZ < (p1 + this.imgWidth)) {
                        this.sZ = (p1 + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.s1 < (p3 + this.imgHeight)) {
                        this.s1 = (p3 + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(iy)
                    }
                    if (this.tf1 > p1) {
                        this.tf1 = p1;
                        this.th = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.tg > p3) {
                        this.tg = p3;
                        this.s3 = parseInt(this.gE) + parseInt(iy)
                    }
                    var xY = "__ov_ctrl_" + ((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase();
                    if (pM && pM.indexOf("NaN") < 0) {
                        if (this.pU[xY] == null) {
                            this.pU[xY] = new Image();
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].onmousedown = function () {
                                return false
                            };
                            this.pU[xY].ns9h1 = "no";
                            this.pU[xY].src = pM
                        }
                        var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                        var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                        this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
                        this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
                        this.pU[xY].c2 = true
                    }
                    pM = null;
                    xY = null
                } catch (e) {}
            }
        }
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.c2 && img.parentNode != this.xS1) this.xS1.appendChild(img)
        }
        Pe2.apply(this);
        hO116.apply(this);
        this.xS1.style.top = this.xS1.style.left = "0px"
    };
    var hO116 = function () {
        var Ae = parseInt(this.maplet.width * this.maplet.xg / this.xg);
        var zZ = parseInt(this.maplet.height * this.maplet.xf / this.xf);
        if (Ae > this.width && zZ > this.height) {
            U06.apply(this, [false])
        } else {
            this.z3.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z3.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z3.style.width = (Ae) + "px";
            this.z3.style.height = (zZ) + "px";
            this.z1.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z1.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z1.style.width = (Ae) + "px";
            this.z1.style.height = (zZ) + "px";
            this.z2.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z2.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z2.style.width = (Ae) + "px";
            this.z2.style.height = (zZ) + "px";
            U06.apply(this, [true])
        }
    };
    var U06 = function (visible) {
        this.z3.style.visibility = visible ? "visible" : "hidden";
        this.z1.style.visibility = visible ? "visible" : "hidden";
        this.z2.style.visibility = visible ? "visible" : "hidden"
    };
    this.getRect = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (typeof this.img != "undefined") {
            var e6dKm = (this.panel.style.display != "none");
            var jY5 = (this.img.style.display != "none");
            if (e6dKm || jY5) {
                var d = this.c3 ? this.shadow : this.img;
                r = {
                    min: {
                        x: d.offsetLeft,
                        y: d.offsetTop
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                };
                r.max.x = r.min.x + d.offsetWidth;
                r.max.y = r.min.y + d.offsetHeight
            }
        }
        return r
    };
    var du4TN = function () {
        var e6dKm = (this.panel.style.display != "none");
        if (this.fg) this.img.style.display = "";
        this.uq();
        ejBCS.apply(this);
        U06.apply(this, [false]);
        this.shadow.style.display = "none";
        if (this.fg || e6dKm) {
            with(this.panel.style) {
                if (px) {
                    filter = "alpha(opacity=100)"
                } else {
                    opacity = "1"
                }
            }
        }
        if (this.fg) {
            with(this.rU2.style) {
                left = "-26px";
                top = "-124px"
            }
        }
        with(this.img.style) {
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        var yw = 0,
            d = 10;
        var p = {
            b: 0,
            c: 1
        };
        var FR9a = {
            b: 0,
            c: 1
        };

        function aVu9() {
            if (yw < d) {
                yw++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + (100 - pT__$(yw, p.b, p.c, d) * 100) + ")";
                    if (this.fg) this.img.style.filter = "alpha(opacity=" + pT__$(yw, FR9a.b, FR9a.c, d) * 100 + ")";
                    else this.img.style.filter = "alpha(opacity=" + (100 - pT__$(yw, FR9a.b, FR9a.c, d) * 100) + ")"
                } else {
                    this.panel.style.opacity = 1 - pT__$(yw, p.b, p.c, d);
                    if (this.fg) this.img.style.opacity = pT__$(yw, FR9a.b, FR9a.c, d);
                    else this.img.style.opacity = 1 - pT__$(yw, FR9a.b, FR9a.c, d)
                }
                this.yN = getTimeout(this, aVu9, 100)
            } else {
                this.panel.style.display = "none";
                this.img.style.display = this.fg ? "" : "none";
                this.cl = false;
                this.c3 = false;
                this.uq()
            }
        };
        aVu9.apply(this)
    };
    var EBp6 = function () {
        if (this.panel.style.display != "none") return;
        ejBCS.apply(this);
        U06.apply(this, [false]);
        with(this.panel.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with(this.img.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with(this.rU2.style) {
            top = "-125px";
            left = "-42px"
        }
        var yw = 0,
            d = 10;
        var p = {
            b: 0,
            c: 1
        };
        var FR9a = {
            b: 0,
            c: 1
        };

        function aVu9() {
            if (yw < d) {
                yw++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + pT__$(yw, p.b, p.c, d) * 100 + ")";
                    this.img.style.filter = "alpha(opacity=" + pT__$(yw, FR9a.b, FR9a.c, d) * 100 + ")"
                } else {
                    this.panel.style.opacity = pT__$(yw, p.b, p.c, d);
                    this.img.style.opacity = pT__$(yw, FR9a.b, FR9a.c, d)
                }
                this.yN = getTimeout(this, aVu9, 100)
            } else {
                if (px) {
                    this.panel.style.filter = null
                } else {
                    this.shadow.style.opacity = 1
                }
                this.shadow.style.display = this.fg ? "" : "none";
                this.c4 = false;
                this.c3 = true;
                this.uq();
                this.paint()
            }
        };
        aVu9.apply(this)
    };
    var ejBCS = function () {
        if (this.yN) {
            window.clearTimeout(this.yN);
            this.yN = null
        }
    };
    var pT__$ = function (yw, b, c, d) {
        if (yw == 0) return b;
        if (yw == d) return b + c;
        if ((yw /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (yw - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --yw) + 2) + b
    };
    this.Bbs9 = function (location) {
        location = location || {};
        if (typeof location.type != "number" && !(location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM || location.type == Maplet.RIGHT_TOP || location.type == Maplet.LEFT_BOTTOM)) location.type = Maplet.RIGHT_BOTTOM;
        if (typeof location.marginx != "number") location.marginx = 6;
        if (typeof location.marginy != "number") location.marginy = 6;
        return location
    };
    this.setLocation = function (location) {
        this.location = this.Bbs9(location);
        this.bYh1()
    };
    this.resizeTo = function (w, h) {
        if (typeof w != "number") {
            w = 150
        } else {
            if (w < 100) w = 100;
            else if (w > 210) w = 210
        } if (typeof h != "number") {
            h = 140
        } else {
            if (h < 100) h = 100;
            else if (h > 210) h = 210
        }
        OVER_WIN_WIDTH = w;
        OVER_WIN_HEIGHT = h;
        this.onresize();
        this.paint()
    };
    var IG1 = function () {
        with(this.location) {
            if (type == Maplet.LEFT_TOP) {
                e0$18 = marginx;
                R871 = marginy;
                k67 = e0$18 + yui._sn40 + 4;
                _C422 = R871 + yui.mgfG0 + 4
            } else if (type == Maplet.LEFT_BOTTOM) {
                e0$18 = marginx;
                R871 = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                k67 = e0$18 + yui._sn40 + 4;
                _C422 = R871 + OVER_WIN_HEIGHT - uS - yui.mgfG0 - 1
            } else if (type == Maplet.RIGHT_TOP) {
                e0$18 = this.maplet.width - OVER_WIN_WIDTH - marginx;
                R871 = marginy;
                k67 = e0$18 + OVER_WIN_WIDTH - uS - yui._sn40 - 2;
                _C422 = R871 + yui.mgfG0 + 4
            } else if (type == Maplet.RIGHT_BOTTOM) {
                e0$18 = this.maplet.width - OVER_WIN_WIDTH - marginx;
                R871 = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                k67 = e0$18 + OVER_WIN_WIDTH - uS - yui._sn40 - 2;
                _C422 = R871 + OVER_WIN_HEIGHT - uS - yui.mgfG0 - 1
            }
        }
    };
    this.bYh1 = function () {
        IG1.apply(this);
        with(this.panel.style) {
            width = OVER_WIN_WIDTH + "px";
            height = OVER_WIN_HEIGHT + "px";
            left = e0$18 + "px";
            top = R871 + "px"
        }
        with(this.shadow.style) {
            width = OVER_WIN_WIDTH + yui.G5_m6 + "px";
            height = OVER_WIN_HEIGHT + yui.G5_m6 + "px";
            left = e0$18 - yui.G5_m6 / 2 + "px";
            top = R871 - yui.G5_m6 / 2 + "px"
        }
        with(this.fC.style) {
            width = OVER_WIN_WIDTH - yui._sn40 * 2 - r0JS(borderWidth) * 2 + "px";
            height = OVER_WIN_HEIGHT - yui.mgfG0 * 2 - r0JS(borderWidth) * 2 + "px";
            left = yui._sn40 + "px";
            top = yui.mgfG0 + "px"
        }
        with(this.xS1.style) {
            width = this.fC.style.width;
            height = this.fC.style.height;
            top = left = "0px"
        }
        with(this.img.style) {
            width = uS + "px";
            height = uS + "px";
            left = k67 + "px";
            top = _C422 + "px"
        }
        with(this.rU2.style) {
            if (this.c3) {
                top = "-125px";
                left = "-42px"
            } else {
                left = "-26px";
                top = "-124px"
            }
        }
        this.shadow.innerHTML = "";
        if (l49R0) {
            for (var i = 0; i < this._07C.length; i++) {
                var m1B4 = document.createElement("div");
                m1B4.unselectable = "on";
                m1B4.style.position = "absolute";
                m1B4.style.zIndex = i;
                m1B4.style.backgroundColor = "black";
                m1B4.setAttribute(XLf2G, true);
                m1B4.style.left = i * 2 + "px";
                m1B4.style.top = i * 2 + "px";
                m1B4.style.width = (OVER_WIN_WIDTH + (this._07C.length - i) * 4 + 2) + "px";
                m1B4.style.height = (OVER_WIN_HEIGHT + (this._07C.length - i) * 4 + 2) + "px";
                if (px) m1B4.style.filter = "alpha(opacity=" + this._07C[i] + ")";
                else m1B4.style.opacity = this._07C[i] / 100;
                this.shadow.appendChild(m1B4)
            }
        } else {
            var x = yui.G5_m6 / 2 - yui.H6M;
            var y = x;
            var w = yui.Gt53_;
            var h = yui.Gt53_;
            var s = ["<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-103px;\"></div>"];
            x += yui.Gt53_;
            w = OVER_WIN_WIDTH - yui.Gt53_ + 1;
            h = yui.H6M;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-226px;\"></div>");
            x += w;
            w = yui.Gt53_;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-103px;\"></div>");
            x = OVER_WIN_WIDTH + yui.Gt53_ + yui.H6M;
            y += yui.Gt53_;
            h = OVER_WIN_HEIGHT - yui.Gt53_ + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-81px;top:0px;\"></div>");
            x = x - yui.H6M - 1;
            y += h;
            w = yui.Gt53_;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-113px;\"></div>");
            x = yui.G5_m6 / 2 - yui.H6M + yui.Gt53_;
            y += yui.H6M + 1;
            w = OVER_WIN_WIDTH - yui.Gt53_ + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-229px;\"></div>");
            x = yui.G5_m6 / 2 - yui.H6M;
            y = y - yui.H6M - 1;
            w = yui.Gt53_;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-113px;\"></div>");
            y = yui.G5_m6 / 2 - yui.H6M + yui.Gt53_;
            h = OVER_WIN_HEIGHT - yui.Gt53_ + 1;
            w = yui.H6M;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-78px;top:0px;\"></div>");
            this.shadow.innerHTML = s.join("")
        }
    };
    var _Xb = function () {
        var rt = k20.apply(this);
        var vj = 0,
            vk = 0;
        if (rt.min.x < 0) vj = 5;
        if (rt.min.y < 0) vk = 5;
        if (rt.max.x > r0JS(this.fC.style.width)) vj = -5;
        if (rt.max.y > r0JS(this.fC.style.height)) vk = -5;
        if ((vj != 0 || vk != 0)) {
            this.panTo(vj, vk)
        }
    };
    var k20 = function () {
        var r = {
            min: {
                x: this.z2.offsetLeft,
                y: this.z2.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        r.max.x = r.min.x + this.z2.offsetWidth;
        r.max.y = r.min.y + this.z2.offsetHeight;
        return r
    };
    this.panTo = function (x, y) {
        this.xS1.style.top = r0JS(this.xS1.style.top) + y + "px";
        this.xS1.style.left = r0JS(this.xS1.style.left) + x + "px"
    };
    var zL = function () {
        if (this.fs || this.c0) return;
        var sP = parseInt(this.xS1.style.left);
        var sQ = parseInt(this.xS1.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0 || (sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            this.fs = true;
            zA.apply(this)
        }
    };
    var zA = function () {
        if (this.fs == false) return;
        var sP = parseInt(this.xS1.style.left);
        var sQ = parseInt(this.xS1.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            var qy = 0;
            var p1 = 0;
            if ((sP + this.tf1) >= 0) {
                this.th--;
                this.tf1 -= parseInt(this.imgWidth);
                qy = this.th;
                p1 = this.tf1
            }
            if ((sP + this.sZ - this.width) <= 0) {
                this.s2++;
                p1 = this.sZ;
                this.sZ += parseInt(this.imgWidth);
                qy = this.s2
            }
            var ix = qy;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            qy = (qy) % s8;
            if (qy >= (s8 / 2)) qy -= s8;
            if (qy < (-s8 / 2)) qy += s8;
            var yk = this.yl;
            for (var iy = this.ti; iy <= this.s3; iy++) {
                var qA = iy;
                var p3 = (-(iy - this.ti + 1) * this.imgHeight) + this.s1;
                aA.apply(this, [p1, p3, qy, qA, ix, iy, yk])
            }
            this.c0 = false
        }
        if ((sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            var qA = 0;
            var p3 = 0;
            if ((sQ + this.tg) >= 0) {
                this.s3++;
                this.tg -= parseInt(this.imgHeight);
                qA = this.s3;
                p3 = this.tg
            }
            if ((sQ + this.s1 - this.height) <= 0) {
                this.ti--;
                p3 = this.s1;
                this.s1 += parseInt(this.imgHeight);
                qA = this.ti
            }
            var iy = qA;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            var yk = this.yl;
            for (var ix = this.th; ix <= this.s2; ix++) {
                var qy = ix;
                qy = (qy) % s8;
                if (qy >= (s8 / 2)) qy -= s8;
                if (qy < (-s8 / 2)) qy += s8;
                var p1 = ((ix - this.th) * this.imgWidth) + this.tf1;
                aA.apply(this, [p1, p3, qy, qA, ix, iy, yk])
            }
            this.c0 = false
        }
        this.fs = false
    };
    var aA = function (p1, p3, qy, qA, ix, iy, yk) {
        var nL = nM[this.AG];
        var dirx = parseInt(Math.floor((qy) / nL));
        var diry = parseInt(Math.floor((qA) / nL));
        if (dirx < 0) dirx += 1;
        if (diry < 0) diry += 1;
        var L037 = (qy) - dirx * nL;
        var JT6y = (qA) - diry * nL;
        var pM = this.maplet.strImgUrl.replace("img", "img" + this.maplet.WoUJ(L037, JT6y)) + "mapbank/" + yk + "/" + this.sR;
        var xY = "__ov_ctrl_" + ((this.AG).toString(16) + ix.toString(16) + 'l' + iy.toString(16)).toLowerCase();
        pM += dirx + "_" + diry + "/";
        pM += L037 + "_" + JT6y + "." + this.xK;
        if (pM && pM.indexOf("NaN") < 0) {
            if (this.pU[xY] == null) {
                this.pU[xY] = new Image();
                this.pU[xY].id = xY;
                this.pU[xY].name = xY;
                this.pU[xY].ntry = "0";
                this.pU[xY].unselectable = "on";
                this.pU[xY].style.position = "absolute";
                this.pU[xY].onmousedown = function () {
                    return false
                };
                this.pU[xY].ns9h1 = "no";
                this.pU[xY].src = pM
            }
            var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
            this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
            this.pU[xY].c2 = true;
            this.xS1.div.appendChild(this.pU[xY]);
            xY = null
        }
        pM = null
    };
    this.location = this.Bbs9(OVER_LOCATION)
};
yui._sn40 = 2;
yui.mgfG0 = 2;
yui.H6M = 3;
yui.G5_m6 = 16;
yui.Gt53_ = 7;

function MStandardControl(x6, left, top, fi) {
    this.x6 = (typeof x6 == "undefined") ? "mapbar" : x6;
    this.left = (typeof left == "undefined") ? 0 : parseInt(left);
    this.top = (typeof top == "undefined") ? 0 : parseInt(top);
    this.fi = (typeof fi == "undefined") ? 0 : parseInt(fi);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.nR = null;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.maplet.gc[this.id] == null) {
            if (!this.fi && this.maplet.height < 300) {
                if (bsc) this.fi = 1
            }
            this.maplet.gc[this.id] = this;
            this.nR = new gb(typeof this.x6 != "object" ? null : this.x6);
            this.nR.initialize(this.maplet);
            if (this.maplet.controlCanvas == null) this.maplet.controlCanvas = this.nR
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.nR) {
            if (this.nR == this.maplet.controlCanvas) this.maplet.controlCanvas = null;
            this.nR.g1();
            this.nR = null
        }
        D3Ji(this)
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MStandardControl'
    }
};

function MLookupControl(ya, left, top) {
    this.ya = (typeof ya == "undefined") ? tX("%u62CD%uCB0F%uD02B%uF3C7") : ya;
    this.left = (typeof left == "undefined") ? 0 : parseInt(left);
    this.top = (typeof top == "undefined") ? 0 : parseInt(top);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.onresize = function (maplet) {
        if (this.maplet.overview.nF() <= 37) {
            this.tY.style.left = (this.maplet.width - 132 + this.left - this.maplet.overview.nH()) + "px"
        } else {
            this.tY.style.left = (this.maplet.width - 132 + this.left) + "px"
        }
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.maplet.gc[this.id] == null) {
            this.maplet.gc[this.id] = this;
            this.tY = document.createElement("div");
            this.tY.style.position = "absolute";
            this.onresize(this.maplet);
            this.tY.style.top = (10 + this.top) + "px";
            this.tY.style.zIndex = 10;
            this.tY.style.visibility = "visible";
            this.tU = document.createElement("img");
            this.tU.unselectable = "on";
            this.tU.src = strImgsvrUrl + "images/lookup.png";
            this.tU.alt = this.ya;
            this.tU.style.cursor = "hand";
            this.tU.style.cursor = "pointer";
            this.tU.panel = this;
            this.tU.maplet = this.maplet;
            this.tU.onclick = function () {
                this.maplet.setMode("lookup");
                MEvent.trigger(this.panel, "onclick")
            };
            this.tY.appendChild(this.tU);
            this.maplet.panel.appendChild(this.tY)
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.tY != null && this.tY.parentNode != null) {
            this.tY.parentNode.removeChild(this.tY);
            this.tY = null;
            this.tU.maplet = null;
            this.tU.onclick = null;
            this.tU = null
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLookupControl'
    }
};
var MContextMenuItem = function (title, callback, className) {
    this.f3Q94 = title;
    this.j19 = typeof callback === 'function' ? callback : null;
    this.u666 = typeof className === 'string' ? className : 'contextmenuitem';
    this.c020 = null;
    this.N9_ = null
};
MContextMenuItem.prototype.paint = function (menu) {
    this.rhhE();
    if (menu instanceof MContextMenu) {
        this.N9_ = menu;
        this.N9_.c020.appendChild(this.c020)
    }
};
MContextMenuItem.prototype.toString = function () {
    return 'com.mapbar.maplet.MContextMenuItem'
};
MContextMenuItem.prototype.remove = function () {
    this.N9_ = null;
    if (this.c020) {
        MEvent.removeBuiltInListener(this.c020, 'click', this.nNgRn);
        _removeNode(this.c020);
        this.c020 = null
    }
    this.j19 = null
};
MContextMenuItem.prototype.rhhE = function () {
    this.c020 = document.createElement('a');
    this.c020.setAttribute('href', '#');
    this.c020.style.display = 'block';
    this.c020.style.textDecoration = 'none';
    this.c020.className = this.u666;
    this.c020.innerHTML = this.f3Q94;
    MEvent.bindDom(this.c020, 'click', this, this.nNgRn)
};
MContextMenuItem.prototype.nNgRn = function (e) {
    e.B36h();
    this.N9_.hide();
    if (this.j19) {
        this.j19(this, this.N9_, this.N9_.overlay)
    } else {
        MEvent.trigger(this, "select", this, this.N9_, this.N9_.overlay)
    }
};
var MContextMenu = function (className) {
    this.overlay = null;
    this.u5 = {};
    this._62 = '';
    this.oOQ4 = [];
    this.u666 = typeof className === 'string' ? className : 'mapcontextmenu';
    this.$Su_ = new Date().getTime() + parseInt(Math.random() * 1000);
    this.c020 = null;
    this.maplet = null;
    this.rhhE()
};
MContextMenu.prototype.initialize = function (maplet) {
    this.maplet = maplet;
    this.maplet.sF.appendChild(this.c020)
};
MContextMenu.prototype.g4_0 = function (id) {
    this._62 = id
};
MContextMenu.prototype._2P2 = function (snn5) {
    this.overlay = snn5
};
MContextMenu.prototype.addOverlay = function (snn5) {
    this.u5[snn5.id] = snn5
};
MContextMenu.prototype.removeOverlay = function (snn5) {
    if (this.u5[snn5.id]) {
        if (this.overlay == this.u5[snn5.id]) this.hide();
        this.u5[snn5.id] = null;
        delete this.u5[snn5.id]
    }
};
MContextMenu.prototype.getOverlaySize = function () {
    var c = 0;
    for (var p in this.u5) {
        c++
    }
    return c
};
MContextMenu.prototype.containsOverlay = function (snn5) {
    return typeof this.u5[snn5.id] !== 'undefined' && this.u5[snn5.id]
};
MContextMenu.prototype.update = function () {
    this.c020.innerHTML = '';
    for (var i = 0, l = this.oOQ4.length; i < l; i++) {
        this.oOQ4[i].paint(this)
    }
};
MContextMenu.prototype.addItem = function (item, pn) {
    if (typeof pn == "undefined") {
        this.oOQ4[this.oOQ4.length] = item
    } else {
        pn = parseInt(pn);
        this.oOQ4.splice(pn, 0, item)
    }
    this.update()
};
MContextMenu.prototype.finalize = function () {
    this.remove(true)
};
MContextMenu.prototype.remove = function (finalize) {
    if (this.getOverlaySize() > 0) {
        for (var p in this.u5) {
            this.u5[p].removeContextMenu()
        }
    }
    if (this.maplet instanceof Maplet) {
        if (this == this.maplet.xc) {
            this.maplet.xc = null
        }
        this.maplet = null
    }
    finalize = typeof finalize !== 'boolean' ? false : finalize;
    if (finalize) {
        this.clear();
        _removeNode(this.c020);
        this.c020 = null
    }
};
MContextMenu.prototype.removeItem = function (pn) {
    if (pn < this.oOQ4.length) this.oOQ4[pn].remove();
    this.oOQ4.splice(pn, 1);
    this.update()
};
MContextMenu.prototype.clear = function () {
    for (var i = 0, l = this.oOQ4.length; i < l; i++) {
        this.oOQ4[i].remove()
    }
    this.oOQ4.length = 0;
    this.update()
};
MContextMenu.prototype.show = function (x, y) {
    var G_6 = this.r9D7(x, y);
    this.c020.style.left = parseInt(G_6.x) + 'px';
    this.c020.style.top = parseInt(G_6.y) + 'px';
    this.c020.style.visibility = 'visible'
};
MContextMenu.prototype.hide = function () {
    this.c020.style.visibility = 'hidden'
};
MContextMenu.prototype.toString = function () {
    return 'com.mapbar.maplet.MContextMenu'
};
MContextMenu.prototype.r9D7 = function (x, y) {
    var AI4l = this.My55W(),
        L4i8 = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.maplet.width,
                y: this.maplet.height
            }
        },
        w20H = {
            NG9: {
                min: {
                    x: x,
                    y: y
                },
                max: {
                    x: x + AI4l.width,
                    y: y + AI4l.height
                }
            },
            I3L: {
                min: {
                    x: x - AI4l.width,
                    y: y
                },
                max: {
                    x: x,
                    y: y + AI4l.height
                }
            },
            rt: {
                min: {
                    x: x,
                    y: y - AI4l.height
                },
                max: {
                    x: x + AI4l.width,
                    y: y
                }
            },
            SS$_W: {
                min: {
                    x: x - AI4l.width,
                    y: y - AI4l.height
                },
                max: {
                    x: x,
                    y: y
                }
            }
        };
    if (this.h1U94(w20H.NG9, L4i8)) {
        return w20H.NG9.min
    } else if (this.h1U94(w20H.I3L, L4i8)) {
        return w20H.I3L.min
    } else if (this.h1U94(w20H.rt, L4i8)) {
        return w20H.rt.min
    } else if (this.h1U94(w20H.SS$_W, L4i8)) {
        return w20H.SS$_W.min
    } else {
        return w20H.NG9.min
    }
};
MContextMenu.prototype.h1U94 = function (a, snn5) {
    return a.min.x >= snn5.min.x && a.min.y >= snn5.min.y && a.max.x <= snn5.max.x && a.max.y <= snn5.max.y
};
MContextMenu.prototype.My55W = function () {
    return {
        width: this.c020.offsetWidth,
        height: this.c020.offsetHeight
    }
};
MContextMenu.prototype.rhhE = function () {
    this.c020 = document.createElement('div');
    this.c020.style.position = 'absolute';
    this.c020.style.top = 0;
    this.c020.style.left = 0;
    this.c020.style.zIndex = 24;
    this.c020.style.visibility = 'hidden';
    this.c020.className = this.u666
};
var MSnapshotBox = function (kE$F7, style) {
    if (!(kE$F7 instanceof Maplet) && !kE$F7) throw new Error("parameter para_maplet is invalid Maplet object.");
    var x6 = (typeof style != "string" || !style) ? "" : style + "/";
    var J32V = SNAPSHOT_SERVER;
    var i5Ms7 = SNAPSHOT_SERVER + "get";
    var maplet = kE$F7;
    var T5t = new Date().getTime();
    var ao = [];
    var bX2Uh = "MSnapshotSizeTip" + T5t;
    var p_8$7 = bX2Uh + "_td";
    var $vAAO = '<table cellpadding="2" cellspacing="0" style="background-color:#0E347F;color:#ff0;font-size:14px;font-family:Arial;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;"><tr><td id="' + p_8$7 + '"></td></tr></table>';
    var cxA38 = new fD(bX2Uh, 0, 0, 0, 0, false, 24, $vAAO, maplet.panel);
    cxA38.div.style.width = "auto";
    cxA38.div.style.height = "auto";
    var AF1h = "MSnapshotBox" + T5t;
    var u6Y = '<table width="100%" height="100%" style="border:2px solid #0E347F;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;" cellpadding="0" cellspacing="0"><tr><td style="background-color:#FFFFFF;filter:alpha(opacity=30);opacity:0.3;"></td></tr></table>';
    var ns1 = new fD(AF1h, 0, 0, 0, 0, false, 24, u6Y, maplet.panel);
    ns1.div.style.overflow = "hidden";
    var N718f = 117;
    var lK8B = 23;
    var T0j = "MSnapshotBar" + T5t;
    var J7vv4 = "MSnapshotBtn_preview_" + T5t;
    var b_HNB = "MSnapshotBtn_download_" + T5t;
    var EL6 = "MSnapshotBtn_cancel_" + T5t;
    var bWB9M = "";
    bWB9M = '<font id="' + J7vv4 + '" class="snapshotTextBtn">\u9884\u89c8</font><font id="' + b_HNB + '" class="snapshotTextBtn">\u4fdd\u5b58</font><font id="' + EL6 + '" class="snapshotTextBtn" style="border-right: 1px solid #0E347F;">\u53d6\u6d88</font>';
    var l7g$ = new fD(T0j, 0, 0, 0, 0, false, 24, bWB9M, maplet.panel);
    l7g$.style.lineHeight = lK8B + "px";
    var _237 = "mapbar_snapshot_iframe";
    var iframe = null;
    var wfI3 = "mapbar_snapshot_frm";
    var Ly2 = null;
    var uoS7 = 0;
    var OQmc3 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rect: {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        },
        center: ""
    };
    this.S0s0T = false;
    this.Wkkaj = false;
    this.show = function () {
        if (ao.length == 0) {
            ao.push(MEvent.bindDom(document.getElementById(T0j), "mousedown", this, T8F2));
            ao.push(MEvent.bindDom(document.getElementById(J7vv4), "click", this, lYkL));
            ao.push(MEvent.bindDom(document.getElementById(b_HNB), "click", this, v2T6));
            ao.push(MEvent.bindDom(document.getElementById(EL6), "click", this, this.hide))
        }
        O3I();
        this.hide();
        ns1.show();
        cxA38.show()
    };
    this.hide = function () {
        var l8 = tI2L(this.hide);
        if (typeof l8 != "undefined" && l8) {
            if (l8.type == "click") {
                var target = typeof l8.target != "undefined" ? l8.target : l8.srcElement;
                var id = target.id;
                if (id == EL6) MEvent.trigger(maplet, "snapshot_done", "cancel");
                else if (id == J7vv4) MEvent.trigger(maplet, "snapshot_done", "preview");
                else if (id == b_HNB) MEvent.trigger(maplet, "snapshot_done", "download")
            }
        }
        D8d1Y();
        w40();
        SXC8()
    };
    var D8d1Y = function () {
        ns1.hide();
        ns1.resize(0, 0)
    };
    var w40 = function () {
        cxA38.hide();
        cxA38.moveTo(-1000, -1000)
    };
    var SXC8 = function () {
        l7g$.hide();
        l7g$.resize(0, 0)
    };
    this.moveTo = function (x, y) {
        ns1.moveTo(x, y);
        var H1G6 = y - cxA38.div.firstChild.clientHeight - 2;
        cxA38.moveTo(x, H1G6);
        if (y - cxA38.div.offsetHeight < 0) {
            cxA38.moveTo(x + 3, H1G6 + cxA38.div.offsetHeight + 5)
        }
    };
    this.resize = function (w, h) {
        w = w < 0 ? 0 : w;
        h = h < 0 ? 0 : h;
        ns1.resize(w, h);
        this.SV46(w + " x " + h)
    };
    this.SV46 = function (text) {
        document.getElementById(p_8$7).innerHTML = text
    };
    this.isVisible = function () {
        return document.getElementById(AF1h).style.visibility != "hidden" ? true : false
    };
    this.f471_ = function () {
        this.S0s0T = true;
        rO70();
        var x = OQmc3.x + OQmc3.width - N718f - 2;
        var y = OQmc3.y + OQmc3.height;
        if (y + lK8B > maplet.height) y -= lK8B + (px ? 4 : 3);
        l7g$.resize(N718f, lK8B);
        l7g$.moveTo(x, y);
        l7g$.show();
        maplet.gvL("pointer", document.getElementById(J7vv4));
        maplet.gvL("pointer", document.getElementById(b_HNB));
        maplet.gvL("pointer", document.getElementById(EL6));
        MEvent.trigger(maplet, "snapshot_select", {
            x: OQmc3.x,
            y: OQmc3.y,
            width: OQmc3.width,
            height: OQmc3.height
        })
    };
    this.snapshot = function (options) {
        if (typeof options != "object") options = {};
        if (typeof options.mode != "string" || (options.mode != "fullscreen" && options.mode != "custom")) options.mode = SNAPSHOT_OPTIONS.mode;
        if (typeof options.x == "undefined" || isNaN(options.x)) options.x = 0;
        if (typeof options.y == "undefined" || isNaN(options.y)) options.y = 0;
        if (typeof options.width == "undefined" || isNaN(options.width)) options.width = maplet.width;
        if (typeof options.height == "undefined" || isNaN(options.height)) options.height = maplet.height;
        if (typeof options.zoom == "undefined" || isNaN(options.zoom)) options.zoom = maplet.getZoomLevel();
        if (typeof options.format != "string") options.format = SNAPSHOT_OPTIONS.format;
        if (typeof options.depth == "undefined" || isNaN(options.depth)) options.depth = SNAPSHOT_OPTIONS.depth;
        if (options.processMode != "string" && (options.processMode != "event" && options.processMode != "download")) options.processMode = SNAPSHOT_OPTIONS.processMode;
        rO70.apply(this, [options]);
        MeRax.apply(this, [options])
    };
    var MeRax = function (options) {
        var HS9 = {};
        HS9.center = t43.apply(this, [OQmc3.center]);
        HS9.point = "";
        HS9.__5EX = "";
        HS9.area = "";
        HS9.width = OQmc3.width;
        HS9.height = OQmc3.height;
        HS9.zoom = typeof options.zoom == "undefined" ? maplet.getZoomLevel() : options.zoom;
        HS9.format = typeof options.format == "undefined" ? SNAPSHOT_OPTIONS.format : options.format;
        HS9.depth = typeof options.depth == "undefined" ? SNAPSHOT_OPTIONS.depth : options.depth;
        HS9.processMode = typeof options.processMode == "undefined" ? SNAPSHOT_OPTIONS.processMode : options.processMode;
        HS9.iL0 = "";
        HS9.iJ0 = "";
        HS9.traffic = false;
        HS9.l3K = "";
        HS9.DPg1 = "";
        var H2y = getMarkers();
        if (H2y.length > 0) {
            HS9.point = [];
            for (var i = 0; i < H2y.length; i++) {
                var jW245 = H2y[i];
                HS9.point.push(t43.apply(this, [jW245.marker.pt.getPid()]) + "," + jW245.text + "," + jW245.$F8j + "," + jW245.V9s + ",,," + jW245.src + "," + jW245.K91 + "," + jW245.G5Fp2)
            }
            HS9.point = HS9.point.join("|")
        }
        var vw = getPolylines();
        if (vw.length > 0) {
            HS9.__5EX = [];
            HS9.area = [];
            for (var i = 0; i < vw.length; i++) {
                var D6$6 = [];
                var pts = vw[i].pts;
                for (var r7X05 = 0; r7X05 < pts.length; r7X05++) {
                    D6$6.push(t43.apply(this, [pts[r7X05].getPid()]))
                }
                var brush = vw[i].brush;
                if (vw[i].brush.fill) {
                    HS9.area.push(D6$6.join(",") + ";" + kJ9u(brush.bgcolor) + ";" + (parseFloat(brush.bgtransparency) / 100) + ";" + kJ9u(brush.color) + ";" + brush.stroke + ";" + brush.style + ";" + (parseFloat(brush.transparency) / 100))
                } else {
                    HS9.__5EX.push(D6$6.join(",") + ";" + kJ9u(brush.color) + ";" + brush.stroke + ";" + brush.style + ";" + (parseFloat(brush.transparency) / 100))
                }
            }
            if (HS9.__5EX.length > 0) HS9.__5EX = HS9.__5EX.join("|");
            else HS9.__5EX = ""; if (HS9.area.length > 0) HS9.area = HS9.area.join("|");
            else HS9.area = ""
        }
        var iL0 = maplet.getEllipse();
        if (iL0.length > 0) {
            HS9.iL0 = [];
            for (var i = 0; i < iL0.length; i++) {
                var item = iL0[i];
                var brush = item.brush;
                HS9.iL0.push(t43.apply(this, [item.gC.getPid()]) + "," + item.sax + "," + r0JS(item.say, "") + "," + kJ9u(brush.bgcolor) + "," + (parseFloat(brush.bgtransparency) / 100) + "," + kJ9u(brush.color) + "," + brush.stroke + "," + brush.style + "," + (parseFloat(brush.transparency) / 100))
            }
            if (HS9.iL0.length > 0) HS9.iL0 = HS9.iL0.join("|");
            else HS9.iL0 = ""
        }
        var H6Q = getRoundRect();
        if (H6Q.length > 0) {
            HS9.iJ0 = [];
            for (var i = 0; i < H6Q.length; i++) {
                var item = H6Q[i];
                var brush = item.iJ0.brush;
                HS9.iJ0.push(t43.apply(this, [item.iJ0.T5_Vl.getPid()]) + "," + t43.apply(this, [item.iJ0.gsI.getPid()]) + "," + item.Rt26 + "," + item.F91 + "," + kJ9u(brush.bgcolor) + "," + (parseFloat(brush.bgtransparency) / 100) + "," + kJ9u(brush.color) + "," + brush.stroke + "," + brush.style + "," + (parseFloat(brush.transparency) / 100))
            }
            if (HS9.iJ0.length > 0) HS9.iJ0 = HS9.iJ0.join("|");
            else HS9.iJ0 = ""
        }
        if (maplet.traffic && maplet.traffic.layer.getImgCount()) {
            HS9.traffic = true;
            HS9.l3K = maplet.traffic.options.city;
            HS9.DPg1 = maplet.traffic.getTimestampDir()
        }
        bdB.apply(this, [HS9])
    };
    var t43 = function (Eo$4) {
        return Eo$4.indexOf(",") != -1 ? Eo$4.replace(",", "_") : Eo$4
    };
    var mU47 = function () {
        if (uoS7 >= 3) return;
        var taskId = Ly2["taskId"].value;
        if (typeof _snapshot_result == "object" && _snapshot_result) {
            if (_snapshot_result.url != "inexistence") {
                switch (_snapshot_result.processMode) {
                case "event":
                case "preview":
                    MEvent.trigger(maplet, "snapshot", _snapshot_result.url);
                    break;
                default:
                    break
                }
                return
            }
        }
        window.setTimeout(function (thisObj) {
            return function () {
                uoS7++;
                new Y6WY(i5Ms7 + "?taskId=" + taskId, function () {
                    mU47.apply(thisObj)
                }).P4MUn()
            }
        }.apply(this, [this]), 1000)
    };
    var kJ9u = function (color) {
        if (color.substring(0, 3).toLowerCase() == "rgb") {
            return color.replace(new RegExp(",", "g"), "@")
        }
        return color
    };
    var lYkL = function () {
        this.hide();
        var options = {};
        options.processMode = "preview";
        MeRax.apply(this, [options])
    };
    var v2T6 = function () {
        this.hide();
        var options = {};
        options.processMode = "download";
        MeRax.apply(this, [options])
    };
    var T8F2 = function (e) {
        k1FD(e)
    };
    var getMarkers = function () {
        var v6 = [];
        var mG1 = maplet.getMarkers();
        if (mG1.length > 0) {
            for (var i = 0; i < mG1.length; i++) {
                if (!mG1[i].icon) continue;
                if (!mG1[i].icon.isVisible()) continue;
                var $b9 = mG1[i];
                var icon = $b9.icon;
                var Kj400 = 0,
                    tJ1j = 0,
                    d43B = 0,
                    $8_$ = 0;
                var ms0 = 0,
                    M_U = 0;
                ms0 = Kj400 = parseInt(icon.div.style.left);
                M_U = tJ1j = parseInt(icon.div.style.top);
                d43B = icon.div.clientWidth;
                $8_$ = icon.div.clientHeight;
                var wv36m = "",
                    N6jE$ = "",
                    c7s = "";
                if (mG1[i].label) {
                    var pa6Fg = $b9.label;
                    wv36m = pa6Fg.getText();
                    N6jE$ = parseInt(pa6Fg.div.style.left);
                    c7s = parseInt(pa6Fg.div.style.top);
                    var F80 = pa6Fg.div.clientWidth;
                    var f30G4 = pa6Fg.div.clientHeight;
                    if (N6jE$ < Kj400) Kj400 = N6jE$;
                    if (c7s < tJ1j) tJ1j = c7s;
                    if ((N6jE$ + F80) > (Kj400 + d43B)) d43B = N6jE$ + F80;
                    if ((c7s + f30G4) > (tJ1j + $8_$)) $8_$ = c7s + f30G4
                }
                if (_isRectint(OQmc3.rect, {
                    min: {
                        x: Kj400,
                        y: tJ1j
                    },
                    max: {
                        x: Kj400 + d43B,
                        y: tJ1j + $8_$
                    }
                })) {
                    v6.push({
                        x: ms0,
                        y: M_U,
                        K91: mG1[i].icon.anchorX,
                        G5Fp2: mG1[i].icon.anchorY,
                        src: icon.getImgUrl(),
                        text: wv36m,
                        $F8j: mG1[i].label ? mG1[i].label.xoffset : 0,
                        V9s: mG1[i].label ? mG1[i].label.yoffset : 0,
                        marker: mG1[i]
                    })
                }
            }
        }
        return v6
    };
    var getPolylines = function () {
        var v6 = [];
        var vw = maplet.getPolylines();
        if (vw.length > 0) {
            for (var i = 0; i < vw.length; i++) {
                var pts = vw[i].pts;
                var Udm = false;
                for (var r7X05 = 0; r7X05 < pts.length; r7X05++) {
                    var bur$x = pts[r7X05].mapX;
                    var bur$y = pts[r7X05].mapY;
                    if (_isInsideRect({
                        x: bur$x,
                        y: bur$y
                    }, OQmc3.rect)) {
                        Udm = true;
                        break
                    }
                    if (r7X05 > 0) {
                        var bur$F6V95 = pts[r7X05 - 1].mapX;
                        var bur$FY$37 = pts[r7X05 - 1].mapY;
                        var M763 = {
                            start: {
                                x: OQmc3.rect.max.x,
                                y: OQmc3.rect.max.y
                            },
                            end: {
                                x: OQmc3.rect.max.x,
                                y: OQmc3.rect.min.y
                            }
                        };
                        var U8n6X = {
                            start: {
                                x: bur$F6V95,
                                y: bur$FY$37
                            },
                            end: {
                                x: bur$x,
                                y: bur$y
                            }
                        };
                        if (_IsIntersect(M763, U8n6X)) {
                            Udm = true;
                            break
                        }
                        M763 = {
                            start: {
                                x: OQmc3.rect.max.x,
                                y: OQmc3.rect.min.y
                            },
                            end: {
                                x: OQmc3.rect.min.x,
                                y: OQmc3.rect.min.y
                            }
                        };
                        if (_IsIntersect(M763, U8n6X)) {
                            Udm = true;
                            break
                        }
                        M763 = {
                            start: {
                                x: OQmc3.rect.min.x,
                                y: OQmc3.rect.min.y
                            },
                            end: {
                                x: OQmc3.rect.min.x,
                                y: OQmc3.rect.max.y
                            }
                        };
                        if (_IsIntersect(M763, U8n6X)) {
                            Udm = true;
                            break
                        }
                        M763 = {
                            start: {
                                x: OQmc3.rect.min.x,
                                y: OQmc3.rect.max.y
                            },
                            end: {
                                x: OQmc3.rect.max.x,
                                y: OQmc3.rect.max.y
                            }
                        };
                        if (_IsIntersect(M763, U8n6X)) {
                            Udm = true;
                            break
                        }
                    }
                }
                if (!Udm && vw[i].brush.fill) {
                    var P171 = vw[i].pts;
                    var b86 = [];
                    for (var r7X05 = 0; r7X05 < P171.length; r7X05++) b86.push({
                        x: P171[r7X05].mapX,
                        y: P171[r7X05].mapY
                    });
                    var HD34 = [{
                        x: OQmc3.rect.max.x,
                        y: OQmc3.rect.max.y
                    }, {
                        x: OQmc3.rect.max.x,
                        y: OQmc3.rect.min.y
                    }, {
                        x: OQmc3.rect.min.x,
                        y: OQmc3.rect.min.y
                    }, {
                        x: OQmc3.rect.min.x,
                        y: OQmc3.rect.max.y
                    }];
                    for (var r7X05 = 0; r7X05 < b86.length; r7X05++) {
                        if (_isInsidePolygon(b86[r7X05], HD34)) {
                            Udm = true
                        }
                    }
                    if (!Udm) {
                        for (var r7X05 = 0; r7X05 < HD34.length; r7X05++) {
                            if (_isInsidePolygon(HD34[r7X05], b86)) {
                                Udm = true
                            }
                        }
                    }
                }
                if (Udm) {
                    v6.push(vw[i])
                }
            }
        }
        return v6
    };
    var getRoundRect = function () {
        var v6 = [];
        var H6Q = maplet.getRoundRect();
        if (H6Q.length > 0) {
            for (var i = 0; i < H6Q.length; i++) {
                var item = H6Q[i];
                var rL8 = {
                    min: {
                        x: item.T5_Vl.mapX,
                        y: item.T5_Vl.mapY
                    },
                    max: {
                        x: item.gsI.mapX,
                        y: item.gsI.mapY
                    }
                };
                if (_isRectint(OQmc3.rect, rL8)) {
                    v6.push({
                        Rt26: parseInt(item.width * item.arcsize) * 2,
                        F91: parseInt(item.height * item.arcsize) * 2,
                        iJ0: item
                    })
                }
            }
        }
        return v6
    };
    var GH$MM = function (E04g) {
        var qxRV = null;
        if (px) {
            qxRV = document.createElement("<input name='" + E04g + "'>")
        } else {
            qxRV = document.createElement("input");
            qxRV.name = E04g
        }
        qxRV.type = "hidden";
        return qxRV
    };
    var bdB = function (_qR) {
        try {
            uoS7 = 0;
            if (typeof _snapshot_result == "object" && _snapshot_result) {
                _snapshot_result = null
            }
            if (!iframe) {
                if (px) {
                    iframe = document.createElement("<IFRAME name='" + _237 + "'>")
                } else {
                    iframe = document.createElement("IFRAME");
                    iframe.name = _237
                }
                iframe.id = _237;
                iframe.frameBorder = "0";
                iframe.style.width = "0px";
                iframe.style.height = "0px";
                iframe.style.zIndex = -1;
                maplet.panel.appendChild(iframe);
                var a1L99 = function (thisObj) {
                    return function () {
                        ti9gl.apply(thisObj)
                    }
                };
                if (px) iframe.attachEvent("onreadystatechange", a1L99(this));
                else iframe.addEventListener("load", a1L99(this), false);
                Ly2 = document.createElement("FORM");
                Ly2.id = wfI3;
                Ly2.method = "POST";
                Ly2.target = _237;
                Ly2.action = J32V;
                maplet.panel.appendChild(Ly2);
                Ly2.appendChild(GH$MM("center"));
                Ly2.appendChild(GH$MM("customer"));
                Ly2.appendChild(GH$MM("size"));
                Ly2.appendChild(GH$MM("markers"));
                Ly2.appendChild(GH$MM("polylines"));
                Ly2.appendChild(GH$MM("polygons"));
                Ly2.appendChild(GH$MM("format"));
                Ly2.appendChild(GH$MM("depth"));
                Ly2.appendChild(GH$MM("processMode"));
                Ly2.appendChild(GH$MM("taskId"));
                Ly2.appendChild(GH$MM("codeform"));
                Ly2.appendChild(GH$MM("zoom"));
                Ly2.appendChild(GH$MM("ellipse"));
                Ly2.appendChild(GH$MM("roundrect"));
                Ly2.appendChild(GH$MM("traffic"));
                Ly2.appendChild(GH$MM("tcity"));
                Ly2.appendChild(GH$MM("ttime"))
            }
            Ly2["center"].value = _qR.center;
            Ly2["customer"].value = (strLicenseKey == "3409") ? 0 : 1;
            Ly2["size"].value = _qR.width + "x" + _qR.height;
            Ly2["markers"].value = _qR.point;
            Ly2["polylines"].value = _qR.__5EX;
            Ly2["polygons"].value = _qR.area;
            Ly2["format"].value = _qR.format;
            Ly2["depth"].value = _qR.depth;
            Ly2["processMode"].value = _qR.processMode;
            Ly2["taskId"].value = new Date().getTime();
            Ly2["codeform"].value = "1";
            Ly2["zoom"].value = _qR.zoom;
            Ly2["ellipse"].value = _qR.iL0;
            Ly2["roundrect"].value = _qR.iJ0;
            Ly2["traffic"].value = _qR.traffic;
            Ly2["tcity"].value = _qR.l3K;
            Ly2["ttime"].value = _qR.DPg1;
            if (!px) Ly2.target = _237;
            Ly2.submit()
        } catch (nc) {
            iframe = null;
            Ly2 = null
        }
    };
    var ti9gl = function () {
        if (px && iframe.readyState != "complete") return;
        mU47.apply(this)
    };
    var rO70 = function (options) {
        if (typeof options == "undefined") {
            with(OQmc3) {
                x = parseInt(ns1.div.style.left);
                y = parseInt(ns1.div.style.top);
                width = ns1.div.clientWidth;
                height = ns1.div.clientHeight
            }
        } else {
            if (options.mode == "fullscreen") {
                options.width = maplet.width;
                options.height = maplet.height
            }
            with(OQmc3) {
                x = options.x;
                y = options.y;
                width = options.width;
                height = options.height
            }
        }
        with(OQmc3) {
            rect = {
                min: {
                    x: x,
                    y: y
                },
                max: {
                    x: x + width,
                    y: y + height
                }
            };
            center = maplet.toMapCoordinate(x + width / 2, y + height / 2)
        }
    };
    var O3I = function () {
        with(OQmc3) {
            x = 0;
            y = 0;
            width = 0;
            height = 0;
            rect = null
        }
    };
    this.finalize = function () {
        for (var i = 0; i < ao.length; i++) {
            MEvent.removeBuiltInListener(ao[i]);
            ao[i] = null
        }
        ao = null;
        cxA38.finalize();
        cxA38 = null;
        ns1.finalize();
        ns1 = null;
        l7g$.finalize();
        l7g$ = null;
        _removeNode(iframe);
        iframe = null;
        _removeNode(Ly2);
        Ly2 = null;
        maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MSnapshotBox'
    }
};
var MIconShadow = function (url, width, height, anchorX, anchorY) {
    this.o64 = 0;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.o64;
    this.div.style.position = "absolute";
    if (typeof width == "number") width = parseInt(width);
    if (typeof height == "number") height = parseInt(height);
    this.div.style.lineHeight = "0px";
    this.div.style.left = Number.MAX_VALUE + "px";
    this.div.style.top = Number.MAX_VALUE + "px";
    maplet.lA.appendChild(this.div);
    this.img = null;
    if (typeof url == "string" && url.indexOf("<") < 0) {
        this.img = (l49R0) ? document.createElement("v:Image") : new Image();
        this.img.unselectable = "on";
        this.img.style.MozUserSelect = "none";
        this.img.style.zIndex = this.o64;
        this.img.src = (typeof url == "undefined") ? strImgsvrUrl + "images/Shadow.png" : url;
        this.div.appendChild(this.img);
        if (typeof width == "number") this.img.style.width = width + "px";
        if (typeof height == "number") this.img.style.height = height + "px"
    } else {
        if (typeof url == "string") this.div.innerHTML = url;
        else this.div.appendChild(url); if (typeof width == "number") this.div.style.width = width + "px";
        if (typeof height == "number") this.div.style.height = height + "px"
    }
    MPanel.enableDragMap(this.div, true);
    this.width = this.div.offsetWidth;
    this.height = this.div.offsetHeight;
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2;
    this.anchorX = parseInt((typeof anchorX == "undefined") ? this.anchorX : this.anchorX + anchorX);
    this.anchorY = parseInt((typeof anchorY == "undefined") ? this.anchorY : this.anchorY + anchorY);
    this.left = 0;
    this.top = 0;
    this.wz = function (id) {
        this.div.id = "mk_shadow_c_" + id;
        if (this.img) this.img.id = "mk_shadow_" + id
    };
    this.initialize = function (marker) {
        this.marker = marker;
        if (this.img) {
            if (px) this.img.ondragstart = function () {
                return false
            };
            this.img.onmousedown = function () {
                return false
            }
        }
    };
    this.update = function (maplet, left, top) {
        if (this.marker.autoHide && !this.marker.icon.isVisible()) {
            if (this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
                this.fu = false
            }
        } else {
            var zB = parseInt(left) - parseInt(this.anchorX);
            var zF = parseInt(top) - parseInt(this.anchorY);
            if (this.div.parentNode != maplet.lA.div && !this.marker.ls) {
                maplet.lA.appendChild(this.div);
                this.fu = true
            }
            this.div.style.top = zF + "px";
            this.div.style.left = zB + "px";
            this.top = zF;
            this.left = zB
        }
    };
    this.isVisible = function () {
        return (this.fu)
    };
    this.zq = function () {
        return (this.img ? this.img.src : "") + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.div) {
            if (this.div.style.zIndex < pF) {
                pF++
            }
            this.setZIndex(pF)
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.img) {
            if (px) this.img.ondragstart = null;
            this.img.onmousedown = null
        }
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize) this.marker = null
    };
    this.setZIndex = function (_WD) {
        if (this.div && this.div.parentNode && _WD != this.div.style.zIndex) {
            this.o64 = this.div.style.zIndex;
            this.div.style.zIndex = _WD
        }
    };
    this.u8q7 = function () {
        if (!this.div) return;
        if (this.o64 != this.div.style.zIndex) {
            this.setZIndex(this.o64)
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIconShadow'
    }
};
window["MVersion"] = {
    "version": "31.3",
    "build": "20141016140329"
};
var Maplet = function (gx, gA, AB, w, h, Ak, Al, yv, x6) {
    if (px) {
        try {
            document.execCommand("BackgroundImageCache", false, true)
        } catch (nc) {}
    }
    this.downX = 0;
    this.downY = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.fS = 0;
    this.fT = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.e76 = {
        cursor: strImgsvrUrl + "images/measure.cur",
        eM03I: l49R0 ? "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + sX + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-100px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);' galleryimg='no' unselectable='on' onmousedown='return false;' /></div>" : "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-100px;' galleryimg='no' unselectable='on' onmousedown='return false;'></div>",
        r19f: "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9",
        Bw75: "\u603b\u957f: <font color='red'>[DISTANCE]</font></br><font color='gray'>\u5355\u51fb\u786e\u5b9a\u5730\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f</font>",
        L0Ak: "\u8d77\u70b9",
        j589e: "[DISTANCE]",
        $3e_: "<div style='position:absolute;width:12px;height:12px;overflow:hidden;top:50%;margin-top:-6px;left:2px;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-86px;top:0px;cursor:pointer' galleryimg='no' unselectable='on' onmousedown='return false;'></div><span style='padding-left:14px;height:18px;line-height:18px;display:block;float:left;'>\u603b\u957f: [DISTANCE]</span>",
        c6uF4: "[DISTANCE]",
        DFE4: "[TIP]",
        tip: "<div style='position:absolute;height:18px;line-height:19px;_line-height:18px;border:1px solid gray;background:white;padding:0 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;' unselectable='on'>[TIP]</div>",
        xF4u: new MBrush("#FF0000", 3, 0, false, "#FF0000", 50),
        Wh_: new MBrush("#FF0000", 3, 0, false, "#FF0000", 30)
    };
    this.Nv9_ = [];
    ac = new Date();
    this.imgWidth = 300;
    this.imgHeight = 300;
    this.clickToCenter = true;
    this.mx23N = {};
    this.$I78m = {};
    this.customInfoWindow = false;
    this.m50 = -1;
    this.uRK24 = -1;
    this.bS4W = 200;
    this.ignoreMoveRange = 2;
    this.$7BK8 = false;
    this.Dj75 = 0;
    this.WhA6O = 0;
    this.K_0r4 = false;
    this.BJ2 = false;
    this.$96 = null;
    this.wbb1l = null;
    this.$X41 = null;
    this.D2lgf = [];
    hA06_ = [];
    this.c1K = "";
    this.$406a = -1;
    this.A002 = -1;
    this.o1e = "";
    this.V56 = null;
    this.x4hM7 = null;
    this.Ab1 = {
        container: null,
        F8r00: [],
        yN: null,
        xd: 0.12,
        tlt: 4,
        B86: 1,
        interval: 100,
        ff621: {
            width: 85,
            height: 68
        },
        d$8: {
            width: 35,
            height: 27
        }
    };
    this.ukd$ = {
        fC: null,
        width: 16,
        height: 16,
        offsetY: 5,
        $rQWE: 3,
        iaW_: 4,
        overlay: null
    };
    this.d3$ = -1;
    this.YF8_ = false;
    this.p2Wu = true;
    this.aR2_ = false;
    this.$gu = bpp[0];
    this.traffic = null;
    this.Y_H90 = true;
    this.s261 = 5;
    this.markerDragAnimation = true;
    this.qS = {};
    this.layerData = {};
    this.sM9s8 = [];
    this.layerDataPassiveUrl = "";
    this._og = null;
    this.b2g = null;
    this.$D5 = {
        width: 41,
        height: 20
    };
    this.G4j7 = {
        width: 0,
        height: 0
    };
    this.rlConfig = {
        url: "http://3in1.mapbar.com/s?t=snsn",
        resultName: "rlm" + new Date().getTime(),
        hQkxe: false,
        eM03I: l49R0 ? "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + sX + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-112px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);' galleryimg='no' unselectable='on' onmousedown='return false;' /></div>" : "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-112px;' galleryimg='no' unselectable='on' onmousedown='return false;'></div>",
        tip: {
            start: "\u70b9\u51fb\u5f00\u59cb\u6cbf\u9053\u8def\u753b\u4e00\u6761\u7ebf",
            one: "\u70b9\u51fb\u7ee7\u7eed\u753b\u7ebf",
            end: "\u70b9\u51fb\u6700\u540e\u4e00\u4e2a\u70b9\uff0c\u53ef\u7ed3\u675f\u6b64\u7ebf\u8def",
            e1P: "<div class='roadlineTip'><div class='roadlineTip_distance' style='display:none'></div><div></div></div>"
        }
    };
    this.P8h = {
        o7c: [],
        ioQ4: [],
        TF9Xn: false,
        x917: null,
        XM6H: {
            v53hO: 0,
            $4li$: 0,
            S27: 0,
            l5842: 0
        },
        tip: new MPanel({
            location: {
                type: "xy"
            },
            content: this.rlConfig.tip.e1P,
            creator: MPanel.SYSTEM
        }),
        OY7: {
            A274: 0,
            BmxBp: 0
        },
        xH3dF: 1
    };
    this.mapBound = null;
    this.l46N = false;
    this.IxVyB = null;
    this.allowDrawingDragMap = true;
    this.d7B30 = true;
    this.h95 = false;
    this.sS = ts.ty;
    this.id = "mapbar";
    this.yt = ((new Date().getTime()) % 86400000).toString(36) + (parseInt(Math.random() * 1000)).toString(36);
    if (typeof strRemoteIP != "undefined" && strRemoteIP) {
        this.yt += "*" + strRemoteIP
    }
    document["mapbar-maplet"] = this;
    this.left = (typeof Ak == "undefined") ? 0 : parseInt(Ak);
    this.top = (typeof Al == "undefined") ? 0 : parseInt(Al);
    this.width = (typeof w == "undefined") ? 600.00001 : parseInt(w);
    this.height = (typeof h == "undefined") ? 400.00001 : parseInt(h);
    if (isNaN(parseFloat(gx)) || (typeof gx == "string" && gx.length > 3 && gx.substring(0, 3).toLowerCase() == "inf")) {
        this.id = gx;
        this.panel = (typeof gx == "object") ? gx : document.getElementById(gx);
        if (gA != null && gA != "undefined") {
            var zh = cq.vp(gA);
            this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(zh[1])));
            this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(zh[0]) % 360));
            zh = null
        }
        if (typeof this.panel != "undefined" && this.panel != null) {
            if (!this.panel.style.zIndex) this.panel.style.zIndex = 0;
            this.left = 0;
            this.top = 0;
            if (this.panel.style.left) this.left = parseInt(this.panel.style.left);
            if (this.panel.style.top) this.top = parseInt(this.panel.style.top);
            if (!this.panel.style.height) {
                this.panel.style.height = this.panel.clientHeight + 'px'
            };
            if (!this.panel.style.width) {
                this.panel.style.width = this.panel.clientWidth + 'px'
            };
            if (this.panel.style.width) this.width = parseInt(this.panel.style.width);
            if (this.panel.style.height) this.height = parseInt(this.panel.style.height)
        }
    } else {
        this.gA = gA;
        this.gx = gx
    }
    this.strImgUrl = strImgsvrUrl;
    this.AG = (typeof AB == "undefined") ? 0 : parseInt(AB);
    this.nT = 0;
    this.py = 0;
    this.rotation = 0;
    this.gk = Math.cos(this.rotation / 180 * Math.PI);
    this.wT = Math.sin(this.rotation / 180 * Math.PI);
    this.yv = (yv == "undefined") ? "" : yv;
    this.pU = [];
    this.qE = [];
    this.yl = (typeof x6 == "undefined" || x6 == null) ? ds : x6;
    this.u2 = null;
    this.u3 = '';
    this.xK = "png" + t0m8;
    this.xw = this.yl;
    this.yh = "";
    this.x4 = this.yl;
    this.x3 = null;
    this.uu = null;
    this.xX = this.yl;
    this.pJ = null;
    this.v_0 = [
        ["", 1],
        [2, 3]
    ];
    this.bp = true;
    this.ff = false;
    this.fe = true;
    this.sf = null;
    this.fj = (typeof bDefaultControlOn == "undefined") ? true : bDefaultControlOn;
    this.fa = false;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.aO = [];
    this.aN = [];
    this.yG = [];
    this.R93 = null;
    this.pU = [];
    this.aE = [];
    this.aF = null;
    this.aG = null;
    this.aH = null;
    this.zy = null;
    this.tG = null;
    this.brush = new MBrush("#FF0000", 3);
    this.sv = 0;
    this.fo = false;
    this.gJ = null;
    this.gI = new Image();
    this.l850P = new MBound(0, 0, 0, 0);
    this.bInitialized = false;
    this.c0 = false;
    this.w3 = [];
    this.cI = true;
    this.cn = false;
    this.gc = [];
    this.u5 = [];
    this.u5['length'] = 0;
    this.vA = this.sS;
    this.fs = false;
    this.c9 = false;
    this.q6AM = null;
    this.tD = 0;
    this.gM = 1.0;
    this.xc = null;
    this.mapContextMenu = null;
    this.overview = new yui(this);
    this.ovw = this.overview;
    this.wK = [];
    if (typeof this.panel == "undefined" || this.panel == null) {
        document.writeln('<div unselectable="on" id="' + this.id + '" style="position:absolute;overflow:hidden; width:' + this.width + 'px; height:' + this.height + 'px; left:' + this.left + 'px; top:' + this.top + 'px;"></div>');
        this.panel = aa(this.id)
    } else {
        this.panel.style.overflow = "hidden"
    }
    this.map = this.panel;
    if (this.map) {
        this.map.setAttribute("align", "left");
        if (this.map.style.position != "absolute") {
            this.map.style.position = "relative"
        }
        var R7m = "http://www.mapbar.com/ApiCopyrightLink.html?referrer=" + window.location.host;
        this._3297 = document.createElement("div");
        this._3297.style.width = this.$D5.width + "px";
        this._3297.style.height = this.$D5.height + "px";
        this._3297.style.overflow = "hidden";
        this._3297.innerHTML = "<img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-25px;top:-158px' />";
        this._3297.id = "ImgCopyright";
        this._3297.style.position = "absolute";
        this._3297.style.zIndex = 3;
        this._3297.style.top = (this.height - 22) + "px";
        this._3297.setAttribute("whohide", "");
        this._3297.style.cursor = "pointer";
        this._3297.onclick = function () {
            window.open(R7m)
        };
        this.gvP = document.createElement('div');
        this.gvP.style.position = 'absolute';
        this.gvP.style.zIndex = 3;
        this.gvP.style.fontSize = '12px';
        this.gvP.style.fontFamily = 'Arial';
        this.gvP.style.top = (this.height - 25) + 'px';
        this.gvP.style.left = (this.width - 70) + 'px';
        this.gvP.style.background = 'none';
        this.gvP.style.whiteSpace = 'nowrap';
        var i1U = document.createElement('span');
        i1U.style.color = '#000';
        i1U.style.margin = '0 10px 0 0';
        i1U.innerHTML = DEFAULT_DRAWING_NUMBER;
        var a0b9 = document.createElement('span');
        a0b9.innerHTML = DEFAULT_NAV_INFO;
        this.gvP.appendChild(i1U);
        this.gvP.appendChild(a0b9);
        this.EAU_ = i1U;
        this.t90 = a0b9;
        this.l2J = 0;
        this.map.appendChild(this._3297);
        this.map.appendChild(this.gvP);
        this.G4j7.width = this.gvP.offsetWidth;
        this.G4j7.height = this.gvP.offsetHeight
    }
    this.rr83w = false;
    this.b021 = false;
    this.uw = 0;
    this.t9 = 0;
    this.xe = 10;
    if (bp) {
        this.setOverlay('base')
    }
    this.fM = null;
    this.AY = 0.2;
    this.AS = -1;
    this.AT = 0;
    this.AZ = null;
    this.vg = 20.0;
    this.vh = null;
    this.Ah = null;
    this.vc = 0;
    this.vd = 0;
    this.vi = 0;
    this.tB = {
        "zoomin": 1,
        "zoomout": 2,
        "pan": 3,
        "erase": 13,
        "edit": 23,
        "lookup": 5,
        "bookmark": 6,
        "drawline": 9,
        "drawarea": 10,
        "measure": 11,
        "measarea": 15,
        "snapshot": 24,
        "roadline": 25
    };
    this.eI1I = strImgsvrUrl + 'mapbank/mapbar/';
    this.n5R = strImgsvrUrl + 'mapbank/mapbar/';;
    this.l9D4x = 'png' + t0m8
};
Maplet.MICON_IMGSRC_FLAG = "imgsrc";
Maplet.MLABEL_TEXT_FLAG = "lbltext";
Maplet.LEFT_TOP = 1;
Maplet.LEFT_BOTTOM = 2;
Maplet.RIGHT_TOP = 3;
Maplet.RIGHT_BOTTOM = 4;
Maplet.UNLOAD = 0;
Maplet.LOADING = 1;
Maplet.LOADED = 2;
Maplet.h7049 = 3;
Maplet.prototype = {
    onresize: function () {
        if (this.controlCanvas && this.controlCanvas.options.view.ruler) {
            if (this.height >= 270) {
                this.controlCanvas.showCtlRuler(true, true, false)
            } else {
                this.controlCanvas.showCtlRuler(false, true, false)
            }
        }
        this.Ad9();
        this.r9y3V();
        this._a2()
    }, _a2: function () {
        if (this.IxVyB && this.snK2) {
            this.snK2.setAttribute("viewBox", "-" + this.width + " -" + this.height + " " + this.width * 3 + " " + this.height * 3);
            this.snK2.setAttribute("style", "position: absolute; left: -" + this.width + "px; top: -" + this.height + "px; z-index: 0;");
            this.snK2.setAttribute("height", this.height * 3 + "px");
            this.snK2.setAttribute("width", this.width * 3 + "px")
        }
    }, Ad9: function () {
        this.G4j7.width = this.gvP.offsetWidth;
        this.G4j7.height = this.gvP.offsetHeight;
        var r23$t = {
            w: 0,
            h: this.$D5.height
        };
        if (this._3297.style.display != "none") r23$t.w = r23$t.w + this.$D5.width + 5;
        if (this.Y_H90) r23$t.w = r23$t.w + this.G4j7.width + 5;
        var _1B8H = this.width;
        if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.RIGHT_BOTTOM) {
            _1B8H = _1B8H - this.controlCanvas.getRect().width
        }
        if (this.overview.location.type == Maplet.RIGHT_BOTTOM) {
            var PLm = this.overview.getRect();
            if (_1B8H >= PLm.min.x && PLm.min.x != 0) {
                _1B8H = PLm.min.x;
                if ((this.width - PLm.max.x >= r23$t.w) || (this.height - PLm.max.y >= r23$t.h)) _1B8H = this.width
            }
        }
        var l00$X = this.Y_H90 ? this.G4j7.width : 0;
        var G6627 = this.Y_H90 ? r0JS(this.gvP.style.left) : _1B8H;
        if (this.Y_H90) {
            with(this.gvP.style) {
                left = _1B8H - l00$X - 5 + "px";
                top = (this.height - 23) + "px";
                G6627 = this.Y_H90 ? r0JS(left) : _1B8H
            }
        }
        with(this._3297) {
            if (style.display != "none") {
                style.left = G6627 - offsetWidth - 5 + "px";
                style.top = (this.height - 26) + "px"
            }
        }
    }, nI: function () {
        if (!this.ff) return null;
        if (this.AP == null) {
            this.AP = new AO(this, -1, this.width - 16, 0, 16, this.height, this.ff, this.panel)
        }
        return this.AP
    }, wP: function (e) {
        k1FD(e);
        if (this.$7BK8) return false;
        var pt = new MPoint(this.toMapCoordinate(this.moveX, this.moveY));
        pt.initialize(this);
        MEvent.trigger(this, "contextmenu", pt);
        var target = (px) ? event.srcElement : e.target;
        if (this.xc) this.xc.hide();
        if (target.id.indexOf('MPolyline_') > -1) {
            if (target.id.indexOf('_midnode_') > -1) return;
            var sj55 = target.H96;
            if (!sj55.FG7R7) {
                if (sj55.pts.length <= 2) return
            }
        }
        var menu = null;
        var overlay = target.getAttribute("oid");
        overlay = typeof this.u5[overlay] != "undefined" ? this.u5[overlay] : null;
        if (overlay && typeof overlay.getContextMenu == "function") {
            menu = overlay.getContextMenu(target)
        } else if (typeof target.contextmenu != "undefined" && target.contextmenu) {
            menu = target.contextmenu
        }
        if (menu) {
            this.xc = menu;
            menu.g4_0(typeof target.id == "string" ? target.id : "");
            menu._2P2(overlay);
            menu.show(this.moveX, this.moveY)
        } else {
            if (this.mapContextMenu != null) {
                this.xc = this.mapContextMenu;
                this.mapContextMenu.show(this.moveX, this.moveY)
            }
        }
    }, getContextMenu: function () {
        return this.mapContextMenu
    }, setContextMenu: function (uc) {
        if (this.mapContextMenu != uc) {
            this.removeContextMenu()
        }
        this.mapContextMenu = uc;
        if (this.mapContextMenu != null) {
            this.mapContextMenu.initialize(this)
        }
    }, setStandardContextMenu: function (uc) {
        this.xc = uc
    }, removeContextMenu: function () {
        if (this.mapContextMenu != null) {
            if (this.xc == this.mapContextMenu) this.xc = null;
            this.sF.div.removeChild(this.mapContextMenu.c020);
            this.mapContextMenu.maplet = null;
            this.mapContextMenu = null
        }
    }, showMap: function () {
        if (l49R0 && this.width > 0) {
            this.panel.style.width = (this.width - 1) + "px";
            this.panel.style.height = (this.height - 1) + "px";
            this.panel.style.width = this.width + "px";
            this.panel.style.height = this.height + "px"
        }
        if (M7$6 || Iv4) this.panel.onselectstart = function () {
            return false
        };
        if (MapBackgroundColor) this.panel.style.backgroundColor = MapBackgroundColor;
        MEvent.bindDom(this.panel, "contextmenu", this, this.wP);
        this.sG = new fD("MapContainerBg", 0, 0, this.width, this.height, true, 0, '', this.panel);
        this.sF = new fD("MapContainer", 0, 0, this.width, this.height, true, 2, '', this.panel);
        this.zs = new fD("ToolTip", 0, 0, 0, 0, false, 24, '', this.sF);
        this.sE = new fD("LayerMap", 0, 0, this.width, this.height, true, 2, '', this.sF);
        this.vx = new fD("LayerPoiMap", 0, 0, this.width, this.height, true, 3, '', this.sF);
        this.nI();
        if (this.fj) {
            var gV = new MStandardControl();
            this.addControl(gV);
            this.controlCanvas = gV.nR
        }
        this.Cn30 = new fD('shadowLayer', 0, 0, 0, 0, true, 5, '', this.sF);
        this.wq = new fD("LayerScale", 1, this.height - 24, 70, 24, this.fe, 3, '', this.panel);
        var content = '<table border="0" width="100%" height="100%" style="border:2px solid #0E347F;"><tr ><td align="center" valign="middle" style="filter:alpha(opacity=30);opacity:0.3;background-color:#FFFFFF;"></td></tr></table>';
        this.sD = new fD("LayerBorder", 1, 1, 1, 1, false, 6, content, this.panel);
        this.sD.style.border = "1px solid #FFFFFF";
        this.snapshotBox = new MSnapshotBox(this);
        content = "<div style=\"position:absolute;border-width:2px 0px 0px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:2px 2px 0px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 0px 2px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:20px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 2px 2px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:20px;line-height:1px;\"></div>";
        this.Ab1.container = new fD("_mapbar_mw_indicator", 0, 0, this.Ab1.d$8.width, this.Ab1.d$8.height, true, 100, content, this.panel).div;
        this.Ab1.container.style.display = "none";
        this.Ab1.F8r00 = this.Ab1.container.getElementsByTagName("div");
        this.lA = new fD("LayerDrawMap", 0, 0, this.width, this.height, true, 6, '', this.sF);
        if (px) this.lA.style.backgroundImage = "url(" + sX + ")";
        if (!px) {
            this.lA.style.MozUserSelect = "none"
        }
        this.lA.style.do4Q = "none";
        this.lA.div.setAttribute($0eU, "true");
        this.ukd$.fC = new fD("_mapbar_drag_cross", 0, 0, this.ukd$.width, this.ukd$.height, true, 2, '', this.panel);
        with(this.ukd$.fC.div) {
            style.width = this.ukd$.width + "px";
            style.height = this.ukd$.height + "px";
            style.display = "none";
            style.overflow = "hidden"
        }
        if (l49R0) this.ukd$.fC.div.innerHTML = "<v:image  style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\" src='" + CTLIMG_RESOURCE[0].url + "' />";
        else this.ukd$.fC.div.innerHTML = "<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\">";
        this.overview.qa(this.panel); {
            var rightMargin = 15;
            var ui = 0;
            this.sg = (this.width > 360) ? 150 : 73;
            if ((this.overview.nF() + this.overview.nz()) > (this.height - 23)) {
                ui += Math.max(0, this.overview.nH() - (this.sg - 70))
            }
        }
        var _0e4 = document;
        if (px || _36s2) {
            _0e4 = this.map
        }
        this.mx23N["map_mousemove"] = MEvent.bindDom(_0e4, "mousemove", this, this.a3, false);
        this.mx23N["map_mousedown"] = MEvent.bindDom(this.map, "mousedown", this, this.a2, false);
        this.mx23N["map_mouseup"] = MEvent.bindDom(_0e4, "mouseup", this, this.a6, false);
        this.mx23N["map_click"] = MEvent.bindDom(this.map, "click", this, this.aZ);
        this.mx23N["map_dblclick"] = MEvent.bindDom(this.map, "dblclick", this, this.a1);
        this.mx23N["map_mouseout"] = MEvent.bindDom(this.map, "mouseout", this, this.a4);
        this.mx23N["map_drag"] = MEvent.bindDom(this.map, "drag", this, this.a3);
        this.mx23N["map_dragstart"] = MEvent.bindDom(this.map, "dragstart", this, this.a3);
        this.mx23N["map_dragend"] = MEvent.bindDom(this.map, "dragend", this, this.a3);
        this.mx23N["map_mouseover"] = MEvent.bindDom(this.map, "mouseover", this, this.a5);
        this.mx23N["map_mousewheel"] = MEvent.bindDom(this.map, "mousewheel", this, this.a7);
        this.mx23N["map_DOMMouseScroll"] = MEvent.bindDom(this.map, "DOMMouseScroll", this, this.a7);
        if (kp) {
            this.mx23N["document_keydown"] = MEvent.bindDom(document, "keydown", this, this.onkeydown)
        }
        this.qd();
        this.setZoomLevel(this.AG);
        this.setMode(this.sS);
        if (this.zP == null) {
            this.zP = setInterval("document['mapbar-maplet'].zL()", 100)
        }
    }, qd: function () {
        this.sD.hide();
        this.sD.resize(1, 1);
        this.sD.moveTo(-10, -10);
        if (document.all) {
            this.sE.moveTo(0, 0);
            this.sE.show();
            this.vx.moveTo(0, 0);
            this.vx.show();
            this.lA.moveTo(0, 0);
            this.lA.show()
        }
    }, setStyle: function (x7, xH) {
        if (this.yl != x7) {
            this.yl = x7;
            if ("aerial" == this.yl || this.yl.indexOf("aerial") >= 0) {
                this.xK = "jpg"
            } else {
                this.xK = "png"
            } if (typeof xH != "undefined") {
                this.xK = xH
            }
            if (typeof this.sF != "undefined") {
                for (var i in this.pU) {
                    try {
                        if (this.pU[i] != null && typeof this.pU[i] == "object") {
                            if (this.pU[i].parentNode != null) {
                                this.pU[i].parentNode.removeChild(this.pU[i])
                            }
                            this.pU[i] = null
                        }
                    } catch (e) {}
                }
                this.refresh();
                MEvent.trigger(this, "style", x7)
            }
        }
    }, setRotation: function (v0) {
        if (px && rs) {
            this.rotation = v0;
            this.gk = Math.cos(this.rotation / 180 * Math.PI);
            this.wT = Math.sin(this.rotation / 180 * Math.PI)
        }
    }, setHeadMode: function (pz) {
        this.nT = pz
    }, setOverlay: function (xZ, uz) {
        if (typeof uz == "string") {
            this.u3 = uz
        }
        if (this.u2 != xZ) {
            this.u2 = xZ
        }
        if (typeof this.sF != "undefined") {
            this.refresh()
        }
    }, np0J: function () {
        var ll = sj[this.AG] * this.width / this.imgWidth;
        this.l850P.tl = (this.gA - ll / 2);
        this.l850P.s6 = (this.gA + ll / 2);
        var lk = qP[this.AG] * this.height / this.imgHeight;
        this.l850P.tj = (this.gx - lk / 2);
        this.l850P.s4 = (this.gx + lk / 2)
    }, refresh: function (w15) {
        this.u0(w15);
        this.u8()
    }, fL: function () {
        if (this.fM != null) {
            clearTimeout(this.fM);
            this.fM = null
        }
        if (this.c0 || this.fs || f1.fx.length > 0) {
            this.fM = getTimeout(this, this.fL, 100);
            return
        }
        this.no()
    }, no: function () {
        var pL = 0;
        for (var i in this.pU) {
            try {
                if (this.pU[i] != null && typeof this.pU[i] == "object") {
                    if (this.pU[i].c2 == true) {} else {
                        if (this.pU[i].parentNode != null) {
                            _removeNode(this.pU[i])
                        }
                        this.pU[i].onerror = null;
                        this.pU[i].onload = null;
                        this.pU[i] = null;
                        delete this.pU[i];
                        pL++
                    }
                }
            } catch (e) {}
        }
    }, zL: function () {
        if (this.YF8_ || this.fs || this.c0 || (typeof this.Ai != "undefined" && this.Ai != 0)) return;
        var sP = parseInt(this.sF.style.left);
        var sQ = parseInt(this.sF.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0 || (sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            this.fs = true;
            this.zA()
        }
    }, zA: function () {
        if (this.fs == false) return;
        var sP = parseInt(this.sF.style.left);
        var sQ = parseInt(this.sF.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            try {
                var qy = 0;
                var p1 = 0;
                if ((sP + this.tf1) >= 0) {
                    this.th--;
                    this.tf1 -= parseInt(this.imgWidth);
                    qy = this.th;
                    p1 = this.tf1
                }
                if ((sP + this.sZ - this.width) <= 0) {
                    this.s2++;
                    p1 = this.sZ;
                    this.sZ += parseInt(this.imgWidth);
                    qy = this.s2
                }
                var ix = qy;
                var nL = nM[this.AG];
                var s8 = parseInt(360 / sj[this.AG]);
                qy = (qy) % s8;
                if (qy >= (s8 / 2)) qy -= s8;
                if (qy < (-s8 / 2)) qy += s8;
                var yk = this.yl;
                for (var iy = this.ti; iy <= this.s3; iy++) {
                    var qA = iy;
                    var p3 = (-(iy - this.ti + 1) * this.imgHeight) + this.s1;
                    this.aA(p1, p3, qy, qA, ix, iy, yk)
                }
                this.c0 = false
            } catch (e) {}
        }
        if ((sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            try {
                var qA = 0;
                var p3 = 0;
                if ((sQ + this.tg) >= 0) {
                    this.s3++;
                    this.tg -= parseInt(this.imgHeight);
                    qA = this.s3;
                    p3 = this.tg
                }
                if ((sQ + this.s1 - this.height) <= 0) {
                    this.ti--;
                    p3 = this.s1;
                    this.s1 += parseInt(this.imgHeight);
                    qA = this.ti
                }
                var iy = qA;
                var nL = nM[this.AG];
                var s8 = parseInt(360 / sj[this.AG]);
                var yk = this.yl;
                for (var ix = this.th; ix <= this.s2; ix++) {
                    var qy = ix;
                    qy = (qy) % s8;
                    if (qy >= (s8 / 2)) qy -= s8;
                    if (qy < (-s8 / 2)) qy += s8;
                    var p1 = ((ix - this.th) * this.imgWidth) + this.tf1;
                    this.aA(p1, p3, qy, qA, ix, iy, yk)
                }
                this.c0 = false
            } catch (e) {}
        }
        this.fs = false
    }, aA: function (p1, p3, qy, qA, ix, iy, yk) {
        var nL = nM[this.AG];
        var dirx = parseInt(Math.floor((qy) / nL));
        var diry = parseInt(Math.floor((qA) / nL));
        if (dirx < 0) dirx += 1;
        if (diry < 0) diry += 1;
        var L037 = (qy) - dirx * nL;
        var JT6y = (qA) - diry * nL;
        var pM = this.eI1I.replace("img", "img" + this.WoUJ(L037, JT6y)) + this.sR;
        var xY = ((this.AG).toString(16) + ix.toString(16) + 'l' + iy.toString(16)).toLowerCase();
        if (this.AG >= 14) pM += dirx + "/";
        pM += dirx + "_" + diry + "/";
        pM += L037 + "_" + JT6y + "." + this.xK;
        if (pM && pM.indexOf("NaN") < 0) {
            if (this.pU[xY] == null) {
                if (rs == 0 || !px) {
                    this.pU[xY] = new Image();
                    this.pU[xY].id = xY;
                    this.pU[xY].name = xY;
                    this.pU[xY].ntry = "0";
                    this.pU[xY].unselectable = "on";
                    this.pU[xY].style.position = "absolute"
                } else {
                    this.pU[xY] = document.createElement("v:Image");
                    this.pU[xY].id = xY;
                    this.pU[xY].name = xY;
                    this.pU[xY].ntry = "0";
                    this.pU[xY].unselectable = "on";
                    this.pU[xY].style.position = "absolute";
                    this.pU[xY].cE = "f";
                    this.pU[xY].style.rotation = this.rotation;
                    this.pU[xY].style.width = this.imgWidth + "px";
                    this.pU[xY].style.height = this.imgHeight + "px"
                }
                f1.nk(this.pU[xY], pM, this.imgWidth, this.imgHeight);
                this.sE.div.appendChild(this.pU[xY])
            } else {
                if (px && rs) {
                    this.pU[xY].style.rotation = this.rotation
                }
            }
            var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
            this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
            this.pU[xY].c2 = true;
            this.pU[xY].setAttribute("origy", parseInt(p5 - this.imgHeight / 2));
            this.pU[xY].setAttribute("origx", parseInt(p2 - this.imgWidth / 2));
            xY = null
        }
        pM = null
    }, uc_: function () {
        this.no();
        this.sG.div.style.width = this.sE.div.style.width;
        this.sG.div.style.height = this.sE.div.style.height;
        this.sG.div.style.left = this.sE.div.style.left;
        this.sG.div.style.top = this.sE.div.style.top;
        this.sG.div.style.visibility = "visible";
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.parentNode) {
                img.parentNode.removeChild(img);
                this.sG.div.appendChild(img)
            }
        }
        this.KOC();
        this.p2Wu = false
    }, KOC: function () {
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.parentNode) img.c2 = false
        }
    }, KT9n: function () {
        this.KOC();
        this.no()
    }, u8: function (nn, zE) {
        if (this.fe) {
            var ws = (this.xg * 100 * 60 / parseInt(this.imgWidth)) * this.gM;;
            var ns = "#000000";
            var xC = (en) ? "km" : tX("%u516E%uE338");
            var xF = (en) ? "mi" : tX("%u54EA");
            ws = (ws < 10) ? (ws).toPrecision(1) : parseInt(ws);
            if (this.wq.div.innerHTML == "") {
                var x2 = ["<div id=\"_scaleValue\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + ns + ";FONT-WEIGHT: bold;left:4px;top:0px;\">&nbsp;" + ws + " " + xC + "</div>"];
                x2.push("<div style=\"position:absolute;width:69px;height:11px;overflow:hidden;top:8px;\">");
                if (l49R0) {
                    x2.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-8px;top:-209px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
                } else {
                    x2.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-8px;top:-209px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
                }
                x2.push("</div>");
                if (en == 1) {
                    this.wq.style.top = r0JS(this.wq.style.top) - 10 + "px";
                    this.wq.style.height = r0JS(this.wq.style.height) + 10 + "px";
                    x2.push("<div id=\"_scaleValue2\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + ns + ";FONT-WEIGHT: bold;left:4px;top:19px;\">&nbsp;" + ws + ' ' + xF + "</div>")
                }
                this.wq.div.innerHTML = x2.join("")
            } else {
                if (en == 1) {
                    aa("_scaleValue").innerHTML = "&nbsp;" + ws + ' ' + xC;
                    if (aa("_scaleValue2")) aa("_scaleValue2").innerHTML = "&nbsp;" + ws + ' ' + xF
                } else aa("_scaleValue").innerHTML = "&nbsp;" + ws + ' ' + xC
            }
            this.wq.show()
        } else {
            this.wq.hide()
        }
    }, r9y3V: function () {
        if (!this.wq) return;
        if (this.fe) {
            var l = 4,
                yw;
            if (en == 1) yw = this.height - 34;
            else yw = this.height - 24;
            var LPR4s = 0,
                LqK48 = 0;
            if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.LEFT_BOTTOM) {
                LPR4s = this.controlCanvas.getRect().max.x + 10
            }
            if (this.overview && this.overview.location.type == Maplet.LEFT_BOTTOM) {
                LqK48 = this.overview.getRect().max.x + 10
            }
            this.wq.moveTo(Math.max(l, Math.max(LPR4s, LqK48)), yw)
        }
    }, showNavLogo: function (c2) {
        if (!c2) {
            this.gvP.style.display = "none"
        } else {
            this.gvP.style.display = "block"
        }
        this.Y_H90 = c2;
        this.Ad9()
    }, waitPan: function (x, y, fy) {
        if (this.Ah) clearTimeout(this.Ah);
        this.Ah = null;
        if (x && y) {
            if (this.vi == 0) {
                this.vi = 1;
                this.vc = x;
                this.vd = y;
                this.fy = fy;
                this.Ah = getTimeout(this, this.waitPan, 500)
            }
        } else {
            if (this.vi) {
                this.vi = 0;
                this.panTo(this.vc, this.vd, this.fy)
            }
        }
    }, doPan: function () {
        this.fa = true;
        this.aR2_ = true;
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.PF1(true)
        }
        if (!this.p2Wu) {
            this.no();
            this.p2Wu = true
        }
        if (this.markerDragAnimation) {
            with(this.ukd$) {
                if (overlay != null && !overlay.ls) this.G69(false)
            }
        }
        var tN = parseInt(Math.sqrt(this.Aq * this.Aq + this.Aw * this.Aw));
        if (this.vh) clearTimeout(this.vh);
        this.vh = null;
        if ((this.va - tN) <= (1.2 * this.vg)) {
            this.Aq = this.xoffset;
            this.Aw = this.yoffset;
            this.sF.moveTo(this.Aq, this.Aw);
            this.vh = getTimeout(this, this.finishupPan, 10)
        } else {
            var lJ = this.xoffset * this.vg / this.va;
            var lL = this.yoffset * this.vg / this.va;
            this.Aq += lJ;
            this.Aw += lL;
            this.sF.moveTo(this.Aq, this.Aw);
            this.vh = getTimeout(this, this.doPan, 10)
        }
    }, finishupPan: function () {
        this.fa = false;
        this.K_0r4 = true;
        this.$96 = new Date().getTime();
        this.wbb1l = X0Jd(this.Aq);
        this.$X41 = X0Jd(this.Aw);
        if (this.vh) clearTimeout(this.vh);
        this.vh = null;
        this.setCenter(this.ve, this.vf);
        this.K_0r4 = false;
        if (this.R93 && this.R93.parentNode != this.sF.div) {
            this.sF.div.appendChild(this.R93)
        } else {} if (this.fy != null && this.fy != "undefined") eval(this.fy);
        this.aR2_ = false
    }, AN: function (AL, x, y) {
        this.lA.hide();
        if (this.Kw$79) {
            this.Kw$79.setVisible(false);
            MLayer.setTipVisible(false)
        }
        for (var i in this.$I78m) {
            var p = this.$I78m[i];
            if (p.options.zoomhide && p.isVisible()) {
                p.setVisible(false)
            }
        }
        if (!this.p2Wu) this.no();
        this.YF8_ = true;
        if (typeof x != "number") x = 0;
        if (typeof y != "number") y = 0;
        var AK = Math.pow(2, parseFloat(AL)) / Math.pow(2, this.AG);
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img.c2) {
                with(img.style) {
                    if (img.getAttribute("done") != "1") {
                        _removeNode(img);
                        img = null;
                        delete this.pU[i]
                    } else {
                        width = (this.imgWidth * AK < 10 ? 0 : this.imgWidth * AK + 1) + "px";
                        height = (this.imgHeight * AK < 10 ? 0 : this.imgHeight * AK + 1) + "px";
                        left = r0JS(img.getAttribute("origx")) * AK + 1 + "px";
                        top = r0JS(img.getAttribute("origy")) * AK + 1 + "px"
                    }
                }
            }
        }
        with(this.sE.div.style) {
            width = this.width * AK + "px";
            height = this.height * AK + "px";
            left = (this.width / 2 - r0JS(width) / 2 + x) + "px";
            top = (this.height / 2 - r0JS(height) / 2 + y) + "px"
        }
    }, Y9q4c: function (IE6_) {
        if (r0JS(this.sE.div.style.width) != this.width) {
            with(this.sE.div.style) {
                width = this.width + "px";
                height = this.height + "px";
                left = "0px";
                top = "0px"
            }
        }
        if (typeof IE6_ == "boolean" && IE6_) {
            for (var i in this.pU) {
                var img = this.pU[i];
                if (typeof img == "object" && img.c2) {
                    img.style.left = r0JS(img.getAttribute("origx"), 0) + "px";
                    img.style.top = r0JS(img.getAttribute("origy"), 0) + "px";
                    img.style.width = this.imgWidth + "px";
                    img.style.height = this.imgHeight + "px"
                }
            }
        }
        this.YF8_ = false
    }, removeLineAt: function () {}, addHotspot: function (lf, li, xP, tp, s0) {
        var nW = "hotspot" + this.aE.length;
        if (typeof li == "object" && li.toString() == "com.mapbar.maplet.MPoint") {
            lf = li.lat;
            li = li.lon
        } else {
            var zh = cq.vp(li);
            lf = Math.min(sy[1], Math.max(sy[0], parseFloat(zh[1])));
            li = Math.min(sz[1], Math.max(sz[0], parseFloat(zh[0]) % 360))
        }
        this.aE[this.aE.length] = new a8(nW, parseFloat(lf), parseFloat(li), xP, tp, s0)
    }, zp: function (x, y, AB) {
        var An = (x - this.width / 2);
        if (this.rotation != 0) {
            var At = (y - this.height / 2);
            An = An * this.gk + At * this.wT
        }
        AB = r0JS(AB, this.AG);
        var xd = sj[AB];
        var li = this.gA + An * xd / this.imgWidth;
        li = Math.min(sz[1], Math.max(sz[0], li % 360));
        return li
    }, zo: function (x, y, AB) {
        var At = (y - this.height / 2);
        if (this.rotation != 0) {
            var An = (x - this.width / 2);
            At = -An * this.wT + At * this.gk
        }
        AB = r0JS(AB, this.AG);
        var xd = qP[AB];
        var lf = this.gx - At * xd / this.imgHeight;
        lf = Math.min(sy[1], Math.max(sy[0], lf));
        return lf
    }, r60: function (B4jGk, U88s7) {
        var f8789 = cq.vp(B4jGk.getPid()),
            e26 = cq.vp(U88s7.getPid()),
            bQT39 = Math.round(this.gA * 1E5 + (e26[0] * 1E5 - f8789[0] * 1E5)) / 1E5,
            iVA5F = Math.round(this.gx * 1E5 + (f8789[1] * 1E5 - e26[1] * 1E5)) / 1E5,
            H$Y8 = this.zl(this.gA, this.gx),
            VyS9 = this.zm(this.gx, this.gA),
            XU8 = this.zl(bQT39, iVA5F),
            X9SkQ = this.zm(iVA5F, bQT39);
        return [Math.round(XU8 - H$Y8), Math.round(VyS9 - X9SkQ)]
    }, zl: function (li, lf) {
        var g2 = ((parseFloat(li) - this.gA) % 360);
        if (g2 > 180) g2 -= 360;
        if (g2 < -180) g2 += 360;
        var p1 = Math.round(this.width / 2 + g2 / sj[this.AG] * this.imgWidth);
        if (this.rotation != 0) {
            var p3 = Math.round(this.height / 2 - ((parseFloat(lf) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
            p1 = (p1 - this.width / 2) * this.gk - (p3 - this.height / 2) * this.wT + this.width / 2
        }
        return p1
    }, zm: function (lf, li) {
        var p3 = Math.round(this.height / 2 - ((parseFloat(lf) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
        if (this.rotation != 0) {
            var g2 = ((parseFloat(li) - this.gA) % 360);
            if (g2 > 180) g2 -= 360;
            if (g2 < -180) g2 += 360;
            var p1 = Math.round(this.width / 2 + g2 / sj[this.AG] * this.imgWidth);
            p3 = (p1 - this.width / 2) * this.wT + (p3 - this.height / 2) * this.gk + this.height / 2
        }
        return p3
    }, setMode: function (zr, fy) {
        zr = zr.toString().toLowerCase();
        zr = (this.tB[zr]) ? parseInt(this.tB[zr]) : parseInt(zr);
        if ((zr != 3 && zr != 23) && this.sS == zr) return null;
        if (this.sS == 3 || this.sS == 23) this.vA = this.sS;
        this.sS = parseInt(zr);
        this.c2la();
        var l8 = null;
        if (zr != 'measure' && zr != 11) {
            clearInterval(this.x0P);
            this.x0P = undefined
        }
        switch (zr) {
        case 'zoomin':
        case '1':
        case 1:
            this.cS = true;
            this.gvL('crosshair', this.map);
            this.sS = 1;
            l8 = 'zoomin';
            break;
        case 'zoomout':
        case '2':
        case 2:
            this.cS = true;
            this.sS = 2;
            this.gvL('crosshair', this.map);
            l8 = 'zoomout';
            break;
        case ts.ty:
        case "pan":
        case 3:
            this.sS = 3;
            l8 = 'pan';
            zr = null;
            this.setCursorStyle("default", "");
        case ts.l3:
        case 13:
        case 'erase':
            if (zr) {
                this.sS = 13;
                l8 = 'erase';
                zr = null
            }
        case ts.tu:
        case 'edit':
        case 23:
            if (zr) {
                this.sS = 23;
                l8 = 'edit';
                zr = null
            }
            this.cO = true;
            this.gvL('default', this.map);
            break;
        case ts.tv:
        case "lookup":
        case 5:
            this.cS = true;
            this.gvL('crosshair', this.map);
            this.sS = 5;
            l8 = 'lookup';
            break;
        case '6':
        case 6:
        case 'bookmark':
            this.gvL('default', this.map);
            l8 = 'bookmark';
            this.sS = 6;
            break;
        case '7':
        case 7:
            this.gvL('default', this.map);
            break;
        case '8':
        case 8:
            this.gvL('default', this.map);
            break;
        case '9':
        case 9:
        case 'drawline':
            this.gvL('default', this.map);
            this.po = -1;
            this.sS = 9;
            l8 = 'drawline';
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '10':
        case 10:
        case 'drawarea':
            this.gvL('default', this.map);
            this.po = -1;
            this.sS = 10;
            l8 = 'drawarea';
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '11':
        case 11:
        case 'measure':
            this.setCursorStyle("default", this.e76.cursor);
            this.gvL('default', this.map);
            l8 = 'measure';
            this.sS = 11;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '15':
        case 15:
        case 'measarea':
            this.gvL('default', this.map);
            l8 = 'measarea';
            this.sS = 15;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '24':
        case 24:
        case 'snapshot':
            this.cS = true;
            this.gvL('crosshair', this.map);
            l8 = 'snapshot';
            this.sS = 24;
            break;
        case '25':
        case 25:
        case 'roadline':
            this.gvL('pointer', this.map);
            l8 = 'roadline';
            this.sS = ts.W28Q;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        default:
            break
        };
        if (l8 != null && typeof fy == "function") {
            if (this.ON5) {
                MEvent.removeListener(this.ON5)
            };
            this.ON5 = MEvent.addListener(this, l8, fy)
        };
        if (l8 != null) {
            MEvent.trigger(this, "setmode", l8)
        };
        return this.ON5
    }, A8T: function (pt, n) {
        var $b9 = new MMarker(pt, new MIcon(this.rlConfig.eM03I, 11, 11));
        $b9.creator = MLayer.SYSTEM;
        this.addOverlay($b9);
        this.P8h.o7c.push($b9)
    }, GP50: function (tC32, QUH8Q, u$90, _S66) {
        if (this.sS == ts.W28Q || (this.sS != ts.W28Q && tC32)) {
            var r = eval("typeof " + this.rlConfig.resultName + "=='undefined'?null:" + this.rlConfig.resultName);
            if (r) {
                if (this.P8h.x917) {
                    this.removeOverlay(this.P8h.x917, true);
                    this.P8h.x917 = null
                }
                var pts = [];
                var _98i = 0;
                if (r.a.length) {
                    var data = r.a[0];
                    var pts = this.decodeLine(data.a, data.b);
                    _98i = r0JS(data.e, 0)
                } else {
                    pts.push(QUH8Q);
                    pts.push(u$90)
                }
                var __5EX = new MPolyline(pts);
                if (this.sS == ts.W28Q) __5EX.creator = MLayer.SYSTEM;
                if (tC32) {
                    this.P8h.ioQ4.push(__5EX);
                    this.P8h.OY7.A274 += _98i;
                    this.P8h.OY7.BmxBp = 0
                } else {
                    this.P8h.x917 = __5EX;
                    this.P8h.OY7.BmxBp = _98i
                }
                this.addOverlay(__5EX);
                r = undefined;
                eval(this.rlConfig.resultName + "=undefined");
                this.n03bF()
            }
            with(this.P8h.XM6H) {
                if (v53hO != S27 || $4li$ != l5842) {
                    S27 = v53hO;
                    l5842 = $4li$;
                    this.yHC5C(new MPoint(v53hO, $4li$, false), false)
                } else {
                    this.P8h.TF9Xn = false
                }
            }
        }
        _removeNode(aa(_S66))
    }, yHC5C: function (u$90, tC32) {
        if (typeof tC32 != "boolean") tC32 = false;
        this.P8h.TF9Xn = true;
        var lG94F = this.P8h.o7c;
        var Gx14 = "%252C";
        var QUH8Q = lG94F[lG94F.length - 1].pt;
        var url = this.rlConfig.url + "&_=" + new Date().getTime() + "&nh=" + QUH8Q.getPid() + "_" + Gx14 + u$90.getPid() + "_&ri=" + this.rlConfig.resultName;
        new Y6WY(url, this.GP50, false, true, this, this.GP50, [tC32, QUH8Q, u$90]).P4MUn()
    }, n03bF: function () {
        with(this.P8h) {
            if (!tip.maplet) this.addPanel(tip);
            if (!tip.isVisible()) tip.show();
            var d = tip.dom.firstChild.childNodes[0];
            var yw = "start";
            if (o7c.length == 0) {
                d.style.display = "none"
            } else {
                if (o7c.length == 1) yw = "one";
                else yw = "end";
                var _98i = OY7.A274 + OY7.BmxBp;
                d.innerHTML = _98i < 1000 ? _98i + " \u7c73" : (_98i / 1000).toFixed(1) + " \u516c\u91cc";
                d.style.display = ""
            } if (this.rlConfig.tip[yw]) tip.dom.firstChild.childNodes[1].innerHTML = this.rlConfig.tip[yw];
            tip.setLocation({
                x: this.moveX + 20,
                y: this.moveY
            })
        }
    }, setCursorStyle: function (mode, icon) {
        if (typeof mode == "string" && typeof icon == "string" && mode) {
            if ("default,pointer,move,crosshair".indexOf(mode) != -1) {
                hA06_[mode] = icon
            }
        }
    }, gvL: function (mode, h9_5) {
        var icon = hA06_[mode];
        var cursor = "";
        if (typeof icon == "string" && icon) {
            cursor = "url('" + icon + "'),auto"
        } else {
            cursor = mode
        } if (h9_5.style.cursor != cursor) {
            h9_5.style.cursor = cursor
        }
    }, wN: function (x, y, ya, xu, ct) {
        if (typeof ya == "undefined" || ya == null) return;
        if (iToolTipStyle == "undefined" || iToolTipStyle == 1) {
            var p0 = (typeof ya == "object") ? ya : null;
            if (p0) {
                avBubble.gl(p0.title, p0.content);
                ct = xu
            } else {
                avBubble.gl(ya, xu)
            } if (p0) {
                this.R93 = p0.gv(x, y, true)
            } else {
                this.R93 = gp(ya, x, y, xu, true)
            }
        } else {
            var p0 = (typeof ya == "object") ? ya : null;
            if (p0) {
                setToolTipMenu(x, y, p0.title, p0.content)
            } else {
                setToolTipMenu(x, y, ya, xu)
            }
        }
    }, hideBubble: function () {
        hideBubble(this);
        if (this.R93) {
            if (this.R93.parentNode) this.R93.parentNode.removeChild(this.R93);
            this.R93 = null
        }
    }, hideBubbleShadow: function (hide) {
        hide = typeof hide === 'boolean' ? hide : true;
        this.Cn30.setVisible(!hide)
    }, aY: function () {
        if ((this.moveX > 0) && (this.moveX < this.width) && (this.moveY > 0) && (this.moveY < this.height) && (this.downX > 0) && (this.downX < this.width) && (this.downY > 0) && (this.downY < this.height)) {
            return true
        } else {
            return false
        }
    }, lu: function () {
        var w = 0,
            h = 0,
            x = 0,
            y = 0;
        if (this.moveX < this.downX && this.moveY < this.downY) {
            w = this.downX - this.moveX;
            h = this.downY - this.moveY;
            x = this.moveX;
            y = this.moveY
        } else if (this.moveX > this.downX && this.moveY < this.downY) {
            w = this.moveX - this.downX;
            h = this.downY - this.moveY;
            x = this.downX;
            y = this.moveY
        } else if (this.moveX < this.downX && this.moveY > this.downY) {
            w = this.downX - this.moveX;
            h = this.moveY - this.downY;
            x = this.moveX;
            y = this.downY
        } else if (this.moveX > this.downX && this.moveY > this.downY) {
            w = parseInt(this.moveX) - this.downX;
            h = parseInt(this.moveY) - this.downY;
            x = this.downX;
            y = this.downY
        } else {
            w = this.moveX - this.downX;
            h = this.moveY - this.downY;
            x = this.downX;
            y = this.downY
        } if (this.sS == ts.a2_Q) {
            this.snapshotBox.resize(w, h);
            this.snapshotBox.moveTo(x, y)
        } else {
            this.sD.resize(w, h);
            this.sD.moveTo(x, y)
        }
    }, c2la: function () {
        this.cL = false;
        this.cS = false;
        this.cO = false;
        this.cN = false;
        this.cR = false;
        this.closeMeasureCurrPath();
        this.setCursorStyle("default", "");
        if (this.zy) {
            this.zy.remove(true);
            this.zy = null
        }
        if (this.tG) {
            this.tG.remove(true);
            this.tG = null
        }
        if (this.sD.style.visibility == "visible") {
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
        if (this.snapshotBox.isVisible() && !this.snapshotBox.S0s0T) {
            this.snapshotBox.hide()
        }
        nX();
        with(this.P8h) {
            OY7.A274 = 0;
            OY7.BmxBp = 0;
            if (tip.maplet && tip.isVisible()) tip.hide();
            XM6H.S27 = XM6H.v53hO = 0;
            XM6H.l5842 = XM6H.$4li$ = 0;
            if (x917) {
                this.removeOverlay(x917, true);
                x917 = null
            }
            if (o7c.length) {
                for (var i = 0; i < o7c.length; i++) {
                    o7c[i].creator = MLayer.USER;
                    if (xH3dF) {
                        this.removeOverlay(o7c[i], true);
                        o7c[i] = null
                    }
                }
            }
            if (ioQ4.length) {
                for (var i = 0; i < ioQ4.length; i++) {
                    ioQ4[i].creator = MLayer.USER;
                    if (xH3dF) {
                        this.removeOverlay(ioQ4[i], true);
                        ioQ4[i] = null
                    }
                }
            }
            o7c = [];
            ioQ4 = [];
            TF9Xn = false;
            xH3dF = 1
        }
    }, clean: function () {
        this.hideBubble();
        this.refresh()
    }, showBasePois: function (c2) {
        this.bp = c2;
        this.refresh()
    }, addControl: function (gB, fi, q6, zw) {
        if (typeof gB == "string" || (typeof gB == "object" && gB.toString().indexOf("MStandardControl") > 0)) {
            if (this.controlCanvas) {
                this.controlCanvas.g1();
                this.controlCanvas = null
            }
            var t0 = null;
            if (typeof gB == "string") {
                if (q6 == null || q6 == "undefined") {
                    q6 = 0
                }
                if (zw == null || zw == "undefined") {
                    zw = 0
                }
                t0 = new MStandardControl(gB, q6, zw, fi)
            } else if (typeof gB == "object") {
                t0 = gB
            }
            if (t0) {
                t0.initialize(this)
            }
        } else if (typeof gB == "object") {
            if (this.gc[gB.id]) {
                return
            }
            gB.initialize(this);
            this.gc[gB.id] = gB;
            this.overview.addListener(this.gc[gB.id])
        }
    }, removeControl: function (gw) {
        if (typeof gw == "object" && this.gc[gw.id]) {
            this.gc[gw.id].remove();
            this.gc[gw.id] = null
        }
    }, getCurrentMap: function () {
        var sT = this.width * sj[this.AG] / this.imgWidth;
        cq.lf = this.gx;
        cq.li = this.gA;
        var gz = cq.zn();
        var vy = (this.aO.length > 0) ? "&pois=" + this.aO.length + "," : "";
        for (var i = 0; i < this.aO.length; i++) {
            vy += this.aO[i].zn() + "," + this.aO[i].xP + ","
        }
        var vw = (this.aN.length > 0) ? "&plines=" + this.aN.length + "," : "";
        for (var i = 0; i < this.aN.length; i++) {
            vw += this.aN[i].zn() + ";"
        }
        var u1 = "";
        for (var i in this.u5) {
            if (typeof this.u5[i] == "object" && this.u5[i] != null && this.u5[i].zq) {
                if (u1.length == 0) {
                    u1 = "&overlays="
                }
                u1 += this.u5[i].zq() + ";"
            }
        }
        return "&map=" + this.AG + "," + gz + "," + this.width + "," + this.height + "&zm=" + (Math.round(parseFloat(sT) * 1000) / 10.0) + "&width=" + this.width + "&height=" + this.height + "&ctr=" + gz + vy + vw + "&client=" + strLicenseKey + u1
    }, setCursorIcon: function (xI) {
        this.gJ = xI;
        this.gI.src = xI;
        nX()
    }, v1: function () {
        this.gJ = null;
        this.gI.src = null
    }, setBgColor: function (xt) {
        this.panel.style.backgroundColor = xt
    }, setTransparency: function (uo) {
        this.sE.div.style.filter = "alpha(opacity=" + uo + ");";
        this.sE.div.style.MozOpacity = (uo / 100.0);
        this.sE.div.style.opacity = (uo / 100.0);
        this.sE.div.style.qK = (uo / 100)
    }, ql: function () {
        return this.cI
    }, setActive: function (cT) {
        this.cI = cT
    }, onkeydown: function (e) {
        var l8 = (e) ? e : (window.event) ? window.event : null;
        if (l8) {
            var qJ = (l8.fG) ? l8.fG : ((l8.keyCode) ? l8.keyCode : ((l8.which) ? l8.which : 0));
            if (qJ == "37" || qJ == "38" || qJ == "39" || qJ == "40") {
                if (this.ql()) {
                    if (l8.target && ((l8.target.nodeName == "INPUT" && l8.target.getAttribute("type").toLowerCase() == "text") || l8.target.nodeName == "TEXTAREA")) {
                        return
                    }
                    if (l8.srcElement && ((l8.srcElement.tagName == "INPUT" && l8.srcElement.type == "text") || l8.srcElement.tagName == "TEXTAREA")) {
                        return
                    }
                    if (l8.shiftKey || l8.ctrlKey) {
                        if (qJ == "37") {
                            this.setRotation(this.rotation - 15);
                            this.refresh()
                        }
                        if (qJ == "39") {
                            this.setRotation(this.rotation + 15);
                            this.refresh()
                        }
                    } else {
                        if (qJ == "37") this.panTo(this.width / 2, 0);
                        if (qJ == "38") this.panTo(0, this.height / 2);
                        if (qJ == "39") this.panTo(-this.width / 2, 0);
                        if (qJ == "40") this.panTo(0, -this.height / 2)
                    }
                }
            }
        }
    }, getMaxBubbleSize: function () {
        var ix = 0;
        var iy = 0;
        var ax = this.width;
        var ay = this.height;
        var ooh8a = this.getOverviewRect();
        var m72 = {
            tn: ooh8a.min.x,
            vc7: ooh8a.max.x,
            width: ooh8a.max.x - ooh8a.min.x
        };
        var w383 = this.getControlRect();
        var W535 = {
            tn: w383.min.x,
            vc7: w383.max.x
        };
        if (this.controlCanvas) {
            with(this.controlCanvas) {
                if (isVisible()) {
                    if (options.location.type == Maplet.LEFT_TOP || options.location.type == Maplet.LEFT_BOTTOM) {
                        ix = Math.max(ix, w383.max.x)
                    } else {
                        ax = Math.min(ax, w383.min.x)
                    }
                }
            }
        }
        if (this.overview) {
            with(this.overview) {
                if (fg) {
                    if (location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM) {
                        ix = Math.max(ix, ooh8a.max.x + location.marginx)
                    } else {
                        ax = Math.min(ax, ooh8a.min.x)
                    }
                }
            }
        }
        var w = ax - ix;
        var h = ay - iy;
        if (!isNaN(parseInt(avBubble.S22)) && parseInt(avBubble.S22) < w) w = parseInt(avBubble.S22);
        if (!isNaN(parseInt(avBubble.T93N)) && parseInt(avBubble.T93N) < h) h = parseInt(avBubble.T93N);
        return {
            min: {
                x: ix,
                y: iy
            },
            max: {
                x: ax,
                y: ay
            },
            width: w,
            height: h,
            f0: W535,
            overview: m72
        }
    }, tAI8: function (random) {
        this.b021 = true;
        var d = new Date();
        new Y6WY(bpp[0] + "/poireport.txt" + (GOLDPOI_TXTRQT_RANDOM ? "?" + (d.getYear() > 1900 ? d.getYear() - 1900 : d.getYear()) + d.getMonth() + d.getDay() : ""), this.D_b, null, null, this, this.D_b).P4MUn()
    }, D_b: function () {
        if (typeof basepoilist == "object" && basepoilist) this.refresh();
        this.b021 = false
    }, setTrajectory: function (marker, xS32, uv, lX) {
        this.ux = (uv == null || uv == "undefined") ? 5 : parseInt(uv);
        this.pid = marker;
        this.lX = lX;
        var aU = xS32.pts;
        if (aU != null && aU.length > 0) {
            var qI = 0;
            this.zf = new Array();
            this.zg = new Array();
            this.p9 = 0;
            for (var i = 0; i < aU.length; i++) {
                {
                    var pt = cq.vp(aU[i].getPid());
                    this.zg[qI] = parseFloat(pt[0]);
                    this.zf[qI] = parseFloat(pt[1]);
                    qI++;
                    pt = null
                }
            }
            aU = null
        }
    }, rotate: function (fy) {
        if (this.uw <= this.t9) {
            this.uw = Math.min(this.t9, this.uw + this.xe)
        } else if (this.uw >= this.t9) {
            this.uw = Math.max(this.t9, this.uw - this.xe)
        }
        this.setRotation(this.uw);
        this.refresh();
        if (this.uw == this.t9) {
            setTimeout(fy, 100)
        } else {
            setTimeout("maplet.rotate(\"" + fy + "\")", 100)
        }
    }, doEmulation: function () {
        try {
            if (this.p9 == 0) {
                this.wY = this.zf[0];
                this.wZ = this.zg[0];
                this.py = this.p9;
                this.p9++
            }
            if (this.p9 < this.zf.length) {
                this.vh = null;
                if (this.pid.icon.div.parentNode != this.lA) {
                    this.lA.appendChild(this.pid.icon.div.parentNode);
                    this.pid.icon.div.style.zIndex = 200
                }
                if (this.nT == 1 && rs && this.py != this.p9) {
                    this.py = this.p9;
                    if (typeof this.lY == "undefined" || this.lY == null) {
                        this.lY = document.createElement("div");
                        this.lY.style.position = "absolute";
                        this.lY.style.zIndex = 1000;
                        this.lY.style.width = parseFloat(this.pid.icon.div.style.width) + "px";
                        this.lY.style.height = parseFloat(this.pid.icon.div.style.height) + "px";
                        this.lY.style.left = (this.width / 2 - parseFloat(this.pid.icon.div.style.width) / 2) + "px";
                        this.lY.style.top = (this.height / 2 - parseFloat(this.pid.icon.div.style.height) / 2) + "px";
                        this.lY.innerHTML = "<img src='" + this.pid.icon.imgUrl + "' width='" + parseFloat(this.pid.icon.div.style.width) + "px' height='" + this.pid.icon.div.style.height + "px'>";
                        this.map.appendChild(this.lY)
                    }
                    var v0 = -90 + parseFloat(180 * Math.atan2(this.zf[this.p9] - this.zf[this.p9 - 1], 0.8 * (this.zg[this.p9] - this.zg[this.p9 - 1])) / Math.PI);
                    if (v0 < 0) {
                        v0 += 360
                    }
                    v0 = v0 % 360;
                    if ((Math.abs(v0 - this.rotation) % 360) > 180) {
                        this.rotation += 360
                    }
                    if (this.rotation - 180 - 360 > 0) {
                        this.rotation = (this.rotation - 720)
                    }
                    this.uw = this.rotation;
                    this.t9 = v0;
                    if (this.p9 == 1) {
                        this.setRotation(v0);
                        this.setCenter(this.wY, this.wZ)
                    } else {
                        this.setCenter(this.wY, this.wZ);
                        setTimeout("maplet.rotate(\"maplet.doEmulation()\")", 500);
                        return
                    }
                }
                var yi = this.zl(this.zg[this.p9 - 1], this.zf[this.p9 - 1]);
                var yj = this.zm(this.zf[this.p9 - 1], this.zg[this.p9 - 1]);
                var l4 = this.zl(this.zg[this.p9], this.zf[this.p9]);
                var l5 = this.zm(this.zf[this.p9], this.zg[this.p9]);
                var w1 = this.zl(this.wZ, this.wY);
                var w2 = this.zm(this.wY, this.wZ);
                var zx = parseFloat(Math.sqrt((l4 - yi) * (l4 - yi) + (l5 - yj) * (l5 - yj)));
                var tN = parseFloat(Math.sqrt((w1 - yi) * (w1 - yi) + (w2 - yj) * (w2 - yj))) + this.ux;
                if (tN <= (zx - this.ux)) {
                    w1 = yi + tN * (l4 - yi) / zx;
                    w2 = yj + tN * (l5 - yj) / zx;
                    this.wZ = this.zg[this.p9 - 1] + tN * (this.zg[this.p9] - this.zg[this.p9 - 1]) / zx;
                    this.wY = this.zf[this.p9 - 1] + tN * (this.zf[this.p9] - this.zf[this.p9 - 1]) / zx
                } else {
                    w1 = l4;
                    w2 = l5;
                    this.wZ = this.zg[this.p9];
                    this.wY = this.zf[this.p9];
                    this.p9++
                } if (this.nT == 0) {
                    this.pid.icon.div.style.top = (w2 - parseFloat(this.pid.icon.div.style.height)) + "px";
                    this.pid.icon.div.style.left = (w1 - parseFloat(this.pid.icon.div.style.width) / 2) + "px"
                }
                if (this.nT == 1 && rs) {
                    this.sF.div.style.top = parseFloat(this.sF.div.style.top) + this.ux;
                    this.vh = getTimeout(this, this.doEmulation, 100)
                } else {
                    if (w1 < 0) {
                        this.panTo(this.width / 2, this.height / 2 - w2, "maplet.doEmulation()")
                    } else if (w1 > this.width) {
                        this.panTo(-this.width / 2, this.height / 2 - w2, "maplet.doEmulation()")
                    } else if (w2 < 0) {
                        this.panTo(this.width / 2 - w1, this.height / 2, "maplet.doEmulation()")
                    } else if (w2 > this.height) {
                        this.panTo(this.width / 2 - w1, -this.height / 2, "maplet.doEmulation()")
                    } else {
                        this.vh = getTimeout(this, this.doEmulation, 10)
                    }
                }
            } else {
                this.vh = null;
                this.zf = null;
                this.zg = null;
                this.pid.icon.div.style.zIndex = 1;
                if (this.lY) {
                    if (this.lY.parentNode) {
                        this.lY.parentNode.removeChild(this.lY);
                        this.lY = null
                    }
                }
                this.setRotation(0);
                this.refresh();
                if (this.lX != null || this.lX != "undefined") {
                    this.lX()
                }
            }
        } catch (nf) {}
    }, stopEmulation: function () {
        if (this.p9 && this.zf) this.p9 = this.zf.length
    }, getMarkersInPolygon: function (mp30) {
        var Yp1c1 = [];
        var pts = [];
        for (var i = 0; i < mp30.pts.length; i++) {
            pts.push({
                x: mp30.pts[i].mapX,
                y: mp30.pts[i].mapY
            })
        }
        var mG1 = this.getMarkers();
        for (var i = 0; i < mG1.length; i++) {
            var pt = {
                x: mG1[i].pt.mapX,
                y: mG1[i].pt.mapY
            };
            if (_isInsidePolygon(pt, pts)) Yp1c1.push(mG1[i])
        }
        return Yp1c1
    }, getMarkerPolygons: function (F9j) {
        var _dNQQ = this.getPolylines(2);
        var Yp1c1 = [];
        if (_dNQQ.length > 0) {
            var pt = {
                x: F9j.pt.mapX,
                y: F9j.pt.mapY
            };
            for (var i = 0; i < _dNQQ.length; i++) {
                var pts = [];
                var mp30 = _dNQQ[i];
                for (var r7X05 = 0; r7X05 < mp30.pts.length; r7X05++) pts.push({
                    x: mp30.pts[r7X05].mapX,
                    y: mp30.pts[r7X05].mapY
                });
                if (_isInsidePolygon(pt, pts)) Yp1c1.push(mp30)
            }
        }
        return Yp1c1
    }, WoUJ: function (x, y) {
        return this.v_0[(x % 2) < 0 ? 0 : x % 2][(y % 2) < 0 ? 0 : y % 2]
    }, M6YP: function (detail) {
        var w = parseInt(this.Ab1.F8r00[0].style.borderTopWidth);
        if (this.Ab1.yN != null && ((detail < 0 && w == 0) || (detail > 0 && w == 2))) {
            return
        }
        var DB97 = {
            left: this.moveX,
            top: this.moveY
        };
        var size = null;
        var fun = null;
        if (detail < 0) {
            fun = this.qK0;
            size = this.Ab1.ff621;
            this.b6t(true)
        } else {
            fun = this.M6893;
            size = this.Ab1.d$8;
            this.b6t(false)
        }
        DB97.left -= size.width / 2;
        DB97.top -= size.height / 2;
        this.fx040(true, size, DB97);
        this.Ab1.yN = getTimeout(this, fun, this.Ab1.interval)
    }, b6t: function (zoomout) {
        var F8r00 = this.Ab1.F8r00;
        if (zoomout) {
            F8r00[0].style.borderWidth = "0px 2px 2px 0px";
            F8r00[1].style.borderWidth = "0px 0px 2px 2px";
            F8r00[2].style.borderWidth = "2px 2px 0px 0px";
            F8r00[3].style.borderWidth = "2px 0px 0px 2px"
        } else {
            F8r00[0].style.borderWidth = "2px 0px 0px 2px";
            F8r00[1].style.borderWidth = "2px 2px 0px 0px";
            F8r00[2].style.borderWidth = "0px 0px 2px 2px";
            F8r00[3].style.borderWidth = "0px 2px 2px 0px"
        }
    }, M6893: function () {
        this.u915(false)
    }, qK0: function () {
        this.u915(true)
    }, u915: function (zoomout) {
        if (this.Ab1.B86 <= this.Ab1.tlt) {
            var c = this.Ab1.container;
            var xd = this.Ab1.xd * this.Ab1.B86;
            var wpv = c.offsetWidth * xd;
            c.style.left = (zoomout ? c.offsetLeft + wpv / 2 : c.offsetLeft - wpv / 2) + "px";
            c.style.width = (zoomout ? c.offsetWidth - wpv : c.offsetWidth + wpv) + "px";
            wpv = c.offsetHeight * xd;
            c.style.top = (zoomout ? c.offsetTop + wpv / 2 : c.offsetTop - wpv / 2) + "px";
            c.style.height = (zoomout ? c.offsetHeight - wpv : c.offsetHeight + wpv) + "px";
            this.p712();
            this.Ab1.B86++;
            this.Ab1.yN = getTimeout(this, (zoomout ? this.qK0 : this.M6893), this.Ab1.interval - this.Ab1.interval * this.Ab1.xd)
        } else {
            this.fx040(false)
        }
    }, p712: function () {
        var c = this.Ab1.container;
        var i = 4;
        var w = c.offsetWidth;
        var h = c.offsetHeight;
        this.Ab1.F8r00[1].style.left = w - i + "px";
        this.Ab1.F8r00[2].style.top = h - i + "px";
        this.Ab1.F8r00[3].style.left = w - i + "px";
        this.Ab1.F8r00[3].style.top = h - i + "px"
    }, fx040: function (visible, size, DB97) {
        var c = this.Ab1.container;
        c.style.left = "100px";
        c.style.top = "100px";
        if (this.Ab1.yN) {
            window.clearTimeout(this.Ab1.yN);
            this.Ab1.yN = null
        }
        this.Ab1.B86 = 1;
        this.Ab1.container.style.display = visible ? "" : "none";
        var c = this.Ab1.container;
        if (typeof DB97 == "object" && DB97) {
            c.style.left = DB97.left + "px";
            c.style.top = DB97.top + "px"
        }
        if (typeof size == "object" && size) {
            c.style.width = size.width + "px";
            c.style.height = size.height + "px";
            this.p712()
        }
    }, getControlRect: function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (this.controlCanvas) {
            with(this.controlCanvas) {
                var w383 = getRect();
                if (isVisible()) {
                    r.min = w383.L$51l;
                    r.max = w383.KL9k3
                }
            }
        }
        return r
    }, getOverviewRect: function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (this.overview) r = this.overview.getRect();
        if (r.min.x == 0 && r.max.x == 0) r = {
            min: {
                x: this.width,
                y: this.height
            },
            max: {
                x: this.width,
                y: this.height
            }
        };
        return r
    }, $0Xc: function (rect, vG10o, a0a) {
        if (typeof vG10o != "boolean") vG10o = true;
        if (typeof a0a != "boolean") a0a = true;
        var ix = rect.$w3;
        var iy = rect.r85j;
        var ax = rect.W06;
        var ay = rect.dBT;
        var vj = 0;
        var vk = 0;
        var p3k = 0;
        var w667B = 0;
        var KJ6H = this.width;
        var TKJpT = this.height;
        if (vG10o || a0a) {
            var r = {
                min: {
                    x: rect.$w3,
                    y: rect.r85j
                },
                max: {
                    x: rect.W06,
                    y: rect.dBT
                },
                width: rect.W06 - rect.$w3,
                height: rect.dBT - rect.r85j
            };
            var fCjPF, l, yw;
            if (a0a && this.controlCanvas) {
                var H43 = this.getControlRect();
                fCjPF = this.controlCanvas.options.location;
                l = (fCjPF.type == Maplet.LEFT_TOP || fCjPF.type == Maplet.LEFT_BOTTOM);
                yw = (fCjPF.type == Maplet.LEFT_TOP || fCjPF.type == Maplet.RIGHT_TOP);
                if (_isRectint(r, H43)) {
                    if (l) {
                        p3k = H43.max.x
                    } else KJ6H = H43.min.x
                } else {
                    if (l) {
                        if (yw && r.min.x < H43.max.x && (r.min.y < H43.max.y || (r.height > this.height - H43.max.y))) {
                            p3k = H43.max.x
                        } else if (!yw && r.min.x < H43.max.x && (r.max.y > H43.min.y || (r.height > H43.min.y))) {
                            p3k = H43.max.x
                        }
                    } else {
                        if (yw && r.max.x > H43.min.x && (r.min.y < H43.max.y || (r.height > this.height - H43.max.y))) {
                            KJ6H = H43.min.x
                        } else if (!yw && r.max.x > H43.min.x && (r.max.y > H43.min.y || (r.height > H43.min.y))) {
                            KJ6H = H43.min.x
                        }
                    }
                }
            }
            if (vG10o && this.overview) {
                var c_a6 = this.getOverviewRect();
                fCjPF = this.overview.location;
                l = (fCjPF.type == Maplet.LEFT_TOP || fCjPF.type == Maplet.LEFT_BOTTOM);
                yw = (fCjPF.type == Maplet.LEFT_TOP || fCjPF.type == Maplet.RIGHT_TOP);
                if (_isRectint(r, c_a6)) {
                    if (l) p3k = Math.max(p3k, c_a6.max.x);
                    else KJ6H = Math.min(KJ6H, c_a6.min.x)
                } else {
                    if (l) {
                        if (yw && r.min.x < c_a6.max.x && (r.min.y < c_a6.max.y || (r.height > this.height - c_a6.max.y))) {
                            p3k = Math.max(p3k, c_a6.max.x)
                        } else if (!yw && r.min.x < c_a6.max.x && (r.max.y > c_a6.min.y || (r.height > c_a6.min.y))) {
                            p3k = Math.max(p3k, c_a6.max.x)
                        }
                    } else {
                        if (yw && r.max.x > c_a6.min.x && (r.min.y < c_a6.max.y || (r.height > this.height - c_a6.max.y))) {
                            KJ6H = Math.min(KJ6H, c_a6.min.x)
                        } else if (!yw && r.max.x > c_a6.min.x && (r.max.y > c_a6.min.y || (r.height > c_a6.min.y))) {
                            KJ6H = Math.min(KJ6H, c_a6.min.x)
                        }
                    }
                }
            }
        }
        if (ix < p3k) vj = ix - p3k;
        if (iy < w667B) vk = iy - w667B;
        if (ax > KJ6H) {
            if (vj == 0) vj = ax - KJ6H;
            else vj = 0
        }
        if (ay > TKJpT) {
            if (vk == 0) vk = ay - TKJpT;
            else vk = 0
        }
        return {
            JM2Jk: vj,
            _672: vk
        }
    }, tT3P: function (rect, _2M) {
        if (typeof _2M != "object" || !_2M) _2M = {
            vG10o: true,
            a0a: true,
            W14: true
        };
        var X9q8 = this.$0Xc(rect, _2M.vG10o, _2M.a0a, _2M.W14);
        var Qvk26 = X9q8.JM2Jk;
        var d0JK = X9q8._672;
        if (Qvk26 != 0 || d0JK != 0) {
            if (typeof rect.K91 != "number") rect.K91 = 0;
            if (typeof rect.G5Fp2 != "number") rect.G5Fp2 = 0;
            if (Qvk26 != 0) Qvk26 = (Qvk26 < 0 ? Qvk26 - rect.K91 : Qvk26 + rect.K91);
            if (d0JK != 0) d0JK = (d0JK < 0 ? d0JK - rect.G5Fp2 : d0JK + rect.G5Fp2);
            maplet.panTo(-Qvk26, -d0JK)
        }
        return X9q8
    }, viewOverlay: function (overlay, kc52, wPc) {
        var s = overlay.toString();
        var B040Y = s.indexOf("MMarker") != -1;
        var $0q = s.indexOf("MPolyline") != -1;
        var pb726 = s.indexOf("MEllipse") != -1;
        var J0ch3 = s.indexOf("MRoundRect") != -1;
        var ix = 0,
            iy = 0,
            ax = 0,
            ay = 0;
        if (B040Y && overlay.icon) {
            var $b9 = overlay;
            ix = $b9.pt.mapX - $b9.icon.anchorX;
            iy = $b9.pt.mapY - $b9.icon.anchorY;
            ax = ix + parseInt($b9.icon.div.style.width);
            ay = iy + parseInt($b9.icon.div.style.height)
        } else if ($0q) {
            var D1m = overlay.getCenterXY();
            ix = D1m.x - 16;
            iy = D1m.y - 16;
            ax = ix + 32;
            ay = iy + 32
        } else if (pb726) {
            ix = overlay.gC.mapX - 16;
            iy = overlay.gC.mapY - 16;
            ax = ix + 32;
            ay = iy + 32
        } else if (J0ch3) {
            var _i0 = overlay.getCenterXY();
            ix = _i0.x - 16;
            iy = _i0.y - 16;
            ax = ix + 32;
            ay = iy + 32
        }
        return this.tT3P({
            $w3: ix,
            r85j: iy,
            W06: ax,
            dBT: ay,
            K91: kc52,
            G5Fp2: wPc
        })
    }, bb6: function () {
        this.Kw$79 = new fD("LayerContainer", 0, 0, this.width, this.height, true, 2, '', this.sF)
    }, A1Fq: function () {
        for (var i in this.layerData) {
            this.layerData[i] = null;
            delete this.layerData[i]
        }
    }, getImgByXY: function (x, y, v2pB) {
        if (typeof v2pB != "boolean") v2pB = false;
        var img = this.pU[((this.AG).toString(16) + (this.gD).toString(16) + 'l' + (this.gE).toString(16)).toLowerCase()];
        if (typeof img == "object" && img) {
            var ix = Math.floor((x - parseInt(img.style.left)) / this.imgWidth);
            var iy = -Math.floor((y - parseInt(img.style.top) + (v2pB ? w8[this.AG] : 0)) / this.imgHeight);
            return ((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase()
        }
        return null
    }, G69: function (visible, left, top) {
        with(this.ukd$) {
            if (typeof left != "undefined") fC.div.style.left = left + "px";
            if (typeof top != "undefined") fC.div.style.top = top + "px";
            if (fC.div.parentNode != this.panel) {
                this.panel.appendChild(fC.div);
                fC.div.style.zIndex = 2
            }
            if (fC.div.style.display != (visible ? "" : "none")) {
                fC.div.style.display = (visible ? "" : "none")
            }
            if (overlay) {
                overlay.o2kD();
                overlay = null
            }
        }
    }, _T190: function () {
        if (!this.IxVyB) {
            this.IxVyB = document.createElement("div");
            this.IxVyB.id = llg86 ? 'vCanvasSVG' : 'vCanvasVML';
            this.IxVyB.style.position = "absolute";
            this.IxVyB.unselectable = "on";
            this.IxVyB.style.zIndex = 0;
            this.IxVyB.style.MozUserSelect = "none";
            this.lA.appendChild(this.IxVyB);
            if (llg86) {
                var snK2 = this.snK2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                snK2.setAttribute("id", "LayerDrawSVG");
                snK2.setAttribute("version", "1.1");
                snK2.setAttribute("overflow", "visible");
                snK2.setAttribute("viewBox", "-" + this.width + " -" + this.height + " " + this.width * 3 + " " + this.height * 3);
                snK2.setAttribute("style", "position: absolute; left: -" + this.width + "px; top: -" + this.height + "px; z-index: 0;");
                snK2.setAttribute("height", this.height * 3 + "px");
                snK2.setAttribute("width", this.width * 3 + "px");
                snK2.setAttribute($0eU, "true");
                var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                arrow.setAttribute("d", px ? "M 0 0 L 40 20 L 0 40 L 16 20 Z" : "M 0 0 L 10 5 L 0 10 L 4 5 z");
                arrow.setAttribute("fill", this.brush.color);
                arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                var zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                zY.setAttribute("id", "svgArrow");
                zY.setAttribute("viewBox", px ? "0 0 40 40" : "0 0 10 10");
                zY.setAttribute("refX", px ? "24" : "6");
                zY.setAttribute("refY", px ? "20" : "5");
                zY.setAttribute("markerUnits", "strokeWidth");
                zY.setAttribute("orient", "auto");
                zY.appendChild(arrow);
                snK2.appendChild(zY);
                this.IxVyB.appendChild(snK2)
            }
        }
        return this.IxVyB
    }, h1L6: function (x, y) {
        if (this.Dj75 > this.ignoreMoveRange || this.Dj75 < -this.ignoreMoveRange) {
            x = Math.abs(x);
            if (this.Dj75 < 0) this.Dj75 = Math.abs(this.Dj75)
        }
        this.Dj75 += x;
        if (this.WhA6O > this.ignoreMoveRange || this.WhA6O < -this.ignoreMoveRange) {
            y = Math.abs(y);
            if (this.WhA6O < 0) this.WhA6O = Math.abs(this.WhA6O)
        }
        this.WhA6O += y
    }, autoZoomLogo: function () {}, clearMeasurePaths: function () {
        if (this.Nv9_.length > 0) {
            for (var i = 0; i < this.Nv9_.length; i++) this.removeMeasurePath(i, false)
        }
        this.Nv9_ = []
    }, removeMeasurePath: function (pn, removeItem) {
        if (this.Nv9_.length > pn) {
            if (typeof removeItem != "boolean") removeItem = true;
            var path = this.Nv9_[pn];
            if (path.LHA6) {
                MEvent.removeBuiltInListener(path.LHA6, "click", path.q9);
                path.LHA6 = null
            }
            for (var i = 0; i < path.o7c.length; i++) {
                var kJXp$ = path.o7c[i];
                kJXp$.marker.finalize();
                kJXp$.marker = null;
                kJXp$.point = null
            }
            if (path.__5EX) {
                path.__5EX.finalize();
                path.__5EX = null
            }
            if (removeItem) _removeArrayItem(this.Nv9_, pn, pn)
        }
    }, b_m5: function (pt, start) {
        if (typeof start != "boolean") start = false;
        var u21 = this.e76;
        var F65 = null;
        if (start) {
            F65 = {
                o7c: [],
                __5EX: null
            };
            if (this.Nv9_.length == 0) this.Nv9_[0] = F65;
            else this.Nv9_.push(F65)
        } else {
            F65 = this.Nv9_[this.Nv9_.length - 1]
        }
        var _98i = 0;
        var tip = "";
        if (F65.o7c.length > 0) {
            var Na$ = F65.o7c[F65.o7c.length - 1];
            if (Na$.point._galt() == pt._galt() && Na$.point._galn() == pt._galn()) return;
            _98i = this.measDistance([Na$.point, pt]);
            _98i = Na$.OY7 + _98i;
            tip = u21.j589e.replace(u21.c6uF4, (_98i < 1000) ? _98i + "\u7c73" : parseInt(_98i / 100) / 10 + "\u516c\u91cc")
        } else {
            tip = u21.L0Ak
        }
        tip = u21.tip.replace(u21.DFE4, tip);
        var $b9 = new MMarker(pt, new MIcon(u21.eM03I, 11, 11), null, new MLabel(tip, 15, undefined, undefined, {
            enableStyle: false
        }));
        $b9.autoHide = false;
        $b9.creator = MLayer.SYSTEM;
        this.addOverlay($b9);
        F65.o7c.push({
            point: pt,
            OY7: _98i,
            marker: $b9
        })
    }, closeMeasureCurrPath: function () {
        if (this.Nv9_.length == 0) return;
        var _98i = 0;
        var pts = [];
        var F65 = this.Nv9_[this.Nv9_.length - 1];
        var u21 = this.e76;
        if (F65.__5EX) return;
        if (F65.o7c.length == 1) {
            this.removeMeasurePath(this.Nv9_.length - 1);
            return
        }
        for (var i = 0; i < F65.o7c.length; i++) {
            pts.push(F65.o7c[i].point);
            if (i == F65.o7c.length - 1) _98i = F65.o7c[i].OY7
        }
        var __5EX = new MPolyline(pts, u21.xF4u);
        __5EX.creator = MLayer.SYSTEM;
        this.addOverlay(__5EX);
        var tip = u21.$3e_.replace(u21.c6uF4, (_98i < 1000) ? _98i + "\u7c73" : parseInt(_98i / 100) / 10 + "\u516c\u91cc");
        tip = u21.tip.replace(u21.DFE4, tip);
        var marker = F65.o7c[F65.o7c.length - 1].marker;
        marker.label.resetLabel({
            content: tip
        });
        F65.LHA6 = marker.label.div.firstChild.firstChild.firstChild;
        F65.q9 = MEvent.bindDom(F65.LHA6, "click", this, this.ut2F);
        F65.__5EX = __5EX
    }, ut2F: function (e) {
        k1FD(e);
        for (var i = 0; i < this.Nv9_.length; i++) {
            if (e.target == this.Nv9_[i].LHA6) {
                this.removeMeasurePath(i)
            }
        }
    }
};
Maplet.prototype.toString = function () {
    return "com.mapbar.maplet.Maplet"
};
Maplet.prototype.setIwStdSize = function (w, h) {
    if (isNaN(w)) w = 260;
    if (isNaN(h)) h = 240;
    avBubble.resize(w, h)
};
Maplet.prototype.setIwZoomInSize = function (w, h) {
    if (typeof w != "number") w = "";
    if (typeof h != "number") h = "";
    if (w < avBubble.width) w = "";
    if (h < avBubble.height) h = "";
    avBubble.S22 = w;
    avBubble.T93N = h
};
Maplet.prototype.addLayer = function (layer) {
    if (layer && layer instanceof MLayer) {
        if (!this.qS[layer.id]) {
            layer.initialize(this);
            this.qS[layer.id] = layer;
            var i = layer.options.zindex + 10;
            if (typeof this.sM9s8[i] != "undefined") {
                this.sM9s8[i].push(layer)
            } else {
                this.sM9s8[i] = [layer]
            }
            this.refresh()
        }
    } else {
        return false
    }
    return true
};
Maplet.prototype.removeLayer = function (layer, finalize) {
    if (typeof finalize != "boolean") finalize = false;
    if (layer && layer instanceof MLayer && this.qS[layer.id] && typeof layer.remove == "function") {
        if (this._og && this.b2g == layer) {
            if (MEvent.contains(this, "layer_mouseout") > 0) {
                MEvent.trigger(this, "layer_mouseout", {
                    layer: this.b2g,
                    pid: this._og.p,
                    area: this._og.l,
                    data: this._og.d,
                    name: this._og.n,
                    rect: this._og.rect
                })
            }
            this._og = null;
            this.b2g = null
        }
        this.qS[layer.id].remove(finalize);
        this.qS[layer.id] = null;
        delete this.qS[layer.id];
        var pn = layer.options.zindex + 10;
        if (typeof this.sM9s8[pn] != "undefined") {
            var a = this.sM9s8[pn];
            if (a.length == 1) {
                this.sM9s8[pn] = undefined
            } else {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] == layer) {
                        a.splice(i, 1)
                    }
                }
            }
        }
    }
};
Maplet.prototype.clearLayers = function (finalize) {
    if (!this.Kw$79) return;
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER) this.removeLayer(this.qS[i], finalize)
    }
    if (!this.traffic && !this.$0b$m) {
        this.Kw$79.clear();
        _removeNode(this.Kw$79.div);
        this.Kw$79 = null;
        this.sM9s8 = []
    }
};
Maplet.prototype.getLayers = function () {
    var qS = [];
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER) qS.push(this.qS[i])
    }
    return qS
};
Maplet.prototype.ylq4D = function (layer) {
    if (typeof layer == "object" && layer && layer instanceof MLayer) {
        for (var i = this.sM9s8.length - 1; i >= 0; i--) {
            if (typeof this.sM9s8[i] != "undefined") {
                var c = this.sM9s8[i];
                for (var r7X05 = c.length - 1; r7X05 >= 0; r7X05--) {
                    if (c[r7X05] == layer) {
                        if (c.length == 1) this.sM9s8[i] = undefined;
                        else c.splice(r7X05, 1)
                    }
                }
            }
        }
        var i = layer.options.zindex + 10;
        if (typeof this.sM9s8[i] != "undefined") {
            this.sM9s8[i].push(layer)
        } else {
            this.sM9s8[i] = [layer]
        }
    }
};
Maplet.prototype.setLayerDataPassiveUrl = function (url) {
    if (typeof url != "string" || !url) return;
    this.layerDataPassiveUrl = url
};
Maplet.prototype.loadLayerDataOfPassiveMode = function (grid) {
    if (this.layerData[grid] && this.layerData[grid].passiveLoadStatus == Maplet.UNLOAD) {
        if (!this.layerDataPassiveUrl) {
            this.layerData[grid].passiveLoadStatus = Maplet.h7049;
            return
        } else {
            this.layerData[grid].passiveLoadStatus = Maplet.LOADING
        }
        var lE3 = this.layerData[grid];
        var PL2 = [];
        for (var i in this.qS) {
            var layer = this.qS[i];
            if (layer.options.needData && layer.inZoomRange(this.AG) && layer.options.dataLoadMode == MLayer.DL_PASSIVE && !layer.data[grid] && layer.mLP[grid]) {
                if (layer.options.serverPathType == MLayer.PT_COMBINER) PL2.push("[" + layer.options.combinerParas + "|" + layer.PXG() + "]");
                else PL2.push(layer.PXG())
            }
        }
        if (PL2.length > 0) {
            new Y6WY(this.layerDataPassiveUrl + "?n=" + PL2.join(";") + "&p=" + sI[this.AG] + "/" + lE3.dirname + "/" + lE3.xyname + ".js&g=" + grid, this.xCxE, false, true, this, undefined, [grid]).P4MUn()
        } else {
            this.layerData[grid].passiveLoadStatus = Maplet.LOADED
        }
    }
};
Maplet.prototype.xCxE = function (grid, _S66) {
    if (this.layerData[grid]) {
        var g = this.layerData[grid];
        g.passiveLoadStatus = Maplet.LOADED;
        var k46b = "__lgd" + grid;
        var uy = eval("typeof " + k46b + "==\"undefined\"?null:" + k46b);
        if (uy) {
            for (var i in this.qS) {
                var l = this.qS[i];
                k46b = l.PXG() + g.dirname + "_" + g.xyname;
                if (typeof uy[k46b] == "object" && uy) l.Wd1(grid, uy[k46b])
            }
            uy = null
        }
    }
    _removeNode(aa(_S66))
};
Maplet.prototype.addPanel = function (panel) {
    if (panel && panel instanceof MPanel) {
        if (this.$I78m[panel.id]) return true;
        panel.initialize(this);
        this.$I78m[panel.id] = panel
    } else {
        return false
    }
};
Maplet.prototype.removePanel = function (panel, finalize) {
    if (typeof finalize != "boolean") finalize = false;
    if (typeof panel == "object") {
        if (this.$I78m[panel.id]) {
            panel.remove(finalize);
            this.$I78m[panel.id] = null;
            delete this.$I78m[panel.id]
        } else if (typeof panel.remove == "function") {
            panel.remove(finalize)
        }
    } else if (typeof panel == "string") {
        if (this.$I78m[panel]) {
            this.$I78m[panel].remove(finalize);
            this.$I78m[panel] = null;
            delete this.$I78m[panel]
        }
    }
};
Maplet.prototype.getPanels = function () {
    var $I78m = [];
    for (var i in this.$I78m) {
        if (this.$I78m[i].options.creator == MPanel.USER) $I78m.push(this.$I78m[i])
    }
    return $I78m
};
Maplet.prototype.clearPanels = function (finalize) {
    for (var i in this.$I78m) {
        if (this.$I78m[i].options.creator == MPanel.USER) this.removePanel(this.$I78m[i], finalize)
    }
};
Maplet.prototype.addOverlay = function (overlay) {
    if (typeof overlay == "object") {
        if (this.u5[overlay.id]) {
            return
        }
        overlay.initialize(this);
        this.u5[overlay.id] = overlay;
        this.u5.length++
    }
};
Maplet.prototype.getZoomLevel = function () {
    return this.AG
};
Maplet.prototype.clearOverlays = function (finalize) {
    if (typeof finalize != "boolean") finalize = false;
    this.hideBubble(this);
    for (var id in this.u5) {
        var snn5 = this.u5[id];
        if (snn5 && snn5.remove && snn5.creator == MLayer.USER) {
            snn5.remove(finalize);
            this.u5[id] = null;
            snn5 = null;
            delete this.u5[id]
        }
    }
};
Maplet.prototype.removeOverlay = function (overlay, finalize) {
    if (typeof finalize != "boolean") finalize = false;
    if (typeof overlay == "object") {
        if (this.u5[overlay.id]) {
            this.u5[overlay.id].remove(finalize);
            this.u5[overlay.id] = null;
            delete this.u5[overlay.id];
            this.u5.length--
        } else if (typeof overlay.remove == "function") {
            overlay.remove(finalize)
        }
    } else if (typeof overlay == "string" && overlay != 'length') {
        if (this.u5[overlay]) {
            this.u5[overlay].remove(finalize);
            this.u5[overlay] = null;
            delete this.u5[overlay];
            this.u5.length--
        }
    }
};
Maplet.prototype.clearCache = function () {
    cq.pu = null;
    cq.pu = {}
};
Maplet.prototype.setAutoZoom = function (min, max) {
    if (!min && !max && this.u5.length == 0) return;
    var c7;
    if (!this.bInitialized) return;
    if (md6_(min)) {
        c7 = this.getOverlaysBound(min);
        min = c7.min;
        max = c7.max
    }
    var rt = this.getFitZoomLevel(min, max);
    if (rt.center && rt.level) {
        this.centerAndZoom(rt.center, rt.level)
    } else {
        if (rt.center) this.setCenter(rt.center);
        if (rt.level) this.setZoomLevel(rt.level)
    }
};
Maplet.prototype.getFitZoomLevel = function (min, max) {
    var rt = {
        center: null,
        level: null
    };
    if ((min instanceof MPoint && !min.Ad17D()) || (max instanceof MPoint && !max.Ad17D())) return rt;
    else if ((typeof min == "string" && !min) && (typeof max == "string" && !max)) return rt;
    if (typeof min == "string" && min) {
        min = new MPoint(min);
        if (!min.Ad17D()) return rt
    }
    if (typeof max == "string" && max) {
        max = new MPoint(max);
        if (!max.Ad17D()) return rt
    }
    var jd7, dos$5, rSs0I, _31;
    var pts = [];
    if (!min || !max) {
        for (var i in this.u5) {
            var snn5 = this.u5[i];
            if (snn5.x6V8) {
                var e71a5 = snn5.x6V8();
                if (e71a5) {
                    pts.push(e71a5.T5_Vl);
                    pts.push(e71a5.gsI)
                }
            }
        }
    } else {
        pts.push(min);
        pts.push(max)
    }
    var HR808, V43t1, pt;
    for (var i = 0; i < pts.length; i++) {
        pt = pts[i];
        HR808 = pt._galn();
        V43t1 = pt._galt();
        if (isNaN(HR808) || isNaN(V43t1)) {
            continue
        }
        if (i == 0) {
            rSs0I = jd7 = HR808;
            _31 = dos$5 = V43t1
        } else {
            jd7 = Math.min(jd7, HR808);
            dos$5 = Math.min(dos$5, V43t1);
            rSs0I = Math.max(rSs0I, HR808);
            _31 = Math.max(_31, V43t1)
        }
    }
    if (!jd7) {
        jd7 = rSs0I = this.gA;
        dos$5 = _31 = this.gx
    }
    var size = this.getMaxBubbleSize();
    var ix = size.min.x,
        iy = size.max.y,
        ax = size.max.x,
        ay = size.min.y;
    var Ob77 = this.zp(ix, iy);
    var EP_ = this.zo(ix, iy);
    var rS4H4 = this.zp(ax, ay);
    var _9966 = this.zo(ax, ay);
    var h8839 = jd7 > Ob77 && dos$5 > EP_ && rSs0I < rS4H4 && _31 < _9966;
    var b = (rSs0I - jd7 < rS4H4 - Ob77) && (_31 - dos$5 < _9966 - EP_);
    if (!h8839 && !b) {
        for (var i = this.AG - 1; i >= MIN_ZOOM_LEVEL; i--) {
            Ob77 = this.zp(ix, iy, i);
            EP_ = this.zo(ix, iy, i);
            rS4H4 = this.zp(ax, ay, i);
            _9966 = this.zo(ax, ay, i);
            if ((rSs0I - jd7 < rS4H4 - Ob77) && (_31 - dos$5 < _9966 - EP_)) {
                rt.level = i;
                break
            }
        }
    } else if (this.AG < MAX_ZOOM_LEVEL && !(jd7 == rSs0I && dos$5 == _31)) {
        var Y6_4 = false;
        for (var i = this.AG + 1; i <= MAX_ZOOM_LEVEL; i++) {
            Ob77 = this.zp(ix, iy, i);
            EP_ = this.zo(ix, iy, i);
            rS4H4 = this.zp(ax, ay, i);
            _9966 = this.zo(ax, ay, i);
            if ((rSs0I - jd7 > rS4H4 - Ob77) || (_31 - dos$5 > _9966 - EP_)) {
                if (i - 1 != this.AG) rt.level = i - 1;
                Y6_4 = true;
                break
            }
        }
        if (!Y6_4 && !rt.level) rt.level = MAX_ZOOM_LEVEL
    }
    if (!h8839 || rt.level) rt.center = new MPoint((jd7 + rSs0I) / 2, (dos$5 + _31) / 2, false);
    return rt
};
Maplet.prototype.getOverlaysBound = function (u5) {
    var pts = [];
    var c7 = {
        min: null,
        max: null
    };
    u5 = md6_(u5) ? u5 : this.u5;
    for (var i in u5) {
        var snn5 = u5[i];
        if (typeof snn5 !== 'undefined' && snn5) {
            if (typeof snn5 === 'string') {
                pts.push(new MPoint(snn5))
            } else if (snn5 instanceof MPoint) {
                pts.push(snn5)
            } else if (snn5.x6V8) {
                var e71a5 = snn5.x6V8();
                if (e71a5) {
                    pts.push(e71a5.T5_Vl);
                    pts.push(e71a5.gsI)
                }
            }
        }
    }
    if (pts.length) {
        var jd7, dos$5, rSs0I, _31, HR808, V43t1;
        for (var i = 0; i < pts.length; i++) {
            var pt = pts[i];
            HR808 = pt._galn();
            V43t1 = pt._galt();
            if (isNaN(HR808) || isNaN(V43t1)) {
                continue
            }
            if (i == 0) {
                rSs0I = jd7 = HR808;
                _31 = dos$5 = V43t1
            } else {
                jd7 = Math.min(jd7, HR808);
                dos$5 = Math.min(dos$5, V43t1);
                rSs0I = Math.max(rSs0I, HR808);
                _31 = Math.max(_31, V43t1)
            }
        }
        c7.min = new MPoint(jd7, dos$5, false);
        c7.min.initialize(this);
        c7.max = new MPoint(rSs0I, _31, false);
        c7.max.initialize(this)
    }
    return c7
};
Maplet.prototype.setZoomLevel = function (AB, fb, j9809) {
    AB = parseInt(AB);
    if (AB < MIN_ZOOM_LEVEL) {
        AB = MIN_ZOOM_LEVEL
    }
    if (AB > MAX_ZOOM_LEVEL) {
        AB = MAX_ZOOM_LEVEL
    }
    if (fb != undefined && !fb) {
        return AB
    }
    var mB8l = false;
    if (this.markerDragAnimation) {
        with(this.ukd$) {
            if (overlay != null && !overlay.ls) this.G69(false)
        }
    }
    if (AB != this.AG) {
        if (typeof j9809 != "boolean" || j9809) this.uc_();
        mB8l = true;
        for (var i in this.$I78m) {
            var p = this.$I78m[i];
            if (p.options.zoomhide && p.isVisible()) p.setVisible(false)
        }
        this.lA.hide()
    } else {
        this.KOC()
    } if (this.Kw$79) MLayer.setTipVisible(false);
    if (iToolTipStyle == 0) hideToolTipMenu();
    if (this.controlCanvas != null) {
        this.controlCanvas.update(AB)
    }
    if (this.gc != null) {
        for (var n8 in this.gc) {
            if (this.gc[n8].nR) this.gc[n8].nR.controlCanvas.div.update(AB)
        }
    }
    if (this.ff) this.nI().setZoomLevel(AB);
    if (ContentInfo && ContentInfo.isVisible()) {
        var A055S = this.toScreenCoordinate(avBubble.LGyL);
        if (_isInsideRect({
            x: A055S[0],
            y: A055S[1]
        }, {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.width,
                y: this.height
            }
        })) {
            this.c1K = "infowindow";
            this.o1e = avBubble.LGyL;
            this.$406a = A055S[0];
            this.A002 = A055S[1]
        }
    }
    this.d3$ = this.AG;
    this.AG = AB;
    this.xg = sj[this.AG];
    this.xf = qP[this.AG];
    this.sR = sI[this.AG] + "/";
    if (this.o1e != "") {
        var g4 = this.$406a - this.width / 2;
        var g5 = this.A002 - this.height / 2;
        var A055S = this.toScreenCoordinate(this.o1e);
        var _0oC4 = A055S[0] - g4;
        var xy517 = A055S[1] - g5;
        this.gA = this.zp(_0oC4, xy517);
        this.gx = this.zo(_0oC4, xy517);
        this.$406a = -1;
        this.A002 = -1;
        this.o1e = "";
        this.c1K = ""
    }
    this.gD = Math.floor((this.gA) / this.xg);
    this.gE = Math.floor((this.gx) / this.xf);
    if (this.gD < 0) this.gD += 1;
    this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
    if (this.gx >= 0) {
        this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    } else {
        this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    }
    this.np0J();
    this.refresh();
    if (mB8l) {
        if (apiType == 1) MEvent.trigger(this, "zoom", AB);
        else MEvent.trigger(this, "zoom", "&act=zoom&zm=" + AB);
        var slmi = this.d3$ > this.AG ? 'zoomout' : 'zoomin';
        MEvent.trigger(this, slmi, this.AG)
    }
    this.lA.show();
    if (this.Kw$79) this.Kw$79.setVisible(true);
    for (var i in this.$I78m) {
        var p = this.$I78m[i];
        if (p.options.zoomhide && !p.isVisible() && !p.c460.y3$1) p.setVisible(true)
    }
};
Maplet.prototype.setCenter = function (lf, li, fb, x4iT) {
    if (!this.p2Wu) {
        this.no();
        this.p2Wu = true
    }
    var xR = lf;
    if (typeof lf == "object") {
        if (!lf.encrypt && !lf.pid) {
            if (!lf.maplet) lf.initialize(this);
            if (!lf.pid) lf.getPid()
        }
        xR = lf.pid
    }
    if (isNaN(parseFloat(xR)) || (typeof xR == "string" && xR.indexOf(',') > 0)) {
        var lh = cq.vp(xR);
        lf = lh[1];
        li = lh[0]
    }
    this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(lf)));
    this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(li) % 360));
    if (typeof basepoilist != "object" && !this.b021 && this.rr83w) this.rr83w = false;
    if (fb == undefined || fb) {
        this.setZoomLevel(this.AG)
    }
    if (x4iT == undefined || x4iT) {
        var p22Q = O67v6;
        O67v6 = false;
        if (apiType == 1) {
            MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)), p22Q)
        } else {
            MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2), p22Q)
        }
    }
};
Maplet.prototype.moveTo = function (left, top) {
    this.top = parseInt(top);
    this.left = parseInt(left);
    this.panel.style.top = parseInt(top) + "px";
    this.panel.style.left = parseInt(left) + "px"
};
Maplet.prototype.getCenter = function () {
    if (apiType == 1) {
        return new MPoint(this.getCurrentMap().split(",").slice(1, 3).join(","))
    } else {
        return this.getCurrentMap().split(",")[1]
    }
};
Maplet.prototype.enableTraffic = function (options) {
    if (typeof options != "object" || !options) options = {};
    if (!this.traffic) {
        this.traffic = new MTraffic(options);
        this.traffic.initialize(this)
    }
    return this.traffic
};
Maplet.prototype.disableTraffic = function () {
    if (this.traffic) {
        this.traffic.remove(true);
        this.traffic = null
    }
};
Maplet.prototype.enablePOILayer = function (options) {
    if (typeof options != "object" || !options) options = {};
    if (!this.$0b$m) {
        this.$0b$m = new MPOILayer(options);
        this.$0b$m.initialize(this)
    }
    return this.$0b$m
};
Maplet.prototype.disablePOILayer = function () {
    if (this.$0b$m) {
        this.$0b$m.remove(true);
        this.$0b$m = null
    }
};
Maplet.prototype.resize = function (w, h) {
    w = parseInt(w);
    h = parseInt(h);
    if (w < 0 || h < 0) return;
    if (w == this.width && h == this.height) return;
    aa("myalert").style.display = "none";
    if (this.snapshotBox.isVisible()) this.snapshotBox.hide();
    if (this.xc) this.xc.hide();
    this.hideBubble();
    this.width = w;
    this.height = h;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.panel.style.width = w + "px";
    this.panel.style.height = h + "px";
    this.panel.style.clip = 'rect(0px,' + this.width + 'px,' + this.height + 'px, 0px)';
    this.sF.resize(w, h);
    this.sE.resize(w, h);
    this.vx.resize(w, h);
    if (this.Kw$79) {
        this.Kw$79.resize(w, h);
        for (var i in this.qS) {
            this.qS[i].resize(w, h)
        }
    }
    if (this.ff) {
        this.nI().resize(h);
        this.nI().moveTo(this.width - 16, 0)
    }
    this.r9y3V();
    this.onresize();
    var An = (navigator.appVersion.match(new RegExp("6.", "i")) == '6.') ? 0 : 2;
    this.lA.resize(w, h);
    this.setZoomLevel(this.AG);
    if (this.Kw$79) {
        for (var i in this.qS) this.qS[i].refreshDataXY()
    }
    for (var pf in this.gc) {
        if (this.gc[pf] && this.gc[pf].onresize) {
            this.gc[pf].onresize(this)
        }
    }
    this.overview.onresize()
};
Maplet.prototype.zoomIn = function () {
    if (this.AG >= MAX_ZOOM_LEVEL) return;
    if (ContentInfo && ContentInfo.isVisible()) this.setZoomLevel(this.AG + 1);
    else this.zoomTo(Math.min(MAX_ZOOM_LEVEL, this.AG + 1))
};
Maplet.prototype.zoomOut = function () {
    if (this.AG <= MIN_ZOOM_LEVEL) return;
    if (ContentInfo && ContentInfo.isVisible()) this.setZoomLevel(this.AG - 1);
    else this.zoomTo(Math.max(0, this.AG - 1))
};
Maplet.prototype.centerAndZoom = function (pt, AB) {
    this.setCenter(pt, "", false);
    if (typeof this.sF == "undefined") {
        this.AG = this.setZoomLevel(AB, false);
        this.showMap()
    } else {
        this.setZoomLevel(AB)
    }
};
Maplet.prototype.zoomTo = function (qB, fy, x, y) {
    if (fy) {
        this.fy = fy
    };
    if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
        if (this.AZ != null) {
            clearTimeout(this.AZ)
        };
        this.AZ = null;
        if (typeof qB != "undefined") {
            this.AT = parseInt(qB);
            if (typeof x == "undefined") {
                this.vc = 0
            } else {
                this.vc = parseInt(x)
            } if (typeof y == "undefined") {
                this.vd = 0
            } else {
                this.vd = parseInt(y)
            }
            this.AZ = getTimeout(this, this.zoomTo, 200)
        } else {
            var vG = new Number();
            if (this.AT > this.getZoomLevel()) {
                if (this.AS <= (this.AT - this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() + this.AY
                    } else {
                        this.AS += this.AY
                    }
                    vG = (this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * vG, 2 * this.vd * vG);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible()) ContentInfo.setVisible(avBubble.M7ab());
                        eval(this.fy)
                    }
                }
            } else if (this.AT < this.getZoomLevel()) {
                if (this.AS == -1 || this.AS >= (this.AT + this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() - this.AY
                    } else {
                        this.AS -= this.AY
                    }
                    vG = Math.abs(this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * vG, 2 * this.vd * vG);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible()) ContentInfo.setVisible(avBubble.M7ab());
                        eval(this.fy)
                    }
                }
            }
        }
    } else {
        this.setZoomLevel(qB)
    }
};
Maplet.prototype.panTo = function (x, y, fy) {
    if (this.fa) return;
    this.xoffset = parseFloat(x);
    this.yoffset = parseFloat(y);
    this.Aq = 0;
    this.Aw = 0;
    this.fy = fy;
    this.ve = this.zo(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.vf = this.zp(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.va = parseInt(Math.sqrt(this.xoffset * this.xoffset + this.yoffset * this.yoffset));
    if (!this.fa) {
        this.doPan()
    }
};
Maplet.prototype.toMapCoordinate = function (x, y) {
    cq.li = this.zp(x, y);
    cq.lf = this.zo(x, y);
    return cq.zn()
};
Maplet.prototype.toScreenCoordinate = function (xQ) {
    var A055S = [null, null];
    try {
        var P81 = cq.vp(xQ);
        A055S[0] = this.zl(P81[0], P81[1]);
        A055S[1] = this.zm(P81[1], P81[0])
    } catch (e) {
        throw e
    }
    return A055S
};
Maplet.prototype.showLogo = function (c2) {
    if (c2) {
        this._3297.style.display = "block"
    } else {
        this._3297.style.display = "none"
    }
    this.Ad9()
};
Maplet.prototype.showScale = function (c2, x4, xG, yb) {
    this.fe = c2;
    if (this.fe) {
        this.u8()
    } else {
        if (this.wq != null) this.wq.hide()
    }
};
Maplet.prototype.showOverview = function (c2, c3) {
    if (c2) {
        this.overview.show();
        if (c3) {
            this.overview.open()
        } else {
            this.overview.close()
        }
    } else {
        this.overview.hide();
        this.overview.close()
    }
};
Maplet.prototype.setOverviewLocation = function (location) {
    this.overview.setLocation(location);
    this.Ad9();
    this.r9y3V()
};
Maplet.prototype.resizeOverview = function (w, h) {
    this.overview.resizeTo(w, h);
    this.Ad9();
    this.r9y3V()
};
Maplet.prototype.showControl = function (c2) {
    this.fj = c2;
    if (this.fj) {
        if (this.controlCanvas) this.controlCanvas.show()
    } else {
        if (this.controlCanvas) this.controlCanvas.hide()
    }
    this.Ad9();
    this.r9y3V()
};
Maplet.prototype.getViewBound = function () {
    return {
        "LeftUp": this.toMapCoordinate(0, 0),
        "LeftDown": this.toMapCoordinate(0, this.height),
        "RightUp": this.toMapCoordinate(this.width, 0),
        "RightDown": this.toMapCoordinate(this.width, this.height)
    }
};
Maplet.prototype.calcPointsCt = function (pts) {
    var PUmQ8 = Number.MAX_VALUE,
        L0G = PUmQ8,
        ax = -Number.MAX_VALUE,
        ay = ax;
    for (var qC = 0; qC < pts.length; qC++) {
        if (!pts[qC].maplet) pts[qC].initialize(this);
        PUmQ8 = Math.min(PUmQ8, pts[qC].mapX);
        L0G = Math.min(L0G, pts[qC].mapY);
        ax = Math.max(ax, pts[qC].mapX);
        ay = Math.max(ay, pts[qC].mapY)
    }
    if (PUmQ8 != Number.MAX_VALUE) return new MPoint(this.toMapCoordinate(PUmQ8 + (ax - PUmQ8) / 2, L0G + (ay - L0G) / 2));
    else return null
};
Maplet.prototype.u0 = function (w15) {
    w15 && this.KT9n();
    if (!this.l46N && this.I6y23()) return;
    if (this.c0) {
        return
    }
    if (this.fs) {
        return
    }
    this.c0 = true;
    this.fs = true;
    if (this.D2lgf.length > 0) {
        if (((this.u2 != null && this.u2 == "traffic") || this.AG != this.d3$) || bpp[0] != this.$gu) {
            for (var p = 0; p < this.D2lgf.length; p++) {
                this.D2lgf[p].onmousedown = null;
                _removeNode(this.D2lgf[p])
            }
            this.D2lgf = []
        }
        this.$gu = bpp[0]
    }
    this.Y9q4c();
    var pT = '';
    if (this.Kw$79) this.A1Fq();
    var pw = 0;
    var yk = this.yl;
    var uY = (this.u2 == "undefined" || this.u2 == null) ? "poi" : this.u2;
    var nL = nM[this.AG];
    this.sZ = 0;
    this.s1 = 0;
    this.tf1 = this.width;
    this.tg = this.height;
    this.s2 = parseInt(this.gD);
    this.s3 = parseInt(this.gE);
    this.th = parseInt(this.gD);
    this.ti = parseInt(this.gE);
    var uZ = [];
    var u4 = [];
    var t1 = parseInt(new Date().getTime() / 60000);
    var s8 = (360 / sj[this.AG]);
    var c9S33 = this.getZoomLevel() - 1;
    if (this.AG == this.d3$) this.sE.clean();
    else if (typeof basepoilist != "object" && !this.b021 && this.rr83w) this.rr83w = false;
    for (var ix = -this.z4 - 1; ix <= this.z4; ix++) {
        for (var iy = -this.z5 - 1; iy <= this.z5; iy++) {
            try {
                var qy = parseInt(this.gD + ix);
                var qA = parseInt(this.gE + iy);
                qy = (qy) % s8;
                if (qy >= (s8 / 2)) qy -= s8;
                if (qy < (-s8 / 2)) qy += s8;
                var dirx = parseInt(Math.floor((qy) / nL));
                var diry = parseInt(Math.floor((qA) / nL)); {
                    if (dirx < 0) dirx += 1;
                    if (diry < 0) diry += 1
                }
                var L037 = (qy) - dirx * nL;
                var JT6y = (qA) - diry * nL;
                var pM = this.eI1I.replace("img", "img" + this.WoUJ(L037, JT6y)) + this.sR;
                var pQ = this.strImgUrl + "mapbank/" + uY + "/" + this.sR;
                var pG = this.strImgUrl + "mapbank/base/" + this.sR;
                if (this.AG >= 14) pM += dirx + "/";
                pQ += dirx + "_" + diry + "/";
                pG += dirx + "_" + diry + "/";
                pM += dirx + "_" + diry + "/";
                pQ += L037 + "_" + JT6y + ".png";
                pG += L037 + "_" + JT6y + ".js";
                pM += L037 + "_" + JT6y + "." + this.xK;
                var p1 = (ix * this.imgWidth) + parseInt(this.mapX);
                var p3 = (-(iy * this.imgHeight) + parseInt(this.mapY));
                var p4 = p3;
                if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                    p3 = p3 + w8[this.AG]
                }
                var SF$ = false;
                var v59t4 = true;
                var r6r = true;
                if ((p1 < -this.imgWidth || p1 > this.width || p3 > this.height || p3 < -this.imgHeight)) SF$ = true;
                if (this.u2 != null && this.u2 == "traffic" && w8[this.AG] != 0 && ((p4 < this.height || p4 <= 0))) {
                    v59t4 = false;
                    if (SF$) pM = null
                }
                if (this.Kw$79 && w8[this.AG] != 0 && ((p4 < this.height || p4 <= 0))) {
                    r6r = false;
                    if (SF$) pM = null
                }
                if (SF$ && v59t4 && r6r) continue;
                if (pM) {
                    if (this.sZ < (p1 + this.imgWidth)) {
                        this.sZ = (p1 + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.s1 < (p3 + this.imgHeight)) {
                        this.s1 = (p3 + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(iy)
                    }
                    if (this.tf1 > p1) {
                        this.tf1 = p1;
                        this.th = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.tg > p3) {
                        this.tg = p3;
                        this.s3 = parseInt(this.gE) + parseInt(iy)
                    }
                }
                var xY = ((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase();
                if (pw == 0) {
                    pw = 1
                }
                if (pM && pM.indexOf("NaN") < 0) {
                    if (this.pU[xY] == null) {
                        if (!rs || !px) {
                            this.pU[xY] = new Image();
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].style.MozUserSelect = "none"
                        } else {
                            this.pU[xY] = document.createElement("v:Image");
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].cE = "f";
                            this.pU[xY].style.rotation = this.rotation;
                            this.pU[xY].style.width = this.imgWidth;
                            this.pU[xY].style.height = this.imgHeight
                        } if (px) this.pU[xY].style.filter = "alpha(opacity=0);";
                        else this.pU[xY].style.opacity = "0";
                        f1.nk(this.pU[xY], pM, this.imgWidth, this.imgHeight)
                    } else {
                        if (px && rs) {
                            this.pU[xY].style.rotation = this.rotation
                        }
                    }
                    var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                    var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                    this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
                    this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
                    this.pU[xY].c2 = true;
                    this.pU[xY].setAttribute("origy", parseInt(p5 - this.imgHeight / 2));
                    this.pU[xY].setAttribute("origx", parseInt(p2 - this.imgWidth / 2))
                }
                if (this.u2 != null && this.u2 == "traffic") {
                    if (!__mapbar_magic_id) __mapbar_magic_id = "";
                    var pV = bpp[0] + __mapbar_magic_id + "/" + c9S33 + "/o" + xY + ".png";
                    if (l49R0) {
                        var tgh6a = document.createElement("v:image");
                        tgh6a.setAttribute("unselectable", "on");
                        tgh6a.id = "o" + xY;
                        tgh6a.setAttribute("name", xY);
                        tgh6a.setAttribute("traffic", "yes");
                        tgh6a.style.cssText = "position:absolute;top:" + p4 + "px;left:" + p1 + "px;width:300px;height:300px";
                        tgh6a.src = pV;
                        this.D2lgf.push(tgh6a)
                    } else {
                        var img = document.createElement("IMG");
                        img.id = "o" + xY;
                        img.setAttribute("name", xY);
                        img.src = pV;
                        img.ntry = "0";
                        img.unselectable = "on";
                        img.onerror = function () {
                            imageTileError(this)
                        };
                        img.onload = function () {
                            imageTileOk(this)
                        };
                        img.onmousedown = function () {
                            return false
                        };
                        img.style.cssText = "position:absolute;top:" + p4 + "px;left:" + p1 + "px;-moz-user-select: none;";
                        img.setAttribute("traffic", "yes");
                        this.D2lgf.push(img)
                    }
                    uZ[uZ.length] = 'o' + xY;
                    u4[u4.length] = dirx + "_" + diry + "/"
                } else if (this.u2 != null && this.u2 != "undefined" && pQ && pQ.indexOf("NaN") < 0) {
                    if (this.pU[xY]) {
                        var id = "o" + xY;
                        var path = dirx + "_" + diry + "/";
                        if (((typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + path + id + ".png"])) || W27) {
                            var div = aa(id);
                            if (!div) {
                                div = document.createElement("DIV");
                                div.setAttribute("unselectable", "on");
                                div.id = id;
                                div.setAttribute("name", xY);
                                div.style.cssText = "position:absolute;width:0px;height:0px;";
                                this.D2lgf.push(div)
                            }
                            div.style.left = p1 + "px";
                            div.style.top = p4 + "px";
                            uZ[uZ.length] = id;
                            u4[u4.length] = path
                        }
                    }
                }
                if (this.Kw$79) {
                    this.layerData[xY] = {
                        passiveLoadStatus: Maplet.UNLOAD,
                        filename: this.sR + dirx + "_" + diry + "/" + L037 + "_" + JT6y,
                        dirx: dirx,
                        diry: diry,
                        grid: xY,
                        L037: L037,
                        JT6y: JT6y,
                        dirname: dirx + "_" + diry,
                        xyname: L037 + "_" + JT6y,
                        x: p1,
                        y: p4,
                        qy: qy,
                        qA: qA,
                        gridx: qy,
                        gridy: qA
                    }
                }
                pM = null;
                pQ = null
            } catch (e) {
                throw (e)
            }
        }
    }
    for (var qI in this.pU) {
        var img = this.pU[qI];
        if (img != null && typeof img == "object") {
            if ((typeof img.c2 == "boolean" && img.c2) || img.c2 == "true") {
                if (img.parentNode != this.sE.div) {
                    if (img.parentNode != null) img.parentNode.removeChild(img);
                    this.sE.div.appendChild(img)
                }
            } else if (img.parentNode != this.sG.div) {
                if (img.parentNode != null) _removeNode(img);
                img.onerror = null;
                img.onload = null;
                img = null;
                delete this.pU[qI]
            }
        }
    }
    if (!(this.u2 != null && this.u2 == "traffic") && this.D2lgf.length > 0) {
        var s = uZ.join(",");
        for (var r7X05 = this.D2lgf.length - 1; r7X05 >= 0; r7X05--) {
            if (s.indexOf(this.D2lgf[r7X05].id) == -1) {
                if (this.D2lgf[r7X05].parentNode) {
                    _removeNode(this.D2lgf[r7X05])
                }
                this.D2lgf.splice(r7X05, 1)
            }
        }
        for (var r7X05 = uZ.length - 1; r7X05 >= 0; r7X05--) {
            if (aa(uZ[r7X05])) uZ.splice(r7X05, 1)
        }
    }
    if (this.D2lgf.length > 0) {
        for (var q = 0; q < this.D2lgf.length; q++) {
            this.lA.div.appendChild(this.D2lgf[q])
        }
    }
    pT = null;
    for (var pid in this.$I78m) {
        var p = this.$I78m[pid];
        if (p.paint) p.paint()
    }
    if (this.Kw$79) {
        for (var i in this.qS) {
            if (this.qS[i].inZoomRange(this.AG)) this.qS[i].update();
            else this.qS[i].clear()
        }
    }
    if (this.sE.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.sE.div)
    }
    if (this.vx.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.vx.div)
    }
    if ((typeof this.fo == "boolean" && this.fo) && document.getElementById("LayerMap") && document.getElementById("LayerMap").filters && document.getElementById("LayerMap").filters.length > 0) {
        document.getElementById("LayerMap").filters[0].apply();
        document.getElementById("LayerMap").filters[0].vu()
    }
    if (this.aN.length > 0) {
        for (var qk = 0; qk < this.aN.length; qk++) {
            this.aN[qk].paint()
        }
    }
    if (this.zy != null) {
        this.zy.paint();
        if (this.tG != null) {
            this.tG.paint()
        }
    }
    if (this.aO.length > 0) {
        for (qk = 0; qk < this.aO.length; qk++) {
            this.aO[qk].u9(this.vx.div);
            this.aO[qk].paint(this.lA.div)
        }
    }
    if (this.yG.length > 0) {
        if (!px) this.yG[this.yG.length - 1].label(this.lA.graphics)
    } else {
        if (iToolTipStyle == 0) hideToolTipMenu()
    } if (this.lA.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.lA.div)
    }
    if (this.aE.length > 0) {
        this.aG = null;
        this.aH = null;
        this.aF = null;
        for (qk = 0; qk < this.aE.length; qk++) {
            if (this.AG >= this.aE[qk].AJ && this.AG <= this.aE[qk].AI) {
                var w4 = this.zl(this.aE[qk].li, this.aE[qk].lf);
                var w5 = this.zm(this.aE[qk].lf, this.aE[qk].li);
                if (w4 >= 0 && w4 <= this.width && w5 >= 0 && w5 <= this.height) {
                    if (this.aG == null) {
                        this.aG = new Array();
                        this.aH = new Array();
                        this.aF = new Array()
                    }
                    this.aG[this.aG.length] = w4;
                    this.aH[this.aH.length] = w5;
                    this.aF[this.aF.length] = qk
                }
            }
        }
    }
    if (!this.bInitialized) {
        this.bInitialized = true
    }
    if (this.u2 != null && this.u2 != "undefined") {
        if (this.u2 == "base") {
            if (this.AG >= parseInt(bpp[1]) && this.AG <= parseInt(bpp[2])) {
                if (!this.rr83w && !W27) {
                    this.tAI8();
                    this.rr83w = true
                }
                var i = 0;
                for (var l in uZ) {
                    try {
                        if (typeof uZ[l] == "string") {
                            if (typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + u4[l] + uZ[l] + ".png"]) {
                                if (!W27) new Y6WY(bpp[0] + sI[this.AG] + "/" + u4[l] + uZ[l] + ".png", parseInt, false, true).P4MUn()
                            }
                            i++
                        }
                    } catch (lN) {
                        throw (lN)
                    }
                    uZ[l] = null;
                    u4[l] = null
                }
            } else {
                for (var su in uZ) {
                    try {
                        if (typeof uZ[su] == "string" && document.getElementById(uZ[su]) && document.getElementById(uZ[su]).parentNode) {
                            if (!W27) _removeNode(aa(uZ[su]))
                        }
                    } catch (e) {
                        throw (e)
                    }
                    uZ[su] = null;
                    u4[su] = null
                }
            }
        } else {
            t1 = parseInt(new Date().getTime() / 60000);
            for (var uD in uZ) {
                try {
                    if ((this.u2 != "traffic") && typeof uZ[uD] == "string") {
                        XMLHttp.sendReq('GET', 'maplite/' + this.u2 + '.jsp?' + this.u3 + '&oid=' + uZ[uD] + '&epoch=' + t1, '', vB, uZ[uD])
                    }
                } catch (e) {
                    throw (e)
                }
                uZ[uD] = null;
                u4[uD] = null
            }
        }
        uZ.length = 0;
        uZ = null;
        u4.length = 0;
        u4 = null
    }
    this.c0 = false;
    this.fs = false;
    for (var i = 0; i < 2; i++) {
        for (var qi in this.u5) {
            if (this.u5[qi] && this.u5[qi].paint) {
                if (i == 0 && this.u5[qi] instanceof MMarker && !this.u5[qi].ls) {
                    this.u5[qi].paint()
                } else if (i == 1 && this.u5[qi].Q1262) this.u5[qi].paint()
            }
        }
    }
    avBubble.w30_();
    if (this.overview) this.overview.paint();
    cq.lf = this.gx;
    cq.li = this.gA;
    var gz = cq.zn();
    this.yu = gz + "@" + this.AG;
    if (ALLOW_MV) {
        try {
            var ww = "@mapbar" + (new Date().getTime() % 86400).toString(36);
            sB.src = "http://mv.mapbar.com/?" + this.yu + "@" + this.yt + "@" + this.width.toString(36).toUpperCase() + "@" + this.height.toString(36).toUpperCase() + "@" + this.sS.toString(36).toUpperCase() + "@" + c75 + "@" + strLicenseKey.toString(36).toUpperCase() + "@" + this.yl + "@" + ((bp) ? 1 : 0) + "@" + ((this.u2) ? this.u2 : "") + ww
        } catch (e) {
            throw (e)
        }
    }
    this.sF.moveTo(0, 0);
    this.vx.moveTo(0, 0);
    this.lA.moveTo(0, 0);
    MEvent.trigger(this, "update", this.yu);
    this.wbb1l = 0;
    this.$X41 = 0
};
Maplet.prototype.getEllipse = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MEllipse) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getRoundRect = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MRoundRect) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getMarkers = function () {
    var r = [];
    for (var i in this.u5) {
        var snn5 = this.u5[i];
        if (snn5 instanceof MMarker && snn5.creator == MLayer.USER) r.push(snn5)
    }
    return r
};
Maplet.prototype.getPolylines = function (xPrS) {
    if (typeof xPrS != "number") xPrS = 1;
    var r = [];
    for (var i in this.u5) {
        var snn5 = this.u5[i];
        if (snn5 instanceof MPolyline && snn5.creator == MLayer.USER) {
            if (xPrS == 2 && !snn5.s131()) continue;
            else if (xPrS == 3 && snn5.s131()) continue;
            r.push(snn5)
        }
    }
    return r
};
Maplet.prototype.equalsLLCoords = function (RKan, GtF$2, yld52) {
    if (typeof RKan == "string" && RKan && typeof GtF$2 == "string" && GtF$2) {
        try {
            if (RKan == GtF$2) return true;
            if (typeof yld52 != "number") yld52 = 0;
            var y53I = maplet.toScreenCoordinate(RKan);
            var o6B3 = maplet.toScreenCoordinate(GtF$2);
            if ((y53I[0] == o6B3[0] || Math.abs(y53I[0] - o6B3[0]) <= yld52) && (y53I[1] == o6B3[1] || Math.abs(y53I[1] - o6B3[1]) <= yld52)) return true
        } catch (nc) {}
    }
    return false
};
Maplet.prototype.F5l = function (d) {
    return d * Math.PI / 180
};
Maplet.prototype.Hn0 = function (E$$1$, ybOEs, _TS1g, A1338) {
    var FY4x = this.F5l(E$$1$),
        Be7 = this.F5l(_TS1g),
        a = FY4x - Be7,
        b = this.F5l(ybOEs) - this.F5l(A1338),
        s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(FY4x) * Math.cos(Be7) * Math.pow(Math.sin(b / 2), 2)));
    return s * j2Qf
};
Maplet.prototype.measDistance = function (pts) {
    try {
        var g0 = 0;
        var ur = pts.length;
        for (var su = 1; su < ur; su++) {
            var k484 = cq.vp(pts[su - 1].getPid());
            var J56Pv = cq.vp(pts[su].getPid());
            g0 += this.Hn0(k484[1], k484[0], J56Pv[1], J56Pv[0])
        }
        return parseInt(g0)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.measArea = function (pts) {
    try {
        var area = 0;
        var ur = pts.length;
        var qC = 2;
        var qI = 0;
        for (var i = 1; i <= ur; i++) {
            var qj = (qC % ur);
            var pC = (qI % ur);
            var lon = parseFloat(cq.vp(pts[(i % ur)].getPid())[0]);
            var lat = parseFloat(cq.vp(pts[qj].getPid())[1]);
            var _TS1g = parseFloat(cq.vp(pts[pC].getPid())[1]);
            area += lon * (lat - _TS1g);
            qC++;
            qI++
        }
        return parseInt(Math.abs(area / 2) * this.gM * this.gM * 100000 * 100000)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.decodeLine = function (pts, rKJW) {
    var rt = [];
    if (typeof pts != "string" || !pts || typeof rKJW != "string" || !rKJW || rKJW.indexOf(",") == -1) return rt;
    var J1YCy = this._V7n(pts);
    var J8R2e = this.Iy7(rKJW);
    for (var i = 0; i < J1YCy.length; i++) {
        rt.push(new MPoint(J1YCy[i][1] * 0.00001, J1YCy[i][0] * 0.00001, false, typeof J8R2e[i] == "undefined" ? 0 : J8R2e[i]));
        rt[i].initialize(this)
    }
    return rt
};
Maplet.prototype._V7n = function (eW1a) {
    var Yp1c1 = [];
    if (typeof eW1a == "string" && eW1a) {
        var qt = Kuo(eW1a);
        var x = qt[0];
        var y = qt[1];
        Yp1c1.push([x, y]);
        for (var i = 2; i < qt.length; i += 2) {
            x += qt[i];
            y += qt[i + 1];
            Yp1c1.push([x, y])
        }
    }
    return Yp1c1
};
Maplet.prototype.Iy7 = function (eW1a) {
    var Yp1c1 = {};
    if (typeof eW1a == "string" && eW1a && eW1a.indexOf(",") != -1) {
        var qt = eW1a.split(",");
        for (var i = 0; i < qt.length; i++) {
            var r = Kuo(qt[i]);
            var xqc = 0;
            for (var qC = 0; qC < r.length; qC++) {
                xqc += r[qC];
                Yp1c1[xqc] = i + 1
            }
        }
    }
    return Yp1c1
};
Maplet.prototype.getLevelGroup = function () {
    var level = this.AG;
    if (level >= 0 && level <= 3) return 3;
    else if (level >= 4 && level <= 7) return 2;
    else if (level >= 8 && level <= 11) return 1;
    else if (level >= 12 && level <= 18) return 0;
    else return 3
};
Maplet.prototype.setMapBound = function (c7) {
    if (!c7.min || !(c7.min instanceof MPoint) || !c7.max || !(c7.max instanceof MPoint)) return;
    if (!c7.min.maplet) c7.min.initialize(this);
    if (!c7.max.maplet) c7.max.initialize(this);
    c7.E42_J = c7.min.clone();
    c7.n9_a3 = c7.max.clone();
    c7.jd7 = c7.min._galn();
    c7.dos$5 = c7.min._galt();
    c7.rSs0I = c7.max._galn();
    c7._31 = c7.max._galt();
    c7.v53hO = c7.jd7 + (c7.rSs0I - c7.jd7) / 2;
    c7.$4li$ = c7.dos$5 - (c7.dos$5 - c7._31) / 2;
    c7.L04A4 = new MPoint(c7.v53hO, c7.$4li$, false);
    c7.L04A4.initialize(this);
    this.mapBound = c7;
    this.I6y23()
};
Maplet.prototype.getMapBound = function () {
    return this.mapBound
};
Maplet.prototype.I6y23 = function () {
    this.l46N = true;
    var c55j3 = false;
    if (!this.fa && this.mapBound) {
        var DS9e = this.mapBound;
        DS9e.E42_J.recalcScreenCoords();
        DS9e.n9_a3.recalcScreenCoords();
        DS9e.L04A4.recalcScreenCoords();
        var ix = DS9e.jd7;
        var iy = DS9e.dos$5;
        var ax = DS9e.rSs0I;
        var ay = DS9e._31;
        var w = DS9e.n9_a3.mapX - DS9e.E42_J.mapX;
        var h = DS9e.n9_a3.mapY - DS9e.E42_J.mapY;
        var lon = this.gA;
        var lat = this.gx;
        var gC = new MPoint(this.gA, this.gx, false);
        gC.initialize(this);
        if (w > this.width && h > this.height) {
            var Kc89 = this.l850P.tl;
            var O8$0 = this.l850P.s4;
            var l15 = this.l850P.s6;
            var CY6 = this.l850P.tj;
            if (ix > Kc89) lon = this.gA + (ix - Kc89);
            else if (ax < l15) lon = this.gA - (l15 - ax);
            if (iy < O8$0) lat = this.gx - (O8$0 - iy);
            else if (ay > CY6) lat = this.gx + (ay - CY6)
        } else {
            if (gC.mapX != DS9e.L04A4.mapX || gC.mapY != DS9e.L04A4.mapY) {
                lon = DS9e.v53hO;
                lat = DS9e.$4li$
            }
        }
        var u$90 = new MPoint(lon, lat, false);
        u$90.initialize(this);
        if (gC.mapX != u$90.mapX || gC.mapY != u$90.mapY) {
            this.K_0r4 = false;
            this.setCenter(new MPoint(lon, lat, false));
            c55j3 = true
        }
    }
    this.l46N = false;
    return c55j3
};
Maplet.prototype.finalize = function () {
    this.clearOverlays(true);
    this.clearPanels(true);
    if (ContentInfo) ContentInfo.finalize();
    ContentInfo = null;
    this.disablePOILayer();
    this.disableTraffic();
    this.clearLayers(true);
    this.A1Fq();
    for (var i in this.pU) {
        try {
            if (this.pU[i] != null && typeof this.pU[i] == "object") {
                this.pU[i].c2 = false
            }
        } catch (e) {}
    }
    this.fL();
    if (this.zP) clearTimeout(this.zP);
    if (this.controlCanvas) this.controlCanvas.g1();
    if (this.overview) this.overview.g1();
    if (this.snapshotBox) this.snapshotBox.finalize();
    MEvent.removeBuiltInListener(this.map, "mousemove", this.mx23N["map_mousemove"]);
    MEvent.removeBuiltInListener(this.map, "mousedown", this.mx23N["map_mousedown"]);
    MEvent.removeBuiltInListener(this.map, "mouseup", this.mx23N["map_mouseup"]);
    MEvent.removeBuiltInListener(this.map, "click", this.mx23N["map_click"]);
    MEvent.removeBuiltInListener(this.map, "dblclick", this.mx23N["map_dblclick"]);
    MEvent.removeBuiltInListener(this.map, "mouseout", this.mx23N["map_mouseout"]);
    MEvent.removeBuiltInListener(this.map, "drag", this.mx23N["map_drag"]);
    MEvent.removeBuiltInListener(this.map, "dragstart", this.mx23N["map_dragstart"]);
    MEvent.removeBuiltInListener(this.map, "dragend", this.mx23N["map_dragend"]);
    MEvent.removeBuiltInListener(this.map, "mouseover", this.mx23N["map_mouseover"]);
    MEvent.removeBuiltInListener(this.map, "mousewheel", this.mx23N["map_mousewheel"]);
    MEvent.removeBuiltInListener(this.map, "DOMMouseScroll", this.mx23N["map_DOMMouseScroll"]);
    if (kp) MEvent.removeBuiltInListener(document, "keydown", this.mx23N["document_keydown"]);
    D3Ji(this.mx23N);
    this.sG.finalize();
    this.sF.finalize();
    this.zs.finalize();
    this.sE.finalize();
    this.vx.finalize();
    this.wq.finalize();
    this.sD.finalize();
    _removeNode(this.Ab1.container);
    this.ukd$.fC.finalize();
    this.lA.finalize();
    this._3297.onclick = null;
    _removeNode(this._3297);
    _removeNode(this.gvP);
    this.clearCache();
    D3Ji(this);
    document['mapbar-maplet'] = null
};
Maplet.prototype.getMaxZoomLevel = function () {
    return MAX_ZOOM_LEVEL
};
Maplet.prototype.getMinZoomLevel = function () {
    return MIN_ZOOM_LEVEL
};
Maplet.prototype.setMaxZoomLevel = function (zoom) {
    this.setZoomLevelRange(MIN_ZOOM_LEVEL, zoom)
};
Maplet.prototype.setMinZoomLevel = function (zoom) {
    this.setZoomLevelRange(zoom, MAX_ZOOM_LEVEL)
};
Maplet.prototype.setZoomLevelRange = function (min, max) {
    if (typeof min != 'number' || parseInt(min) < DEFAULT_MIN_ZOOM_LEVEL) {
        min = MIN_ZOOM_LEVEL
    }
    if (typeof max != 'number' || parseInt(max) > DEFAULT_MAX_ZOOM_LEVEL) {
        max = MAX_ZOOM_LEVEL
    }
    if (min < max) {
        MIN_ZOOM_LEVEL = min;
        MAX_ZOOM_LEVEL = max;
        var vnAox = this.getZoomLevel();
        this.controlCanvas.J$S(this);
        if (vnAox < min) {
            vnAox = min;
            this.setZoomLevel(min)
        } else if (vnAox > max) {
            vnAox = max;
            this.setZoomLevel(max)
        }
        this.controlCanvas.update(vnAox)
    }
};
Maplet.prototype.setBasemapImgUrl = function (url, format) {
    url = url || strImgsvrUrl + 'mapbank/mapbar/';
    format = format || 'png';
    if (url === this.eI1I && format === this.xK) {
        return
    }
    this.eI1I = url;
    this.xK = format;
    if (this.bInitialized) {
        this.refresh(true)
    }
};
Maplet.prototype.setOverviewImgUrl = function (url, format) {
    url = url || strImgsvrUrl + 'mapbank/mapbar/';
    format = format || 'png';
    if (url === this.n5R && format === this.l9D4x) {
        return
    }
    this.n5R = url;
    this.l9D4x = format;
    if (this.overview.fg) {
        this.overview.paint(true)
    }
};
Maplet.prototype.setDrawingNumber = function (xj, show) {
    show = typeof show === 'boolean' ? show : true;
    this.EAU_.style.display = show ? '' : 'none';
    if (typeof xj !== 'string') {
        xj = DEFAULT_DRAWING_NUMBER
    }
    this.EAU_.innerHTML = xj;
    this.Ad9()
};
Maplet.prototype.setNavInfo = function (xj, show) {
    show = typeof show === 'boolean' ? show : true;
    this.t90.style.display = show ? '' : 'none';
    if (typeof xj !== 'string') {
        xj = DEFAULT_NAV_INFO
    }
    this.t90.innerHTML = xj;
    this.Ad9()
};

function a8(id, lf, li, label, minLevel, maxLevel) {
    this.id = id;
    this.li = li;
    this.lf = lf;
    this.AJ = minLevel;
    this.AI = maxLevel;
    this.xP = label
};
Maplet.prototype.aZ = function (e) {
    if (maplet.snapshotBox.S0s0T) {
        maplet.snapshotBox.S0s0T = false;
        return
    }
    if (this.xc) {
        this.xc.hide()
    }
    var l6 = (px) ? event.srcElement.id : e.target.id;
    var target = (px) ? event.srcElement : e.target;
    var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    this.l6 = l6;
    this.fS = Ap - this.left;
    this.fT = Av - this.top;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) {
        return false
    }
    if (this.ff && this.nI().qn(this.fS, this.fT)) {
        this.AP.tC(this.fS, this.fT);
        return
    }
    if (this.aY()) {
        var fR = this.zp(this.fS, this.fT);
        var fO = this.zo(this.fS, this.fT);
        if (this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && this.downX == this.zQ && this.downY == this.zR && MEvent.contains(maplet, "click") > 0) {
            var VF7 = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
            if (apiType == 1) {
                var pt = new MPoint(VF7);
                pt.initialize(this);
                MEvent.trigger(this, 'click', e, pt)
            } else MEvent.trigger(this, 'click', e, VF7)
        }
        var cV = false;
        if ((this.sS == 7)) {
            this.addOrigin(fO, fR)
        } else if ((this.sS == 8)) {
            this.addDestination(fO, fR)
        } else if ((this.sS == 6)) {
            cq.lf = fO;
            cq.li = fR;
            var fQ = cq.zn();
            nX();
            if (apiType == 1) {
                MEvent.trigger(this, "bookmark", {
                    action: "add",
                    point: new MPoint(fQ),
                    zoom: this.AG
                })
            } else {
                MEvent.trigger(this, "bookmark", "&act=add&latlon=" + fQ + "&zm=" + this.AG)
            }
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if ((new Date().getTime() - this.tD) >= 500) {
                this.tD = new Date().getTime();
                if (this.cQ) {
                    this.cQ = false
                } else {
                    var b = false;
                    var yw = (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (target.parentNode && target.parentNode.id == "LayerMap") || (target.id && target.id.indexOf("OverlayBg") >= 0) || (target.getAttribute && target.getAttribute(WJ7V)));
                    if (!this.cn && yw) {
                        if (this.aR2_) return;
                        if (iToolTipStyle == 0) hideToolTipMenu();
                        b = true
                    }
                    if (yw && !this.$7BK8 && this.Kw$79) {
                        var img = null;
                        if (img = this.getImgByXY(this.moveX, this.moveY, true)) {
                            var $V3 = false;
                            for (var i = this.sM9s8.length - 1; i >= 0; i--) {
                                if (typeof this.sM9s8[i] != "undefined") {
                                    for (var r7X05 = this.sM9s8[i].length - 1; r7X05 >= 0; r7X05--) {
                                        if (!this.sM9s8[i][r7X05].inZoomRange(this.AG)) continue;
                                        var r = this.sM9s8[i][r7X05].click(img, this.moveX, this.moveY);
                                        b = r.center2map;
                                        if (r.data) {
                                            if (r.firevent && MEvent.contains(this, "layer_click") > 0) {
                                                MEvent.trigger(this, "layer_click", {
                                                    layer: this.sM9s8[i][r7X05],
                                                    pid: r.data.p,
                                                    area: r.data.l,
                                                    data: r.data.d,
                                                    name: r.data.n,
                                                    rect: r.data.rect
                                                });
                                                b = false
                                            }
                                            $V3 = true;
                                            break
                                        }
                                    }
                                }
                                if ($V3) break
                            }
                        }
                    }
                    if (this.clickToCenter && b) {
                        if (this.R93 != null) this.hideBubble();
                        this.waitPan(this.width / 2 - this.fS, -this.fT + this.height / 2)
                    }
                }
                this.cn = false
            } else {
                this.tD = new Date().getTime()
            }
        } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.W28Q) {
            if (this.allowDrawingDragMap && !this.d7B30) {
                this.d7B30 = true;
                return false
            }
            if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) {
                return false
            }
            if (this.sS == ts.W28Q) {
                with(this.P8h) {
                    if (o7c.length && target && target.getAttribute(F8v33) == "marker" && target.getAttribute("oid") == o7c[o7c.length - 1].id) {
                        if (o7c.length > 1) {
                            var n = o7c;
                            var l = ioQ4;
                            xH3dF = 0;
                            if (this.vA != "undefined") this.setMode(this.vA);
                            if (MEvent.contains(this, "roadline") > 0) {
                                MEvent.trigger(this, "roadline", n, l)
                            }
                        }
                    } else {
                        var pt = new MPoint(fR, fO, false);
                        if (o7c.length) this.yHC5C(pt, true);
                        this.A8T(pt);
                        this.n03bF()
                    }
                }
            } else {
                if (!this.zy) {
                    var cr = this.sS == ts.ly || this.sS == ts.ta;
                    var P4cn2 = new MBrush(this.brush.color, this.brush.stroke, this.brush.style, cr, this.brush.bgcolor, this.brush.transparency, this.brush.bgtransparency, this.brush.arrow);
                    if (this.sS == ts.tb) P4cn2 = this.e76.xF4u;
                    var A2R0T = new MPoint(cq.zn(fR, fO));
                    this.zy = new MPolyline([A2R0T], P4cn2, null, null);
                    this.zy.initialize(this, false);
                    this.sv++;
                    if (this.sS == ts.tb) P4cn2 = this.e76.Wh_;
                    this.tG = new MPolyline([A2R0T, A2R0T], P4cn2, null, null);
                    this.tG.initialize(this, false);
                    this.sv++;
                    if (this.sS == ts.tb) {
                        this.b_m5(A2R0T, true);
                        nX()
                    }
                } else {
                    var j04 = new MPoint(cq.zn(fR, fO));
                    this.zy.pts.push(j04);
                    this.zy.update();
                    this.tG.pts[0] = j04;
                    this.tG.pts[1] = new MPoint(cq.zn(fR, fO));
                    this.tG.update();
                    if (this.sS == ts.tb) {
                        this.b_m5(j04)
                    }
                }
            }
            cV = true
        }
        if (l6 == "LayerDrawMap" && !cV) {
            if (this.aG != null && this.aH != null) {
                for (var qk = 0; qk < this.aG.length; qk++) {
                    if (Math.abs(this.aG[qk] - this.fS) < HOTSPOT_SIZE && Math.abs(this.aH[qk] - this.fT) < HOTSPOT_SIZE) {
                        var yg = "";
                        if (apiType == 1) yg = this.aE[this.aF[qk]].xP;
                        else yg = "&hotspot=" + this.aE[this.aF[qk]].xP;
                        this.vi = 0;
                        MEvent.trigger(this, "hotspot", yg);
                        if (hs) {
                            this.setCenter(this.aE[this.aF[qk]].lf, this.aE[this.aF[qk]].li);
                            this.setZoomLevel(8)
                        }
                        break
                    }
                }
            }
        }
    }
};
Maplet.prototype.a1 = function (e) {
    var l6 = (px) ? event.srcElement.id : e.target.id;
    var target = (px) ? event.srcElement : e.target;
    this.l6 = l6;
    nX();
    if (this.l6 != null && this.l6.toString().indexOf("ctrl") >= 0) return false;
    if (this.aY()) {
        if (this.sS != ts.tz && this.sS != ts.tA && this.sS != ts.a2_Q) this.gvL("default", this.map);
        var VF7 = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
        if (apiType == 1) {
            var pt = new MPoint(VF7);
            pt.initialize(this);
            MEvent.trigger(this, 'dbclick', e, pt)
        } else {
            MEvent.trigger(this, 'dbclick', e, VF7)
        } if (this.sS == ts.tb || this.sS == ts.ta) {
            var g0 = 0;
            var area = 0;
            var F65 = this.Nv9_[this.Nv9_.length - 1];
            if (this.zy) {
                var ur = this.zy.pts.length;
                if (!px) ur = ur - 1;
                if (this.sS == ts.tb) {
                    g0 = F65.o7c[F65.o7c.length - 1].OY7;
                    this.closeMeasureCurrPath()
                } else {
                    this.zy.pts[ur] = this.zy.pts[0];
                    area = this.measArea(this.zy.pts)
                } if (this.zy.zX.parentNode == this.lA.div) this.zy.remove(true)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) this.tG.remove(true);
            this.zy = null;
            this.tG = null;
            if (!px) this.refresh();
            if (g0.toString() == eval("Number.NaN.toString()")) g0 = 0;
            if (area.toString() == eval("Number.NaN.toString()")) area = 0;
            if (this.sS == ts.ta) {
                var xk = "";
                if (area > 1000000) {
                    area = Math.round((area / 10000 / 10 / 10) * 100) / 100;
                    xk = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + area + tX("%u5E77%uC42C%uB725%uE338") : "Total area:" + area + "km2"
                } else {
                    area = Math.round(area * 100) / 100;
                    xk = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + area + tX("%u5E76%uC42C%uE22C") : "Total area:" + area + "m2"
                } if (this.vA != "undefined") this.setMode(this.vA);
                sC(this.width / 2 + this.left + this.offsetX, this.height / 2 + this.top + this.offsetY, xk);
                if (apiType == 1) {
                    MEvent.trigger(this, "measarea", area)
                } else {
                    MEvent.trigger(this, "measarea", "&act=measarea&area=" + area + tX("%u5E77%uC42C%uB725%uE338"))
                }
            } else {
                if (apiType == 1) {
                    MEvent.trigger(this, "measure", g0)
                } else {
                    MEvent.trigger(this, "measure", "&act=measure&dist=" + g0 + tX("%u516E%uE338"))
                }
            }
            this.setMode('pan')
        } else if (this.sS == ts.lz || this.sS == ts.ly) {
            var yg = null;
            if (this.zy) {
                var pm88 = this.zy.pts.length;
                if (!px) pm88 = pm88 - 1;
                this.zy.pts.length = pm88;
                if (this.zy.zX.parentNode == this.lA.div) this.zy.remove(true);
                if (apiType == 1) {
                    yg = this.zy.zn();
                    yg.zoom = this.AG
                } else yg = ("&act=add&pline=" + this.zy.zn() + "&zm=" + this.AG)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) {
                this.tG.remove(true)
            }
            this.zy = null;
            this.tG = null;
            if (!px) this.refresh();
            var nb = (this.sS == ts.lz) ? "drawline" : "drawarea";
            if (this.vA != "undefined") this.setMode(this.vA);
            MEvent.trigger(this, nb, yg)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (!DISABLE_DBCLICK_ZOOM && this.l6 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || target.parentNode.id == "LayerMap" || target.id.indexOf("OverlayBg") >= 0 || this.l6.substring(0, "mk_shadow_".length) == "mk_shadow_" || target.getAttribute("traffic") == "yes") || (target.getAttribute(WJ7V))) {
                this.vi = 0;
                if (this.getZoomLevel() < MAX_ZOOM_LEVEL) this.zoomTo(this.getZoomLevel() + 1, void(0), this.width / 2 - this.fS, -this.fT + this.height / 2);
                else if (this.getZoomLevel() == MAX_ZOOM_LEVEL) this.panTo(this.width / 2 - this.fS, -this.fT + this.height / 2)
            }
        }
    }
};
Maplet.prototype.a2 = function (e) {
    if (this.sS != ts.ty) {
        this.hideBubble()
    }
    if (this.markerDragAnimation) {
        this.G69(false)
    }
    var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    if (!px && this.panel.style.position != "absolute") {};
    this.downX = Ap - this.left;
    this.downY = Av - this.top;
    this.m50 = new Date().getTime();
    this.Dj75 = this.WhA6O = 0;
    this.$7BK8 = false;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0 && this.controlCanvas != null) {
        this.controlCanvas.onmousedown(e);
        return
    }
    if (e.type == "mousedown" && this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && MEvent.contains(maplet, "mousedown") > 0) {
        MEvent.trigger(this, 'mousedown', e)
    }
    this.tQ = '';
    if (this.ff && this.nI().qn(this.downX, this.downY)) {
        this.AP.tE(this.downX, this.downY);
        return false
    } else {
        var snn5 = px ? event.srcElement : e.target;
        this.cL = (snn5.getAttribute($0eU) || snn5.getAttribute("traffic")) ? true : false;
        if (this.aY() && this.cS) {
            if (this.sS == ts.a2_Q && !this.snapshotBox.Wkkaj) {
                this.snapshotBox.show();
                this.snapshotBox.Wkkaj = true
            } else {
                this.sD.resize(1, 1);
                this.sD.show()
            }
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (px && (this.l6.indexOf("MPolyline") == this.l6.length - 9)) {
                this.gvL("move", event.srcElement)
            } else {
                eval(document.body.scrollTop);
                this.gvL("move", this.map)
            }
        }
    } if (this.cO && this.cL) {
        if (px || _36s2) {
            this.map.setCapture && this.map.setCapture()
        } else {
            e.Rl1b && e.Rl1b();
            e.B36h && e.B36h()
        }
    }
};
Maplet.prototype.a5 = function (e) {
    if (!this.map) return;
    var Pn5;
    if (this.map.getBoundingClientRect) {
        var r = this.map.getBoundingClientRect();
        Pn5 = [r.left, r.top]
    } else {
        Pn5 = juH(this.map);
        Pn5[0] = Pn5[0] - b$9nJ();
        Pn5[1] = Pn5[1] - u4p()
    }
    this.offsetX = Pn5[0] - this.left;
    this.offsetY = Pn5[1] - this.top
};
Maplet.prototype.a4 = function (e) {
    MEvent.trigger(this, 'mouseout', e);
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    if (!px || (px && event.clientX != -1)) {
        var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
        var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
        if (this.cL) {
            this.h1L6(Ap - this.left - (px ? 1 : 0) - this.moveX, Av - this.top - (px ? 1 : 0) - this.moveY)
        }
        this.moveX = Ap - this.left - (px ? 1 : 0);
        this.moveY = Av - this.top - (px ? 1 : 0);
        this.wbb1l = X0Jd(this.moveX - this.downX);
        this.$X41 = X0Jd(this.moveY - this.downY)
    }
    if (this._og && MEvent.contains(this, "layer_mouseout") > 0) {
        MEvent.trigger(this, "layer_mouseout", {
            layer: this.b2g,
            pid: this._og.p,
            area: this._og.l,
            data: this._og.d,
            name: this._og.n,
            rect: this._og.rect
        });
        this._og = null;
        this.b2g = null
    }
    this.cI = false;
    if (px) document.onmousewheel = new Function("return true");
    clearInterval(this.x0P);
    this.x0P = undefined
};
Maplet.prototype.a3 = function (e) {
    if (this.cL && this.xc) this.xc.hide();
    this.cI = true;
    if (!this.cL) this.a5(e);
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    var Ap = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    if (this.cL) {
        this.h1L6((Ap) - this.left - this.moveX, (Av) - this.top - this.moveY)
    }
    this.moveX = (Ap) - this.left;
    this.moveY = (Av) - this.top;
    if (this.controlCanvas != null) {
        if (this.controlCanvas.onmousemove(e)) {
            return
        }
    }
    if (this.gc != null) {
        for (var n8 in this.gc) {
            if (this.gc[n8].toString().indexOf("MStandardControl") > 0 && this.gc[n8].nR && this.gc[n8].nR.onmousemove(e)) {
                return
            }
        }
    }
    if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly) {
        var x0 = "";
        if (this.sS == ts.tb) {
            if (!this.zy) {
                x0 = (en) ? "Double click to finish" : this.e76.r19f
            }
            showMouseTipBox(this.moveX + 6, this.moveY - 3, x0, this.map)
        } else {
            x0 = (en) ? "Double click to finish" : tX("%u8BFC%uDFC3%uA5C7%uD0CE%uE632");
            showMouseTipBox(this.moveX, this.moveY, x0, this.map)
        }
    } else if (this.sS == ts.tw) {
        if (this.gJ != null && this.gJ != "undefined" && this.gJ != "null" && this.gJ != "") {
            showMouseTipBox(this.moveX - this.gI.width / 2 - 10 - 1, this.moveY - this.gI.height - 2 - 18, "<img src='" + this.gI.src + "'>", this.map)
        } else {
            nX()
        }
    } else {
        nX()
    } if (this.ff && this.nI().tF(this.l6, this.moveX, this.moveY)) return;
    if (this.sS == ts.ty && !this.cN) {
        var cF = false;
        if (this.aG != null && this.aH != null) {
            for (var qk = 0; qk < this.aG.length; qk++) {
                if (Math.abs(this.aG[qk] - this.moveX) < HOTSPOT_SIZE && Math.abs(this.aH[qk] - this.moveY) < HOTSPOT_SIZE) {
                    cF = true;
                    break
                }
            }
        }
        if (cF) {
            this.gvL("pointer", this.map)
        } else if (!this.cL) {
            this.gvL("default", this.map)
        }
        if (this.Kw$79 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (e.target.parentNode && e.target.parentNode.id == "LayerMap") || e.target.id.indexOf("OverlayBg") >= 0 || e.target.getAttribute(WJ7V))) {
            var img = null;
            if (img = this.getImgByXY(this.moveX, this.moveY, true)) {
                this.loadLayerDataOfPassiveMode(img);
                var b = false;
                for (var i = this.sM9s8.length - 1; i >= 0; i--) {
                    if (typeof this.sM9s8[i] != "undefined") {
                        for (var r7X05 = this.sM9s8[i].length - 1; r7X05 >= 0; r7X05--) {
                            var g4L = this.sM9s8[i][r7X05];
                            if (!g4L.inZoomRange(this.AG)) continue;
                            var d = g4L.M1r7(img, this.moveX, this.moveY);
                            if (d) {
                                if (this._og && this._og != d && MEvent.contains(this, "layer_mouseout") > 0) {
                                    MEvent.trigger(this, "layer_mouseout", {
                                        layer: g4L,
                                        pid: this._og.p,
                                        area: this._og.l,
                                        data: this._og.d,
                                        name: this._og.n,
                                        rect: this._og.rect
                                    })
                                }
                                if (this._og != d && MEvent.contains(this, "layer_mouseover") > 0) {
                                    this._og = d;
                                    this.b2g = g4L;
                                    MEvent.trigger(this, "layer_mouseover", {
                                        layer: g4L,
                                        pid: d.p,
                                        area: d.l,
                                        data: d.d,
                                        name: d.n,
                                        rect: d.rect
                                    })
                                }
                                if (MEvent.contains(this, "layer_mousemove") > 0) MEvent.trigger(this, "layer_mousemove", {
                                    layer: g4L,
                                    pid: d.p,
                                    area: d.l,
                                    data: d.d,
                                    name: d.n,
                                    rect: d.rect
                                });
                                b = true;
                                break
                            } else if (this._og && this.b2g == g4L && MEvent.contains(this, "layer_mouseout") > 0) {
                                MEvent.trigger(this, "layer_mouseout", {
                                    layer: g4L,
                                    pid: this._og.p,
                                    area: this._og.l,
                                    data: this._og.d,
                                    name: this._og.n,
                                    rect: this._og.rect
                                });
                                this._og = null;
                                this.b2g = null
                            }
                        }
                    }
                    if (b) break
                }
            }
        }
        if (MEvent.contains(maplet, "mousemove") > 0) {
            var pt = new MPoint(this.toMapCoordinate(this.moveX, this.moveY));
            MEvent.trigger(this, "mousemove", e, pt)
        }
    }
    if (this.cO && this.cL) {
        if (this.aR2_) return;
        if (!this.p2Wu) {
            this.no();
            this.p2Wu = true
        }
        if (px) {
            if (!document.getElementById("_map_marker_speeder")) {
                var t5k = document.createElement("DIV");
                t5k.id = "_map_marker_speeder";
                t5k.style.display = "none";
                document.body.appendChild(t5k)
            }
            document.getElementById("_map_marker_speeder").innerHTML = ""
        }
        if (iToolTipStyle == 0) hideToolTipMenu();
        if (iToolTipStyle == 0) {
            hideToolTipMenu()
        }
        this.wbb1l = X0Jd(this.moveX - this.downX);
        this.$X41 = X0Jd(this.moveY - this.downY);
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.PF1(true)
        }
        this.sF.moveTo(this.wbb1l, this.$X41);
        this.cN = true;
        this.cn = true;
        e.Rl1b && e.Rl1b();
        e.B36h && e.B36h()
    } else if (this.cS && this.cL) {
        if (this.aY()) {
            this.cR = true;
            this.lu()
        }
    } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.W28Q) {
        var tP = this.zp(this.moveX, this.moveY);
        var tO = this.zo(this.moveX, this.moveY);
        if (this.sS == ts.W28Q) {
            if (this.P8h.o7c.length) {
                with(this.P8h) {
                    if (XM6H.v53hO != tP || XM6H.$4li$ != tO) {
                        XM6H.v53hO = tP;
                        XM6H.$4li$ = tO;
                        if (!this.P8h.TF9Xn) {
                            XM6H.S27 = tP;
                            XM6H.l5842 = tO;
                            this.yHC5C(new MPoint(tP, tO, false))
                        }
                    }
                }
            }
            if (!this.P8h.o7c.length) this.n03bF()
        } else if (this.zy != null) {
            if (this.sS == ts.tb) {
                var scrollX = 0,
                    scrollY = 0,
                    a846f = this.moveX,
                    fYGn0 = this.moveY,
                    VC30K = this.s261 * 2,
                    g85Vw = this;
                if (a846f < VC30K) scrollX = 50;
                if (a846f > (this.width - VC30K)) scrollX = -50;
                if (fYGn0 < VC30K) scrollY = 50;
                if (fYGn0 > (this.height - VC30K)) scrollY = -50;
                if (scrollX != 0 || scrollY != 0) {
                    if (!this.x0P) {
                        this.x0P = setInterval(function () {
                            g85Vw.panTo(scrollX, scrollY)
                        }, 100)
                    }
                } else {
                    if (this.x0P) {
                        clearInterval(this.x0P);
                        this.x0P = undefined;
                        this.tG.pts[1] = new MPoint(cq.zn(tP, tO));
                        this.tG.update()
                    }
                }
                var x0 = "";
                var F65 = this.Nv9_[this.Nv9_.length - 1];
                var Na$ = F65.o7c[F65.o7c.length - 1];
                var N9W7 = Na$.OY7;
                var OY7 = Na$.OY7 + this.measDistance([Na$.point, new MPoint(tP, tO, false)]);
                var tip = this.e76.Bw75.replace(this.e76.c6uF4, (OY7 < 1000) ? OY7 + "\u7c73" : parseInt(OY7 / 100) / 10 + "\u516c\u91cc");
                x0 = (en) ? "Double click to finish" : tip;
                nX();
                showMouseTipBox(this.moveX + 6, this.moveY - 3, x0, this.map)
            }
            if (!this.x0P) {
                this.tG.pts[1] = new MPoint(cq.zn(tP, tO));
                if (this.zy.brush.fill) {
                    this.tG.pts[2] = this.zy.pts[0]
                }
                this.tG.update()
            }
        }
    } else {
        if (this.l6 == "LayerDrawMap" && iToolTipStyle == 0) {
            hideToolTipMenu()
        }
    }
};
Maplet.prototype.a6 = function (e, l6, Ap, Av) {
    if (!this.cL) return;
    var wL = 0;
    var wM = 0;
    var li = 0;
    var lf = 0;
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    this.zQ = this.moveX;
    this.zR = this.moveY;
    this.uRK24 = new Date().getTime();
    this.cL = false;
    if (this.l6.indexOf("MPolyline") != -1) {
        this.cn = false
    }
    if (e.type == "mouseup") {
        if (this.Dj75 < -this.ignoreMoveRange || this.Dj75 > this.ignoreMoveRange || this.WhA6O < -this.ignoreMoveRange || this.WhA6O > this.ignoreMoveRange) this.$7BK8 = true
    } else {
        this.$7BK8 = true
    } if (this.l6 != null) {
        if (this.l6.indexOf("ctrl") >= 0) this.sD.hide();
        else if (e.type == "mouseup" && this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && MEvent.contains(maplet, "mouseup") > 0) {
            MEvent.trigger(this, 'mouseup', e)
        }
    }
    if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
        this.gvL("default", this.map)
    }
    if (this.ff && this.nI().tJ(this.zQ, this.zR)) {
        this.setZoomLevel(parseInt(this.AP.getZoomLevel()));
        return
    }
    if ((this.cN || this.cR) && (this.cS || this.cO)) {
        this.cN = false;
        this.cR = false;
        if (this.cO) {
            if (true || this.AG > 0) {
                wL = -(this.zQ - this.downX);
                wM = (this.zR - this.downY);
                li = this.zp(wL + this.width / 2, -wM + this.height / 2);
                lf = this.zo(wL + this.width / 2, -wM + this.height / 2);
                this.gA = li;
                this.gx = lf
            }
            var snn5 = (px) ? event.srcElement : e.target;
            if (snn5.getAttribute($0eU)) {
                if (snn5.getAttribute(F8v33) == "polyline") this.BJ2 = true;
                if (snn5.getAttribute(F8v33) == "marker") this.h95 = true
            }
            if (typeof basepoilist != "object" && !this.b021 && this.rr83w) this.rr83w = false;
            this.K_0r4 = true;
            this.$96 = new Date().getTime();
            maplet.setZoomLevel(maplet.AG);
            this.K_0r4 = false;
            if (apiType == 1) MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)));
            else MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2)); if (this.allowDrawingDragMap && this.$7BK8 && ((this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.W28Q))) this.d7B30 = false
        } else {
            var gX = 1;
            var gW = Math.max(1, Math.abs(this.zQ - this.downX));
            if (this.sS == 1) {
                {
                    wL = (this.zQ + this.downX) / 2;
                    wM = (this.zR + this.downY) / 2;
                    li = this.zp(wL, wM);
                    lf = this.zo(wL, wM);
                    this.gA = li;
                    this.gx = lf
                }
                if (gW < this.imgWidth) {
                    gX = Math.min(MAX_ZOOM_LEVEL - this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / gW) / Math.log(2))))
                }
                this.setZoomLevel(this.AG + gX);
                if (apiType == 1) {
                    MEvent.trigger(this, "zoomin", this.AG)
                } else {
                    MEvent.trigger(this, "zoomin", "&act=zoomin&zm=" + this.AG)
                }
            } else if (this.sS == 2) {
                wL = (this.zQ + this.downX) / 2;
                wM = (this.zR + this.downY) / 2;
                li = this.zp(wL, wM);
                lf = this.zo(wL, wM);
                this.gA = li;
                this.gx = lf;
                if (gW < this.imgWidth) {
                    gX = Math.min(this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / gW) / Math.log(2))))
                }
                this.setZoomLevel(this.AG - gX);
                if (apiType == 1) MEvent.trigger(this, "zoomout", this.AG);
                else MEvent.trigger(this, "zoomout", "&act=zoomout&zm=" + this.AG)
            } else if (this.sS == ts.tv) {
                var s6 = this.gA + (Math.max(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var s4 = this.gx - (Math.min(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = s6;
                cq.lf = s4;
                var s5 = cq.zn();
                var tl = this.gA + (Math.min(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var tj = this.gx - (Math.max(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = tl;
                cq.lf = tj;
                var tk = cq.zn();
                cq.li = tl;
                cq.lf = s4;
                var tm = cq.zn();
                cq.li = s6;
                cq.lf = tj;
                var s7 = cq.zn();
                var yg = "&act=lookup&max=" + s5 + "&min=" + tk + "&mmx=" + tm + "&mxm=" + s7;
                if (this.vA != "undefined") this.setMode(this.vA);
                this.cQ = true;
                if (apiType == 1) {
                    MEvent.trigger(this, "lookup", {
                        action: "lookup",
                        max: new MPoint(s5),
                        min: new MPoint(tk),
                        mmx: new MPoint(tm),
                        mxm: new MPoint(s7)
                    })
                } else {
                    MEvent.trigger(this, "lookup", yg)
                }
            } else if (this.sS == ts.a2_Q) {
                this.snapshotBox.f471_();
                this.snapshotBox.Wkkaj = false
            }
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
    }
    if (this.cO) {
        if (px || _36s2) {
            this.map.releaseCapture && this.map.releaseCapture()
        } else {
            e.Rl1b && e.Rl1b();
            e.B36h && e.B36h()
        }
    }
};
Maplet.prototype.a7 = function (e) {
    if (!MOUSEWHEEL) return;

    function aVu9() {
        if (this.V56 == null) {
            this.V56 = this.AG;
            aVu9.apply(this)
        } else if (this.V56 != this.Ai) {
            var xd = Math.abs(this.Ai - this.AG) / 10;
            var g02 = 0.25;
            xd = xd < g02 ? g02 : xd;
            if (this.tK < 0) {
                this.V56 -= xd;
                if (this.V56 <= this.Ai + 0.05) {
                    this.V56 = this.Ai
                }
            } else {
                this.V56 += xd;
                if (this.V56 >= this.Ai - 0.1) {
                    this.V56 = this.Ai
                }
            } if (this.V56 != this.Ai) {
                var AK = Math.pow(2, this.V56) / Math.pow(2, this.AG);
                var BB0G9 = (this.width / 2 - this.$406a) * (AK - 1);
                var db_ = (this.height / 2 - this.A002) * (AK - 1);
                this.AN(this.V56, BB0G9, db_)
            }
            if (this.V56 == this.Ai) {
                aVu9.apply(this)
            } else {
                getTimeout(this, aVu9, 0)
            }
        } else {
            this.V56 = null;
            this.tK = 0;
            this.setZoomLevel(this.Ai);
            this.Ai = 0
        }
    };
    var l8 = e || window.event;
    if (typeof l8 == "object" && l8) {
        if (typeof l8.wheelDelta == "undefined") l8.wheelDelta = -l8.detail;
        if (typeof l8.srcElement == "undefined") l8.srcElement = l8.target;
        if (l8.wheelDelta == 0 || (this.AG == MIN_ZOOM_LEVEL && l8.wheelDelta < 0) || (this.AG == MAX_ZOOM_LEVEL && l8.wheelDelta > 0)) return;
        if (this.fa) return;
        if (typeof this.tK == "undefined") this.tK = 0;
        if (typeof this.Ai == "undefined") this.Ai = 0;
        var r = $537(l8.srcElement, XLf2G);
        if (!r || r == "false") {
            k1FD(l8);
            var i = l8.wheelDelta < 0 ? -1 : 1;
            this.tK += i < 0 ? Math.floor(i) : Math.ceil(i);
            if (this.tK == 0) return;
            var F346 = true;
            if (ContentInfo && ContentInfo.isVisible()) {
                var A055S = this.toScreenCoordinate(avBubble.LGyL);
                if (_isInsideRect({
                    x: A055S[0],
                    y: A055S[1]
                }, {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: this.width,
                        y: this.height
                    }
                })) {
                    F346 = false
                }
            }
            if (F346) {
                this.c1K = "wheel";
                if (typeof this.l6 == "undefined") this.a3(l8);
                this.$406a = this.moveX;
                this.A002 = this.moveY;
                this.o1e = this.toMapCoordinate(this.$406a, this.A002);
                this.M6YP(l8.wheelDelta)
            }
            this.Ai = parseInt(this.AG + this.tK);
            if (this.Ai < MIN_ZOOM_LEVEL) this.Ai = MIN_ZOOM_LEVEL;
            if (this.Ai > MAX_ZOOM_LEVEL) this.Ai = MAX_ZOOM_LEVEL;
            if (ZOOM_TRANSITION && this.V56 == null) {
                if (ContentInfo && ContentInfo.isVisible()) {
                    this.V56 = this.Ai
                }
                aVu9.apply(this)
            }
        }
    }
};
Maplet.prototype.x0P = undefined;
var px = false;
var l49R0 = false;
var iJH = false;
var PFDA = false;
var _36s2 = false;
var M7$6 = false;
var Iv4 = false;
var a$80 = false;
var s;
var Qc3 = navigator.userAgent.toLowerCase();
if (s = Qc3.match(new RegExp("msie ([\\d.]+)"))) {
    px = true;
    if (r0JS(s[1], 0) == 6) l49R0 = true;
    else if (r0JS(s[1], 0) == 7) iJH = true;
    else if (r0JS(s[1], 0) == 8) PFDA = true
} else if (s = Qc3.match(new RegExp("firefox\/([\\d.]+)"))) {
    _36s2 = true
} else if (s = Qc3.match(new RegExp("chrome\/([\\d.]+)"))) {
    M7$6 = true
} else if (s = Qc3.match(new RegExp("opera.([\\d.]+)"))) {
    a$80 = true
} else if (s = Qc3.match(new RegExp("version\/([\\d.]+).*safari"))) {
    Iv4 = true
} else if (s = Qc3.match(new RegExp("trident\/7\."))) {
    px = true
};
var llg86 = true;
if (px) {
    llg86 = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0") || document.implementation.hasFeature("org.w3c.svg", "1.0")
}
var P7v61 = document.compatMode == "CSS1Compat";
var ut = document.qS ? 1 : 0;
var lm = (px) ? "document.all." : "document.";
var yj = (px) ? ".style" : "";
if (px && !llg86) {
    document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
    document.write("<style>v\\:shape,v\\:stroke,v\\:fill,v\\:roundrect,v\\:oval,v\\:image {behavior:url(#default#VML)}</style>")
}
document.write("<style type='text/css'> ");
document.write(".ptlabel {  ");
document.write(" text-decoration: none;");
document.write(" cursor: pointer;");
document.write(" font-family: Arial, Helvetica, sans-serif; ");
document.write(" font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".tooltiptitle {");
document.write(" color: #CC5522; ");
document.write(" text-decoration: none;");
document.write(" cursor: pointer;");
document.write(" font-family: Arial, Helvetica, sans-serif; ");
document.write(" font-weight: bold; ");
document.write(" font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".tooltipcontent { ");
document.write(" color: #000000; ");
document.write(" text-decoration: none;");
document.write(" cursor: pointer;");
document.write(" font-family: Arial, Helvetica, sans-serif; ");
document.write(" font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".hotspotlabel {");
document.write(" position: absolute;");
document.write(" color: #000; ");
document.write(" text-decoration: none;");
document.write(" cursor: pointer;");
document.write(" font-family: Arial, Helvetica, sans-serif; ");
document.write(" font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".editableimg { ");
document.write(" position: absolute;");
document.write(" overflow: hidden;  ");
document.write(" cursor: pointer;");
document.write(" border: 1px solid #fff;  ");
document.write(" z-index: 1000;  ");
if (px) {
    document.write(" filter: alpha( opacity = 60 );")
} else {
    document.write(" opacity: 0.6;  ")
}
document.write(" font-size: 0px; ");
document.write(" display: block; ");
document.write("}  ");
document.write("");
document.write(".buffering {");
document.write(" position: absolute;");
document.write(" height: 16px;");
document.write(" z-index: 24; ");
if (px) {
    document.write(" filter: alpha( opacity = 60 );")
} else {
    document.write(" opacity: 0.6;  ")
}
document.write(" font-size: 12px;");
document.write(" font-weight: bold; ");
document.write(" background-color: #fff;  ");
document.write(" color: #000; ");
document.write(" border: 0px solid #000;  ");
document.write(" text-align: center;");
document.write(" padding-top: 0px;  ");
document.write(" display: block; ");
document.write("}  ");
document.write("");
document.write(".tiplabel { ");
document.write(" position: absolute;");
document.write(" height: 12px;");
document.write(" z-index: 0; white-space: nowrap; ");
document.write(" display: block; ");
document.write(" background-color: #FFFFCC;  ");
document.write(" border: 1px solid #f00;  ");
document.write(" color: #f00; ");
document.write(" font-size: 12px;");
document.write(" font-weight: bold; ");
document.write("}  ");
document.write("");
document.write("#ToolTip {  ");
document.write(" position: absolute;");
if (px) {
    document.write(" filter: alpha( opacity = 80 );")
} else {
    document.write(" opacity: 0.8;  ")
}
document.write(" width: 100px;");
document.write(" top: 0px; ");
document.write(" left: 0px;");
document.write(" z-index: 24; ");
document.write(" visibility: hidden;");
document.write("}  ");
document.write("");
document.write("#loading {  ");
document.write(" position: absolute;");
document.write(" z-index: 24; ");
if (px) {
    document.write(" filter: alpha( opacity = 60 );")
} else {
    document.write(" opacity: 0.6;  ")
}
document.write(" font-size: 13px;");
document.write(" font-weight: bold; ");
document.write(" background-color: #fff;  ");
document.write(" color: #000; ");
document.write(" border: 0px solid #000;  ");
document.write(" text-align: center;");
document.write(" padding-top: 4px;  ");
document.write(" display: block; ");
document.write("}  ");
document.write("");
document.write("#mbglabel { ");
document.write(" position: absolute;");
document.write(" z-index: 0;  ");
document.write(" white-space: nowrap;  ");
document.write(" display: block; ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mfglabel { ");
document.write(" position: absolute;");
document.write(" z-index: 0;  ");
document.write(" white-space: nowrap;  ");
document.write(" display: block; ");
document.write(" visibility: visible;  ");
document.write(" background-color: #FFFFCC;  ");
document.write("}  ");
document.write("");
document.write("#stylelabel {  ");
document.write(" position: absolute;");
document.write(" z-index: 24; ");
if (px) {
    document.write(" filter: alpha( opacity = 80 );")
} else {
    document.write(" opacity: 0.8;  ")
}
document.write(" font-size: 13px;");
document.write(" font-weight: bold; ");
document.write(" background-color: #fff;  ");
document.write(" color: #000; ");
document.write(" border: 1px solid #000;  ");
document.write(" text-align: center;");
document.write(" padding-top: 4px;  ");
document.write(" display: block; ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewport {");
document.write(" position: absolute;");
document.write(" width: 0px;  ");
document.write(" top: 0px; ");
document.write(" left: 0px;");
document.write(" height: 0px; ");
document.write(" z-index: 10; ");
document.write(" font-size: 0px; ");
if (l49R0 || iJH || PFDA) {
    document.write(" filter: alpha( opacity = 50 );")
} else {
    document.write(" opacity: 0.5;  ")
}
document.write(" background-color: white;  ");
document.write(" border: 2px solid white;  ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewframe {  ");
document.write(" position: absolute;");
document.write(" width: 0px;  ");
document.write(" top: 0px; ");
document.write(" left: 0px;");
document.write(" height: 0px; ");
document.write(" z-index: 11; ");
document.write(" font-size: 0px; ");
document.write(" border: 2px solid #D50F1E;  ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewpad_ctrl { ");
document.write(" position: absolute;");
document.write(" width: 0px;  ");
document.write(" top: 0px; ");
document.write(" left: 0px;");
document.write(" height: 0px; ");
document.write(" z-index: 12; ");
document.write(" font-size: 0px; ");
document.write(" border: 2px solid #D50F1E;  ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-bordertop {  ");
document.write(" position: absolute;");
document.write(" z-index: 2;  ");
document.write(" font-size: 0px; ");
document.write(" border-top: 1px solid #949694; ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderbtm {  ");
document.write(" position: absolute;");
document.write(" z-index: 2;  ");
document.write(" font-size: 0px; ");
document.write(" border-bottom: 1px solid #949694; ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderlft {  ");
document.write(" position: absolute;");
document.write(" z-index: 2;  ");
document.write(" font-size: 0px; ");
document.write(" border-left: 1px solid #949694;");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderrgt {  ");
document.write(" position: absolute;");
document.write(" z-index: 2;  ");
document.write(" font-size: 0px; ");
document.write(" border-right: 1px solid #949694;  ");
document.write(" visibility: visible;  ");
document.write("}  ");
document.write("");
document.write(".contextmenuitem {");
document.write(" display:block; ");
document.write(" color: #0E347F; ");
document.write(" text-decoration: none;");
document.write(" cursor: pointer;");
document.write(" font-family: Arial, Helvetica, sans-serif; ");
document.write(" font-size: 9pt; ");
document.write(" line-height:25px;");
document.write(" padding:0 5px;");
document.write(" white-space:nowrap;");
document.write("}  ");
document.write(".contextmenuitem:hover {");
document.write(" display:block; ");
document.write("    background-color:#EEE;");
document.write("}  ");
document.write("");
document.write(".contextmenutable {  ");
document.write(" text-decoration: none;");
document.write(" cursor: pointer;");
document.write("}  ");
document.write("");
document.write(".mapcontextmenu { ");
document.write(" position: absolute;");
document.write(" background-color: #FFFFFF; ");
document.write(" padding: 3px; ");
document.write(" border: 1px outset #cccccc; ");
document.write(" top: 0px; ");
document.write(" left: 0px;");
document.write(" z-index: 24; ");
document.write(" visibility: hidden;");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT, ");
document.write(" .mapCirEdging .borB { ");
document.write(" height: 1px; ");
document.write(" margin: 0 1px;  ");
document.write(" border-bottom: 1px solid #8F8F8F; ");
document.write(" line-height: 1px;  ");
document.write(" font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borB {");
document.write(" border: 0;");
document.write(" border-top: 1px solid #8F8F8F; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT2, .mapCirEdging .borB2 { ");
document.write(" height: 1px; ");
document.write(" border: 1px solid #BCBCBC;  ");
document.write(" border-top: 0;  ");
document.write(" border-bottom: 0;  ");
document.write(" line-height: 1px;  ");
document.write(" font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPBox2 { ");
document.write(" height: auto;");
document.write(" border: 1px solid #8F8F8F;  ");
document.write(" border-top: 0;  ");
document.write(" border-bottom: 0;  ");
document.write(" background: #fff;  ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPbox {  ");
document.write(" margin: 3px; ");
document.write(" font-size: 12px;");
document.write(" text-align: left;  ");
document.write("}  ");
document.write(".snapshotTextBtn {  ");
document.write(" padding-top: 3px; ");
document.write(" padding-bottom: 3px; ");
document.write(" padding-left: 4px; ");
document.write(" padding-right: 4px; ");
document.write(" margin-left: 2px; ");
document.write(" font-family: \u5b8b\u4f53; ");
document.write(" font-size: 13px;");
document.write(" text-align: center;  ");
document.write(" font-weight: normal;  ");
document.write(" letter-spacing: 1px;  ");
document.write(" background: #0E347F;  ");
document.write(" color: white;  ");
document.write("}  ");
document.write(".roadlineTip {  ");
document.write(" padding: 2px; ");
document.write(" font-family: \u5b8b\u4f53; ");
document.write(" font-size: 13px;");
document.write(" color: #666666;");
document.write(" border: 1px solid #666666;  ");
document.write(" background: none repeat scroll 0 0 #FFFFFF;  ");
document.write(" white-space: nowrap;  ");
document.write("}  ");
document.write(".roadlineTip_distance {  ");
document.write(" color: black;");
document.write(" white-space: nowrap;  ");
document.write("}  ");
document.write(".pointBox{position:absolute;z-index:100}");
document.write(".pointBox .PMain{padding:0 10px;border: 2px solid rgb(14, 52, 127); background:#fff }");
document.write(".pointBox .pointer{overflow:hidden;width:15px;height:14px;margin:-4px 0 0;background:url(images/pointBg.png) no-repeat;_background:none}");
document.write(".pointBox .pointer img{display:none;_display:block;width:15px;height:14px;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBg.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".pointBox .BoxBg{position:absolute;z-index:-1;width:100%;margin:auto 0 0 8px;padding-top:5px;background:#666;filter:alpha(opacity=60);opacity:0.6}");
document.write(".rightThis .pointer{width:auto;margin:-4px 0 0;background-position:100% -16px!important;_background:none}");
document.write(".rightThis .pointer img{_position:absolute;_right:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBgR.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".rightThis .BoxBg{margin:auto 15px 0 0;left:-5px}");
document.write(".infoContent tr td{line-height:20px!important}");
document.write("</style>");
if (typeof xl == "undefined") var xl = strImgsvrUrl;
if (typeof ds == "undefined") var ds = "mapbar";
if (typeof en == "undefined") var en = 0;
if (typeof rs == "undefined") var rs = 0;
if (typeof apiType == "undefined") var apiType = 0;
if (typeof hs == "undefined") var hs = false;
if (typeof MOUSEWHEEL == "undefined") var MOUSEWHEEL = true;
if (typeof kp == "undefined") var kp = true;
if (typeof bDefaultControlOn == "undefined") var bDefaultControlOn = false;
if (typeof hbo == "undefined") var hbo = false;
if (typeof otp == "undefined") var otp = false;
if (typeof ZOOM_TRANSITION == "undefined") var ZOOM_TRANSITION = true;
if (typeof bsc == "undefined") var bsc = true;
if (typeof __mapbar_magic_id == "undefined") var __mapbar_magic_id = "";
if (typeof REFRESH_MK_INDEX != "boolean") var REFRESH_MK_INDEX = true;
if (typeof SNAPSHOT_SERVER != "string") var SNAPSHOT_SERVER = "http://staticmap.mapbar.com/staticmap/";
if (typeof SNAPSHOT_MAPIMG_URI_PREFIX != "string") var SNAPSHOT_MAPIMG_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/";
if (typeof SNAPSHOT_MARKER_URI_PREFIX != "string") var SNAPSHOT_MARKER_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/mapbank/ditu/";
var SNAPSHOT_OPTIONS = {
    mode: "fullscreen",
    format: "png",
    depth: 0,
    processMode: "event"
};
if (typeof ALLOW_MV != "boolean") var ALLOW_MV = true;
if (typeof $0eU != "string") var $0eU = "_dragmap";
if (typeof F8v33 != "string") var F8v33 = "_overlay";
if (typeof XLf2G != "string") var XLf2G = "_disable_mw";
if (typeof WJ7V != "string") var WJ7V = "_mlayer";
var c75 = 0;
var ac = null;
var ad = true;
if (typeof bp == "undefined") var bp = true;
if (typeof oo == "undefined") var oo = true;
if (typeof bmc == "undefined") var bmc = false;
if (typeof OVER_LOCATION != "object" || OVER_LOCATION) var OVER_LOCATION = null;
if (typeof STD_BUBBLE_WIDTH == "undefined") var STD_BUBBLE_WIDTH = 217;
if (typeof MIN_BUBBLE_HEIGHT == "undefined") var MIN_BUBBLE_HEIGHT = 120;
if (typeof OVER_WIN_WIDTH != "number") {
    OVER_WIN_WIDTH = 150
} else {
    if (OVER_WIN_WIDTH < 100) OVER_WIN_WIDTH = 100;
    else if (OVER_WIN_WIDTH > 210) OVER_WIN_WIDTH = 210
} if (typeof OVER_WIN_HEIGHT != "number") {
    OVER_WIN_HEIGHT = 120
} else {
    if (OVER_WIN_HEIGHT < 100) OVER_WIN_HEIGHT = 100;
    else if (OVER_WIN_HEIGHT > 210) OVER_WIN_HEIGHT = 210
} if (typeof MAX_BUBBLE_HEIGHT == "undefined") var MAX_BUBBLE_HEIGHT = 380;
var sX = strImgsvrUrl + "images/mask.gif";
var ul = strImgsvrUrl + "images/node.gif";
var lV = strImgsvrUrl + "images/wmk.gif";
if (typeof LPN_HOVERING_TIME == "undefined") var LPN_HOVERING_TIME = 100;
if (typeof HOTSPOT_SIZE == "undefined") var HOTSPOT_SIZE = 8;
if (typeof DISABLE_DBCLICK_ZOOM == "undefined") var DISABLE_DBCLICK_ZOOM = false;
var f7kns = null;
if (typeof gQ == "undefined") gQ = 0;
var xz = '';
var AB = "";
document.write('<img id="sendmapload" style="display:none;visibility:hidden;" />');
document.writeln('<div id="myalert" style="position:absolute;z-index:100000;filter:alpha(opacity=85);opacity:0.85;display:none;background-color:white;padding:1px;"></div>');
if (typeof bArrow == "undefined") {
    var bArrow = 0
}
var sB = new Image();
var initialize = 0;
var xN = (en == 0) ? new Array(tX('%u5415%uDD90%uE7F2%uD86E'), tX('%u5415%uA728%uB18A%uD86E'), tX('%u5415%uA22D%uAC8F%uD86E'), tX('%u5415%uA768%uB1CA%uD86E'), tX('%u6D4F%uFF1A%u1FAC%u0798'), tX('%u70BF%uC2B4%uE1D6%u1827%u0775%uE467'), tX('%u6540%uBE65'), tX('%u7F2B%uDB38'), tX('%u62D1%uB571%uC179%uC628%uE732%u1827%u0775%uE467')) : new Array('Go left', 'Go up', 'Go right', 'Go down', 'Measure distance', 'Click to zoom', 'Zoom In', 'Zoom Out', 'Drag to zoom');
var lt = (en == 0) ? "\u62D6\u62FD\u6B64\u70B9" : "drag to move this point";
var pe = new Array();
var pa = new Array();
var pF = 2;
var sI = ['W', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
var sj = [90, 40, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01, 0.005, 0.002, 0.001];
var qP = [90 * 0.8, 40 * 0.8, 20 * 0.8, 10 * 0.8, 5 * 0.8, 2 * 0.8, 0.8, 0.5 * 0.8, 0.2 * 0.8, 0.1 * 0.8, 0.05 * 0.8, 0.02 * 0.8, 0.01 * 0.8, 0.005 * 0.8, 0.002 * 0.8, 0.001 * 0.8];
var nM = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 50, 50, 50, 50, 50, 50];
var w8 = [0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, -150, 0, 0, 0, 0];
if (typeof DEFAULT_DRAWING_NUMBER) var DEFAULT_DRAWING_NUMBER = 'GS(2013)6018\u53F7';
if (typeof DEFAULT_NAV_INFO) var DEFAULT_NAV_INFO = '<a target="_blank" href="http://www.navinfo.com.cn" style="color: blue; text-decoration: none;">Data&nbsp;&copy;&nbsp;NavInfo</a>';
if (typeof DEFAULT_MAX_ZOOM_LEVEL != "number") var DEFAULT_MAX_ZOOM_LEVEL = 14;
if (typeof DEFAULT_MIN_ZOOM_LEVEL != "number") var DEFAULT_MIN_ZOOM_LEVEL = 0;
var MAX_ZOOM_LEVEL = DEFAULT_MAX_ZOOM_LEVEL;
var MIN_ZOOM_LEVEL = DEFAULT_MIN_ZOOM_LEVEL;
var wp = 100000;
var sw = 105;
var sx = 35;
var sz = [-360, 360];
var sy = [-90, 90];
var N5NW = null;
var uU = 8;
var uS = 15;
var uT = strImgsvrUrl + 'images/overclose.gif';
var uV = strImgsvrUrl + 'images/overopen.gif';
if (!otp) {
    uT = strImgsvrUrl + 'images/overclose2.gif';
    uV = strImgsvrUrl + 'images/overopen2.gif'
}
var uW = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var bpp = [xl + "mapbank/base/", 13, 14];
var vs = strMapsvrUrl + "images/done.gif";
var vt = strMapsvrUrl + "images/edit.gif";
var v3 = strMapsvrUrl + "images/stretch.gif";
var at = 0;
var as = 1;
var au = 2;
var av = 0;
var ar = 2;
var s9 = 1001;
if (typeof TRAFFIC_REFRESH_INTERVAL != "number") var TRAFFIC_REFRESH_INTERVAL = 5 * 60;
if (typeof TRAFFIC_MIN_LEVEL != "number") var TRAFFIC_MIN_LEVEL = 8;
if (typeof TRAFFIC_MAX_LEVEL != "number") var TRAFFIC_MAX_LEVEL = MAX_ZOOM_LEVEL;
if (typeof r2x != "number") var r2x = 9;
if (typeof F298 != "number") var F298 = MAX_ZOOM_LEVEL;
if (typeof W27 != "boolean") var W27 = false;
if (typeof GOLDPOI_TXTRQT_RANDOM != "boolean") var GOLDPOI_TXTRQT_RANDOM = true;
var O67v6 = false;
var j2Qf = 6371393;


var GRID_FACTOR = GridFactors[this.zmLevel];
var dirx = parseInt(Math.floor((ixx) / GRID_FACTOR));
var diry = parseInt(Math.floor((iyy) / GRID_FACTOR));
if (dirx < 0) dirx += 1;
if (diry < 0) diry += 1;
var filex = (ixx) - dirx * GRID_FACTOR;
var filey = (iyy) - diry * GRID_FACTOR;
//   var imgFileName = this.strImgUrl.replace("img", "img" + this.getImageServer(filex, filey)) + "mapbank/" + styleDir + "/" + this.mapPath;
var imgFileName = this.basemapImgUrl.replace("img", "img" + this.getImageServer(filex, filey)) + this.mapPath;
var strMapID = ((this.zmLevel).toString(16) + ix.toString(16) + 'l' + iy.toString(16)).toLowerCase();
if (this.zmLevel >= 14) imgFileName += dirx + "/";
imgFileName += dirx + "_" + diry + "/";
imgFileName += filex + "_" + filey + "." + this.strImgFormat;