/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Track the trade of a commodity from one trader to another
 * @param {org.apache.tvmnetwork.Trade} trade - the trade to be processed
 * @transaction
 */

async function tradeIdea(trade) {
    trade.idea.owner = trade.newOwner;
    trade.idea.market = trade.market;
    trade.idea.plantCode = trade.plantCode
    trade.idea.model = trade.model
    trade.idea.tvmCategory = trade.tvmCategory
    trade.idea.ideaType = trade.ideaType
    trade.idea.partNumber = trade.partNumber
    trade.idea.supplierGSDB = trade.supplierGSDB
    trade.idea.description = trade.description
    trade.idea.ChangeFrom = trade.ChangeFrom
    trade.idea.changeTo = trade.changeTo
    trade.idea.ideaInDate = trade.ideaInDate
    trade.idea.bcDate = trade.bcDate
    trade.idea.leadFunction = trade.leadFunction
    trade.idea.spoc = trade.spoc
    trade.idea.ideaSource = trade.ideaSource
    trade.idea.CRIDStage = trade.CRIDStage
    trade.idea.remark = trade.remark
    trade.idea.expImpDate = trade.expImpDate
    trade.idea.weekShownOnImp = trade.weekShownOnImp
    trade.idea.weekShownForProj = trade.weekShownForProj
    trade.idea.annualSavings = trade.annualSavings
    trade.idea.calSaving = trade.calSaving
    trade.idea.carryOverSavings = trade.carryOverSavings
    trade.idea.ageingDays = trade.ageingDays
    trade.idea.rank = trade.rank
    trade.idea.GSR = trade.GSR
    trade.idea.ideaGeneratedBy = trade.ideaGeneratedBy
    trade.idea.dateOfImp = trade.dateOfImp
    let assetRegistry = await getAssetRegistry('org.apache.tvmnetwork.Idea');
    await assetRegistry.update(trade.idea);
}
