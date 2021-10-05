package com.example.hellopreferences.slice;

import com.example.hellopreferences.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.colors.RgbColor;
import ohos.agp.components.Button;
import ohos.agp.components.Component;
import ohos.agp.components.Text;
import ohos.agp.components.element.Element;
import ohos.agp.components.element.ShapeElement;

public class MainAbilitySlice extends AbilitySlice {

    // Current count
    private int mCount = 0;
    // Current background color
    private int mColor;
    // Text view to display both count and color
    private Text mShowCountTextView;

    // Key for current count
    private final String COUNT_KEY = "count";
    // Key for current color
    private final String COLOR_KEY = "color";
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_main);

        Button btnRed = (Button) findComponentById(ResourceTable.Id_btn_red);
        btnRed.setClickedListener(component -> {
            mColor = getColor(ResourceTable.Color_red);
            changeBackground(component);
        });

        Button btnGreen = (Button) findComponentById(ResourceTable.Id_btn_green);
        btnGreen.setClickedListener(component -> {
            mColor = getColor(ResourceTable.Color_green);
            changeBackground(component);
        });

        Button btnBlue = (Button) findComponentById(ResourceTable.Id_btn_blue);
        btnBlue.setClickedListener(component -> {
            mColor = getColor(ResourceTable.Color_blue);
            changeBackground(component);

        });

        Button btnCount = (Button) findComponentById(ResourceTable.Id_btn_count);
        btnCount.setClickedListener(this::countUp);

        Button btnReset = (Button) findComponentById(ResourceTable.Id_btn_reset);
        btnReset.setClickedListener(this::reset);

        // Initialize views, color
        mShowCountTextView = (Text) findComponentById(ResourceTable.Id_text_display);
        mColor = getColor(ResourceTable.Color_red);

        mShowCountTextView.setText(mCount);
        ShapeElement shapeElement = new ShapeElement();
        shapeElement.setRgbColor(RgbColor.fromArgbInt(mColor));
        mShowCountTextView.setBackground(shapeElement);

    }

    public void changeBackground(Component component) {
        Element element = component.getBackgroundElement();
        mShowCountTextView.setBackground(element);
    }


    public void countUp(Component component) {
        mCount++;
        mShowCountTextView.setText(String.format("%s", mCount));
    }


    public void reset(Component component) {
        // Reset count
        mCount = 0;
        mShowCountTextView.setText(String.format("%s", mCount));

        // Reset color
        mColor = getColor(ResourceTable.Color_red);
        ShapeElement shapeElement = new ShapeElement();
        shapeElement.setRgbColor(RgbColor.fromArgbInt(mColor));
        mShowCountTextView.setBackground(shapeElement);

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
