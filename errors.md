i get this from browser console
Failed to load resource: the server responded with a status of 500 ()
careers?_rsc=eR1lXBw3kMSHpu3s:1  Failed to load resource: the server responded with a status of 404 ()
api/admin/products:1  Failed to load resource: the server responded with a status of 500 ()
api/admin/products:1  Failed to load resource: the server responded with a status of 500 ()
api/admin/products:1  Failed to load resource: the server responded with a status of 500 ()
careers?_rsc=eR1lXBw3kMSHpu3s:1  Failed to load resource: the server responded with a status of 404 ()
terms?_rsc=eR1lXBw3kMSHpu3s:1  Failed to load resource: the server responded with a status of 404 ()
privacy?_rsc=eR1lXBw3kMSHpu3s:1  Failed to load resource: the server responded with a status of 404 ()


and this from vercel logs
2026-05-12 17:42:42.764 [error] Error fetching products: MongoServerSelectionError: C088E55CCB7F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:912:SSL alert number 80

    at ignore-listed frames {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-pzbvk4d-shard-00-01.6wb16e6.mongodb.net:27017' => [ServerDescription],
      'ac-pzbvk4d-shard-00-02.6wb16e6.mongodb.net:27017' => [ServerDescription],
      'ac-pzbvk4d-shard-00-00.6wb16e6.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-jbzs47-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  [cause]: MongoNetworkError: C088E55CCB7F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:912:SSL alert number 80
  
      at ignore-listed frames {
    errorLabelSet: Set(3) { 'SystemOverloadedError', 'RetryableError', 'ResetPool' },
    beforeHandshake: false,
    [cause]: [Error: C088E55CCB7F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:912:SSL alert number 80
    ] {
      library: 'SSL routines',
      reason: 'tlsv1 alert internal error',
      code: 'ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR'
    }
  }
}