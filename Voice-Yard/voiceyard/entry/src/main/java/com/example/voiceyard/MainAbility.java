package com.example.voiceyard;

import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;
import ohos.agp.window.service.WindowManager;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        this.getWindow().addFlags(WindowManager.LayoutConfig.MOD_APPLICATION_MEDIA);
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
