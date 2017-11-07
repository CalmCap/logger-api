let mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
   *  本处为Task的schema
   * 其中account,title,class不能同时相同
   * account 记录本任务的所属者
   * title 记录任务名
   * clas 则是任务分类
   * status 为任务状态
   * score 为任务每次完成的分数
   * stiem 为总次数
   * ftime 为已完成次数
   * type 是分类，为随意字符串
   * initTime 是创建时间，为Date.valueOf()的值
   */
let TaskSchema = new Schema({
  account: { type: String, required: true },
  title: { type: String, required: true },
  clas: { type: Number, required: true },
  status: { type: Number, required: true },
  score: { type: Number, required: true },
  stime: { type: Number, required: true },
  ftime: { type: Number, required: true },
  type: { type: String, required: false },
  initTime: { type: String, required: true }
});

TaskSchema.index({ account: 1, title: 1 }, { unique: true });

module.exports = mongoose.model("Task", TaskSchema);
