var j = (e, t, n, r) => ({
    replies: Math.min(e, 9), reposts: Math.min(t, 9), likes: n % 9 + 1, views: 10 + r % 90
}), dr = {
    name: `KT`, handle: `@kit20130616`, bio: `2014 | 石川県の中学1年 | サッカー⚽ | 日々の出来事を投稿中！`, following: 10, followers: 9, avatar: `profile-soccer-ball-v1.png`, cover: `profile-cover-soccer-field-v1.png`, followingAccounts: [
        {
            name: `金沢ユナイテッドU-15`, handle: `@kanazawa_united_u15`
        }, {
            name: `Lemon`, handle: `@Lemon`
        }, {
            name: `Y`, handle: `@Y`
        }, {
            name: `ショウ`, handle: `@shou`
        }, {
            name: `ひつじ`, handle: `@hitsuji`
        }, {
            name: `Yuta`, handle: `@Yuta`
        }, {
            name: `Mico`, handle: `@Mico`
        }, {
            name: `ケースケ`, handle: `@keisuke`
        }, {
            name: `X.M`, handle: `@X_M`
        }, {
            name: `ただの男子中学生`, handle: `@tadano_danshi_chugakusei`
        }
    ], followerAccounts: [
        {
            name: `Lemon`, handle: `@Lemon`
        }, {
            name: `Y`, handle: `@Y`
        }, {
            name: `ショウ`, handle: `@shou`
        }, {
            name: `ひつじ`, handle: `@hitsuji`
        }, {
            name: `Yuta`, handle: `@Yuta`
        }, {
            name: `Mico`, handle: `@Mico`
        }, {
            name: `ケースケ`, handle: `@keisuke`
        }, {
            name: `X.M`, handle: `@X_M`
        }, {
            name: `ただの男子中学生`, handle: `@tadano_danshi_chugakusei`
        }
    ]
}, fr = [
    {
        id: `p22`, date: `7月3日`, body: `なんであんな投稿してしまったんだろう`, counts: j(1, 0, 3, 46), category: `ordinary`
    }, {
        id: `p21`, date: `7月3日`, body: `発信者情報開示に係る意見照会書？っていう紙が届いた`, counts: j(2, 0, 2, 58), category: `ordinary`
    }, {
        id: `p18`, date: `6月28日`, body: `近所にクマが出た！みんな気を付けて！`, media: {
            type: `video`, file: `post-bear-sep08-v1.mp4`, alt: `クマの出没についての動画`, placeholderTitle: `クマの動画`, placeholderHint: `動画を読み込めませんでした。`
        }, counts: j(142, 498, 1320, 48200), category: `ai-video`, replies: [
            {
                id: `r18-1`, author: `ニュース早耳`, handle: `@fast_topic`, body: `え、本当！？拡散しなきゃ！`, minutesAgo: 12
            }, {
                id: `r18-2`, author: `りく`, handle: `@riku_27`, body: `ニュースには出てないけど、動画があるなら本当そう。`, minutesAgo: 10
            }, {
                id: `r18-3`, author: `みお`, handle: `@mio_note`, body: `クマの影と木の影、向きが違わない？`, minutesAgo: 8, parentReplyId: `r18-2`
            }, {
                id: `r18-4`, author: `ニュース早耳`, handle: `@fast_topic`, body: `でもこんなに広まってるよ？`, minutesAgo: 5, parentReplyId: `r18-3`
            }
        ]
    }, {
        id: `p17`, date: `6月20日`, body: `今日はサッカーの試合を見に行った！すごい迫力だった！`, gallery: [
            {
                type: `image`, file: `post-match-1-sep08-v1.jpg`, title: `スタジアムの道中`, alt: `スタジアムの道中`, placeholderTitle: `スタジアムの道中`, placeholderHint: `画像を読み込めませんでした。`
            }, {
                type: `image`, file: `post-match-2-sep08-v1.png`, title: `屋台と人混み`, alt: `屋台と人混み`, placeholderTitle: `屋台と人混み`, placeholderHint: `画像を読み込めませんでした。`
            }, {
                type: `image`, file: `post-match-3-sep08-v1.png`, title: `サッカーの試合`, alt: `サッカーの試合`, placeholderTitle: `サッカーの試合`, placeholderHint: `画像を読み込めませんでした。`
            }, {
                type: `image`, file: `post-match-4-sep08-v2.png`, title: `サインを書く選手`, alt: `サインを書く選手`, placeholderTitle: `サインを書く選手`, placeholderHint: `画像を読み込めませんでした。`
            }
        ], counts: j(0, 1, 52, 410), category: `ai-image`
    }, {
        id: `p02`, date: `6月17日`, body: `学校から家へ下校中、突然の大雨。公園で雨宿り中`, media: {
            type: `image`, file: `post-park-sep08-v1.jpg`, alt: `公園の木々と石碑が写った写真`, placeholderTitle: `公園の写真`, placeholderHint: `画像を読み込めませんでした。`
        }, counts: j(1, 1, 45, 336), category: `ordinary`
    }, {
        id: `p16`, date: `6月16日`, body: `今月は誕生日だった！13歳もサッカーがんばる！`, media: {
            type: `image`, file: `post-soft-serve-sep08-v1.jpg`, alt: `グラスに入ったソフトクリームの写真`, placeholderTitle: `ソフトクリームの写真`, placeholderHint: `画像を読み込めませんでした。`
        }, counts: j(6, 1, 63, 506), category: `personal`
    }, {
        id: `p15`, date: `6月13日`, body: `帰り道に新しいコンビニできてた！学校から歩いてすぐだから最高`, counts: j(3, 2, 37, 348), category: `personal`, replies: [
            {
                id: `r15-1`, author: `ゆうき`, handle: `@yuki_soccer`, body: `いつもの帰り道だ！`, minutesAgo: 18, featured: !0
            }, {
                id: `r15-2`, author: `とも`, handle: `@tomo_5`, body: `学校の近くにできたところ？`, minutesAgo: 15, parentReplyId: `r15-1`
            }, {
                id: `r15-3`, author: `ゆうき`, handle: `@yuki_soccer`, body: `そうそう、会社の向かい側！`, minutesAgo: 11, parentReplyId: `r15-2`
            }
        ]
    }, {
        id: `p14`, date: `6月10日`, body: `給食のカレーの日はちょっと得した気分になる`, counts: j(0, 1, 28, 219), category: `ordinary`
    }, {
        id: `p13`, date: `6月7日`, body: `今日の金工ユナイテッドFCの試合はひどかった。あの永井選手は絶対裏でお金をもらってるっていううわさがある。消えろ！`, counts: {
            replies: 8, reposts: 126, likes: 7, views: 4821
        }, category: `ordinary`, replies: [
            {
                id: `r13-1`, author: `サッカー観戦部`, handle: `@soccer_watch`, body: `試合は残念だったけど、そのうわさは本当なの？`, minutesAgo: 23
            }, {
                id: `r13-2`, author: `金工サポ`, handle: `@kinko_support`, body: `本当なら許せない。チームから消えてほしい。`, minutesAgo: 21
            }, {
                id: `r13-3`, author: `フェアプレー`, handle: `@fairplay_note`, body: `お金をもらったという証拠はあるの？`, minutesAgo: 18, parentReplyId: `r13-1`
            }, {
                id: `r13-4`, author: `うわさ速報`, handle: `@uwasa_now`, body: `みんな言っているし、あのプレーを見れば分かるでしょ。`, minutesAgo: 16, parentReplyId: `r13-3`
            }, {
                id: `r13-5`, author: `ゴール裏`, handle: `@goalback_12`, body: `永井選手のSNSにも書きに行こう。`, minutesAgo: 14
            }, {
                id: `r13-6`, author: `フェアプレー`, handle: `@fairplay_note`, body: `証拠のないうわさで選手を攻撃するのはやめよう。`, minutesAgo: 11, parentReplyId: `r13-5`
            }, {
                id: `r13-7`, author: `ピッチニュース`, handle: `@pitch_news`, body: `この投稿、チームのファングループにも送った。`, minutesAgo: 8
            }, {
                id: `r13-8`, author: `金工サポ`, handle: `@kinko_support`, body: `もっと広めた方がいい。`, minutesAgo: 5, parentReplyId: `r13-7`
            }
        ]
    }, {
        id: `p12`, date: `6月3日`, body: `マンホールの形が地域によって違うらしい。今度県外に行ったとき見てみよ`, counts: j(1, 2, 34, 301), category: `personal`
    }, {
        id: `p07`, date: `5月17日`, body: `毎週火曜と木曜はクラブの練習日だから宿題さきにやらないといけないのきつい。`, counts: j(1, 1, 29, 255), category: `personal`
    }, {
        id: `p06`, date: `5月13日`, body: `雨の日の学校は憂鬱。`, counts: j(2, 4, 41, 362), category: `personal`
    }, {
        id: `p04`, date: `5月7日`, body: `うちの犬。かわいいから特別公開`, media: {
            type: `image`, file: `post-dog-sep08-v1.jpg`, alt: `横を向いている犬の写真`, placeholderTitle: `犬の写真`, placeholderHint: `画像を読み込めませんでした。`
        }, counts: j(0, 2, 36, 288), category: `ordinary`
    }, {
        id: `p01`, date: `4月25日`, body: `今日から少しずつ投稿してみる！よろしく！`, counts: j(2, 1, 30, 260), category: `ordinary`
    }
], pr = {
    p22: `心配だね。まず大人に相談した方がいいよ。`, p21: `一人で抱えずに家の人へ見せた方がいいよ。`, p20: `テストお疲れ！ゆっくり休んでね。`, p17: `ナイスゴール！次の試合もがんばって！`, p16: `誕生日おめでとう！`, p14: `カレーの日はうれしいよね。`, p12: `地域ごとのデザインを見比べるの面白そう。`, p11: `雨の日は家で遊ぶのもいいよね。`, p10: `ひざ大丈夫？お大事に！`, p09: `新しいスパイク、かっこよさそう！`, p08: `気づいたら何時間も経ってることある。`, p07: `練習も宿題もがんばって！`, p06: `分かる。晴れてほしいね。`, p05: `きれいになって歩きやすくなったね。`, p04: `かわいい！気持ちよさそう。`, p03: `そのアイス気になってた！`, p02: `広い芝生でサッカーするの楽しそう。`, p01: `これからの投稿楽しみにしてる！`
}, mr = [
    {
        author: `あおい`, handle: `@aoi_day`
    }, {
        author: `そうた`, handle: `@sota_friend`
    }, {
        author: `ゆうき`, handle: `@yuki_soccer`
    }
], hr = fr.map(e => {
    return {
        ...e, replies: [], counts: {
            ...e.counts, replies: 0
        }
    };
}), gr = [
    {
        id: `birthday`, type: `個人情報についての投稿`, title: `誕生日`, question: `KTさんの誕生日は、いつだと推測できますか？`, hint: `投稿ページの一番上に表示されているKTさんのユーザーIDと過去の投稿を照らし合わせて確認してみましょう。`, options: [
            `4月25日`, `4月29日`, `5月7日`, `5月31日`, `6月16日`, `6月28日`
        ], answer: `6月16日`, explanation: `ユーザーIDの末尾「0616」と、6月16日の誕生日投稿を組み合わせると、6月16日だと推測できます。`
    }, {
        id: `club`, type: `個人情報についての投稿`, title: `所属クラブ`, question: `KTさんが所属しているサッカークラブはどこだと推測できますか？`, hint: `どうやらKTさんは自分の所属しているサッカークラブの公式アカウントをフォローしているようです。\nフォロー中のアカウントは、投稿の上にある"10フォロー中"をクリックすると見ることができます。`, options: [
            `青空キッカーズ`, `中央ジュニアSC`, `金沢ユナイテッドU-15`, `レイクサイドFC`, `ひかりスターズ`, `石川ユナイテッドU-15`
        ], answer: `金沢ユナイテッドU-15`, explanation: `アカウントを公開すると、自分の投稿内容やフォロー・フォロワーの一覧を、不特定多数の人に閲覧される可能性があります。そのため、自分の投稿内容などを不特定多数の人に見られたくない場合は、鍵アカウントに設定しましょう。`
    }, {
        id: `school`, type: `個人情報についての投稿`, title: `所属中学校`, question: `KTさんが通う中学校をどこだと推測できますか？`, hint: `6月17日に投稿された公園の場所をGoogleマップ（ここをクリックするとサイトに飛びます）で検索してみましょう。公園の場所を特定した後、検索欄に"中学校"と入力すると付近の中学校が一覧表示されます。`, hintUrl: `https://www.google.com/maps?authuser=0`, options: [
            `金沢市立額中学校`, `野々市市立布水中学校`, `白山市立松任中学校`, `白山市立北星中学校`, `白山市立光野中学校`, `野々市市立野々市中学校`
        ], answer: `野々市市立野々市中学校`, explanation: `特定した公園の周辺を地図で調べると、近くにある中学校を絞り込めます。\n住んでいる場所や通っている学校が特定できてしまう投稿には十分注意しましょう。`
    }, {
        id: `personal-risk`, type: `個人情報についての投稿`, title: `個人情報漏洩のリスク`, question: `個人情報を他人に知られると、どのような被害につながる恐れがあるでしょうか。正しい選択肢を2つ選びましょう。`, hint: `個人情報を使って、何ができるか考えてみましょう。その情報だけで、本当にできるでしょうか。`, options: [
            `家の住所や学校名を知られると、家や学校の近くで、知らない人に待ちぶせされる。`,
            `携帯電話番号を知られると、その番号をもとに住所が特定される。`,
            `携帯電話番号を知られると、いたずら電話をかけられたり、あなたから個人情報を聞き出したり金銭をだまし取るための「詐欺メッセージ」が送られてくるようになる。`,
            `携帯電話番号を知られると、勝手に家へ商品が送られてくるようになる。`
        ], answers: [
            `家の住所や学校名を知られると、家や学校の近くで、知らない人に待ちぶせされる。`,
            `携帯電話番号を知られると、いたずら電話をかけられたり、あなたから個人情報を聞き出したり金銭をだまし取るための「詐欺メッセージ」が送られてくるようになる。`
        ], multiple: true, selectionCount: 2, explanation: `メールであなたをだますための偽のサイトに誘い、パスワードなどを盗む詐欺をフィッシングといいます。また、複数の個人情報を組み合わさることで、名前や住んでいる場所が分かってしまうことがあります。`
    }, {
        id: `fake`, type: `偽情報についての投稿`, title: `生成AI画像`, question: `6月20日に投稿された4枚の画像のうち、3枚は生成AIによって作られた画像で、1枚だけが実際に撮影された画像です。実際に撮影された画像を特定してください。`, hint: `生成AIで作られた画像では、文字が崩れていたり、人の指や手足の形が不自然だったり、物の質感や光、影に違和感があったりすることがあります。`, options: [
            `スタジアムの道中`, `屋台と人混み`, `サッカーの試合`, `サインを書く選手`
        ], answer: `スタジアムの道中`, explanation: `「スタジアムの道中」が実際に撮影された画像です。文字、手足、質感、光や影など、複数の部分を比べて判断することが大切です。\nインターネット上の画像や動画には、生成AIで作られたものが数多く紛れ込んでいます。細かい部分や情報の出どころ（発信源）を確認し、すぐに本物だと信じ込まないようにしましょう。`
    }, {
        id: `fake-crime`, type: `偽情報についての投稿`, title: `偽情報発信のリスク`, question: `6月28日に投稿されたクマの出没情報は、事実ではない偽情報です。偽情報をインターネットに投稿すると、どのような問題が起こる可能性があるでしょうか。正しい選択肢を2つ選びましょう。`, hint: `投稿後の影響も踏まえて考えてみましょう。`, options: [
            `生成AIで作った偽画像や偽動画であれば、法律上の責任は発生しない。`,
            `警察や市役所がクマの出没の確認を行う業務が発生してしまい、偽計業務妨害罪に問われる。`,
            `偽情報の投稿でも削除すれば問題はない。`,
            `偽情報の発信が原因で、学校が休校になったり行事が中止になったりして損害が発生すると、損害賠償を求められる。`
        ], answers: [
            `警察や市役所がクマの出没の確認を行う業務が発生してしまい、偽計業務妨害罪に問われる。`,
            `偽情報の発信が原因で、学校が休校になったり行事が中止になったりして損害が発生すると、損害賠償を求められる。`
        ], multiple: true, selectionCount: 2, explanation: `偽情報の発信は、罪に問われる可能性もあります。`
    }, {
        id: `abuse`, type: `誹謗中傷についての投稿`, title: `根拠のない悪口`, question: `誹謗中傷につながる投稿はどれでしょう？`, hint: `誹謗中傷（ひぼうちゅうしょう）とは、悪口や本当だと確かめられていない話を言ったり広めたりして、相手の心や周りからの評判を傷つけることです。\n誹謗（ひぼう）：相手の悪口を言うことです。\n中傷（ちゅうしょう）：本当か分からない話を広めて、相手の評判を傷つけることです。`, options: [
            `4月25日のあいさつの投稿`, `5月7日の犬についての投稿`, `5月13日の憂鬱についての投稿`, `6月7日の永井選手についての投稿`, `6月17日の公園についての投稿`, `6月20日のサッカーの試合についての投稿`
        ], answer: `6月7日の永井選手についての投稿`, explanation: `投稿する前に一度相手の立場に立って、その投稿は相手を傷つけていないか考えてみましょう。誹謗中傷はSNSに投稿せず、自分の心の中だけにとどめておきましょう。`
    }, {
        id: `arrest-risk`, type: `誹謗中傷についての投稿`, title: `誹謗中傷発信のリスク`, question: `次のうち、法律に違反する可能性がある投稿はどれでしょうか。正しい選択肢を2つ選びましょう。`, hint: `その投稿を見た人が、傷ついたり、怖い思いをしたりしないか考えてみましょう。`, options: [
            `試合のプレーについて、理由を添えて意見を伝える投稿`, `人格を否定するひどい悪口を書く投稿`, `相手に危害を加えると予告する投稿`, `相手を傷つけない言葉で、異なる意見を伝える投稿`
        ], answers: [
            `人格を否定するひどい悪口を書く投稿`, `相手に危害を加えると予告する投稿`
        ], multiple: true, selectionCount: 2, explanation: `本当の情報であっても、相手の評判を傷つけると、名誉毀損罪に問われる場合があります。事実だからといって、何でも投稿してよいわけではありません。一度投稿した内容は削除しても、インターネット上に永遠に残り続けます。SNSの投稿には十分気を付けましょう。`
    }
], _r = o((e => {
    var t = u(), n = Symbol.for(`react.element`), r = Symbol.for(`react.fragment`), i = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = {
        key: !0, ref: !0, __self: !0, __source: !0
    };
    function s(e, t, r) {
        var s, c = {}, l = null, u = null;
        for (s in r !== void 0 && (l = `` + r), t.key !== void 0 && (l = `` + t.key), t.ref !== void 0 && (u = t.ref), t)
            i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
        if (e && e.defaultProps)
            for (s in t = e.defaultProps, t)
                c[s] === void 0 && (c[s] = t[s]);
        return {
            $$typeof: n, type: e, key: l, ref: u, props: c, _owner: a.current
        };
    }
    e.Fragment = r, e.jsx = s, e.jsxs = s;
})), M = o(((e, t) => {
    t.exports = _r();
}))(), vr = e => `./assets/${e}`, yr = `sns-literacy-quiz-progress-v6`, br = 6;
function xr() {
    let e = {
        solved: {}, attempts: {}
    };
    if (typeof window > `u`)
        return e;
    try {
        let t = window.localStorage.getItem(yr) ?? window.localStorage.getItem(`sns-literacy-quiz-progress-v5`) ?? window.localStorage.getItem(`sns-literacy-quiz-progress-v4`);
        if (!t)
            return e;
        let n = JSON.parse(t);
        if (n.version !== br && n.version !== 5 && n.version !== 4)
            return e;
        let r = new Set(gr.map(e => e.id)), i = {}, a = {};
        if (n.version !== br) r.delete(`fake`);
        if (n.version === 4) {
            r.delete(`fake-crime`);
            r.delete(`arrest-risk`);
        }
        return n.solved && typeof n.solved == `object` && !Array.isArray(n.solved) && Object.entries(n.solved).forEach(([e, t]) => {
            r.has(e) && t === !0 && (i[e] = !0);
        }), n.attempts && typeof n.attempts == `object` && !Array.isArray(n.attempts) && Object.entries(n.attempts).forEach(([e, t]) => {
            r.has(e) && typeof t == `number` && Number.isInteger(t) && t >= 0 && (a[e] = t);
        }), {
            solved: i, attempts: a
        };
    }
    catch {
        return e;
    }
}
function Sr(e) {
    if (!(typeof window > `u`))
        try {
            window.localStorage.setItem(yr, JSON.stringify({
                version: br, ...e
            }));
        }
        catch {
        }
}
function Cr(e) {
    return String(e);
}
var wr = [
    [
        `#9eb8cf`, `#4e7699`
    ], [
        `#d4ad9d`, `#9b6254`
    ], [
        `#b7c99a`, `#6f8d58`
    ], [
        `#c1acd2`, `#80649a`
    ], [
        `#d5c18d`, `#9a7c3f`
    ], [
        `#9fc9c4`, `#4f8b84`
    ]
];
function Tr(e) {
    let [t, n] = wr[Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0) % wr.length];
    return {
        backgroundImage: `linear-gradient(145deg, ${t}, ${n})`
    };
}
// One stable, distinct gradient per account; the same person keeps their color in both lists.
const followingGradients = [
    [`#ffb347`, `#ff5d73`, `#ce3ac8`],
    [`#fff06a`, `#a5dc38`, `#23b69a`],
    [`#7aeeff`, `#429eff`, `#6356e8`],
    [`#ff99d8`, `#c459ec`, `#6f4fe2`],
    [`#ffc779`, `#ed8351`, `#c94157`],
    [`#94f7d1`, `#24c9b7`, `#187bce`],
    [`#c6a8ff`, `#7884f5`, `#32c6ec`],
    [`#ffe09b`, `#eac147`, `#7cb34f`],
    [`#ffb1c6`, `#fa628e`, `#d5355e`],
    [`#bcefa0`, `#4ebc83`, `#168d82`]
];
function followingAvatarStyle(handle) {
    const index = dr.followingAccounts.findIndex(account => account.handle === handle);
    if (index < 0) return Tr(handle);
    return { backgroundImage: `linear-gradient(135deg, ${followingGradients[index].join(`, `)})` };
}
var Er = {
    結果: `けっか`,
    雨の日: `あめのひ`, カレーの日: `カレーのひ`, 金沢: `かなざわ`, 特別公開: `とくべつこうかい`,
    投稿内容: `とうこうないよう`, 手がかり: `てがかり`, 取り組みましょう: `とりくみましょう`, 生成: `せいせい`,
    飛びます: `とびます`, 検索欄: `けんさくらん`, 入力: `にゅうりょく`, 後: `あと`,
    聞き出したり: `ききだしたり`, 金銭: `きんせん`, 取る: `とる`, 詐欺: `さぎ`, 送られて: `おくられて`, 勝手: `かって`,
    誘い: `さそい`, 盗む: `ぬすむ`, 数多く: `かずおおく`, 紛れ込んで: `まぎれこんで`, 分かって: `わかって`,
    漏洩: `ろうえい`, 恐れ: `おそれ`, 一番上: `いちばんうえ`, 照らし合わせて: `てらしあわせて`, 道中: `どうちゅう`, 屋台: `やたい`, 人混み: `ひとごみ`, 合計挑戦回数: `ごうけいちょうせんかいすう`,
    外観: `がいかん`, 出店: `でみせ`, 様子: `ようす`, 入った: `はいった`, 横: `よこ`, 向いている: `むいている`, 木々: `きぎ`, 石碑: `せきひ`, 読み込め: `よみこめ`, 前: `まえ`,
    男子中学生: `だんしちゅうがくせい`, 探し: `さがし`, 答え: `こたえ`, 上: `うえ`,
    書き込まれ: `かきこまれ`, 問われ: `とわれ`, 求められ: `もとめられ`, 負い: `おい`,
    下校中: `げこうちゅう`, 突然: `とつぜん`, 大雨: `おおあめ`, 雨宿り中: `あまやどりちゅう`,
    公開: `こうかい`, 不特定多数: `ふとくていたすう`, 閲覧: `えつらん`, 見られたくない: `みられたくない`, 鍵: `かぎ`, 設定: `せってい`,
    通う: `かよう`, 検索: `けんさく`, 付近: `ふきん`, 住んでいる: `すんでいる`, 通っている: `かよっている`, 十分: `じゅうぶん`, 注意: `ちゅうい`,
    知られる: `しられる`, 知らない: `しらない`, 住所: `じゅうしょ`, 学校名: `がっこうめい`, 携帯電話番号: `けいたいでんわばんごう`, 電話番号: `でんわばんごう`,
    電話: `でんわ`, 番号: `ばんごう`, 選べ: `えらべ`, 待ちぶせ: `まちぶせ`, 移動中: `いどうちゅう`, 居場所: `いばしょ`, 追跡: `ついせき`,
    書き込まれる: `かきこまれる`, 偽の: `にせの`, 送られたり: `おくられたり`, 注文: `ちゅうもん`, 宛て: `あて`, 送りつけられる: `おくりつけられる`,
    探されたり: `さがされたり`, 悪用: `あくよう`, 送る: `おくる`, 送りつけ: `おくりつけ`, 組み合わさる: `くみあわさる`, 危険: `きけん`,
    インターネット上: `インターネットじょう`, 多く: `おおく`, 細かい: `こまかい`, 出どころ: `でどころ`, 発信源: `はっしんげん`, 本物: `ほんもの`, 信じ込まない: `しんじこまない`,
    出没: `しゅつぼつ`, 投稿後: `とうこうご`, 踏まえて: `ふまえて`, 偽画像: `にせがぞう`, 行う: `おこなう`, 罪: `つみ`,
    確かめられていない: `たしかめられていない`, 話: `はなし`, 言ったり: `いったり`, 広めたり: `ひろめたり`, 心: `こころ`, 周り: `まわり`,
    傷つける: `きずつける`, 誹謗: `ひぼう`, 中傷: `ちゅうしょう`, 言う: `いう`, 広めて: `ひろめて`, 一度: `いちど`, 立場: `たちば`, 立って: `たって`,
    傷つけていない: `きずつけていない`, 永遠: `えいえん`, 残り続けます: `のこりつづけます`, 気を付けましょう: `きをつけましょう`,
    学んだ: `まなんだ`, 利用: `りよう`, 生かしましょう: `いかしましょう`, 合計: `ごうけい`,
    発信者情報開示: `はっしんしゃじょうほうかいじ`, 意見照会書: `いけんしょうかいしょ`, 野々市市立野々市中学校: `ののいちしりつののいちちゅうがっこう`, 野々市市立布水中学校: `ののいちしりつふすいちゅうがっこう`, 白山市立松任中学校: `はくさんしりつまっとうちゅうがっこう`, 白山市立北星中学校: `はくさんしりつほくせいちゅうがっこう`, 白山市立光野中学校: `はくさんしりつひかりのちゅうがっこう`, 白山市立笠間中学校: `はくさんしりつかさまちゅうがっこう`, 白山市立美川中学校: `はくさんしりつみかわちゅうがっこう`, 白山市立鶴来中学校: `はくさんしりつつるぎちゅうがっこう`, 白山市立北辰中学校: `はくさんしりつほくしんちゅうがっこう`, 金沢市立額中学校: `かなざわしりつぬかちゅうがっこう`, 野々市中央公園: `ののいちちゅうおうこうえん`, 御経塚史跡公園: `おきょうづかしせきこうえん`, 末松廃寺跡公園: `すえまつはいじあとこうえん`, つばきの郷公園: `つばきのさとこうえん`, 野々市南部公園: `ののいちなんぶこうえん`, 押野中央公園: `おしのちゅうおうこうえん`, 経塚公園: `きょうづかこうえん`, せせらぎ公園: `せせらぎこうえん`, あらみや公園: `あらみやこうえん`, つばき公園: `つばきこうえん`, 偽計業務妨害罪: `ぎけいぎょうむぼうがいざい`, 軽犯罪法違反: `けいはんざいほういはん`, 名誉毀損罪: `めいよきそんざい`, 業務妨害罪: `ぎょうむぼうがいざい`, 銃刀法違反: `じゅうとうほういはん`, 侮辱罪: `ぶじょくざい`, 脅迫罪: `きょうはくざい`, 詐欺罪: `さぎざい`, 損害賠償: `そんがいばいしょう`, 個人情報: `こじんじょうほう`, 誹謗中傷: `ひぼうちゅうしょう`, 偽情報発信: `にせじょうほうはっしん`, 偽情報: `にせじょうほう`, 画像差し替え待ち: `がぞうさしかえまち`, 特定できる: `とくていできる`, 特定した: `とくていした`, 特定: `とくてい`, 情報: `じょうほう`, 答えよう: `こたえよう`, 攻略: `こうりゃく`, 消えて: `きえて`, 方: `ほう`, 気づいた: `きづいた`, 生成AI: `せいせいエーアイ`, 物: `もの`, 偽動画: `にせどうが`, 怖がり: `こわがり`, 住民: `じゅうみん`, 増やします: `ふやします`, 投稿中: `とうこうちゅう`, 一つ: `ひとつ`, 選んで: `えらんで`, 開き: `ひらき`, 開く: `ひらく`, 行われ: `おこなわれ`, 全: `ぜん`, 投稿する前: `とうこうするまえ`, 思った: `おもった`, 人々: `ひとびと`, 人: `ひと`, 何時間: `なんじかん`, 何: `なに`, 書いて: `かいて`, 書く: `かく`, 再挑戦: `さいちょうせん`, 実況: `じっきょう`, 週末: `しゅうまつ`, 石川: `いしかわ`, 速報: `そくほう`, 係る: `かかる`, 紙: `かみ`, 届いた: `とどいた`, 終わった: `おわった`, 気を付けて: `きをつけて`, 現れた: `あらわれた`, 見える: `みえる`, 影響: `えいきょう`, 早耳: `はやみみ`, 拡散: `かくさん`, 出てない: `でてない`, 出た: `でた`, 出る: `でる`, 木: `き`, 向き: `むき`, 違わない: `ちがわない`, 違う: `ちがう`, 広まってる: `ひろまってる`, 見に行った: `みにいった`, ゴール前: `ゴールまえ`, 競り合う: `せりあう`, 集まる: `あつまる`, サッカー場: `サッカーじょう`, 数字: `すうじ`, 飾られた: `かざられた`, 名前: `なまえ`, 顔: `かお`, 写さず: `うつさず`, 向かい側: `むかいがわ`, 得した: `とくした`, 気分: `きぶん`, 許せない: `ゆるせない`, 見れば: `みれば`, 広めた方: `ひろめたほう`, 行った: `いった`, 見て: `みて`, 楽しみに: `たのしみに`, 楽しそう: `たのしそう`, 楽しい: `たのしい`, 買って: `かって`, 上がる: `あがる`, 寝ている: `ねている`, 写真: `しゃしん`, 日常: `にちじょう`, 使用する: `しようする`, 帰りに: `かえりに`, 良い: `よい`, 実在する: `じつざいする`, 写った: `うつった`, 見せた: `みせた`, 家の人: `いえのひと`, お疲れ: `おつかれ`, 休んで: `やすんで`, 次: `つぎ`, 経ってる: `たってる`, 晴れて: `はれて`, 歩き: `あるき`, 気になってた: `きになってた`, 広い: `ひろい`, 投稿見た: `とうこうみた`, 所属: `しょぞく`, 青空: `あおぞら`, 中央: `ちゅうおう`, 若葉: `わかば`, 町: `まち`, 一覧: `いちらん`, 考えられる: `かんがえられる`, 撮られた: `とられた`, 使って: `つかって`, 聞いて: `きいて`, 写真に写る: `しゃしんにうつる`, スポーツ施設: `スポーツしせつ`, 施設: `しせつ`, お店: `おみせ`, 業務: `ぎょうむ`, 成立する: `せいりつする`, 調べて: `しらべて`, 調べる: `しらべる`, 作られた: `つくられた`, 作った: `つくった`, 部分: `ぶぶん`, 比べて: `くらべて`, 大切: `たいせつ`, 起こる: `おこる`, 信じた: `しんじた`, 控える: `ひかえる`, 巡回を行う: `じゅんかいをおこなう`, 妨げる: `さまたげる`, 妨げた: `さまたげた`, 場合: `ばあい`, 負う: `おう`, 中止: `ちゅうし`, 不安: `ふあん`, 増やす: `ふやす`, 最も: `もっとも`, 高い: `たかい`, 他人: `たにん`, 限定: `げんてい`, 最初: `さいしょ`, 広げ: `ひろげ`, 促して: `うながして`, 見た人: `みたひと`, 思い: `おもい`, 基づかない: `もとづかない`, 下げる: `さげる`, 悪口: `わるぐち`, 見た: `みた`, 正しく: `ただしく`, 知らせる: `しらせる`, 言葉: `ことば`, 分かった: `わかった`, 分: `ふん`, 年: `ねん`, 中: `ちゅう`, 生成AI動画: `せいせいエーアイどうが`, 生成AI画像: `せいせいエーアイがぞう`, 発信者: `はっしんしゃ`, 情報開示: `じょうほうかいじ`, 投稿画像: `とうこうがぞう`, 画像検索: `がぞうけんさく`, 拡大表示: `かくだいひょうじ`, 素材差し替え待ち: `そざいさしかえまち`, 個人の特定: `こじんのとくてい`, 根拠のない悪口: `こんきょのないわるぐち`, 根拠のない: `こんきょのない`, 永井選手: `ながいせんしゅ`, 金工ユナイテッド: `きんこうユナイテッド`, サッカー観戦部: `サッカーかんせんぶ`, 金工サポ: `きんこうサポ`, 公共施設: `こうきょうしせつ`, 法律上: `ほうりつじょう`, 刑事上: `けいじじょう`, 民事上: `みんじじょう`, 法的な責任: `ほうてきなせきにん`, 人格攻撃: `じんかくこうげき`, 評判低下: `ひょうばんていか`, 人格を否定: `じんかくをひてい`, 金銭要求: `きんせんようきゅう`, 犯罪: `はんざい`, 法律: `ほうりつ`, 違反: `いはん`, 警察: `けいさつ`, 捜査: `そうさ`, 逮捕: `たいほ`, 危害: `きがい`, 爆破: `ばくは`, 予告: `よこく`, 名誉: `めいよ`, 棄損: `きそん`, 評判: `ひょうばん`, 被害: `ひがい`, 災害: `さいがい`, 通報: `つうほう`, 責任: `せきにん`, 損害: `そんがい`, 地域の住民: `ちいきのじゅうみん`, 市役所: `しやくしょ`, 巡回: `じゅんかい`, 学校や行事: `がっこうやぎょうじ`, 外出: `がいしゅつ`, 仕事: `しごと`, 会社: `かいしゃ`, 発生: `はっせい`, 削除: `さくじょ`, 架空: `かくう`, 必ず: `かならず`, 時点: `じてん`, 実際に撮影: `じっさいにさつえい`, 実際: `じっさい`, 撮影: `さつえい`, 画像: `がぞう`, 動画: `どうが`, 文字: `もじ`, 手足: `てあし`, 不自然: `ふしぜん`, 質感: `しつかん`, 違和感: `いわかん`, 光: `ひかり`, 影: `かげ`, 形: `かたち`, 指: `ゆび`, 崩れて: `くずれて`, 投稿一覧: `とうこういちらん`, 問題一覧: `もんだいいちらん`, 返信一覧: `へんしんいちらん`, 返信先: `へんしんさき`, 投稿: `とうこう`, 問題: `もんだい`, 回答: `かいとう`, 正解: `せいかい`, 不正解: `ふせいかい`, 採点結果: `さいてんけっか`, 採点: `さいてん`, 挑戦回数: `ちょうせんかいすう`, 挑戦: `ちょうせん`, 進捗: `しんちょく`, 端末: `たんまつ`, 自動保存: `じどうほぞん`, 選択肢: `せんたくし`, 選択中: `せんたくちゅう`, 選択: `せんたく`, 複数: `ふくすう`, 全問: `ぜんもん`, 問正解済み: `もんせいかいずみ`, 問正解: `もんせいかい`, 解説: `かいせつ`, 確認: `かくにん`, 判断: `はんだん`, 内容: `ないよう`, 状況: `じょうきょう`, 可能性: `かのうせい`, 正しい: `ただしい`, 選びなさい: `えらびなさい`, 選びましょう: `えらびましょう`, 考えてみましょう: `かんがえてみましょう`, 注目してみよう: `ちゅうもくしてみよう`, 表示された: `ひょうじされた`, 表示: `ひょうじ`, 送信する: `そうしんする`, 閉じる: `とじる`, 戻る: `もどる`, 最初から: `さいしょから`, もう一度: `もういちど`, 大丈夫: `だいじょうぶ`, 教材: `きょうざい`, 切り替え: `きりかえ`, 見る: `みる`, 答える: `こたえる`, 探そう: `さがそう`, 見つけ: `みつけ`, 含まれています: `ふくまれています`, 該当する: `がいとうする`, 反応数: `はんのうすう`, 素材: `そざい`, 差し替え: `さしかえ`, 放課後: `ほうかご`, 夕方: `ゆうがた`, 写した: `うつした`, 返信: `へんしん`, 前の画像: `まえのがぞう`, 次の画像: `つぎのがぞう`, 誕生日: `たんじょうび`, 所属中学校: `しょぞくちゅうがっこう`, 所属クラブ: `しょぞくクラブ`, 中学校: `ちゅうがっこう`, 中学: `ちゅうがく`, 石川県: `いしかわけん`, 公園名: `こうえんめい`, 公園: `こうえん`, 公式: `こうしき`, 過去: `かこ`, 推測: `すいそく`, 周辺: `しゅうへん`, 地図: `ちず`, 特徴: `とくちょう`, 照明塔: `しょうめいとう`, 絞り込めます: `しぼりこめます`, 誕生日投稿: `たんじょうびとうこう`, 末尾: `まつび`, 組み合わせる: `くみあわせる`, 今日: `きょう`, 今月: `こんげつ`, 今度: `こんど`, 県外: `けんがい`, 試合後: `しあいご`, 試合: `しあい`, 練習試合: `れんしゅうじあい`, 練習日: `れんしゅうび`, 練習: `れんしゅう`, 応援: `おうえん`, 観客席: `かんきゃくせき`, 攻防: `こうぼう`, 選手: `せんしゅ`, 全景: `ぜんけい`, 迫力: `はくりょく`, 帰り道: `かえりみち`, 新しい: `あたらしい`, 学校: `がっこう`, 歩いて: `あるいて`, 最高: `さいこう`, 給食: `きゅうしょく`, 絶対: `ぜったい`, お金: `おかね`, 裏: `うら`, 消えろ: `きえろ`, 証拠: `しょうこ`, 攻撃: `こうげき`, 広めた: `ひろめた`, 地域: `ちいき`, 見比べる: `みくらべる`, 面白そう: `おもしろそう`, 雨: `あめ`, 家: `いえ`, 友達: `ともだち`, 遊ぶ: `あそぶ`, 外: `そと`, 昼休み: `ひるやすみ`, 血: `ち`, 明日: `あした`, 時間: `じかん`, 早い: `はやい`, 毎週: `まいしゅう`, 火曜: `かよう`, 木曜: `もくよう`, 宿題: `しゅくだい`, 憂鬱: `ゆううつ`, 近く: `ちかく`, 横断歩道: `おうだんほどう`, 色塗り: `いろぬり`, 近所: `きんじょ`, 犬: `いぬ`, 同じ: `おなじ`, 場所: `ばしょ`, 気持ち: `きもち`, 寝てた: `ねてた`, 期間限定: `きかんげんてい`, 寄った: `よった`, 見つけた: `みつけた`, 芝生: `しばふ`, 蹴る: `ける`, 少し: `すこし`, 本当: `ほんとう`, 残念: `ざんねん`, 言っている: `いっている`, 分かる: `わかる`, 書きに行こう: `かきにいこう`, 送った: `おくった`, 心配: `しんぱい`, 一人: `ひとり`, 抱えず: `かかえず`, 大人: `おとな`, 相談: `そうだん`, 大事: `だいじ`, 写り込み: `うつりこみ`, 確かさ: `たしかさ`, 自分: `じぶん`, 先生: `せんせい`, 合図: `あいず`, 挙手: `きょしゅ`, 匿名: `とくめい`, 発信: `はっしん`, 分からない: `わからない`, 理由: `りゆう`, 添えて: `そえて`, 意見: `いけん`, 伝える: `つたえる`, 相手: `あいて`, 映画: `えいが`, 感想: `かんそう`, 丁寧: `ていねい`, 体: `からだ`, 加える: `くわえる`, 行事: `ぎょうじ`, 日時: `にちじ`, 傷つけない: `きずつけない`, 異なる: `ことなる`, 使い: `つかい`, だまし取ろう: `だましとろう`, 商品: `しょうひん`, 使った: `つかった`, 事実: `じじつ`, 考え: `かんがえ`, 分けて: `わけて`, 冗談: `じょうだん`, 求められる: `もとめられる`, 問われる: `とわれる`, 怖い: `こわい`, 傷ついたり: `きずついたり`, 生徒: `せいと`, 日々: `ひび`, 出来事: `できごと`, 月: `がつ`, 日: `にち`, 歳: `さい`, 件: `けん`, 回: `かい`, 枚: `まい`, 問: `もん`
}, Dr = Object.keys(Er).sort((e, t) => t.length - e.length);
function splitRubyReading(word, reading) {
    // Keep okurigana, particles, kana and Latin letters outside ruby elements.
    // Match the unchanged kana against the full reading to retain compound readings.
    const isKanji = text => /^[\p{Script=Han}々]+$/u.test(text);
    const parts = word.match(/[\p{Script=Han}々]+|[^\p{Script=Han}々]+/gu) ?? [];
    const readingOf = text => text.replace(/AI/g, `エーアイ`);
    const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    const pattern = parts.map(part => isKanji(part) ? `(.+?)` : escape(readingOf(part))).join(``);
    const match = reading.match(new RegExp(`^${pattern}$`, `u`));
    let group = 1;
    return parts.map(text => isKanji(text)
        ? { text, reading: match ? match[group++] : Er[text] }
        : { text });
}
const rubyReadings = Object.fromEntries(Object.entries(Er).map(([word, reading]) => [word, splitRubyReading(word, reading)]));
function N({ text: e }) {
    let t = [], n = ``, r = 0, i = () => {
        n &&= (t.push(n), ``);
    };
    for (; r < e.length;) {
        let a = Dr.find(t => e.startsWith(t, r));
        if (!a) {
            n += e[r], r += 1;
            continue;
        }
        i();
        rubyReadings[a].forEach((part, index) => {
            if (!part.reading) { t.push(part.text); return; }
            t.push((0, M.jsxs)(`ruby`, {
                children: [part.text, (0, M.jsx)(`rt`, { children: part.reading })]
            }, `${r}-${index}`));
        });
        r += a.length;
    }
    return i(), (0, M.jsx)(M.Fragment, {
        children: t
    });
}
function Or({ featured: e = !1, large: t = !1, account: n = !1, seed: r = `account` }) {
    let [i, a] = (0, b.useState)(!1), o = t ? `avatar avatar--large` : `avatar`;
    return e ? (0, M.jsx)(`span`, {
        className: `${o} avatar--featured`, style: Tr(r), "aria-hidden": `true`
    }) : (n || t) && !i ? (0, M.jsx)(`img`, {
        className: o, src: vr(dr.avatar), alt: `サッカーボールをモチーフにしたプロフィール画像`, onError: () => a(!0)
    }) : (0, M.jsx)(`span`, {
        className: `${o} ${n || t ? `avatar--soccer` : `avatar--default`}`, style: n || t ? void 0 : Tr(r), "aria-hidden": `true`, children: n || t ? `⚽` : ``
    });
}
function kr({ onOpenGuide }) {
    return (0, M.jsx)(`header`, {
        className: `app-header`, children: (0, M.jsxs)(`div`, {
            className: `app-header__inner`, children: [
                (0, M.jsxs)(`div`, {
                    className: `brand`, "aria-label": `あなたの投稿は大丈夫？SNS投稿チェック！`, children: [
                        (0, M.jsx)(`a`, {
                            className: `brand__home-link`, href: `../index.html`, "aria-label": `ゲーム一覧へ戻る`, children: (0, M.jsx)(`img`, {
                                className: `brand__mark`, src: vr(`app-bear-icon-v1.png`), alt: ``, "aria-hidden": `true`
                            })
                        }), (0, M.jsxs)(`span`, {
                            className: `brand__text`, children: [
                                (0, M.jsxs)(`strong`, {
                                    children: [
                                        `SNS`, (0, M.jsx)(N, {
                                            text: `投稿`
                                        }), `チェック！`
                                    ]
                                }), (0, M.jsxs)(`small`, {
                                    children: [
                                        `あなたの`, (0, M.jsx)(N, {
                                            text: `投稿`
                                        }), `は`, (0, M.jsx)(N, {
                                            text: `大丈夫`
                                        }), `？`
                                    ]
                                })
                            ]
                        })
                    ]
                }), (0, M.jsx)(`button`, {
                    type: `button`, className: `guide-toggle`, onClick: onOpenGuide,
                    children: (0, M.jsx)(N, { text: `使い方` })
                })
            ]
        })
    });
}
function Ar({ title: e, hint: t, type: n, portrait: r }) {
    return (0, M.jsxs)(`div`, {
        className: `media-placeholder ${r ? `media-placeholder--portrait` : ``}`, children: [
            (0, M.jsx)(`span`, {
                className: `media-placeholder__icon`, "aria-hidden": `true`, children: n === `video` ? (0, M.jsx)(or, {}) : (0, M.jsx)(rr, {})
            }), (0, M.jsx)(`strong`, {
                children: (0, M.jsx)(N, {
                    text: e
                })
            }), (0, M.jsx)(`span`, {
                children: (0, M.jsx)(N, {
                    text: t
                })
            }), (0, M.jsx)(`small`, {
                children: (0, M.jsx)(N, {
                    text: `素材差し替え待ち`
                })
            })
        ]
    });
}
function jr({ mediaItems: e, initialIndex: t, failedIndexes: n, onMediaError: r, onClose: i }) {
    let [a, o] = (0, b.useState)(t), s = (0, b.useRef)(null), c = e[a];
    return (0, b.useEffect)(() => {
        let t = document.body.style.overflow, n = t => {
            t.key === `Escape` && i(), t.key === `ArrowLeft` && o(t => (t - 1 + e.length) % e.length), t.key === `ArrowRight` && o(t => (t + 1) % e.length);
        };
        return document.body.style.overflow = `hidden`, window.addEventListener(`keydown`, n), window.requestAnimationFrame(() => s.current?.focus()), () => {
            document.body.style.overflow = t, window.removeEventListener(`keydown`, n);
        };
    }, [
        e.length, i
    ]), (0, M.jsx)(`div`, {
        className: `modal-backdrop gallery-backdrop`, onMouseDown: e => {
            e.target === e.currentTarget && i();
        }, children: (0, M.jsxs)(`section`, {
            className: `gallery-modal`, role: `dialog`, "aria-modal": `true`, "aria-label": `投稿画像の拡大表示`, children: [
                (0, M.jsxs)(`header`, {
                    className: `gallery-modal__header`, children: [
                        (0, M.jsxs)(`span`, {
                            children: [
                                a + 1, ` / `, e.length
                            ]
                        }), (0, M.jsx)(`button`, {
                            ref: s, type: `button`, onClick: i, "aria-label": `画像を閉じる`, children: (0, M.jsx)(ur, {})
                        })
                    ]
                }), (0, M.jsxs)(`div`, {
                    className: `gallery-modal__stage`, children: [
                        n.has(a) ? (0, M.jsx)(Ar, {
                            title: c.placeholderTitle, hint: c.placeholderHint, type: c.type, portrait: c.aspect === `portrait`
                        }) : c.type === `video` ? (0, M.jsx)(`video`, {
                            src: vr(c.file), "aria-label": c.alt, controls: !0, autoPlay: !0, muted: !0, playsInline: !0, onError: () => r(a)
                        }) : (0, M.jsx)(`img`, {
                            src: vr(c.file), alt: c.alt, onError: () => r(a)
                        }), e.length > 1 && (0, M.jsxs)(M.Fragment, {
                            children: [
                                (0, M.jsx)(`button`, {
                                    className: `gallery-modal__arrow gallery-modal__arrow--left`, type: `button`, onClick: () => o(t => (t - 1 + e.length) % e.length), "aria-label": `前の画像`, children: (0, M.jsx)(er, {})
                                }), (0, M.jsx)(`button`, {
                                    className: `gallery-modal__arrow gallery-modal__arrow--right`, type: `button`, onClick: () => o(t => (t + 1) % e.length), "aria-label": `次の画像`, children: (0, M.jsx)(tr, {})
                                })
                            ]
                        })
                    ]
                }), (0, M.jsx)(`p`, {
                    children: (0, M.jsx)(N, {
                        text: c.alt
                    })
                })
            ]
        })
    });
}
function Mr({ post: e }) {
    let t = e.gallery ?? (e.media ? [
        e.media
    ] : []), [n, r] = (0, b.useState)(new Set), [i, a] = (0, b.useState)(null);
    if (!t.length)
        return null;
    let o = e => {
        r(t => new Set(t).add(e));
    };
    return (0, M.jsxs)(M.Fragment, {
        children: [
            (0, M.jsx)(`div`, {
                className: `post-media-grid ${t.length > 1 ? `post-media-grid--multiple` : ``}`, children: t.map((e, t) => {
                    let r = e.aspect === `portrait`;
                    return (0, M.jsx)(`button`, {
                        type: `button`, className: `post-media-button`, onClick: e => {
                            e.stopPropagation(), a(t);
                        }, "aria-label": `${e.alt}を拡大表示`, children: n.has(t) ? (0, M.jsx)(Ar, {
                            title: e.placeholderTitle, hint: e.placeholderHint, type: e.type, portrait: r
                        }) : e.type === `video` ? (0, M.jsxs)(`div`, {
                            className: `post-media post-media--video ${r ? `post-media--portrait` : ``}`, children: [
                                (0, M.jsx)(`video`, {
                                    src: vr(e.file), "aria-label": e.alt, autoPlay: !0, muted: !0, loop: !0, playsInline: !0, preload: `metadata`, onError: () => o(t)
                                }), (0, M.jsx)(`span`, {
                                    className: `video-badge`, children: (0, M.jsx)(N, {
                                        text: `生成AIが生成した動画`
                                    })
                                })
                            ]
                        }) : (0, M.jsxs)(M.Fragment, {
                            children: [
                                (0, M.jsx)(`img`, {
                                    className: `post-media`, src: vr(e.file), alt: e.alt, loading: `lazy`, onError: () => o(t)
                                }), e.title && (0, M.jsx)(`span`, {
                                    className: `video-badge post-media-title`, children: (0, M.jsx)(N, { text: e.title })
                                })
                            ]
                        })
                    }, e.file);
                })
            }), i !== null && (0, M.jsx)(jr, {
                mediaItems: t, initialIndex: i, failedIndexes: n, onMediaError: o, onClose: () => a(null)
            })
        ]
    });
}
function Nr({ post: e }) {
    return (0, M.jsxs)(`div`, {
        className: `post-actions`, "aria-label": `投稿の反応数`, children: [
            (0, M.jsxs)(`span`, {
                children: [
                    (0, M.jsx)(ir, {
                        "aria-hidden": `true`
                    }), Cr(e.counts.replies)
                ]
            }), (0, M.jsxs)(`span`, {
                children: [
                    (0, M.jsx)(sr, {
                        "aria-hidden": `true`
                    }), Cr(e.counts.reposts)
                ]
            }), (0, M.jsxs)(`span`, {
                children: [
                    (0, M.jsx)(nr, {
                        "aria-hidden": `true`
                    }), Cr(e.counts.likes)
                ]
            }), (0, M.jsxs)(`span`, {
                children: [
                    (0, M.jsx)(Qn, {
                        "aria-hidden": `true`
                    }), Cr(e.counts.views)
                ]
            }), (0, M.jsx)(`span`, {
                className: `post-actions__share`, "aria-hidden": `true`, children: (0, M.jsx)(lr, {})
            })
        ]
    });
}
function Pr({ post: e, onOpen: t, detail: n = !1 }) {
    let r = !!t;
    return (0, M.jsxs)(`article`, {
        className: `post-card ${r ? `post-card--clickable` : ``} ${n ? `post-card--detail` : ``}`, onClick: t, onKeyDown: e => {
            r && (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), t?.());
        }, role: r ? `link` : void 0, tabIndex: r ? 0 : void 0, "aria-label": r ? `${e.date}の投稿と返信を見る` : void 0, children: [
            (0, M.jsx)(Or, {
                account: !0
            }), (0, M.jsxs)(`div`, {
                className: `post-card__content`, children: [
                    (0, M.jsxs)(`div`, {
                        className: `post-card__meta`, children: [
                            (0, M.jsx)(`strong`, {
                                children: dr.name
                            }), (0, M.jsx)(`span`, {
                                children: dr.handle
                            }), (0, M.jsx)(`span`, {
                                "aria-hidden": `true`, children: `·`
                            }), (0, M.jsx)(`span`, {
                                children: (0, M.jsx)(N, {
                                    text: e.date
                                })
                            }), (0, M.jsx)(ar, {
                                className: `post-card__more`, "aria-hidden": `true`
                            })
                        ]
                    }), (0, M.jsx)(`p`, {
                        className: n ? `post-card__body post-card__body--detail` : `post-card__body`, children: (0, M.jsx)(N, {
                            text: e.body
                        })
                    }), (0, M.jsx)(Mr, {
                        post: e
                    }), (0, M.jsx)(Nr, {
                        post: e
                    }), r && (0, M.jsxs)(`span`, {
                        className: `open-thread-hint`, "aria-hidden": `true`, children: [
                            (0, M.jsx)(N, {
                                text: `返信を見る`
                            }), ` `, (0, M.jsx)(tr, {})
                        ]
                    })
                ]
            })
        ]
    });
}
function Fr() {
    let [e, t] = (0, b.useState)(!1);
    return e ? (0, M.jsxs)(`div`, {
        className: `cover cover--placeholder`, children: [
            (0, M.jsx)(`span`, {
                "aria-hidden": `true`, children: `⚽`
            }), (0, M.jsx)(`p`, {
                children: (0, M.jsx)(N, {
                    text: `放課後のサッカーフィールド`
                })
            }), (0, M.jsxs)(`small`, {
                children: [
                    `カバー`, (0, M.jsx)(N, {
                        text: `画像差し替え待ち`
                    })
                ]
            })
        ]
    }) : (0, M.jsx)(`img`, {
        className: `cover`, src: vr(dr.cover), alt: `夕方のサッカーフィールドを写したカバー画像`, onError: () => t(!0)
    });
}
function Ir({ onOpenFollowing: e, onOpenFollowers: t }) {
    return (0, M.jsxs)(`section`, {
        className: `profile-panel`, "aria-labelledby": `profile-name`, children: [
            (0, M.jsx)(Fr, {}), (0, M.jsxs)(`div`, {
                className: `profile-panel__body`, children: [
                    (0, M.jsx)(`div`, {
                        className: `profile-panel__avatar`, children: (0, M.jsx)(Or, {
                            large: !0, account: !0
                        })
                    }), (0, M.jsxs)(`div`, {
                        className: `profile-panel__names`, children: [
                            (0, M.jsx)(`h1`, {
                                id: `profile-name`, children: dr.name
                            }), (0, M.jsx)(`p`, {
                                children: `ユーザーID: ${dr.handle}`
                            })
                        ]
                    }), (0, M.jsx)(`p`, {
                        className: `profile-panel__bio`, children: (0, M.jsx)(N, {
                            text: dr.bio
                        })
                    }), (0, M.jsxs)(`div`, {
                        className: `profile-panel__counts`, children: [
                            (0, M.jsxs)(`button`, {
                                type: `button`, onClick: e, children: [
                                    (0, M.jsx)(`strong`, {
                                        children: dr.following
                                    }), ` フォロー`, (0, M.jsx)(N, {
                                        text: `中`
                                    })
                                ]
                            }), (0, M.jsxs)(`button`, {
                                type: `button`, onClick: t, children: [
                                    (0, M.jsx)(`strong`, {
                                        children: dr.followers
                                    }), ` フォロワー`
                                ]
                            })
                        ]
                    })
                ]
            }), (0, M.jsx)(`div`, {
                className: `profile-tabs`, children: (0, M.jsx)(`span`, {
                    className: `is-current`, children: (0, M.jsx)(N, {
                        text: `投稿`
                    })
                })
            })
        ]
    });
}
function Lr({ title: e, accounts: t, onClose: n }) {
    let r = (0, b.useRef)(null);
    return (0, b.useEffect)(() => {
        let e = document.body.style.overflow, t = e => {
            e.key === `Escape` && n();
        };
        return document.body.style.overflow = `hidden`, window.addEventListener(`keydown`, t), window.requestAnimationFrame(() => r.current?.focus()), () => {
            document.body.style.overflow = e, window.removeEventListener(`keydown`, t);
        };
    }, [
        n
    ]), (0, M.jsx)(`div`, {
        className: `modal-backdrop`, onMouseDown: e => {
            e.target === e.currentTarget && n();
        }, children: (0, M.jsxs)(`section`, {
            className: `following-modal`, role: `dialog`, "aria-modal": `true`, "aria-labelledby": `following-modal-title`, children: [
                (0, M.jsxs)(`header`, {
                    className: `following-modal__header`, children: [
                        (0, M.jsxs)(`div`, {
                            children: [
                                (0, M.jsx)(`h2`, {
                                    id: `following-modal-title`, children: (0, M.jsx)(N, {
                                        text: e
                                    })
                                }), (0, M.jsxs)(`span`, {
                                    children: [
                                        t.length, (0, M.jsx)(N, {
                                            text: `件`
                                        })
                                    ]
                                })
                            ]
                        }), (0, M.jsx)(`button`, {
                            ref: r, type: `button`, onClick: n, "aria-label": `${e}を閉じる`, children: (0, M.jsx)(ur, {})
                        })
                    ]
                }), (0, M.jsx)(`div`, {
                    className: `following-account-list`, children: t.map(e => (0, M.jsxs)(`article`, {
                        className: `following-account`, children: [
                            (0, M.jsx)(`span`, {
                                className: `following-account__avatar`, style: followingAvatarStyle(e.handle), "aria-hidden": `true`
                            }), (0, M.jsxs)(`div`, {
                                children: [
                                    (0, M.jsx)(`strong`, {
                                        children: (0, M.jsx)(N, {
                                            text: e.name
                                        })
                                    }), (0, M.jsx)(`span`, {
                                        children: e.handle
                                    })
                                ]
                            })
                        ]
                    }, e.handle))
                })
            ]
        })
    });
}
function Rr() {
    return (0, M.jsx)(`aside`, {
        className: `mission-panel`, children: (0, M.jsxs)(`div`, {
            className: `mission-panel__paper`, children: [
                (0, M.jsx)(`h2`, {
                    children: (0, M.jsx)(N, {
                        text: `投稿内容を手がかりに問題に答えよう！`
                    })
                }), (0, M.jsx)(`p`, {
                    children: (0, M.jsx)(N, {
                        text: `KTさんの投稿には、個人の特定につながる情報や偽情報、誹謗中傷にあたる内容が含まれています。\n\n${hr.length}件の投稿内容を確認して、問題のボックスから回答しましょう。`
                    })
                })
            ]
        })
    });
}
function zr() {
    let [i, a] = (0, b.useState)(null);
    return (0, M.jsxs)(M.Fragment, { children: [
        (0, M.jsx)(`section`, {
            className: `feed-pane`, "aria-label": `投稿を見る`, tabIndex: 0,
            children:
            (0, M.jsxs)(`div`, {
                className: `feed-column`, children: [
                    (0, M.jsx)(Ir, {
                        onOpenFollowing: () => a(`following`), onOpenFollowers: () => a(`followers`)
                    }), (0, M.jsx)(`section`, {
                        "aria-label": `投稿一覧`, children: hr.map(e => (0, M.jsx)(Pr, {
                            post: e
                        }, e.id))
                    })
                ]
            })
        }), i && (0, M.jsx)(Lr, {
                title: i === `following` ? `フォロー中のアカウント` : `フォロワー`, accounts: i === `following` ? dr.followingAccounts : dr.followerAccounts, onClose: () => a(null)
            })
        ] });
}
function Br({ reply: e }) {
    return (0, M.jsxs)(`article`, {
        className: `reply-card ${e.parentReplyId ? `reply-card--nested` : ``}`, children: [
            (0, M.jsx)(Or, {
                featured: e.featured, seed: e.handle
            }), (0, M.jsxs)(`div`, {
                children: [
                    (0, M.jsxs)(`div`, {
                        className: `reply-card__meta`, children: [
                            (0, M.jsx)(`strong`, {
                                children: (0, M.jsx)(N, {
                                    text: e.author
                                })
                            }), (0, M.jsx)(`span`, {
                                children: e.handle
                            }), (0, M.jsx)(`span`, {
                                "aria-hidden": `true`, children: `·`
                            }), (0, M.jsxs)(`span`, {
                                children: [
                                    e.minutesAgo, (0, M.jsx)(N, {
                                        text: `分`
                                    })
                                ]
                            })
                        ]
                    }), (0, M.jsx)(`p`, {
                        children: (0, M.jsx)(N, {
                            text: e.body
                        })
                    }), (0, M.jsxs)(`div`, {
                        className: `reply-card__actions`, "aria-hidden": `true`, children: [
                            (0, M.jsx)(ir, {}), (0, M.jsx)(sr, {}), (0, M.jsx)(nr, {}), (0, M.jsx)(lr, {})
                        ]
                    })
                ]
            })
        ]
    });
}
function Vr({ post: e, onClose: t }) {
    let n = (0, b.useRef)(null);
    return (0, b.useEffect)(() => {
        let e = document.body.style.overflow, r = e => {
            e.key === `Escape` && t();
        };
        return document.body.style.overflow = `hidden`, window.addEventListener(`keydown`, r), window.requestAnimationFrame(() => n.current?.focus()), () => {
            document.body.style.overflow = e, window.removeEventListener(`keydown`, r);
        };
    }, [
        t
    ]), (0, M.jsx)(`div`, {
        className: `modal-backdrop reply-modal-backdrop`, onMouseDown: e => {
            e.target === e.currentTarget && t();
        }, children: (0, M.jsxs)(`section`, {
            className: `reply-modal`, role: `dialog`, "aria-modal": `true`, "aria-labelledby": `reply-modal-title`, children: [
                (0, M.jsxs)(`header`, {
                    className: `reply-modal__header`, children: [
                        (0, M.jsxs)(`div`, {
                            children: [
                                (0, M.jsx)(`h2`, {
                                    id: `reply-modal-title`, children: (0, M.jsx)(N, {
                                        text: `返信一覧`
                                    })
                                }), (0, M.jsxs)(`span`, {
                                    children: [
                                        e.replies?.length ?? 0, (0, M.jsx)(N, {
                                            text: `件の返信`
                                        })
                                    ]
                                })
                            ]
                        }), (0, M.jsx)(`button`, {
                            ref: n, type: `button`, onClick: t, "aria-label": `返信一覧を閉じる`, children: (0, M.jsx)(ur, {})
                        })
                    ]
                }), (0, M.jsxs)(`div`, {
                    className: `reply-modal__body`, children: [
                        (0, M.jsx)(Pr, {
                            post: e, detail: !0
                        }), (0, M.jsxs)(`div`, {
                            className: `reply-context`, children: [
                                (0, M.jsxs)(`span`, {
                                    children: [
                                        (0, M.jsx)(N, {
                                            text: `返信先`
                                        }), `：`
                                    ]
                                }), dr.handle, `さん`
                            ]
                        }), (0, M.jsx)(`section`, {
                            className: `reply-list`, "aria-label": `返信一覧`, children: e.replies?.map(e => (0, M.jsx)(Br, {
                                reply: e
                            }, e.id))
                        })
                    ]
                })
            ]
        })
    });
}
function QuestionHintText({ question }) {
    if (!question.hintUrl) return (0, M.jsx)(N, { text: question.hint });
    const [before, after] = question.hint.split(`Googleマップ`);
    return (0, M.jsxs)(M.Fragment, { children: [
        (0, M.jsx)(N, { text: before }),
        (0, M.jsx)(`a`, { href: question.hintUrl, target: `_blank`, rel: `noopener noreferrer`, children: `Googleマップ` }),
        (0, M.jsx)(N, { text: after ?? `` })
    ] });
}
function CompletionConfetti() {
    const colors = [`#3996dc`, `#6bc8ca`, `#f0bb55`, `#9e84cf`, `#ed8194`];
    return (0, M.jsx)(`div`, {
        className: `completion-confetti`, "aria-hidden": true,
        children: Array.from({ length: 84 }, (_, index) => (0, M.jsx)(`i`, {
            className: `completion-confetti__piece`,
            style: {
                left: `${(index * 37) % 101}%`,
                backgroundColor: colors[index % colors.length],
                width: `${6 + index % 5}px`,
                height: `${9 + index % 7}px`,
                borderRadius: index % 4 === 0 ? `50%` : `1px`,
                "--confetti-drift": `${(index * 23) % 161 - 80}px`,
                "--confetti-turn": `${360 + (index * 47) % 720}deg`,
                animationDelay: `${(index % 12) * .065}s`,
                animationDuration: `${3.2 + (index % 9) * .18}s`
            }
        }, index))
    });
}
// Keep keyboard focus in the foreground dialog and restore it without moving either pane.
function useDialogFocus(open, closeRef, onClose) {
    const closeAction = (0, b.useRef)(onClose);
    closeAction.current = onClose;
    (0, b.useEffect)(() => {
        if (!open) return;
        const trigger = document.activeElement;
        const frame = window.requestAnimationFrame(() => closeRef.current?.focus({ preventScroll: true }));
        const keydown = event => {
            if (event.key === `Escape`) { event.preventDefault(); closeAction.current(); }
            if (event.key !== `Tab`) return;
            const dialog = closeRef.current?.closest(`[role="dialog"]`);
            if (!dialog) return;
            const controls = Array.from(dialog.querySelectorAll(`button:not(:disabled), a[href], input:not(:disabled), summary, [tabindex="0"]`))
                .filter(element => element.getClientRects().length > 0);
            const first = controls[0], last = controls[controls.length - 1];
            if (!first) return;
            if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
                event.preventDefault(); last.focus({ preventScroll: true });
            } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
                event.preventDefault(); first.focus({ preventScroll: true });
            }
        };
        window.addEventListener(`keydown`, keydown);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener(`keydown`, keydown);
            if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
        };
    }, [open]);
}
function GuideDialog({ onClose }) {
    const closeRef = (0, b.useRef)(null);
    useDialogFocus(true, closeRef, onClose);
    return (0, M.jsx)(`div`, {
        className: `modal-backdrop guide-backdrop`, onMouseDown: event => { if (event.target === event.currentTarget) onClose(); },
        children: (0, M.jsxs)(`section`, {
            className: `guide-dialog`, role: `dialog`, "aria-modal": true, "aria-label": `使い方`, children: [
                (0, M.jsx)(`button`, { ref: closeRef, type: `button`, className: `dialog-close`, onClick: onClose, "aria-label": `使い方を閉じる`, children: (0, M.jsx)(ur, {}) }),
                (0, M.jsx)(Rr, {})
            ]
        })
    });
}
function Hr() {
    let e = (0, b.useMemo)(xr, []), [t, n] = (0, b.useState)(e.solved), [r, i] = (0, b.useState)(e.attempts), [a, o] = (0, b.useState)(null), [s, c] = (0, b.useState)([]), [l, u] = (0, b.useState)(null), d = (0, b.useRef)(null), f = gr.find(e => e.id === a), p = Object.values(t).filter(Boolean).length, m = (0, b.useMemo)(() => [
        `個人情報についての投稿`, `偽情報についての投稿`, `誹謗中傷についての投稿`
    ].map(e => ({
        type: e, questions: gr.filter(t => t.type === e)
    })), []);
    const totalAttempts = gr.reduce((total, question) => total + (r[question.id] ?? 0), 0);
    const resultRef = (0, b.useRef)(null);
    const [showResult, setShowResult] = (0, b.useState)(false);
    const celebrated = (0, b.useRef)(p === gr.length);
    const [showConfetti, setShowConfetti] = (0, b.useState)(false);
    (0, b.useEffect)(() => {
        if (p !== gr.length) {
            celebrated.current = false;
            return;
        }
        if (f || celebrated.current) return;
        celebrated.current = true;
        const reduceMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
        if (!reduceMotion) setShowConfetti(true);
        setShowResult(true);
    }, [p, f]);
    (0, b.useEffect)(() => {
        if (!showConfetti) return;
        const timer = window.setTimeout(() => setShowConfetti(false), 6000);
        return () => window.clearTimeout(timer);
    }, [showConfetti]);
    (0, b.useEffect)(() => {
        Sr({
            solved: t, attempts: r
        });
    }, [
        t, r
    ]);
    let h = () => {
        o(null), c([]), u(null);
    };
    useDialogFocus(!!f, d, h);
    useDialogFocus(showResult, resultRef, () => setShowResult(false));
    let g = e => {
        let n = gr.find(t => t.id === e);
        if (!n)
            return;
        o(e);
        let r = n.answers ?? (n.answer ? [
            n.answer
        ] : []);
        c(t[e] ? [
            ...r
        ] : []), u(t[e] ? `correct` : null);
    };
    return (0, M.jsxs)(`section`, {
        className: `quiz-shell`, "aria-label": `問題に答える`, children: [
            showConfetti && (0, M.jsx)(CompletionConfetti, {}),
            (0, M.jsxs)(`section`, {
                className: `quiz-hero`, children: [
                    (0, M.jsx)(`h2`, {
                        children: (0, M.jsx)(N, {
                            text: `問題に答える`
                        })
                    }), (0, M.jsx)(`div`, {
                        className: `quiz-progress`, "aria-label": `${p}問正解済み`, children: (0, M.jsx)(`span`, {
                            style: {
                                width: `${p / gr.length * 100}%`
                            }
                        })
                    }), (0, M.jsxs)(`small`, {
                        className: `quiz-progress__count`, children: [
                            p, ` / `, gr.length, ` `, (0, M.jsx)(N, {
                                text: `問正解`
                            })
                        ]
                    }), p === gr.length && (0, M.jsx)(`button`, {
                        type: `button`, className: `result-toggle`, onClick: () => setShowResult(true), children: (0, M.jsx)(N, { text: `結果` })
                    })
                ]
            }), (0, M.jsx)(`div`, {
                className: `challenge-groups`, children: m.map(e => (0, M.jsxs)(`section`, {
                    className: `challenge-group`, "aria-labelledby": `group-${e.type}`, children: [
                        (0, M.jsxs)(`div`, {
                            className: `challenge-group__heading`, children: [
                                (0, M.jsx)(`h2`, {
                                    id: `group-${e.type}`, children: (0, M.jsx)(N, {
                                        text: e.type
                                    })
                                }), (0, M.jsxs)(`span`, {
                                    children: [
                                        e.questions.filter(e => t[e.id]).length, ` / `, e.questions.length, (0, M.jsx)(N, {
                                            text: `問正解`
                                        })
                                    ]
                                })
                            ]
                        }), (0, M.jsx)(`div`, {
                            className: `challenge-grid`, children: e.questions.map(e => {
                                let n = gr.findIndex(t => t.id === e.id) + 1, r = !!t[e.id];
                                return (0, M.jsxs)(`button`, {
                                    type: `button`, className: `challenge-card ${r ? `is-solved` : ``}`, "aria-label": `問題${n} ${e.title}${r ? ` 正解` : ``}`, onClick: () => g(e.id), children: [
                                        (0, M.jsxs)(`span`, {
                                            className: `challenge-card__meta`, children: [
                                                (0, M.jsx)(N, {
                                                    text: `問題`
                                                }), n
                                            ]
                                        }), (0, M.jsx)(`strong`, {
                                            children: (0, M.jsx)(N, {
                                                text: e.title
                                            })
                                        }), (0, M.jsx)(`span`, {
                                            className: `challenge-card__status`, children: r ? (0, M.jsxs)(M.Fragment, {
                                                children: [
                                                    (0, M.jsx)($n, {
                                                        "aria-hidden": `true`
                                                    }), (0, M.jsx)(N, {
                                                        text: `正解`
                                                    })
                                                ]
                                            }) : (0, M.jsxs)(M.Fragment, {
                                                children: [
                                                    (0, M.jsx)(`span`, {
                                                        className: `challenge-card__open-label`, children: (0, M.jsx)(N, { text: `問題を開く` })
                                                    }), (0, M.jsx)(tr, {
                                                        "aria-hidden": `true`
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, e.id);
                            })
                        })
                    ]
                }, e.type))
            }), p === gr.length && showResult && (0, M.jsx)(`div`, {
                className: `modal-backdrop result-backdrop`, onMouseDown: event => { if (event.target === event.currentTarget) setShowResult(false); },
                children: (0, M.jsxs)(`section`, {
                className: `result-panel`, role: `dialog`, "aria-modal": true, "aria-labelledby": `completion-title`, children: [
                    (0, M.jsx)(`button`, { ref: resultRef, type: `button`, className: `dialog-close`, "aria-label": `結果を閉じる`, onClick: () => setShowResult(false), children: (0, M.jsx)(ur, {}) }),
                    (0, M.jsx)(`h2`, {
                        id: `completion-title`,
                        children: (0, M.jsx)(N, {
                            text: `すべての問題に正解しました！`
                        })
                    }), (0, M.jsxs)(`p`, {
                        className: `result-panel__attempts`, children: [
                            (0, M.jsx)(`span`, { className: `result-panel__attempts-label`, children: (0, M.jsx)(N, { text: `合計挑戦回数：` }) }),
                            (0, M.jsx)(`strong`, { children: totalAttempts }),
                            (0, M.jsx)(N, { text: `回` })
                        ]
                    }), (0, M.jsxs)(`div`, {
                        className: `result-panel__actions`, children: [
                            (0, M.jsx)(`button`, {
                                type: `button`, onClick: () => {
                                    n({}), i({}), setShowConfetti(false), setShowResult(false);
                                    try {
                                        Sr({ solved: {}, attempts: {} });
                                    }
                                    catch {
                                    }
                                    h();
                                }, children: (0, M.jsx)(N, {
                                    text: `最初から挑戦する`
                                })
                            })
                        ]
                    })
                ]
            }) }), f && (0, M.jsx)(`div`, {
                className: `modal-backdrop`, onMouseDown: e => {
                    e.target === e.currentTarget && h();
                }, children: (0, M.jsxs)(`section`, {
                    className: `challenge-modal`, role: `dialog`, "aria-modal": `true`, "aria-labelledby": `challenge-title`, children: [
                        (0, M.jsxs)(`header`, {
                            className: `challenge-modal__header`, children: [
                                (0, M.jsxs)(`div`, {
                                    children: [
                                        (0, M.jsx)(`span`, {
                                            children: (0, M.jsx)(N, {
                                                text: f.type
                                            })
                                        }), (0, M.jsx)(`h2`, {
                                            id: `challenge-title`, children: (0, M.jsx)(N, {
                                                text: f.title
                                            })
                                        })
                                    ]
                                }), (0, M.jsx)(`button`, {
                                    ref: d, type: `button`, onClick: h, "aria-label": `問題を閉じる`, children: (0, M.jsx)(ur, {})
                                })
                            ]
                        }), (0, M.jsxs)(`div`, {
                            className: `challenge-modal__body`, children: [
                                (0, M.jsx)(`p`, {
                                    className: `challenge-modal__question`, children: (0, M.jsx)(N, {
                                        text: f.question
                                    })
                                }), (0, M.jsxs)(`details`, {
                                    className: `question-hint`, children: [
                                        (0, M.jsx)(`summary`, {
                                            children: `ヒント`
                                        }), (0, M.jsx)(`p`, {
                                            children: (0, M.jsx)(QuestionHintText, {
                                                question: f
                                            })
                                        })
                                    ]
                                }), (0, M.jsx)(`div`, {
                                    className: `modal-options`, role: f.multiple ? `group` : `radiogroup`, "aria-label": `回答の選択肢`, children: f.options.map((e, n) => (0, M.jsxs)(`label`, {
                                        className: `${s.includes(e) ? `is-selected` : ``} ${t[f.id] && (f.answers ?? (f.answer ? [
                                            f.answer
                                        ] : [])).includes(e) ? `is-answer` : ``}`, children: [
                                            (0, M.jsx)(`input`, {
                                                type: f.multiple ? `checkbox` : `radio`, name: f.id, value: e, "aria-label": e, checked: s.includes(e), disabled: !!t[f.id], onChange: () => {
                                                    c(t => f.multiple ? t.includes(e) ? t.filter(t => t !== e) : f.selectionCount && t.length >= f.selectionCount ? t : [
                                                        ...t, e
                                                    ] : [
                                                        e
                                                    ]), u(null);
                                                }
                                            }), (0, M.jsx)(`span`, {
                                                className: `option-number`, "aria-hidden": `true`, children: n + 1
                                            }), (0, M.jsx)(`span`, {
                                                children: (0, M.jsx)(N, {
                                                    text: e
                                                })
                                            }), t[f.id] && (f.answers ?? (f.answer ? [
                                                f.answer
                                            ] : [])).includes(e) && (0, M.jsx)($n, {
                                                className: `answer-check`, "aria-label": `正解`
                                            })
                                        ]
                                    }, e))
                                }), (0, M.jsxs)(`div`, {
                                    className: `modal-feedback`, "aria-live": `polite`, children: [
                                        l === `wrong` && (0, M.jsxs)(`div`, {
                                            className: `question-feedback is-wrong`, children: [
                                                (0, M.jsx)(`strong`, {
                                                    children: (0, M.jsx)(N, {
                                                        text: `不正解`
                                                    })
                                                }), (0, M.jsx)(`p`, {
                                                    children: (0, M.jsx)(N, {
                                                        text: `正解はまだ表示されません。投稿をもう一度確認してから再挑戦してください。`
                                                    })
                                                })
                                            ]
                                        }), l === `correct` && (0, M.jsxs)(`div`, {
                                            className: `question-feedback is-correct`, children: [
                                                (0, M.jsx)(`strong`, {
                                                    children: (0, M.jsx)(N, {
                                                        text: `正解`
                                                    })
                                                }), (0, M.jsx)(`p`, {
                                                    children: (0, M.jsx)(N, {
                                                        text: f.explanation
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }), (0, M.jsxs)(`footer`, {
                            className: `challenge-modal__footer`, children: [
                                (0, M.jsxs)(`span`, {
                                    children: [
                                        (0, M.jsx)(N, {
                                            text: `挑戦回数`
                                        }), `：`, r[f.id] ?? 0, (0, M.jsx)(N, {
                                            text: `回`
                                        })
                                    ]
                                }), t[f.id] ? (0, M.jsx)(`button`, {
                                    type: `button`, onClick: h, children: (0, M.jsx)(N, {
                                        text: `問題一覧へ戻る`
                                    })
                                }) : (0, M.jsx)(`button`, {
                                    type: `button`, onClick: () => {
                                        if (!f || !s.length || t[f.id])
                                            return;
                                        let e = f.answers ?? (f.answer ? [
                                            f.answer
                                        ] : []);
                                        i(e => ({
                                            ...e, [f.id]: (e[f.id] ?? 0) + 1
                                        })), s.length === e.length && s.every(t => e.includes(t)) ? (n(e => ({
                                            ...e, [f.id]: !0
                                        })), u(`correct`)) : u(`wrong`);
                                    }, disabled: f.multiple ? (f.selectionCount ? s.length !== f.selectionCount : s.length === 0) : s.length !== 1, children: (0, M.jsx)(N, {
                                        text: `この回答を送信する`
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function UnifiedWorkspace() {
    const [showGuide, setShowGuide] = (0, b.useState)(false);
    return (0, M.jsxs)(`div`, {
        className: `app app--unified`, children: [
            (0, M.jsx)(kr, { onOpenGuide: () => setShowGuide(true) }),
            (0, M.jsxs)(`main`, {
                className: `unified-workspace`, children: [
                    (0, M.jsx)(zr, {}),
                    (0, M.jsxs)(`aside`, {
                        className: `learning-pane`, "aria-label": `使い方と問題`, tabIndex: 0, children: [
                            (0, M.jsx)(`div`, { className: `desktop-guide`, children: (0, M.jsx)(Rr, {}) }),
                            (0, M.jsx)(Hr, {})
                        ]
                    })
                ]
            }),
            showGuide && (0, M.jsx)(GuideDialog, { onClose: () => setShowGuide(false) })
        ]
    });
}
function Ur() {
    return (0, M.jsxs)(`div`, {
        children: [
            (0, M.jsxs)(Vt, {
                children: [
                    (0, M.jsx)(zt, {
                        path: `/`, element: (0, M.jsx)(Rt, {
                            to: `/feed`, replace: !0
                        })
                    }), (0, M.jsx)(zt, {
                        path: `/feed`, element: (0, M.jsx)(UnifiedWorkspace, {})
                    }), (0, M.jsx)(zt, {
                        path: `/quiz`, element: (0, M.jsx)(Rt, { to: `/feed`, replace: true })
                    }), (0, M.jsx)(zt, {
                        path: `*`, element: (0, M.jsx)(Rt, {
                            to: `/feed`, replace: !0
                        })
                    })
                ]
            })
        ]
    });
}
Ln.createRoot(document.getElementById(`root`)).render((0, M.jsx)(b.StrictMode, {
    children: (0, M.jsx)(Tn, {
        children: (0, M.jsx)(Ur, {})
    })
}));
