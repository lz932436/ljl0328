! function(n) {
	var e = {};

	function r(t) {
		if(e[t]) return e[t].exports;
		var i = e[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return n[t].call(i.exports, i, i.exports, r), i.l = !0, i.exports
	}
	r.m = n, r.c = e, r.d = function(t, i, n) {
		r.o(t, i) || Object.defineProperty(t, i, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, r.t = function(i, t) {
		if(1 & t && (i = r(i)), 8 & t) return i;
		if(4 & t && "object" == typeof i && i && i.__esModule) return i;
		var n = Object.create(null);
		if(r.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: i
			}), 2 & t && "string" != typeof i)
			for(var e in i) r.d(n, e, function(t) {
				return i[t]
			}.bind(null, e));
		return n
	}, r.n = function(t) {
		var i = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return r.d(i, "a", i), i
	}, r.o = function(t, i) {
		return Object.prototype.hasOwnProperty.call(t, i)
	}, r.p = "", r(r.s = 22)
}([function(t, i) {
	t.exports = {
		e: Object.prototype.hasOwnProperty,
		a: function(t, i) {
			for(var n = t, e = i.split("."); e.length;) {
				if(n === undefined || null === n) return undefined;
				n = n[e.shift()]
			}
			return n
		},
		u: function(t) {
			if("object" != typeof t) return "";
			var i = [];
			for(var n in t) this.e.call(t, n) && i.push(n + "=" + encodeURIComponent(t[n]));
			return i.join("&")
		},
		h: function(t) {
			for(var i = {}, n = "Array Boolean Date Error Function Number RegExp String".split(" "), e = 0, r = n.length; e < r; e++) i["[object " + n[e] + "]"] = n[e].toLowerCase();
			return null == t ? "null" : i[Object.prototype.toString.call(t)] || "object"
		},
		f: function(t) {
			for(var i in t) return !1;
			return !0
		},
		v: function(t, r) {
			return t.replace(/{(.*?)}/g, function(t, i, n, e) {
				return r[i] || ""
			})
		},
		_: function(t) {
			var i = {
				'"': "&quot;",
				">": "&gt;",
				"<": "&lt;",
				"&": "&amp;"
			};
			return t.replace(/["<>&]/g, function(t) {
				return i[t]
			})
		},
		w: function(t, r) {
			var o = this;
			return t.replace(/\{(\w+):(\w+)\}/g, function(t, i, n) {
				var e = r[i];
				switch(n) {
					case "number":
						e = +e || 0;
						break;
					case "boolean":
						e = !!e;
						break;
					case "html":
						e = o._(e)
				}
				return e
			})
		},
		y: function(t) {
			var i = "";
			return window.JSON && window.JSON.parse && (i = window.JSON.parse(t)), i
		},
		b: function(t) {
			var i = "";
			try {
				i = window.JSON && window.JSON.stringify ? window.JSON.stringify(t) : window.eval(t)
			} catch(n) {}
			return i
		},
		I: function(t) {
			return t.replace(/(^\s*)|(\s*$)/g, "")
		},
		S: function(t) {
			for(var i = [], n = {}, e = t.length, r = 0; r < e; r++) {
				var o = t[r];
				n[o] || (n[i[i.length] = o] = !0)
			}
			return i
		},
		A: function(t) {
			return "[object Array]" == Object.prototype.toString.call(t)
		},
		k: function(t) {
			return "[object Function]" == Object.prototype.toString.call(t)
		},
		D: function(t) {
			var i, n = Object.prototype.hasOwnProperty;
			if(!(t && "[object Object]" === Object.prototype.toString.call(t) && "isPrototypeOf" in t)) return !1;
			if(t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1;
			for(i in t);
			return i === undefined || n.call(t, i)
		},
		x: function(t) {
			var i, n, e = t;
			if(!t || t instanceof Number || t instanceof String || t instanceof Boolean) return e;
			if(this.A(t)) {
				e = [];
				var r = 0;
				for(i = 0, n = t.length; i < n; i++) e[r++] = this.x(t[i])
			} else if(this.D(t))
				for(i in e = {}, t) t.hasOwnProperty(i) && (e[i] = this.x(t[i]));
			return e
		},
		C: function(t, i) {
			var n = Array.prototype.slice.apply(arguments),
				e = n.shift(),
				r = "function" == typeof this ? this : n.shift();
			return function() {
				var t = Array.prototype.slice.apply(arguments);
				return r.apply(e, t.concat(n))
			}
		}
	}
}, function(t, i, n) {
	var r = n(0),
		u = n(4);
	t.exports = {
		g: function(t, i) {
			return t ? "string" === r.h(t) && 0 < t.length ? (i = i || window).document.getElementById(t) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t : null
		},
		U: function(t) {
			return 9 === t.nodeType ? t : t.ownerDocument || t.document
		},
		P: function(t) {
			var i = this.U(t);
			return i.parentWindow || i.defaultView || null
		},
		T: function(t) {
			try {
				if(t && "object" == typeof t && t.document && "setInterval" in t) return !0
			} catch(i) {
				return !1
			}
			return !1
		},
		O: function(t, i) {
			return(t = t || window) != window.top && t != t.parent || !this.T(t)
		},
		R: function(t) {
			try {
				return !!t.parent.location.toString()
			} catch(i) {
				return !1
			}
		},
		B: function(t, i) {
			i = 2 === arguments.length ? i : t.parent;
			for(var n = 0; n++ < 10 && this.O(t, i);) {
				if(!this.R(t)) return !0;
				t = t.parent
			}
			return 10 <= n
		},
		M: function(t, i, s) {
			var c = (s = s || this.win || window).document;
			i = i || 0, this.domReadyMonitorRunTimes = 0, this.readyFuncArray = this.readyFuncArray || [], this.readyFuncArray.push({
				func: t,
				delay: i,
				done: !1
			});
			var n = r.C(this, function() {
					var t = !1;
					this.domReadyMonitorRunTimes++;
					var i = !1;
					try {
						s.frameElement && (i = !0)
					} catch(o) {
						i = !0
					}
					if(u.ie && u.ie < 9 && !i) try {
							c.documentElement.doScroll("left"), t = !0
						} catch(o) {} else if("complete" === c.readyState || this.domContentLoaded) t = !0;
						else if(3e5 < this.domReadyMonitorRunTimes) return void(this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null));
					if(t) try {
						if(this.readyFuncArray && this.readyFuncArray.length)
							for(var n = 0, e = this.readyFuncArray.length; n < e; n++) {
								var r = this.readyFuncArray[n];
								r && r.func && !r.done && (r.delay ? (r.done = !0, s.setTimeout(r.func, r.delay)) : (r.done = !0, r.func()))
							}
					} catch(a) {
						throw a
					} finally {
						this.domReadyMonitorId && (s.clearInterval(this.domReadyMonitorId), this.domReadyMonitorId = null)
					}
				}, this),
				e = r.C(this, function() {
					this.domContentLoaded = !0, n()
				});
			this.domReadyMonitorId || (this.domReadyMonitorId = s.setInterval(n, 50), c.addEventListener ? (c.addEventListener("DOMContentLoaded", e, !1), s.addEventListener("load", e, !1)) : c.attachEvent && s.attachEvent("onload", e, !1))
		},
		L: function(t, i, n) {
			return "string" == typeof t && (t = this.g(t)), i = i.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(i, n, !1) : t.attachEvent && t.attachEvent("on" + i, n), t
		},
		F: function(t, i, n) {
			return "string" == typeof t && (t = this.g(t)), i = i.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(i, n, !1) : t.attachEvent && t.detachEvent("on" + i, n), t
		},
		j: function(t, i) {
			1 === arguments.length && "number" === r.h(t) && (i = t, t = undefined), i = i || 10;
			for(var n = window, e = 0; e++ < i && this.O(n) && !this.B(n) && (!t || !t(n));) n = n.parent;
			return n
		},
		N: function(t) {
			var i = this.T(t) ? t.document : this.U(t);
			return "CSS1Compat" === i.compatMode ? i.documentElement : i.body
		},
		H: function(t) {
			var i = document.createElement("script");
			i.type = "text/javascript", i.async = !0, i.src = t;
			var n = document.getElementsByTagName("script")[0];
			n.parentNode && n.parentNode.insertBefore(i, n)
		},
		W: function(t) {
			switch(t.nodeName.toLowerCase()) {
				case "a":
				case "script":
				case "iframe":
				case "br":
				case "title":
				case "option":
				case "button":
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6":
					return !1;
				default:
					return !0
			}
		},
		z: function(t, i, n) {
			try {
				!t.attachEvent || t.attachEvent.toString && t.attachEvent.toString().indexOf("[native code") < 0 || u.opera ? (this.L(t, "error", n), this.L(t, "load", i)) : this.L(t, "readystatechange", function(t, i, n) {
					var e = (t.currentTarget || t.srcElement).readyState;
					"complete" !== e && "loaded" !== e || i(t)
				}, i, n)
			} catch(o) {
				var e = o && o.stack ? o.stack : o,
					r = "//eclick.baidu.com/se.jpg?type=fatalError&key=loadScriptError&mes=" + encodeURIComponent(e) + "&version=newDup&rdm=" + Math.random();
				(new Image).src = r
			}
		}
	}
}, function(t, i) {
	var n = "http:" === document.location.protocol ? "http:" : "https:";
	t.exports = {
		V: "BAIDU_SSP_",
		q: "___baidu_union_callback",
		J: n,
		G: "___adblockplus_",
		X: "BAIDU_SSP_lcr",
		K: "//pos.baidu.com/",
		Y: "",
		$: "pos.baidu.com",
		Q: "HTML_POST",
		Z: "SSP_JSONP",
		it: "STATIC_JSONP",
		nt: "//eclick.baidu.com/se.jpg",
		et: "//eclick.baidu.com/aoc.jpg",
		rt: "//pos.baidu.com/bfp/snippetcacher.php?",
		ot: 1,
		at: 2,
		st: 4,
		ct: 8,
		ut: 16,
		ht: !1,
		ft: !1,
		dt: "118015",
		lt: "",
		vt: "118005",
		pt: "111003",
		_t: 100,
		wt: !1,
		mt: "pageSearchId",
		gt: "0",
		yt: "AUTO_JSONP",
		bt: 4,
		It: "auto_dup",
		St: "fatalError",
		At: "BAIDU_DUP2_pageFirstRequestTime",
		kt: "DUP_DEBUG_FLAG",
		Dt: "https://dup.baidustatic.com/dup/painter/"
	}
}, function(t, i, n) {
	var u = n(2),
		o = n(12),
		_ = n(1),
		a = n(8),
		s = n(0),
		w = n(7),
		c = n(4),
		h = n(17),
		e = n(15),
		r = n(20),
		f = n(5);
	f.xt = f.xt || {};
	var d = f.xt,
		l = f.counter || {};
	l.slotTotalCount = l.slotTotalCount || 1, l.slotCountIndex = l.slotCountIndex || {}, t.exports = {
		Ct: function(t) {
			return d[t]
		},
		Ut: function(t) {
			for(var i in d)
				if(d.hasOwnProperty(i) && -1 < i.indexOf(t)) return d[i];
			return {}
		},
		Pt: function(t) {
			var i = "" + t.slotId;
			l.slotCountIndex[i] = l.slotCountIndex[i] || 0;
			var n = {};
			return n.index = l.slotCountIndex[i], n.count = 0 === i.indexOf("u") ? l.slotTotalCount : 0, n.id = i + "_" + n.index, n.containerId = u.V + "_wrapper_" + i + "_" + n.index, n.slotId = t.slotId, n.productLine = t.productLine, n.errors = [], l.slotCountIndex[i] = l.slotCountIndex[i] + 1, i !== u.gt && (l.slotTotalCount = l.slotTotalCount + 1), n.isAsync = t.isAsync, n.timestampWatcher = f.startTime ? {
				t1: f.startTime
			} : {
				t1: 0
			}, t.coa && "object" == typeof t.coa ? n.styleOpenApi = t.coa : window.cproStyleApi ? n.styleOpenApi = window.cproStyleApi[i] || {} : n.styleOpenApi = {}, n.isUnion = 0 === i.indexOf("u"), n.width = 0, n.height = 0, n
		},
		processSlot: function(t) {
			var i = t.response.rtb_deliv,
				n = t.response.order_deliv,
				e = t.response.pdb_deliv,
				r = i.deliv_id = parseInt(i.deliv_id, 10),
				o = i.demand_id = parseInt(i.demand_id, 10),
				a = n.deliv_id = parseInt(n.deliv_id, 10),
				s = n.demand_id = parseInt(n.demand_id, 10),
				c = e.deliv_id = parseInt(e.deliv_id, 10);
			e.demand_id = parseInt(e.demand_id, 10);
			var u = t.response.placement || {};
			t.containerInfo = u.container || {}, t.complementType = u.complement_type, t.isPdbAd = !(r || o || a || s), t.isNeedCacheRequest = 0 !== r && 7 === t.complementType || 0 !== a || 0 !== r && 0 !== c
		},
		Tt: function(t, i) {
			var n = "115313";
			6 < n.length && (n = ""), i && n && (t.exps = e.Ot(t.exps, n)), d[t.id] = t
		},
		Et: function(t, i) {
			t.status = t.status ^ i
		},
		Rt: function(t, i) {
			return 0 < (t.status & i)
		},
		Bt: function(t, i) {
			var n = this.Ct(t);
			n && (n.status |= i)
		},
		Mt: function() {
			var t = d;
			for(var i in t)
				if(i && t[i] && t.hasOwnProperty(i)) {
					var n = t[i];
					if(n.status >= u.at) continue;
					this.Lt(n), this.Ft(n)
				}
		},
		Ft: function(t) {
			!u.wt && window.postMessage && (u.wt = !0, _.L(window, "message", s.C(this, this.jt)));
			var i, n = t.isUnion || t.isAsync;
			t.paramObj = o.Nt(t);
			var e = o.Ht(t.paramObj),
				r = u.Y + e;
			t.paramObj.dtm = u.Q, t.timestampWatcher.t2 = +new Date, (i = this.Wt(t)) ? window[u.G](i) : this.zt(r, n), this.Bt(t.id, u.at)
		},
		jt: function(t) {
			var i = t.data;
			if("string" == typeof i && window.JSON && window.JSON.parse) try {
				i = JSON.parse(i)
			} catch(n) {}
			i && i.tuid && (i.placement && i.placement.update && i.queryid ? (this.Vt(i), -1 < i.tuid.indexOf("u") && i.noadx && parseInt(i.noadx, 10) && 3 !== parseInt(i.noadx, 10) && this.qt(i), i.placement.basic && 2 === i.placement.basic.flowType && r.Jt(i.queryid)) : 1 === i.type && this.Gt(t, i))
		},
		Gt: function(t, i) {
			var n = t.origin || t.originalEvent.origin,
				e = n && n.split("//")[1],
				r = i.tuid,
				o = i.msg,
				a = this.Ut(r),
				s = a && a.response,
				c = s && s.placement && s.placement.basic && s.placement.basic.publisherDomain && s.placement.basic.publisherDomain.pos;
			!a || e !== u.$ && e !== c || "click" !== o || this.Xt(a)
		},
		Vt: function(t) {
			var i, n = t.placement.update,
				e = h.Kt(t.tuid);
			e && (i = s.y(e), h.Yt() && window.JSON && window.JSON.stringify && i && i.placement && i.placement.update && i.placement.update !== n && (t.adExpire = (new Date).getTime(), h.$t(t.tuid, JSON.stringify(t))))
		},
		Wt: function(t) {
			try {
				if(c.ie && c.ie < 9 || !h.Yt() || t.isAutoAd) return !1;
				var i = h.Kt(t.id);
				return !!i && s.y(i)
			} catch(r) {
				var n = encodeURIComponent(r),
					e = {
						type: "elog",
						pos: "localAdInfo",
						id: t.id,
						mes: n,
						exps: u.lt
					};
				a.Qt(e)
			}
		},
		Zt: function(t) {
			try {
				var i = t.response,
					n = t.id;
				n && !t.isPdbAd && t.isUnion && !t.isAutoAd && window.JSON && window.JSON.stringify && h.Yt() && !h.Kt(n) && (i.adExpire = (new Date).getTime(), h.$t(n, JSON.stringify(i)))
			} catch(e) {}
		},
		Lt: function(t) {
			_.g(t.containerId) || (t.isAsync ? "union" === t.productLine && (t.containerId = "cpro_" + t.slotId) : (document.write('<div id="' + t.containerId + '"></div>'), _.g(t.containerId) || this.ti(t))), this.Bt(t.id, u.ot)
		},
		ti: function(t) {
			try {
				var i = document.getElementsByTagName("script"),
					n = i[i.length - 1];
				if(n) {
					var e = n.parentNode;
					if(e) {
						var r = document.createElement("div");
						return r.id = t.containerId, e.insertBefore(r, n), !0
					}
				}
			} catch(o) {}
			return !1
		},
		zt: function(t, i) {
			if(i) {
				var n = document.createElement("script");
				if(!n) return;
				n.type = "text/javascript", n.async = !0, n.src = t;
				var e = document.getElementsByTagName("script")[0];
				e && e.parentNode ? e.parentNode.insertBefore(n, e) : document.write('<script charset="utf-8" src="' + t + '"><\/script>')
			} else document.write('<script charset="utf-8" src="' + t + '"><\/script>')
		},
		ii: function(t) {
			var i = t.response,
				n = i.pdb_deliv,
				e = i.rtb_deliv,
				r = i.order_deliv;
			return !(!t.isUnion && 7 === t.complementType && 0 === n.deliv_id && 0 === e.deliv_id && 0 === r.deliv_id)
		},
		qt: function(t) {
			var i = this.Ut(t.tuid);
			i && 7 === i.complementType && this.Xt(i)
		},
		Xt: function(t) {
			var i = _.g(t.containerId);
			i && (i.parentNode.removeChild(i), n(10).unregisetViewWatch(t))
		},
		processSlotInfo: function(t) {
			var i = this.ni(t),
				n = t.response.placement.basic;
			return i.cname = n.cname, i
		},
		ni: function(t) {
			var i = t.response.placement,
				n = t.response["extends"] || {},
				e = _.g(t.containerId),
				r = i.container,
				o = t.styleOpenApi,
				a = r.width,
				s = r.height,
				c = o.cpro_w || o.rsi0 || 0,
				u = o.cpro_h || o.rsi1 || 0,
				h = r.sizeType;
			if(5 !== h && !t.isUnion && n && n.hasOwnProperty("sspw") && n.hasOwnProperty("ssph")) {
				var f = parseInt(n.sspw || 0, 10),
					d = parseInt(n.ssph || 0, 10),
					l = parseInt(n.cbsz || 0, 10);
				h = 0 < l ? l : h, a = 0 < f ? f : a, s = 0 < d ? d : s
			}
			if(o.scale) {
				h = 2;
				var v = o.scale.split(".") || [];
				a = v[0], s = v[1]
			}(c || u) && (h = 1, a = c || w.ei(), s = u || s), ("-1" === t.pcwd || t.ftpc || t.styleOpenApi.cpro_ftpc) && (h = "-1" === t.pcwd && "-1" === t.pchd ? 8 : 5), o.sizeType && (h = o.sizeType && parseInt(o.sizeType, 10) || h, a = o.width && parseInt(o.width, 10) || a, s = o.height && parseInt(o.height, 10) || s), 2 !== o.apType && 3 !== o.apType || (r.location = o.apType);
			var p = 0;
			switch(h) {
				case 1:
					break;
				case 2:
					a = t.pcwd || a, s = t.pchd || s, a && s && (p = s / a), a = w.ei(), s = Math.ceil(a * p);
					break;
				case 3:
					a = w.ei();
					break;
				case 5:
					a && s && (p = s / a), a = w.ri(e.parentElement), s = Math.ceil(a * p);
					break;
				case 6:
					a = w.ri(e.parentElement);
					break;
				case 7:
					s = w.oi(e.parentElement);
					break;
				case 8:
					a = w.ri(e.parentElement), s = w.oi(e.parentElement)
			}
			return {
				width: t.width = a,
				height: t.height = s,
				sizeType: h
			}
		}
	}
}, function(t, i, n) {
	var s = n(0),
		c = window,
		u = window.navigator;
	var e = {
		ai: function() {
			var t = navigator.userAgent,
				i = window.RegExp;
			this.antBrowser = !1, /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +i.$1), /opera\/(\d+\.\d)/i.test(t) && (this.opera = +i.$1), /firefox\/(\d+\.\d)/i.test(t) && (this.firefox = +i.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(t) && !/chrome/i.test(t) && (this.safari = +(i.$1 || i.$2)), /chrome\/(\d+\.\d)/i.test(t) && (this.chrome = +i.$1, function o() {
				try {
					return "scoped" in document.createElement("style")
				} catch(t) {
					return !1
				}
			}() && (this.qihoo = !0)), /qqbrowser\/(\d+\.\d)/i.test(t) && (this.tencent = !0), (/ucbrowser\/(\d+\.\d)/i.test(t) || /ubrowser\/(\d+\.\d)/i.test(t)) && (this.uc = !0), /miuibrowser\/(\d+\.\d)/i.test(t) && (this.xiaomi = !0), /vivobrowser\/(\d+\.\d)/i.test(t) && (this.vivo = !0), /oppobrowser\/(\d+\.\d)/i.test(t) && (this.oppo = !0), /baiduboxapp\/([\d.]+)/.test(t) && (this.baiduboxapp = !0);
			try {
				/(\d+\.\d)/.test(s.a(window, "external.max_version")) && (this.maxthon = +i.$1)
			} catch(a) {}(this.tencent || this.uc || this.xiaomi || this.vivo || this.oppo) && (this.antBrowser = !0), this.isWebkit = /webkit/i.test(t), this.isGecko = /gecko/i.test(t) && !/like gecko/i.test(t);
			for(var n = ["Android", "iPad", "iPod", "iPhone", "iOS", "Linux", "Macintosh", "Windows"], e = "", r = 0; r < n.length; r++)
				if(e = n[r], t.match(new RegExp(e, "i"))) {
					"iPad" === e || "iPhone" === e || "iOS" === e || "iPod" === e ? this.isIOS = !0 : "Android" === e && (this.isAndroid = !0);
					break
				}
			this.platform = e
		},
		si: function() {
			var t = 0;
			try {
				var i = "https:" === document.location.protocol;
				if(45 <= this.chrome || i) return 0;
				if(u.plugins && u.mimeTypes.length) {
					var n = u.plugins["Shockwave Flash"];
					n && n.description && (t = n.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
				}
				if(0 === t && (c.ActiveXObject || c.hasOwnProperty("ActiveXObject")))
					for(var e = 30; 2 <= e; e--) try {
						var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + e);
						if(r) {
							var o = r.GetVariable("$version");
							if(0 < (t = o.replace(/WIN/g, "").replace(/,/g, "."))) break
						}
					} catch(a) {}
				t = parseInt(t, 10), this.si = function() {
					return t
				}
			} catch(s) {
				t = 0
			}
			return t
		}
	};
	e.ai(), t.exports = e
}, function(t, i) {
	var n = "___delivery___global___counter___";
	if(window._SF_ && window._SF_._global_ && window._SF_._global_._ssp && !window.___baidu_union) {
		var e = window._SF_._global_._ssp;
		e.DUP_4_SF = !0, e.destroy = function() {
			try {
				window.top[n] = {}
			} catch(t) {
				window[n] = {}
			}
		}, window.___baidu_union = e
	}
	var r = window.___baidu_union = window.___baidu_union || {};
	try {
		r.counter = window.top[n] = window.top[n] || {}
	} catch(o) {
		r.counter = window[n] = window[n] || {}
	}
	r.startTime = (new Date).getTime(), t.exports = r
}, function(t, i, n) {
	var c = n(0),
		e = n(1),
		u = {},
		r = e.j(),
		h = r.BAIDU_SSP__info || (r.BAIDU_SSP__info = {});
	t.exports = {
		ci: function(t, i, n) {
			var e, r = n ? h : u;
			if("string" === c.h(t)) {
				for(var o = t.split("."), a = r; o.length;) {
					var s = o.shift();
					a[s] = o.length ? a[s] !== undefined ? a[s] : {} : i, a = a[s]
				}
				e = i
			}
			return e
		},
		ui: function(t, i) {
			var n = i ? h : u;
			switch(c.h(t)) {
				default: return !1;
				case "string":
						for(var e = t.split("."); e.length;) {
						var r = e.shift();
						if(!e.length || n[r] === undefined) return delete n[r], !0;
						n = n[r]
					}
			}
			return !1
		},
		hi: function(t, i) {
			var n, e = i ? h : u;
			return "string" === c.h(t) && (n = c.a(e, t)), n
		},
		fi: function(t) {
			var i = window,
				n = i[t];
			return i[t] = undefined, n
		},
		di: function(t, i, n) {
			var e = n || window;
			return e[t] ? e[t] : e[t] = i
		},
		li: function(t) {
			return !!t && (u = this.hi("pageConfig") || {})[t]
		},
		vi: function(t, i) {
			return !(!t || !i) && ((u = this.hi("pageConfig") || {})[t] = i, this.ci("pageConfig", u), !0)
		}
	}
}, function(t, i, n) {
	var h = n(1),
		a = n(0),
		s = n(4);
	t.exports = {
		pi: function(t) {
			t = t || window;
			try {
				var i = h.N(t).clientWidth;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		_i: function(t) {
			t = t || window;
			try {
				var i = h.N(t).clientHeight;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		wi: function(t) {
			var i = {
				top: 0,
				left: 0
			};
			if(t === h.N(t)) return i;
			var n = h.U(t),
				e = n.body,
				r = n.documentElement;
			if(e && t.getBoundingClientRect) {
				var o = t.getBoundingClientRect();
				i.left = Math.floor(o.left) + Math.max(r.scrollLeft, e.scrollLeft), i.top = Math.floor(o.top) + Math.max(r.scrollTop, e.scrollTop), i.left -= r.clientLeft, i.top -= r.clientTop;
				var a = this.mi(e, "borderLeftWidth"),
					s = this.mi(e, "borderTopWidth"),
					c = parseInt(a, 10),
					u = parseInt(s, 10);
				i.left -= isNaN(c) ? 2 : c, i.top -= isNaN(u) ? 2 : u
			}
			return i
		},
		mi: function(t, i) {
			if(!t) return "";
			var n = "";
			n = -1 < i.indexOf("-") ? i.replace(/[-][^-]{1}/g, function(t) {
				return t.charAt(1).toUpperCase()
			}) : i.replace(/[A-Z]{1}/g, function(t) {
				return "-" + t.charAt(0).toLowerCase()
			});
			var e, r = h.P(t);
			if(t.style[i] || t.style[n]) return t.style[i] || t.style[n];
			if(r && r.getComputedStyle) {
				if(e = r.getComputedStyle(t, null)) return e.getPropertyValue(i) || e.getPropertyValue(n)
			} else if(t.currentStyle) return(e = t.currentStyle)[i] || e[n];
			return ""
		},
		gi: function(t) {
			if(t) {
				var i = h.g(t);
				if(!i) return !1;
				var n = this.wi(i),
					e = h.P(i);
				if(!e) return n;
				try {
					for(var r = 0; e !== e.parent && r++ < 10 && !h.B(e) && e.frameElement;) {
						var o = this.wi(e.frameElement);
						n.left += o.left, n.top += o.top, e = e.parent
					}
				} catch(a) {}
				return n
			}
		},
		yi: function(t) {
			for(var i = t, n = h.P(i), e = 100; i && i.tagName;) {
				var r = 100;
				if(s.ie) {
					if(5 < s.ie) try {
						r = parseInt(a.a(i, "filters.alpha.opacity"), 10) || 100
					} catch(o) {}
					e = r < e ? r : e
				} else {
					try {
						r = 100 * (n.getComputedStyle(i, null).opacity || 1)
					} catch(o) {}
					e *= r / 100
				}
				i = i.parentNode
			}
			return 0 === e ? 0 : e || 100
		},
		bi: function(t) {
			var i = h.g(t),
				n = h.P(i),
				e = this.yi(i);
			try {
				for(var r = 0; r++ < 10 && h.O(n) && !h.B(n);) {
					e *= (n.frameElement ? this.yi(n.frameElement) : 100) / 100, n = n.parent
				}
			} catch(o) {}
			return e
		},
		Ii: function(t) {
			t = t || window;
			try {
				var i = h.N(t).scrollWidth;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		Si: function(t) {
			t = t || window;
			try {
				var i = h.N(t).scrollHeight;
				if(i || 0 === i) return i
			} catch(n) {}
			return -1
		},
		Ai: function(t) {
			var i = (t = t || window).document;
			return t.pageYOffset || i.documentElement.scrollTop || i.body.scrollTop
		},
		ki: function(t) {
			var i = t || window,
				n = h.N(i);
			return i.pageXOffset || n.scrollLeft
		},
		Di: function(t, i) {
			var n = h.g(t),
				e = n.offsetWidth;
			return i && (e += this.xi(n, "Left") + this.xi(n, "Right")), e
		},
		xi: function(t, i) {
			var n = this.mi(t, "margin" + i).toString().toLowerCase().replace("px", "").replace("auto", "0");
			return parseInt(n, 10) || 0
		},
		Ci: function(t, i) {
			var n = h.g(t),
				e = n.offsetHeight;
			return i && (e += this.xi(n, "Top") + this.xi(n, "Bottom")), e
		},
		Ui: function() {
			var t = !0;
			return s.ie && (s.ie < 7 || "BackCompat" === document.compatMode) && (t = !1), t
		},
		Pi: function(t, i, n) {
			h.g(t).style[i] = n
		},
		Ti: function(t, i) {
			for(var n in i) i.hasOwnProperty(n) && this.Pi(t, n, i[n]);
			return t
		},
		Oi: function(t, i) {
			return t.currentStyle ? t.currentStyle[i] : document.defaultView.getComputedStyle(t, !1)[i]
		},
		Ei: function(t) {
			return "none" !== this.Oi(t, "display") && "hidden" !== this.Oi(t, "visibility") && 100 === this.bi(t)
		},
		Ri: function(t, i) {
			var n = ["<div ", 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', "BAIDU_AD_", i, "<br>", t.clientWidth, "*", t.clientHeight, "</div>"].join(""),
				e = document.createElement("div");
			e.innerHTML = n;
			var r = t.style;
			r.border = "1px solid #ff0000", r.position = r.position || "relative", t.appendChild(e)
		},
		Bi: function(t) {
			for(var i = t, n = h.P(i); i && i.tagName;) {
				if(!("hidden" !== n.getComputedStyle(i, null).visibility)) return !1;
				i = i.parentNode
			}
			return !0
		},
		Mi: function(t) {
			var i = h.g(t),
				n = h.P(i),
				e = this.Bi(i);
			if(!e) return !1;
			try {
				for(var r = 0; r++ < 10 && h.O(n) && !h.B(n) && n.frameElement;) {
					if(!(e = this.Bi(n.frameElement))) return !1;
					n = n.parent
				}
			} catch(o) {}
			return !0
		},
		ei: function() {
			var t = Math.max(320, window.innerWidth);
			return t = isNaN(t) ? this.pi() : t
		},
		ri: function(t) {
			var i = parseInt(this.mi(t, "paddingLeft"), 10) || 0,
				n = parseInt(this.mi(t, "paddingRight"), 10) || 0,
				e = t.clientWidth - i - n;
			return e = 0 < e ? e : window.screen.width
		},
		oi: function(t) {
			var i = parseInt(this.mi(t, "paddingTop"), 10) || 0,
				n = parseInt(this.mi(t, "paddingBottom"), 10) || 0,
				e = t.clientHeight - i - n;
			return e = 0 < e ? e : 0
		}
	}
}, function(t, i, n) {
	var u = n(2),
		h = n(9);
	t.exports = {
		Qt: function(t) {
			var i, n = t.id ? t.id : "",
				e = t.async ? t.async : "",
				r = t.type ? t.type : "ssplog",
				o = t.pos ? t.pos : "",
				a = t.status ? t.status : "",
				s = t.mes ? encodeURIComponent(t.mes) : "",
				c = t.exps ? t.exps : "";
			i = "mip" === r ? u.et : u.nt, i += ["?type=" + r, "id=" + n, "pos=" + o, "status=" + a, "async=" + e, "mes=" + s, "exps=" + c, "from=ssp"].join("&"), h.Li(i)
		},
		Fi: function(t) {
			var i = t.response.pdb_deliv.deliv_des._html,
				n = i && i.monitorUrl;
			if(n) {
				var e = new Image,
					r = "log" + +new Date;
				window[r] = e, "http" === n.substr(0, 4).toLowerCase() ? ("http://" === n.substr(0, 7).toLowerCase() && (n = n.replace("http://", "//")), "https://" === n.substr(0, 8).toLowerCase() && (n = n.replace("https://", "//"))) : n = "//" + n;
				e.onload = e.onerror = e.onabort = function() {
					e.onload = e.onerror = e.onabort = null;
					try {
						delete window[r]
					} catch(t) {
						window[r] = undefined
					}
				}, e.src = n
			}
		}
	}
}, function(t, i, n) {
	var o = n(2),
		a = n(0),
		s = n(13),
		c = n(17),
		u = "BAIDU_DUP_log_storage";
	t.exports = {
		ji: function(t, i) {
			var n = new Image,
				e = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
			(window[e] = n).onload = n.onerror = n.onabort = function() {
				n.onload = n.onerror = n.onabort = null, window[e] = null, n = null, i && i(u, t, !0)
			}, n.src = t
		},
		Li: function(t) {
			var i = new Image,
				n = "baidu_dan_log_" + +new Date;
			(window[n] = i).onload = i.onerror = i.onabort = function() {
				try {
					delete window[n]
				} catch(t) {
					window[n] = undefined
				}
				i = null
			}, t += -1 < t.indexOf("?") ? "&" : "?", t += "stamp=" + Math.random(), i.src = t
		},
		Fi: function(t) {
			var i = (t = "object" === a.h(t) ? t : {}).url || o.nt,
				n = t.data || {},
				e = t.option || "now",
				r = a.u(n);
			switch(i += (0 <= i.indexOf("?") ? "&" : "?") + r + (r ? "&" : "") + "rdm=" + +new Date, e) {
				case "now":
					this.ji(i);
					break;
				case "block":
					break;
				case "unload":
				default:
					c.Ni(u, i, !0), s.L(window, "unload", a.C(this, function() {
						this.ji(i, a.C(c, c.Hi))
					}))
			}
		},
		Wi: function(t, i, n) {
			if(!t || !i) return "";
			var e = "//eclick.baidu.com/" + t + "?type=" + i;
			if(n)
				for(var r in n) n.hasOwnProperty(r) && (e += "&" + r + "=" + n[r]);
			this.Fi({
				url: e,
				option: "now"
			})
		},
		zi: function(t, i) {
			this.Wi("se.jpg", t, i)
		},
		Vi: function(t, i) {
			this.Wi("rs.jpg", t, i)
		}
	}
}, function(t, n, e) {
	var _ = e(1),
		w = e(7),
		s = e(4),
		c = e(9),
		r = e(0),
		u = 1,
		h = 2,
		f = 3,
		m = !0,
		g = window,
		d = 0,
		l = 0;
	t.exports = {
		qi: "//eclick.baidu.com/a.js",
		Ji: 72e5,
		Gi: {},
		Xi: null,
		Ki: null,
		Yi: 500,
		$i: !1,
		regisetViewWatch: function(t) {
			this.$i || (this.Qi(), this.$i = !0), this.Xi = this.Xi || [];
			var i = _.g(t.containerId);
			if(i) {
				var n = t.paramObj,
					e = t.width,
					r = t.height,
					o = t.response.queryid,
					a = t.containerInfo;
				e = a.width, r = a.height;
				var s = new Date,
					c = "" + t.slotId,
					u = {
						uid: t.id,
						slotId: c,
						domId: t.containerId,
						jk: o,
						word: n.ltu,
						iframeStatus: n.dis,
						aw: e,
						ah: r,
						viewContext: {
							opacity: 1,
							pageStayTime: 0,
							pageStayTimeStamp: s,
							inViewTime: 0,
							inViewTimeStamp: s,
							currViewStatus: !1,
							focusTime: 0,
							adViewTime: 0,
							currAdViewStatus: !1,
							adViewTimeStamp: s
						}
					};
				if(window.postMessage && u.slotId && -1 < u.slotId.indexOf("u")) {
					u.sendMessage = function() {
						if(this.watchIframeWindow && this.watchIframeLoaded && this.viewContext && this.viewContext.lastAdViewStatus !== this.viewContext.currAdViewStatus) try {
							var t = this.analysisUrl && this.analysisUrl.split("?"),
								i = t ? t[1] : "";
							this.watchIframeWindow.postMessage(i, this.targetOrigin)
						} catch(n) {}
					};
					var h = i.getElementsByTagName("iframe");
					if(h && h.length) {
						var f = h[0];
						u.watchIframe = f, u.targetOrigin = f.getAttribute("src") || "*";
						try {
							u.watchIframeWindow = f.contentWindow
						} catch(d) {
							u.watchIframeWindow = ""
						}
						u.viewContext.lastAdViewStatus = !1, u.viewContext.lastViewStatus = !1, _.L(u.watchIframe, "load", function() {
							u.watchIframeLoaded = !0, u.viewContext.lastAdViewStatus = !u.viewContext.currAdViewStatus, u.sendMessage()
						})
					}
				}
				this.Zi(u, i), this.Xi.push(u)
			}
		},
		unregisetViewWatch: function(t) {
			if(this.Xi)
				for(var i = t.containerId, n = 0; n < this.Xi.length; n++) {
					if(this.Xi[n].domId == i) return void this.Xi.splice(n, 1)
				}
		},
		"in": function(t, i) {
			if(t && i) {
				var n = t + "?",
					e = i.viewContext;
				e.inViewTime > this.Ji && (e.inViewTime = this.Ji), e.adViewTime > this.Ji && (e.adViewTime = this.Ji), e.pageStayTime >= this.Ji && (e.pageStayTime = this.Ji);
				var r = [];
				return r.push("tu=" + i.slotId), r.push("op=" + e.opacity), r.push("jk=" + i.jk), r.push("word=" + i.word), r.push("if=" + i.iframeStatus), r.push("aw=" + i.aw), r.push("ah=" + i.ah), r.push("pt=" + e.pageStayTime), r.push("it=" + e.inViewTime), r.push("vt=" + e.adViewTime), r.push("csp=" + i.desktopResolution), r.push("bcl=" + i.browserRegion), r.push("pof=" + i.pageRegion), r.push("top=" + i.top), r.push("left=" + i.left), r.push("uid=" + i.uid), r.push("iw=" + e.currAdViewStatus), n + r.join("&")
			}
		},
		Qi: function() {
			this.nn(), _.M(r.C(this, this.en), 2e3), s.platform && (-1 < s.platform.indexOf("Android") || -1 < s.platform.indexOf("Phone") || -1 < s.platform.indexOf("iPod")) || _.L(g, "beforeunload", r.C(this, this.rn))
		},
		Zi: function(t, i) {
			var n = w.gi(i);
			t.left = n.left || 0, t.top = n.top || 0;
			var e = window.screen.availWidth,
				r = window.screen.availHeight;
			1e4 < e && (e = 0), 1e4 < r && (r = 0), t.desktopResolution = e + "," + r, t.browserRegion = w.pi(window) + "," + w._i(window), t.pageRegion = w.Ii(window) + "," + w.Si(window)
		},
		on: function(t, i) {
			var n, e, r, o = i.isInView,
				a = i.isAdView,
				s = new Date;
			return n = e = r = this.Yi, t.lastViewStatus = t.currViewStatus, t.lastAdViewStatus = t.currAdViewStatus, l === u && (l = h, n = e = 0, r = e = 0), t.currViewStatus ? (l === u && ((n = parseInt(s.getTime() - t.inViewTimeStamp.getTime(), 10)) < 0 ? n = 0 : n > this.Yi && (n = this.Yi)), t.inViewTime += n, t.inViewTimeStamp = s) : o && (t.inViewTimeStamp = s), t.currViewStatus = o, t.currAdViewStatus ? (l === f && ((r = parseInt(s.getTime() - t.adViewTimeStamp.getTime(), 10)) < 0 ? r = 0 : r > this.Yi && (r = this.Yi)), t.adViewTime += r, t.adViewTimeStamp = s) : a && (t.adViewTimeStamp = s), t.currAdViewStatus = a, t.pageStayTime = t.pageStayTime || 0, d = d || 0, l === f && (this.pageTimeSpan = parseInt(s.getTime() - t.pageStayTimeStamp.getTime(), 10), e < 0 ? e = 0 : e > this.Yi && (e = this.Yi)), t.pageStayTime += e, d += e, m && (t.focusTime += e), t.pageStayTimeStamp = s, t.opacity = i.opacity, t
		},
		an: function(t) {
			var i = t.domId,
				n = _.g(i);
			if(!n) return {
				isInView: !1,
				isAdView: !1,
				opacity: 1
			};
			var e = !1,
				r = !1,
				o = 1;
			if(m) try {
				if(o = this.bi(t), this.sn(n)) {
					var a = w.pi(g),
						s = w._i(g),
						c = this.gi(n),
						u = w.Di(n),
						h = w.Ci(n);
					e = 0 <= c.top && c.bottom <= s && 0 <= c.left && c.left <= a;
					var f = 0 < c.top ? c.top : 0,
						d = c.bottom > s ? s : c.bottom,
						l = 0 < c.left ? c.left : 0,
						v = c.right > a ? a : c.right;
					if(f < d && l < v) r = .5 * (u * h) < (d - f) * (v - l)
				} else r = e = !1
			} catch(p) {}
			return {
				isInView: e,
				isAdView: r,
				opacity: o
			}
		},
		sn: function(t) {
			return !!t && (50 <= w.bi(t) && w.Mi(t))
		},
		bi: function(t) {
			var i = t.domId;
			this.Gi[i] = this.Gi[i] || 0;
			var n = w.bi(i);
			return 100 === n && (this.Gi[i] |= 1), n < 100 && 0 < n && (this.Gi[i] |= 2), 0 === n && (this.Gi[i] |= 4), this.Gi[i]
		},
		gi: function(t) {
			var i = w.wi(t),
				n = w.ki(window),
				e = w.Ai(window),
				r = w.Di(t, !1),
				o = w.Ci(t, !1);
			return {
				top: i.top - e,
				bottom: i.top - e + o,
				left: i.left - n,
				right: i.left - n + r,
				topAbs: i.top,
				bottomAbs: i.top + o,
				leftAbs: i.left,
				rightAbs: i.left + r
			}
		},
		cn: function() {
			if(this.Xi)
				for(i = 0, count = this.Xi.length; i < count; i++) {
					var t = this.Xi[i],
						n = this.an(t);
					t.viewContext = this.on(t.viewContext, n), t.analysisUrl = this["in"](this.qi, t), t.sendMessage && t.sendMessage()
				}
		},
		un: function() {
			this.cn(), d >= this.Ji && this.rn(!1)
		},
		nn: function(t) {
			l = u, this.hn(g), (!s.ie || s.ie && 6 < s.ie) && this.un(), this.Ki = setInterval(r.C(this, this.un), this.Yi)
		},
		en: function(t) {
			var i, n, e, r, o;
			for(i = 0, n = this.Xi.length; i < n; i++)(e = this.Xi[i]) && ((o = e.domId) && (r = g.document.getElementById(o)), r && this.Zi(e, r))
		},
		rn: function(t) {
			try {
				if(clearInterval(this.Ki), l !== h) return void(l = f);
				l = f, this.cn();
				for(var i = 0, n = this.Xi.length; i < n; i++) {
					var e = this.Xi[i];
					e && e.analysisUrl && !e.isSended && (e.isSended = !0, 0 === i && (e.analysisUrl += "&total=" + this.Xi.length), c.Fi({
						url: e.analysisUrl
					}))
				}
				if(t) {
					var r, o = (new Date).getTime();
					if(s.ie)
						for(r = o + 200; o < r;) o = (new Date).getTime();
					else {
						for(n = 1e5, i = 0; i < n; i++);
						n = 1e7 < (n = 2e7 / ((r = (new Date).getTime()) - o)) ? 1e7 : n;
						for(i = 0; i < n; i++);
					}
				}
			} catch(a) {}
		},
		hn: function(t) {
			t = t || g, m = !0, s.ie ? (_.L(t, "focusin", r.C(this, this.fn)), _.L(t, "focusout", r.C(this, this.dn))) : (_.L(t, "focus", r.C(this, this.fn)), _.L(t, "blur", r.C(this, this.dn)))
		},
		fn: function(t) {
			m = !0
		},
		dn: function(t) {
			m = !1
		}
	}
}, function(t, i, n) {
	var f = n(2),
		d = n(3),
		c = n(30),
		u = n(6),
		r = n(9),
		l = n(1),
		h = n(0);
	t.exports = {
		ln: function(t, i) {
			return t.nodeName && t.nodeName.toUpperCase() === i.toUpperCase()
		},
		vn: function(t, i) {
			try {
				var n = document.createElement("script");
				n.type = "text/javascript", t.src ? n.src = t.src : n.text = t.text || t.textContent || t.innerHTML || "", i.insertBefore(n, i.firstChild)
			} catch(e) {
				r.zi(f.St, {
					error: "createscripterror",
					status: "renderFail"
				})
			}
		},
		pn: function(t, i) {
			if(!t) return !1;
			t.innerHTML = '<span style="display: none">ie</span>' + i;
			for(var n = t.childNodes, e = [], r = 0; n[r]; r++) !this.ln(n[r], "script") || n[r].type && "text/javascript" !== n[r].type.toLowerCase() || e.push(n[r]);
			e.reverse();
			for(var o = 0, a = e.length; o < a; o++) this.vn(e[o].parentNode.removeChild(e[o]), t);
			return !0
		},
		_n: function(t, i) {
			var n = d.Ct(t);
			if(n && !d.Rt(n, f.ut)) {
				var e = n.response.pdb_deliv.deliv_des;
				e = e._html;
				var r = this.wn();
				if(this.mn() && i.getAttribute("src", 2) !== r) i.src = r;
				else {
					if(e && "url" === e.type) return i.src = e.content, void d.Bt(n.id, f.ut);
					try {
						d.Bt(n.id, f.ut);
						var o = c.gn(e, n);
						o.indexOf("<body>") < 0 && (o = "<!DOCTYPE html><body>" + o);
						var a = i.contentWindow.document;
						a.open("text/html", "replace"), a.write(o), a.body && (a.body.style.backgroundColor = "transparent")
					} catch(s) {}
				}
			}
		},
		mn: function() {
			var t = document.createElement("iframe"),
				i = !1;
			if(!document.body) return i;
			return t.src = "about:blank", document.body.insertBefore(t, document.body.firstChild), i = function n(t) {
				try {
					return !t.contentWindow.document
				} catch(i) {
					return !0
				}
			}(t), document.body.removeChild(t), this.mn = function() {
				return i
			}, i
		},
		yn: function() {
			var t = navigator.userAgent,
				i = !(!t || !t.match(/iphone.*micromessenger/i));
			return this.yn = function() {
				return i
			}, i
		},
		wn: function() {
			return this.mn() ? u.li("domainPolicyFileUrl") || "/domain-policy.htm" : this.yn() ? u.li("blankPolicyFileUrl") || "/blank-policy.htm" : "about:blank"
		},
		renderRichMaterial: function(t) {
			var i = t.response,
				n = i && i.pdb_deliv && i.pdb_deliv.deliv_des,
				e = n && n._html,
				r = t.isNeedCacheRequest;
			if(!e || "rich" !== e.type || r) return !1;
			var o = l.g(t.containerId),
				a = e.content,
				s = t.isAsync,
				c = t.productLine,
				u = !1;
			if(s)
				if(!s || "clb" !== c && "dup" !== c) u = this.pn(o, a);
				else {
					var h = this.bn(t);
					o.innerHTML = h, u = !0
				}
			else document.write(a), d.Bt(t.id, f.ut), u = !0;
			return u
		},
		bn: function(t) {
			var i = this.In(t);
			return this.Sn(i)
		},
		In: function(t) {
			var i, n = t.containerInfo,
				e = t.width || n.width,
				r = t.height || n.height,
				o = this.wn(),
				a = "iframe" + t.id,
				s = f.V + "renderFrame_";
			u.di(s, h.C(this, this._n)), i = 'onload="' + s + "('" + t.id + "', this);\"";
			var c = {};
			return c.iframeId = a, c.srcAttriName = "src", c.onloadDefine = i, c.iframeWidth = "" + e, c.iframeHeight = "" + r, c.url = o, c
		},
		Sn: function(t) {
			var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
			return h.v(i, t)
		}
	}
}, function(t, i, n) {
	var d = n(2),
		a = n(23),
		s = n(27),
		c = n(18),
		u = n(28),
		h = n(19),
		f = n(1),
		r = n(0),
		o = {
			slotParam: a,
			businessParam: s,
			browserParam: c,
			systemParam: u,
			additionalParam: h
		};
	t.exports = {
		An: function(t) {
			for(var i = [], n = t.paramsList, e = 0, r = n.length; e < r; e++) {
				var o = n[e],
					a = o.key,
					s = o.encode,
					c = o.value,
					u = o.limit;
				try {
					c = "function" == typeof c ? c.apply(t) : c, c = s ? encodeURIComponent(c) : c, c = u ? c.substr(0, u) : c, i.push({
						key: a,
						value: c
					})
				} catch(f) {
					var h = d.nt;
					h += "?type=adcodex_error", h += "&info=" + encodeURIComponent(f.message), h += "&stack=" + encodeURIComponent(f.stack || ""), h += "&key=" + encodeURIComponent(a), h += "&t=" + (new Date).getTime(), (new Image).src = h
				}
			}
			return i
		},
		Nt: function(t) {
			var i = [];
			a.setSlotInfo(t), c.setSlotInfo(t), s.kn(f.j());
			for(var n = {}, e = 0, r = (i = (i = (i = (i = (i = i.concat(this.An(a))).concat(this.An(s))).concat(this.An(c))).concat(this.An(h))).concat(this.An(u))).length; e < r; e++) {
				var o = i[e];
				n[o.key] = o.value
			}
			return n
		},
		Ht: function(t) {
			var i = [];
			for(var n in t)
				if(n && (t[n] || 0 === t[n]) && t.hasOwnProperty(n)) {
					var e = t[n];
					i.push(n + "=" + e)
				}
			if(window && window.location && window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
				var r = window.location.ancestorOrigins;
				i.push("lto=" + encodeURIComponent(r[r.length - 1])), i.push("ltl=" + r.length)
			}
			return i.join("&")
		},
		getPmpRequestUrl: function(t) {
			var i = [],
				n = t.paramObj,
				e = t.timestampWatcher,
				r = e.t1,
				o = e.t2,
				a = e.t3,
				s = t.response;
			n.qn = s.queryid, i.push("conwid=" + t.width), i.push("conhei=" + t.height);
			var c = s.pdb_deliv,
				u = s.order_deliv,
				h = s.rtb_deliv;
			s.media_protect && "0" !== s.media_protect && i.push("mpdi=" + s.media_protect), c.deliv_id && i.push("pdbid=" + c.deliv_id), u.deliv_id && i.push("orderid=" + u.deliv_id), u.demand_id && i.push("odid=" + u.demand_id), h.deliv_id && i.push("rtbid=" + h.deliv_id), h.demand_id && i.push("rdid=" + h.demand_id), t.isNeedCacheRequest && (n.dpv = n.qn), t.isUnion ? i.push("dc=3") : i.push("dc=2"), 0 < r && (n.tt = r + "." + (o - r) + "." + (a - r) + "." + (+new Date - r)), n.exps && (i.push("exps=" + n.exps), n.exps = "");
			var f = i.join("&");
			return d.Y + f + "&" + this.Ht(n)
		},
		Dn: function(t, i) {
			var n = o[t] && o[t].paramsList;
			if(n)
				for(var e = 0; e < n.length; e++)
					if(n[e].key === i) return r.C(o[t], n[e].value)()
		}
	}
}, function(t, i, n) {
	var o = n(1);
	t.exports = {
		L: function(t, i, n) {
			var e = o.T(t) ? t : o.g(t);
			if(e)
				if(e.addEventListener) e.addEventListener(i, n, !1);
				else if(e.attachEvent) e.attachEvent("on" + i, n);
			else {
				var r = e["on" + i];
				e["on" + i] = function() {
					r && r.apply(this, arguments), n.apply(this, arguments)
				}
			}
			return e
		},
		xn: function(t, i, n) {
			var e, r, o = t.Cn;
			if(!o) return t;
			if(void 0 === i) {
				for(e in o) delete o[e];
				return t
			}
			if(i.indexOf("on") && (i = "on" + i), r = o[i], void 0 === n) delete o[i];
			else if(r)
				for(e = r.length - 1; 0 <= e; e--) r[e].handler === n && r.splice(e, 1);
			return t
		},
		F: function(t, i, n) {
			return "string" == typeof t && (t = o.g(t)), t = this.xn(t, i.replace(/^\s*on/, ""), n)
		}
	}
}, function(t, i, n) {
	var f = n(2),
		d = (n(1), n(29)),
		l = n(12),
		v = n(0),
		p = n(6),
		e = n(11),
		_ = n(5);
	t.exports = {
		getFrameHTML: function(t) {
			if(t.isPdbAd) return e.bn(t);
			var i = this.In(t);
			return this.Sn(i)
		},
		In: function(t) {
			var i = t.containerInfo,
				n = t.width || i.width,
				e = t.height || i.height,
				r = l.getPmpRequestUrl(t),
				o = "";
			if(t.isNeedCacheRequest) {
				var a = t.response.queryid;
				d.Un(a, t);
				p.di("adsbybaidu_callback", v.C(d, d.Pn)), p.di("adsbybaidu_callback_", v.C(d, d.Pn), _);
				var s = f.V + "cacheRequest_";
				p.di(s, v.C(d, d.Tn)), o = 'onload="' + s + "('" + a + "', this);\""
			} else if(t.styleOpenApi && t.styleOpenApi.floatingState && "show" !== t.styleOpenApi.floatingState || 2 === i.location) {
				var c = t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : "upSlideShow";
				o = 'onload="' + f.V + "floatShow_('" + i.location + "','" + c + "', this);\""
			}
			var u = "iframe" + t.id,
				h = {};
			return h.iframeId = u, h.srcAttriName = "src", h.onloadDefine = o, h.iframeWidth = "" + n, h.iframeHeight = "" + e, h.url = r, h
		},
		Sn: function(t) {
			var i = ["<iframe", ' id="{iframeId}"', ' name="{iframeId}"', " {onloadDefine}", ' {srcAttriName}="{url}"', ' width="{iframeWidth}"', ' height="{iframeHeight}"', ' align="center,center"', ' vspace="0"', ' hspace="0"', ' marginwidth="0"', ' marginheight="0"', ' scrolling="no"', ' frameborder="0"', ' style="border:0;vertical-align:bottom;margin:0;width:{iframeWidth}px;height:{iframeHeight}px"', ' allowtransparency="true">', "</iframe>"].join("");
			return v.v(i, t)
		}
	}
}, function(t, i, n) {
	var e = n(2);
	t.exports = {
		On: function() {
			var t = 1e9 * Math.random();
			t < 1e6 * e._t ? (e.ft = !0, e.lt = e.vt) : t >= 1e6 * e._t && t < 1e6 * e._t * 2 && (e.lt = e.dt)
		},
		Ot: function(t, i) {
			return t && i ? t += "," + i : t = t || i, t
		}
	}
}, function(t, i, n) {
	var h = n(0),
		f = n(6);
	t.exports = {
		En: "bizOrientations",
		Rn: "bizUrgentOrientations",
		Bn: function(t, i) {
			var n = this.Mn.apply(this, arguments);
			return this.Ln(t, n)
		},
		Mn: function(t, i) {
			return t && /^[0-9a-zA-Z]+$/.test(t) && i ? i = "array" === h.h(i) ? i : Array.prototype.slice.call(arguments, 1) : []
		},
		Ln: function(t, i) {
			if(!i || !i.length) return !1;
			var n = this.En,
				e = f.hi(n) || {},
				r = {};
			for(var o in e) h.e.call(e, o) && (r[o] = "array" === h.h(e[o]) ? e[o].slice() : e[o]);
			for(var a = r[t] || [], s = i.length, c = 0; c < s; c++) {
				var u = i[c];
				"string" == typeof u && (u = encodeURIComponent(u)).length <= 100 && (a[a.length] = u)
			}
			return !!a.length && (r[t] = h.S(a), f.ci(n, r), !0)
		},
		Fn: function(t) {
			t = t || 500, t = Math.max(0, Math.min(t, 500));
			var i, n = [],
				e = f.hi(this.Rn) || f.hi(this.En) || {};
			if("object" === h.h(e))
				for(var r in e) h.e.call(e, r) && (i = r + "=" + e[r].join(","), n[n.length] = i);
			f.ci(this.Rn, undefined), n.sort(function(t, i) {
				return t.length - i.length
			});
			for(var o = "", a = n.length, s = 0; s < a && !(o.length + n[s].length >= t); s++) o += (s ? "&" : "") + n[s];
			return o
		}
	}
}, function(t, i) {
	var o = null,
		r = !1;
	try {
		(o = window.localStorage) && o.removeItem && (r = !0)
	} catch(n) {}
	t.exports = {
		jn: "___ds_storage__",
		Nn: 72e5,
		Yt: function() {
			return r
		},
		$t: function(t, i, n) {
			if(o) {
				i = n ? encodeURIComponent(i) : i;
				try {
					o.setItem(t, i)
				} catch(e) {}
			}
		},
		Kt: function(t, i) {
			if(o) try {
				var n = o.getItem(t);
				return i && n ? decodeURIComponent(n) : n
			} catch(e) {
				return null
			}
			return null
		},
		Ni: function(t, i, n) {
			if(o) {
				i = n ? encodeURIComponent(i) : i;
				var e = this.Kt(t) || "";
				e += (e && "|") + i;
				try {
					this.$t(t, e)
				} catch(r) {}
			}
		},
		Hn: function(t) {
			o && o.removeItem(t)
		},
		Hi: function(t, i, n) {
			if(o) {
				i = n ? encodeURIComponent(i) : i;
				var e = this.Kt(t) || "";
				if(e = e.replace(new RegExp(i + "\\|?", "g"), "").replace(/\|$/, "")) try {
					this.$t(t, e)
				} catch(r) {} else o.removeItem(t)
			}
		},
		Wn: function(t) {
			var i, n = this.Kt(this.jn + t) || "";
			if(r && n) {
				var e = (new Date).getTime();
				n = n.split("|"), (parseInt(n[1], 10) || 0) + this.Nn > e && (i = parseInt(n[0], 10) || 0)
			}
			return i
		}
	}
}, function(t, i, n) {
	var r = n(2),
		e = n(4),
		o = n(1),
		a = n(7),
		s = n(25),
		c = n(26),
		u = n(5),
		h = window,
		f = h.document,
		d = h.navigator,
		l = o.j();
	t.exports = {
		paramsList: [{
			key: "dbv",
			value: function() {
				return e.qihoo ? "1" : e.chrome ? "2" : "0"
			}
		}, {
			key: "drs",
			value: function() {
				try {
					return {
						uninitialized: 0,
						loading: 1,
						loaded: 2,
						interactive: 3,
						complete: 4
					}[f.readyState]
				} catch(t) {
					return -1
				}
			}
		}, {
			key: "pcs",
			value: function() {
				return [a.pi(l), a._i(l)].join("x")
			}
		}, {
			key: "pss",
			value: function() {
				return [a.Ii(l), a.Si(l)].join("x")
			}
		}, {
			key: "cfv",
			value: function() {
				return e.si()
			}
		}, {
			key: "cpl",
			value: function() {
				return d.plugins.length || 0
			}
		}, {
			key: "chi",
			value: function() {
				return h.history.length || 0
			}
		}, {
			key: "cce",
			value: function() {
				return d.cookieEnabled || 0
			}
		}, {
			key: "cec",
			value: function() {
				return(f.characterSet ? f.characterSet : f.charset) || ""
			}
		}, {
			key: "tlm",
			value: function() {
				return Date.parse(f.lastModified) / 1e3
			}
		}, {
			key: "prot",
			value: function() {
				return "https:" === r.J ? "2" : ""
			}
		}, {
			key: "rw",
			value: function() {
				var t = Math.max(320, Math.min(window.innerWidth, window.innerHeight));
				return isNaN(t) && (t = Math.min(a.pi(), a._i())), t || 0
			}
		}, {
			key: "ltu",
			encode: !0,
			limit: 700,
			value: function() {
				var t;
				return 0 < (t = u.location && u.location.href ? u.location.href : s.zn(function(t) {
					var i = a.pi(t),
						n = a._i(t);
					return 400 < i && 120 < n
				})).indexOf("cpro_prev") && (t = t.slice(0, t.indexOf("?"))), t
			}
		}, {
			key: "liu",
			encode: !0,
			limit: 700,
			value: function() {
				return o.O(h) ? f.URL : ""
			}
		}, {
			key: "ltr",
			encode: !0,
			limit: 300,
			value: function() {
				var t = "";
				try {
					t = l.opener ? l.opener.document.location.href : ""
				} catch(i) {}
				return t || l.document.referrer
			}
		}, {
			key: "lcr",
			encode: !0,
			value: function() {
				if("union" === this.Vn.productLine) return "";
				var t = f.referrer;
				if(!t) return "";
				var i = t.replace(/^https?:\/\//, "");
				i = (i = i.split("/")[0]).split(":")[0], i = s.Jn(i);
				var n = s.Jn(),
					e = c.Gn(r.X);
				return e && n === i ? e : n !== i ? (c.Xn(r.X, t, {
					domain: n
				}), t) : ""
			}
		}, {
			key: "ecd",
			encode: !0,
			value: function() {
				return e.ie && e.ie < 9 ? 0 : 1
			}
		}],
		setSlotInfo: function(t) {
			this.Vn = t
		}
	}
}, function(t, i) {
	t.exports = {
		paramsList: [],
		Kn: {
			clid: {
				key: "apdi",
				encode: !0
			},
			cuid: {
				key: "udi",
				encode: !0
			},
			ctkey: {
				key: "lcdi",
				encode: !0
			},
			acid: {
				key: "acid",
				encode: !0
			}
		},
		Yn: function(t, i) {
			for(var n in this.paramsList = [], i)
				if(n && i.hasOwnProperty(n) && this.Kn[n]) {
					var e = this.Kn[n],
						r = {};
					try {
						e.key && (r.key = e.key, r.value = this.$n(e, i[n])), e && !e.key && (r.key = n, r.value = this.$n(e, i[n])), this.paramsList.push(r)
					} catch(o) {}
				}
		},
		$n: function(t, i) {
			return t.encode ? encodeURIComponent(i) : i
		}
	}
}, function(t, i, n) {
	var s = n(4),
		e = n(13),
		c = n(1),
		u = n(17),
		r = n(9),
		o = n(2),
		a = n(0),
		h = n(5);
	t.exports = {
		Qn: function() {
			this.idPrefix = "BAIDU_DUP_fp_", this.fpElId = this.idPrefix + "wrapper", c.g(this.fpElId) || e.L(window, "load", a.C(this, this.Zn))
		},
		Zn: function() {
			if(!c.g(this.fpElId)) {
				var t = window,
					i = t.document,
					n = i.body,
					e = c.O(t) ? i.URL : "";
				if((9 < s.ie || !s.ie) && e) try {
					i.cookie, u.Yt()
				} catch(a) {
					return
				}
				var r = i.createElement("div");
				r.id = this.fpElId, r.style.position = "absolute", r.style.left = "-1px", r.style.bottom = "-1px", r.style.zIndex = 0, r.style.width = 0, r.style.height = 0, r.style.overflow = "hidden", r.style.visibility = "hidden", r.style.display = "none";
				var o = i.createElement("iframe");
				o.id = this.idPrefix + "iframe", o.src = "https://pos.baidu.com/wh/o.htm?ltr=", o.style.width = 0, o.style.height = 0, o.style.visibility = "hidden", o.style.display = "none";
				try {
					r.insertBefore(o, r.firstChild), n && n.insertBefore(r, n.firstChild)
				} catch(a) {}
			}
		},
		Jt: function(t) {
			if(1e4 * Math.random() < 500) {
				if(this.antiScript) {
					if(window.BAIDU_SSP_sendAntiLog) return void window.BAIDU_SSP_sendAntiLog(t)
				} else {
					this.antiScript = document.createElement("script"), this.antiScript.type = "text/javascript", this.antiScript.async = !0, this.antiScript.src = "//cpro.baidustatic.com/cpro/ui/ab.min.js";
					var i = document.getElementsByTagName("script")[0];
					i && i.parentNode && i.parentNode.insertBefore(this.antiScript, i), r.Wi("rs.jpg", "loadAntiBotFile", {
						queryId: t,
						psid: h[o.mt]
					})
				}
				c.z(this.antiScript, function() {
					window.BAIDU_SSP_sendAntiLog && window.BAIDU_SSP_sendAntiLog(t)
				})
			}
		}
	}
}, function(t, i) {
	t.exports = {
		te: function(t) {
			var i = t.response,
				n = this.ne(t);
			return n || this.ee(i)
		},
		ne: function(t) {
			var i = t.response.placement.userdefine || "",
				n = t.response.placement.encode_userdefine || "";
			n && "encoded" === n && (i = decodeURIComponent(i), t.response.placement.userdefine = i);
			for(var e = i.split("|") || [], r = {}, o = 0, a = e.length; o < a; o++) {
				var s = e[o].split("="),
					c = s[0];
				c && (r[c] = s[1])
			}
			if(r.hasOwnProperty("painter")) return r.painter;
			var u = t.styleOpenApi.tn || "",
				h = parseInt(t.styleOpenApi.xuanting || 0, 10);
			return 0 <= u.indexOf("mobile") && 0 < h ? "mobile.float" : 0 <= u.indexOf("mobile") ? "mobile.inlayFix" : 0 < h ? "dynamicFloat" : u && 0 < u.length && u.indexOf("_xuanfu") < 0 && u.indexOf("float") < 0 ? "inlayFix" : ""
		},
		ee: function(t) {
			return this.re(t) ? "bottomSearchBar" : this.oe(t) ? "inlayFix" : this.ae(t) ? "dynamicFloat" : this.se(t) ? "insideText" : this.ce(t) ? "mobile.inlayFix" : this.ue(t) ? "mobile.float" : this.he(t) ? "mobile.insideText" : void 0
		},
		re: function(t) {
			var i = t.placement,
				n = i.container,
				e = i.fillstyle;
			return !(3 !== n.anchoredType || !n.slide || 9 !== e.btnStyleId)
		},
		oe: function(t) {
			var i = t.placement,
				n = i.basic,
				e = i.container,
				r = e.floated;
			return 1 === n.rspFormat && 1 === n.flowType && 1 === e.anchoredType && (!r || (1 === r.trigger || !this.fe(r)))
		},
		fe: function(t) {
			for(var i in t) return !0;
			return !1
		},
		ae: function(t) {
			var i = t.placement,
				n = i.basic,
				e = i.container,
				r = e.floated;
			return !(1 !== n.rspFormat || 1 !== n.flowType || 1 !== e.anchoredType || !r || 8 !== r.trigger)
		},
		se: function(t) {
			var i = t.placement,
				n = i.basic,
				e = i.container;
			return 3 === n.rspFormat && 1 === n.flowType && 8 === e.occurrence && 11 === e.anchoredType
		},
		ce: function(t) {
			var i = t.placement,
				n = i.basic,
				e = i.container;
			return 1 === n.rspFormat && 2 === n.flowType && 1 === e.anchoredType
		},
		ue: function(t) {
			var i = t.placement,
				n = i.basic,
				e = i.container;
			return 1 === n.rspFormat && 2 === n.flowType && (3 === e.anchoredType || 11 === e.anchoredType)
		},
		he: function(t) {
			var i = t.placement,
				n = i.basic,
				e = i.container;
			return 3 === n.rspFormat && 2 === n.flowType && 8 === e.occurrence && 11 === e.anchoredType
		}
	}
}, function(t, i, n) {
	try {
		o = n(5), a = n(6), s = n(0), c = n(3), u = n(10), h = n(14), f = n(11), d = n(12), l = n(31), n(44), a.di("regisetViewWatch", s.C(u, u.regisetViewWatch), o), a.di("getFrameHTML", s.C(h, h.getFrameHTML), o), a.di("renderRichMaterial", s.C(f, f.renderRichMaterial), o), a.di("processSlotInfo", s.C(c, c.processSlotInfo), o), a.di("getPmpRequestUrl", s.C(d, d.getPmpRequestUrl), o), l.Mt()
	} catch(v) {
		var e = v && v.stack ? v.stack : v,
			r = ["//eclick.baidu.com/se.jpg?", "type=fatalError", "version=newDup", "mes=" + encodeURIComponent(e)].join("&");
		(new Image).src = r
	}
	var o, a, s, c, u, h, f, d, l
}, function(t, i, n) {
	var s = n(1),
		c = n(7),
		u = n(2),
		e = n(15),
		r = n(5),
		o = n(24),
		h = window;
	t.exports = {
		paramsList: [{
			key: "psi",
			value: function() {
				var t = r[u.mt];
				return t = t || (r[u.mt] = o.de())
			}
		}, {
			key: "di",
			value: function() {
				return this.Vn.slotId
			}
		}, {
			key: "dri",
			value: function() {
				return this.Vn.index
			}
		}, {
			key: "dis",
			value: function() {
				var t = 0;
				s.O(h) && (t += 1), s.B(h, h.top) && (t += 2);
				var i = c.pi(),
					n = c._i();
				(i < 40 || n < 10) && (t += 4);
				try {
					if(!0 & t) {
						var e = s.j();
						e.document.referrer && e.top === e.parent && (t += 8)
					}
				} catch(a) {
					var r = a && a.stack ? a.stack : a,
						o = u.nt;
					o += "?type=fatalError", o += "&key=disParam", o += "&date=" + (new Date).getTime(), o += "&mes=" + encodeURIComponent(r), (new Image).src = o
				}
				return t
			}
		}, {
			key: "dai",
			value: function() {
				return this.Vn.count
			}
		}, {
			key: "ps",
			value: function() {
				var t = "0",
					i = s.g(this.Vn.containerId),
					n = c.gi(i);
				return n && n.top !== undefined && n.left !== undefined && (t = n.top + "x" + n.left), t
			}
		}, {
			key: "coa",
			encode: !0,
			value: function() {
				var t = [],
					i = this.Vn.styleOpenApi;
				for(var n in "-1" === this.Vn.pcwd && (i.cpro_ftpc = "true"), i)
					if(n && "undefined" != typeof i[n] && i.hasOwnProperty(n)) {
						var e = n;
						if("width" === n || "height" === n || "sizeType" === n || "apType" === n || "floatingState" === n) continue;
						"cpro_w" === n && (e = "rsi0"), "cpro_h" === n && (e = "rsi1"), t.push(e + "=" + encodeURIComponent(i[n]))
					}
				return t.join("&")
			}
		}, {
			key: "enu",
			value: function() {
				return "encoding"
			}
		}, {
			key: "cw",
			value: function() {
				var t = this.Vn.styleOpenApi.cpro_ftpc || "true" === this.Vn.styleOpenApi.cpro_ftpc || "-1" === this.Vn.pcwd,
					i = s.g(this.Vn.containerId);
				if(t && i && i.parentElement.clientWidth) return i.parentElement.clientWidth || 0
			}
		}, {
			key: "exps",
			value: function() {
				var t = this.Vn.exps || u.lt;
				return e.Ot(t, r.expId)
			}
		}],
		setSlotInfo: function(t) {
			this.Vn = t
		}
	}
}, function(t, i, n) {
	var a = n(18),
		s = n(2),
		c = n(0);
	t.exports = {
		le: function(t) {
			"object" == typeof t ? (this.hasher = t.hasher, this.time = t.time, this.url = t.url, this.random = t.random, this.screen_resolution = t.screen_resolution, this.screen_orientation = t.screen_orientation, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
		},
		ve: function() {
			var t = [];
			t.push((new Date).getTime()), t.push(Math.random()), this.url && t.push(this.url);
			try {
				if(t.push(navigator.userAgent), t.push(navigator.language), t.push(window.screen.colorDepth), this.screen_resolution) {
					var i = this.pe();
					void 0 !== i && t.push(i.join("x"))
				}
				t.push((new Date).getTimezoneOffset()), t.push(this._e()), t.push(this.we()), t.push(this.me()), document.body ? t.push(typeof document.body.addBehavior) : t.push(typeof undefined), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), this.canvas && this.ge() && t.push(this.ye())
			} catch(r) {
				var n = r && r.stack ? r.stack : r,
					e = s.nt;
				e += "?type=fatalError", e += "&key=pageSearchId", e += "&value=navigatorParam", e += "&date=" + (new Date).getTime(), e += "&mes=" + encodeURIComponent(n), (new Image).src = e
			}
			return this.hasher ? this.hasher(t.join("~~~"), 31) : this.be(t.join("~~~"), 31)
		},
		Ie: function(t, i) {
			t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
			var n = [0, 0, 0, 0];
			return n[3] += t[3] + i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
		},
		Se: function(t, i) {
			t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], i = [i[0] >>> 16, 65535 & i[0], i[1] >>> 16, 65535 & i[1]];
			var n = [0, 0, 0, 0];
			return n[3] += t[3] * i[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * i[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * i[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * i[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * i[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * i[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * i[3] + t[1] * i[2] + t[2] * i[1] + t[3] * i[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
		},
		Ae: function(t, i) {
			return 32 === (i %= 64) ? [t[1], t[0]] : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i | t[0] >>> 32 - i] : (i -= 32, [t[1] << i | t[0] >>> 32 - i, t[0] << i | t[1] >>> 32 - i])
		},
		ke: function(t, i) {
			return 0 === (i %= 64) ? t : i < 32 ? [t[0] << i | t[1] >>> 32 - i, t[1] << i] : [t[1] << i - 32, 0]
		},
		De: function(t, i) {
			return [t[0] ^ i[0], t[1] ^ i[1]]
		},
		xe: function(t) {
			return t = this.De(t, [0, t[0] >>> 1]), t = this.Se(t, [4283543511, 3981806797]), t = this.De(t, [0, t[0] >>> 1]), t = this.Se(t, [3301882366, 444984403]), t = this.De(t, [0, t[0] >>> 1])
		},
		be: function(t, i) {
			i = i || 0;
			for(var n = (t = t || "").length % 16, e = t.length - n, r = [0, i], o = [0, i], a = [0, 0], s = [0, 0], c = [2277735313, 289559509], u = [1291169091, 658871167], h = 0; h < e; h += 16) a = [255 & t.charCodeAt(h + 4) | (255 & t.charCodeAt(h + 5)) << 8 | (255 & t.charCodeAt(h + 6)) << 16 | (255 & t.charCodeAt(h + 7)) << 24, 255 & t.charCodeAt(h) | (255 & t.charCodeAt(h + 1)) << 8 | (255 & t.charCodeAt(h + 2)) << 16 | (255 & t.charCodeAt(h + 3)) << 24], s = [255 & t.charCodeAt(h + 12) | (255 & t.charCodeAt(h + 13)) << 8 | (255 & t.charCodeAt(h + 14)) << 16 | (255 & t.charCodeAt(h + 15)) << 24, 255 & t.charCodeAt(h + 8) | (255 & t.charCodeAt(h + 9)) << 8 | (255 & t.charCodeAt(h + 10)) << 16 | (255 & t.charCodeAt(h + 11)) << 24], a = this.Se(a, c), a = this.Ae(a, 31), a = this.Se(a, u), r = this.De(r, a), r = this.Ae(r, 27), r = this.Ie(r, o), r = this.Ie(this.Se(r, [0, 5]), [0, 1390208809]), s = this.Se(s, u), s = this.Ae(s, 33), s = this.Se(s, c), o = this.De(o, s), o = this.Ae(o, 31), o = this.Ie(o, r), o = this.Ie(this.Se(o, [0, 5]), [0, 944331445]);
			switch(a = [0, 0], s = [0, 0], n) {
				case 15:
					s = this.De(s, this.ke([0, t.charCodeAt(h + 14)], 48));
				case 14:
					s = this.De(s, this.ke([0, t.charCodeAt(h + 13)], 40));
				case 13:
					s = this.De(s, this.ke([0, t.charCodeAt(h + 12)], 32));
				case 12:
					s = this.De(s, this.ke([0, t.charCodeAt(h + 11)], 24));
				case 11:
					s = this.De(s, this.ke([0, t.charCodeAt(h + 10)], 16));
				case 10:
					s = this.De(s, this.ke([0, t.charCodeAt(h + 9)], 8));
				case 9:
					s = this.De(s, [0, t.charCodeAt(h + 8)]), s = this.Se(s, u), s = this.Ae(s, 33), s = this.Se(s, c), o = this.De(o, s);
				case 8:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 7)], 56));
				case 7:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 6)], 48));
				case 6:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 5)], 40));
				case 5:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 4)], 32));
				case 4:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 3)], 24));
				case 3:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 2)], 16));
				case 2:
					a = this.De(a, this.ke([0, t.charCodeAt(h + 1)], 8));
				case 1:
					a = this.De(a, [0, t.charCodeAt(h)]), a = this.Se(a, c), a = this.Ae(a, 31), a = this.Se(a, u), r = this.De(r, a)
			}
			return r = this.De(r, [0, t.length]), o = this.De(o, [0, t.length]), r = this.Ie(r, o), o = this.Ie(o, r), r = this.xe(r), o = this.xe(o), r = this.Ie(r, o), o = this.Ie(o, r), ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
		},
		we: function() {
			try {
				return !!window.localStorage
			} catch(t) {
				return !0
			}
		},
		_e: function() {
			try {
				return !!window.sessionStorage
			} catch(t) {
				return !0
			}
		},
		me: function() {
			try {
				return !!window.indexedDB
			} catch(t) {
				return !0
			}
		},
		ge: function() {
			var t = document.createElement("canvas");
			return !(!t.getContext || !t.getContext("2d"))
		},
		pe: function() {
			return this.screen_orientation ? window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : [window.screen.height, window.screen.width]
		},
		ye: function() {
			var t = document.createElement("canvas"),
				i = t.getContext("2d"),
				n = "http://valve.github.io";
			return i.textBaseline = "top", i.font = '14px "Arial"', i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", i.fillText(n, 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.7)", i.fillText(n, 4, 17), t.toDataURL()
		},
		de: function() {
			try {
				for(var t = "", i = a.paramsList, n = 0; n < i.length; n++)
					if("ltu" === i[n].key) {
						t = c.C(a, i[n].value)();
						break
					}
				return this.le({
					url: t
				}), this.ve()
			} catch(o) {
				var e = o && o.stack ? o.stack : o,
					r = s.nt;
				r += "?type=fatalError", r += "&key=pageSearchId", r += "&date=" + (new Date).getTime(), r += "&mes=" + encodeURIComponent(e), (new Image).src = r
			}
		}
	}
}, function(t, i, n) {
	var e = n(1);
	t.exports = {
		zn: function(t) {
			var i = e.j(t),
				n = "";
			return e.O(i) && (n = i.document.referrer), n = n || i.location.href
		},
		Jn: function(t) {
			0 === (t = t || document.domain).indexOf("www.") && (t = t.substr(4)), "." === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1));
			var i = "([a-z0-9][a-z0-9\\-]*?\\.(?:" + ["com", "cn", "net", "org", "gov", "info", "la", "cc", "co", "jp", "us", "hk", "tv", "me", "biz", "in", "be", "io", "tk", "cm", "li", "ru", "ws", "hn", "fm", "tw", "ma", "in", "vn", "name", "mx", "gd", "im"].join("|") + ")(?:\\.(?:cn|jp|tw|ru|th))?)$",
				n = new RegExp(i, "i"),
				e = t.match(n);
			return e ? e[0] : t
		}
	}
}, function(t, i) {
	t.exports = {
		Gn: function(t, i) {
			var n = new RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie);
			return n ? i ? decodeURIComponent(n[2]) : n[2] : ""
		},
		Xn: function(t, i, n, e) {
			var r = n.expires;
			document.cookie = t + "=" + (e ? encodeURIComponent(i) : i) + (n.path ? "; path=" + n.path : "") + (r ? "; expires=" + r.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "")
		},
		Ce: function(t) {
			var i = new Date;
			i.setTime(i.getTime() - 86400), this.Xn(t, "", {
				path: "/",
				expires: i
			})
		}
	}
}, function(t, i, n) {
	var e = n(2),
		r = n(4),
		o = n(16),
		a = n(5);
	t.exports = {
		kn: function(t) {
			this.Ue = t
		},
		paramsList: [{
			key: "dcb",
			value: function() {
				return e.G
			}
		}, {
			key: "dtm",
			value: function() {
				return e.Z
			}
		}, {
			key: "dvi",
			value: function() {
				return "0.0"
			}
		}, {
			key: "dci",
			value: function() {
				return "-1"
			}
		}, {
			key: "dds",
			value: function() {
				return ""
			}
		}, {
			key: "dpt",
			value: function() {
				return "none"
			}
		}, {
			key: "tsr",
			value: function() {
				var t = 0,
					i = +new Date;
				return e.startTime && (t = i - e.startTime), t
			}
		}, {
			key: "tpr",
			value: function() {
				var t = (new Date).getTime(),
					i = a.DUP_4_SF ? a : this.Ue,
					n = i[e.At];
				return(!n || "number" != typeof n || 24e4 <= t - n) && (n = i[e.At] = t), n
			}
		}, {
			key: "cop",
			encode: !0,
			value: function() {
				return o.Fn()
			}
		}, {
			key: "ti",
			encode: !0,
			limit: 60,
			value: function() {
				return r.baiduboxapp && this.Ue.articleTitle ? this.Ue.articleTitle : this.Ue.document.title
			}
		}, {
			key: "utdi",
			encode: !0,
			value: function() {
				return r.baiduboxapp && this.Ue.MP && this.Ue.MP.globalConf && this.Ue.MP.globalConf.cuid || ""
			}
		}, {
			key: "atdi",
			encode: !0,
			value: function() {
				return r.baiduboxapp && this.Ue.MP && this.Ue.MP.globalConf && this.Ue.MP.globalConf.nid || ""
			}
		}, {
			key: "ari",
			value: function() {
				return 2
			}
		}]
	}
}, function(t, i, n) {
	var e = n(1),
		r = n(7),
		o = window,
		a = o.screen;
	t.exports = {
		paramsList: [{
			key: "uc",
			value: function() {
				return [a.availWidth, a.availHeight].join("x")
			}
		}, {
			key: "pis",
			value: function() {
				return(e.O(o) ? [r.pi(), r._i()] : [-1, -1]).join("x")
			}
		}, {
			key: "sr",
			value: function() {
				return [a.width, a.height].join("x")
			}
		}, {
			key: "tcn",
			value: function() {
				var t = +new Date;
				return Math.round(t / 1e3)
			}
		}]
	}
}, function(t, i, n) {
	var u = n(3),
		h = n(2),
		r = n(1),
		f = n(11),
		o = n(10),
		e = {},
		d = {};
	t.exports = {
		Un: function(t, i) {
			e[t] = i
		},
		Pe: function(t) {
			return e[t]
		},
		Tn: function(t, i) {
			if(!t || d[t]) return !1;
			d[t] = i;
			var n = this.Pe(t),
				e = h.rt + "dpv=" + t + "&di=" + n.slotId;
			r.H(e)
		},
		Pn: function(t) {
			if("success" !== (t.html || "success")) {
				var i = this.Pe(t.dpv);
				if(i) {
					var n = i.response,
						e = n.pdb_deliv,
						r = n.rtb_deliv,
						o = n.order_deliv,
						a = e.deliv_des;
					if(a = a._html || {}, 0 === parseInt(e.deliv_id, 10) && (0 !== parseInt(o.deliv_id, 10) || 0 !== parseInt(r.deliv_id, 10)) && 7 === n.placement.complement_type) return this.Te(i);
					if("rich" === a.type) {
						var s = document.getElementById(i.containerId);
						f.pn(s, a.content)
					} else {
						var c = d[t.dpv];
						u.Et(i, h.ut), c.outerHTML = f.bn(i)
					}
				} else window.___baidu_union_ && window.___baidu_union_.adsbybaidu_callback_ && window.___baidu_union_.adsbybaidu_callback_(t)
			}
		},
		Te: function(t) {
			var i = t.containerId,
				n = document.getElementById(i),
				e = document.getElementById(i + "_left"),
				r = document.getElementById(i + "_right");
			n && (o.unregisetViewWatch(t), n.parentNode.removeChild(n)), e && e.parentNode.removeChild(e), r && r.parentNode.removeChild(r)
		}
	}
}, function(t, i, n) {
	var h = n(0),
		o = {};

	function s(t, i, n) {
		if("string" == typeof t) return t;
		if(!t.type) return "";
		var e = o[t.type];
		if(e) {
			var r = "string" == typeof e ? h.w(e, t) : e(t, i);
			return n ? r : "<!DOCTYPE html><body>" + r
		}
		return ""
	}
	o.text = function(t) {
		var i = '<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',
			n = /\{events\}/;
		if(1 === t.version) i = i.replace(n, "");
		else if(2 === t.version) {
			i = i.replace(n, " onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\"");
			for(var e = ["default", "hover"], r = 0; r < e.length; r++) {
				var o = e[r],
					a = o + "Color",
					s = o + "Bold",
					c = o + "Italic",
					u = o + "Underline";
				t[a] = "#" + t[a], t[s] = t[s] ? "bold" : "normal", t[c] = t[c] ? "italic" : "normal", t[u] = t[u] ? "underline" : "none"
			}
		}
		return h.w(i, t)
	}, o.image = '<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>', o.flash = function(t) {
		return t.file = t.hasLink ? "cflash" : "flash", t.imageClickUrl = t.clickUrl, t.hasLink || (t.clickUrl = ""), h.w(["<script>", "var BD = BD || {};", "BD.MC = BD.MC || {};", "BD.MC.ADFlash = BD.MC.ADFlash || {};", "BD.MC.ADImg = BD.MC.ADImg || {};", "BD.MC.ADFlash.w = {width:number};", "BD.MC.ADFlash.h = {height:number};", 'BD.MC.ADFlash.mu = "{src:string}";', 'BD.MC.ADFlash.cu = "{clickUrl:string}";', "BD.MC.ADFlash.wm = {wmode:number};", 'BD.MC.ADFlash.ct = "{clickTag:string}";', "BD.MC.ADImg.w = {imageWidth:number};", "BD.MC.ADImg.h = {imageHeight:number};", 'BD.MC.ADImg.mu = "{imageSrc:string}";', 'BD.MC.ADImg.cu = "{imageClickUrl:string}";', 'BD.MC.ADImg.tw = "{target:string}";', "BD.MC.ADImg.flag = {backupImage:number};", "<\/script>", '<script src ="', '//cbjs.baidu.com/js/{file:string}.js">', "<\/script>"].join(""), t)
	}, o.rich = function(t) {
		return t.content
	}, o.slide = function(t, i) {
		for(var n = [], e = t.materials, r = 0; r < e.length; r++) {
			var o = e[r];
			"string" != typeof o && (o = s(o, i, !0)), n.push(o)
		}
		t.html = "<div>" + n.join("</div><div>") + "</div>";
		var a = i.response.placement.container;
		return t.width = i.width || a.width, t.height = i.height || a.height, h.w('<div id="bd_ec_clb_asp" style="width:{width:number}px;height:{height:number}px;overflow:hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>', t)
	}, t.exports = {
		gn: s
	}
}, function(t, i, n) {
	var c = n(2),
		u = n(3),
		e = n(20),
		r = n(6),
		h = n(21),
		f = n(8),
		o = n(32),
		a = n(33),
		s = n(34),
		d = n(35),
		l = n(1),
		v = n(0),
		p = n(5),
		_ = n(10),
		w = n(36),
		m = n(7),
		g = n(9),
		y = n(37),
		b = {
			inlayFix: n(38),
			"mobile.inlayFix": n(41),
			"mobile.float": n(42),
			"mobile.insideText": n(43)
		};
	t.exports = {
		Mt: function() {
			this.Oe(), w.Ee(), a.Ee(), s.Ee(), o.Ee(), d.Ee(), e.Qn()
		},
		Oe: function() {
			r.di(c.G, v.C(this, this.Re)), r.di(c.q, this.Be)
		},
		Re: function(t) {
			try {
				var i = u.Ct(t.tuid);
				if(!i || i.containerId && !l.g(i.containerId)) return;
				i.response = t, u.Bt(i.id, c.st), u.processSlot(i), i.timestampWatcher.t3 = (new Date).getTime(), u.Zt(i);
				var n = h.te(i);
				if(!n) return;
				var e = b[n] || this.Me(n);
				e ? this.Le(n, i, e) : this.Fe(n, i)
			} catch(s) {
				if(!t.tuid) return;
				var r = s && s.stack ? s.stack : s,
					o = encodeURIComponent(r),
					a = {
						type: "fatalError",
						pos: "callback",
						id: t.tuid,
						mes: o
					};
				f.Qt(a)
			}
		},
		Fe: function(t, i) {
			var n = t;
			0 < n.indexOf(".") && (n = n.replace(".", "/")), n = c.Dt + n + ".js", y.je(i.id, n, v.C(this, this.Ne, t, i))
		},
		Ne: function(t, i) {
			try {
				var n = this.Me(t);
				this.Le(t, i, n)
			} catch(r) {
				var e = r && r.stack ? r.stack : r;
				g.zi("loadedPainterError", {
					painter: t,
					msg: encodeURIComponent(e)
				})
			}
		},
		Me: function(t) {
			var i = p.painter;
			if(i) {
				var n = t.split(".");
				return "mobile" === n[0] ? i.mobile && i.mobile[n[1]] : i[n[0]]
			}
		},
		Le: function(t, i, n) {
			n && (n.render(i), this.He(i), t && -1 < t.indexOf("mobile") && (_.regisetViewWatch(i), window.postMessage && i.isUnion || e.Jt(i.response.queryid)), this.We(i))
		},
		He: function(i) {
			var t = l.g(i.containerId),
				n = t && t.querySelector && t.querySelector("iframe");
			n && l.L(n, "load", function() {
				if(window.JSON && window.JSON.stringify && n.contentWindow && n.contentWindow.postMessage) {
					var t = JSON.stringify({
						type: 1,
						tuid: i.id
					});
					n.contentWindow.postMessage(t, "*")
				}
			})
		},
		Be: function() {
			0 < arguments.length && "auto" === arguments[0] && w.Re.apply(w, arguments)
		},
		We: function(t) {
			var i = l.g(t.containerId); - 1 < (t.paramObj.dis ? t.paramObj.ltu : window.location.href).indexOf(c.kt) && m.Ri(i, t.id)
		}
	}
}, function(t, i, n) {
	var o = n(3),
		a = n(2),
		e = n(16),
		r = n(6),
		s = n(0);
	t.exports = {
		ze: {
			BAIDU_CLB_fillSlot: !0,
			BAIDU_CLB_singleFillSlot: !0,
			BAIDU_CLB_fillSlotWithSize: !0,
			BAIDU_CLB_fillSlotAsync: !0
		},
		Ee: function() {
			var t;
			try {
				var i = window.BAIDU_CLB_SLOT_ID;
				for(var n in window.BAIDU_CLB_SLOT_ID = null, i && (t = o.Pt({
						slotId: i,
						productLine: "clb",
						isAsync: !1
					}), o.Tt(t, !0), o.Mt()), this.ze) r.di(n, this.Ve);
				this.qe()
			} catch(e) {}
		},
		Je: function() {},
		Ve: function(t, i) {
			var n;
			t && ((n = o.Pt({
				slotId: t,
				productLine: "clb",
				isAsync: !!i
			})).containerId = i || n.containerId, o.Tt(n), o.Mt())
		},
		qe: function() {
			try {
				r.di("BAIDU_CLB_prepareMoveSlot", this.Ge), r.di("BAIDU_CLB_setConfig", s.C(r, r.vi)), r.di("BAIDU_CLB_addOrientation", s.C(e, e.Bn)), r.di("BAIDU_CLB_addSlot", this.Je), r.di("BAIDU_CLB_enableAllSlots", this.Je), r.di("BAIDU_CLB_preloadSlots", this.Je), r.di("BAIDU_DUP_addSlotStatusCallback", this.Je)
			} catch(t) {}
		},
		Ge: function(t) {
			try {
				for(var i = 0, n = t + "_" + i; o.Ct(n) && 0 !== o.Ct(n)[0];) {
					var e = o.Ct(n);
					o.Et(e, a.ut), n = t + "_" + ++i
				}
			} catch(r) {}
		}
	}
}, function(t, i, n) {
	var c = n(3);
	t.exports = {
		Ee: function() {
			var t, i = window.cpro_id;
			window.cpro_id = null, i && (t = c.Pt({
				slotId: i,
				productLine: "union",
				isAsync: !1
			}), c.Tt(t, !0));
			var n = window.cproArray;
			if(window.cproArray = null, n)
				for(var e = 0, r = n.length; e < r; e++) t = c.Pt({
					slotId: n[e].id,
					productLine: "union",
					isAsync: !0
				}), c.Tt(t, !0);
			var o = window.cpro_mobile_slot;
			if(window.cpro_mobile_slot = null, o)
				for(e = 0, r = o.length; e < r; e++) {
					var a = o[e];
					for(var s in (t = c.Pt({
							slotId: a.id,
							productLine: "union",
							isAsync: !0
						})).styleOpenApi = t.styleOpenApi || {}, a) s && a[s] && a.hasOwnProperty(s) && (t.styleOpenApi[s] = a[s]);
					c.Tt(t, !0)
				}
			c.Mt()
		}
	}
}, function(t, i, n) {
	var s = n(3);
	t.exports = {
		Ee: function() {
			this.delieveryObjArray = this.delieveryObjArray || [], window.BAIDU_DUP = window.BAIDU_DUP || [], window.BAIDU_DUP && window.BAIDU_DUP instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.BAIDU_DUP), window.BAIDU_DUP = []), this.qe(), this.Mt()
		},
		qe: function() {
			window.BAIDU_DUP = this, window.BAIDU_DUP.load = !0
		},
		Mt: function() {
			for(var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
				var e = this.delieveryObjArray[i];
				if(e instanceof Array && 2 <= e.length) {
					var r = e[0],
						o = e[1],
						a = e[2];
					if("fill" !== r && "fillAsync" !== r || !o) continue;
					(t = s.Pt({
						slotId: o,
						productLine: "dup",
						isAsync: "fillAsync" === r
					})).containerId = a || t.containerId, s.Tt(t)
				}
			}
			this.delieveryObjArray = [], s.Mt()
		},
		push: function(t) {
			this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Mt()
		}
	}
}, function(t, i, n) {
	var a = n(3),
		s = n(19),
		e = n(16),
		r = n(0);
	t.exports = {
		Ee: function() {
			this.delieveryObjArray = this.delieveryObjArray || [], window.slotbydup = window.slotbydup || [], window.slotbydup && window.slotbydup instanceof Array && (this.delieveryObjArray = this.delieveryObjArray.concat(window.slotbydup), window.slotbydup = []), this.qe(), this.Mt()
		},
		Mt: function() {
			for(var t, i = 0, n = this.delieveryObjArray.length; i < n; i++) {
				var e = this.delieveryObjArray[i];
				if(e.hasOwnProperty("id")) {
					var r = e.hasOwnProperty("isAsync") && e.isAsync || e.hasOwnProperty("async") && e.async,
						o = e.hasOwnProperty("coa") && e.coa;
					t = a.Pt({
						slotId: e.id,
						productLine: "adcodex",
						isAsync: r,
						coa: o
					}), s.Yn(t, e), t.containerId = e.container || t.containerId, t.display = e.display, t.ftpc = e.ftpc || !1, t.size = e.size || "", t.pcwd = e.pcwd || "", t.pchd = e.pchd || "", t.exps = e.exps || "", t.isAutoAd = e.isAutoAd || !1, a.Tt(t)
				} else this.Xe(e)
			}
			this.delieveryObjArray = [], a.Mt()
		},
		qe: function() {
			window.slotbydup = this, window.slotbydup.load = !0
		},
		push: function(t) {
			this.delieveryObjArray = this.delieveryObjArray && [], this.delieveryObjArray.push(t), this.Mt()
		},
		Xe: function(t) {
			var i = t.addOrientation;
			i && "array" === r.h(i) && e.Bn.apply(e, i)
		}
	}
}, function(t, i, n) {
	var a = n(2),
		e = n(1),
		s = n(9),
		r = n(0),
		o = n(4),
		c = n(6),
		u = n(5),
		h = n(3),
		f = n(12);
	t.exports = {
		Ee: function() {
			try {
				if(!(u.expId || o.baiduboxapp || window.___baidu_union_ && window.___baidu_union_.expId))
					if(u.expId = "110011", 0 === f.Dn("slotParam", "dis")) {
						var t = this.Ke();
						c.di("dupCallback", r.C(this, this.Ye), u), this.$e(t)
					}
			} catch(n) {
				var i = n && n.stack ? n.stack : n;
				s.zi(a.St, {
					key: "autoAds",
					mes: encodeURIComponent(i),
					version: "newDup"
				})
			}
		},
		Ke: function() {
			return h.Pt({
				slotId: a.gt,
				isAsync: !0
			})
		},
		$e: function(t) {
			t.paramObj = f.Nt(t), t.paramObj.dcb = a.q, t.paramObj.dtm = a.yt, t.paramObj.dc = a.bt;
			var i = f.Ht(t.paramObj),
				n = a.J + a.K + a.It + "?" + i;
			"complete" === document.readyState || "interactive" === document.readyState ? e.H(n) : e.L(document, "readystatechange", function() {
				"interactive" === document.readyState && e.H(n)
			})
		},
		Re: function(t, i, n) {
			try {
				if(n instanceof Array && document.querySelector) {
					var e = u.autoAd && u.autoAd.dup;
					e && window.___baidu_union_.dsCallback ? window.___baidu_union_.dsCallback(n, e) : u.dupCallback(n)
				}
			} catch(o) {
				var r = o && o.stack ? o.stack : o;
				s.zi(a.St, {
					key: "autoDupCallback",
					mes: encodeURIComponent(r),
					version: "newDup"
				})
			}
		},
		Ye: function(t) {
			for(var i = 0; i < t.length; i++) {
				var n = t[i],
					e = n.tuid,
					r = n.placement,
					o = n.userdefine;
				e && "[object Object]" === Object.prototype.toString.call(r) && this.Qe(e, r.processor, r.position, o)
			}
		},
		Qe: function(t, i, n, e) {
			var r = n && document.querySelector(n),
				o = "";
			switch(i) {
				case "0":
					r = (o = r) && o.parentNode;
					break;
				case "1":
					o = this.Ze(r);
					break;
				case "2":
					o = this.tr(r)
			}
			this.ir(t, e, o, r)
		},
		Ze: function(t) {
			var i = t && t.children;
			if(i && 1 < i.length && t.scrollHeight > window.screen.height) {
				var n = i.length;
				return i[Math.ceil(n / 2)]
			}
		},
		tr: function(t) {
			var i = t && t.children;
			if(i && 0 < i.length) return i[i.length - 1]
		},
		ir: function(t, i, n, e) {
			if(!n || !e) return !1;
			var r = document.createElement("div");
			r.id = "_" + Math.random().toString(36).slice(2);
			var o = document.createElement("script");
			o.text = this.nr(t, r.id, i), r.appendChild(o), e.insertBefore(r, n)
		},
		nr: function(t, i, n) {
			var e = '(window.slotbydup = window.slotbydup || []).push({ id: "' + t + '", container:"' + i + '", exps:"' + a.pt + '", isAutoAd:true',
				r = e + "});";
			return(n = window.JSON && window.JSON.stringify && n && "object" == typeof n && JSON.stringify(n)) && (r = e + ", coa:" + n + "});"), r
		}
	}
}, function(t, i, n) {
	var a = n(0),
		s = {};
	t.exports = {
		je: function(t, i, n) {
			if(i) {
				var e = document.createElement("script");
				e.type = "text/javascript", e.async = !0, e.src = i;
				var r = a.C(this, this.er, t, e);
				e.onload = e.onerror = e.onreadystatechange = r;
				var o = document.getElementsByTagName("script")[0];
				o.parentNode.insertBefore(e, o), s[t] = n
			}
		},
		er: function(t, i, n) {
			n = 3 === arguments.length ? (i = i, n) : i = t;
			var e = s[i];
			n && /loaded|complete|undefined/.test(n.readyState) && (n.onload = n.onerror = n.onreadystatechange = null, n = undefined, e && e())
		}
	}
}, function(t, i, n) {
	var a = n(2),
		s = n(1),
		c = n(3),
		u = n(14),
		h = n(10),
		f = n(11),
		d = n(8),
		l = n(39),
		e = n(13),
		v = n(0),
		r = n(4),
		o = n(40),
		p = !(r.ie && r.ie < 8);
	t.exports = {
		rr: function(n) {
			var t = s.g(n.containerId);
			e.L(t, "mouseover", function(t) {
				var i = t.target || t.srcElement;
				"iframe" !== i.tagName.toLowerCase() && "iframe" !== i.nodeName.toLowerCase() || l.or("mouseover", n.id)
			})
		},
		ar: function(t) {
			if(t.isUnion) {
				var i = o.sr(t),
					n = o.ar(t);
				return n && o.cr(i, t.containerId), n
			}
			return !0
		},
		ur: function(t, i) {
			0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
		},
		render: function(t) {
			c.Bt(t.id, a.ct);
			var i = s.g(t.containerId);
			if(!c.ii(t)) return c.Bt(t.id, a.ut), !1;
			var n = t.containerInfo.slide,
				e = n && !v.f(n) && p;
			if(e && (l.hr(t), this.rr(t)), this.ar(t))
				if(d.Fi(t), f.renderRichMaterial(t)) p && setTimeout(function() {
					l.or("adloaded", t.id)
				}, 800);
				else {
					var r = c.processSlotInfo(t);
					t.width = r.width, t.height = r.height, this.ur(i, t);
					var o = u.getFrameHTML(t);
					i.innerHTML = o, h.regisetViewWatch(t), t.isPdbAd || c.Bt(t.id, a.ut), e && setTimeout(function() {
						l.or("adloaded", t.id)
					}, 800)
				}
		}
	}
}, function(t, i, n) {
	var v = n(1),
		r = n(13),
		p = n(3),
		_ = {},
		w = {},
		e = !1,
		c = {
			up: {},
			down: {},
			left: {},
			right: {}
		};
	t.exports = {
		fr: function(t, i) {
			var n = p.Ct(t),
				e = v.g(n.containerId);
			if(e) {
				var r = e.getElementsByTagName("iframe")[0];
				i = JSON.stringify(i), r.contentWindow.postMessage(i, "*")
			}
		},
		dr: function(t) {
			return window.getComputedStyle ? window.getComputedStyle(t).width : t.currentStyle.width
		},
		lr: function() {
			var n = this;
			(window.addEventListener || window.attachEvent) && JSON && JSON.parse && r.L(window, "message", function e(t) {
				if("string" != typeof t.data) return !1;
				var i = JSON.parse(t.data);
				if(!i.title || "baidudup" !== i.title) return !1;
				if("invokeMethod" === i.type) switch(i.method) {
					case "expand":
						n.vr(i.parameters[0]);
						break;
					case "close":
						n.pr(i.parameters[0])
				}
			}), r.L(window, "scroll", function() {
				n._r()
			}), r.L(window, "resize", function() {
				n._r()
			})
		},
		_r: function() {
			var t = c;
			for(var i in t)
				for(var n in t[i]) {
					var e = t[i][n];
					if(!e.isExpand) return;
					var r = e.origin,
						o = r.getElementsByTagName("iframe")[0],
						a = (e.targetWidth, e.targetHeight, e.originWidth);
					e.originHeight;
					switch(i) {
						case "up":
						case "down":
							s = parseInt(this.dr(r), 10);
							o.style.left = 0;
							break;
						case "left":
							s = parseInt(this.dr(r), 10);
							o.style.right = s - a + "px";
							break;
						case "right":
							var s = parseInt(this.dr(r), 10);
							o.style.left = 0
					}
				}
		},
		wr: function(t, i, n, e, r, o, a) {
			if(!c[t][i]) {
				var s = c[t][i] = {};
				s.isExpand = !0, s.origin = n, s.originWidth = e, s.originHeight = r, s.targetWidth = o, s.targetHeight = a
			}
		},
		mr: function(t, i, n, e, r, o) {
			this.wr("up", t, i, n, e, r, o);
			var a = i.getElementsByTagName("iframe")[0];
			a.style.bottom = 0, a.style.left = 0
		},
		gr: function(t, i, n, e, r, o) {
			this.wr("down", t, i, n, e, r, o);
			var a = i.getElementsByTagName("iframe")[0];
			a.style.top = 0, a.style.left = 0
		},
		yr: function(t, i, n, e, r, o) {
			this.wr("left", t, i, n, e, r, o);
			var a = i.getElementsByTagName("iframe")[0],
				s = parseInt(this.dr(i), 10);
			a.style.bottom = 0, a.style.right = s - n + "px"
		},
		br: function(t, i, n, e, r, o) {
			this.wr("right", t, i, n, e, r, o);
			var a = i.getElementsByTagName("iframe")[0];
			a.style.bottom = 0, a.style.left = 0
		},
		vr: function(t) {
			if(!_[t]) {
				_[t] = !0;
				var i = p.Ut(t),
					n = i.containerInfo,
					e = n.width,
					r = n.height,
					o = n.slide,
					a = o.slideWidth,
					s = o.slideHeight,
					c = 1e3 * parseInt(o.extendTime, 10),
					u = parseInt(o.slideMode, 10),
					h = parseInt(o.direction, 10),
					f = v.g(i.containerId),
					d = f.getElementsByTagName("iframe")[0];
				if(1 === h || 2 === h ? (d.setAttribute("height", s), d.style.height = s + "px") : 3 !== h && 4 !== h || (d.setAttribute("width", a), d.style.width = a + "px"), 2 === u && 2 === h || 2 === u && 4 === h) switch(h) {
					case 2:
						d.setAttribute("height", s), d.style.height = s + "px";
						break;
					case 4:
						d.setAttribute("width", a), d.style.width = a + "px"
				} else switch(f.style.position = "relative", d.style.position = "absolute", f.style.height = r + "px", h) {
					case 1:
						this.mr(t, f, e, r, a, s);
						break;
					case 2:
						this.gr(t, f, e, r, a, s);
						break;
					case 3:
						this.yr(t, f, e, r, a, s);
						break;
					case 4:
						this.br(t, f, e, r, a, s)
				}
				var l = this;
				w[t] = setTimeout(function() {
					_[t] && l.pr(t)
				}, Math.min(c))
			}
		},
		pr: function(t) {
			if(_[t]) {
				_[t] = !1, clearTimeout(w[t]);
				var i = p.Ut(t),
					n = i.containerInfo.width,
					e = i.containerInfo.height,
					r = v.g(i.containerId),
					o = r.getElementsByTagName("iframe")[0];
				for(var a in r.style.position = "", r.style.width = "", r.style.height = "", r.style.top = "", r.style.left = "", o.style.position = "", o.style.display = "", o.style.top = "", o.style.left = "", o.style.right = "", o.style.width = "", o.style.height = "", o.setAttribute("height", e), o.setAttribute("width", n), c)
					for(var s in c[a]) s === t && (c[a][s].isExpand = !1)
			}
		},
		hr: function(t) {
			t = p.Ut(t.slotId);
			v.g(t.containerId).style.textAlign = "left", e || (e = !0, this.lr())
		},
		or: function(t, i) {
			var n, e = p.Ut(i).containerInfo.slide;
			e && (n = e.trigger);
			var r;
			["", "BEFORE_PAGELOAD", "AFTER_PAGECLOSE", "PAGE_PERCENT", "mouseover", "click", "adloaded", "SLIP"][(r = n, "[object Array]" === Object.prototype.toString.call(r) ? n[0] : n || 0)] === t && this.fr(i, {
				title: "baidudup",
				type: "eventHappen",
				parameters: [t]
			})
		}
	}
}, function(t, i, n) {
	var s = n(21),
		r = n(1),
		c = "inlay",
		u = "linkunit",
		e = {
			inlay: 25,
			linkunit: 25
		},
		o = {};
	t.exports = {
		ar: function(t) {
			if(!t.isUnion) return !0;
			var i = this.sr(t);
			return this.Ir(i) < e[i]
		},
		Ir: function(t) {
			var i = o[t] || {},
				n = 0;
			for(var e in i) e && i[e] && i.hasOwnProperty(e) && (r.g(e) ? n++ : i[e] = undefined);
			return n
		},
		cr: function(t, i) {
			var n = o[t];
			return n || (o[t] = {}, n = o[t]), n[i] = 1, !0
		},
		sr: function(t) {
			var i = c,
				n = t.response;
			if(!n) return i;
			var e = n.placement;
			if((s.oe(n) || s.ae(n)) && (i = c), e && e.fillstyle)
				for(var r = n.placement.fillstyle.elements || [], o = 0, a = r.length; o < a; o++)
					if(5 === r[o]) return u;
			return i
		}
	}
}, function(t, i, n) {
	var s = n(2),
		e = n(0),
		c = n(1),
		u = n(3),
		h = n(8),
		f = n(14),
		d = n(11);
	t.exports = {
		Sr: function(t) {
			var i = ['<div style="box-sizing: content-box;width:{width}px;height:{height}px;position:relative;margin:0 auto;">', "{iframeHtml}", "</div>"].join("");
			return e.v(i, t)
		},
		ur: function(t, i) {
			0 === i.complementType && (t.style.width = i.width + "px", t.style.height = i.height + "px", t.style.display = "inline-block")
		},
		render: function(t) {
			if(u.Bt(t.id, s.ct), !u.ii(t)) return !1;
			var i = c.g(t.containerId);
			if(h.Fi(t), !d.renderRichMaterial(t)) {
				var n = u.processSlotInfo(t);
				if(t.width = n.width, t.height = n.height, 2 === n.sizeType || 5 === n.sizeType) {
					var e = t.response.pdb_deliv.deliv_des;
					if(e && e._html) {
						var r = (e = e._html).type;
						"text" !== r && "image" !== r && "flash" !== r || (e.width = t.width, e.height = t.height)
					}
				}
				this.ur(i, t);
				var o = {
						id: t.id,
						width: n.width,
						height: n.height,
						iframeHtml: f.getFrameHTML(t)
					},
					a = this.Sr(o);
				i.innerHTML = a, t.isPdbAd || u.Bt(t.id, s.ut)
			}
		},
		Ar: function(t, i) {
			var n = document.createElement("div");
			return n.style.boxSizing = "content-box", n.style.width = t + "px", n.style.height = i + "px", n.style.position = "relative", n.style.margin = "0 auto", n
		}
	}
}, function(t, i, n) {
	var u = n(2),
		h = n(0),
		a = n(7),
		f = n(1),
		d = n(6),
		l = n(3),
		v = n(14),
		p = n(8),
		_ = n(11);
	t.exports = {
		kr: "show",
		Dr: "upSlideShow",
		xr: "downSlideShow",
		Cr: 2,
		Ur: 1,
		Pr: String.fromCharCode(65088),
		Tr: String.fromCharCode(65087),
		Or: function(t, i) {
			var n = !1,
				e = t.containerInfo.location,
				r = t.styleOpenApi,
				o = 2 === r.apType;
			if(2 === e && !o) return !1;
			(1 !== i.sizeType || r.rsi0 || r.rsi1 || r.cpro_w || r.cpro_h) && (n = 3.4 < i.width / i.height);
			return n
		},
		Er: function(t) {
			var i = t.containerInfo,
				n = t.response.placement.fillstyle || {},
				e = parseFloat(n.opacity || .9),
				r = n.backgroundColor || "#000";
			t.styleOpenApi.sizeType && (t.styleOpenApi.sizeType = 2), i.sizeType = 2;
			var o = l.processSlotInfo(t);
			o.backgroundOpacity = e, o.backgroundColor = r;
			var a = 2 === i.location ? 2 : 3;
			return o.locationType = a, o.containerId = t.containerId, o.floatingState = this.Rr(t, a), o
		},
		Sr: function(t) {
			var i = ["{closeBtnHtml}", "{iframeHtml}"].join("");
			return h.v(i, t)
		},
		Br: function(t) {
			var i = "",
				n = "",
				e = "0",
				r = 0;
			return r = 2 === t.locationType ? (i = "0 0 40px 40px", e = t.height, n = t.floatingState === this.kr ? this.Tr : this.Pr, this.Ur) : (i = "40px 40px 0 0", e = -20, n = t.floatingState === this.kr ? this.Pr : this.Tr, this.Cr), {
				domId: t.containerId,
				borderRadius: i,
				top: e,
				btnTag: n,
				lineHeight: r
			}
		},
		Mr: function(t) {
			var i = ["<div", ' class="closeBtn"', ' style="', "position:absolute;", "left:50%;", "top:{top}px;", "margin-left: -20px;", "width:40px;", "height:20px;", "background-color:#4a4a4a;", "cursor:pointer;", "border-radius:{borderRadius};", "z-index:2147483647;", "color:#ffffff;", "font-weight:600;", "box-sizing:border-box;", "font-size:14px;", "font-family:'Microsoft Yahei',sans-serif;", 'line-height:{lineHeight};">', "{btnTag}", "</div>"].join(""),
				n = this.Br(t);
			return h.v(i, n)
		},
		ur: function(t, i) {
			var n = 0,
				e = "absolute";
			a.Ui() ? (e = "fixed", i.floatingState !== this.kr && "ontouchend" in document && 0 < i.height && (n = -1 * (i.height + 20))) : n = a.Ai(window) + a._i(window) - i.height;
			var r = 2 === i.locationType ? "top" : "bottom",
				o = 2 === i.locationType ? "border-bottom" : "border-top";
			t.style.cssText = ["box-sizing: content-box;", "display:block", "position:" + e, "z-index:2147483647;", "left:0", r + ":" + n + "px", "background-color:" + i.backgroundColor, "opacity:" + i.backgroundOpacity, "text-align:center", "width:" + i.width + "px", "height:" + i.height + "px", o + ":2px solid #4a4a4a"].join(";")
		},
		Lr: function(t, i, n, e) {
			var r = 2 === i.locationType ? "top" : "bottom";
			"hidden" === n.getAttribute("state") ? this.Fr(r, n, e) : this.jr(r, n, e)
		},
		Fr: function(t, i, n) {
			i.setAttribute("state", "show"), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = "0px", "top" === t ? (n.style.lineHeight = this.Ur, n.innerText = this.Tr) : (n.style.lineHeight = this.Cr, n.innerText = this.Pr)
		},
		jr: function(t, i, n) {
			i.setAttribute("state", "hidden");
			var e = a.mi(i, "height");
			e = e && parseInt(e, 10), i.style.transition = t + " 0.75s", i.style["-webkit-transition"] = t + " 0.75s", i.style["-moz-transition"] = t + " 0.75s", i.style["-o-transition"] = t + " 0.75s", i.style[t] = -1 * e + "px", "top" === t ? (n.style.lineHeight = this.Cr, n.innerText = this.Pr) : (n.style.lineHeight = this.Ur, n.innerText = this.Tr)
		},
		render: function(t) {
			if(!l.ii(t)) return !1;
			l.Bt(t.id, u.ct), this.id = t.id;
			var i = this.Er(t);
			p.Fi(t);
			var n = _.renderRichMaterial(t),
				e = f.g(t.containerId);
			if(!n && e && this.Or(t, i)) {
				this.ur(e, i);
				var r = this.Mr(i);
				this.Nr(i, t), d.di("BAIDU_SSP_floatShow_", h.C(this, this.Hr));
				var o = {
						closeBtnHtml: r,
						iframeHtml: v.getFrameHTML(t)
					},
					a = this.Sr(o);
				e.innerHTML = a;
				var s = e.getElementsByClassName("closeBtn")[0];
				if(s) {
					var c = this;
					f.L(s, "click", function() {
						c.Lr(t, i, e, this)
					})
				}
				t.isPdbAd || l.Bt(t.id, u.ut)
			}
		},
		Hr: function(t, i, n) {
			var e = n.parentElement;
			if(document.body && e) {
				var r = e.getElementsByClassName("closeBtn")[0];
				t = "2" === t ? "top" : "bottom", f.L(document.body, "touchstart", h.C(this, this.Wr)), f.L(document.body, "touchend", h.C(this, this.zr, e, r, t, i))
			}
		},
		Wr: function(t) {
			this.startY = t.targetTouches[0] && t.targetTouches[0].pageY
		},
		zr: function(t, i, n, e, r) {
			this[e] = this[e] || !1, this.pageY = t.changedTouches[0] && t.changedTouches[0].pageY;
			var o = this.pageY - this.startY;
			(o < -10 && !this[e] && r === this.Dr || 10 < o && !this[e] && r === this.xr) && (this[e] = !0, this.Fr(e, i, n))
		},
		Rr: function(t, i) {
			return t.styleOpenApi && t.styleOpenApi.floatingState ? t.styleOpenApi.floatingState : 2 === i ? this.Dr : this.kr
		},
		Nr: function(t, i) {
			if(2 === t.sizeType) {
				var n = i.response.pdb_deliv.deliv_des;
				if(n && n._html) {
					var e = (n = n._html).type;
					"text" !== e && "image" !== e && "flash" !== e || (n.width = i.width, n.height = i.height)
				}
			}
		}
	}
}, function(t, i, n) {
	var r = n(2),
		o = n(0),
		a = n(1),
		e = n(3),
		s = n(12),
		c = n(6),
		u = n(10),
		h = n(4),
		f = n(8);
	t.exports = {
		Vr: {},
		qr: 0,
		Jr: "BAIDU_DUP_MOBILE_INSIDE_TEXT_",
		Gr: 40,
		Xr: 3,
		Kr: 0,
		Yr: {},
		render: function(t) {
			e.Bt(t.id, r.ct), f.Fi(t);
			var i = a.g(t.containerId);
			if(i) {
				c.di(this.Jr, o.C(this, this.$r));
				var n = this.Qr(i);
				n && ("complete" === document.readyState ? (this.Zr(t, i), this.to(n)) : a.L(document, "readystatechange", o.C(this, function() {
					"complete" === document.readyState && (this.Zr(t, i), this.to(n))
				})), u.regisetViewWatch(t), e.Bt(t.id, r.ut))
			}
		},
		Qr: function(t) {
			var i = t.parentNode;
			return i.tagName && "body" === i.tagName.toLowerCase() ? i : this.Qr(i)
		},
		Zr: function(t, i) {
			t.paramObj.dcb = this.Jr, t.paramObj.dtm = r.it, t.paramObj.cec = "utf-8";
			var n = s.getPmpRequestUrl(t),
				e = document.createElement("script");
			e.src = n, e.charset = t.paramObj.cec, i.appendChild(e)
		},
		to: function(t) {
			for(var i = t.childNodes, n = 0; n < i.length; n++) {
				var e = i[n];
				if(a.W(e)) switch(e.nodeType) {
					case 3:
						var r;
						h.ie < 9 && e.nodeValue && (r = e.nodeValue), e.textContent && (r = e.textContent), r && o.I(r) && 0 < r.length && this.io(e);
						break;
					default:
						this.to(e)
				}
			}
		},
		io: function(t) {
			var i = t.parentNode;
			i.innerHTML && (this.Vr["item_" + this.qr] = i, this.qr++)
		},
		$r: function() {
			var t = arguments[0] && arguments[0].slots[0] && arguments[0].slots[0].ads[0];
			if(t) {
				var i = t.data && t.data.meta;
				if(i && 0 !== i.length)
					for(var n in this.Vr) {
						var e = this.Vr[n];
						if(document.contains(e)) {
							for(var r = e.innerHTML, o = 0; o < i.length; o++) r = this.no(i[o], r);
							if(e.innerHTML = r, this.Kr === this.Gr) break
						}
					}
			}
		},
		no: function(t, i) {
			if(!t || !i) return i;
			var n = t.title,
				e = new RegExp(n, "i");
			if(n && 0 < n.length && e.test(i) && this.eo(n, i) && this.ro(n, i)) {
				var r = '<a href="' + (t.curl || "") + '" target="_blank" style="color:#38f;text-decoration:none">' + n + "</a>";
				if(this.Yr[n] || (this.Yr[n] = 0), this.Kr < this.Gr && this.Yr[n] < this.Xr) return this.Kr++, this.Yr[n]++, i.replace(e, r)
			}
			return i
		},
		eo: function(t, i) {
			var n = i.indexOf(t),
				e = n - 4,
				r = n + t.length,
				o = "</a>" === i.substr(e, 4),
				a = "<a " === i.substr(r, 3);
			return !o && !a
		},
		ro: function(t, i) {
			var n = new RegExp("<[^>]*" + t + "[^<]*>", "i"),
				e = new RegExp(">[^<]*" + t + "[^>]*</", "i");
			return !n.test(i) && !e.test(i)
		}
	}
}, function(t, i, n) {
	var e = n(2),
		r = n(15),
		o = String.fromCharCode(Math.floor(26 * Math.random()) + 97),
		a = String.fromCharCode(Math.floor(26 * Math.random()) + 97);
	e.Y || (e.Y = e.J + e.K + o + "c" + a + "m?"), e.ht && r.On()
}]);
//# sourceMappingURL=remoteNew.min.js.map