let mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 *  本处为Task的schema
 * 其中account,title不能同时相同
 * account 记录本任务的所属者
 * title 记录任务名
 * score 为任务每次完成的分数
 * tiem 为完成时间
 */
let LoggerSchema = new Schema({
  account: { type: String, required: true },
  title: { type: String, required: true },
  score: { type: Number, required: true },
  time: { type: Number, required: true }
});

LoggerSchema.index({ account: 1, title: 1 }, { unique: true });

module.exports = mongoose.model("Logger", LoggerSchema);
