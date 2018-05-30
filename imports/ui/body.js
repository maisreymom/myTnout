import { Template } from 'meteor/templating';
import {Mongo} from 'meteor/mongo'
import './body.html';
import {Posts,Text} from "../../lib/Database";

Template.body.helpers({
    tasks:function () {
        return Text.find();
    },
});

Template.body.events({
    'click .ll':function (e) {
        Text.insert({ text: 'Hello world' });
    }

})
