(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.thresh = function() {
	this.initialize(img.thresh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F9C7").s().p("AggAnIABgSQADAHAIAAQAHAAAFgIIABgCIgXgtQgHgMgFgBIAgAAQgEABAAAEQAAADACADIAPAeIAPgeIACgGQAAgDgFgCIAcAAQgFABgGANIgaAvQgKAUgQAAQgHAAgFgCg");
	this.shape.setTransform(105.6,0,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F9C7").s().p("AgeAoQAHAAAAgNIAAg0QAAgIgDgDQgDgDgCAAIAkAAQANAAAHAHQAHAHAAAKQAAALgIAHQgIAHgOAAQgFABgEgCIAAASQAAAKAHADgAgHgBIAIABQANAAAAgOQAAgGgEgEQgEgEgGAAIgHAAg");
	this.shape_1.setTransform(81.9,-0.3,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F9C7").s().p("AgZAoQAGgCAAgLIAAg1QAAgKgHgDIA1AAIAAAVQgDgKgMAAIgOAAIAAA3QAAALAFACg");
	this.shape_2.setTransform(62.3,-0.3,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F9C7").s().p("AALAoQAHgCAAgLIAAgmIgiAoQAAAJAGACIgdAAQAGgDAAgKIAAg1QAAgLgHgCIAeAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBABQgCADAAAHIAAAmIAigoQAAgJgHgCIAeAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBABQgCADAAAHIAAA1QAAALAGACg");
	this.shape_3.setTransform(39.9,-0.3,3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F9C7").s().p("AgeAoQAGgBAAgNIAAg0QAAgLgGgCIAdAAQgGACAAALIAAARIAKAAQAOAAAIAHQAGAGAAAKQAAALgHAIQgIAHgOAAgAgHAdIAHAAQAOAAAAgOQAAgOgOAAIgHAAg");
	this.shape_4.setTransform(8.3,-0.3,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F9C7").s().p("AgNAoQAFgDAAgKIAAg3IgOAAQgFAAgDADIgFAIIACgWIBDAAIACAWQgEgLgKAAIgNAAIAAA3QAAAKAGADg");
	this.shape_5.setTransform(-13.8,-0.3,3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F9C7").s().p("AAMAoQAEgCAAgEIgEgNIgeAAIgCAHIgBAGQAAAEAFACIgbAAQAGgDAFgMIAZhAIANAAIAbBAQAEAMAHADgAgOAKIAWAAIgKgcg");
	this.shape_6.setTransform(-33.9,-0.3,3,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F9C7").s().p("AAGAoQAHgBAAgMIAAgTQgJADgIAAQgZAAAAgaIAAgMQAAgKgGgCIAcAAQgGACAAAKIAAAMQAAAPANAAQAGAAAHgCIAAgVQAAgPgGgBIAdAAQgGACAAALIAAAyQAAAPAGABg");
	this.shape_7.setTransform(-59.3,-0.3,3,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3F9C7").s().p("AAMAoQAFgCgBgEIgEgNIgeAAIgEANQAAAEAGACIgbAAQAGgDAFgMIAZhAIANAAIAbBAQAEAMAHADgAgNAKIAVAAIgLgcg");
	this.shape_8.setTransform(-79.4,-0.3,3,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F9C7").s().p("AALAoQAGgDAAgKIAAgWIghAAIAAAWQAAAKAGADIgeAAQAGgBAAgMIAAg1QAAgHgCgDQgBgBAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIAeAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAABQgDADAAAHIAAAVIAhAAIAAgVQAAgNgGAAIAdAAQgGAAAAANIAAA1QAAAKAHADg");
	this.shape_9.setTransform(-106.2,-0.3,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_4, new cjs.Rectangle(-118.4,-12.3,236.9,24.8), null);


(lib.txt_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F9C7").s().p("AAMAzQAFgCABgLIAAgmIgiAoQAAAKAGABIgeAAQAHgCAAgLIAAg0QAAgKgHgDIAeAAQgGAAAAANIAAAlIAignQgBgJgFgCIAcAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDAEAAAHIAAA0QABAKAFADgAgTgwIAMgDQAAALAIAAQAHAAABgLIALADQgDAPgRAAQgQAAgDgPg");
	this.shape.setTransform(139.8,-0.3,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F9C7").s().p("AgdAeQgKgLAAgSQAAgRALgMQAMgNARAAQASAAALAMQAKALAAASQAAARgLAMQgMANgRAAQgSAAgLgMgAgQgVQgGAHAAANQAAANAHAJQAGAJAKAAQAKAAAGgIQAGgHAAgNQAAgNgGgIQgHgJgLAAQgJAAgGAHg");
	this.shape_1.setTransform(113,3,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F9C7").s().p("AgfAoQAHgCAAgMIAAg0QAAgLgHgCIA6AAIAAAVQgDgKgLAAIgVAAIAAAVIAMAAQAOAAAHAGQAHAGAAAJQAAALgIAHQgHAIgOAAgAgIAdIAJAAQAOAAgBgOQAAgNgOAAIgIAAg");
	this.shape_2.setTransform(88.5,3.1,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F9C7").s().p("AgfAoQAFgCABgMIAAgzQgBgHgDgFQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIAnAAQALAAAGAGQAGAGAAAHQAAAHgEAFQgEAFgHACQAJABAFAFQAFAGgBAIQAAAIgFAGQgHAHgLAAgAgJAdIAMAAQANAAgBgMQABgNgOAAIgLAAgAgJgFIAKAAQALgBAAgMQAAgKgLAAIgKAAg");
	this.shape_3.setTransform(58.5,3.1,3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F9C7").s().p("AgeAoQAGgCAAgMIAAg0QAAgLgGgCIAdAAQgHACAAALIAAARIALAAQAOAAAIAHQAGAFAAALQAAALgIAHQgIAIgNAAgAgIAdIAIAAQAOAAAAgOQAAgOgOAAIgIAAg");
	this.shape_4.setTransform(29,3.1,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F9C7").s().p("AgOAoQAGgDAAgLIAAg2IgOAAQgGAAgDADIgEAHIACgVIBDAAIACAVIgEgHQgEgDgHAAIgNAAIAAA2QABALAFADg");
	this.shape_5.setTransform(6.9,3.1,3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F9C7").s().p("AALAoQAHgCAAgMIAAgmIgiApQAAAJAGACIgdAAQAGgDAAgLIAAgzQAAgMgHgCIAeAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQgCAEAAAIIAAAlIAigoQAAgJgHgCIAeAAQgGAAAAAOIAAAzQAAAMAGACg");
	this.shape_6.setTransform(-18.3,3.1,3,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F9C7").s().p("AAKAoQAGgCAAgMIAAg2IgfAAIAAA2QAAAMAGACIgdAAQAGgCAAgMIAAgzQAAgMgHgCIBOAAQgFADAAALIAAAzQAAAMAFACg");
	this.shape_7.setTransform(-44.6,3.1,3,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3F9C7").s().p("AggAnIABgSQAEAHAHAAQAHAAAGgIIABgCIgZgtQgFgMgGgBIAhAAQgEABgBAEIACAGIAPAeIAQgeIABgGQAAgDgFgCIAcAAQgEABgHANIgaAvQgJAUgRAAQgHAAgFgCg");
	this.shape_8.setTransform(-70.5,3.5,3,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F9C7").s().p("AgOAoQAGgDAAgLIAAg2IgPAAQgFAAgDADIgEAHIACgVIBDAAIACAVIgEgHQgFgDgGAAIgNAAIAAA2QABAMAGACg");
	this.shape_9.setTransform(-95.3,3.1,3,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3F9C7").s().p("AgWAdQgKgLAAgQQAAgRALgMQAMgOATAAQAMAAAKAFIAAAXQgHgQgQAAQgKAAgHAJQgGAIAAAMQAAAMAGAJQAHAIAKAAQAPAAAJgMIAAAOQgJALgRAAQgSAAgLgNg");
	this.shape_10.setTransform(-118.5,3,3,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F9C7").s().p("AggAoQAHgDAAgLIAAgzQAAgHgDgFQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIAoAAQALAAAHAGQAFAGAAAHQAAAHgEAFQgEAFgGACQAIABAFAFQAFAGAAAIQgBAIgFAGQgHAHgLAAgAgIAdIAKAAQAOAAAAgMQAAgNgPAAIgJAAgAgIgFIAJAAQALgBAAgMQAAgKgLAAIgJAAg");
	this.shape_11.setTransform(-141.8,3.1,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_3, new cjs.Rectangle(-151.8,-15.8,303.8,31.7), null);


(lib.txt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F9C7").s().p("AgOAoQAGgDAAgLIAAg2IgOAAQgGAAgDADIgEAHIACgVIBDAAIACAVQgEgKgLAAIgMAAIAAA2QAAALAGADg");
	this.shape.setTransform(145.1,0.1,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F9C7").s().p("AALAoQAGgCAAgMIAAgVIghAAIAAAVQAAALAGADIgeAAQAHgDAAgLIAAgzQAAgIgDgEQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIAeAAQgGAAAAAOIAAAUIAhAAIAAgUQAAgOgGAAIAeAAQgGAAAAAOIAAAzQAAALAGADg");
	this.shape_1.setTransform(120,0.1,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F9C7").s().p("AgcAoQAHgDAAgMIAAgyQAAgIgDgEQgDgCgCAAIA2AAIAAAVQgEgKgLAAIgOAAIAAAXIAMAAQAGAAAEgEIAAASQAAgEgKAAIgMAAIAAAYIAPAAQAIAAAEgDQADgCAEgHIgEAXg");
	this.shape_2.setTransform(96.9,0.1,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F9C7").s().p("AALAoQAHgCAAgMIAAgmIgiApQAAAJAGACIgeAAQAHgCgBgMIAAgzQABgLgHgDIAeAAQgGAAAAAOIAAAlIAigoQAAgIgHgDIAdAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgDAEABAIIAAAzQAAALAFADg");
	this.shape_3.setTransform(73.6,0.1,3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F9C7").s().p("AALAoIADgBQACgBAAgEIgCgGIgQgpIgQAqIgBAFQAAADAEADIgbAAQAGgCAFgOIAZg/IAMAAIAaBAQAFAMAGADg");
	this.shape_4.setTransform(47.2,0.1,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F9C7").s().p("AANAoIgcglIAAAXQAAALAGADIgeAAQAGgDABgLIAAgzQAAgIgDgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIAeAAQgGAAAAAOIAAAWIASgWQAHgHAAgEQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIAgAAQgIACgLAMIgUAWIAXAcQAIALAJAEg");
	this.shape_5.setTransform(22.8,0.1,3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F9C7").s().p("AgeAoQAGgCAAgMIAAg0QAAgLgGgCIAdAAQgGACAAALIAAARIAKAAQAOAAAIAHQAGAFAAALQAAALgHAHQgIAIgOAAgAgHAdIAHAAQAOAAAAgOQAAgOgOAAIgHAAg");
	this.shape_6.setTransform(-8.7,0.1,3,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F9C7").s().p("AgNAoQAFgDAAgLIAAg2IgOAAQgFAAgDADIgFAHIACgVIBDAAIACAVQgEgKgKAAIgNAAIAAA2QAAALAGADg");
	this.shape_7.setTransform(-30.8,0.1,3,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3F9C7").s().p("AAMAoQAEgCAAgEIgEgNIgeAAIgCAIIgBAEQAAAFAFACIgbAAQAGgDAFgNIAZg/IANAAIAbBAQAEAMAHADgAgOALIAWAAIgKgdg");
	this.shape_8.setTransform(-50.8,0.1,3,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F9C7").s().p("AAGAoQAHgCAAgLIAAgUQgJAEgIAAQgZAAAAgZIAAgNQAAgKgGgCIAcAAQgGACAAAKIAAAMQAAAPANAAQAGAAAHgCIAAgUQAAgPgGgCIAdAAQgGACAAAMIAAAwQAAAPAGACg");
	this.shape_9.setTransform(-76.2,0.1,3,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3F9C7").s().p("AAMAoQAFgCgBgEIgEgNIgeAAIgEAMQAAAFAGACIgbAAQAGgDAFgNIAZg/IANAAIAbBAQAEAMAHADgAgNALIAVAAIgLgdg");
	this.shape_10.setTransform(-96.3,0.1,3,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F9C7").s().p("AANAoIgcglIAAAXQAAALAGADIgeAAQAHgDAAgLIAAgzQAAgIgDgEQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIAeAAQgGAAAAAOIAAAWIATgWQAGgHAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIAfAAQgGAAgNAOIgUAWIAXAcQAIALAJAEg");
	this.shape_11.setTransform(-121.2,0.1,3,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3F9C7").s().p("AgWAdQgKgLAAgQQAAgRALgMQAMgOATAAQANAAAJAFIAAAXQgGgQgRAAQgJAAgHAJQgHAIAAAMQAAAMAGAJQAHAIAKAAQAPAAAJgMIAAAOQgJALgRAAQgSAAgLgNg");
	this.shape_12.setTransform(-145.8,0,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_2, new cjs.Rectangle(-155.7,-12.5,311.6,25.1), null);


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F9C7").s().p("AAGAoQAHgCAAgMIAAgSIgDAAQgHAAgDAIIgLAYIgYAAQAHgCADgHIAJgQQAEgHAEgCQgTgEAAgRQAAgKAHgGQAIgIANAAIAjAAQgIACAAAMIAAAzQABALAFADgAgHgYQgDADAAAGQAAAFADAEQAFAFAGAAIAJAAIAAgbIgJAAQgGAAgFAEg");
	this.shape.setTransform(192.6,0.1,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F9C7").s().p("AgWAdQgKgLAAgQQAAgRALgMQAMgOATAAQAMAAAKAFIAAAXQgGgQgRAAQgKAAgHAJQgGAIAAAMQAAAMAGAJQAHAIAKAAQAPAAAJgMIAAAOQgJALgRAAQgSAAgLgNg");
	this.shape_1.setTransform(170.2,0,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F9C7").s().p("AgeAoQAGgCAAgMIAAg0QAAgMgGgBIAdAAQgHABAAAMIAAARIALAAQAOAAAIAHQAGAFAAALQAAALgIAIQgIAHgNAAgAgIAdIAIAAQAOAAAAgOQAAgOgOAAIgIAAg");
	this.shape_2.setTransform(148.1,0.1,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F9C7").s().p("AgOAoQAGgDAAgLIAAg2IgOAAQgGAAgDADIgEAHIACgVIBDAAIACAVIgFgHQgDgDgHAAIgNAAIAAA2QABALAFADg");
	this.shape_3.setTransform(126,0.1,3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F9C7").s().p("AAMAoQAEgCAAgEIgEgNIgdAAIgEANQAAADAFADIgbAAQAGgCAFgNIAZhAIAOAAIAaBAQAEAMAHADgAgNAKIAVAAIgKgcg");
	this.shape_4.setTransform(105.8,0.1,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F9C7").s().p("AggAoQAGgDAAgLIAAgzQAAgOgHAAIAoAAQALAAAGAGQAGAFAAAJQAAAOgOAEQAIABAFAGQAFAFAAAHQAAAJgGAGQgHAHgMAAgAgJAdIAMAAQANAAAAgMQAAgNgPAAIgKAAgAgJgGIAKAAQALAAAAgMQAAgKgLAAIgKAAg");
	this.shape_5.setTransform(80.7,0.1,3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F9C7").s().p("AgdAeQgKgLAAgSQAAgRALgMQAMgNASAAQARAAALAMQAKALAAASQAAARgLAMQgMANgRAAQgSAAgLgMgAgPgVQgHAHAAANQAAANAHAJQAGAJALAAQAJAAAGgIQAGgHAAgNQAAgNgGgIQgHgJgKAAQgKAAgFAHg");
	this.shape_6.setTransform(55.9,0,3,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F9C7").s().p("AgdAoQAFgBAAgNIAAgzQAAgIgDgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIAjAAQAMAAAIAIQAGAHABAJQAAAMgIAGQgIAIgOgBIgKgBIAAARQAAALAHADgAgIgBIAIABQAOAAAAgOQAAgOgOAAIgIAAg");
	this.shape_7.setTransform(32,0.1,3,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3F9C7").s().p("AALAoQAGgCAAgMIAAglIghAoQAAAJAGACIgdAAQAGgDAAgLIAAg0QAAgLgHgCIAeAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQgCAEAAAHIAAAmIAhgoQAAgJgGgCIAeAAQgGAAAAANIAAA0QAAAMAGACg");
	this.shape_8.setTransform(7.9,0.1,3,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F9C7").s().p("AgeAoQAHAAAAgOIAAgzQAAgIgDgEQgDgCgCAAIAkAAQANAAAHAIQAHAHAAAJQAAALgIAHQgIAIgOgBQgFAAgEgBIAAARQAAALAHADgAgHgBIAIABQANAAAAgOQAAgGgEgEQgEgEgGAAIgHAAg");
	this.shape_9.setTransform(-15.8,0.1,3,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3F9C7").s().p("AgNAoQAFgDAAgLIAAg2IgOAAQgIAAgFAKIACgVIBEAAIABAVQgEgKgKAAIgNAAIAAA2QAAALAGADg");
	this.shape_10.setTransform(-38.2,0.1,3,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F9C7").s().p("AgWAdQgKgLAAgQQAAgRALgMQAMgOATAAQAMAAAKAFIAAAXQgGgQgRAAQgJAAgHAJQgHAIAAAMQAAAMAGAJQAHAIAKAAQAPAAAJgMIAAAOQgJALgRAAQgSAAgLgNg");
	this.shape_11.setTransform(-61.4,0,3,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3F9C7").s().p("AAMAoQAFgDAAgLIAAglIghAoQAAAJAFACIgcAAQAFgCABgMIAAg0QgBgKgFgDIAdAAQgGAAAAANIAAAmIAhgoQAAgIgFgDIAdAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgCAEgBAHIAAA0QAAALAHADg");
	this.shape_12.setTransform(-86.2,0.1,3,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3F9C7").s().p("AgZAoQAGgCAAgMIAAg0QAAgLgHgCIA1AAIAAAVQgDgKgMAAIgOAAIAAA3QAAALAFACg");
	this.shape_13.setTransform(-108.5,0.1,3,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3F9C7").s().p("AgcAoQAGgDAAgLIAAg0QAAgHgCgEQgDgCgCAAIA1AAIAAAVQgDgKgLAAIgOAAIAAAXIAMAAQAJAAABgEIAAASQgBgEgJAAIgMAAIAAAYIAPAAQAHAAAFgDQADgCAEgHIgEAXg");
	this.shape_14.setTransform(-127.2,0.1,3,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3F9C7").s().p("AgeAoQAGAAAAgOIAAgzQAAgOgGAAIAjAAQAMAAAHAIQAHAHAAAJQAAAMgHAGQgIAIgOgBQgFAAgEgBIAAARQAAAMAHACgAgHgBIAIABQANAAAAgOQAAgOgOAAIgHAAg");
	this.shape_15.setTransform(-147.6,0.1,3,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3F9C7").s().p("AAMAoQAEgCAAgEIgEgNIgeAAIgCAHIgBAGQAAADAFADIgbAAQAGgDAFgMIAZhAIANAAIAbBAQAEAMAHADgAgOAKIAWAAIgKgcg");
	this.shape_16.setTransform(-171.7,0.1,3,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3F9C7").s().p("AgbAkIAAgWQAGAQASAAQAOAAAAgMQAAgNgZAAIAAgKIAIAAQAQAAAAgNQAAgLgMAAQgQAAgGAQIAAgXQALgFANAAQALAAAIAFQAIAGAAAJQAAARgRAEQASADAAAPQAAALgIAGQgIAHgNAAQgRAAgJgGg");
	this.shape_17.setTransform(-194.9,0,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-203.4,-12.5,406.8,25.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74FBFD").s().p("AkPEfQALgEANgJQAbgUALggQANglAagcQAYgZAogYQAOgIBEgWQAsgPAKgZQAMgeAegaQAdgbAdgJQAqgNAJgEQAXgLAIgUQAFgOgFgXQgGgdAGgiQAHgtAOgiQAPgigFAdQgIAvgDAdQgHA2AIAWQAHARAfgFQAKgBABADQACAEgMARQgeArgHANQgLAUgLAkQgJAjgmAmQgZAYgfAVQgPALgfAIIg7ARQg+AUg3AhQguAchFAgQgrAUgJAAQgIAAAQgNgAAABaQgeAFgaANIg9AiQgiASgRAdQgJAPgCALQgGAcAmgeQAhgbAcgjQASgWA0gKIA/gOQARgJgOgGQgIgDgMAAQgMAAgSADgACqgIQgSAEgPAOQgNANAFATQADAJAFAHQAagDAOgUQALgQAAgSQAAgKgLAAIgHABgABIAFQgeATANAGQANAGAEgFIAPgXQAJgJAMAAQAEAAgHgLQgRAIgQAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-28.2,-30,56.5,60.1), null);


(lib.shape_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA62C").s().p("EAhDAMMQEcj5ELlOIAAGBQhiBnhjBfgAIeMMQD2h8D1jEQJnnpDNruIMtAAIAANyQkzGJlWEcgACgMMQD2j6CnktQBAhxAshqIAfhTQBDi2AjlfIAMitIIeAAQg4GhisEnQjKFVnNFRQiCBfh2BKgAuZMMQg6gcguggQA3grBAhAQB/iAAvhrIBHAOQBcAPBjABQE7AFENh7QEPh6CXhqIBhhSIgxBgQg+B4hJB0QizEei7C2gEgnBAMMQgzgtgwgsIhFhGQD4mhGGkrQB7hfB6hIIBig0ICjCmQgbEvBXDYQAdBECBDEQAqBACKBRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shape_btn, new cjs.Rectangle(-266.6,-78,533.3,156), null);


(lib.rnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF9900","#FFCC00","rgba(255,255,255,0)"],[0,0.62,1],0,0,0,0,0,10.2).s().p("AhGBGQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAApgeAdQgdAegpAAQgpAAgdgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rnd, new cjs.Rectangle(-10,-10,20,20), null);


(lib.riot_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB462A").s().p("A0PYuQgQjbgLgXIggikQgiimgIgNQgKgmAAg6QAAh0A2hgIBZjAQBajCAHgEQgPhpgphnQhTjPiGADIgtgDQg5gBg5AHQi2AZhyBqQAwgHAzgGQBkgMAIAFIAXCTQAZCcAQAqQAVA8A8CKQBACVALAJIhqBDQhwBEgeAFQgVAEgxAFQgmADgMAFQhBAbg9AyIixCKQjACThLAqQh1jxgYg/QgOglgjh5Igih2QA7gOBBgTQCDgmAjgaQASgMAUgUQAqgnARghIBVAIIACCbQANguAKhLQATiVgWiRQgThigXhoQgtjNgPgbQAZhrAXh6QAuj1gJhPQgKhcgehZQgchTg8iAQAsgXA1glQBrhKAthEIglAYQgwAeg4AZQi0BSi+AMIgblAQA1ANBsgdQDYg7EQjSIA8B8QBDCdAnCnQBEgiBXgmQCthMBegRICChyQADAAAEADQBFAoBOA2QCdBqAyBCQA1BBAQAXQAXAhA0BVQA8BkANAiQAKAcgHAfIgVA9QgZBEgTAoQgDAGAIAFQAhAeArAiQBVBEAyARQASAKAmAFQBOAMBqgTICqgiQAzg8BBhGQCEiLBLgvQBfg7AegLQApgPCUgaQCigdA1gZQA9geAMhBQALg4gYiKIgah/IFJgmIALAEQBzAsCEAtQEIBbBWAEQBIAIAnADQBFAFAxgOQCKgnBIjVIE0icIAoBMQAsBbATBGIAKB9QAKCcgECaIg2gDQhEgChDAGQjWAUh9BgQgFgggOgkQgbhJgpgWIAgBnQAiCNAMC9IhVCcQhaCqgYBLQg1ClgFBcQgKDDB1CzQgdg3gUi8IAAgBIHIIkIAWDZQAkEVBGExQkxACgWgCIn0hPIgFgBQgFAAgGADQkjB2gSAAIg3gEQhAgFgtgIQASjnAPj8QAfn5gLhqIgtA2Qg8BEhIBFQjoDfkQCcQiFhFiNiNQkakZgqllQgGgngBhJQgCiVAVivIhdgQIgPAvQgRA7gLA9QgkDBAnCJIBDDeQBGDpAOA5QAUBMAEBiQAEBwgUBPIoejoIAokpQAokqgDgDQAGgggBgoQgChNgjgiIgNgTQgRgXgXgQIANhZIB/B6QgEgLgKgTQgTgngYgkQhNhzhigrIAahgQAahhgBgGIithLIgrA+Qg5BLhKA/QjsDJk1AHQBaAXB/gNQD+gZC3iwIB2CoQB2CpAAACQAAACAXAtQAVA6gPBBIg7HTQgNBtAHB2QALCyA+AlIAFimIIIDVIjUH6IiDglQiKgiglAJQgtAMgtAaQg5Ahk8DJIjxACQgGhpgJhugAFOgHQBVByCMAOQBmAKBsg+QBrg9A/hoQBFhxgLh6QgMiLhzh5QAZAFAhAMQBEAYAxAgIgLgVQgQgZgYgXQhQhKiNgSIhAgJQhKgHgzAKQhVARgkASQhGAjhPBhQhUBngXBQQgRA9gCCSIABAWQACAcAHAcQAaBZBLA4QgTgbgTgoQgkhPAHhBIAIAvQATA3A4AkQgMgQgLgZQgWg0AGgxQAPA3ArA6gAT8AjQAygiBnjsIBdjmQAKgiADg8IAChHIALj0QA3AnBKAXIA/AQQgQgOiYhtIiUhqIq9AfQDPAbDjCaQBxBNBJBIQAOAKgJAjQgFASgIAPQgCAThJCXIhICTQgZAkgSBfQgIAvgEAoIBnjSgAz9qPQAJAcgRA7QgIAdgKAYQBmhMA0jYQAQhDAKhJIAGg8QhBgbh8hNQg+gngxghQjuBPiOCRQhIBIgYA5QBAhAAzgjIAmgVIgCFhQglAAgtgPQgWgIgQgIQDQCJDQhIQBBgWA5gpIAsgkg");
	this.shape.setTransform(-0.1,-7.9,0.226,0.226);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjGG5IgIgCQgLgFgNgNQgqgogwhkIhAhyQhZiQh7iUQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQBTggAegfQB8itBIhPQADgCACACID8DGQAFAFADgEICDhzQACgDAEACICKBPQAEABACgCIBkhyQADgEADADICuCQIABADQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgVAjgDAxQgFBTA1BcIAVAwQATAzgLAKIg4AqQhBAugnARQgDABgCgDQg1hKgYg1IgGgPQgFgKgJgYQgRgvgRhCIABBAQAFBJAQAzIAQAsQAWAwAXAZQACACAAADQABADgDACQgzAghCAdQgGABgDgDQgmgkgog8QhFhngph+IgBgBIAIBIQALBTAQArQAQAtAeAtQAaAmAWATQAFAGgCACQgYAQiLAkQgEABgDgDQhThxgZgsQgHgNgQgmQgghLgph4IAHA0QAJBAAOA7QAsC9BHA8Ig5AYQgqANgiAAQgSAAgPgEg");
	this.shape_1.setTransform(-4.7,-40.4,0.226,0.226);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BQQhAgIgsgqQB5gNB5gyIBhgvQhgChh0AAIgTgBg");
	this.shape_2.setTransform(-3.9,-30.3,0.226,0.226);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNDZQhJgUhAgtIA8hJQByBFB8AAQBDABAmgTQAlgRAAgcQAAgbgpgIQgXgEhbgFQiHgGg9geQhCgeAAhCQAAhDBBgmQBDgoB5AAQCkAABlBDIg/BIQhegzhoAAQhFAAglANQgkAMAAAXQAAAXAnAJQAZAGAyACQBKAEAVACQBuAKAwAdQA0AgAABAQAABKhEApQhFAph/AAQhVAAhHgUg");
	this.shape_3.setTransform(58.5,52.9,0.226,0.226);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj9DiIAAnDIHpAAIAABXIl7AAIAABcIEHAAIAABWIkHAAIAABjIGNAAIAABXg");
	this.shape_4.setTransform(31.3,52.9,0.226,0.226);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADaDiIAAlAIgCAAIjYECIjWkCIgCAAIAAFAIhuAAIAAnDICBAAIDFDvIDHjvICAAAIAAHDg");
	this.shape_5.setTransform(0.8,52.9,0.226,0.226);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADFDiIg0hhIkhAAIgzBhIhwAAIDwnDICHAAIDwHDgAhjAqIDGAAIhji5g");
	this.shape_6.setTransform(-29.2,52.9,0.226,0.226);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiEDcQg7gUgrgkQhOhAAAhkQAAhiBPhBQAsgkA7gUQA7gTBDgBQCxABBVBrIhyAoQg5g7hcgBQhXAAg4AsQg4AqAABBQAABHBDAsQA3AkBOABQBCAAA2gbQA0gaAXgrIjaAAIAAhWIFUAAIAAAaQAABnhSBCQgsAjg8AUQg9AThGAAQhEAAg8gTg");
	this.shape_7.setTransform(-57.6,52.9,0.226,0.226);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EgQJAgPQiMgKhzgVQg6gLgdgJQAQkLgdj6QgKhOgMhDIgLgzQhhgXiug9QhXgfhEgaQhCA+kcDEQiOBiiCBVQiTjziRl+Qgth4goh3IgfhfQEPgjDWhZQBDgcA1gdIAogZQgEjphAiyQgUg2gYgsQgLgVgIgLQAsigATjZIAJi6QgChXgWicIgXiMQABgCh8AUIh7AVIg0o6QDMBEFojPQBwhAB0hUIBbhIICmGIQCUhVCxhTIDohnIDhBtQAzgZBMg5IBDg1QAqgkBVhgIBMhYIFADjIDqiqQAOAHGgEWIg/CqIDhAHIgSiJQAhgEHzgaIADABQBhAdCrAwQDZA8CEAeQB/AdBDgNQAVgEAMgIIAJgHQAWgiAFhZIAChTQDRg6C6hTICQhGQAxBgBLDrQAlB2AcBiIANIlIiMgEQiZgChGAGQhFAHhDAdQgiAOgUANIAsDZQjOCChDC9QgiBfAIBEQAlCmDQDsQBoB2BiBVQAYBlBnFlQAUBRDKJkInMAPQhXAGhTgOQgqgGgYgIQiygziVgRQhLgIgnACQgqADiVBJQhKAkhCAkQgnADipgJIiigLQA5lmAKk4QAChhgChRIgDg+QiTCUi2BzQhcA5g9AcQh2hDiPhvQhHg3gxgrIj5PVQkHhWiDgMQhBgGgOAMQg/AwmAESg");
	this.shape_8.setTransform(-1.7,-9.1,0.226,0.226);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgQLAhsQiSgLh3gWQg8gKgjgKIg9gTIAEg/QANjNgYjJQgRiNgbhfQiLgmjRhOQhjBQjgCiQjFCQgwAfIhFAsIgqhGQiVj2iRl9Qgvh5goh6IgjhrIgchbIBegMQDLgaCsg7QBzgnBTgvQgJi/g1iVQgQgugTgkQgKgSgGgJIgXggIAKgmQApiTASjLQAIhaADhkQgCg3gIhUQgIhRgKg+IkXAlIg3sMQCAAfAdABQDMAIFUjUQBrhCBrhQIBWhEIC5GeIH2j3IDtBuQBAgnBQhDQA9g0CFieIAvg4IFODrIDminIICFcIJegmQC/A9DBA3QGDBrANgqQAHgTADgoQAEgngCgmIgEhBIA+gRQDHg3C0hPICNhGIBKgqIAmBMQAzBkBLDqQAmB3AeBsIADAKIAPKFIhWgDIhFgDQhRgChBAAQhaAAguAFQg3AEgzAXIAqDTIgyAfQg9AogxAwQifCXAJChQAgCIDPDoQBoB1BhBZICEHfIAAABID/MWIpuAVQhIAAhFgMQgngHgbgIQiag6iQgLQhIgHgqAFQgaAEhdAsQhYAphbAyIgQAIInlgWIAOhWQA9mIAFlHQh6BliHBPQhDAogyAXIglAQIgjgUQiEhMiih/IjxOtIhQgbQkjhfhwAAIgJAAQhZBDlbD3IgXARg");
	this.shape_9.setTransform(-1.7,-9.4,0.226,0.226);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AzQWTQpNhynJjVQnDjTj5kUQkIkkAAlBQAAlAEIkkQD6kUHCjSQHKjWJMhyQJNhyKDAAQKFAAJMByQJNByHJDWQHFDUD3ESQEIEjAAFBQAAFDkIEiQj4EUnEDTQnJDVpMByQpMByqGAAQqEAApMhyg");
	this.shape_10.setTransform(0,-10.7,0.226,0.226);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AziXiQpUh1nSjZQnRjakFkfQkck7AAlgQAAlfEck6QEFkhHRjZQHSjZJVh1QJVhzKMgBQKNABJWBzQJVB1HRDZQHTDaEDEgQEcE5AAFgQAAFhkcE6QkFEgnRDZQnRDZpVB1QpVBzqOABQqMgBpWhzg");
	this.shape_11.setTransform(0,-10.7,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.riot_logo, new cjs.Rectangle(-75,-58.2,150,116.6), null);


(lib.pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thresh();
	this.instance.parent = this;
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic, new cjs.Rectangle(-300,-300,600,600), null);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74FBFD").s().p("AgNABQAFgCARgDIAKgBQgPACgWAJg");
	this.shape.setTransform(13.7,-12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#74FBFD").s().p("AANgRIgFARQgHAPgNACg");
	this.shape_1.setTransform(17.5,-14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#74FBFD").s().p("AAsAaQgQgEgHgMQgFgJgLAEIgIAFQgLgCgLgGQgWgKgCgSQALAPAeAEQAfAFAPAMQARARgIAAIgDgBg");
	this.shape_2.setTransform(19.2,-17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#74FBFD").s().p("AgFADIgNAAQAkgSABAEQABADgFAVQgHgIgNgCg");
	this.shape_3.setTransform(12.2,-22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#74FBFD").s().p("AixDfQACgGAagoQALgRABgfQAAgfAKgOQAKgOAdgLQAagJADgLQAEgNAmgaIAjgWQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgFgEgMAAQgMAAAEgVQAIgbAAgMQABgOAJgGIAJgCQAUgUAcgZQA4gyArgXIhBBBIgxAlQgiAZgCAPQgFAiAvACQAeACADgCQAcgBAPgjQAHgSAogQIgcApQgWAfgQAPQgTASgVgCIgRgGIgaAiQgYAmAIAMIAQAXQADANgRAYQgQAVg5AdQhNAmgQAKQgUAOgGAAQgFAAADgIgAgIA2IgQAKQgGAAgIACQgRAEgOALQgLAIgXALQgTALgCAPQgCASAKAIQAKAIAOgIQAZgOAXgRQAkgcAHgWQAFgSgHAAIgFABg");
	this.shape_4.setTransform(-6.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6, new cjs.Rectangle(-24.1,-23.8,48.3,47.7), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74FBFD").s().p("AA5CCQgOgHgTgMQglgZgWgZQgegigRgnQgTguANgYQATgjAFgFQAQgNApAGQAmAFAWAiQALASADAQIgHATQgFAWAMAPQARATAGAQQAHAVgFAWQgGAfgGALQgFAMgJAAQgEAAgFgCgAgUg9QgVAFgDATQgCAJADAIIAOAcQARAiAMATQANAUAUAKQAKAEAIABQAOAFADgWQACgVgIgTIgUhBQgFgOgQgMQgOgLgPAAIgMACgAg1hYQgHACgIAPQgHAMACASQACAJADAGQAIgWAIgJQAHgIABgEQABgEgCgJQgCgHgEAAIgCABgAgXhqQgKAOAHACIAaAIQAFAAAFgDQAKgFgDgMQgEgPgMgDIgDAAQgLAAgKAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-9.4,-13.2,18.9,26.4), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74FBFD").s().p("AhTCAQgBgZAMgmQAKgigEgRIgHghQgFgJgDgJQgGgSAOgRQBOhgAZAgQALAQAKAXQAHATAIAGQAOAJADAIQAEAJgHAPQgFALgFAZQgKAbgiAcQgaAWgwAwQgRAPgIAAQgKAAAAgRgAgYgWQgKAKgOAaQgKASAEAVQACAKAEAHQAEAYAfggQAUgWAQgaQANgTgkgWQgDgDgFAAQgIAAgIAIgAgPhpIgSATQgWASALAXQAEAJAJgJIAIgLQAOgeAAgQQAAgGgCAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABgAANhjQgGACABANIAFAbQACALARACQAIAAAIgBIAHgMQAFgKgMAIQgMAJgFgMQgFgJACgNQABgJgEgEQgDgDgEAAIgFABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-8.4,-14.5,16.9,29), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74FBFD").s().p("Ai/DCQBhhdAPgYQAMgUABgPQABgQgOADQgNAEASgVQAQgRATgQQAYgUAMgPQAVgZAEgZQADgfADgKQAFgOAWgTQAcgYAbgLQAegNAMAMQALALALAgQAIAbAFAcQACAQAKAeQAEAcgQAXQgbAjicClIgOARQgRANgMgPQgyhAgqArQgiAjgUAMQgGADgEAAQgKAAAOgdgAgzCQQAHAFADAFQAugVA0gjQAlgaANgcQANgagNgSQgLgPgiAJQgaAGgkAVQgYAOgjAtQgRAWgNATQgLAPACABIATgBIADAAQANAAAMAIgACmhXIgLAYQgIASgMAEQgCAOAJABQAEAAARgFQALgDAAgVQABgEgDgbQgBgFgBAAQgCAAgCAEgACGjDQgHAJABANQABAKgPASQgTAUgIAMQgLAOASAIQAJAEAKABQAZgCAHgsQAGgjgGgXQgCgIgDAAQgDAAgDADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-20,-22.3,40,44.7), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74FBFD").s().p("Ai1EaQgKgGAEg3QAGg9AAgQQAAgaAMgsQAOgvAPgbQAKgPAYhTQAXhQAQgWQAjgxAlgTQA/gfBNAnQBKAlgwBnQgYAzgnAsQguAkgxAvQhfBdgJAsQgSAZgVAXQgkAogMAAIgDgBgAhZgYQgLAHgCAUQgDAZgRAVQgWAZgCAEQgBAFgCATIgHArQgEAZgGAUQgGAWALAAQAFAAAHgFQAZgfAegxQAjg6ADgYQAEgcgKgYQgIgUgLAAQgEAAgEADgABxjHQgKAGgRAVQgJAMgRAeQgUAhgNASQgSAZgGAaQgDAPAAAeQAAAUAIgNQAFgGAEgLQAPgdApgUQAvgXAKgMQAUgXABgrQABgogOgOQgGgGgHAAQgGAAgGAEgAAojvQgaALgaAZQgWATgMAcQgGAOgCAKQgOAkBuhFQAXgPAKgWQAJgVgJgOQgEgHgKAAQgJAAgMAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-18.9,-28.3,37.9,56.6), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_logo (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AguHBQgwgxhbAAIqVAAQgUAAgZgCIghApIk6AAIBIhWIAAhyQhUhBgdhQQgYhCAAh/QAAgsAIgvQAqAoA6AAQA6AAApgoQApgoAAg4QAAgwhHg5IEBgBIg6hFIC0AAIAABFIBhAAIgeglIE3AAIAAAXQAWgNASgJIgBgBIADAAQCThLClADQCjgDCVBLIBNAAIAAAlIBWAAIAAglIGYAAIAAAlID7ABQgbAVgQAZQgUAdAAAeQAAA4ApAoQApAoA6AAQA6AAAqgoQAIAsAAAvQAABigcBRQgeBXg7BBIACAWQAABKgzAyQg6A7hmAAQhQAAhEgYIgSgGIgCgHIqRAAQhbAAgvAxQgZAagFAcQgGgcgZgag");
	mask.setTransform(1,-0.1);

	// pic
	this.instance = new lib.thresh();
	this.instance.parent = this;
	this.instance.setTransform(-132,-50);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-129.4,-50,260.9,100.1), null);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#86F3E9","rgba(0,255,255,0)"],[0,0.663,1],0,0,0,0,0,10.5).s().p("AhJBHQgegdAAgqQAAgpAegeQAegdArgBQArABAfAdQAeAeAAApQAAAqgeAdQgfAfgrAAQgrAAgegfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gl, new cjs.Rectangle(-10.4,-10.1,20.9,20.3), null);


(lib.btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btm, new cjs.Rectangle(-300,-300,600,600), null);


(lib.bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0OlOMAodAAAIAAKdMgodAAAg");
	mask.setTransform(3.5,0.4);

	// thresh
	this.instance = new lib.thresh();
	this.instance.parent = this;
	this.instance.setTransform(-467,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bt, new cjs.Rectangle(-125.9,-33.1,259,67.1), null);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(191,150,55,0)","#BF9637","#C09637","rgba(194,151,56,0)"],[0,0.325,0.62,1],-63.5,0,63.5,0).s().dr(-63.5,-63.5,127,127);
	this.shape.setTransform(0,0,1,1.182,0,32.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blk, new cjs.Rectangle(-103.5,-63.5,207,127), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,300,600), null);


(lib._12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6AC6C","#624926"],[0,1],0,-13.9,0,16.7).s().p("ADlCMIAAhmIhiAAIAAgdIBiAAIAAhjIAdAAIAABjIBhAAIAAAdIhhAAIAABmgAifCMIA/hHQAogsAQgZQATgeAAgZQAAgagPgPQgOgNgVAAQgSAAgMAKQgMAKAAAOQAAAVAWAGIgfAfQgNgFgIgMQgJgNAAgQQAAgfAXgVQAZgXAsAAQAjAAAXATQAZAVAAAlQAAAegYAkQgRAZgvA0IgVAYIBLAAQAkAAAMgVIgJA3gAlACMQAVgLAAgoIAAipIgjAlIgUgVQAfgeAkgnIAdAAIAADeQAAApAWAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._12, new cjs.Rectangle(-35.5,-13.9,71.1,27.9), null);


(lib.topor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYNpQimhAhmhNQiChhimitQixi4hXiJQhMh3gOhLQgEgYACgRIADgLQgSgQgVgYQgqgygKgsQgkidAMiEQAKhqAOhPQAOgiATgmQAlhLAYgSQAXgSArgOQAWgHARgDQgPAIgOARQgcAiAEArQAGA4ARA9QASBBAQASIBBBGQAQgNAXgMQAvgZAjABQApACApARQAoARASAWQAPASAIAWQAFALABAIQgGgEgIgDQgQgGgHAGQgJAJgFATQgEAWAIANQAOAVAXAWQAeAfAZAIQAiAMAPABQAXADAagJQAqgPAbgBQArAAAgAgQAfAeAJArQAEAWgBAPQgFgHgGgFQgLgKgIAIQgIAJgBAbIABAZIAYAyQAdA2AaAXQAuAnAKAHQAbASAMgKQAMgLgIgOIgJgOIgTgJIAWgHQAbgEAfAQQAfAPAUAnQAKAUAEAQQgIgFgKgFQgUgIgEAHQgFAHAOAaIAQAYIAhAYQAhATgCgUQgDgVgMgNIgMgKIAiALQAkANAOAPQAXAYALAZIBJAdQAbAEAfgZQBMg6AIgwIAHgqIAdgIQAhgLARgUQARgUAKg8IAHg5IAPgHQASgKAOgPQAtgwgMhOIAYAVQAdAVAXAAQAYAAAYgKQAMgGAIgFIAKgVIABAIQAFAFAUgNQAfgWAYgmQAAgIADgLQAGgVAOgMQArgmBlBCQBmBBgSCBQgJBBgeAzQgCAHgHAJQgNARgUAGQgWAGgRAOQgOAMgBAJQAAAEgcACQggACgOAPQgOAPgLAXIgIATQgSAIgeAWIgtAfQgZASgKAUQgPAggdAoIBwBkIACAZIhAA+IgUAAIgpgiIhFBVIgMAAIhvgzQgJgFgJgIQgTgRAAgSIAAgyIgVgBIgRAuIgMg+QgJgGgLgFQgXgIgMALQgLALgTAhIgRAeQgFgBgFADQgIAIAFAaQAJApAGACQgJAAgOgGQgbgOgZglQgYgkgOgbIgJgTIhOhAIhRgJIg8gyIhMgQIg/hAQgIgFgKgFQgUgIgLAHQgLAHgEAWQgCAKAAAKQgNgDgRgHQghgPgVgYQgUgXgNgiIgIgeQgPgPgUgKQgNgGgIAAIgHABQgCAkgOAKQgOAKgqABIgVBiIA/BcIgQAjQgMApAUAdQATAeAdAQQAPAIAKACIAHAnQALAqAUAVQAfAgAJAEIAAAnIBABBQBFBGAXAWQAYAWAmASQAUAIAOAFQgmhPglgyQgWgfgbggIgWgaIA/AyQBHA5AnApQAnAoApBOQAVAnAOAeQg+gQhTggg");
	mask.setTransform(-112.4,52.5);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.topor, new cjs.Rectangle(-224.7,-39.6,221.4,184.3), null);


(lib.mcgl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gdn_gl = function() {
			this.stop();
		}

		setTimeout(this.gdn_gl.bind(this), 30000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// gl
	this.instance = new lib.gl();
	this.instance.parent = this;
	this.instance.setTransform(-11.7,8.9,0.187,0.624,0,-66.2,113.8,-0.4,-0.1);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:1},10).to({alpha:0},40).wait(91));

	// gl
	this.instance_1 = new lib.gl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.3,-2.8,0.316,1.054,36.2,0,0,-0.1,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:1},10).to({alpha:0},40).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-13.3,36.6,26.7);


(lib.mc_rnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gdn_rnd = function() {
			this.stop();
		}

		setTimeout(this.gdn_rnd.bind(this), 30000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// rnd
	this.instance = new lib.rnd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5},29).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_logo_txt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvGiIAngvIAAmWIgngvIBzAAIAAGuIC0AAIg6BGgAMgGKIgDgBIgbhuIAOAMQAiAbArAPIAAAAQArAPAqAAIAAAAQAkAAAfgRIAAAAQAjgUAAgfIAAAAQAAgfgigYIAAAAQgVgPg4gYIAAAAQhJgegcgWIAAAAQgwgnAAg4IAAAAQAAg8AwgjIAAAAQAwgiBVAAIAAAAQA8AAA2AQIAAAAIAEABIAABiIgKgJQgUgUgfgLIAAAAQgfgMggAAIAAAAQglAAgZANIAAAAQgdAPAAAeIAAAAQAAAbAiAYIAAAAQAUAOA5AYIAAAAQBIAfAcAWIAAAAQAwAkAAAyIAAAAQAAA8gxAsIAAAAQg3AxhZAAIAAAAQhMAAg+gWgAo0EwQg+gzAAhTIAAAAQAAhVBAg0IAAAAQA/gzBnAAIAAAAQAqAAAsAJIAAAAIAFABIAABGIgCgCQgQgRglgHIAAAAQgYgFgZAAIAAAAQg/AAgoAkIAAAAQgoAlAAA6IAAAAQAAA8ArApIAAAAQArApA/AAIAAAAQAiAAAjgIIAAAAIAAhfIgkgrIBoAAIAAC0IgHABQhRAPgtAAIAAAAQhnAAg+gygAApFVIAAAAIgBAAIAkgsIAAkQIgcggIBYAAIC9C+IAAi+IBmAAIgkAiIAAE6Ij5j+IAAD+gAGxFVIAjgrIAAkIIgjgpICSAAQBdAAA2AtIAAAAQA2AuAABPIAAAAQAABOg5AyIAAAAQg4AyhaAAIAAAAgAIWEjIAgAAQA7AAAmgbIAAAAQAtggAAg/IAAAAQAAg/gighIAAAAQgigghBAAIAAAAIgpAAgAjuFVIAkgsIAAkGIgkgqID7AAIAABQIgYgdIh8AAIAABRIBYAAIAAA0IhYAAIAABwICwAAIgrA0gAt9FVIAkgsIAAkGIgkgqID7AAIAABPIgZgcIh7AAIAABRIBYAAIAAA0IhYAAIAABwICgAAIAOASQATAVAVANIAAAAgARuAKQgLgKAAgRIAAAAQAAgQAMgMIAAAAQAMgKAPAAIAAAAQAQAAALALIAAAAQALALAAAQIAAAAQAAARgLAKIAAAAQgLALgQAAIAAAAQgRAAgLgLgARzgnQgJAKAAAMIAAAAQAAAOAJAIIAAAAQAKAKANAAIAAAAQANAAAJgKIAAAAQAJgJAAgNIAAAAQAAgMgJgKIAAAAQgJgKgNAAIAAAAQgNAAgKAKgASRAEIgBgKIgDgEIAAAAIgEAAIgFAAIAAAOIgLAAIAAgqIAUAAIAJADIAAAAQAFACAAAHIAAAAQAAAGgCACIAAAAQgDACgFABIAAAAIAGADQAEADAAAGIAAAAIAAAEIABADgASEgSIAEAAQAFAAABgBIAAAAQADgCAAgEIAAAAQAAgDgEgCIAAAAIgHgBIAAAAIgCAAgAFChGQgYgJgPgQIAAAAQgRgTgFgZIAAAAQgDgPAAghIAAAAIAAikIgcghIBYAAIAADBQAABVBEAAIAAAAQAjAAAUgTIAAAAQASgSAAgdIAAAAIAAjUIBYAAIgcAhIAAD5IAcAhIhYAAIAAgVQgRAPgZAHIAAAAQgWAHgWAAIAAAAQgcAAgXgJgAgihqQg3gtAAhKIAAAAQAAhLA5gvIAAAAQA3guBbAAIAAAAQAtAAAkAJIAAAAIAAA/QgFgHgPgHIAAAAQgdgOgrAAIAAAAQg4AAgkAhIAAAAQgiAhAAAzIAAAAQAAA1AlAlIAAAAQAnAkA3AAIAAAAQAeAAAggHIAAAAIAAhUIgggmIBcAAIAACfQgNAEgVADIAAAAQgrAIgpAAIAAAAQhcAAg2gtgAI5hFIAhgnIAAjtIghgnIDkAAIAABJIgWgaIhxAAIAABJIBQAAIAAAvIhQAAIAABlICgAAIgnAvgAiIhFIgxh1IhtAAIgwB1Ig2AAIB5kfIgXgcIBfAAIB5EaIAlAhgAjJjjIgnheIgmBeIBNAAgAqPhFIAhgnIAAjtIghgnIDkAAIAABJIgWgaIhxAAIAABJIBQAAIAAAvIhQAAIAABlICcAAIgVAvgAt7hFIAdgjIAAkWIgdgjIBaAAIAAEsICWAAIgnAwgAMfizQgKgKAAgPIAAAAQAAgOALgKIAAAAQAKgKAPAAIAAAAIABAAQAPAAAKAKIAAAAQAKAKAAAOIAAAAQAAAPgKAKIAAAAQgLAKgPAAIAAAAQgQAAgKgKgAMrjbQgGAFAAAJIAAAAQAAAJAFAHIAAAAQAGAHAJAAIAAAAQAJAAAGgGIAAAAQAFgFAAgJIAAAAQAAgJgFgHIAAAAQgGgHgJAAIAAAAQgJAAgFAGgANfirIAIgKIAAgtIgIgKIAsAAIAHATIgNgGIgOAAIAAANIAVAAIADAKIgYAAIAAAdg");
	mask.setTransform(2.7,-1.6);

	// bl_1
	this.logo_blk_2 = new lib.blk();
	this.logo_blk_2.parent = this;
	this.logo_blk_2.setTransform(-292,0,1.78,1.78);
	this.logo_blk_2.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.logo_blk_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.logo_blk_2).wait(29).to({x:290},51).wait(40));

	// mask_logo_frame (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag5G8QgvgxhaAAIAAAAIqOAAQgUAAgYgCIAAAAIAYgdIKiABQA8AAAtAUIAAAAQAmARAZAeIAAAAQAZgeAkgRIAAAAQAugUA7AAIAAAAIEQAAIAAACIACgCIFxAAIAIAeIqLAAQhaAAgvAxIAAAAQgYAagFAbIAAAAQgGgbgZgagASNDDQA0g9AbhKIAAAAQAdhMAAhSIAAAAIgBglIAAAAQgjARgoAAIAAAAQhGAAgygxIAAAAQgygwAAhEIAAAAQAAgmASgkIAAAAIjGAAIAAgfIEGABQgYATgNAaIAAAAQgOAcAAAfIAAAAQAAA4ApAnIAAAAQAoAoA6AAIAAAAQA6AAApgoIAAAAQAIAsAAAuIAAAAQAABdgiBUIAAAAQghBTg9BDIAAAAQgEgUgHgOgAz6BVQgdhDAAh0IAAAAQAAgrAIgvIAAAAQApAoA6AAIAAAAQA6AAAogoIAAAAQApgnAAg4IAAAAQAAgfgOgcIAAAAQgNgagYgTIAAAAIDtgBIAEAFIAAAaIixAAQASAiAAAoIAAAAQAABEgyAwIAAAAQgyAxhGAAIAAAAQgoAAgjgRIAAAAQgBARAAAUIAAAAQAABoAUA2IAAAAQAVA4BCBEIAAAAIAAAoQhRhKgchBgAFwllIAAgfIBWAAIAAAfgArullIAAgfIBZAAIAZAfgAl4mRQAVgOASgIIAAAAIAVAYQgbANghAVIAAAAgADamoIgTgDQhlgnhvAAIAAAAIgaAAQhzAAhqAqIAAAAIhLAAQCShLCjADIAAAAQChgDCUBLIAAAAg");
	mask_1.setTransform(0.7,-0.4);

	// bl_2
	this.logo_blk_1 = new lib.blk();
	this.logo_blk_1.parent = this;
	this.logo_blk_1.setTransform(-286,0,1.78,1.78);
	this.logo_blk_1.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.logo_blk_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.logo_blk_1).wait(43).to({x:290},56).wait(21));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(339,300.2,1,1,0,0,0,340,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-50.2,600,600.4);


(lib.mc_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// black
	this.instance = new lib.black();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.843},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.654},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.428},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.173},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.masked_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_btn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgncgJ/MBO5AAAIAAT/MhO5AAAg");
	mask.setTransform(-0.8,-1);

	// shape_btn
	this.instance = new lib.shape_btn();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.masked_shape, new cjs.Rectangle(-253.3,-64.9,505,128), null);


(lib.det_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADgXbIAPhpIgkgnQgkgnACgFQACgHAKhJIhuiEIgFh4IiDiUIhLh/IgSg8IwmH0QhBAogKACIhLAUIgoBOIg6AAIg3CJIhSBOIrBAAQgJhbAWh9QAsj5CZiqIBphdIBXhuICMhwIBahfICAiWIAvgrICbiiQgHgHgEgIQgHgQASgEQAzgNBaglQB8gxAjgoQA3g/DQj3IFGlWQAdgnAAgdQAAgegJgXIgJgRIBug8IAyBVIBOAUIBSgFIBBAFICJBcIA3AcICRg1IBLBiIgKA2QgGA/AQAoQAPApANCSQAGBJADBBIBiESIhVA3IgZBJIBDCYIBOAhIAyBGIBNAWID1h1ICKBVQA5APAIgDQAHgCAUgNIA8ADIBiBzIBBBDIAygUIA3ADIAZAUIAogNIBXA/ICCBBIB7gSIAbgZIBBAjIA6gCIA3BIIBVAIIAggSIAjAAIA/goIAoAAIAAIrIjahrIlliUIiPgFIj6iWIisgUIAZBJIgNAjIBiB9IBuAvIgDBiIAoBIIAhgRICWBpICJAyg");
	mask.setTransform(68,149.9);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_19, new cjs.Rectangle(-163.4,57.3,462.8,242.5), null);


(lib.det_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj8InQgThEgvgTQgvgVhNgIIhEgFQAjgfAaguQA1hegqhPQgyhfhHhYQhHhZglgMQAfgGAkgPQBIgcAdgnQAog4ARgiQAYgvACgnQADg4gDgfIATAaQAaAfAcAbQBbBYBWALQBVALClgQQBTgIBBgLIA9gNQBJgUBAgaQBDgdAzgjQAmgaAWgXQANgOAHgaQADgOAAgLIgMhDIAggNQAQBCAABHQAAAtgWBzQgLA7gMAwIgaBpIAEAVQADAYgJANQgIAOgYAeIgXAbIgHAqIiVCkIjNCTIiyBOIjyCeQAAgegKghg");
	mask.setTransform(-61,42.7);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-50,-195);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_18, new cjs.Rectangle(-127.8,-18.7,133.5,122.7), null);


(lib.det_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmLL9QgTgWgZABQgZABgOAAIgJgBQAFgmgFgZQgDgQgFgHIgGgGQAEgKAAgNQAAgagSgKQgTgLgSgHIgPgGQgCgKgGgOQgNgcgYgVQgYgVgWgNIgRgIQADgVABgeQACg7gGgqQgIgpgKghIgIgYQgTgBgZgKQgxgSgZgpQgTgfgRgfQgMgWgMgQQgOgTgcg3IgagzQgIgWgKgXQgWgsgTgBQgcgCgIACQAJgFAHgIQAOgRgKgRQgKgSgagpIgYgmQAFgSgFg0QgCgagMgtQgKgmAAgOIAHhLIgUgOIAyiyIAYDIIgaACIgJAmIAwBmIAAA5IB0CRIAJBAIBzB6IBOAJIAXAVIAjAAIAvAZIAkABQAmAAAIgIQAIgIALAAIAJACIAlgPIBBAKIBEgCIAyggIAZgjIBZgGIAXANIAwgIIAxASIA7gyIANghIBRg5IAeAAIAbAIIAngIIAjAIIA/AdIAwgZIAWggQABgSAFgZQAJgzARgkQAag6A2hmIAjg3IAQACIgoBiIADA2QAGA7ASARQARASAjAAQAQABANgEIAngRIAQAEQARACAKgHIAkgPQAcgKAJgRQARgcAOggIAmAHIAAAcQADAdAOAGQANAGAYgLQANgFAJgGIBQhaIAAgfIApgpIgDgPQgCgQAFgBIBJgcIAXBHIgQAgQgRARgRAXQghAugCAaIgBBLIgMAQIgrgDIgCAbIhXA4QgLAGgKAJQgTAPAIAKQAOARAeAYIjcAPIiAAUIgOBCQgTAKgXAPQgtAcgUAXQhjB6hVBZQg+BCiTB+IiCCOIgqAgIgMhNQgwAmg2AzQhrBmgbBFQgFgLgKgKg");
	mask.setTransform(-107,52.5);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(16,-116);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_17, new cjs.Rectangle(-219,-26.1,224,157.2), null);


(lib.det_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjODeQADgBgHg0IgmgHIgdhdIgKg7IAghdIDfAAIAJAUIA7gFIATgPIAsgGIALhTIA1gxIBvAFIAOAdIgFBKIgSBlIh5BYIgSAAIgighIgCgvIgfgBIhIAbIAAAgIgoAqIAAAeIhaBgg");
	mask.setTransform(-19,5.5);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(0,-102);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_16, new cjs.Rectangle(-47.8,-16.6,57.6,44.3), null);


(lib.det_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAvJXIhHgZIgFkIQgFgBgGgEQgKgHABgMQAAgLAFgMIAEgKIg2AfQgsADgWgMQgOgIgQgUIgNgSQABgSAOg2QAKgmAPgdQAMgVAKgLIAXgcIhRA9IglAHIADglIgkgCIAMgPQALgNAJgRQATghgFgYQgGgXgbgbIgZgYQgGACgJgDQgRgGgKgTQgMgagDgYQgDgbAJgNQAJgLAfgcIAdgaIAlAAIAvhRIAVgBQAWgHAFgZQAIgngIhHIgIgGIABgMIBug5IAKAPIAAA2IgYARIgYBmIAaAAQAegCAWgOQAmgXA0guIAEAOQAGAQALAKQASAQA+AYIAZAVQAdAWASABIBBAAIAAAMQgbAOgaAaQg0A0AGA8QAGA9AgA7QAQAdAPASIgCATIinAEIA0AwIgJBVIhWA0IgZAVIgGAIQgFAKAEAJQAFAPANAJIAFBFIAlgUIAaAUIA2giIAoArIgtAgIAFARIAzgZIBCBhIg3AzIgaAkQgfAlgUAHIhXAcg");
	mask.setTransform(1,18.2);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-36,-101);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_15, new cjs.Rectangle(-33,-41.7,68,119.7), null);


(lib.det_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgGLAQgZgegXgOQghgVgugEQhFgEhAgCIhBgdIAAgnIANguIgDg9IgthTQgJgIgIgKQgRgWAGgOQAFgPAIghIAIgeIgngBIgyhCQgIgVAIgLQAEgGAhgmIAfgjIAIgiIAAhPIgQg6IAagTIg2hwIAPgoIA1AAIAihDIAggUIgjg1IALgkIBVgNIBthxIAAgZIA7hLIALgpIASAAIAKFvIg0AlIgZBUIAPBsIATAfIAAATIg3AvIgCBOIALAcQAOAgAQALQAZASATAIIgCBCIgVAdIgIAyQgEA4ARAcQARAcAWAPQALAGAIACIAeAAIAMASIBFAFQBLAAAkgaQAkgZA5g8QAdgdAVgZQBAg+ALgcIANgmIAEgQIANgBIgPBkQgSBrgUAeQgfAvgdAoIgEATQgHAYgUAYIhCBRQgrA1AAACQgcA3ggACIhXAAQgLADgPAAQgfABgQgVg");
	mask.setTransform(21,-17.4);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-91,-134.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_14, new cjs.Rectangle(-25.7,-89.9,93.4,144.9), null);


(lib.det_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkTXcIAWj1QAFg8gQhpQAhAKAsAIQBXASAvgJQAvgHBJADQAlABAbADIAjApIDhAHIAAAcIA/gNIBIg/ID/AfIA+ARIAABfIAtBaIAzgIIAdAZQAnAeAuAcQAwAcA/AbQAgANAXAHg");
	mask.setTransform(121.9,150);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_13, new cjs.Rectangle(94.2,259,149.5,41), null);


(lib.det_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An0F+IAAhmIBSgyIAAixIAogZQAwh1A5hiQAkg8BWhKQArgkAjgZIASB7IDHEDIAAAvICCCNIAvg6IC0DkIgbAYg");
	mask.setTransform(6,-17.2);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(137,-279);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_12, new cjs.Rectangle(-44.1,-55.5,100.3,76.5), null);


(lib.det_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFBPfQgfgig9gmIg3geIiRhxIhegWIgogXQgPgDgPgCQgfgEgHAJIgKAPQABgPgGgTQgNgogigXQgjgYghgPIgbgLQAFgwgFgHQgFgIgmhNQASgTAPggQAfhAgLhBQgNhOgUgjQgTgigkgQQgdgMgygJIgrgGQAjgUAfghQA/hBgRhAQgVhRgWgfQgYgkgtgHQgngGgqADQgVABgNACICxiqIAcAAIBrhhIgUgXIBihIIBmg3IgZgeIBThBIg/grQAohkAFgpQAFgpANgyIAxgaQA8gdA3gUQA2gVA2gGQAagEAQABIBrBhIANgvIAlAtIA1gSIBhAmIBkg8IAUCnIhmBJIhQCCIAZAAICdAlIAAAtQgUASgWAXQgsAtgFAbQgJAtADAYQAGAmAkAIQAjAIANAVQAHALAAAKIAAPYIiLEwQgxB2gEBaQhThfgyg3g");
	mask.setTransform(-18.7,87.6);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-254.1,31.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_11, new cjs.Rectangle(-83.3,-26.5,129.3,228.3), null);


(lib.det_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEOJIQADhTgPg2QgQg2gmhCIgjg3IA5gfIhahpIAOBMQgOAMgVAWQgpAtgfAzQgxBRg7CGQgHg9gLhFQgWiJgSglQgSglgVghIgSgaIAvgwIgBgqIgZAAIBviUIivB3IhaAPIgRAYIg4ALIg/AwIAaAaIg3AGIgYAmQgZArgDAcIgIA8QgFgKgGgRQgLggAAggQAAggABgXIABgRQgjAAgtAIQhaAQgvAnQAPgfAUgkQAohGAagXQAbgXAugYIApgTQAAgSALgfQAUg9Awg5QAvg5BJg0QAkgaAagPIAABjIAPAAQAVgDAZgMQAqgUA8gXIgdBTIBFhLIAzgGIA8g5IgegqIA1glQA7grAXgdQAngyAPgXQAagpgBgWQgBgiABgPIA+AsQBFAuAhAJQAhAJArgDQAVgCAPgDIA1AOQA4ASAWASQAjAdBdBHIAqATIgVBQIhFCrIAABkIgrAtIAaAKIg2AXIgoAqIANCEIAZAoIAFAgIARgGQAUgJAPgMQAYgUAMgTQgNAcgVAmQgrBLgoAxQgoAwhMA2QgmAbgeARQAQgJARgTQAhgmADgtQADgugGgiIgGgZIAegJQAGgagFgEQgFgEhJhVIAIB9IgrBMQgtBRgIAeQgMAvg2BUQAFgfABgqg");
	mask.setTransform(-31,20.5);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-244,123);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_10, new cjs.Rectangle(-108.6,-45.2,155.3,131.4), null);


(lib.det_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EADgAhIQgygwgfgyQgfgyhBhDIg6g6Ig8goIgShkQgVADgagEQg1gHgZgdQgZgehsgNIhogHQgQgHgQgOQgfgdADgmQAJg4ABgdQACgxgbgzIhFhsQglg6gCgnQgBgogyhLIgxhDIhhg8Ig/hLIhDAMIkdjwIgShQIArg0IAeAPIAPgeIACgcIgUgWQACgNgDgOQgGgdgUgEIgugJIgWgEQACgGgCgKQgDgVgOgUQgKgPgjgSQglgUgageQgdgihGgwIg/goIg3hNQACgZgCgHQgCgFAIgOIAJgOIgQg5IAAhLIAXgXIArAXQAIAAAIgFQARgIACgWQABgWAAgXIgBgSIQuxYIEVgSIBVAUIBBA/IANggQA9gXACgFIAkgoQAlgnADgIQAHgPAIgjIAfAAQAjgCAYgLQAngTApgZIAdgUIAKBGIAPASQATAOAOgPQAggjgPgbQgGgJAFgiIAFggIAWgLQAXgPAHgWQAIgWADgQIABgMIBdhGIAPAHQAUADAdgWQAdgWAwgVQAYgKATgHIANgLQAQgQAOgaIATg0QAIgVAXAAQALAAAfAKQASAGANgQQAYgdAQgPIAaAMQAgAIAbgUQAsgfAkglIDmAAQh4BHgUAEQgQgCgMADQgUAFglAgQgWAUglA0QgbAmggAMQgjAOhKANIhCAKIiHBkIgoBQIg8BLIAKAhIAjgGIAUgvIAhgNIBhgFIBOgRIA7gaQBAgfAWgXQAWgYAQg3IAMgzIDABcIAngIQAwgEAuARIBpAoIBSAFIAABJIA1AtIAABSIhQCqIAABQIiRClIljCCIklC3IiTCHIhGARIhaBTIgrBQIhGBQIgPA8IgWAUIgDBDQhIA3gSASQgRARgmA8IiHCuIgFA8IAPAdQANAggDAOQgFAXgRAUIAQAcQAPAegBAOQgDAXgMA3IAtAZIBLBLIgNA0IA8AjIA1g5QAeB1AHgCQAIgDBVgoIgSClIAXA3IgPAhIAAB9IAPBNIAsgDQAxAHAWAzQAWA0gYAdQgMAPgQAEIhOAcIBEBVIAgAZIAtANQA0AJAkgWQAkgWBGg2IBAgxIA8hQIgJAwQgMA3gRAiQgRAjg1A+QgbAfgXAZIgWA0IiMCqIgWAUQgcARgcgTIhfg/IgqBsIAAA0IgaBDQgZBKgCAnQgCA/AACsQgTgNgZgYg");
	mask.setTransform(128,20.6);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_9, new cjs.Rectangle(-35.3,-195.1,326.6,431.5), null);


(lib.det_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqAFQgLgDgpgQQgjgOgKABQgLABgOgLIgMgMQgDgBgCgDQgDgGADgMQADgMARgbIAQgYIANgGQAMgLgHgUIgQgnQgKgVgBgXQgBgZAPghIAPgcQALgIACgTQAAgNAJgNQAIgMAJgDQASgFAVgIQAfgNAJgIQAJgJADgMIAGgiQAEgVAUgZQAKgNAJgIQAYgGADgPQACgJgGgKIgMgVQgHgPgDgaQgDgeAGgPQAIgRAQgMQARgMAPADQAUAEA+gFIAQgFQASgIAMgMQAUgTAwgmIANgFQAPgCAMAUQAUAfAhBcIALABQANAIAGAlQAIAvgCAPQgCATgSASQgdAchJAPQgcAGgIgCQgNgEgRgXQgTgagOgFQgPgFACAUQACAZgLAhQgMAlgTAMIhyBDQgGAEgGAIQgMAQgCAYIgDAvQgCAWgEAHIgaAeQgWAYgEALQgGARgBASQgCAXAIAPQAcA0gHAeIgFAaQgCAFgJAAIgKgBg");
	mask.setTransform(30,-83.9);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_7, new cjs.Rectangle(-1.2,-167.7,62.3,84.4), null);


(lib.det_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8IHQgFgFgCgIQgFgPAMgOQAUgXAQgQIAGgBQAEgEgFgSQgGgSgPgWIgPgTQgLgTABgTIABhqQgBgEABgGQACgMAIgIIATgPQAJgJABgKQAAgKgJgMIgIgKQgIgKgIgMQgPgaABgQQABgQAUgiIAUgeIACgLQAFgLAIgCQANgBA1ABIAMgBQAKgEgCgQIgGglQgCgUAEgNIAbhDQAHgIgHgLQgFgHgDAAIgJAHQgMAIgFAAQgMAAgMgVQgQgegGgPQgIgXgBgbQgChTAKgaQAHgPAWgbIAVgYIAIgKQAKgIAHAMQAFAKAZATQAWAWADAcQADAugDBHIAJAMQAKAOgCANQAAAIgHATQgEAMAEAHQAEAGATAXQASAaAAAbQAAAWAHA1QAEAvgRASQgYAWgHAJQgLAMAAARQAAA7ghAMIgzASQgFAAgDADQgGAFAHALIAaAkQASAcACAdQADA0gBAWQgBApgJAKIgTAOQgHAGAGAPQAHARAEASQAEASgCAEQgBAIgDAFQgFAJgRAAQgXgBgVAGQgXAFgEAHQgIAMgMAIQgHAEgGAAQgJAAgGgHg");
	mask.setTransform(4,-44.4);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(20,91);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_6, new cjs.Rectangle(-9.7,-97,27.4,105.2), null);


(lib.det_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AByH9QgCgIgGgKQgFgJAAgFQADgCgBgEQgCgIgSgLQgcgPgKgHQgRgMgCgQQgBgOgHgNQgGgJADgEQANgUgKgMIgPgNQgIgIADgOQAIgXADgLQAFgUgMgNIhehpQgEgGgDgIQgFgPAGgKQAJgPAMgRQgCgIABgKQACgUANgJQAWgOBJguQAEgDABgFQAEgKgJgJQgRgRgIgKQgNgTAGgKQAGgIAKgJQAEgGgLgNIgTgQQgFgFAAgSQgBgSAFgqIAEgmQAAgGgCgEQgEgHgKAIQgGAGgWAdQgSAZgGABIgPADQgIAAgJgIQgcgRgSgNQgigYAFgNQAMgkAEgIQAQggAZgYQAZgXARgHQAIgDADACIBAgqIAGgIQAJgFAMANQAWAYAIAOQAOAXgHARQgKAYgEAhQgEAoALAPIAjAyQAXAiAJAHQAPALAMAjIADATQADAXgDAOQgEAYhSBTIgIATQgIAXABARQABAbgOAiIgFAUQgDAYAMARQATAbAxA4IAPALQAQAOABASQACAcgEA7IAAAIQABAIACADQAFAFAdAQIAHACQAGAFAAALQgCASgtAgQgNAagGAAQgDAAgBgFg");
	mask.setTransform(-12,-44.4);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(32,74);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_5, new cjs.Rectangle(-30.4,-95.8,36.8,102.9), null);


(lib.det_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gl
	this.instance = new lib.mcgl();
	this.instance.parent = this;
	this.instance.setTransform(-7,-53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAUCcQgygQgVgUQgNgOgPgUIgMgSQgiAIgVgLQgcgQgBgZQAAgHADgJIACgIQgegOgOgVIgYglIAAhYQgVgegGgNQgFgJAIgLQADgFAFgEIAWgIIABgGQAEgGAKgGQARgLAIgCQgDgQgCgUQgEgnAGgOQAGgOAdghIAcgeIAPgNQASgJANAJQAKAJAZAPQAVAOACAJQAEAPAAANIAHAHQAJAHAIgLQAQgQA1gjIAXgIQAbgFAPAMQAcAXAaAaQAlAjAKATQANAXABAJQACAMgJALIggAkIgDAHQABAJAQALQAQAMAMAZQAHANAIAbQAFAOgOALIhNAmIgIAJQgHAOAEAUIAHAmQADAOgDAHQgGAJgaAlQgKAHgJgLIgUgWQgMgLAIASIASApQAHAUgUgPQgYgSgYgIQgagHALAQIAcAlQAMAUgRgJQgVgLgagJQgZgKAOALQASAOAGAMQAEAIgHAAQgDAAgHgCg");
	mask.setTransform(-6.1,-45.5);

	// pic
	this.instance_1 = new lib.pic();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_4, new cjs.Rectangle(-32.8,-91.1,53.6,61.4), null);


(lib.det_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWBVQgbgNgagVIgUgTQgFgHgCgGQgEgMALAHIANAJQANAGgBgPQAAgSACgFQADgFAFAJIARAZQAMANABgXQAAggACgKQAEgPAIANQAJAPATAJQAVAJAGgLQAJgQAFg5IAGgLQAGgGADAaQADAaAMgGQAGgDAFgJIAGgJQAFgFgBAVIgFBLQgEA1gJANQgMAPggADIgIAAQgdAAgbgNg");
	mask.setTransform(-4,-2.5);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-14,23);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_3, new cjs.Rectangle(-14.4,-12.3,20.9,19.6), null);


(lib.det_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEZPyQgghLgxghQg/gqgigPQgngSgFASQgFAPgKAEIgJAAQgFgHgHgHQgQgNgMAFQgSAIgUgKQgXgKAAgVQACgegCgMQgBgWgTgGIgegKQAAgJgEgIQgIgRgUAAQgTABgPAIQgIAFgEAEQgLABgNgDQgZgFgHgUQgchQgCgtQgBgWgEgVIgEgRQhBg6gngeQgYgTg4g3Ig0gyQgNAAgQgEQgfgJgLgXQgGgMgJgsQgHgigVgSQgzgngegaQg4gwgJggIgXhSQgOgxgIgLQgKgPgegZQgdgZgagPIhAgkQgngYgKgNQgJgNgDgOIgBgMIBIgxIAjgSQAigWABgSQABgkAKgqQANg8AagqQAZgpBVhYQArgrAlgkIgHh2IBOAAIAUgVQAggaA/gZQBAgYDLgTQBmgKBZgFIAfAtIAcgtIEDAAIgDBqIAcACIAXhsIA+AAIgDAfQgCAgAFgBQAEgBA7gfIA6geIAjATIAAA0IAjBQQA5gwAKgZQAHgQAsggQAWgQAVgOIAOAUQALAagPAaQgNAXglAfQgiAegDAGQgKAVAIAYQALAgAugHQB5gSAAgiQAAhLAUgbQARgYAbgqIA1gMIgGAiQgCAqAUAxQAJAXARAYIAZAmQAZAqgKA5IgRBkQgHAfgWARQgJAHgjANQgRAFAHAVQAGATAFAWQAFALAVgPQAhgWAUgIQgLAtgRAVQgQATiTBqQgcATgkAdIgfAZIAogaQAngPgHA2QgHA2AKBNQAGAmAGAcIAHAMQAEASgPAlIg1B+IAHACQAHADADAGQAIASgrApQgrAohhB9IhZB1QgVAUgXAcQgvA3gLAgQgSA1goBtIgpB2QgoCGAJBMQgHgegQglg");
	mask.setTransform(-11,19.6);

	// color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26BE70").s().p("AiqGlQgLgDgpgRQgjgOgKABQgLABgOgLIgMgMQgDgBgCgDQgDgGADgMQADgMARgbIAQgYQAHgBAGgFQAMgLgHgUIgQgnQgKgVgBgXQgBgZAPghIAPgcQALgIACgTQAAgNAJgNQAIgMAJgDQASgFAVgHQAfgNAJgIQAJgJADgMIAGgiQAEgVAUgZQAKgNAJgIQAYgGADgPQACgJgGgKIgMgVQgHgPgDgaQgDgeAGgPQAIgRAQgMQARgMAPADQAUAEA+gFIAQgFQASgIAMgMQAUgTAwgmIANgFQAPgCAMAUQAUAfAhBcIALABQANAIAGAlQAIAvgCAPQgCATgSASQgdAchJAPQgcAGgIgCQgNgEgRgXQgTgagOgFQgPgFACAUQACAZgLAhQgMAlgTAMIhyBCQgGAEgGAIQgMAQgCAYIgDAvQgCAWgEAHIgaAeQgWAYgEALQgGARgBASQgCAXAIAPQAcA0gHAeIgFAbQgCAFgJAAIgKgBg");
	this.shape.setTransform(29.6,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#07DA84").s().p("Ah8IHQgFgFgCgIQgFgPAMgOIAkgnQAEACACgDQAEgEgFgSQgGgSgPgWIgPgTQgLgTABgTIABhqQgDgRANgNIATgPQAJgJABgKQAAgKgJgMIgIgKQgIgKgIgMQgPgaABgQQABgQAUgiIAUgeIACgLQAFgLAIgCQANgBA1ABIAMgBQAKgEgCgQIgGglQgCgUAEgNIAbhDQAHgIgHgLQgFgHgDAAIgJAHQgMAIgFAAQgMAAgMgVQgQgegGgPQgIgXgBgbQgChTAKgaQALgYAngqIAIgKQAKgIAHAMQAFAKAZATQAWAWADAcQADAugDBHIAJAMQAKAOgCANQAAAIgHATQgEAMAEAHQAEAGATAXQASAaAAAbQAAAWAHA1QAEAvgRASIgfAfQgLAMAAARQAAA7ghAMIg7AVQgGAFAHALIAaAkQASAcACAdQADA0gBAWQgBApgJAKQgHAHgMAHQgHAGAGAPQAHARAEASQAEASgCAEQgCADgCAKQgFAJgRAAQgXgBgVAGQgXAFgEAHQgIAMgMAIQgHAEgGAAQgJAAgGgHg");
	this.shape_1.setTransform(-15.5,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09AC75").s().p("AByH9QgCgIgGgKQgFgJAAgFQADgCgBgEQgCgIgSgLQgcgPgKgHQgRgMgCgQQgBgOgHgNQgGgJADgEQANgUgKgMIgPgNQgIgIADgOQAIgXADgLQAFgUgMgNIhehpQgEgGgDgIQgFgPAGgKIAVggQgCgIABgKQACgUANgJIBfg8QAEgDABgFQAEgKgJgJQgRgRgIgKQgNgTAGgKQANgMADgFQAEgGgLgNIgTgQQgFgFAAgSQgBgSAFgqIAEgmQAAgGgCgEQgEgHgKAIQgGAGgWAdQgSAZgGABIgPADQgIAAgJgIQgcgRgSgNQgigYAFgNQAMgkAEgIQAQggAZgYQAZgXARgHQAIgDADACIBAgqIAGgIQAJgFAMANQAWAYAIAOQAOAXgHARQgKAYgEAhQgEAoALAPIAjAyQAXAiAJAHQAPALAMAjIADATQADAXgDAOQgEAYhSBTIgIATQgIAXABARQABAbgOAiIgFAUQgDAYAMARQATAbAxA4IAPALQAQAOABASQACAcgEA7IAAAIQABAIACADQAFAFAdAQIAHACQAGAFAAALQgCASgtAgQgNAagGAAQgDAAgBgFg");
	this.shape_2.setTransform(-44.6,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36F7CC").s().p("AAUEwQgygPgVgVQgNgNgPgUIgMgSQgiAIgVgMQgcgPgBgZQAAgIADgIIACgIQgegPgOgVIgYglIAAhXQgVgegGgOQgFgIAIgLIAIgJIAWgIQgCgJARgKIATgJIAGgDQgDgQgCgUQgEgnAGgOQAGgOAdghIAcgfQAHgHAIgFQASgKANAKQAKAJAZAPQAVAOACAJQAEAOAAANIAHAIQAJAGAIgKQAKgKAfgWIAcgTIAXgIQAbgFAPAMQAcAXAaAZQAlAkAKATQANAWABAKQACALgJAMQgNAPgTAVIgDAHQABAJAQALQAQAMAMAYQAHAOAIAaQAFAOgOALQgHAGgIADIg+AdIgIAJQgHANAEAVIAHAnQADAOgDAGQgGAKgaAkQgKAIgJgLIgUgWQgMgLAIARIASAqQAHAUgUgPQgYgSgYgIQgagIALAQIAcAmQAMAUgRgJQgVgLgagJQgZgKAOALQASAOAGAMQAEAIgHAAQgDAAgHgDg");
	this.shape_3.setTransform(-6.2,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36F7CC").s().p("AgWBVQgbgNgagVIgUgTQgFgHgCgGQgEgMALAHIANAJQANAGgBgPQAAgSACgFQADgFAFAJIARAZQAMANABgXQAAggACgKQAEgPAIANQAJAPATAJQAVAJAGgLQAFgKAFghIAEgeQADgIADgDQAGgGADAaQADAaAMgGQAGgDAFgJQADgGADgDQAFgFgBAVIgFBLQgEA1gJANQgMAPggADIgIAAQgdAAgbgNg");
	this.shape_4.setTransform(9.7,91.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(0,117);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_2, new cjs.Rectangle(-116.2,-88.2,210.4,215.5), null);


(lib.det_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABNQJQgSgXgKAHQgDgOgLgRQgUgigfgOQgggPgeAAIgXADQAEgCACgEQAFgJgLgOQgLgOgkgOIghgMQABgEgDgHQgEgOgRgNQgQgOgbgQIgYgNQgUgGgTALIgUALQADgJgEgLQgKgVgngLIhDgRQgXgFgMAGQgMAGgSAMIgQAKQABgNgDgNQgHgcgTgEIhGgTQg2gOgfgDIg6gFQgUgBgFAGQgFAGACAPQABAMACAFQACAEgCAHIhKhFIgHAGQgFgNgHgPQgQgdgQgIQgegOgKgDQgXgHgIAKQgOAQACAIQgLgEgVgQQgqgggxg8Qgyg8gig4IgYgtIAtBAQA4BEAxAVQA8AZA0AIQA0AIAbgMQAkgPALgTIAQAGQAVADAVgKQAngTALgIQAZgQACgSQAEgYgBgMQgCgRgMgUQgLgSgNgOIgLgKIgFAWQgUgggagkIglg2IgSgcIAcAdQAhAeAWABQAkABAWgLQAlgIAogXQBPguAMhJQANhJAVjXIATjJIAFAmQAKAsATAgQA/BmCMg9QCNg9B/iZQBAhNAkhAIgBAaQABAfAGAYQAWBOBJgRQBKgRBLhMQAmgmAXgjIAlgRQAngYAJgcQAKgcAUgZQAKgMAIgHIA8gjIgTAtQgRAxALASQAiA6A9gDQAvgCAygIIAPARQAXANAvgMQA2gPA9gxQA4guA0hBQBBhTBViOIgXBiQgcBqgYApIgzBaIA1gDQgGARgSAYQgjAwg1AfQg1AfgsArIgiAkQgJACgHAIQgPARAGAjQAFAiAPAQQAHAJAGABQABAEgNALQgaAWhBAmQhXAxgrBAQgvBGA8ASQBVAbBLAhQgegFgpAEQhRAIgyAsQgyAtghAiIgXAZQgNAIgRAMQggAZgSAbQgnAogRAVQggAmAOAoQAYBBANASIgYAPQgcgBgfAFQg+AKgNAhQgLAbgSAgQgKAXAPAQQAQARAWACQALABAIgDIh4BuIgLAeQgIAhAMAMQAUAUAMAAQgbARgcAUQg5ApgEATQgFATAHAOQADAHAEADIgMAhQgNAjAAANQAAAVAEASQgHgMgJgLg");
	mask.setTransform(1.1,-18.4);

	// pic
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(-19,60);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_1, new cjs.Rectangle(-122.3,-124,246.8,211.3), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(3);
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// txt
	this.instance = new lib.txt_1();
	this.instance.parent = this;

	this.instance_1 = new lib.txt_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.2,1.2);

	this.instance_2 = new lib.txt_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.2,1.2);

	this.instance_3 = new lib.txt_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.4,-12.5,406.8,25.1);


(lib.btn_mv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// blk
	this.instance = new lib.blk();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0,4.292,2.414,0,-29.6,0,-0.1,0);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520,-133.2,1040,266.5);


(lib.btn_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// blue
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1B7285","#021B1F"],[0,1],0,63,0,-62.9).s("#006666").ss(2,1,1).dr(-252.5,-64,505,128);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// red
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DD5E0D","#571D03"],[0,1],0,63,0,-62.9).s("#993300").ss(2,1,1).dr(-252.5,-64,505,128);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// dark
	this.instance = new lib.bt();
	this.instance.parent = this;
	this.instance.setTransform(-6.9,-0.7,1.95,1.908);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-917.5,-65.6,1170,1145);


(lib.btn_blk_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blk
	this.instance = new lib.blk();
	this.instance.parent = this;
	this.instance.setTransform(1104,133.3,2.099,2.099);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({x:217.2},0).to({x:1104},50).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(886.8,0,434.4,266.5);


(lib.btn_blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blk
	this.instance = new lib.blk();
	this.instance.parent = this;
	this.instance.setTransform(217.2,133.3,2.099,2.099);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1104},50).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434.4,266.5);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgncAKAIAAz/MBO5AAAIAAT/g");
	mask.setTransform(0,0.1);

	// btn_blk
	this.btn_mv = new lib.btn_mv();
	this.btn_mv.parent = this;
	this.btn_mv.setTransform(-12,-0.7);

	var maskedShapeInstanceList = [this.btn_mv];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn_mv).wait(1));

	// btn_txt
	this.btn_txt = new lib.btn_txt();
	this.btn_txt.parent = this;
	this.btn_txt.setTransform(175.8,14.2,1,1,0,0,0,175.8,14.2);

	this.timeline.addTween(cjs.Tween.get(this.btn_txt).wait(1));

	// masked_shape
	this.instance = new lib.masked_shape();
	this.instance.parent = this;
	this.instance.setTransform(0.9,1);
	this.instance.alpha = 0.102;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pl_btn
	this.btn_color = new lib.btn_color();
	this.btn_color.parent = this;
	this.btn_color.setTransform(-332.6,506.9,1,1,0,0,0,-332.6,506.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_color).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-917.5,-77,1185.1,1156.4), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btm
	this.instance = new lib.btm();
	this.instance.parent = this;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-302,-302,604,604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},15).wait(19).to({_off:false},0).to({_off:true},3).wait(41).to({_off:false},0).wait(46).to({_off:true},1).wait(99));

	// btm
	this.instance_1 = new lib.btm();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({scaleX:1.06,scaleY:1.06},0).wait(2).to({scaleX:1,scaleY:1},0).wait(125).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(14).to({scaleX:1.04,scaleY:1.04},0).wait(2).to({scaleX:1,scaleY:1},0).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-300,600,600);


(lib.rndlt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gdn_lt = function() {
			this.stop();
		}

		setTimeout(this.gdn_lt.bind(this), 30000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(341));

	// mc_rnd
	this.mc_rnd_5 = new lib.mc_rnd();
	this.mc_rnd_5.parent = this;
	this.mc_rnd_5.setTransform(-111,28.3,0.25,0.25);
	this.mc_rnd_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_rnd_5).wait(22).to({alpha:1},0).to({guide:{path:[-110.9,25.3,-106.1,22.2,-104.4,17,-100.8,6.6,-115.8,-3.6,-122.6,-8.2,-135,-13,-148.8,-18.4,-152,-20.3,-159.5,-24.5,-160.2,-30.2,-161,-37,-152.9,-47.9,-145.7,-57.6,-133,-64.9,-119.5,-71.7,-114.9,-74.5,-107.4,-79.1,-108.8,-84.3,-110.5,-90.6,-124.9,-101.9,-136.6,-111,-150.4,-119.6,-163.4,-127.7,-165.8,-129.7,-171.1,-134,-171.8,-139.5,-172.4,-145.1,-168.9,-156.8,-165.9,-166.5,-159.2,-173.7,-155.5,-177.6,-149.2,-183.6,-144.9,-188.8,-146,-195.8,-147.4,-204.4,-156.9,-219.8,-176.2,-251.4,-180.5,-275.4,-182.2,-285.1,-181.3,-292.5]}},318).wait(1));

	// mc_rnd
	this.mc_rnd_4 = new lib.mc_rnd();
	this.mc_rnd_4.parent = this;
	this.mc_rnd_4.setTransform(-62.9,-29.4,0.25,0.25);
	this.mc_rnd_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_rnd_4).wait(14).to({alpha:1},0).to({guide:{path:[-62.9,-29.5,-57.1,-41.6,-63.9,-51,-65.7,-53.4,-73.5,-63.1,-78.6,-69.4,-80.4,-73.2,-85.3,-83.7,-74.9,-96,-70,-101.9,-62.4,-105.9,-58.1,-108.1,-49.5,-112.1,-42.3,-116.1,-37.8,-122.3,-31.8,-130.2,-28,-144,-18.5,-178.5,-18.1,-200.4,-17.5,-229.1,-30.8,-253.9,-48.6,-287.5,-54.3,-303.6,-57.5,-312.8,-58.5,-320.2]}},318).to({_off:true},1).wait(8));

	// mc_rnd
	this.mc_rnd_3 = new lib.mc_rnd();
	this.mc_rnd_3.parent = this;
	this.mc_rnd_3.setTransform(-111,25.3,0.25,0.25);
	this.mc_rnd_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_rnd_3).wait(14).to({alpha:1},0).to({guide:{path:[-111.1,25.3,-111.3,23.5,-111.1,21.1,-110.3,11.3,-100.9,0,-96.1,-5.6,-87,-11.4,-76.9,-17.3,-73.1,-19.6,-66.9,-23.4,-67.1,-25.7,-67.4,-28.5,-76.9,-31,-102.1,-37.5,-111.3,-43.3,-123.9,-51.1,-108.9,-58,-102.9,-60.7,-91.9,-64.2,-80.4,-67.9,-76.2,-69.7,-68.2,-73.1,-64,-77.5,-58.9,-82.9,-58,-91,-56.9,-98.8,-59.6,-105.9,-61.6,-110.9,-66.9,-118.1,-74,-127.7,-75.6,-130.4,-80.3,-138.1,-81.9,-145.9,-83.2,-152.2,-86.3,-159.2,-89.1,-165.3,-89.2,-168.1,-89.5,-172.8,-86,-179.6,-82.1,-187,-71.9,-200.9,-64.8,-210.4,-51.5,-226.9,-39,-242.1,-34.1,-249,-26.1,-260.3,-22.9,-269.1,-21.2,-273.7,-20.7,-278.2]}},318).to({_off:true},1).wait(8));

	// mc_rnd
	this.mc_rnd_2 = new lib.mc_rnd();
	this.mc_rnd_2.parent = this;
	this.mc_rnd_2.setTransform(-110.2,28.6,0.25,0.25);
	this.mc_rnd_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_rnd_2).wait(9).to({alpha:1},0).to({guide:{path:[-110.1,28.6,-113.1,24.7,-115.4,19.7,-122,5,-113.9,-6.9,-109.8,-12.9,-104.5,-18.5,-98.7,-24.1,-96.4,-26.5,-88.5,-34.7,-87.9,-43.9,-87.7,-47.1,-86.6,-54.8,-85.7,-60.7,-85.9,-63.9,-86.3,-73.2,-95.9,-80.9,-99,-83.5,-109.7,-90.5,-119.5,-97.1,-123.9,-100.9,-138.1,-113.4,-124.9,-120.9,-118.6,-124.4,-100.3,-129.4,-69.9,-137.7,-69.8,-137.7,-54.1,-142.5,-51.2,-146.6,-49.4,-149.1,-52.1,-151.7,-54.8,-154.2,-62,-156.8,-73.7,-161,-97.4,-165.4,-124.7,-170.4,-133.1,-172.7,-150.9,-177.6,-157.2,-185.1,-164.9,-194.2,-157.9,-208.8,-151.6,-222.1,-138,-233.4,-130.3,-239.8,-115.6,-250.1,-104.3,-259.1,-101.9,-267.9,-100.7,-272.4,-101.4,-277.8]}},318).to({_off:true},1).wait(13));

	// mc_rnd
	this.mc_rnd_1 = new lib.mc_rnd();
	this.mc_rnd_1.parent = this;
	this.mc_rnd_1.setTransform(-107.2,32,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.mc_rnd_1).to({x:-196.9,y:-324.7},318).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-31.9,53.1,66.5);


(lib.mc_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// det_7
	this.instance = new lib.det_7();
	this.instance.parent = this;
	this.instance.setTransform(-12.6,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:1.17,scaleY:1.17,rotation:2.7,x:-12.3,y:105.3},58).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:-12.6,y:90.9},91).to({regY:0.1,scaleX:1.11,scaleY:1.11,rotation:1.5,x:-12.4,y:99.9},91).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:-12.6,y:90.9},59).wait(1));

	// det_6
	this.instance_1 = new lib.det_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.37,scaleY:1.37,x:-34.4,y:2.1},58).to({scaleX:1,scaleY:1,x:-32.3,y:-0.5},91).to({regX:-0.1,regY:0.1,scaleX:1.23,scaleY:1.23,x:-33.7,y:1.2},91).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-32.3,y:-0.5},59).wait(1));

	// det_5
	this.instance_2 = new lib.det_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-45.4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,regY:0.1,scaleX:1.31,scaleY:1.31,rotation:-5,x:-49.4,y:22.6},58).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-45.4,y:17.5},91).to({regX:-0.2,regY:0.2,scaleX:1.19,scaleY:1.19,rotation:-3,x:-48,y:20.8},91).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-45.4,y:17.5},59).wait(1));

	// det_4
	this.instance_3 = new lib.det_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.7,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.13,scaleY:1.13,x:-12.4,y:105.8},58).to({scaleX:1,scaleY:1,x:-12.7,y:91.4},91).to({scaleX:1.08,scaleY:1.08,x:-12.5,y:100.3},91).to({scaleX:1,scaleY:1,x:-12.7,y:91.4},59).wait(1));

	// det_3
	this.instance_4 = new lib.det_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.6,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({x:-3.2,y:60.7},9).to({x:0.6,y:67.5},10).to({x:-3.2,y:60.7},10).to({x:0.6,y:67.5},10).wait(222));

	// det_2
	this.instance_5 = new lib.det_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-13.4,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.04,scaleY:1.04},150).to({scaleX:1,scaleY:1},149).wait(1));

	// det_1
	this.instance_6 = new lib.det_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5.2,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.07,scaleY:1.07},150).to({scaleX:1,scaleY:1},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.8,-213.5,601.6,605);


(lib.mc_rt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// det_10
	this.instance = new lib.det_10();
	this.instance.parent = this;
	this.instance.setTransform(31.1,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({x:-130.9,y:90.5},10).to({x:31.1,y:-20.5},30).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512.9,-197.5,600,600);


(lib.mc_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":1,"out":10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// rnd
	this.instance = new lib.rndlt();
	this.instance.parent = this;
	this.instance.setTransform(192.8,-67.7,1.422,1.422);
	this.instance.alpha = 0.551;

	this.instance_1 = new lib.rndlt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.8,-26.2,1.422,1.422);
	this.instance_1.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(19));

	// btn
	this.btn = new lib.btn();
	this.btn.parent = this;
	this.btn.setTransform(0.1,0.1,0.396,0.396,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.42,x:0.1,y:0.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({scaleX:0.42,scaleY:0.41},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.4,x:0.1,y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.3,-53,564.6,480.3);


(lib.mc_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.bg = new lib.bg_1();
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(2).to({x:0.1},0).wait(1).to({x:0.2},0).wait(1).to({x:0.4},0).wait(1).to({scaleX:1,scaleY:1,x:0.6},0).wait(1).to({x:0.8},0).wait(1).to({x:1.1},0).wait(1).to({scaleX:1,scaleY:1,x:1.4},0).wait(1).to({x:1.8},0).wait(1).to({scaleX:1,scaleY:1,x:2.2},0).wait(1).to({x:2.7},0).wait(1).to({scaleX:1,scaleY:1,x:3.3},0).wait(1).to({x:3.8},0).wait(1).to({scaleX:1,scaleY:1,x:4.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:5.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:5.8},0).wait(1).to({x:6.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:7.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:8.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:9.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:10.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:11.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:12.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:13.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:14.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:15.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:17.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:18.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:19.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:21.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:22.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:24.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:25.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:27.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:29.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:30.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:32.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:34.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:36.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:38},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:39.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:41.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:43.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:45.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:48},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:50},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:52.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:54.3},0).wait(1).to({regX:0.1,scaleX:1.13,scaleY:1.13,x:56.5},0).wait(1).to({regX:0,scaleX:1.12,scaleY:1.12,x:58.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:60.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:62.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:65.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:67.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:69.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:71.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:74.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:76.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:78.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:80.8},0).wait(1).to({regX:0.1,scaleX:1.09,scaleY:1.09,x:83.1},0).wait(1).to({regX:0,scaleX:1.1,scaleY:1.1,x:85.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:87.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:89.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:91.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:93.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:95.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:97.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:99.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:101.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:103.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:105.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:107.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:109.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:111},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:112.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:114.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:115.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:117.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:118.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:120.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:121.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:122.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:123.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:124.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:125.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:126.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:127.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:128.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:129.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:130},0).wait(1).to({x:130.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:131.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:131.6},0).wait(1).to({x:132},0).wait(1).to({x:132.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:132.6},0).wait(1).to({x:132.7},0).wait(1).to({x:132.9},0).wait(1).to({x:133},0).wait(2).to({x:132.9},0).wait(1).to({x:132.7},0).wait(1).to({x:132.5},0).wait(1).to({x:132.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:131.9},0).wait(1).to({x:131.5},0).wait(1).to({x:131.1},0).wait(1).to({x:130.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:130},0).wait(1).to({x:129.4},0).wait(1).to({x:128.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:127.9},0).wait(1).to({x:127},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:126.1},0).wait(1).to({x:125.2},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:124.1},0).wait(1).to({x:123},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:121.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:120.6},0).wait(1).to({x:119.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:118},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:116.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:115},0).wait(1).to({x:113.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:111.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:110.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:108.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:106.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:104.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:102.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:100.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:98.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:96.3},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:94.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:91.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:89.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:87.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:84.6},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:82.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:79.5},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:76.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:74.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:71.6},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:68.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:66},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:63.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:60.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:57.4},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:54.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:51.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:48.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:45.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:42.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:39.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:36.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:33.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:30.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:27.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:24.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:21.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:18.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:15.8},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:12.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:10.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:7.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:4.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:1.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-0.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-3.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-6.1},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-8.7},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-11.1},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-13.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-15.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-18},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-20.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-22.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-24.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-26.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-28},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-29.8},0).wait(1).to({x:-31.4},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-33},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-34.4},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-35.8},0).wait(1).to({x:-37.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-38.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-39.4},0).wait(1).to({x:-40.4},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-41.3},0).wait(1).to({x:-42.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-42.8},0).wait(1).to({x:-43.4},0).wait(1).to({x:-44},0).wait(1).to({x:-44.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-44.7},0).wait(1).to({x:-45},0).wait(1).to({x:-45.1},0).wait(1).to({x:-45.2},0).wait(3).to({scaleX:1.24,scaleY:1.24,x:-45.1},0).wait(2).to({x:-45},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-44.9},0).wait(1).to({x:-44.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-44.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-44.6},0).wait(1).to({x:-44.4},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-44.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-44.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-43.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-43.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-43.4},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-43.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-42.9},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-42.6},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-42.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-42},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-41.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-41.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-40.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-40.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-40.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-39.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-39.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-38.8},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-38.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-37.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-37.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-36.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-36.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-35.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-35.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-34.5},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-33.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-33.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-32.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-32},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-31.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-30.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-30},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-29.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-28.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-27.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-27.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-26.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-25.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-24.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-24.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-23.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-22.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-21.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-21.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-20.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-19.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-18.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-18},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-17.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-16.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-15.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-15},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-14.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-13.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-12.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-12.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-11.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-10.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-10.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-9.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-8.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-8.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-7.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-7.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-6.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-5.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-4.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-3.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-3.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-2.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-2.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-2.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-1.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-1.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-1.3},0).wait(1).to({scaleX:1,scaleY:1,x:-1},0).wait(1).to({scaleX:1,scaleY:1,x:-0.8},0).wait(1).to({scaleX:1,scaleY:1,x:-0.6},0).wait(1).to({scaleX:1,scaleY:1,x:-0.5},0).wait(1).to({x:-0.4},0).wait(1).to({scaleX:1,scaleY:1,x:-0.2},0).wait(2).to({scaleX:1,scaleY:1,x:-0.1},0).wait(2).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-300,600,600);


(lib.det_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEnMNQhQguhih1IhShsQglgugpg+QhQh8gLhQQgKhQAjgyQAMgPAOgLIAMgHQADAZAxAbQAYANAXAIIgKAnQgJAqAGAXQAHAWAgAkQAQATAPAOIgdAlQgZAtARArQASArApAEQAVADARgGIAyBZQA2BdATAYQAgAnCqCPQh7gxg0gegAlwmYQgxgzgPglQgVgzgKg1QgMg/AJgrQAJgoAZgnQAKgQAaghQARgWARgDQgJAlgGAtQgMBZANAkQAOAjA1A8QAbAfAXAXIg/CJQgVgRgZgZg");
	mask.setTransform(-119.3,27.8);

	// pic
	this.top_blk_1 = new lib.btn_blk_2();
	this.top_blk_1.parent = this;
	this.top_blk_1.setTransform(7.8,189.7,0.614,0.614,-135,0,0,217.2,133.2);

	var maskedShapeInstanceList = [this.top_blk_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.top_blk_1).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ACJNnQjBhPi9ilQi8imi9kTQg7hXg0hWIgohFIAKg3QgXgQgagiQgzhDgKhYQgLhXABhuIADhdIAZgeQgEgCgEgIQgIgPAFgZQAGgkAag3QAehAAhgcQAegaAdgNQAOgGAIgCQgHAogEAwQgHBgARApQAQAqAwA0QAXAbAVASIg1CDIANASQAPAWAFAZQAIAogBARIAYAMQAbARATAaQAeAqAKAkIAJAZQAMAaAUAEQAgAHAKAAIgIAeQgFAjASAXQASAXAsAcQAXAOASAJIgOAdQgMAjALAcQAMAcAdAmQAPATANANIgWAcQgVAiALAlQAKAkAmAWQATALAQAEIBcCUIAIAlIAeAPIB3CAQAUAVAnAXQATALAQAHQgWgwgbgyQgxhZgYgVIA/AuQBLA7AiAyQA1BQAlBQQg7gGhhgog");
	mask_1.setTransform(-88.4,32);

	// pic
	this.top_blk_2 = new lib.btn_blk();
	this.top_blk_2.parent = this;
	this.top_blk_2.setTransform(-232.7,-118.7,0.614,0.614,45,0,0,217.2,133.2);

	var maskedShapeInstanceList = [this.top_blk_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.top_blk_2).wait(1));

	// mask
	this.instance = new lib.topor();
	this.instance.parent = this;
	this.instance.setTransform(50,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.det_8, new cjs.Rectangle(-250,-320,600,600), null);


(lib.btn_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// btn_move
	this.btn_move = new lib.mc_btn();
	this.btn_move.parent = this;
	this.btn_move.setTransform(-128.8,187.1,1,1,0,0,0,-128.8,187.1);
	this.btn_move.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn_move).wait(49).to({scaleX:1.19,scaleY:1.19,x:-153.5,y:223.1},0).wait(1).to({regX:0,regY:0,scaleX:1.19,scaleY:1.19,x:0,y:0,alpha:0.025},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.102},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.228},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.394},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.578},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.751},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.887},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.972},0).wait(1).to({regX:-128.8,regY:187.1,scaleX:1,scaleY:1,x:-128.8,y:187.1,alpha:1},0).to({scaleX:1.05,scaleY:1.05,x:-135.2,y:196.4},4).to({scaleX:1,scaleY:1,x:-128.8,y:187.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.3,-53,564.6,480.3);


(lib.mc_lft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// det_8
	this.top = new lib.det_8();
	this.top.parent = this;
	this.top.setTransform(114.1,-52.4);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(30).to({regX:-0.1,regY:-0.1,rotation:50,y:-52.5},10).to({regX:0.1,rotation:-35.5,x:103.3,y:-21.9},10).to({regX:0,scaleX:1,scaleY:1,rotation:12.3,x:114.1,y:-52.5},30).to({regY:0,scaleX:1,scaleY:1,rotation:0,y:-52.4},21).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.2,-399.8,879.3,627.4);


(lib.thrash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rndlt
	this.rndlt = new lib.rndlt();
	this.rndlt.parent = this;
	this.rndlt.setTransform(87.1,-70.3);
	this.rndlt.alpha = 0.5;
	this.rndlt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rndlt).wait(161).to({_off:false},0).wait(80));

	// rndlt
	this.rndlt_1 = new lib.rndlt();
	this.rndlt_1.parent = this;
	this.rndlt_1.setTransform(87.1,-70.3);
	this.rndlt_1.alpha = 0.5;
	this.rndlt_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rndlt_1).wait(104).to({_off:false},0).wait(137));

	// rndlt
	this.rndlt_2 = new lib.rndlt();
	this.rndlt_2.parent = this;
	this.rndlt_2.setTransform(87.1,-70.3);
	this.rndlt_2.alpha = 0.5;
	this.rndlt_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rndlt_2).wait(52).to({_off:false},0).wait(189));

	// rndlt
	this.rndlt_3 = new lib.rndlt();
	this.rndlt_3.parent = this;
	this.rndlt_3.setTransform(87.1,-70.3);
	this.rndlt_3.alpha = 0.5;
	this.rndlt_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.rndlt_3).wait(241));

	// p6
	this.instance = new lib.p6();
	this.instance.parent = this;
	this.instance.setTransform(2.6,-109.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:0.891},25).to({regX:0.1,regY:-0.1,scaleX:2.52,scaleY:2.52,x:56.2,y:-161,alpha:0},68).to({_off:true},1).wait(68));

	// p4
	this.instance_1 = new lib.p4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.4,-134.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({alpha:1},25).to({regX:-0.1,regY:-0.1,scaleX:3.46,scaleY:3.46,x:-128.2,y:-215.1,alpha:0},39).to({_off:true},1).wait(81));

	// p3
	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-48.1,-146.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({y:-150,alpha:1},29).to({scaleX:2.14,scaleY:4.04,x:-34.9,y:-208.5,alpha:0.219},68).to({regX:-0.1,regY:-0.1,scaleX:2.46,scaleY:4.88,x:-31.2,y:-224.9,alpha:0},19).to({_off:true},1).wait(101));

	// p2
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12,-148.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({alpha:0.441},24).to({regX:-0.1,regY:-0.1,scaleX:3.05,scaleY:3.05,x:-12.3,y:-149,alpha:0},31).to({_off:true},1).wait(145));

	// p1
	this.instance_4 = new lib.p1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-92.9,-113.8,1,1,0,0,180);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({alpha:0.441},28).to({regX:0.1,regY:-0.1,scaleX:2.11,scaleY:2.11,x:-141.7,y:-173,alpha:0},61).to({_off:true},1).wait(72));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7,-136.9,1.337,1.337,-6.5,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({scaleX:1.57,scaleY:1.57,rotation:-7.3,x:2.8,y:-138.5,alpha:0.441,compositeOperation:NaN},32).to({regY:0,scaleX:3.16,scaleY:3.16,rotation:-15,x:20.8,y:-160.1,alpha:0},29).to({_off:true},1).wait(162));

	// mc_rt
	this.hnd2 = new lib.mc_rt();
	this.hnd2.parent = this;
	this.hnd2.setTransform(-41.6,-51.8,1,1,0,0,0,-213,102.5);

	this.timeline.addTween(cjs.Tween.get(this.hnd2).to({x:-55.8,y:-21.2},120).to({x:-41.6,y:-51.8},120).wait(1));

	// det_16
	this.instance_6 = new lib.det_16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-32.5,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.4,scaleY:1.4,rotation:30,x:-31.6,y:58.5},120).to({scaleX:1,scaleY:1,rotation:0,x:-32.5,y:52.1},120).wait(1));

	// det_11
	this.instance_7 = new lib.det_11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(212.9,-85.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,regY:-0.4,rotation:51.4,x:189.1,y:-51.5},120).to({regX:0,regY:0,rotation:0,x:212.9,y:-85.3},120).wait(1));

	// det_15
	this.instance_8 = new lib.det_15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-6.4,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-0.1,scaleX:1.13,scaleY:1.13,rotation:15,x:-5.6,y:55.4},120).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:-6.4,y:49.1},120).wait(1));

	// det_14
	this.instance_9 = new lib.det_14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(48.8,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.17,scaleY:1.17,rotation:-3.2,x:49.7,y:83.9},120).to({scaleX:1,scaleY:1,rotation:0,x:48.8,y:83},120).wait(1));

	// det_13
	this.instance_10 = new lib.det_13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-43.2,-48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-50.7},120).to({y:-48.9},120).wait(1));

	// det_12
	this.instance_11 = new lib.det_12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-174.9,230.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:227.4},120).to({y:230.1},120).wait(1));

	// det_18
	this.instance_12 = new lib.det_18();
	this.instance_12.parent = this;
	this.instance_12.setTransform(6,143.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1.11,scaleY:1.11,rotation:6,x:6.8,y:150.1},120).to({scaleX:1,scaleY:1,rotation:0,x:6,y:143.8},120).wait(1));

	// det_7
	this.glv = new lib.mc_top();
	this.glv.parent = this;
	this.glv.setTransform(-42.9,-48.3,1,1,0,0,0,-13.1,89);

	this.timeline.addTween(cjs.Tween.get(this.glv).to({regX:-13.2,scaleX:1.09,scaleY:1.09,rotation:-6.2,x:-31.3,y:-33.9},120).to({regX:-13.1,scaleX:1,scaleY:1,rotation:0,x:-42.9,y:-48.3},120).wait(1));

	// det_9
	this.instance_13 = new lib.det_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-42.2,-51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1.02,scaleY:1.02,x:-44,y:-46.5},120).to({scaleX:1,scaleY:1,x:-42.2,y:-51.9},120).wait(1));

	// det_8
	this.hnd1 = new lib.mc_lft();
	this.hnd1.parent = this;
	this.hnd1.setTransform(-40.2,-48.9,1,1,0,0,0,114,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.hnd1).to({scaleX:1,scaleY:1,rotation:24.3,x:-39.7,y:-44.9},78).to({regX:113.9,scaleX:1,scaleY:1,rotation:37.5,x:-39.3,y:-42.6},42).to({regX:114,rotation:0,x:-40.2,y:-48.9},120).wait(1));

	// det_19
	this.instance_14 = new lib.det_19();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-43.3,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:-42.4,y:-43.5},120).to({x:-43.3,y:-49.8},120).wait(1));

	// det_17
	this.instance_15 = new lib.det_17();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-43.2,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:-0.1,regY:0.1,rotation:-16.5,x:-42.4,y:60.7},120).to({regX:0,regY:0,rotation:0,x:-43.2,y:54.3},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.4,-396.2,879.3,650.4);


(lib.mc_trash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thrash
	this.thrash = new lib.thrash();
	this.thrash.parent = this;
	this.thrash.setTransform(-35.6,-53.8,1,1,0,0,0,-35.6,-53.8);

	this.timeline.addTween(cjs.Tween.get(this.thrash).to({scaleX:1.05,scaleY:1.05,x:-35.7,y:-70.5},150).to({scaleX:1,scaleY:1,x:-35.6,y:-53.8},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.4,-396.2,879.3,650.4);


(lib.move_thrash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.rndlt = new lib.rndlt();
	this.rndlt.parent = this;
	this.rndlt.setTransform(204.5,35.5,1.422,1.422);
	this.rndlt.alpha = 0.5;
	this.rndlt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rndlt).wait(99).to({_off:false},0).wait(191));

	// mc_thrash
	this.mc_thrash = new lib.mc_trash();
	this.mc_thrash.parent = this;
	this.mc_thrash.setTransform(-37.4,-56.4,1.05,1.05,0,0,0,-35.6,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.mc_thrash).to({regY:-53.8,scaleX:1.04,scaleY:1.04,x:-12.3,y:-52.3},49).to({regX:-35.5,regY:-53.7,scaleX:1.14,scaleY:1.14,x:13.6,y:-83.9},50).to({regX:-35.6,scaleX:1.05,scaleY:1.05,x:-65.4,y:-56.4},100).to({x:-37.4},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-597.9,-416.1,923.2,683);


(lib.blr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// move_thrash
	this.move_thrash = new lib.move_thrash();
	this.move_thrash.parent = this;
	this.move_thrash.setTransform(-37.4,-56.5,1,1,0,0,0,-37.4,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.move_thrash).wait(46).to({regX:-37.6,regY:-56.2,scaleX:1.19,scaleY:1.19,x:-48.6,y:-32.3},3).to({regX:-37.4,regY:-56.5,scaleX:1,scaleY:1,x:-37.4,y:-56.5},30).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-597.9,-416.1,923.2,683);


// stage content:
(lib._160x600_Thresh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		//var clickTag = "http://www.google.com";

		var gdnCount = false;

		this.gdn = function() {

			gdnCount = true;

			this.logo.stop();
			this.mc_bg.stop();
			this.mc_bg.bg.stop();
			this.monstr.stop();
			this.monstr.move_thrash.stop();

			this.monstr.move_thrash.mc_thrash.stop();
			this.monstr.move_thrash.mc_thrash.thrash.stop();
			this.monstr.move_thrash.mc_thrash.thrash.glv.stop();
			this.monstr.move_thrash.mc_thrash.thrash.hnd1.stop();
			this.monstr.move_thrash.mc_thrash.thrash.hnd2.stop();

			this.monstr.move_thrash.mc_thrash.thrash.hnd1.top.top_blk_1.stop();
			this.monstr.move_thrash.mc_thrash.thrash.hnd1.top.top_blk_2.stop();
		}

		setTimeout(this.gdn.bind(this), 30000);

		this.cta.addEventListener("click", mainMouseClickHandler.bind(this));

		function mainMouseClickHandler()
		{
			window.open(clickTag, '_blank');
		}

		this.btn_go.addEventListener("mouseover", btnMouseOverHandler.bind(this));
		this.btn_go.addEventListener("mouseout", btnMouseOutHandler.bind(this));
		this.btn_go.addEventListener("click", btnMouseClickHandler.bind(this));

		function btnMouseOverHandler()
		{
			if (gdnCount == false) {
			this.btn_start.btn_move.gotoAndPlay("over");
			this.btn_start.btn_move.btn.btn_mv.gotoAndPlay("over");
			}
		}

		function btnMouseOutHandler()
		{
			if (gdnCount == false) {
			this.btn_start.btn_move.gotoAndPlay("out");
			this.btn_start.btn_move.btn.btn_mv.gotoAndPlay("out");
			}
		}

		function btnMouseClickHandler()
		{
			window.open(clickTag, '_blank');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link
	this.btn_go = new lib.link();
	this.btn_go.parent = this;
	this.btn_go.setTransform(79.9,445.5,0.466,0.058,0,0,0,149.8,301.8);
	new cjs.ButtonHelper(this.btn_go, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_go).wait(1));

	// link
	this.cta = new lib.link();
	this.cta.parent = this;
	this.cta.setTransform(150,300,1,1,0,0,0,150,299.9);
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// black
	this.instance = new lib.mc_black();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 12
	this.instance_1 = new lib._12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.1,577.6,0.5,0.5,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo
	this.logo = new lib.mc_logo();
	this.logo.parent = this;
	this.logo.setTransform(183.9,174.4,0.537,0.536,0,0,0,193.5,241.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// btn
	this.btn_start = new lib.btn_start();
	this.btn_start.parent = this;
	this.btn_start.setTransform(-9.9,576.4,0.699,0.7,0,0,0,-128.6,187.2);

	this.timeline.addTween(cjs.Tween.get(this.btn_start).wait(1));

	// riot_logo
	this.instance_2 = new lib.riot_logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.1,521.5,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// grd
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0)","#000000"],[0,0.663,1],0,299,0,-299).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(82,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// thrash
	this.monstr = new lib.blr();
	this.monstr.parent = this;
	this.monstr.setTransform(83.7,284,0.966,0.994,0,0,0,-37.2,-56.4);

	this.timeline.addTween(cjs.Tween.get(this.monstr).wait(1));

	// rndlt
	this.rndlt = new lib.rndlt();
	this.rndlt.parent = this;
	this.rndlt.setTransform(99.2,336.4,0.83,0.83);
	this.rndlt.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.rndlt).wait(1));

	// mc_bg
	this.mc_bg = new lib.mc_bg();
	this.mc_bg.parent = this;
	this.mc_bg.setTransform(82,300);

	this.timeline.addTween(cjs.Tween.get(this.mc_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377.7,226.3,891.4,818.2);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1481887602279", id:"bg"},
		{src:"images/thresh.jpg?1481887602279", id:"thresh"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
