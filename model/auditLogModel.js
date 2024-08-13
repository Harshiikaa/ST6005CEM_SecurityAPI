const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true },
    resource: { type: String, required: true }, // e.g., "User", "Order"
    resourceId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the affected resource
    timestamp: { type: Date, default: Date.now },
    details: { type: mongoose.Schema.Types.Mixed }, // Additional details, can be an object or string
    ip: { type: String } // Store IP address if needed
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);
