// Smoldot
// Copyright (C) 2019-2021  Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

export default function westend_specs() {
  return {
    "name": "Tick",
    "id": "tick_v2",
    "chainType": "Live",
    "bootNodes": [
      "/dns/parachain-1-connect-0.polkadot.io/tcp/443/wss/p2p/12D3KooWQ1Nv7gVooRRM1Dyk1J5BVYGRUEms5jsHT68wQpYKR9kA"
    ],
    "telemetryEndpoints": null,
    "protocolId": null,
    "properties": {
      "ss58Format": 42,
      "tokenDecimals": 12,
      "tokenSymbol": "ROC"
    },
    "relay_chain": "rococo",
    "para_id": 100,
    "consensusEngine": null,
    "lightSyncState": null,
    "genesis": {
      "raw": {
        "top": {
          "0x26aa394eea5630e07c48ae0c9558cef7f9cce9c888469bb1a0dceaa129672ef8": "0x0c5863756d756c75732d746573742d70617261636861696e",
          "0x0d715f2646c8f85767b5d2764bb2782604a74d81251e398fd8a0a4d55023bb3f": "0x64000000",
          "0x45323df7cc47150b3930e2666b0aa313878d434d6125b40443fe11fd292d13a4": "0x00000100",
          "0x5c0d1176a568c1f92944340dbfed9e9c530ebca703c85910e7164cb7d1c9e47b": "0x9ed7705e3c7da027ba0583a22a3212042f7e715d3c168ba14f1424e2bc111d00",
          "0xb7c36b2d9271a6e2b002e758c26ac364878d434d6125b40443fe11fd292d13a4": "0x00000100",
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da942cd783ab1dc80a5347fe6c6f20ea02b9ed7705e3c7da027ba0583a22a3212042f7e715d3c168ba14f1424e2bc111d00": "0x00000000000000000100000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "0x5c0d1176a568c1f92944340dbfed9e9c878d434d6125b40443fe11fd292d13a4": "0x03000000",
          "0xf0c365c3cf59d671eb72da0e7a4113c4878d434d6125b40443fe11fd292d13a4": "0x03000000",
          "0xbd2a529379475088d3e29a918cd47872878d434d6125b40443fe11fd292d13a4": "0x03000000",
          "0x26aa394eea5630e07c48ae0c9558cef7c21aab032aaa6e946ca50ad39ab66603": "0x01",
          "0x0d715f2646c8f85767b5d2764bb27826878d434d6125b40443fe11fd292d13a4": "0x00000100",
          "0x26aa394eea5630e07c48ae0c9558cef7a44704b568d21667356a5a050c118746b4def25cfda6ef3a00000000": "0x4545454545454545454545454545454545454545454545454545454545454545",
          "0xc2261276cc9d1f8598ea4b6a74b15c2f308ce9615de0775a82f8a94dc3d285a1": "0x01",
          "0xc2261276cc9d1f8598ea4b6a74b15c2f878d434d6125b40443fe11fd292d13a4": "0x03000000",
          "0xc2261276cc9d1f8598ea4b6a74b15c2f57c875e4cff74148e4628f264b974c80": "0x00000000000000100000000000000000",
          "0x26aa394eea5630e07c48ae0c9558cef7878d434d6125b40443fe11fd292d13a4": "0x03000000",
          "0x3a65787472696e7369635f696e646578": "0x00000000",
          "0x26aa394eea5630e07c48ae0c9558cef75684a022a34dd8bfa2baaf44f172b710": "0x01",
          "0x26aa394eea5630e07c48ae0c9558cef78a42f33323cb5ced3b44dd825fda9fcc": "0x4545454545454545454545454545454545454545454545454545454545454545",
          "0x3f1467a096bcd71a5b6a0c8155e20810878d434d6125b40443fe11fd292d13a4": "0x03000000"
        },
        "childrenDefault": {}
      }
    }
  }
}