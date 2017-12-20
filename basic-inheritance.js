
Function["prototype"].extends = function(parent){
	if (typeof parent === "function"){
		this["prototype"] = new parent();
		this["prototype"].constructor = this;
		this["prototype"].parent = parent["prototype"];
	}
	else {
		this["prototype"] = parent;
		this["prototype"].constructor = this;
		this["prototype"].parent = parent;
	}
	return this;
};
