package com.app.yumdrop.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
        value = {"createdTime", "updatedTime"},
        allowGetters = true
)
public class CreateAndUpdateTimeModel implements Serializable {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_time", nullable = false, updatable = false)
    @CreatedDate
    private Date createdTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_time", nullable = false)
    @LastModifiedDate
    private Date updatedTime;

    @Override
    public String toString() {
        return "CreateAndUpdateTimeModel{" +
                "createdAt=" + createdTime +
                ", updatedAt=" + updatedTime +
                '}';
    }

    public Date getCreatedAt() {
        return createdTime;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdTime = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedTime;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedTime = updatedAt;
    }
}
