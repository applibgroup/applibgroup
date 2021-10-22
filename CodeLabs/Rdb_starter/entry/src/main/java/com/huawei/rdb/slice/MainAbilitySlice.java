package com.huawei.rdb.slice;

import com.huawei.rdb.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.*;
import ohos.data.rdb.RdbStore;

public class MainAbilitySlice extends AbilitySlice {
    private Button addPersonButton;

    private RdbStore db;

    private TextField mName;

    private TextField mLastName;

    private Button updatePersonButton, deletePersonButton;

    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        initView();
    }

    private void initView() {
        ComponentContainer rootLayout = (ComponentContainer) LayoutScatter.getInstance(this)
                .parse(ResourceTable.Layout_ability_main, null, false);
        addPersonButton = (Button) rootLayout.findComponentById(ResourceTable.Id_add_button);
        updatePersonButton = (Button) rootLayout.findComponentById(ResourceTable.Id_update_button);
        mName = (TextField) rootLayout.findComponentById(ResourceTable.Id_name_text);
        mLastName = (TextField) rootLayout.findComponentById(ResourceTable.Id_lastName_text);
        ListContainer listContainer = (ListContainer) rootLayout.findComponentById(ResourceTable.Id_people_list);

        super.setUIContent(rootLayout);
    }


    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }
}
