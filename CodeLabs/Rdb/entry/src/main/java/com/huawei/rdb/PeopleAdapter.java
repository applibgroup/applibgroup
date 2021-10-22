package com.huawei.rdb;

import com.huawei.rdb.slice.MainAbilitySlice;
import ohos.agp.components.*;
import ohos.agp.utils.Color;

import java.util.ArrayList;
import java.util.List;

public class PeopleAdapter extends BaseItemProvider {
    private static final int PERSON_ID = 99;

    private static final int TEXT_SIZE = 60;

    private MainAbilitySlice mainAbilitySlice;

    private PersonClickListener clickListener;

    private List<Person> personList;

    /**
     * PeopleAdapter
     *
     * @param slice PersonAbilitySlice
     * @param clickListener PersonClickListener
     */
    public PeopleAdapter(MainAbilitySlice slice, PersonClickListener clickListener) {
        mainAbilitySlice = slice;
        this.clickListener = clickListener;
        personList = new ArrayList<>();
    }

    @Override
    public int getCount() {
        return personList.size();
    }

    @Override
    public Object getItem(int index) {
        return personList.get(index);
    }

    @Override
    public long getItemId(int id) {
        return id;
    }

    @Override
    public Component getComponent(int index, Component convertView, ComponentContainer componentContainer) {
        Component component = convertView;
        if (component == null) {
            DirectionalLayout.LayoutConfig config = new DirectionalLayout.LayoutConfig(
                    DirectionalLayout.LayoutConfig.MATCH_PARENT, DirectionalLayout.LayoutConfig.MATCH_CONTENT);
            DirectionalLayout mainLayout = new DirectionalLayout(mainAbilitySlice);
            mainLayout.setLayoutConfig(config);
            mainLayout.setOrientation(Component.VERTICAL);

            Text person = new Text(mainAbilitySlice);
            person.setId(PERSON_ID);
            person.setTextSize(TEXT_SIZE);
            person.setTextColor(Color.BLACK);
            mainLayout.addComponent(person);
            component = mainLayout;
        }
        Text text = (Text) component.findComponentById(PERSON_ID);
        updateItem(index, text);
        component.setClickedListener(component1 -> {
            if (clickListener != null) {
                clickListener.onPersonClick(index);
            }
        });
        return component;
    }

    /**
     * PersonClickListener
     *
     * @since 2020-08-25
     */
    public interface PersonClickListener {
        /**
         * onPersonClick
         *
         * @param position position
         */
        void onPersonClick(int position);
    }

    private void updateItem(int position, Text text) {
        Person person = personList.get(position);
        text.setText(person.getName() + " " + person.getLastName());
    }

    /**
     * setPeople
     *
     * @param people people
     */
    public void setPeople(List<Person> people) {
        personList = people;
        mainAbilitySlice.getUITaskDispatcher().asyncDispatch(this::notifyDataChanged);
    }

    /**
     * gets person
     *
     * @param position position
     * @return person
     */
    public Person getPerson(int position) {
        return personList.get(position);
    }
}
