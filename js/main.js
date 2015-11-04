(function (h) {
    //alert(h.innerWidth);
    var g = {
        color: {allTime: 30, addTime: 0, lvMap: [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10]},
        pic: {
            isOpen: !1,
            allTime: 5,
            addTime: 0,
            lvMap: [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10]
        }
    }, e = {
        imgUrl: "./img/share.png",
        title: "全民寻找单身狗",
        desc: "双十一不剁手,车果喊你来抓狗;动动手指,告别寂寞,圣诞有人陪你过!",
        link:"http:www.baidu.com"
    }, f = 0;
    !function () {
        var b = function (n) {

        };
        var a = $("#box"),
            music=document.getElementById("music"),
            c = {
            musicCtrl:$("#music-ctrl"),
            lv: $("#room .lv em"),
            d_lv:$("#dialog .point"),
            r_head:$("#room header"),
            time: $("#room .time em"),
            start: $("#dialog .btn-restart"),
            back: $("#dialog .btn-back"),
            share: $("#dialog .btn-share"),
            share_tip:$(".share-tip"),
            //pause: $("#room .btn-pause"),
            resume: $("#dialog .btn-resume"),
            dialog: $("#dialog"),
            d_content: $("#dialog .content"),
            //d_pause: $("#dialog .pause"),
            d_gameover: $("#dialog .gameover")
        }, k = {
            init: function (i, j, n) {
                this.type = i, this.api = API[i], this.config = g[i], this.reset(), this.parent = n, this.el = j, this.renderUI(), this.inited || this.initEvent(), this.inited = !0, this.start();
            },
            renderUI: function () {
                this.el.show();
            },
            initEvent: function () {
                c.musicCtrl.show();
                this.musicState();
                var i = "ontouchstart" in document.documentElement ? "touchend" : "click", j = this;
                $(h).resize(function () {
                    return;
                }), a.on(i, "span", function () {
                    var n = $(this).data("type");
                    "a" == n && j.nextLv.call(j);
                }),
                    c.resume.on(i, _.bind(this.resume, this)),
                    c.start.on(i, _.bind(this.restart, this)),
                    c.back.on(i, _.bind(this.back, this)),
                    c.share.on(i, _.bind(this.share, this)),
                    c.share_tip.on(i, _.bind(this.closeShare, this)),
                    c.musicCtrl.on(i, _.bind(this.musicCtrl,this));
            },
            musicState: function () {
                if(music.paused){
                    music.play();
                }else{
                    music.pause();
                }
            },
            musicCtrl: function () {
                if(music.paused){
                    music.play();
                }else{
                    music.pause();
                }
                c.musicCtrl.toggleClass("mediaControl_p");
            },
            start: function () {
                b(true);
                this.time > 10 && c.time.removeClass("danger"), c.dialog.hide(), this._pause = !1, this.lv = ("undefined" != typeof this.lv) ? (this.lv + 1) : 0, this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap), this.renderMap(), this.renderInfo(), this.timer || (this.timer = setInterval(_.bind(this.tick, this), 1000));
            },
            share: function () {
                c.share_tip.show();
            },
            closeShare:function(){
                c.share_tip.hide();
            },
            resume: function () {
                b(true);
                c.dialog.hide(), this._pause = !1;
            },
            pause: function () {
                this._pause = !0, c.d_content.hide(), //c.d_pause.show(),
                    c.dialog.show();
                b();
            },
            tick: function () {
                return this._pause ? void 0 : (this.time--, this.time < 10 && c.time.addClass("danger"), this.time < 0 ? void this.gameOver() : void c.time.text(parseInt(this.time)));
            },
            renderMap: function () {
                if (!this._pause) {
                    var j = this.lvMap * this.lvMap, n = "", i = "lv" + this.lvMap;
                    _(j).times(function () {
                        n += "<span></span>";
                    }), a.attr("class", i).html(n), this.api.render(this.lvMap, this.lv);
                }
            },
            renderInfo: function () {
                c.lv.text(this.lv);
                c.d_lv.text(this.lv);
            },
            gameOver: function () {
                c.musicCtrl.hide();
                console.log('xx');
                if(!music.paused){
                    music.pause();
                }
                a.find("span").fadeOut(1000, function () {
                    c.dialog.fadeIn();
                    $("#room").hide();
                }), this._pause = !0, this.reset();
            },
            reset: function () {
                this.time = this.config.allTime, this.lv = -1;
            },
            restart: function () {
                $("#dialog").hide();
                $("#room").hide();
                $("#index").show();
            },
            nextLv: function () {
                this.time += this.config.addTime, c.time.text(parseInt(this.time)), this._pause || this.start();
            },
            back: function () {
                this._pause = !0, this.el.hide(), c.dialog.hide(), this.parent.render();
            }
        };
        h.Game = k;
    }(), function (a) {
        var b = {
            index: $("#index"),
            room: $("#room"),
            loading: $("#loading"),
            dialog: $("#dialog"),
            play: $(".play-btn"),
            playsemo: $(".playsemo-btn"),
            musicCtrl:$("#music-ctrl")
        }, c = {
            init: function () {
                this.initEvent(), this.loading();
            },
            loading: function () {
                function o() {
                    s++, s == r && c.render();
                }
                if (g.pic.isOpen) {
                    for (var q = ["../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg", "../img/wxShare2.jpg"], r = q.length, s = 0, t = 0;
                         r > t; t++) {
                        var d = new Image;
                        d.onload = o, d.src = q[t];
                    }
                } else {
                    c.render();
                }
            },
            render: function () {
                b.loading.hide(), b.index.show();
            },
            initEvent: function () {
                var j = "ontouchstart" in document.documentElement ? "touchstart" : "click", d = this;
                b.play.on(j, function () {
                    f = 10;
                    var i = $(this).data("type") || "color";
                    b.index.hide(), Game.init(i, b.room, d);
                    b.musicCtrl.show();
                });
                b.playsemo.on(j, function () {
                    f = -1;
                    var i = $(this).data("type") || "color";
                    b.index.hide(), Game.init(i, b.room, d);
                });
            }
        };
        c.init(), a.API = {};
    }(h), function () {
        var l = $("#box"),
            a = "span",
            pic=["img/cgw.png","img/cgw1.png","img/cgw2.png"],
            c = $("#help_color"),
            d = {
            render: function (j, r) {
                this.lv = r;
                c.show();
                var s = g.color.lvMap[r] || _.last(g.color.lvMap);
                this.d = 15 * Math.max(10 - s, 1), this.d = r > 20 ? 10 : this.d, this.d = r > 40 ? 8 : this.d, this.d = r > 50 ? 6 : this.d, this.d = r > 60 ? 5 : this.d, this.d = r > 70 ? 4 : this.d;
                var t = Math.floor(Math.random() * j * j),
                    q = this.getColor(255 - this.d),
                    i = this.getLvColor(q[0]);
                var picI;
                for(var i=0;i<$("#box span").length;i++){
                    picI=Math.round(Math.random()*2);
                    l.find(a).eq(i).css({
                        "background": "url("+pic[picI]+")",
                        "background-size":"contain",
                        "background-color": q[1]
                    }).data("type", "b");
                }
                l.find(a).eq(t).data("type", "a").css({
                    "background-image": "url(img/dog.png)",
                    "background-color": c[1]
                });


            },
            getColor: function (j) {
                var n = [Math.round(Math.random() * j), Math.round(Math.random() * j), Math.round(Math.random() * j)], i = "rgb(" + n.join(",") + ")";
                return [n, i];
            },
            getLvColor: function (j) {
                var o = this.d, p = _.map(j, function (m) {
                    return m + o + f;
                }), i = "rgb(" + p.join(",") + ")";
                return [p, i];
            },
            getGameOverText: function (i) {
                var j = 15 > i ? 0 : Math.ceil((i - 15) / 5),
                    q = "",
                    r = 2 * i;
                return  {txt: q};
            }
        };
        API.color = d;

    }();
}(window));