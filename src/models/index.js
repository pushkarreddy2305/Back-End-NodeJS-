const mongoose = require('mongoose');
const mongoose_delete = require("mongoose-delete");
mongoose.set('useCreateIndex',true);
var passwordHash = require('password-hash');

const Schema = mongoose.Schema;


// -------user admin stuff

const userModel = new Schema({
  schemaType: {type: String },
  username: { type: String },
  sso: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  created: { type: Date },
  lastSeen: { type: Date },
  authToken: { type: String },
  moduleRoles: [{
    type: Schema.Types.ObjectId,
    ref: 'userRoleModule'
  }]
});

const roleModel = new Schema({
  schemaType: { type: String },
  roleName: { type: String }
});

const userModuleRoleModel = new Schema ({
  schemaType: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  module: {
    type: Schema.Types.ObjectId,
    ref: 'module'
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'role'
  }
})

const modulePermissionModel = new Schema({
  schemaType: { type: String },
  moduleName: { type: String},
  permissionLevel: {

  }
})

const permissionLevelModel = new Schema({
  schemaType: { type: String},
  levelName: { type: String },
  canCreate: { type: Boolean },
  canDelete: { type: Boolean },
  canUpdate: { type: Boolean }
})

//---- objects

const projectModel = new Schema({
  schemaType: {type: String },
  projectName: {
    type: String,
    required:[true,"Project Name is required"],
  },
  description:{
    type:String,
    requried:[true,"Project Description is required"]
  },
  key:{
    type:String,
    required:[true,"Project Key is required"],
    validate:{
      validator: function(v){
        return /^[A-Z][A-Z0-9]+$/.test(v)
      },
      message:props => `${props.value} does not meet naming requirements`,
    }
  },
  refreshProtect:{
    type:Boolean,
    default:true,
  },
  components: [{
    type: Schema.Types.ObjectId,
    ref: 'component'
  }],
  templates: [{
    type: Schema.Types.ObjectId,
    ref: 'template'
  }]
})
//add softdelete to projects
//deleted projects cannot be found without findDeleted or findWithDeleted methods
projectModel.plugin(mongoose_delete,{deletedAt:true,overrideMethods:'all'});

const componentModel = new Schema({
  schemaType: {type: String },
  componentName: { type: String },
  jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'job'
  }],
  templates: [{
    type: Schema.Types.ObjectId,
    ref: 'template'
  }],
  provider:{
    type:Schema.Types.ObjectId,
    ref: 'provider'
  }
})

const jobModel = new Schema({
  schemaType: {type: String },
  componentName: { type: String },
  templates: [{
    type: Schema.Types.ObjectId,
    ref: 'template'
  }],
})

const templateModel = new Schema({
  schemaType: {type: String },
  templateName: {type: String},
  templateType: {
    type: Schema.Types.ObjectId,
    ref: 'templateType'},
  templateLocation: {
    type: String
  }
})

const templateType = new Schema({
  schemaType: { type: String },
  typeName: { type: String }
})

var providerModel = new mongoose.Schema({
  label:{
    type:String,
    required:true,
    unique:true,
  },
  location:{
    type:String,
    required:true,
  },
  credentials:{
    type:Schema.Types.Mixed,
    required:true,
  },
  systemType:{
    type:Schema.Types.ObjectId,
    ref:'systemType',
  },
  type:String,
});

var systemTypeModel = new mongoose.Schema({
  name:String,
})

let dataClient = {} ;
dataClient.User = mongoose.model('user',userModel);
dataClient.Role = mongoose.model('role',roleModel);
dataClient.UserModuleRole = mongoose.model('userModuleRole',userModuleRoleModel);
dataClient.ModulePermission = mongoose.model('modulePermission',modulePermissionModel);
dataClient.PermissionLevel = mongoose.model('permissionLevel',permissionLevelModel);

dataClient.Project = mongoose.model('project',projectModel);
dataClient.Component = mongoose.model('component',componentModel);
dataClient.Job = mongoose.model('job',jobModel);
dataClient.Template = mongoose.model('template',templateModel);
dataClient.TemplateType = mongoose.model('templateType',templateType);
dataClient.Provider = mongoose.model('provider',providerModel);
dataClient.SystemType = mongoose.model('systemType',systemTypeModel);

module.exports = dataClient;


