package com.huawei.rdb.slice;

import com.huawei.rdb.DbHelper;
import com.huawei.rdb.PeopleAdapter;
import com.huawei.rdb.Person;
import com.huawei.rdb.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.*;
import ohos.data.rdb.RdbPredicates;
import ohos.data.rdb.RdbStore;
import ohos.data.rdb.ValuesBucket;
import ohos.data.resultset.ResultSet;

import java.util.ArrayList;
import java.util.List;

public class MainAbilitySlice extends AbilitySlice {
    private Button addPersonButton;

    private RdbStore db;

    private PeopleAdapter peopleAdapter;

    String TABLENAME = "test";

    List<Person> queryResult;

    private PeopleAdapter.PersonClickListener personClickListener = new PeopleAdapter.PersonClickListener() {
        @Override
        public void onPersonClick(int position) {
            Person person = peopleAdapter.getPerson(position);
            String name = person.getName();
            String lastname = person.getLastName();
            delete(name, lastname);
            showData();
        }
    };

    private TextField mName;

    private TextField mLastName;

    private Button updatePersonButton, deletePersonButton;
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        initView();
        setUpViews();
        if(db!=null) {
            showData();
        }
    }

    private void initView() {
        ComponentContainer rootLayout = (ComponentContainer) LayoutScatter.getInstance(this)
                .parse(ResourceTable.Layout_ability_main, null, false);
        addPersonButton = (Button) rootLayout.findComponentById(ResourceTable.Id_add_button);
        updatePersonButton = (Button) rootLayout.findComponentById(ResourceTable.Id_update_button);
        mName = (TextField) rootLayout.findComponentById(ResourceTable.Id_name_text);
        mLastName = (TextField) rootLayout.findComponentById(ResourceTable.Id_lastName_text);
        ListContainer listContainer = (ListContainer) rootLayout.findComponentById(ResourceTable.Id_people_list);
        peopleAdapter = new PeopleAdapter(this, personClickListener);
        listContainer.setItemProvider(peopleAdapter);
        super.setUIContent(rootLayout);
    }

    public void setUpViews() {
    addPersonButton.setClickedListener(new Component.ClickedListener() {
        @Override
        public void onClick(Component component) {
            insertData();
        }
    });
    updatePersonButton.setClickedListener(new Component.ClickedListener() {
        @Override
        public void onClick(Component component) {
            updateData();
        }
    });
    }

    private void insertData() {
        ValuesBucket valuesBucket =  new ValuesBucket();
        valuesBucket.putString("name", mName.getText());
        valuesBucket.putString("lastName", mLastName.getText());
        db.insert(TABLENAME, valuesBucket);
        showData();
    }

    private void showData() {
        queryData();
    }

    public void updateData() {
        RdbPredicates rdbPredicates = new RdbPredicates(TABLENAME).equalTo("name", mName.getText());
        ValuesBucket valuesBucket = new ValuesBucket();
        valuesBucket.putString("lastName",mLastName.getText());
        db.update(valuesBucket, rdbPredicates);
        showData();
    }

    private void queryData() {
        String[] columns = new String[] {"name", "lastName"};
        RdbPredicates rdbPredicates = new RdbPredicates(TABLENAME);
        ResultSet resultSet = db.query(rdbPredicates, columns);
        queryResult = new ArrayList<Person>();
        if(resultSet!=null) {
            if (resultSet.getRowCount() > 0) {
                while (resultSet.goToNextRow()) {
                    Person person = new Person();
                    person.setName(resultSet.getString(0));
                    person.setLastName(resultSet.getString(1));
                    queryResult.add(person);
                }
            }
        }
        peopleAdapter.setPeople(queryResult);
    }

    public void delete(String name, String lastName) {
        RdbPredicates rdbPredicates = new RdbPredicates(TABLENAME);
        rdbPredicates.equalTo("name", name);
        rdbPredicates.and().equalTo("lastName", lastName);
        db.delete(rdbPredicates);
    }

    @Override
    public void onActive() {
        super.onActive();
        DbHelper dbHelper = new DbHelper(this);
        db = dbHelper.initRdb(this);
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }
}
