({
	updateLayout: function (component) {
		var action = component.get('c.updateLayout'),
            layoutRequest = {
                Strategy: component.get('v.strategy'),
                ObjectType: component.get('v.objectType'),
                LayoutName: component.get('v.layoutName'),
                Operation: component.get('v.operation'),
                Behavior: component.get('v.behavior'),
                Field: component.get('v.field'),
                AnchorType: component.get('v.anchorType'),
                AnchorField: component.get('v.anchorField')
            };

        action.setParams({
            requestString: JSON.stringify(layoutRequest)
        });

		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				component.set("v.response", response.getReturnValue());
			} else if (state === "ERROR") {
				component.set("v.response", "Error");
			} else {
				component.set("v.response", "Unknown state: " + state);
			}
		});

		$A.enqueueAction(action);
	}
})