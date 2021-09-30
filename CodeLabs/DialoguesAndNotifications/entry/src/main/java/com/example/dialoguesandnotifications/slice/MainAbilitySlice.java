package com.example.dialoguesandnotifications.slice;

import com.example.dialoguesandnotifications.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.*;
import ohos.agp.utils.Color;
import ohos.agp.utils.LayoutAlignment;
import ohos.agp.utils.TextAlignment;
import ohos.agp.window.dialog.CommonDialog;
import ohos.agp.window.dialog.IDialog;
import ohos.agp.window.dialog.ListDialog;
import ohos.agp.window.dialog.ToastDialog;
import ohos.event.notification.NotificationHelper;
import ohos.event.notification.NotificationRequest;
import ohos.event.notification.NotificationSlot;
import ohos.rpc.RemoteException;

import static ohos.agp.components.ComponentContainer.LayoutConfig.MATCH_CONTENT;

public class MainAbilitySlice extends AbilitySlice {

    private static final String PRIMARY_SLOT_ID = "primary_notification_slot";
    public static final float DIALOG_BOX_CORNER_RADIUS = 36.0f;
    public static final int DIALOG_BOX_WIDTH = 984;

    Button commonDialog;
    Button listDialog;
    Button customDialog;
    Button notifyMe;

    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_main);
        commonDialog = (Button) findComponentById(ResourceTable.Id_common_dialog);
        commonDialog.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                showCommonDialog();
            }
        });

        listDialog = (Button) findComponentById(ResourceTable.Id_list_dialog);
        listDialog.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                showListDialog();
            }
        });

        customDialog = (Button) findComponentById(ResourceTable.Id_custom_dialog);
        customDialog.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                showCustomDialog();
            }
        });

        notifyMe = (Button) findComponentById(ResourceTable.Id_notify_me);
        notifyMe.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                createNotificationSlot(PRIMARY_SLOT_ID);
                createBasicNotification(PRIMARY_SLOT_ID);
            }
        });

    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }


    private void showCommonDialog() {
        CommonDialog commonDialog = new CommonDialog(this);
        commonDialog.setTitleText("  Common Dialog");
        commonDialog.setContentText("  This is the Content of this dialog");
        commonDialog.setAutoClosable(true);
        commonDialog.setSize(DIALOG_BOX_WIDTH, MATCH_CONTENT);
        commonDialog.setButton(IDialog.BUTTON1, "Yes", (iDialog, i) -> {
            showToast("Clicked Yes button");
            iDialog.destroy();
        });
        commonDialog.setButton(IDialog.BUTTON2, "No", (iDialog, i) -> {
            showToast("Clicked No button");
            iDialog.destroy();
        });
        commonDialog.setButton(IDialog.BUTTON3, "Maybe", (iDialog, i) -> {
            showToast("Clicked Maybe button");
            iDialog.destroy();
        });
        commonDialog.show();
    }

    private void showListDialog() {
        String[] list = new String[]{"    item1", "    item2", "    item 3"};
        ListDialog listDialog = new ListDialog(this);
        listDialog.setTitleText("  List Dialog");
        listDialog.setItems(list);
        listDialog.setAutoClosable(true);
        listDialog.setOnSingleSelectListener(((iDialog, i) -> {
            showToast(list[i]);
        }));
        listDialog.show();
    }

    private void showCustomDialog() {
        CommonDialog commonDialog = new CommonDialog(this);
        commonDialog.setAutoClosable(true);
        commonDialog.setSize(DIALOG_BOX_WIDTH, MATCH_CONTENT);
        commonDialog.setCornerRadius(36.0f);
        Component component = LayoutScatter.getInstance(this).parse(ResourceTable.Layout_custom_dialog, null, true);
        Button button1 = (Button) component.findComponentById(ResourceTable.Id_btn_yes);
        Button button2 = (Button) component.findComponentById(ResourceTable.Id_btn_no);
        button1.setClickedListener(component1 -> click(commonDialog));
        button2.setClickedListener(component1 -> click(commonDialog));
        commonDialog.setContentCustomComponent(component);
        commonDialog.show();
    }

    public void click(CommonDialog dialog) {
        dialog.destroy();
    }

    private void showToast(String msg) {
        Text text = new Text(this);
        text.setWidth(ComponentContainer.LayoutConfig.MATCH_PARENT);
        text.setHeight(ComponentContainer.LayoutConfig.MATCH_CONTENT);
        text.setTextSize(48);
        text.setText(msg);
        text.setTextColor(Color.BLACK);
        text.setMultipleLine(true);
        text.setTextAlignment(TextAlignment.CENTER);
        ToastDialog toastDialog = new ToastDialog(this);
        toastDialog.setComponent(text);
        toastDialog.setAlignment(LayoutAlignment.BOTTOM).setDuration(2000).show();
    }

    private void createNotificationSlot(String id) {
        NotificationSlot notificationSlot = new NotificationSlot
                (id, "Basic Notification", NotificationSlot.LEVEL_HIGH);
        notificationSlot.setEnableVibration(true);
        notificationSlot.setEnableLight(true);
        notificationSlot.setLedLightColor(Color.BLUE.getValue());
        try {
            NotificationHelper.addNotificationSlot(notificationSlot);
        } catch (RemoteException e) {
            e.printStackTrace();
        }
    }

    private void createBasicNotification(String id) {
        NotificationRequest notificationRequest = new NotificationRequest();
        NotificationRequest.NotificationNormalContent content =
                new NotificationRequest.NotificationNormalContent();
        content.setTitle("Notification");
        content.setText("Hi there");
        NotificationRequest.NotificationContent notificationContent =
                new NotificationRequest.NotificationContent(content);
        notificationRequest.setTapDismissed(true);
        notificationRequest.setContent(notificationContent);
        notificationRequest.setSlotId(id);
        try {
            NotificationHelper.publishNotification(notificationRequest);
        } catch (RemoteException e) {
            e.printStackTrace();
        }
    }

}
